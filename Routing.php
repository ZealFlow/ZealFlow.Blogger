<?php
    include './Router.php';

    class Routing {
        private $root_path_folder;
        private $router;
        
        /**
         * Constructor: initialize
         * Parameter: base_path
         */
        public function __construct($_root_path_folder) {
            $this->root_path_folder = $_root_path_folder;
            $this->router = new Router();
        }

        /**
         * add: initializes
         * Parameter: _root_path_fold, uri, callback: function()
         */
        public function add($Base_PATH, $uri, $callback = null) {
            if ($callback == null) {
                $this->router->addRoute($Base_PATH.$uri, $this->root_path_folder);
            } else {

                $replaceValues = $callback();
        
                if (is_array($replaceValues)) {
                    foreach ($replaceValues as $value) {
                        $currentUri = str_replace('${i}', $value, $uri);
                        $this->router->addRoute($Base_PATH . $currentUri, $this->root_path_folder);
                    }
                } else {
                    $this->router->addRoute($Base_PATH . $uri, $this->root_path_folder);
                }
            }
        }
    }
?>