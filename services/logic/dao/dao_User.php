<?php 
    class dao_User {
        public function login ($email, $password) {
            include_once '../ZealFlow.Blogger/services/logic/entities/E_User.php';
            include_once '../ZealFlow.Blogger/services/logic/dao/connectDB.php';

            $sql =  "select * from db_squirellblog.users where email = '{$email}' and password = '{$password}'";

            $conn = new ConnectDB('../ZealFlow.Blogger/services/logic/dao/connectDB.php');
            $result = $conn->db_squirellblog()->query($sql);

            $User = null;

            while ($row = $result->fetch()) {
                $User = new E_User (
                    $row['user_id'], 
                    $row['userName'], 
                    $row['password'], 
                    $row['email'], 
                    $row['fullName'], 
                    $row['createdDate'], 
                    $row['role'], 
                    $row['status'], 
                );
            }

            return $User;
        }
    }
?>