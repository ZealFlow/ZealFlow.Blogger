<?php 
    class bo_User {
        public function __construct(){}
        public function client_login ($email, $password) {
            include_once '../ZealFlow.Blogger/services/logic/dao/dao_User.php';

            $dao_User = new dao_User();
            return $dao_User->login($email, $password);
        }
    }
?>