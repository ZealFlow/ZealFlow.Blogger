<?php
    function slidebar () {
        $html =
            `
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/studio/posts">
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
            `;
        return $html;
    }
?>