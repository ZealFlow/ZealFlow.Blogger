<?php 
    if (!empty($_SESSION['PostEdit']))
        $info_Post = $_SESSION['PostEdit'];
?>
<form id="myForm" action=<?php echo $_SERVER['REQUEST_URI']?> method="post" enctype="multipart/form-data">
    <div class="row">
        <div class="col-md-8">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="title" name="txtTitle" value ="<?php echo htmlspecialchars($info_Post[0]->getTitle(), ENT_QUOTES, 'UTF-8'); ?>"></input>
                <label for="floatingInput">Tiêu đề bài viết</label>
            </div>
        </div>
        <div class="col-md-1">
            <button type="submit" class="btn btn-success" name="save" onclick="saveContent()" value="0">Lưu bài viết</button>
        </div>
        <div class="col-md-3">
            <button type="submit" class="btn btn-success" name="publish" onclick="saveContent()" value="1">Xuất bản</button>
        </div>
        <div class="input-group mb-3">
            <input type="file" name="file" class="form-control" id="inputGroupFile02">
            <label class="input-group-text" for="inputGroupFile02">Upload</label>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Mô tả ngắn</label>
            <textarea class="form-control" id="exampleFormControlTextarea3" rows="3" name="txtDescription"><?php echo htmlspecialchars($info_Post[0]->getShortDescription(), ENT_QUOTES, 'UTF-8'); ?></textarea>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Nhãn</span>
            <input type="text" class="form-control" placeholder="TagName" aria-label="TagName" aria-describedby="basic-addon1" name="txtTagName">
        </div>
    </div>
    <div id="mytextarea" name="content" contenteditable="true"></div>
</form>

<style>
    .tox-promotion {
        display: none;
    }
    .tox-statusbar__branding {
        display: none;
    }
</style>

<script>
    window.onload = function () {
        tinymce.init({
            selector: '#mytextarea'
        });
    };

    function saveContent() {
        var content = tinymce.get('mytextarea').getContent();
        var hiddenInput = document.createElement("input");

        hiddenInput.setAttribute("type", "hidden");
        hiddenInput.setAttribute("name", "content");
        hiddenInput.setAttribute("value", content);
        document.getElementById('myForm').appendChild(hiddenInput);
    }
</script>
