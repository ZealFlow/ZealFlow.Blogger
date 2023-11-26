<?php 
    class bo_Post {
        private $root_URL;
        public function __construct($_root_URL) {
            $this->root_URL = $_root_URL;
        }
        public function getPosts () {
            include_once $this->root_URL.'/logic/dao/dao_Post.php';

            $dao_Post = new dao_Post($this->root_URL);
            return $dao_Post->getPosts();
        }

        public function SearchPost ($content) {
            include_once $this->root_URL.'/logic/dao/dao_Post.php';

            $dao_Post = new dao_Post($this->root_URL);
            return $dao_Post->SearchPost($content);
        }

        public function Pagination ($pageNum) {
            include_once $this->root_URL.'/logic/dao/dao_Post.php';

            $dao_Post = new dao_Post($this->root_URL);
            return $dao_Post->Pagination($pageNum);
        }

        public function UpdatePost ($Post) {
            include_once $this->root_URL.'/logic/dao/dao_Post.php';

            $dao_Post = new dao_Post($this->root_URL);
            return $dao_Post->UpdatePost($Post);
        }

        public function EditPost ($Post) {
            include_once $this->root_URL.'/logic/dao/dao_Post.php';

            $dao_Post = new dao_Post($this->root_URL);
            return $dao_Post->EditPost($Post);
        }

        public function getPost_Status ($Status) {
            include_once $this->root_URL.'/logic/dao/dao_Post.php';

            $dao_Post = new dao_Post($this->root_URL);
            return $dao_Post->getPost_Status($Status);
        }

        public function getPost_ID ($id_post) {
            include_once $this->root_URL.'/logic/dao/dao_Post.php';

            $dao_Post = new dao_Post($this->root_URL);
            return $dao_Post->getPost_ID ($id_post);
        }

        public function deletePost ($idPost) {
            include_once $this->root_URL.'/logic/dao/dao_Post.php';

            $dao_Post = new dao_Post($this->root_URL);

            $dao_Post->deletePost($idPost);
        }
    };
?>