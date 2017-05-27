// If absolute URL from the remote server is provided, configure the CORS
    // header on that server. 跨域问题请参考CORS解决
    var pre_url = "../doc/";

    //TODO ：此处pdf数据来自后台
    var pdfs = ['1471-2148-14-100-S6.pdf', 'irsformw2.pdf', 'Letter-from-Ivan-March-2012.pdf'];
    var url = pre_url + pdfs[0];
    var pdf_logo_img = '\<img src="../img/pdf-logo.png" alt="">';

    //初始化文件列表
    for (var i = 0, len = pdfs.length; i < len; i++) {
      var element = pdfs[i];
      var single_pdf = '\<li>' + pdf_logo_img + '\<span>' + element + '\</span>' + '\</li>'
      $('div.filelist ul').append(single_pdf);
    }
    change_pdf();

    //点击列表查看pdf·
    $('div.filelist ul').on('click', 'li', function () {
      url = pre_url + $(this).find('span').html().trim();
      change_pdf();
    })

    //搜索对应列表
    var li_all = $('div.filelist ul li');
    var p_no_result = $('div.filelist p.no-result');
    //$('input[name="search_box').on('change',function(event){  
    $('button.search_button').on('click',function(event){serch_pdf(event);});
    //增加回车搜索
    $('input[name="search_box').keypress(function(event){
        if(event.which == 13) {  
            serch_pdf(event);
       }  
    });

    function serch_pdf(event){
      var filter = $('input[name="search_box"]').val();
      event.preventDefault();
      if (filter == "") {
        $('div.filelist ul li.hide').removeClass('hide')
      }
      li_all.map(function () {
        var file_name = $(this).find('span').html().trim();
        //return file_name.indexOf(filter) ? $(this).addClass('hide') : $(this);
        //return $(this).find('span:contains('+filter+')') ? $(this).addClass('hide') : $(this);
        return file_name.match(filter) ?  $(this):$(this).addClass('hide') ;

      })
      if (li_all.length == $('div.filelist ul li.hide').length) {
        p_no_result.removeClass('hide')
      } else {
        p_no_result.addClass('hide')
      }
    }

    //清除搜索
    $('.clean_filter').on('click', function () {
      initial_search();
    })

    //初始化搜索
    function initial_search() {
      $('input[name="search_box').val('');
      $('div.filelist ul li.hide').removeClass('hide');
      p_no_result.addClass('hide');
    }

    // The workerSrc property shall be specified.
    PDFJS.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
    var pdfDoc = null,
      pageNum = 1,
      pageRendering = false,
      pageNumPending = null,
      scale = 0.8,
      canvas = document.getElementById('the-canvas'),
      ctx = canvas.getContext('2d');
    /**
     * Get page info from document, resize canvas accordingly, and render page.
     * @param num Page number.
     */
    function renderPage(num) {
      pageRendering = true;
      // Using promise to fetch the page
      pdfDoc.getPage(num).then(function (page) {
        var viewport = page.getViewport(scale);
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);

        // Wait for rendering to finish
        renderTask.promise.then(function () {
          pageRendering = false;
          if (pageNumPending !== null) {
            // New page rendering is pending
            renderPage(pageNumPending);
            pageNumPending = null;
          }
        });
      });

      // Update page counters
      document.getElementById('page_num').textContent = pageNum;
    }

    /**
     * If another page rendering in progress, waits until the rendering is
     * finised. Otherwise, executes rendering immediately.
     */
    function queueRenderPage(num) {
      if (pageRendering) {
        pageNumPending = num;
      } else {
        renderPage(num);
      }
    }

    /**
     * Displays previous page.
     */
    function onPrevPage() {
      if (pageNum <= 1) {
        return;
      }
      pageNum--;
      queueRenderPage(pageNum);
    }
    document.getElementById('prev').addEventListener('click', onPrevPage);

    /**
     * Displays next page.
     */
    function onNextPage() {
      if (pageNum >= pdfDoc.numPages) {
        return;
      }
      pageNum++;
      queueRenderPage(pageNum);
    }
    document.getElementById('next').addEventListener('click', onNextPage);

    /**
     * Asynchronously downloads PDF.
     */
    function change_pdf() {
      PDFJS.getDocument(url).then(function (pdfDoc_) {
        pdfDoc = pdfDoc_;
        document.getElementById('page_count').textContent = pdfDoc.numPages;

        // Initial/first page rendering
        renderPage(pageNum);
      });
    }