<div class="container">
    <?php 
        $currentDate = date("Ymd"); //alt + shift + f
    ?>
    <div class="header-posts">
        <form action=<?php echo'/SquirrelBlog/post/create/'.$currentDate.$_SESSION["File_Post"].'/'?> method="post">
            <div class="d-grid gap-2 d-md-block">
                <button class="btn btn-primary" type="submit"><i class="fas fa-plus"></i> Bài đăng mới</button>
            </div>
        </form>
        <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Trạng thái
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="/SquirrelBlog/posts/">Tất cả</a>
                <a class="dropdown-item" href="/SquirrelBlog/posts?ac=status&&status=1">Đã công bố</a>
                <a class="dropdown-item" href="/SquirrelBlog/posts?ac=status&&status=0">Bài đăng nháp</a>
            </div>
        </div>
    </div>

    <div class="container-post">
        <?php
            $Posts = $_SESSION["Posts"];
            //Edit content of post
            function getPost ($content, $datepost) {
                $contentFile = filter_var($content, FILTER_SANITIZE_NUMBER_INT);
                $date = new DateTime($datepost);
                $datepost = $date->format('Ymd');
                $PostEdit = $datepost.$contentFile;
                return $PostEdit;
            }

            if ((!empty($Posts) && empty($_GET['q'])) || (!empty($Posts) && !empty($_GET['q']))) {
                foreach ($Posts as $post) {
                    echo ('
                        <a class="row g-0 card-post" href="/SquirrelBlog/post/edit/'.getPost($post->getContent(), $post->getDatePost()).'?postID='.$post->getPostId().'">
                            <div class="col-md-4 card-thumbnail">
                                <img src="/SquirrelBlog/uploads/thumbnail/' . $post->getThumnail() . '" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-content">
                                    <h5 class="card-title">' . $post->getTitle() . '</h5>
                                    <p class="card-text">' . $post->getShortDescription() . '</p>
                                    <p class="card-text"><small class="text-muted">Updated ' . $post->getDatePost() . '</small></p>
                                </div>
                            </div>
                            <div class="card-controll">
                                <div class="card-user">
                                    <div class="author-post">Lê Văn Hòa</div>
                                    <i class="fas fa-user-circle"></i>
                                </div>
                                <div>
                                    <div class="btnItem">
                                        <form action="/SquirrelBlog/posts?ac=delete&&id='.$post->getPostId().'" method="post">
                                            <button type="submit">
                                                <i class="fas fa-trash delete-post"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ');
                }
            } else if (empty($Posts) && !empty($_GET['q'])) {
                echo ('
                    <div>
                        <p>Không tìm thấy kết quả: ' . $_GET['q'] . '</p><br>
                        <p>Vui lòng kiểm tra lại chính tả hoặc thử từ khóa khác.</p>
                    </div>
                ');
            } else {
                echo ('
                    <div>
                        <p>Không có bài đăng nào</p><br>
                        <p>Các bài đăng bạn tạo sẽ xuất hiện ở đây</p>
                    </div>
                ');
            }
            include_once __DIR__ . '\components\paginations.php';
        ?>
    </div>
</div>

<script src="/SquirrelBlog/public/static/js/posts.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script>
    $(document).ready(function(){
        $('.dropdown-toggle').dropdown();
    });
</script>
