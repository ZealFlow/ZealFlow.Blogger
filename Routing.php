<?php
    include './Router.php';

    class Routing {
        private $Base_PATH;
        private $router;
        
        /**
         * Constructor: initialize
         * Parameter: base_path
         */
        public function __construct($_Base_PATH) {
            $this->Base_PATH = $_Base_PATH;
            $this->router = new Router();
        }

        public function add($_root_path_folder, $uri, $callback = null) {
            if ($callback == null) {
                $this->router->addRoute($this->Base_PATH.$uri, $_root_path_folder);
            } else {
                // Gọi callback để nhận mảng giá trị thay thế cho {i}
                $replaceValues = $callback();
        
                if (is_array($replaceValues)) {
                    // Duyệt qua từng giá trị trong mảng và thay thế trong $uri
                    foreach ($replaceValues as $value) {
                        // Thay thế mỗi giá trị thay thế trong $uri bằng giá trị thực tế
                        $currentUri = str_replace('${i}', $value, $uri);
                        // Thêm route với URI đã được thay thế
                        $this->router->addRoute($this->Base_PATH . $currentUri, $_root_path_folder);
                    }
                } else {
                    $this->router->addRoute($this->Base_PATH . $uri, $_root_path_folder);
                }
            }
        }
    }
?>