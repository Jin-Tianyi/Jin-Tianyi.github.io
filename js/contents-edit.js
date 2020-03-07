var num_ever_page = 2;//每页10条
//生成文章列表
function create_content_list(page,contents){
	debugger;
	var contents = contents;
	//最大页数
	var max_pages_num = Math.ceil(contents.length/num_ever_page);
	//每页最小下标
	var min_index = ((page-1)*num_ever_page);
	//每页最大下标
	var max_index = (min_index+num_ever_page) < contents.length?(min_index+num_ever_page):contents.length;
	var contents_str = '';
	var page_str = '';
	var article_list= document.getElementById('article-list');
	var pages= document.getElementById('pages');
	for (var i = min_index;i < max_index;i++){
		contents_str+='<div class="mod-b mod-art" data-aid="213665">\n' +
			'                 <div class="mod-thumb ">\n' +
			'                       <a class="transition" title="'+contents[i].title+'" href="'+contents[i].url+'" target="_blank">\n' +
			' <img class="lazy" src="'+contents[i].picture+'" alt="'+contents[i].title+'">\n' +
			'                       </a>\n' +
			'                 </div>\n' +
			'                 <div class="column-link-box">\n' +
			'                 </div>\n' +
			'                 <div class="mob-ctt">\n' +
			'                    <h2><a href="'+contents[i].url+'" class="transition msubstr-row2">'+contents[i].title+'</a></h2>\n' +
			'<div class="mob-author">\n' +
			'                         <div class="author-face">\n' +
			'                              <a href="'+contents[i].url+'"><img src="sy-img/59_1502432173.jpg"></a>\n' +
			'                         </div>\n' +
			'                         <a href="'+contents[i].url+'">\n' +
			'                            <span class="author-name ">'+contents[i].date+'</span>\n' +
			'                         </a>\n' +
			'                    </div>\n' +
			'                    <div class="mob-sub">'+contents[i].preview+'</div>\n' +
			'                 </div>\n' +
			'            </div>'
	};
	page_str += '   <ul class="pagination">' +
		'<li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true"><i class="icon icon-lt"></i></span></a></li>';
	for(var i = 1;i < max_pages_num+1;i++){
		if (contents === articles){
			if (i === page){
				page_str +='  <li class="active"><a onclick="change_page('+i+',articles)">'+i+'</a></li>';
			}else {
				page_str +=' <li><a onclick="change_page('+i+',articles)">'+i+'</a></li>';
			}
		}else if (contents === blogs){
			if (i === page){
				page_str +='  <li class="active"><a onclick="change_page('+i+',blogs)">'+i+'</a></li>';
			}else {
				page_str +=' <li><a onclick="change_page('+i+',blogs)">'+i+'</a></li>';
			}
		}else if (contents === notes){
			if (i === page){
				page_str +='  <li class="active"><a onclick="change_page('+i+',notes)">'+i+'</a></li>';
			}else {
				page_str +=' <li><a onclick="change_page('+i+',notes)">'+i+'</a></li>';
			}
		}else{
			if (i === page){
				page_str +='  <li class="active"><a onclick="change_page('+i+',shares)">'+i+'</a></li>';
			}else {
				page_str +=' <li><a onclick="change_page('+i+',shares)">'+i+'</a></li>';
			}
		}
		
	}
	page_str += '<li><a><i class="icon icon-gt"></i></a></li>' +
		'</ul>';
	article_list.innerHTML = contents_str;
	pages.innerHTML = page_str;
}

//切换页面
function change_page(page,contents){
	debugger;
	create_content_list(page,contents);
}