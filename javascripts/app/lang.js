/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
!function(t){function e(e){if(e&&""!==e){console.log("lol"),$(".lang-selector a").removeClass("active"),$(".lang-selector a[data-language-name='"+e+"']").addClass("active");for(var o=0;o<i.length;o++)$(".highlight."+i[o]).parent().hide();$(".highlight."+e).parent().show(),t.toc.calculateHeights(),$(window.location.hash).get(0)&&$(window.location.hash).get(0).scrollIntoView(!0)}}function o(t){if(history){var e=window.location.hash;e&&(e=e.replace(/^#+/,"")),history.pushState({},"","?"+t+"#"+e),localStorage.setItem("language",t)}}function a(t){var o=(t[0],localStorage.getItem("language"));i=t,""!==location.search.substr(1)&&-1!=jQuery.inArray(location.search.substr(1),i)?(e(location.search.substr(1)),localStorage.setItem("language",location.search.substr(1))):e(null!==o&&-1!=jQuery.inArray(o,i)?o:i[0])}function n(){setTimeout(function(){toc.setOption("showEffectSpeed",180)},50)}var i=[];t.setupLanguages=a,t.activateLanguage=e,$(function(){$(".lang-selector a").on("click",function(){var t=$(this).data("language-name");return o(t),e(t),$("h1,h2,h3").each(function(){var e=$('.tocify-item[data-unique="'+$(this).attr("id")+'"]');$(this).text()&&($(this).text($(this).attr(t+"_name")),console.log("child is :"+$(e).children("a").first().text()),$(e).children("a").first().text($(this).attr(t+"_name")))}),!1}),window.onpopstate=function(){console.log("what the pop ?"),e(window.location.search.substr(1))}});var c=function(){$(".tocify-wrapper").removeClass("open"),$("#nav-button").removeClass("open")},r=function(){var e="h1,h2,h3";console.log("selectors : "+e),t.toc=$("#toc").tocify({selectors:e,extendPage:!1,theme:"none",smoothScroll:!1,showEffectSpeed:0,hideEffectSpeed:180,ignoreSelector:".toc-ignore",highlightOffset:60,scrollTo:-1,scrollHistory:!0,hashGenerator:function(t,e){return e.prop("id")}}).data("toc-tocify"),$("#nav-button").click(function(){return $(".tocify-wrapper").toggleClass("open"),$("#nav-button").toggleClass("open"),!1}),$(".page-wrapper").click(c),$(".tocify-item").click(c)};$(r),$(n)}(window);