<?php
    include_once '../ZealFlow.Blogger/services/logic/bo/bo_User.php';

    class Ctrl_Login_Client {
        private $uerbo;
        private $root_URL;

        public function __construct($_root_URL)
        {
            $this->root_URL = $_root_URL;
            $this->uerbo = new bo_User();
        }
        
        public function invoke()
        {
            session_start();

            if (!empty($_SESSION['User'])) {

                if ($_SESSION['User'] != -1) {
                    header('Location: http://zealflow.io/studio/posts');
                    exit();
                }
            }

            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if (isset($_POST['txtEmail']) && isset($_POST['txtPassword'])) {
                    $Email =  $_POST['txtEmail'];
                    $Password =  $_POST['txtPassword'];
    
                    unset($_POST['txtEmail']);
                    unset($_POST['txtPassword']);
    
                    $User = $this->uerbo->client_login($Email, $Password);
    
                    if (!is_null($User)) {
                        $_SESSION['User'] = $User;
                        header('Location: http://zealflow.io/studio/posts');
                    } else {
                        $_SESSION['User'] = -1;
                        header('Location: http://zealflow.io/account/sign-in');
                    }
                    exit();
                }
            }
            
            include_once $this->root_URL . '\views\pages\client\loginPageClient.php';
        }
    }
?>