<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Squirrel Blog</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <base href="http://localhost/">
    <link href="/SquirrelBlog/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <script src="/SquirrelBlog/vendor/tinymce/js/tinymce/tinymce.min.js"></script>
    <link rel="stylesheet" href="/SquirrelBlog/vendor/tinymce/js/tinymce/skins/content/default/content.min.css">
    <link href="/SquirrelBlog/public/static/css/sb-admin-2.css" rel="stylesheet">
    <link href="/SquirrelBlog/public/static/css/stylePost.css" rel="stylesheet">
    <link href="/SquirrelBlog/public/static/css/stylePosts.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body id="page-top" class="saas-popup Test-saas-popup-1">
    <button class="activePopup btnpopupTest1">Click Pop 1</button>
    <div id="wrapper">
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/SquirrelBlog/posts/">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Squirrel</div>
            </a>
            <li class="nav-item active">
                <a class="nav-link" href="SquirrelBlog/posts/">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Quản lý bài đăng</span></a>
            </li>
        </ul>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>
                    <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" action="/SquirrelBlog/posts/search" method="get">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" name="q">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="submit">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </nav>
                <div class="container">
                    <?php
                        $pra = explode("/", $_SERVER['REQUEST_URI']);
                        $pra = array_filter($pra);

                        include_once 'logic/controllers/Ctrl_Post.php';
                        include_once 'logic/controllers/Ctrl_Page_Post.php';
                        include_once 'logic/controllers/Ctrl_Create_Post.php';
                        include_once 'logic/controllers/Ctrl_Edit_Post.php';
                        
                        
                        $init = new Ctrl_Posts(__DIR__);
                        $Pagination = new Ctrl_Page_Post (__DIR__);
                        $CreatePost = new Ctrl_Create_Post(__DIR__);
                        $EditPost = new Ctrl_Edit_Post(__DIR__);

                        if (explode("?", $pra[count($pra)])[0] == 'posts') {
                            $init->invoke();
                        } 
                        else if (explode("?", $pra[count($pra)])[0] == 'search') {
                            $init->invoke();
                        }
                        else if (explode("?", $pra[count($pra)-1])[0] == 'create') {
                            $CreatePost->invoke();
                        }
                        else if (explode("?", $pra[count($pra)-1])[0] == 'edit') {
                            $EditPost->invoke();
                        }
                        // else if (explode("?", $pra[count($pra)])[0] == '1')
                        //     echo "hello";
                        else if (in_array(explode("?", $pra[count($pra)])[0], $Pagination->getPage())) {
                            $Pagination->invoke();
                        }
                    ?>
                </div>
            </div>
        </div>
        <script src="http://127.0.0.1:5500/dist/newfile.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    </body>
</html>