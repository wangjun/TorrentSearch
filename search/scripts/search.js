/// <reference path="jquery-1.7.2.min.js" />

function initial(html, model) {
    for (var i in model) {
        var r = new RegExp('{{' + i + '}}', 'g');
        html = html.replace(r, model[i]);
    }

    return html;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function load() {
    var query = getParameterByName("q");
    if (query) {
        $('#search input[type=text]').val(query);
        search(query);
    }
}

function search(word, page) {
    var page2_content;
    var page3_content;
    var container = $('#gridItems');
    container.html('');
    $('#noData').hide();
    $('#gridItems').html('');
    $('#loading').fadeIn();
    $('#noResult').hide();
    $.get('http://www.torrentkitty.org/search/' + word + '/',function(responseText){
      $('#loading').hide();
      var data = responseText.match(/<tr><td class="name"((?!<\/tr).)*<\/tr>/g);
        if (data && data.length > 0) {
            for (var i in data) {
                var tr = data[i];
                var $tr = $(tr);

                var text = $tr.find('.name').text();
                var magnet = $tr.find('[rel=magnet]').attr('href');

                container.append(initial($('#itemHtml').html(), { text: text, magnet: decodeURI(magnet) }));
            }

        }
        else{
          $('#noResult').show();
        }
      
    });
    
    $.get('http://www.torrentkitty.org/search/' + word + '/2',function(responseText){
      $('#loading').hide();
      var data = responseText.match(/<tr><td class="name"((?!<\/tr).)*<\/tr>/g);
        if (data && data.length > 0) {
            for (var i in data) {
                var tr = data[i];
                var $tr = $(tr);

                var text = $tr.find('.name').text();
                var magnet = $tr.find('[rel=magnet]').attr('href');

                container.append(initial($('#itemHtml').html(), { text: text, magnet: decodeURI(magnet) }));
            }

        }
      
    });
    
    $.get('http://www.torrentkitty.org/search/' + word + '/3',function(responseText){
      $('#loading').hide();
      var data = responseText.match(/<tr><td class="name"((?!<\/tr).)*<\/tr>/g);
        if (data && data.length > 0) {
            for (var i in data) {
                var tr = data[i];
                var $tr = $(tr);

                var text = $tr.find('.name').text();
                var magnet = $tr.find('[rel=magnet]').attr('href');

                container.append(initial($('#itemHtml').html(), { text: text, magnet: decodeURI(magnet) }));
            }

        }
      
    });
    
    $.get('http://www.torrentkitty.org/search/' + word + '/4',function(responseText){
      $('#loading').hide();
      var data = responseText.match(/<tr><td class="name"((?!<\/tr).)*<\/tr>/g);
        if (data && data.length > 0) {
            for (var i in data) {
                var tr = data[i];
                var $tr = $(tr);

                var text = $tr.find('.name').text();
                var magnet = $tr.find('[rel=magnet]').attr('href');

                container.append(initial($('#itemHtml').html(), { text: text, magnet: decodeURI(magnet) }));
            }

        }
      
    });
    
    $.get('http://www.torrentkitty.org/search/' + word + '/5',function(responseText){
      $('#loading').hide();
      var data = responseText.match(/<tr><td class="name"((?!<\/tr).)*<\/tr>/g);
        if (data && data.length > 0) {
            for (var i in data) {
                var tr = data[i];
                var $tr = $(tr);

                var text = $tr.find('.name').text();
                var magnet = $tr.find('[rel=magnet]').attr('href');

                container.append(initial($('#itemHtml').html(), { text: text, magnet: decodeURI(magnet) }));
            }

        }
      
    });
    
    $.get('http://www.torrentkitty.org/search/' + word + '/6',function(responseText){
      $('#loading').hide();
      var data = responseText.match(/<tr><td class="name"((?!<\/tr).)*<\/tr>/g);
        if (data && data.length > 0) {
            for (var i in data) {
                var tr = data[i];
                var $tr = $(tr);

                var text = $tr.find('.name').text();
                var magnet = $tr.find('[rel=magnet]').attr('href');

                container.append(initial($('#itemHtml').html(), { text: text, magnet: decodeURI(magnet) }));
            }

        }
      
    });
    
    $.get('http://www.torrentkitty.org/search/' + word + '/7',function(responseText){
      $('#loading').hide();
      var data = responseText.match(/<tr><td class="name"((?!<\/tr).)*<\/tr>/g);
        if (data && data.length > 0) {
            for (var i in data) {
                var tr = data[i];
                var $tr = $(tr);

                var text = $tr.find('.name').text();
                var magnet = $tr.find('[rel=magnet]').attr('href');

                container.append(initial($('#itemHtml').html(), { text: text, magnet: decodeURI(magnet) }));
            }

        }
      
    });
    
    $.get('http://www.torrentkitty.org/search/' + word + '/8',function(responseText){
      $('#loading').hide();
      var data = responseText.match(/<tr><td class="name"((?!<\/tr).)*<\/tr>/g);
        if (data && data.length > 0) {
            for (var i in data) {
                var tr = data[i];
                var $tr = $(tr);

                var text = $tr.find('.name').text();
                var magnet = $tr.find('[rel=magnet]').attr('href');

                container.append(initial($('#itemHtml').html(), { text: text, magnet: decodeURI(magnet) }));
            }

        }
      
    });
    
    $.get('http://www.torrentkitty.org/search/' + word + '/9',function(responseText){
      $('#loading').hide();
      var data = responseText.match(/<tr><td class="name"((?!<\/tr).)*<\/tr>/g);
        if (data && data.length > 0) {
            for (var i in data) {
                var tr = data[i];
                var $tr = $(tr);

                var text = $tr.find('.name').text();
                var magnet = $tr.find('[rel=magnet]').attr('href');

                container.append(initial($('#itemHtml').html(), { text: text, magnet: decodeURI(magnet) }));
            }

        }
      
    });
    
    $.get('http://www.torrentkitty.org/search/' + word + '/10',function(responseText){
      $('#loading').hide();
      var data = responseText.match(/<tr><td class="name"((?!<\/tr).)*<\/tr>/g);
        if (data && data.length > 0) {
            for (var i in data) {
                var tr = data[i];
                var $tr = $(tr);

                var text = $tr.find('.name').text();
                var magnet = $tr.find('[rel=magnet]').attr('href');

                container.append(initial($('#itemHtml').html(), { text: text, magnet: decodeURI(magnet) }));
            }

        }
      
    });
} 

var a = 1;
$(function () {
    $('#search input[type=text]').keyup(function (event) {
        event = event ? event : window.event;
        if (event.keyCode == 13) {
            this.blur();

            var word = $(this).val();
            search(word);
        }
    });

    $('input[type=button]').click(function (event) {
        var word = $('#search input[type=text]').val();
        search(word);
    }).mousedown(function () {
        this.className = 'bg s_btn s_btn_h';
    }).mouseout(function () {
        this.className = 'bg s_btn';
    });

    load();
});
