<?php
    class dao_Post {
        private $root_URL;
        public function __construct($_root_URL) {
            $this->root_URL = $_root_URL;
        }
        public function getPosts () {  
            include_once $this->root_URL.'\logic\entities\E_Post.php';
            include_once $this->root_URL.'\logic\dao\connectDB.php';

            $Posts = array();

            $sql = "SELECT * FROM db_squirellblog.posts";

            $conn = new ConnectDB($this->root_URL);
            $result = $conn->db_squirellblog()->query($sql);

            while ($row = $result->fetch()) {
                array_push($Posts, 
                    new E_Post(
                        $row['post_id'], 
                        $row['title'], 
                        $row['content'], 
                        $row['datepost'], 
                        $row['thumnail'], 
                        $row['status'], 
                        $row['shortDescription'], 
                        $row['tagName'], 
                        $row['user_id']
                    )
                );
            }

            return $Posts;
        }

        public function getPost_ID ($id_Post) {  
            include_once $this->root_URL.'\logic\entities\E_Post.php';
            include_once $this->root_URL.'\logic\dao\connectDB.php';

            $Posts = array();

            $sql = "SELECT * FROM db_squirellblog.posts where post_id = $id_Post";

            $conn = new ConnectDB($this->root_URL);
            $result = $conn->db_squirellblog()->query($sql);

            while ($row = $result->fetch()) {
                array_push($Posts, 
                    new E_Post(
                        $row['post_id'], 
                        $row['title'], 
                        $row['content'], 
                        $row['datepost'], 
                        $row['thumnail'], 
                        $row['status'], 
                        $row['shortDescription'], 
                        $row['tagName'], 
                        $row['user_id']
                    )
                );
            }

            return $Posts;
        }

        public function SearchPost ($content) {
            include_once $this->root_URL.'\logic\entities\E_Post.php';
            include_once $this->root_URL.'\logic\dao\connectDB.php';

            $Posts = array();

            $sql = "SELECT * FROM db_squirellblog.posts where title like N'%{$content}%'";

            $conn = new ConnectDB($this->root_URL);
            $result = $conn->db_squirellblog()->query($sql);

            while ($row = $result->fetch()) {
                array_push($Posts, 
                    new E_Post(
                        $row['post_id'], 
                        $row['title'], 
                        $row['content'], 
                        $row['datepost'], 
                        $row['thumnail'], 
                        $row['status'], 
                        $row['shortDescription'], 
                        $row['tagName'], 
                        $row['user_id']
                    )
                );
            }

            return $Posts;
        }

        public function Pagination ($pageNum) {
            include_once $this->root_URL.'\logic\entities\E_Post.php';
            include_once $this->root_URL.'\logic\dao\connectDB.php';

            $Posts = array();

            $sql = '
                SELECT * FROM db_squirellblog.posts
                LIMIT 2 OFFSET '.$pageNum.'
            ';

            $conn = new ConnectDB($this->root_URL);
            $result = $conn->db_squirellblog()->query($sql);

            while ($row = $result->fetch()) {
                array_push($Posts, 
                    new E_Post(
                        $row['post_id'], 
                        $row['title'], 
                        $row['content'], 
                        $row['datepost'], 
                        $row['thumnail'], 
                        $row['status'], 
                        $row['shortDescription'], 
                        $row['tagName'], 
                        $row['user_id']
                    )
                );
            }

            return $Posts;
        }

        public function UpdatePost ($post) {
            include_once $this->root_URL.'\logic\entities\E_Post.php';
            include_once $this->root_URL.'\logic\dao\connectDB.php';
            
            $title = $post->getTitle();
            $content = $post->getContent();
            $datepost = date("Y-m-d");
            $thumbnail = $post->getThumnail();
            $status = $post->getStatus();
            $shortDescription = $post->getShortDescription();
            $tagName = $post->getTagName ();
            $user_id = '1';

            $conn = new ConnectDB($this->root_URL);

            $sql = "INSERT INTO db_squirellblog.posts (title, content, datepost, thumnail, status, shortDescription, tagName, user_id) 
            VALUES ('$title', '$content', '$datepost', '$thumbnail', '$status', '$shortDescription', '$tagName', $user_id)";

            $conn->db_squirellblog()->query($sql);
        }

        public function EditPost ($post) {
            include_once $this->root_URL.'\logic\entities\E_Post.php';
            include_once $this->root_URL.'\logic\dao\connectDB.php';
            
            $postID = $post->getPostId();
            $title = $post->getTitle();
            $content = $post->getContent();
            $datepost = date("Y-m-d");
            $thumbnail = $post->getThumnail();
            $status = $post->getStatus();
            $shortDescription = $post->getShortDescription();
            $tagName = $post->getTagName ();
            $user_id = 1;

            $conn = new ConnectDB($this->root_URL);

            $sql = "UPDATE `db_squirellblog`.`posts` 
                    SET `title` = '{$title}', 
                        `content` = '{$content}', 
                        `datepost` = '{$datepost}', 
                        `thumnail` = '{$thumbnail}', 
                        `status` = '{$status}', 
                        `shortDescription` = '{$shortDescription}', 
                        `tagName` = '{$tagName}' 
                    WHERE (`post_id` = '{$postID}');";

            $conn->db_squirellblog()->query($sql);
        }

        public function getPost_Status ($Status) {
            include_once $this->root_URL.'\logic\entities\E_Post.php';
            include_once $this->root_URL.'\logic\dao\connectDB.php';

            $Posts = array();

            $sql = "SELECT * FROM db_squirellblog.posts where status = '{$Status}'";

            $conn = new ConnectDB($this->root_URL);
            $result = $conn->db_squirellblog()->query($sql);

            while ($row = $result->fetch()) {
                array_push($Posts, 
                    new E_Post(
                        $row['post_id'], 
                        $row['title'], 
                        $row['content'], 
                        $row['datepost'], 
                        $row['thumnail'], 
                        $row['status'], 
                        $row['shortDescription'], 
                        $row['tagName'], 
                        $row['user_id']
                    )
                );
            }

            return $Posts;
        }

        public function deletePost ($idPost) {
            $sql = "DELETE FROM `db_squirellblog`.`posts` WHERE (`post_id` = '{$idPost}')";
            $conn = new ConnectDB($this->root_URL);
            $result = $conn->db_squirellblog()->query($sql);
        }
    };
?>

