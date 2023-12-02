<!DOCTYPE html>
<html lang="en">

    <?php
        include_once('Modules/Frontend/Theme/ZealFlow_layout/head.php');
    ?>

    <body id="page-top">
            <?php
                $pra = explode("/", $_SERVER['REQUEST_URI']);
                $pra = array_filter($pra);
                
                include_once 'logic/controllers/Ctrl_Post.php';
                include_once 'logic/controllers/Ctrl_Page_Post.php';
                include_once 'logic/controllers/Ctrl_Create_Post.php';
                include_once 'logic/controllers/Ctrl_Edit_Post.php';
                include_once 'logic/controllers/Ctrl_Login_Admin.php';
                include_once 'logic/controllers/Ctrl_Login_Client.php';
                
                $init = new Ctrl_Posts(__DIR__);
                $Pagination = new Ctrl_Page_Post(__DIR__);
                $CreatePost = new Ctrl_Create_Post(__DIR__);
                $EditPost = new Ctrl_Edit_Post(__DIR__);
                $Login_Client = new Ctrl_Login_Client(__DIR__);
                $Login_Admin = new Ctrl_Login_Admin(__DIR__);
                
                if (explode("?", $pra[count($pra)])[0] == 'posts') {
                    $init->invoke();
                } else if (explode("?", $pra[count($pra)])[0] == 'search') {
                    $init->invoke();
                } 
                else if (explode("?", $pra[count($pra) - 1])[0] == 'create') {
                    $CreatePost->invoke();
                } 
                else if (explode("?", $pra[count($pra) - 1])[0] == 'edit') {
                    $EditPost->invoke();
                }
                else if (explode("?", $pra[count($pra)])[0] == 'login' && explode("?", $pra[count($pra) - 1])[0] == 'admin')
                    $Login_Admin->invoke();
                else if (explode("?", $pra[count($pra)])[0] == 'sign-in' && explode("?", $pra[count($pra) - 1])[0] == 'account')
                    $Login_Client->invoke();
                else if (in_array(explode("?", $pra[count($pra)])[0], $Pagination->getPage())) {
                    $Pagination->invoke();
                }
            ?>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    </body>

</html>