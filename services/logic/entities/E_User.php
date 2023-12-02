<?php
    class E_User {
        private $user_id;
        private $userName;
        private $password;
        private $email;
        private $fullName;
        private $createdDate;
        private $role;
        private $status;

        public function __construct($_user_id, $_userName, $_password, $_email, $_fullName, $_createdDate, $_role, $_status) {
            $this->user_id = $_user_id;
            $this->userName = $_userName;
            $this->password = $_password;
            $this->email = $_email;
            $this->fullName = $_fullName;
            $this->createdDate = $_createdDate;
            $this->role = $_role;
            $this->status = $_status;
        }

        public function getUserID() {
            return $this->user_id;
        }

        public function setUserID($user_id) {
            $this->user_id = $user_id;
        }

        public function getUserName() {
            return $this->userName;
        }

        public function setUserName($user_name) {
            $this->userName = $user_name;
        }
        public function getPassword() {
            return $this->password;
        }

        public function setPassword($password) {
            $this->password = $password;
        }
        public function getEmail() {
            return $this->email;
        }

        public function setEmail($email) {
            $this->email = $email;
        }
        public function getFullName() {
            return $this->fullName;
        }

        public function setFullName($fullName) {
            $this->fullName = $fullName;
        }
        public function getCreatedDate() {
            return $this->createdDate;
        }

        public function setCreatedDate($createdDate) {
            $this->createdDate = $createdDate;
        }

        public function getRole() {
            return $this->role;
        }

        public function setRole($role) {
            $this->role = $role;
        }
        public function getStatus() {
            return $this->status;
        }

        public function setStatus($status) {
            $this->status = $status;
        }
    }
?>