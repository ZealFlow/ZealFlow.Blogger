<?php
    class Ctrl_Edit_Post {
        private $root_URL;
        public function __construct($_root_URL) {
            $this->root_URL = $_root_URL;
        }

        public function invoke () {
            include_once $this->root_URL.'\logic\bo\bo_Post.php';
            include_once $this->root_URL.'\logic\entities\E_Post.php';

            $bo_Post = new bo_Post($this->root_URL);

            session_start();

            $_SESSION['PostEdit'] = $bo_Post->getPost_ID($_GET["postID"]);

            if (empty($_GET['0']) || empty($_GET['1'])) {
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    if (isset($_POST["content"])) {
                        $content = $_POST["content"];
                        file_put_contents("./uploads/posts/" . $_SESSION['File_Post'] . ".html", $content);
                        $status = null;
                        if (!isset($_POST["save"]))
                            $status = 0;
                        else if (!isset($_POST["publish"]))
                            $status = 1;

                        $title = $_POST["txtTitle"];
                        $txtDescription = $_POST["txtDescription"];
                        $txtTagName = $_POST["txtTagName"];

                        $uploadDirectory = './uploads/thumbnail/';
                        $fileName = $_FILES['file']['name'];

                        $uploadFilePath = $uploadDirectory . basename($fileName);
                        $imageFileType = strtolower(pathinfo($uploadFilePath, PATHINFO_EXTENSION));

                        if (in_array($imageFileType, ['jpg', 'jpeg', 'png', 'gif'])) {
                            move_uploaded_file($_FILES['file']['tmp_name'], $uploadFilePath);
                        } 

                        $filePost = $_SESSION['File_Post'] . ".html";
                        $Post = new E_Post($_GET["postID"], $title, $filePost, "", $fileName, $status, $txtDescription, $txtTagName, "");

                        $bo_Post->EditPost($Post);
                    }
                }
            }
            
            include_once $this->root_URL.'\views\contents\post.php';
        }
    }
?>


