!function(e){"use strict";function t(){$(".tocify-wrapper").removeClass("open"),$("#nav-button").removeClass("open")}function r(r){$("#toc").remove(),$('<div id="toc"></div>').insertBefore(".toc-footer"),e.toc=$("#toc").tocify({selectors:"h1,h2["+r+"_name] ,h3["+r+"_name]",extendPage:!1,theme:"none",smoothScroll:!1,showEffectSpeed:0,hideEffectSpeed:180,ignoreSelector:".toc-ignore",highlightOffset:60,scrollTo:-1,scrollHistory:!0,hashGenerator:function(e,t){return t.prop("id")}}).data("toc-tocify"),$("#nav-button").click(function(){return $(".tocify-wrapper").toggleClass("open"),$("#nav-button").toggleClass("open"),!1}),$(".page-wrapper").click(t),$(".tocify-item").click(t)}e.makeToc=r,e.closeToc=t}(window);