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
!function(t){function e(t,e){if(t.text()){var a="h1";"H2"==t.prop("tagName")?a+=",h2":"H3"==t.prop("tagName")&&(a+=",h2,h3");var o=t.nextUntil(a);t.attr("c_name")&&!t.attr(e+"_name")?(t.hide(),void 0!=s&&t.prev().hide(),o.hide()):(t.show(),o.show()),t.text(t.attr(e+"_name"))}}function a(a){a&&""!==a&&a!==s&&($(".lang-selector a").removeClass("active"),$(".lang-selector a[data-language-name='"+a+"']").addClass("active"),"shell"!=a&&$(".prototype_start").nextUntil(".prototype_end").show(),$("h1,h2,h3:not('.subsection')").each(function(){var t=$(this);setTimeout(function(){e(t,a)},0)}),setTimeout(function(){"shell"==a&&$(".prototype_start").nextUntil(".prototype_end").hide(),$(".prototype_start").hide(),$(".subsection").each(function(){var t=$(this).nextUntil("h1,h2,"+$(this).prop("tagName").toLowerCase()+".subsection"),e=t.is(":visible");e?($(this).show(),$(this).attr(a+"_name",$(this).text())):($(this).hide(),$(this).removeAttr(a+"_name"))});for(var e=0;e<i.length;e++)$(".highlight."+i[e]).parent().hide();$(".highlight."+a).parent().show(),t.makeToc(a),setTimeout(function(){t.toc.calculateHeights()},0),s=a,$(window.location.hash).get(0)&&$(window.location.hash).get(0).scrollIntoView(!0)},0))}function o(t){if(history){var e=window.location.hash;e&&(e=e.replace(/^#+/,"")),history.pushState({},"","?"+t+"#"+e),localStorage.setItem("language",t)}}function n(t){var e=(t[0],localStorage.getItem("language"));i=t,""!==location.search.substr(1)&&-1!=jQuery.inArray(location.search.substr(1),i)?(a(location.search.substr(1)),localStorage.setItem("language",location.search.substr(1))):a(null!==e&&-1!=jQuery.inArray(e,i)?e:i[0])}var i=[],s=void 0;t.setupLanguages=n,t.activateLanguage=a,$(function(){$(".lang-selector a").on("click",function(){var t=$(this).data("language-name");return o(t),a(t),!1}),window.onpopstate=function(){a(window.location.search.substr(1))}})}(window);