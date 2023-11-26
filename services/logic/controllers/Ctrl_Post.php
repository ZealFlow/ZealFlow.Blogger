<?php
    class Ctrl_Posts {
        private $root_URL;
        public function __construct($_root_URL) {
            $this->root_URL = $_root_URL;
        }
        public function invoke () {
            include_once $this->root_URL.'\logic\bo\bo_Post.php';

            $bo_Post = new bo_Post($this->root_URL);

            session_start();

            $folder = './uploads/posts/';
            $files = scandir($folder, SCANDIR_SORT_DESCENDING);
            $files = array_diff($files, ['.', '..']);
            $latestFile = empty($files) ? null : pathinfo(reset($files), PATHINFO_FILENAME);

            $fileNewMore = intval($latestFile) + 1;
            
            $_SESSION["File_Post"] = $fileNewMore;

            if (empty($_GET['q']))
                $_SESSION["Posts"] = $bo_Post->getPosts();
            else
                $_SESSION["Posts"] = $bo_Post->SearchPost($_GET['q']);

            if (isset($_GET['status'])) {
                $_SESSION["Posts"] = $bo_Post->getPost_Status($_GET['status']);
            }

            if (isset($_GET['id'])) {
                $bo_Post->deletePost($_GET['id']);
                header('Location: http://localhost/SquirrelBlog/posts/');
                return;
            }
            
            include_once $this->root_URL.'\views\contents\posts.php';
        }
    }
?>


