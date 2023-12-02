<?php
    class Ctrl_Login_Admin {
        private $root_URL;
        public function __construct($_root_URL)
        {
            $this->root_URL = $_root_URL;
        }
        public function invoke()
        {
            include_once $this->root_URL . '\views\pages\admin\loginPageAdmin.php';
        }
    }
?>