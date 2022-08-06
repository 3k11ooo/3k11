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
/*
function mediaQueriesWin(){
	var width = $(window).width();
	if(width <= 768) {//横幅が768px以下の場合 
		$(".hasChild>a").on('click', function() {
			var parentElem =  $(this).parent();
			$(parentElem).toggleClass('active');
			$(parentElem).children('ul').stop().slideToggle(500);
			return false;//リンクの無効化
		});
	}else{//横幅が768px以上の場合
		$(".hasChild>a").off('click');
		$(".hasChild").removeClass('active');
		$('.hasChild').children('ul').css("display","");
	}
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
	mediaQueriesWin(); //ドロップダウンの関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
	mediaQueriesWin(); // ドロップダウンの関数を呼ぶ
});
*/