/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(t,e){var i=0,n=Array.prototype.slice,o=t.cleanData;t.cleanData=function(e){for(var i,n=0;null!=(i=e[n]);n++)try{t(i).triggerHandler("remove")}catch(s){}o(e)},t.widget=function(i,n,o){var s,a,r,u,l={},c=i.split(".")[0];i=i.split(".")[1],s=c+"-"+i,o||(o=n,n=t.Widget),t.expr[":"][s.toLowerCase()]=function(e){return!!t.data(e,s)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:o.version,_proto:t.extend({},o),_childConstructors:[]}),u=new n,u.options=t.widget.extend({},u.options),t.each(o,function(i,o){return t.isFunction(o)?(l[i]=function(){var t=function(){return n.prototype[i].apply(this,arguments)},e=function(t){return n.prototype[i].apply(this,t)};return function(){var i,n=this._super,s=this._superApply;return this._super=t,this._superApply=e,i=o.apply(this,arguments),this._super=n,this._superApply=s,i}}(),e):(l[i]=o,e)}),r.prototype=t.widget.extend(u,{widgetEventPrefix:a?u.widgetEventPrefix:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:s}),a?(t.each(a._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete a._childConstructors):n._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var o,s,a=n.call(arguments,1),r=0,u=a.length;u>r;r++)for(o in a[r])s=a[r][o],a[r].hasOwnProperty(o)&&s!==e&&(i[o]=t.isPlainObject(s)?t.isPlainObject(i[o])?t.widget.extend({},i[o],s):t.widget.extend({},s):s);return i},t.widget.bridge=function(i,o){var s=o.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,u=n.call(arguments,1),l=this;return a=!r&&u.length?t.widget.extend.apply(null,[a].concat(u)):a,this.each(r?function(){var n,o=t.data(this,s);return o?t.isFunction(o[a])&&"_"!==a.charAt(0)?(n=o[a].apply(o,u),n!==o&&n!==e?(l=n&&n.jquery?l.pushStack(n.get()):n,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+a+"'")}:function(){var e=t.data(this,s);e?e.option(a||{})._init():t.data(this,s,new o(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,n){var o,s,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},o=i.split("."),i=o.shift(),o.length){for(s=r[i]=t.widget.extend({},this.options[i]),a=0;o.length-1>a;a++)s[o[a]]=s[o[a]]||{},s=s[o[a]];if(i=o.pop(),n===e)return s[i]===e?null:s[i];s[i]=n}else{if(n===e)return this.options[i]===e?null:this.options[i];r[i]=n}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,o){var s,a=this;"boolean"!=typeof i&&(o=n,n=i,i=!1),o?(n=s=t(n),this.bindings=this.bindings.add(n)):(o=n,n=this.element,s=this.widget()),t.each(o,function(o,r){function u(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(u.guid=r.guid=r.guid||u.guid||t.guid++);var l=o.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,h=l[2];h?s.delegate(h,c,u):n.bind(c,u)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var o,s,a=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(o in s)o in i||(i[o]=s[o]);return this.element.trigger(i,n),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,o,s){"string"==typeof o&&(o={effect:o});var a,r=o?o===!0||"number"==typeof o?i:o.effect||i:e;o=o||{},"number"==typeof o&&(o={duration:o}),a=!t.isEmptyObject(o),o.complete=s,o.delay&&n.delay(o.delay),a&&t.effects&&t.effects.effect[r]?n[e](o):r!==e&&n[r]?n[r](o.duration,o.easing,s):n.queue(function(i){t(this)[e](),s&&s.call(n[0]),i()})}})}(jQuery);