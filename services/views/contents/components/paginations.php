<nav aria-label="Page navigation example">
  <ul class="pagination">
  <?php 
    function getPage () {
        $pra = explode("/", $_SERVER['REQUEST_URI']);
        $pra = array_filter($pra);
        $pageNum = explode("?", $pra[count($pra)])[0];
        if (!is_numeric($pageNum))
          $pageNum = 1;
        return $pageNum;
    }
  ?>
    <li class="page-item"><a class="page-link" href="/SquirrelBlog/posts/page/<?php if (getPage() - 1 == 0) echo 1; else echo getPage() - 1; ?>/">Previous</a></li>
    <li class="page-item"><a class="page-link" href="/SquirrelBlog/posts/page/1/">1</a></li>
    <li class="page-item"><a class="page-link" href="/SquirrelBlog/posts/page/2/">2</a></li>
    <li class="page-item"><a class="page-link" href="/SquirrelBlog/posts/page/<?php echo getPage() + 1 ?>/">Next</a></li>
  </ul>
</nav>