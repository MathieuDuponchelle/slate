!function(t){function e(){$("h1, h2, h3").each(function(){var t=$(this),e=t.nextUntil("h1, h2, h3");h.add({id:t.prop("id"),title:t.text(),body:e.text()})})}function o(){l=$(".content"),s=$(".dark-box"),r=$(".search-results"),$("#input-search").on("keyup",a)}function a(t){if(i(),r.addClass("visible"),27===t.keyCode&&(this.value=""),this.value){var e=h.search(this.value).filter(function(t){return t.score>1e-4});e.length?(r.empty(),$.each(e,function(t,e){var o=e.ref.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&");r.append("<li><a href='#"+e.ref+"'>"+$("#"+o).text()+"</a></li>")}),n.call(this)):(r.html("<li></li>"),$(".search-results li").text('No Results Found for "'+this.value+'"'))}else i(),r.removeClass("visible")}function n(){this.value&&l.highlight(this.value,c)}function i(){l.unhighlight(c)}var l,s,r,c=($(t),{element:"span",className:"search-highlight"}),h=new lunr.Index;h.ref("id"),h.field("title",{boost:10}),h.field("body"),h.pipeline.add(lunr.trimmer,lunr.stopWordFilter),$(e),$(o)}(window);