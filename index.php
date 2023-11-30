<?php
    class Routes {
        public function initRoutes () {
            include './Router.php';
            include_once './config/Database.php';
            
            $router = new Router();

            $conn = ConnectDB('localhost', 'root', 'Tin18082002', 'db_squirellblog');

            $sql = "SELECT count(*) as Record FROM db_squirellblog.posts";
            $result = $conn->query($sql);
            $row = ($result->fetch())['Record'];

            $currentDate = date("Ymd");
            
            $folder = './uploads/posts/';
            $files = scandir($folder, SCANDIR_SORT_DESCENDING);

            // Loại bỏ thư mục cha và thư mục hiện tại
            $files = array_diff($files, ['.', '..']);

            // Lấy tên file của file cuối cùng nếu có
            $latestFile = empty($files) ? null : pathinfo(reset($files), PATHINFO_FILENAME);
            $fileNewMore = intval($latestFile) + 1;

            $_SESSION["File_Post"] = $fileNewMore;

            $router->addRoute('/ZealFlow.Blogger/', '/services/index.php');
            $router->addRoute('/ZealFlow.Blogger/posts', '/services/index.php');
            $router->addRoute('/ZealFlow.Blogger/posts/', '/services/index.php');
            $router->addRoute('/ZealFlow.Blogger/posts/search', '/services/index.php');
            $router->addRoute('/ZealFlow.Blogger/post/create/'.$currentDate.$fileNewMore.'/', '/services/index.php');
            $router->addRoute('/ZealFlow.Blogger/login', '/services/login.php');

            //pagination posts page
            for ($i = 1; $i <= ceil($row/2); $i++)
                $router->addRoute('/ZealFlow.Blogger/posts/page/'.$i.'/', '/services/index.php');

            $sql1 = "SELECT content, datepost FROM db_squirellblog.posts";
            $result = $conn->query($sql1);
            while($row = $result->fetch()) {
                $contentFile = filter_var($row["content"], FILTER_SANITIZE_NUMBER_INT);
                $date = new DateTime($row["datepost"]);
                $datepost = $date->format('Ymd');
                $router->addRoute('/ZealFlow.Blogger/post/edit/'.$datepost.$contentFile.'', '/services/index.php');
            }
        }
    }
    
    // $routes = new Routes();
    // $routes->initRoutes();

    include_once './Routing.php';

    $router = new Routing('/studio');
    
    $router->add('/services/index.php', '/posts');
    $router->add('/services/index.php', '/posts/page/${i}', function (){
        return [1,2,3,4,5];
    });
?>