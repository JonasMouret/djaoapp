!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/static/cache/",t(t.s=172)}({1:function(n,e){n.exports=function(n){function e(n){"undefined"!=typeof console&&(console.error||console.log)("[Script Loader]",n)}try{"undefined"!=typeof execScript&&"undefined"!=typeof attachEvent&&"undefined"==typeof addEventListener?execScript(n):"undefined"!=typeof eval?eval.call(null,n):e("EvalError: No eval function available")}catch(n){e(n)}}},172:function(n,e,t){"use strict";t.r(e);t(3)},3:function(n,e,t){t(1)(t(4))},4:function(n,e){n.exports="/* Copyright (c) 2018, Djaodjin Inc.\n   see LICENSE\n*/\n\n/* global document jQuery */\n\n\n(function ($) {\n    \"use strict\";\n\n$(document).ready(function(){\n    (function(){\n        $('.sidebar-toggle').click(function(e){\n            e.preventDefault();\n            var $t = $(this);\n            var $icon = $t.children();\n            if($icon.hasClass('closed')){\n                $t.animate({left: 200}); // navbar has padding-left: 16px;\n                $('.navbar-brand-container').fadeOut();\n                $('.dashboard-nav').css('left', '-220px').show().animate({left: 0}, function(){\n                    $icon.removeClass('closed').addClass('opened');\n                });\n            } else {\n                $t.animate({left: 0});\n                $('.navbar-brand-container').fadeIn();\n                $('.dashboard-nav').animate({left: '-220px'}, function(){\n                    $(this).hide();\n                    $icon.removeClass('opened').addClass('closed');\n                });\n            }\n        });\n\n        $(window).resize(function(){\n            $('.dashboard-nav, .sidebar-toggle').attr('style', '');\n            $('.sidebar-toggle').children().removeClass('opened').addClass('closed');\n            $('.navbar-brand-container').attr('style', '');\n        });\n    })();\n});\n\n})(jQuery);\n"}});