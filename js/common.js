// スクリプト分割
function header(rootDir) {
    $.ajax({
        url: rootDir + "subContents/header.html", // htmlファイル読み込み
        cache: false, //キャッシュ
        async: false, //非同期
        dataType: 'html',
        success: function(html){

            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}

function footer(){
    $.ajax({
        url: "subContents/footer.html",
        cache: false,
        async: false, 
        dataType: 'html',
        success: function(html){
            document.write(html);
        }
    })
}

// ドロップダウンメニュー
$(".openbtn").click(function () {
    $(this).toggleClass('active');
});