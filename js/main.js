function ajax_forms() {
    var values;
    $("body").on("click", ".ajax-link", function(e) {
        e.preventDefault();
        var options = $(this).data("fancyoptions") || {};
        $(this).hasClass("fancybox-unstyled") && (options = {
            padding: 0,
            margin: 0,
            scrolling: "visible",
            closeBtn: !1,
            wrapCSS: "fancybox-unstyled"
        }), $(this).data("orderform") && (options.helpers = {
            overlay: {
                closeClick: !1
            }
        }), void 0 != $(this).data("post") ? ($.fancybox.showLoading(), $.ajax({
            type: "POST",
            dataType: "html",
            url: $(this).data("href"),
            data: $(this).data("post"),
            success: function(msg) {
                $.fancybox($.extend({
                    type: "inline",
                    content: msg,
                    fitToView: !0,
                    mouseWheel: !1,
                    scrollOutside: !0,
                    autoResize: !0,
                    helpers: {
                        overlay: {
                            locked: !1
                        }
                    }
                }, options))
            }
        })) : $.fancybox($.extend({
            type: "ajax",
            href: $(this).data("href"),
            fitToView: !1,
            mouseWheel: !1,
            scrollOutside: !0,
            autoResize: !0,
            helpers: {
                overlay: {
                    locked: !1
                }
            }
        }, options))
    }), $("body").on("submit", ".ajax-form", function(e) {
        e.preventDefault();
        var options = {};
        $(this).hasClass("fancybox-unstyled") && (options = {
            padding: 0,
            scrolling: "visible",
            closeBtn: !1,
            wrapCSS: "unstyled"
        }), values = $(this).serializeArray(), $(this).find('input[type="submit"]').attr("disabled", "disabled"), $.fancybox.showLoading(), $.ajax({
            type: "POST",
            dataType: "html",
            url: $(this).attr("action"),
            data: values,
            success: function(msg) {
                $.fancybox($.extend({
                    type: "inline",
                    content: msg,
                    fitToView: !1,
                    mouseWheel: !1,
                    scrollOutside: !0,
                    autoResize: !0,
                    helpers: {
                        overlay: {
                            locked: !1
                        }
                    }
                }, options))
            }
        })
    }), $("body").on("click", ".fancybox-skin .close", function() {
        $.fancybox.close()
    })
}

function ulogin_callback(token) {
    $.getJSON("//ulogin.ru/token.php?host=" + encodeURIComponent(location.toString()) + "&token=" + token + "&callback=?", function(data) {
        data = $.parseJSON(data.toString()), data.error || ($('.ulogin[name="name"]').val(data.first_name + " " + data.last_name), $('.ulogin[name="avatar"]').val(data.photo), $(".ulogin.photo").length && $(".ulogin.photo").attr("src", data.photo).closest(".form-row").show(), $('.ulogin[name="profile"]').val(data.profile))
    })
}! function(d) {
    function e(a) {
        var b = a || window.event,
            c = [].slice.call(arguments, 1),
            f = 0,
            e = 0,
            g = 0,
            a = d.event.fix(b);
        return a.type = "mousewheel", b.wheelDelta && (f = b.wheelDelta / 120), b.detail && (f = -b.detail / 3), g = f, void 0 !== b.axis && b.axis === b.HORIZONTAL_AXIS && (g = 0, e = -1 * f), void 0 !== b.wheelDeltaY && (g = b.wheelDeltaY / 120), void 0 !== b.wheelDeltaX && (e = -1 * b.wheelDeltaX / 120), c.unshift(a, f, e, g), (d.event.dispatch || d.event.handle).apply(this, c)
    }
    var c = ["DOMMouseScroll", "mousewheel"];
    if (d.event.fixHooks)
        for (var h = c.length; h;) d.event.fixHooks[c[--h]] = d.event.mouseHooks;
    d.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var a = c.length; a;) this.addEventListener(c[--a], e, !1);
            else this.onmousewheel = e
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = c.length; a;) this.removeEventListener(c[--a], e, !1);
            else this.onmousewheel = null
        }
    }, d.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
}(jQuery),
function(r, G, f, v) {
    var J = f("html"),
        n = f(r),
        p = f(G),
        b = f.fancybox = function() {
            b.open.apply(this, arguments)
        },
        I = navigator.userAgent.match(/msie/i),
        B = null,
        s = G.createTouch !== v,
        t = function(a) {
            return a && a.hasOwnProperty && a instanceof f
        },
        q = function(a) {
            return a && "string" === f.type(a)
        },
        E = function(a) {
            return q(a) && 0 < a.indexOf("%")
        },
        l = function(a, d) {
            var e = parseInt(a, 10) || 0;
            return d && E(a) && (e *= b.getViewport()[d] / 100), Math.ceil(e)
        },
        w = function(a, b) {
            return l(a, b) + "px"
        };
    f.extend(b, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !s,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, d) {
            return a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0)) ? (f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
                var g, h, j, m, l, k = {};
                "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
                    href: c.data("fancybox-href") || c.attr("href"),
                    title: c.data("fancybox-title") || c.attr("title"),
                    isDom: !0,
                    element: c
                }, f.metadata && f.extend(!0, k, c.metadata())) : k = c), g = d.href || k.href || (q(c) ? c : null), h = d.title !== v ? d.title : k.title || "", m = (j = d.content || k.content) ? "html" : d.type || k.type, !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null)), q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift())), j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && !g && k.isDom && (m = "inline", j = c)), f.extend(k, {
                    href: g,
                    type: m,
                    content: j,
                    title: h,
                    selector: l
                }), a[e] = k
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)) : void 0
        },
        cancel: function() {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
        },
        close: function(a) {
            b.cancel(), !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (b.isOpen && !0 !== a ? (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()) : (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut())))
        },
        play: function(a) {
            var d = function() {
                    clearTimeout(b.player.timer)
                },
                e = function() {
                    d(), b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
                },
                c = function() {
                    d(), p.unbind(".player"), b.player.isActive = !1, b.trigger("onPlayEnd")
                };
            !0 === a || !b.player.isActive && !1 !== a ? b.current && (b.current.loop || b.current.index < b.group.length - 1) && (b.player.isActive = !0, p.bind({
                "onCancel.player beforeClose.player": c,
                "onUpdate.player": e,
                "beforeLoad.player": d
            }), e(), b.trigger("onPlayStart")) : c()
        },
        next: function(a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
        },
        prev: function(a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function(a, d, e) {
            var c = b.current;
            c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
        },
        reposition: function(a, d) {
            var k, e = b.current,
                c = e ? e.wrap : null;
            c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
        },
        update: function(a) {
            var d = a && a.type,
                e = !d || "orientationchange" === d;
            e && (clearTimeout(B), B = null), b.isOpen && !B && (B = setTimeout(function() {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
            }, e && !s ? 0 : 300))
        },
        toggle: function(a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
        },
        hideLoading: function() {
            p.unbind(".loading"), f("#fancybox-loading").remove()
        },
        showLoading: function() {
            var a, d;
            b.hideLoading(), a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body"), p.bind("keydown.loading", function(a) {
                27 === (a.which || a.keyCode) && (a.preventDefault(), b.cancel())
            }), b.defaults.fixed || (d = b.getViewport(), a.css({
                position: "absolute",
                top: .5 * d.h + d.y,
                left: .5 * d.w + d.x
            }))
        },
        getViewport: function() {
            var a = b.current && b.current.locked || !1,
                d = {
                    x: n.scrollLeft(),
                    y: n.scrollTop()
                };
            return a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height()), d
        },
        unbindEvents: function() {
            b.wrap && t(b.wrap) && b.wrap.unbind(".fb"), p.unbind(".fb"), n.unbind(".fb")
        },
        bindEvents: function() {
            var d, a = b.current;
            a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) {
                var c = e.which || e.keyCode,
                    k = e.target || e.srcElement;
                return 27 === c && b.coming ? !1 : void(!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]")) && f.each(d, function(d, k) {
                    return 1 < a.group.length && k[c] !== v ? (b[d](k[c]), e.preventDefault(), !1) : -1 < f.inArray(c, k) ? (b[d](), e.preventDefault(), !1) : void 0
                }))
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) {
                for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                0 !== c && !j && 1 < b.group.length && !a.canShrink && (g > 0 || k > 0 ? b.prev(g > 0 ? "down" : "left") : (0 > g || 0 > k) && b.next(0 > g ? "up" : "right"), d.preventDefault())
            }))
        },
        trigger: function(a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                if (f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1))), !1 === e) return !1;
                c.helpers && f.each(c.helpers, function(d, e) {
                    e && b.helpers[d] && f.isFunction(b.helpers[d][a]) && b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
                }), p.trigger(a)
            }
        },
        isImage: function(a) {
            return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(a) {
            return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(a) {
            var e, c, d = {};
            if (a = l(a), e = b.group[a] || null, !e) return !1;
            if (d = f.extend(!0, {}, b.opts, e), e = d.margin, c = d.padding, "number" === f.type(e) && (d.margin = [e, e, e, e]), "number" === f.type(c) && (d.padding = [c, c, c, c]), d.modal && f.extend(!0, d, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: !1
                        }
                    }
                }), d.autoSize && (d.autoWidth = d.autoHeight = !0), "auto" === d.width && (d.autoWidth = !0), "auto" === d.height && (d.autoHeight = !0), d.group = b.group, d.index = a, b.coming = d, !1 === b.trigger("beforeLoad")) b.coming = null;
            else {
                if (c = d.type, e = d.href, !c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                if (b.isActive = !0, ("image" === c || "swf" === c) && (d.autoHeight = d.autoWidth = !1, d.scrolling = "visible"), "image" === c && (d.aspectRatio = !0), "iframe" === c && s && (d.scrolling = "scroll"), d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body"), f.extend(d, {
                        skin: f(".fancybox-skin", d.wrap),
                        outer: f(".fancybox-outer", d.wrap),
                        inner: f(".fancybox-inner", d.wrap)
                    }), f.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
                        d.skin.css("padding" + b, w(d.padding[a]))
                    }), b.trigger("onReady"), "inline" === c || "html" === c) {
                    if (!d.content || !d.content.length) return b._error("content")
                } else if (!e) return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function(a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            }), b._afterLoad()
        },
        _loadImage: function() {
            var a = b.imgPreload = new Image;
            a.onload = function() {
                this.onload = this.onerror = null, b.coming.width = this.width / b.opts.pixelRatio, b.coming.height = this.height / b.opts.pixelRatio, b._afterLoad()
            }, a.onerror = function() {
                this.onload = this.onerror = null, b._error("image")
            }, a.src = b.coming.href, !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function() {
            var a = b.coming;
            b.showLoading(), b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href,
                error: function(a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                },
                success: function(d, e) {
                    "success" === e && (a.content = d, b._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var a = b.coming,
                d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function() {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {}
            }), a.iframe.preload && (b.showLoading(), d.one("load", function() {
                f(this).data("ready", 1), s || f(this).bind("load.fb", b.update), f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), b._afterLoad()
            })), a.content = d.appendTo(a.inner), a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function() {
            var f, g, a = b.group,
                d = b.current,
                e = a.length,
                c = d.preload ? Math.min(d.preload, e - 1) : 0;
            for (g = 1; c >= g; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function() {
            var e, c, k, g, h, a = b.coming,
                d = b.current;
            if (b.hideLoading(), a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
                else {
                    switch (d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), b.unbindEvents(), e = a.content, c = a.type, k = a.scrolling, f.extend(b, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: d
                    }), g = a.href, c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
                                f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case "image":
                            e = a.tpl.image.replace("{href}", g);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) {
                                e += '<param name="' + a + '" value="' + b + '"></param>', h += " " + a + '="' + b + '"'
                            }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                    }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e), b.trigger("beforeShow"), a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k), b._setDimension(), b.reposition(), b.isOpen = !1, b.coming = null, b.bindEvents(), b.isOpened ? d.prevMethod && b.transitions[d.prevMethod]() : f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(), b.transitions[b.isOpened ? a.nextMethod : a.openMethod](), b._preloadImages()
                }
        },
        _setDimension: function() {
            var v, z, t, C, A, F, B, D, H, a = b.getViewport(),
                d = 0,
                e = !1,
                c = !1,
                e = b.wrap,
                k = b.skin,
                g = b.inner,
                h = b.current,
                c = h.width,
                j = h.height,
                m = h.minWidth,
                u = h.minHeight,
                n = h.maxWidth,
                p = h.maxHeight,
                s = h.scrolling,
                q = h.scrollOutside ? h.scrollbarWidth : 0,
                x = h.margin,
                y = l(x[1] + x[3]),
                r = l(x[0] + x[2]);
            if (e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp"), x = l(k.outerWidth(!0) - k.width()), v = l(k.outerHeight(!0) - k.height()), z = y + x, t = r + v, C = E(c) ? (a.w - z) * l(c) / 100 : c, A = E(j) ? (a.h - t) * l(j) / 100 : j, "iframe" === h.type) {
                if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
                    H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
                } catch (G) {}
            } else(h.autoWidth || h.autoHeight) && (g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp"));
            if (c = l(C), j = l(A), D = C / A, m = l(E(m) ? l(m, "w") - z : m), n = l(E(n) ? l(n, "w") - z : n), u = l(E(u) ? l(u, "h") - t : u), p = l(E(p) ? l(p, "h") - t : p), F = n, B = p, h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p)), z = a.w - y, r = a.h - r, h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), m > c && (c = m, j = l(c / D)), u > j && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p))), h.fitToView)
                if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
                    for (;
                        (a > z || y > r) && c > m && j > u && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), m > c && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
                else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
            q && "auto" === s && A > j && z > c + x + q && (c += q), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), e = (a > z || y > r) && c > m && j > u, c = h.aspectRatio ? F > c && B > j && C > c && A > j : (F > c || B > j) && (C > c || A > j), f.extend(h, {
                dim: {
                    width: w(a),
                    height: w(y)
                },
                origWidth: C,
                origHeight: A,
                canShrink: e,
                canExpand: c,
                wPadding: x,
                hPadding: v,
                wrapSpace: y - k.outerHeight(!0),
                skinSpace: k.height() - j
            }), !H && h.autoHeight && j > u && p > j && !c && g.height("auto")
        },
        _getPosition: function(a) {
            var d = b.current,
                e = b.getViewport(),
                c = d.margin,
                f = b.wrap.width() + c[1] + c[3],
                g = b.wrap.height() + c[0] + c[2],
                c = {
                    position: "absolute",
                    top: c[0],
                    left: c[3]
                };
            return d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x), c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio)), c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio)), c
        },
        _afterZoomIn: function() {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) {
                a.preventDefault(), b.close()
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), a.loop || a.index !== a.group.length - 1 ? b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()) : b.play(!1))
        },
        _afterZoomOut: function(a) {
            a = a || b.current, f(".fancybox-wrap").trigger("onReset").remove(), f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), b.trigger("afterClose", a)
        }
    }), b.transitions = {
        getOrigPosition: function() {
            var a = b.current,
                d = a.element,
                e = a.orig,
                c = {},
                f = 50,
                g = 50,
                h = a.hPadding,
                j = a.wPadding,
                m = b.getViewport();
            return !e && a.isDom && d.is(":visible") && (e = d.find("img:first"), e.length || (e = d)), t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio), ("fixed" === b.wrap.css("position") || a.locked) && (c.top -= m.y, c.left -= m.x), c = {
                top: w(c.top - h * a.topRatio),
                left: w(c.left - j * a.leftRatio),
                width: w(f + j),
                height: w(g + h)
            }
        },
        step: function(a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace,
                h = c.skinSpace;
            ("width" === f || "height" === f) && (e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e)))
        },
        zoomIn: function() {
            var a = b.current,
                d = a.pos,
                e = a.openEffect,
                c = "elastic" === e,
                k = f.extend({
                    opacity: 1
                }, d);
            delete k.position, c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = .1)) : "fade" === e && (d.opacity = .1), b.wrap.css(d).animate(k, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            })
        },
        zoomOut: function() {
            var a = b.current,
                d = a.closeEffect,
                e = "elastic" === d,
                c = {
                    opacity: .1
                };
            e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = .1)), b.wrap.animate(c, {
                duration: "none" === d ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: e ? this.step : null,
                complete: b._afterZoomOut
            })
        },
        changeIn: function() {
            var g, a = b.current,
                d = a.nextEffect,
                e = a.pos,
                c = {
                    opacity: 1
                },
                f = b.direction;
            e.opacity = .1, "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px")), "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: b._afterZoomIn
            })
        },
        changeOut: function() {
            var a = b.previous,
                d = a.prevEffect,
                e = {
                    opacity: .1
                },
                c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px"), a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function() {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    }, b.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !s,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function(a) {
            a = f.extend({}, this.defaults, a), this.overlay && this.close(), this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent), this.fixed = !1, a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(a) {
            var d = this;
            a = f.extend({}, this.defaults, a), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a), this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update()), a.closeClick && this.overlay.bind("click.overlay", function(a) {
                return f(a.target).hasClass("fancybox-overlay") ? (b.isActive ? b.close() : d.close(), !1) : void 0
            }), this.overlay.css(a.css).show()
        },
        close: function() {
            var a, b;
            n.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b)), f(".fancybox-overlay").remove().hide(), f.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var b, a = "100%";
            this.overlay.width(a).height("100%"), I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width()), this.overlay.width(a).height(p.height())
        },
        onReady: function(a, b) {
            var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0), e || this.create(a), a.locked && this.fixed && b.fixed && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1), !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(a, b) {
            var e, c;
            b.locked && (!1 !== this.margin && (f("*").filter(function() {
                return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c)), this.open(a)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(a) {
            this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    }, b.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(a) {
            var d = b.current,
                e = d.title,
                c = a.type;
            if (f.isFunction(e) && (e = e.call(d.element, d)), q(e) && "" !== f.trim(e)) {
                switch (d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>"), c) {
                    case "inside":
                        c = b.skin;
                        break;
                    case "outside":
                        c = b.wrap;
                        break;
                    case "over":
                        c = b.inner;
                        break;
                    default:
                        c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c)
            }
        }
    }, f.fn.fancybox = function(a) {
        var d, e = f(this),
            c = this.selector || "",
            k = function(g) {
                var k, l, h = f(this).blur(),
                    j = d;
                !g.ctrlKey && !g.altKey && !g.shiftKey && !g.metaKey && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && "" !== l && "nofollow" !== l && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
            };
        return a = a || {}, d = a.index || 0, c && !1 !== a.live ? p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k) : e.unbind("click.fb-start").bind("click.fb-start", k), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, p.ready(function() {
        var a, d;
        if (f.scrollbarWidth === v && (f.scrollbarWidth = function() {
                var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    b = a.children(),
                    b = b.innerWidth() - b.height(99).innerWidth();
                return a.remove(), b
            }), f.support.fixedPosition === v) {
            a = f.support, d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove(), a.fixedPosition = e
        }
        f.extend(b.defaults, {
            scrollbarWidth: f.scrollbarWidth(),
            fixed: f.support.fixedPosition,
            parent: f("body")
        }), a = f(r).width(), J.addClass("fancybox-lock-test"), d = f(r).width(), J.removeClass("fancybox-lock-test"), f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery),
function($) {
    var F = $.fancybox;
    F.helpers.buttons = {
        defaults: {
            skipSingle: !1,
            position: "top",
            tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'
        },
        list: null,
        buttons: null,
        beforeLoad: function(opts, obj) {
            return opts.skipSingle && obj.group.length < 2 ? (obj.helpers.buttons = !1, void(obj.closeBtn = !0)) : void(obj.margin["bottom" === opts.position ? 2 : 0] += 30)
        },
        onPlayStart: function() {
            this.buttons && this.buttons.play.attr("title", "Pause slideshow").addClass("btnPlayOn")
        },
        onPlayEnd: function() {
            this.buttons && this.buttons.play.attr("title", "Start slideshow").removeClass("btnPlayOn")
        },
        afterShow: function(opts, obj) {
            var buttons = this.buttons;
            buttons || (this.list = $(opts.tpl).addClass(opts.position).appendTo("body"), buttons = {
                prev: this.list.find(".btnPrev").click(F.prev),
                next: this.list.find(".btnNext").click(F.next),
                play: this.list.find(".btnPlay").click(F.play),
                toggle: this.list.find(".btnToggle").click(F.toggle),
                close: this.list.find(".btnClose").click(F.close)
            }), obj.index > 0 || obj.loop ? buttons.prev.removeClass("btnDisabled") : buttons.prev.addClass("btnDisabled"), obj.loop || obj.index < obj.group.length - 1 ? (buttons.next.removeClass("btnDisabled"), buttons.play.removeClass("btnDisabled")) : (buttons.next.addClass("btnDisabled"), buttons.play.addClass("btnDisabled")), this.buttons = buttons, this.onUpdate(opts, obj)
        },
        onUpdate: function(opts, obj) {
            var toggle;
            this.buttons && (toggle = this.buttons.toggle.removeClass("btnDisabled btnToggleOn"), obj.canShrink ? toggle.addClass("btnToggleOn") : obj.canExpand || toggle.addClass("btnDisabled"))
        },
        beforeClose: function() {
            this.list && this.list.remove(), this.list = null, this.buttons = null
        }
    }
}(jQuery),
function($) {
    "use strict";
    var F = $.fancybox,
        format = function(url, rez, params) {
            return params = params || "", "object" === $.type(params) && (params = $.param(params, !0)), $.each(rez, function(key, value) {
                url = url.replace("$" + key, value || "")
            }), params.length && (url += (url.indexOf("?") > 0 ? "&" : "?") + params), url
        };
    F.helpers.media = {
        defaults: {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "opaque",
                    enablejsapi: 1
                },
                type: "iframe",
                url: "//www.youtube.com/embed/$3"
            },
            vimeo: {
                matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                type: "iframe",
                url: "//player.vimeo.com/video/$1"
            },
            metacafe: {
                matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                params: {
                    autoPlay: "yes"
                },
                type: "swf",
                url: function(rez, params, obj) {
                    return obj.swf.flashVars = "playerVars=" + $.param(params, !0), "//www.metacafe.com/fplayer/" + rez[1] + "/.swf"
                }
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: "swf",
                url: "//www.dailymotion.com/swf/video/$1"
            },
            twitvid: {
                matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                params: {
                    autoplay: 0
                },
                type: "iframe",
                url: "//www.twitvid.com/embed.php?guid=$1"
            },
            twitpic: {
                matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                type: "image",
                url: "//twitpic.com/show/full/$1/"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            google_maps: {
                matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                type: "iframe",
                url: function(rez) {
                    return "//maps.google." + rez[1] + "/" + rez[3] + rez[4] + "&output=" + (rez[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            }
        },
        beforeLoad: function(opts, obj) {
            var what, item, rez, params, url = obj.href || "",
                type = !1;
            for (what in opts)
                if (opts.hasOwnProperty(what) && (item = opts[what], rez = url.match(item.matcher))) {
                    type = item.type, params = $.extend(!0, {}, item.params, obj[what] || ($.isPlainObject(opts[what]) ? opts[what].params : null)), url = "function" === $.type(item.url) ? item.url.call(this, rez, params, obj) : format(item.url, rez, params);
                    break
                }
            type && (obj.href = url, obj.type = type, obj.autoHeight = !1)
        }
    }
}(jQuery),
function($) {
    var F = $.fancybox;
    F.helpers.thumbs = {
        defaults: {
            width: 50,
            height: 50,
            position: "bottom",
            source: function(item) {
                var href;
                return item.element && (href = $(item.element).find("img").attr("src")), !href && "image" === item.type && item.href && (href = item.href), href
            }
        },
        wrap: null,
        list: null,
        width: 0,
        init: function(opts, obj) {
            var list, that = this,
                thumbWidth = opts.width,
                thumbHeight = opts.height,
                thumbSource = opts.source;
            list = "";
            for (var n = 0; n < obj.group.length; n++) list += '<li><a style="width:' + thumbWidth + "px;height:" + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
            this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo("body"), this.list = $("<ul>" + list + "</ul>").appendTo(this.wrap), $.each(obj.group, function(i) {
                var href = thumbSource(obj.group[i]);
                href && $("<img />").load(function() {
                    var widthRatio, heightRatio, parent, width = this.width,
                        height = this.height;
                    that.list && width && height && (widthRatio = width / thumbWidth, heightRatio = height / thumbHeight, parent = that.list.children().eq(i).find("a"), widthRatio >= 1 && heightRatio >= 1 && (widthRatio > heightRatio ? (width = Math.floor(width / heightRatio), height = thumbHeight) : (width = thumbWidth, height = Math.floor(height / widthRatio))), $(this).css({
                        width: width,
                        height: height,
                        top: Math.floor(thumbHeight / 2 - height / 2),
                        left: Math.floor(thumbWidth / 2 - width / 2)
                    }), parent.width(thumbWidth).height(thumbHeight), $(this).hide().appendTo(parent).fadeIn(300))
                }).attr("src", href)
            }), this.width = this.list.children().eq(0).outerWidth(!0), this.list.width(this.width * (obj.group.length + 1)).css("left", Math.floor(.5 * $(window).width() - (obj.index * this.width + .5 * this.width)))
        },
        beforeLoad: function(opts, obj) {
            return obj.group.length < 2 ? void(obj.helpers.thumbs = !1) : void(obj.margin["top" === opts.position ? 0 : 2] += opts.height + 15)
        },
        afterShow: function(opts, obj) {
            this.list ? this.onUpdate(opts, obj) : this.init(opts, obj), this.list.children().removeClass("active").eq(obj.index).addClass("active")
        },
        onUpdate: function(opts, obj) {
            this.list && this.list.stop(!0).animate({
                left: Math.floor(.5 * $(window).width() - (obj.index * this.width + .5 * this.width))
            }, 150)
        },
        beforeClose: function() {
            this.wrap && this.wrap.remove(), this.wrap = null, this.list = null, this.width = 0
        }
    }
}(jQuery),
function($, window, document, undefined) {
    function Owl(element, options) {
        this.settings = null, this.options = $.extend({}, Owl.Defaults, options), this.$element = $(element), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, $.each(["onResize", "onThrottledResize"], $.proxy(function(i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this)
        }, this)), $.each(Owl.Plugins, $.proxy(function(key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this)
        }, this)), $.each(Owl.Workers, $.proxy(function(priority, worker) {
            this._pipe.push({
                filter: worker.filter,
                run: $.proxy(worker.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    Owl.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, Owl.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, Owl.Type = {
        Event: "event",
        State: "state"
    }, Owl.Plugins = {}, Owl.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(cache) {
            var margin = this.settings.margin || "",
                grid = !this.settings.autoWidth,
                rtl = this.settings.rtl,
                css = {
                    width: "auto",
                    "margin-left": rtl ? margin : "",
                    "margin-right": rtl ? "" : margin
                };
            !grid && this.$stage.children().css(css), cache.css = css
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                merge = null,
                iterator = this._items.length,
                grid = !this.settings.autoWidth,
                widths = [];
            for (cache.items = {
                    merge: !1,
                    width: width
                }; iterator--;) merge = this._mergers[iterator], merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge, cache.items.merge = merge > 1 || cache.items.merge, widths[iterator] = grid ? width * merge : this._items[iterator].width();
            this._widths = widths
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var clones = [],
                items = this._items,
                settings = this.settings,
                view = Math.max(2 * settings.items, 4),
                size = 2 * Math.ceil(items.length / 2),
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                append = "",
                prepend = "";
            for (repeat /= 2; repeat--;) clones.push(this.normalize(clones.length / 2, !0)), append += items[clones[clones.length - 1]][0].outerHTML, clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, !0)), prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
            this._clones = clones, $(append).addClass("cloned").appendTo(this.$stage), $(prepend).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var rtl = this.settings.rtl ? 1 : -1, size = this._clones.length + this._items.length, iterator = -1, previous = 0, current = 0, coordinates = []; ++iterator < size;) previous = coordinates[iterator - 1] || 0, current = this._widths[this.relative(iterator)] + this.settings.margin, coordinates.push(previous + current * rtl);
            this._coordinates = coordinates
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var padding = this.settings.stagePadding,
                coordinates = this._coordinates,
                css = {
                    width: Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + 2 * padding,
                    "padding-left": padding || "",
                    "padding-right": padding || ""
                };
            this.$stage.css(css)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(cache) {
            var iterator = this._coordinates.length,
                grid = !this.settings.autoWidth,
                items = this.$stage.children();
            if (grid && cache.items.merge)
                for (; iterator--;) cache.css.width = this._widths[this.relative(iterator)], items.eq(iterator).css(cache.css);
            else grid && (cache.css.width = cache.items.width, items.css(cache.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0, cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current)), this.reset(cache.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var inner, outer, i, n, rtl = this.settings.rtl ? 1 : -1,
                padding = 2 * this.settings.stagePadding,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                matches = [];
            for (i = 0, n = this._coordinates.length; n > i; i++) inner = this._coordinates[i - 1] || 0, outer = Math.abs(this._coordinates[i]) + padding * rtl, (this.op(inner, "<=", begin) && this.op(inner, ">", end) || this.op(outer, "<", begin) && this.op(outer, ">", end)) && matches.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + matches.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], Owl.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find("img"), nestedSelector = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : undefined, width = this.$element.children(nestedSelector).width(), imgs.length && 0 >= width && this.preloadAutoWidthImages(imgs)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = $("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, Owl.prototype.setup = function() {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;
        overwrites ? ($.each(overwrites, function(breakpoint) {
            viewport >= breakpoint && breakpoint > match && (match = Number(breakpoint))
        }), settings = $.extend({}, this.options, overwrites[match]), delete settings.responsive, settings.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + match))) : settings = $.extend({}, this.options), (null === this.settings || this._breakpoint !== match) && (this.trigger("change", {
            property: {
                name: "settings",
                value: settings
            }
        }), this._breakpoint = match, this.settings = settings, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, Owl.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, Owl.prototype.prepare = function(item) {
        var event = this.trigger("prepare", {
            content: item
        });
        return event.data || (event.data = $("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(item)), this.trigger("prepared", {
            content: event.data
        }), event.data
    }, Owl.prototype.update = function() {
        for (var i = 0, n = this._pipe.length, filter = $.proxy(function(p) {
                return this[p]
            }, this._invalidated), cache = {}; n > i;)(this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) && this._pipe[i].run(cache), i++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, Owl.prototype.width = function(dimension) {
        switch (dimension = dimension || Owl.Width.Default) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, Owl.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, Owl.prototype.onThrottledResize = function() {
        window.clearTimeout(this.resizeTimer), this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, Owl.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
    }, Owl.prototype.registerEventHandlers = function() {
        $.support.transition && this.$stage.on($.support.transition.end + ".owl.core", $.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(window, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", $.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", $.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", $.proxy(this.onDragEnd, this)))
    }, Owl.prototype.onDragStart = function(event) {
        var stage = null;
        3 !== event.which && ($.support.transform ? (stage = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), stage = {
            x: stage[16 === stage.length ? 12 : 4],
            y: stage[16 === stage.length ? 13 : 5]
        }) : (stage = this.$stage.position(), stage = {
            x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
            y: stage.top
        }), this.is("animating") && ($.support.transform ? this.animate(stage.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === event.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = $(event.target), this._drag.stage.start = stage, this._drag.stage.current = stage, this._drag.pointer = this.pointer(event), $(document).on("mouseup.owl.core touchend.owl.core", $.proxy(this.onDragEnd, this)), $(document).one("mousemove.owl.core touchmove.owl.core", $.proxy(function(event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));
            $(document).on("mousemove.owl.core touchmove.owl.core", $.proxy(this.onDragMove, this)), Math.abs(delta.x) < Math.abs(delta.y) && this.is("valid") || (event.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, Owl.prototype.onDragMove = function(event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);
        this.is("dragging") && (event.preventDefault(), this.settings.loop ? (minimum = this.coordinates(this.minimum()), maximum = this.coordinates(this.maximum() + 1) - minimum, stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum) : (minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0, stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull)), this._drag.stage.current = stage, this.animate(stage.x))
    }, Owl.prototype.onDragEnd = function(event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? "left" : "right";
        $(document).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== delta.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(stage.x, 0 !== delta.x ? direction : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = direction, (Math.abs(delta.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, Owl.prototype.closest = function(coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();
        return this.settings.freeDrag || $.each(coordinates, $.proxy(function(index, value) {
            return coordinate > value - pull && value + pull > coordinate ? position = index : this.op(coordinate, "<", value) && this.op(coordinate, ">", coordinates[index + 1] || value - width) && (position = "left" === direction ? index + 1 : index), -1 === position
        }, this)), this.settings.loop || (this.op(coordinate, ">", coordinates[this.minimum()]) ? position = coordinate = this.minimum() : this.op(coordinate, "<", coordinates[this.maximum()]) && (position = coordinate = this.maximum())), position
    }, Owl.prototype.animate = function(coordinate) {
        var animate = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), animate && (this.enter("animating"), this.trigger("translate")), $.support.transform3d && $.support.transition ? this.$stage.css({
            transform: "translate3d(" + coordinate + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : animate ? this.$stage.animate({
            left: coordinate + "px"
        }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: coordinate + "px"
        })
    }, Owl.prototype.is = function(state) {
        return this._states.current[state] && this._states.current[state] > 0
    }, Owl.prototype.current = function(position) {
        if (position === undefined) return this._current;
        if (0 === this._items.length) return undefined;
        if (position = this.normalize(position), this._current !== position) {
            var event = this.trigger("change", {
                property: {
                    name: "position",
                    value: position
                }
            });
            event.data !== undefined && (position = this.normalize(event.data)), this._current = position, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, Owl.prototype.invalidate = function(part) {
        return "string" === $.type(part) && (this._invalidated[part] = !0, this.is("valid") && this.leave("valid")), $.map(this._invalidated, function(v, i) {
            return i
        })
    }, Owl.prototype.reset = function(position) {
        position = this.normalize(position), position !== undefined && (this._speed = 0, this._current = position, this.suppress(["translate", "translated"]), this.animate(this.coordinates(position)), this.release(["translate", "translated"]))
    }, Owl.prototype.normalize = function(position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;
        return !$.isNumeric(position) || 1 > n ? position = undefined : (0 > position || position >= n + m) && (position = ((position - m / 2) % n + n) % n + m / 2), position
    }, Owl.prototype.relative = function(position) {
        return position -= this._clones.length / 2, this.normalize(position, !0)
    }, Owl.prototype.maximum = function(relative) {
        var j, settings = this.settings,
            maximum = this._coordinates.length,
            boundary = Math.abs(this._coordinates[maximum - 1]) - this._width,
            i = -1;
        if (settings.loop) maximum = this._clones.length / 2 + this._items.length - 1;
        else if (settings.autoWidth || settings.merge)
            for (; maximum - i > 1;) Math.abs(this._coordinates[j = maximum + i >> 1]) < boundary ? i = j : maximum = j;
        else maximum = settings.center ? this._items.length - 1 : this._items.length - settings.items;
        return relative && (maximum -= this._clones.length / 2), Math.max(maximum, 0)
    }, Owl.prototype.minimum = function(relative) {
        return relative ? 0 : this._clones.length / 2
    }, Owl.prototype.items = function(position) {
        return position === undefined ? this._items.slice() : (position = this.normalize(position, !0), this._items[position])
    }, Owl.prototype.mergers = function(position) {
        return position === undefined ? this._mergers.slice() : (position = this.normalize(position, !0), this._mergers[position])
    }, Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function(index) {
                return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2
            };
        return position === undefined ? $.map(this._clones, function(v, i) {
            return map(i)
        }) : $.map(this._clones, function(v, i) {
            return v === position ? map(i) : null
        })
    }, Owl.prototype.speed = function(speed) {
        return speed !== undefined && (this._speed = speed), this._speed
    }, Owl.prototype.coordinates = function(position) {
        var coordinate = null;
        return position === undefined ? $.map(this._coordinates, $.proxy(function(coordinate, index) {
            return this.coordinates(index)
        }, this)) : (this.settings.center ? (coordinate = this._coordinates[position], coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : coordinate = this._coordinates[position - 1] || 0, coordinate)
    }, Owl.prototype.duration = function(from, to, factor) {
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed)
    }, Owl.prototype.to = function(position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (0 > distance),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(distance) > items / 2 && (distance += -1 * direction * items), position = current + distance, revert = ((position - minimum) % items + items) % items + minimum, revert !== position && maximum >= revert - distance && revert - distance > 0 && (current = revert - distance, position = revert, this.reset(current))) : this.settings.rewind ? (maximum += 1, position = (position % maximum + maximum) % maximum) : position = Math.max(minimum, Math.min(maximum, position)), this.speed(this.duration(current, position, speed)), this.current(position), this.$element.is(":visible") && this.update()
    }, Owl.prototype.next = function(speed) {
        speed = speed || !1, this.to(this.relative(this.current()) + 1, speed)
    }, Owl.prototype.prev = function(speed) {
        speed = speed || !1, this.to(this.relative(this.current()) - 1, speed)
    }, Owl.prototype.onTransitionEnd = function(event) {
        return event !== undefined && (event.stopPropagation(), (event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
    }, Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window) width = $(this.options.responsiveBaseElement).width();
        else if (window.innerWidth) width = window.innerWidth;
        else {
            if (!document.documentElement || !document.documentElement.clientWidth) throw "Can not detect viewport width.";
            width = document.documentElement.clientWidth
        }
        return width
    }, Owl.prototype.replace = function(content) {
        this.$stage.empty(), this._items = [], content && (content = content instanceof jQuery ? content : $(content)), this.settings.nestedItemSelector && (content = content.find("." + this.settings.nestedItemSelector)), content.filter(function() {
            return 1 === this.nodeType
        }).each($.proxy(function(index, item) {
            item = this.prepare(item), this.$stage.append(item), this._items.push(item), this._mergers.push(1 * item.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, Owl.prototype.add = function(content, position) {
        var current = this.relative(this._current);
        position = position === undefined ? this._items.length : this.normalize(position, !0), content = content instanceof jQuery ? content : $(content), this.trigger("add", {
            content: content,
            position: position
        }), content = this.prepare(content), 0 === this._items.length || position === this._items.length ? (0 === this._items.length && this.$stage.append(content), 0 !== this._items.length && this._items[position - 1].after(content), this._items.push(content), this._mergers.push(1 * content.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[position].before(content), this._items.splice(position, 0, content), this._mergers.splice(position, 0, 1 * content.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this._items[current] && this.reset(this._items[current].index()), this.invalidate("items"), this.trigger("added", {
            content: content,
            position: position
        })
    }, Owl.prototype.remove = function(position) {
        position = this.normalize(position, !0), position !== undefined && (this.trigger("remove", {
            content: this._items[position],
            position: position
        }), this._items[position].remove(), this._items.splice(position, 1), this._mergers.splice(position, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: position
        }))
    }, Owl.prototype.preloadAutoWidthImages = function(images) {
        images.each($.proxy(function(i, element) {
            this.enter("pre-loading"), element = $(element), $(new Image).one("load", $.proxy(function(e) {
                element.attr("src", e.target.src), element.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", element.attr("src") || element.attr("data-src") || element.attr("data-src-retina"))
        }, this))
    }, Owl.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), $(document).off(".owl.core"), this.settings.responsive !== !1 && (window.clearTimeout(this.resizeTimer), this.off(window, "resize", this._handlers.onThrottledResize));
        for (var i in this._plugins) this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, Owl.prototype.op = function(a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case "<":
                return rtl ? a > b : b > a;
            case ">":
                return rtl ? b > a : a > b;
            case ">=":
                return rtl ? b >= a : a >= b;
            case "<=":
                return rtl ? a >= b : b >= a
        }
    }, Owl.prototype.on = function(element, event, listener, capture) {
        element.addEventListener ? element.addEventListener(event, listener, capture) : element.attachEvent && element.attachEvent("on" + event, listener)
    }, Owl.prototype.off = function(element, event, listener, capture) {
        element.removeEventListener ? element.removeEventListener(event, listener, capture) : element.detachEvent && element.detachEvent("on" + event, listener)
    }, Owl.prototype.trigger = function(name, data, namespace, state, enter) {
        var status = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            handler = $.camelCase($.grep(["on", name, namespace], function(v) {
                return v
            }).join("-").toLowerCase()),
            event = $.Event([name, "owl", namespace || "carousel"].join(".").toLowerCase(), $.extend({
                relatedTarget: this
            }, status, data));
        return this._supress[name] || ($.each(this._plugins, function(name, plugin) {
            plugin.onTrigger && plugin.onTrigger(event)
        }), this.register({
            type: Owl.Type.Event,
            name: name
        }), this.$element.trigger(event), this.settings && "function" == typeof this.settings[handler] && this.settings[handler].call(this, event)), event
    }, Owl.prototype.enter = function(name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            this._states.current[name] === undefined && (this._states.current[name] = 0), this._states.current[name]++
        }, this))
    }, Owl.prototype.leave = function(name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            this._states.current[name]--
        }, this))
    }, Owl.prototype.register = function(object) {
        if (object.type === Owl.Type.Event) {
            if ($.event.special[object.name] || ($.event.special[object.name] = {}), !$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function(e) {
                    return !_default || !_default.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : _default.apply(this, arguments)
                }, $.event.special[object.name].owl = !0
            }
        } else object.type === Owl.Type.State && (this._states.tags[object.name] ? this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags) : this._states.tags[object.name] = object.tags, this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
            return $.inArray(tag, this._states.tags[object.name]) === i
        }, this)))
    }, Owl.prototype.suppress = function(events) {
        $.each(events, $.proxy(function(index, event) {
            this._supress[event] = !0
        }, this))
    }, Owl.prototype.release = function(events) {
        $.each(events, $.proxy(function(index, event) {
            delete this._supress[event]
        }, this))
    }, Owl.prototype.pointer = function(event) {
        var result = {
            x: null,
            y: null
        };
        return event = event.originalEvent || event || window.event, event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event, event.pageX ? (result.x = event.pageX, result.y = event.pageY) : (result.x = event.clientX, result.y = event.clientY), result
    }, Owl.prototype.difference = function(first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        }
    }, $.fn.owlCarousel = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this),
                data = $this.data("owl.carousel");
            data || (data = new Owl(this, "object" == typeof option && option), $this.data("owl.carousel", data), $.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(i, event) {
                data.register({
                    type: Owl.Type.Event,
                    name: event
                }), data.$element.on(event + ".owl.carousel.core", $.proxy(function(e) {
                    e.namespace && e.relatedTarget !== this && (this.suppress([event]), data[event].apply(this, [].slice.call(arguments, 1)), this.release([event]))
                }, data))
            })), "string" == typeof option && "_" !== option.charAt(0) && data[option].apply(data, args)
        })
    }, $.fn.owlCarousel.Constructor = Owl
}(window.Zepto || window.jQuery, window, document),
function($, window, document, undefined) {
    var Animate = function(scope) {
        this.core = scope, this.core.options = $.extend({}, Animate.Defaults, this.core.options), this.swapping = !0, this.previous = undefined, this.next = undefined, this.handlers = {
            "change.owl.carousel": $.proxy(function(e) {
                e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": $.proxy(function(e) {
                e.namespace && (this.swapping = "translated" == e.type)
            }, this),
            "translate.owl.carousel": $.proxy(function(e) {
                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    Animate.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, Animate.prototype.swap = function() {
        if (1 === this.core.settings.items && $.support.animation && $.support.transition) {
            this.core.speed(0);
            var left, clear = $.proxy(this.clear, this),
                previous = this.core.$stage.children().eq(this.previous),
                next = this.core.$stage.children().eq(this.next),
                incoming = this.core.settings.animateIn,
                outgoing = this.core.settings.animateOut;
            this.core.current() !== this.previous && (outgoing && (left = this.core.coordinates(this.previous) - this.core.coordinates(this.next), previous.one($.support.animation.end, clear).css({
                left: left + "px"
            }).addClass("animated owl-animated-out").addClass(outgoing)), incoming && next.one($.support.animation.end, clear).addClass("animated owl-animated-in").addClass(incoming))
        }
    }, Animate.prototype.clear = function(e) {
        $(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, Animate.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) this.core.$element.off(handler, this.handlers[handler]);
        for (property in Object.getOwnPropertyNames(this)) "function" != typeof this[property] && (this[property] = null)
    }, $.fn.owlCarousel.Constructor.Plugins.Animate = Animate
}(window.Zepto || window.jQuery, window, document),
function($, window, document, undefined) {
    var Autoplay = function(carousel) {
        this._core = carousel, this._interval = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": $.proxy(function(e) {
                e.namespace && "settings" === e.property.name && (this._core.settings.autoplay ? this.play() : this.stop())
            }, this),
            "initialized.owl.carousel": $.proxy(function(e) {
                e.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": $.proxy(function(e, t, s) {
                e.namespace && this.play(t, s)
            }, this),
            "stop.owl.autoplay": $.proxy(function(e) {
                e.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": $.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": $.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = $.extend({}, Autoplay.Defaults, this._core.options)
    };
    Autoplay.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, Autoplay.prototype.play = function(timeout, speed) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._interval = window.setInterval($.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || document.hidden || this._core.next(speed || this._core.settings.autoplaySpeed)
        }, this), timeout || this._core.settings.autoplayTimeout))
    }, Autoplay.prototype.stop = function() {
        this._core.is("rotating") && (window.clearInterval(this._interval), this._core.leave("rotating"))
    }, Autoplay.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, Autoplay.prototype.destroy = function() {
        var handler, property;
        this.stop();
        for (handler in this._handlers) this._core.$element.off(handler, this._handlers[handler]);
        for (property in Object.getOwnPropertyNames(this)) "function" != typeof this[property] && (this[property] = null)
    }, $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay
}(window.Zepto || window.jQuery, window, document),
function($, window, document, undefined) {
    "use strict";
    var Navigation = function(carousel) {
        this._core = carousel, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": $.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": $.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": $.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }, this),
            "changed.owl.carousel": $.proxy(function(e) {
                e.namespace && "position" == e.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": $.proxy(function(e) {
                e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": $.proxy(function(e) {
                e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = $.extend({}, Navigation.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    Navigation.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, Navigation.prototype.initialize = function() {
        var override, settings = this._core.settings;
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $("<div>").addClass(settings.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = $("<" + settings.navElement + ">").addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on("click", $.proxy(function(e) {
            this.prev(settings.navSpeed)
        }, this)), this._controls.$next = $("<" + settings.navElement + ">").addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on("click", $.proxy(function(e) {
            this.next(settings.navSpeed)
        }, this)), settings.dotsData || (this._templates = [$("<div>").addClass(settings.dotClass).append($("<span>")).prop("outerHTML")]), this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $("<div>").addClass(settings.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", $.proxy(function(e) {
            var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();
            e.preventDefault(), this.to(index, settings.dotsSpeed)
        }, this));
        for (override in this._overrides) this._core[override] = $.proxy(this[override], this)
    }, Navigation.prototype.destroy = function() {
        var handler, control, property, override;
        for (handler in this._handlers) this.$element.off(handler, this._handlers[handler]);
        for (control in this._controls) this._controls[control].remove();
        for (override in this.overides) this._core[override] = this._overrides[override];
        for (property in Object.getOwnPropertyNames(this)) "function" != typeof this[property] && (this[property] = null)
    }, Navigation.prototype.update = function() {
        var i, j, k, lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(!0),
            settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
        if ("page" !== settings.slideBy && (settings.slideBy = Math.min(settings.slideBy, settings.items)), settings.dots || "page" == settings.slideBy)
            for (this._pages = [], i = lower, j = 0, k = 0; upper > i; i++) {
                if (j >= size || 0 === j) {
                    if (this._pages.push({
                            start: Math.min(maximum, i - lower),
                            end: i - lower + size - 1
                        }), Math.min(maximum, i - lower) === maximum) break;
                    j = 0, ++k
                }
                j += this._core.mergers(this._core.relative(i))
            }
    }, Navigation.prototype.draw = function() {
        var difference, settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;
        this._controls.$relative.toggleClass("disabled", !settings.nav || disabled), settings.nav && (this._controls.$previous.toggleClass("disabled", !loop && index <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !loop && index >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !settings.dots || disabled), settings.dots && (difference = this._pages.length - this._controls.$absolute.children().length, settings.dotsData && 0 !== difference ? this._controls.$absolute.html(this._templates.join("")) : difference > 0 ? this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0])) : 0 > difference && this._controls.$absolute.children().slice(difference).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass("active"))
    }, Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;
        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
        }
    }, Navigation.prototype.current = function() {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function(page, index) {
            return page.start <= current && page.end >= current
        }, this)).pop()
    }, Navigation.prototype.getPosition = function(successor) {
        var position, length, settings = this._core.settings;
        return "page" == settings.slideBy ? (position = $.inArray(this.current(), this._pages), length = this._pages.length, successor ? ++position : --position, position = this._pages[(position % length + length) % length].start) : (position = this._core.relative(this._core.current()), length = this._core.items().length, successor ? position += settings.slideBy : position -= settings.slideBy), position
    }, Navigation.prototype.next = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(!0), speed)
    }, Navigation.prototype.prev = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(!1), speed)
    }, Navigation.prototype.to = function(position, speed, standard) {
        var length;
        standard ? $.proxy(this._overrides.to, this._core)(position, speed) : (length = this._pages.length, $.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed))
    }, $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation
}(window.Zepto || window.jQuery, window, document),
function(factory) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], factory) : factory(jQuery)
}(function($) {
    "use strict";

    function parseDateString(dateString) {
        if (dateString instanceof Date) return dateString;
        if (String(dateString).match(matchers)) return String(dateString).match(/^[0-9]*$/) && (dateString = Number(dateString)), String(dateString).match(/\-/) && (dateString = String(dateString).replace(/\-/g, "/")), new Date(dateString);
        throw new Error("Couldn't cast `" + dateString + "` to a date object.")
    }

    function escapedRegExp(str) {
        var sanitize = str.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(sanitize)
    }

    function strftime(offsetObject) {
        return function(format) {
            var directives = format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (directives)
                for (var i = 0, len = directives.length; len > i; ++i) {
                    var directive = directives[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        regexp = escapedRegExp(directive[0]),
                        modifier = directive[1] || "",
                        plural = directive[3] || "",
                        value = null;
                    directive = directive[2], DIRECTIVE_KEY_MAP.hasOwnProperty(directive) && (value = DIRECTIVE_KEY_MAP[directive], value = Number(offsetObject[value])), null !== value && ("!" === modifier && (value = pluralize(plural, value)), "" === modifier && 10 > value && (value = "0" + value.toString()), format = format.replace(regexp, value.toString()))
                }
            return format = format.replace(/%%/, "%")
        }
    }

    function pluralize(format, count) {
        var plural = "s",
            singular = "";
        return format && (format = format.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === format.length ? plural = format[0] : (singular = format[0], plural = format[1])), 1 === Math.abs(count) ? singular : plural
    }
    var instances = [],
        matchers = [],
        defaultOptions = {
            precision: 100,
            elapse: !1
        };
    matchers.push(/^[0-9]*$/.source), matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), matchers = new RegExp(matchers.join("|"));
    var DIRECTIVE_KEY_MAP = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            w: "weeks",
            d: "daysToWeek",
            D: "totalDays",
            H: "hours",
            M: "minutes",
            S: "seconds"
        },
        Countdown = function(el, finalDate, options) {
            this.el = el, this.$el = $(el), this.interval = null, this.offset = {}, this.options = $.extend({}, defaultOptions), this.instanceNumber = instances.length, instances.push(this), this.$el.data("countdown-instance", this.instanceNumber), options && ("function" == typeof options ? (this.$el.on("update.countdown", options), this.$el.on("stoped.countdown", options), this.$el.on("finish.countdown", options)) : this.options = $.extend({}, defaultOptions, options)), this.setFinalDate(finalDate), this.start()
        };
    $.extend(Countdown.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var self = this;
            this.update(), this.interval = setInterval(function() {
                self.update.call(self)
            }, this.options.precision)
        },
        stop: function() {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        },
        toggle: function() {
            this.interval ? this.stop() : this.start()
        },
        pause: function() {
            this.stop()
        },
        resume: function() {
            this.start()
        },
        remove: function() {
            this.stop.call(this), instances[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        },
        setFinalDate: function(value) {
            this.finalDate = parseDateString(value)
        },
        update: function() {
            if (0 === this.$el.closest("html").length) return void this.remove();
            var newTotalSecsLeft, hasEventsAttached = void 0 !== $._data(this.el, "events"),
                now = new Date;
            newTotalSecsLeft = this.finalDate.getTime() - now.getTime(), newTotalSecsLeft = Math.ceil(newTotalSecsLeft / 1e3), newTotalSecsLeft = !this.options.elapse && 0 > newTotalSecsLeft ? 0 : Math.abs(newTotalSecsLeft), this.totalSecsLeft !== newTotalSecsLeft && hasEventsAttached && (this.totalSecsLeft = newTotalSecsLeft, this.elapsed = now >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - now.getFullYear())
            }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
        },
        dispatchEvent: function(eventName) {
            var event = $.Event(eventName + ".countdown");
            event.finalDate = this.finalDate, event.elapsed = this.elapsed, event.offset = $.extend({}, this.offset), event.strftime = strftime(this.offset), this.$el.trigger(event)
        }
    }), $.fn.countdown = function() {
        var argumentsArray = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var instanceNumber = $(this).data("countdown-instance");
            if (void 0 !== instanceNumber) {
                var instance = instances[instanceNumber],
                    method = argumentsArray[0];
                Countdown.prototype.hasOwnProperty(method) ? instance[method].apply(instance, argumentsArray.slice(1)) : null === String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (instance.setFinalDate.call(instance, method), instance.start()) : $.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, method))
            } else new Countdown(this, argumentsArray[0], argumentsArray[1])
        })
    }
}),
function(factory) {
    "function" == typeof define && define.amd ? define(["jquery"], factory) : factory("object" == typeof exports ? require("jquery") : jQuery)
}(function(jQuery) {
    var S2 = function() {
            if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var S2 = jQuery.fn.select2.amd;
            var S2;
            return function() {
                    if (!S2 || !S2.requirejs) {
                        S2 ? require = S2 : S2 = {};
                        var requirejs, require, define;
                        ! function(undef) {
                            function hasProp(obj, prop) {
                                return hasOwn.call(obj, prop)
                            }

                            function normalize(name, baseName) {
                                var nameParts, nameSegment, mapValue, foundMap, lastIndex, foundI, foundStarMap, starI, i, j, part, baseParts = baseName && baseName.split("/"),
                                    map = config.map,
                                    starMap = map && map["*"] || {};
                                if (name && "." === name.charAt(0))
                                    if (baseName) {
                                        for (name = name.split("/"), lastIndex = name.length - 1, config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex]) && (name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, "")), name = baseParts.slice(0, baseParts.length - 1).concat(name), i = 0; i < name.length; i += 1)
                                            if (part = name[i], "." === part) name.splice(i, 1), i -= 1;
                                            else if (".." === part) {
                                            if (1 === i && (".." === name[2] || ".." === name[0])) break;
                                            i > 0 && (name.splice(i - 1, 2), i -= 2)
                                        }
                                        name = name.join("/")
                                    } else 0 === name.indexOf("./") && (name = name.substring(2));
                                if ((baseParts || starMap) && map) {
                                    for (nameParts = name.split("/"), i = nameParts.length; i > 0; i -= 1) {
                                        if (nameSegment = nameParts.slice(0, i).join("/"), baseParts)
                                            for (j = baseParts.length; j > 0; j -= 1)
                                                if (mapValue = map[baseParts.slice(0, j).join("/")], mapValue && (mapValue = mapValue[nameSegment])) {
                                                    foundMap = mapValue, foundI = i;
                                                    break
                                                }
                                        if (foundMap) break;
                                        !foundStarMap && starMap && starMap[nameSegment] && (foundStarMap = starMap[nameSegment], starI = i)
                                    }!foundMap && foundStarMap && (foundMap = foundStarMap, foundI = starI), foundMap && (nameParts.splice(0, foundI, foundMap), name = nameParts.join("/"))
                                }
                                return name
                            }

                            function makeRequire(relName, forceSync) {
                                return function() {
                                    var args = aps.call(arguments, 0);
                                    return "string" != typeof args[0] && 1 === args.length && args.push(null), req.apply(undef, args.concat([relName, forceSync]))
                                }
                            }

                            function makeNormalize(relName) {
                                return function(name) {
                                    return normalize(name, relName)
                                }
                            }

                            function makeLoad(depName) {
                                return function(value) {
                                    defined[depName] = value
                                }
                            }

                            function callDep(name) {
                                if (hasProp(waiting, name)) {
                                    var args = waiting[name];
                                    delete waiting[name], defining[name] = !0, main.apply(undef, args)
                                }
                                if (!hasProp(defined, name) && !hasProp(defining, name)) throw new Error("No " + name);
                                return defined[name]
                            }

                            function splitPrefix(name) {
                                var prefix, index = name ? name.indexOf("!") : -1;
                                return index > -1 && (prefix = name.substring(0, index), name = name.substring(index + 1, name.length)), [prefix, name]
                            }

                            function makeConfig(name) {
                                return function() {
                                    return config && config.config && config.config[name] || {}
                                }
                            }
                            var main, req, makeMap, handlers, defined = {},
                                waiting = {},
                                config = {},
                                defining = {},
                                hasOwn = Object.prototype.hasOwnProperty,
                                aps = [].slice,
                                jsSuffixRegExp = /\.js$/;
                            makeMap = function(name, relName) {
                                var plugin, parts = splitPrefix(name),
                                    prefix = parts[0];
                                return name = parts[1], prefix && (prefix = normalize(prefix, relName), plugin = callDep(prefix)), prefix ? name = plugin && plugin.normalize ? plugin.normalize(name, makeNormalize(relName)) : normalize(name, relName) : (name = normalize(name, relName), parts = splitPrefix(name), prefix = parts[0], name = parts[1], prefix && (plugin = callDep(prefix))), {
                                    f: prefix ? prefix + "!" + name : name,
                                    n: name,
                                    pr: prefix,
                                    p: plugin
                                }
                            }, handlers = {
                                require: function(name) {
                                    return makeRequire(name)
                                },
                                exports: function(name) {
                                    var e = defined[name];
                                    return "undefined" != typeof e ? e : defined[name] = {}
                                },
                                module: function(name) {
                                    return {
                                        id: name,
                                        uri: "",
                                        exports: defined[name],
                                        config: makeConfig(name)
                                    }
                                }
                            }, main = function(name, deps, callback, relName) {
                                var cjsModule, depName, ret, map, i, usingExports, args = [],
                                    callbackType = typeof callback;
                                if (relName = relName || name, "undefined" === callbackType || "function" === callbackType) {
                                    for (deps = !deps.length && callback.length ? ["require", "exports", "module"] : deps, i = 0; i < deps.length; i += 1)
                                        if (map = makeMap(deps[i], relName), depName = map.f, "require" === depName) args[i] = handlers.require(name);
                                        else if ("exports" === depName) args[i] = handlers.exports(name), usingExports = !0;
                                    else if ("module" === depName) cjsModule = args[i] = handlers.module(name);
                                    else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) args[i] = callDep(depName);
                                    else {
                                        if (!map.p) throw new Error(name + " missing " + depName);
                                        map.p.load(map.n, makeRequire(relName, !0), makeLoad(depName), {}), args[i] = defined[depName]
                                    }
                                    ret = callback ? callback.apply(defined[name], args) : void 0, name && (cjsModule && cjsModule.exports !== undef && cjsModule.exports !== defined[name] ? defined[name] = cjsModule.exports : ret === undef && usingExports || (defined[name] = ret))
                                } else name && (defined[name] = callback)
                            }, requirejs = require = req = function(deps, callback, relName, forceSync, alt) {
                                if ("string" == typeof deps) return handlers[deps] ? handlers[deps](callback) : callDep(makeMap(deps, callback).f);
                                if (!deps.splice) {
                                    if (config = deps, config.deps && req(config.deps, config.callback), !callback) return;
                                    callback.splice ? (deps = callback, callback = relName, relName = null) : deps = undef
                                }
                                return callback = callback || function() {}, "function" == typeof relName && (relName = forceSync, forceSync = alt), forceSync ? main(undef, deps, callback, relName) : setTimeout(function() {
                                    main(undef, deps, callback, relName)
                                }, 4), req
                            }, req.config = function(cfg) {
                                return req(cfg)
                            }, requirejs._defined = defined, define = function(name, deps, callback) {
                                if ("string" != typeof name) throw new Error("See almond README: incorrect module build, no module name");
                                deps.splice || (callback = deps, deps = []), hasProp(defined, name) || hasProp(waiting, name) || (waiting[name] = [name, deps, callback])
                            }, define.amd = {
                                jQuery: !0
                            }
                        }(), S2.requirejs = requirejs, S2.require = require, S2.define = define
                    }
                }(), S2.define("almond", function() {}), S2.define("jquery", [], function() {
                    var _$ = jQuery || $;
                    return null == _$ && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), _$
                }), S2.define("select2/utils", ["jquery"], function($) {
                    function getMethods(theClass) {
                        var proto = theClass.prototype,
                            methods = [];
                        for (var methodName in proto) {
                            var m = proto[methodName];
                            "function" == typeof m && "constructor" !== methodName && methods.push(methodName)
                        }
                        return methods
                    }
                    var Utils = {};
                    Utils.Extend = function(ChildClass, SuperClass) {
                        function BaseConstructor() {
                            this.constructor = ChildClass
                        }
                        var __hasProp = {}.hasOwnProperty;
                        for (var key in SuperClass) __hasProp.call(SuperClass, key) && (ChildClass[key] = SuperClass[key]);
                        return BaseConstructor.prototype = SuperClass.prototype, ChildClass.prototype = new BaseConstructor, ChildClass.__super__ = SuperClass.prototype, ChildClass
                    }, Utils.Decorate = function(SuperClass, DecoratorClass) {
                        function DecoratedClass() {
                            var unshift = Array.prototype.unshift,
                                argCount = DecoratorClass.prototype.constructor.length,
                                calledConstructor = SuperClass.prototype.constructor;
                            argCount > 0 && (unshift.call(arguments, SuperClass.prototype.constructor), calledConstructor = DecoratorClass.prototype.constructor), calledConstructor.apply(this, arguments)
                        }

                        function ctr() {
                            this.constructor = DecoratedClass
                        }
                        var decoratedMethods = getMethods(DecoratorClass),
                            superMethods = getMethods(SuperClass);
                        DecoratorClass.displayName = SuperClass.displayName, DecoratedClass.prototype = new ctr;
                        for (var m = 0; m < superMethods.length; m++) {
                            var superMethod = superMethods[m];
                            DecoratedClass.prototype[superMethod] = SuperClass.prototype[superMethod]
                        }
                        for (var calledMethod = (function(methodName) {
                                var originalMethod = function() {};
                                methodName in DecoratedClass.prototype && (originalMethod = DecoratedClass.prototype[methodName]);
                                var decoratedMethod = DecoratorClass.prototype[methodName];
                                return function() {
                                    var unshift = Array.prototype.unshift;
                                    return unshift.call(arguments, originalMethod), decoratedMethod.apply(this, arguments)
                                }
                            }), d = 0; d < decoratedMethods.length; d++) {
                            var decoratedMethod = decoratedMethods[d];
                            DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod)
                        }
                        return DecoratedClass
                    };
                    var Observable = function() {
                        this.listeners = {}
                    };
                    return Observable.prototype.on = function(event, callback) {
                        this.listeners = this.listeners || {}, event in this.listeners ? this.listeners[event].push(callback) : this.listeners[event] = [callback]
                    }, Observable.prototype.trigger = function(event) {
                        var slice = Array.prototype.slice;
                        this.listeners = this.listeners || {}, event in this.listeners && this.invoke(this.listeners[event], slice.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, Observable.prototype.invoke = function(listeners, params) {
                        for (var i = 0, len = listeners.length; len > i; i++) listeners[i].apply(this, params)
                    }, Utils.Observable = Observable, Utils.generateChars = function(length) {
                        for (var chars = "", i = 0; length > i; i++) {
                            var randomChar = Math.floor(36 * Math.random());
                            chars += randomChar.toString(36)
                        }
                        return chars
                    }, Utils.bind = function(func, context) {
                        return function() {
                            func.apply(context, arguments)
                        }
                    }, Utils._convertData = function(data) {
                        for (var originalKey in data) {
                            var keys = originalKey.split("-"),
                                dataLevel = data;
                            if (1 !== keys.length) {
                                for (var k = 0; k < keys.length; k++) {
                                    var key = keys[k];
                                    key = key.substring(0, 1).toLowerCase() + key.substring(1), key in dataLevel || (dataLevel[key] = {}), k == keys.length - 1 && (dataLevel[key] = data[originalKey]), dataLevel = dataLevel[key]
                                }
                                delete data[originalKey]
                            }
                        }
                        return data
                    }, Utils.hasScroll = function(index, el) {
                        var $el = $(el),
                            overflowX = el.style.overflowX,
                            overflowY = el.style.overflowY;
                        return overflowX !== overflowY || "hidden" !== overflowY && "visible" !== overflowY ? "scroll" === overflowX || "scroll" === overflowY ? !0 : $el.innerHeight() < el.scrollHeight || $el.innerWidth() < el.scrollWidth : !1
                    }, Utils.escapeMarkup = function(markup) {
                        var replaceMap = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof markup ? markup : String(markup).replace(/[&<>"'\/\\]/g, function(match) {
                            return replaceMap[match]
                        })
                    }, Utils.appendMany = function($element, $nodes) {
                        if ("1.7" === $.fn.jquery.substr(0, 3)) {
                            var $jqNodes = $();
                            $.map($nodes, function(node) {
                                $jqNodes = $jqNodes.add(node)
                            }), $nodes = $jqNodes
                        }
                        $element.append($nodes)
                    }, Utils
                }), S2.define("select2/results", ["jquery", "./utils"], function($, Utils) {
                    function Results($element, options, dataAdapter) {
                        this.$element = $element, this.data = dataAdapter, this.options = options, Results.__super__.constructor.call(this)
                    }
                    return Utils.Extend(Results, Utils.Observable), Results.prototype.render = function() {
                        var $results = $('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && $results.attr("aria-multiselectable", "true"), this.$results = $results, $results
                    }, Results.prototype.clear = function() {
                        this.$results.empty()
                    }, Results.prototype.displayMessage = function(params) {
                        var escapeMarkup = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var $message = $('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            message = this.options.get("translations").get(params.message);
                        $message.append(escapeMarkup(message(params.args))), $message[0].className += " select2-results__message", this.$results.append($message)
                    }, Results.prototype.hideMessages = function() {
                        this.$results.find(".select2-results__message").remove()
                    }, Results.prototype.append = function(data) {
                        this.hideLoading();
                        var $options = [];
                        if (null == data.results || 0 === data.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        }));
                        data.results = this.sort(data.results);
                        for (var d = 0; d < data.results.length; d++) {
                            var item = data.results[d],
                                $option = this.option(item);
                            $options.push($option)
                        }
                        this.$results.append($options)
                    }, Results.prototype.position = function($results, $dropdown) {
                        var $resultsContainer = $dropdown.find(".select2-results");
                        $resultsContainer.append($results)
                    }, Results.prototype.sort = function(data) {
                        var sorter = this.options.get("sorter");
                        return sorter(data)
                    }, Results.prototype.setClasses = function() {
                        var self = this;
                        this.data.current(function(selected) {
                            var selectedIds = $.map(selected, function(s) {
                                    return s.id.toString()
                                }),
                                $options = self.$results.find(".select2-results__option[aria-selected]");
                            $options.each(function() {
                                var $option = $(this),
                                    item = $.data(this, "data"),
                                    id = "" + item.id;
                                null != item.element && item.element.selected || null == item.element && $.inArray(id, selectedIds) > -1 ? $option.attr("aria-selected", "true") : $option.attr("aria-selected", "false")
                            });
                            var $selected = $options.filter("[aria-selected=true]");
                            $selected.length > 0 ? $selected.first().trigger("mouseenter") : $options.first().trigger("mouseenter")
                        })
                    }, Results.prototype.showLoading = function(params) {
                        this.hideLoading();
                        var loadingMore = this.options.get("translations").get("searching"),
                            loading = {
                                disabled: !0,
                                loading: !0,
                                text: loadingMore(params)
                            },
                            $loading = this.option(loading);
                        $loading.className += " loading-results", this.$results.prepend($loading)
                    }, Results.prototype.hideLoading = function() {
                        this.$results.find(".loading-results").remove()
                    }, Results.prototype.option = function(data) {
                        var option = document.createElement("li");
                        option.className = "select2-results__option";
                        var attrs = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        data.disabled && (delete attrs["aria-selected"], attrs["aria-disabled"] = "true"), null == data.id && delete attrs["aria-selected"], null != data._resultId && (option.id = data._resultId), data.title && (option.title = data.title), data.children && (attrs.role = "group", attrs["aria-label"] = data.text, delete attrs["aria-selected"]);
                        for (var attr in attrs) {
                            var val = attrs[attr];
                            option.setAttribute(attr, val)
                        }
                        if (data.children) {
                            var $option = $(option),
                                label = document.createElement("strong");
                            label.className = "select2-results__group";
                            $(label);
                            this.template(data, label);
                            for (var $children = [], c = 0; c < data.children.length; c++) {
                                var child = data.children[c],
                                    $child = this.option(child);
                                $children.push($child)
                            }
                            var $childrenContainer = $("<ul></ul>", {
                                "class": "select2-results__options select2-results__options--nested"
                            });
                            $childrenContainer.append($children), $option.append(label), $option.append($childrenContainer)
                        } else this.template(data, option);
                        return $.data(option, "data", data), option
                    }, Results.prototype.bind = function(container, $container) {
                        var self = this,
                            id = container.id + "-results";
                        this.$results.attr("id", id), container.on("results:all", function(params) {
                            self.clear(), self.append(params.data), container.isOpen() && self.setClasses()
                        }), container.on("results:append", function(params) {
                            self.append(params.data), container.isOpen() && self.setClasses()
                        }), container.on("query", function(params) {
                            self.hideMessages(), self.showLoading(params)
                        }), container.on("select", function() {
                            container.isOpen() && self.setClasses()
                        }), container.on("unselect", function() {
                            container.isOpen() && self.setClasses()
                        }), container.on("open", function() {
                            self.$results.attr("aria-expanded", "true"), self.$results.attr("aria-hidden", "false"), self.setClasses(), self.ensureHighlightVisible()
                        }), container.on("close", function() {
                            self.$results.attr("aria-expanded", "false"), self.$results.attr("aria-hidden", "true"), self.$results.removeAttr("aria-activedescendant")
                        }), container.on("results:toggle", function() {
                            var $highlighted = self.getHighlightedResults();
                            0 !== $highlighted.length && $highlighted.trigger("mouseup")
                        }), container.on("results:select", function() {
                            var $highlighted = self.getHighlightedResults();
                            if (0 !== $highlighted.length) {
                                var data = $highlighted.data("data");
                                "true" == $highlighted.attr("aria-selected") ? self.trigger("close", {}) : self.trigger("select", {
                                    data: data
                                })
                            }
                        }), container.on("results:previous", function() {
                            var $highlighted = self.getHighlightedResults(),
                                $options = self.$results.find("[aria-selected]"),
                                currentIndex = $options.index($highlighted);
                            if (0 !== currentIndex) {
                                var nextIndex = currentIndex - 1;
                                0 === $highlighted.length && (nextIndex = 0);
                                var $next = $options.eq(nextIndex);
                                $next.trigger("mouseenter");
                                var currentOffset = self.$results.offset().top,
                                    nextTop = $next.offset().top,
                                    nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);
                                0 === nextIndex ? self.$results.scrollTop(0) : 0 > nextTop - currentOffset && self.$results.scrollTop(nextOffset)
                            }
                        }), container.on("results:next", function() {
                            var $highlighted = self.getHighlightedResults(),
                                $options = self.$results.find("[aria-selected]"),
                                currentIndex = $options.index($highlighted),
                                nextIndex = currentIndex + 1;
                            if (!(nextIndex >= $options.length)) {
                                var $next = $options.eq(nextIndex);
                                $next.trigger("mouseenter");
                                var currentOffset = self.$results.offset().top + self.$results.outerHeight(!1),
                                    nextBottom = $next.offset().top + $next.outerHeight(!1),
                                    nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;
                                0 === nextIndex ? self.$results.scrollTop(0) : nextBottom > currentOffset && self.$results.scrollTop(nextOffset)
                            }
                        }), container.on("results:focus", function(params) {
                            params.element.addClass("select2-results__option--highlighted")
                        }), container.on("results:message", function(params) {
                            self.displayMessage(params)
                        }), $.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                            var top = self.$results.scrollTop(),
                                bottom = self.$results.get(0).scrollHeight - self.$results.scrollTop() + e.deltaY,
                                isAtTop = e.deltaY > 0 && top - e.deltaY <= 0,
                                isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();
                            isAtTop ? (self.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : isAtBottom && (self.$results.scrollTop(self.$results.get(0).scrollHeight - self.$results.height()), e.preventDefault(), e.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(evt) {
                            var $this = $(this),
                                data = $this.data("data");
                            return "true" === $this.attr("aria-selected") ? void(self.options.get("multiple") ? self.trigger("unselect", {
                                originalEvent: evt,
                                data: data
                            }) : self.trigger("close", {})) : void self.trigger("select", {
                                originalEvent: evt,
                                data: data
                            })
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(evt) {
                            var data = $(this).data("data");
                            self.getHighlightedResults().removeClass("select2-results__option--highlighted"), self.trigger("results:focus", {
                                data: data,
                                element: $(this)
                            })
                        })
                    }, Results.prototype.getHighlightedResults = function() {
                        var $highlighted = this.$results.find(".select2-results__option--highlighted");
                        return $highlighted
                    }, Results.prototype.destroy = function() {
                        this.$results.remove()
                    }, Results.prototype.ensureHighlightVisible = function() {
                        var $highlighted = this.getHighlightedResults();
                        if (0 !== $highlighted.length) {
                            var $options = this.$results.find("[aria-selected]"),
                                currentIndex = $options.index($highlighted),
                                currentOffset = this.$results.offset().top,
                                nextTop = $highlighted.offset().top,
                                nextOffset = this.$results.scrollTop() + (nextTop - currentOffset),
                                offsetDelta = nextTop - currentOffset;
                            nextOffset -= 2 * $highlighted.outerHeight(!1), 2 >= currentIndex ? this.$results.scrollTop(0) : (offsetDelta > this.$results.outerHeight() || 0 > offsetDelta) && this.$results.scrollTop(nextOffset)
                        }
                    }, Results.prototype.template = function(result, container) {
                        var template = this.options.get("templateResult"),
                            escapeMarkup = this.options.get("escapeMarkup"),
                            content = template(result, container);
                        null == content ? container.style.display = "none" : "string" == typeof content ? container.innerHTML = escapeMarkup(content) : $(container).append(content)
                    }, Results
                }), S2.define("select2/keys", [], function() {
                    var KEYS = {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    };
                    return KEYS
                }), S2.define("select2/selection/base", ["jquery", "../utils", "../keys"], function($, Utils, KEYS) {
                    function BaseSelection($element, options) {
                        this.$element = $element, this.options = options, BaseSelection.__super__.constructor.call(this)
                    }
                    return Utils.Extend(BaseSelection, Utils.Observable), BaseSelection.prototype.render = function() {
                        var $selection = $('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), $selection.attr("title", this.$element.attr("title")), $selection.attr("tabindex", this._tabindex), this.$selection = $selection, $selection
                    }, BaseSelection.prototype.bind = function(container, $container) {
                        var self = this,
                            resultsId = (container.id + "-container", container.id + "-results");
                        this.container = container, this.$selection.on("focus", function(evt) {
                            self.trigger("focus", evt)
                        }), this.$selection.on("blur", function(evt) {
                            self._handleBlur(evt)
                        }), this.$selection.on("keydown", function(evt) {
                            self.trigger("keypress", evt), evt.which === KEYS.SPACE && evt.preventDefault()
                        }), container.on("results:focus", function(params) {
                            self.$selection.attr("aria-activedescendant", params.data._resultId)
                        }), container.on("selection:update", function(params) {
                            self.update(params.data)
                        }), container.on("open", function() {
                            self.$selection.attr("aria-expanded", "true"), self.$selection.attr("aria-owns", resultsId), self._attachCloseHandler(container)
                        }), container.on("close", function() {
                            self.$selection.attr("aria-expanded", "false"), self.$selection.removeAttr("aria-activedescendant"), self.$selection.removeAttr("aria-owns"), self.$selection.focus(), self._detachCloseHandler(container)
                        }), container.on("enable", function() {
                            self.$selection.attr("tabindex", self._tabindex)
                        }), container.on("disable", function() {
                            self.$selection.attr("tabindex", "-1")
                        })
                    }, BaseSelection.prototype._handleBlur = function(evt) {
                        var self = this;
                        window.setTimeout(function() {
                            document.activeElement == self.$selection[0] || $.contains(self.$selection[0], document.activeElement) || self.trigger("blur", evt)
                        }, 1)
                    }, BaseSelection.prototype._attachCloseHandler = function(container) {
                        $(document.body).on("mousedown.select2." + container.id, function(e) {
                            var $target = $(e.target),
                                $select = $target.closest(".select2"),
                                $all = $(".select2.select2-container--open");
                            $all.each(function() {
                                var $this = $(this);
                                if (this != $select[0]) {
                                    var $element = $this.data("element");
                                    $element.select2("close")
                                }
                            })
                        })
                    }, BaseSelection.prototype._detachCloseHandler = function(container) {
                        $(document.body).off("mousedown.select2." + container.id)
                    }, BaseSelection.prototype.position = function($selection, $container) {
                        var $selectionContainer = $container.find(".selection");
                        $selectionContainer.append($selection)
                    }, BaseSelection.prototype.destroy = function() {
                        this._detachCloseHandler(this.container)
                    }, BaseSelection.prototype.update = function(data) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, BaseSelection
                }), S2.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function($, BaseSelection, Utils, KEYS) {
                    function SingleSelection() {
                        SingleSelection.__super__.constructor.apply(this, arguments)
                    }
                    return Utils.Extend(SingleSelection, BaseSelection), SingleSelection.prototype.render = function() {
                        var $selection = SingleSelection.__super__.render.call(this);
                        return $selection.addClass("select2-selection--single"), $selection.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), $selection
                    }, SingleSelection.prototype.bind = function(container, $container) {
                        var self = this;
                        SingleSelection.__super__.bind.apply(this, arguments);
                        var id = container.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", id), this.$selection.attr("aria-labelledby", id), this.$selection.on("mousedown", function(evt) {
                                1 === evt.which && self.trigger("toggle", {
                                    originalEvent: evt
                                })
                            }), this.$selection.on("focus", function(evt) {}),
                            this.$selection.on("blur", function(evt) {}), container.on("selection:update", function(params) {
                                self.update(params.data)
                            })
                    }, SingleSelection.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, SingleSelection.prototype.display = function(data, container) {
                        var template = this.options.get("templateSelection"),
                            escapeMarkup = this.options.get("escapeMarkup");
                        return escapeMarkup(template(data, container))
                    }, SingleSelection.prototype.selectionContainer = function() {
                        return $("<span></span>")
                    }, SingleSelection.prototype.update = function(data) {
                        if (0 === data.length) return void this.clear();
                        var selection = data[0],
                            $rendered = this.$selection.find(".select2-selection__rendered"),
                            formatted = this.display(selection, $rendered);
                        $rendered.empty().append(formatted), $rendered.prop("title", selection.title || selection.text)
                    }, SingleSelection
                }), S2.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function($, BaseSelection, Utils) {
                    function MultipleSelection($element, options) {
                        MultipleSelection.__super__.constructor.apply(this, arguments)
                    }
                    return Utils.Extend(MultipleSelection, BaseSelection), MultipleSelection.prototype.render = function() {
                        var $selection = MultipleSelection.__super__.render.call(this);
                        return $selection.addClass("select2-selection--multiple"), $selection.html('<ul class="select2-selection__rendered"></ul>'), $selection
                    }, MultipleSelection.prototype.bind = function(container, $container) {
                        var self = this;
                        MultipleSelection.__super__.bind.apply(this, arguments), this.$selection.on("click", function(evt) {
                            self.trigger("toggle", {
                                originalEvent: evt
                            })
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function(evt) {
                            if (!self.options.get("disabled")) {
                                var $remove = $(this),
                                    $selection = $remove.parent(),
                                    data = $selection.data("data");
                                self.trigger("unselect", {
                                    originalEvent: evt,
                                    data: data
                                })
                            }
                        })
                    }, MultipleSelection.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, MultipleSelection.prototype.display = function(data, container) {
                        var template = this.options.get("templateSelection"),
                            escapeMarkup = this.options.get("escapeMarkup");
                        return escapeMarkup(template(data, container))
                    }, MultipleSelection.prototype.selectionContainer = function() {
                        var $container = $('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                        return $container
                    }, MultipleSelection.prototype.update = function(data) {
                        if (this.clear(), 0 !== data.length) {
                            for (var $selections = [], d = 0; d < data.length; d++) {
                                var selection = data[d],
                                    $selection = this.selectionContainer(),
                                    formatted = this.display(selection, $selection);
                                $selection.append(formatted), $selection.prop("title", selection.title || selection.text), $selection.data("data", selection), $selections.push($selection)
                            }
                            var $rendered = this.$selection.find(".select2-selection__rendered");
                            Utils.appendMany($rendered, $selections)
                        }
                    }, MultipleSelection
                }), S2.define("select2/selection/placeholder", ["../utils"], function(Utils) {
                    function Placeholder(decorated, $element, options) {
                        this.placeholder = this.normalizePlaceholder(options.get("placeholder")), decorated.call(this, $element, options)
                    }
                    return Placeholder.prototype.normalizePlaceholder = function(_, placeholder) {
                        return "string" == typeof placeholder && (placeholder = {
                            id: "",
                            text: placeholder
                        }), placeholder
                    }, Placeholder.prototype.createPlaceholder = function(decorated, placeholder) {
                        var $placeholder = this.selectionContainer();
                        return $placeholder.html(this.display(placeholder)), $placeholder.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), $placeholder
                    }, Placeholder.prototype.update = function(decorated, data) {
                        var singlePlaceholder = 1 == data.length && data[0].id != this.placeholder.id,
                            multipleSelections = data.length > 1;
                        if (multipleSelections || singlePlaceholder) return decorated.call(this, data);
                        this.clear();
                        var $placeholder = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append($placeholder)
                    }, Placeholder
                }), S2.define("select2/selection/allowClear", ["jquery", "../keys"], function($, KEYS) {
                    function AllowClear() {}
                    return AllowClear.prototype.bind = function(decorated, container, $container) {
                        var self = this;
                        decorated.call(this, container, $container), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(evt) {
                            self._handleClear(evt)
                        }), container.on("keypress", function(evt) {
                            self._handleKeyboardClear(evt, container)
                        })
                    }, AllowClear.prototype._handleClear = function(_, evt) {
                        if (!this.options.get("disabled")) {
                            var $clear = this.$selection.find(".select2-selection__clear");
                            if (0 !== $clear.length) {
                                evt.stopPropagation();
                                for (var data = $clear.data("data"), d = 0; d < data.length; d++) {
                                    var unselectData = {
                                        data: data[d]
                                    };
                                    if (this.trigger("unselect", unselectData), unselectData.prevented) return
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, AllowClear.prototype._handleKeyboardClear = function(_, evt, container) {
                        container.isOpen() || (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) && this._handleClear(evt)
                    }, AllowClear.prototype.update = function(decorated, data) {
                        if (decorated.call(this, data), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === data.length)) {
                            var $remove = $('<span class="select2-selection__clear">&times;</span>');
                            $remove.data("data", data), this.$selection.find(".select2-selection__rendered").prepend($remove)
                        }
                    }, AllowClear
                }), S2.define("select2/selection/search", ["jquery", "../utils", "../keys"], function($, Utils, KEYS) {
                    function Search(decorated, $element, options) {
                        decorated.call(this, $element, options)
                    }
                    return Search.prototype.render = function(decorated) {
                        var $search = $('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = $search, this.$search = $search.find("input");
                        var $rendered = decorated.call(this);
                        return this._transferTabIndex(), $rendered
                    }, Search.prototype.bind = function(decorated, container, $container) {
                        var self = this;
                        decorated.call(this, container, $container), container.on("open", function() {
                            self.$search.trigger("focus")
                        }), container.on("close", function() {
                            self.$search.val(""), self.$search.removeAttr("aria-activedescendant"), self.$search.trigger("focus")
                        }), container.on("enable", function() {
                            self.$search.prop("disabled", !1), self._transferTabIndex()
                        }), container.on("disable", function() {
                            self.$search.prop("disabled", !0)
                        }), container.on("focus", function(evt) {
                            self.$search.trigger("focus")
                        }), container.on("results:focus", function(params) {
                            self.$search.attr("aria-activedescendant", params.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function(evt) {
                            self.trigger("focus", evt)
                        }), this.$selection.on("focusout", ".select2-search--inline", function(evt) {
                            self._handleBlur(evt)
                        }), this.$selection.on("keydown", ".select2-search--inline", function(evt) {
                            evt.stopPropagation(), self.trigger("keypress", evt), self._keyUpPrevented = evt.isDefaultPrevented();
                            var key = evt.which;
                            if (key === KEYS.BACKSPACE && "" === self.$search.val()) {
                                var $previousChoice = self.$searchContainer.prev(".select2-selection__choice");
                                if ($previousChoice.length > 0) {
                                    var item = $previousChoice.data("data");
                                    self.searchRemoveChoice(item), evt.preventDefault()
                                }
                            }
                        });
                        var msie = document.documentMode,
                            disableInputEvents = msie && 11 >= msie;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function(evt) {
                            return disableInputEvents ? void self.$selection.off("input.search input.searchcheck") : void self.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(evt) {
                            if (disableInputEvents && "input" === evt.type) return void self.$selection.off("input.search input.searchcheck");
                            var key = evt.which;
                            key != KEYS.SHIFT && key != KEYS.CTRL && key != KEYS.ALT && key != KEYS.TAB && self.handleSearch(evt)
                        })
                    }, Search.prototype._transferTabIndex = function(decorated) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, Search.prototype.createPlaceholder = function(decorated, placeholder) {
                        this.$search.attr("placeholder", placeholder.text)
                    }, Search.prototype.update = function(decorated, data) {
                        var searchHadFocus = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), decorated.call(this, data), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), searchHadFocus && this.$search.focus()
                    }, Search.prototype.handleSearch = function() {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var input = this.$search.val();
                            this.trigger("query", {
                                term: input
                            })
                        }
                        this._keyUpPrevented = !1
                    }, Search.prototype.searchRemoveChoice = function(decorated, item) {
                        this.trigger("unselect", {
                            data: item
                        }), this.$search.val(item.text), this.handleSearch()
                    }, Search.prototype.resizeSearch = function() {
                        this.$search.css("width", "25px");
                        var width = "";
                        if ("" !== this.$search.attr("placeholder")) width = this.$selection.find(".select2-selection__rendered").innerWidth();
                        else {
                            var minimumWidth = this.$search.val().length + 1;
                            width = .75 * minimumWidth + "em"
                        }
                        this.$search.css("width", width)
                    }, Search
                }), S2.define("select2/selection/eventRelay", ["jquery"], function($) {
                    function EventRelay() {}
                    return EventRelay.prototype.bind = function(decorated, container, $container) {
                        var self = this,
                            relayEvents = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            preventableEvents = ["opening", "closing", "selecting", "unselecting"];
                        decorated.call(this, container, $container), container.on("*", function(name, params) {
                            if (-1 !== $.inArray(name, relayEvents)) {
                                params = params || {};
                                var evt = $.Event("select2:" + name, {
                                    params: params
                                });
                                self.$element.trigger(evt), -1 !== $.inArray(name, preventableEvents) && (params.prevented = evt.isDefaultPrevented())
                            }
                        })
                    }, EventRelay
                }), S2.define("select2/translation", ["jquery", "require"], function($, require) {
                    function Translation(dict) {
                        this.dict = dict || {}
                    }
                    return Translation.prototype.all = function() {
                        return this.dict
                    }, Translation.prototype.get = function(key) {
                        return this.dict[key]
                    }, Translation.prototype.extend = function(translation) {
                        this.dict = $.extend({}, translation.all(), this.dict)
                    }, Translation._cache = {}, Translation.loadPath = function(path) {
                        if (!(path in Translation._cache)) {
                            var translations = require(path);
                            Translation._cache[path] = translations
                        }
                        return new Translation(Translation._cache[path])
                    }, Translation
                }), S2.define("select2/diacritics", [], function() {
                    var diacritics = {
                        "Ⓐ": "A",
                        "Ａ": "A",
                        "À": "A",
                        "Á": "A",
                        "Â": "A",
                        "Ầ": "A",
                        "Ấ": "A",
                        "Ẫ": "A",
                        "Ẩ": "A",
                        "Ã": "A",
                        "Ā": "A",
                        "Ă": "A",
                        "Ằ": "A",
                        "Ắ": "A",
                        "Ẵ": "A",
                        "Ẳ": "A",
                        "Ȧ": "A",
                        "Ǡ": "A",
                        "Ä": "A",
                        "Ǟ": "A",
                        "Ả": "A",
                        "Å": "A",
                        "Ǻ": "A",
                        "Ǎ": "A",
                        "Ȁ": "A",
                        "Ȃ": "A",
                        "Ạ": "A",
                        "Ậ": "A",
                        "Ặ": "A",
                        "Ḁ": "A",
                        "Ą": "A",
                        "Ⱥ": "A",
                        "Ɐ": "A",
                        "Ꜳ": "AA",
                        "Æ": "AE",
                        "Ǽ": "AE",
                        "Ǣ": "AE",
                        "Ꜵ": "AO",
                        "Ꜷ": "AU",
                        "Ꜹ": "AV",
                        "Ꜻ": "AV",
                        "Ꜽ": "AY",
                        "Ⓑ": "B",
                        "Ｂ": "B",
                        "Ḃ": "B",
                        "Ḅ": "B",
                        "Ḇ": "B",
                        "Ƀ": "B",
                        "Ƃ": "B",
                        "Ɓ": "B",
                        "Ⓒ": "C",
                        "Ｃ": "C",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "Ç": "C",
                        "Ḉ": "C",
                        "Ƈ": "C",
                        "Ȼ": "C",
                        "Ꜿ": "C",
                        "Ⓓ": "D",
                        "Ｄ": "D",
                        "Ḋ": "D",
                        "Ď": "D",
                        "Ḍ": "D",
                        "Ḑ": "D",
                        "Ḓ": "D",
                        "Ḏ": "D",
                        "Đ": "D",
                        "Ƌ": "D",
                        "Ɗ": "D",
                        "Ɖ": "D",
                        "Ꝺ": "D",
                        "Ǳ": "DZ",
                        "Ǆ": "DZ",
                        "ǲ": "Dz",
                        "ǅ": "Dz",
                        "Ⓔ": "E",
                        "Ｅ": "E",
                        "È": "E",
                        "É": "E",
                        "Ê": "E",
                        "Ề": "E",
                        "Ế": "E",
                        "Ễ": "E",
                        "Ể": "E",
                        "Ẽ": "E",
                        "Ē": "E",
                        "Ḕ": "E",
                        "Ḗ": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ë": "E",
                        "Ẻ": "E",
                        "Ě": "E",
                        "Ȅ": "E",
                        "Ȇ": "E",
                        "Ẹ": "E",
                        "Ệ": "E",
                        "Ȩ": "E",
                        "Ḝ": "E",
                        "Ę": "E",
                        "Ḙ": "E",
                        "Ḛ": "E",
                        "Ɛ": "E",
                        "Ǝ": "E",
                        "Ⓕ": "F",
                        "Ｆ": "F",
                        "Ḟ": "F",
                        "Ƒ": "F",
                        "Ꝼ": "F",
                        "Ⓖ": "G",
                        "Ｇ": "G",
                        "Ǵ": "G",
                        "Ĝ": "G",
                        "Ḡ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ǧ": "G",
                        "Ģ": "G",
                        "Ǥ": "G",
                        "Ɠ": "G",
                        "Ꞡ": "G",
                        "Ᵹ": "G",
                        "Ꝿ": "G",
                        "Ⓗ": "H",
                        "Ｈ": "H",
                        "Ĥ": "H",
                        "Ḣ": "H",
                        "Ḧ": "H",
                        "Ȟ": "H",
                        "Ḥ": "H",
                        "Ḩ": "H",
                        "Ḫ": "H",
                        "Ħ": "H",
                        "Ⱨ": "H",
                        "Ⱶ": "H",
                        "Ɥ": "H",
                        "Ⓘ": "I",
                        "Ｉ": "I",
                        "Ì": "I",
                        "Í": "I",
                        "Î": "I",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "İ": "I",
                        "Ï": "I",
                        "Ḯ": "I",
                        "Ỉ": "I",
                        "Ǐ": "I",
                        "Ȉ": "I",
                        "Ȋ": "I",
                        "Ị": "I",
                        "Į": "I",
                        "Ḭ": "I",
                        "Ɨ": "I",
                        "Ⓙ": "J",
                        "Ｊ": "J",
                        "Ĵ": "J",
                        "Ɉ": "J",
                        "Ⓚ": "K",
                        "Ｋ": "K",
                        "Ḱ": "K",
                        "Ǩ": "K",
                        "Ḳ": "K",
                        "Ķ": "K",
                        "Ḵ": "K",
                        "Ƙ": "K",
                        "Ⱪ": "K",
                        "Ꝁ": "K",
                        "Ꝃ": "K",
                        "Ꝅ": "K",
                        "Ꞣ": "K",
                        "Ⓛ": "L",
                        "Ｌ": "L",
                        "Ŀ": "L",
                        "Ĺ": "L",
                        "Ľ": "L",
                        "Ḷ": "L",
                        "Ḹ": "L",
                        "Ļ": "L",
                        "Ḽ": "L",
                        "Ḻ": "L",
                        "Ł": "L",
                        "Ƚ": "L",
                        "Ɫ": "L",
                        "Ⱡ": "L",
                        "Ꝉ": "L",
                        "Ꝇ": "L",
                        "Ꞁ": "L",
                        "Ǉ": "LJ",
                        "ǈ": "Lj",
                        "Ⓜ": "M",
                        "Ｍ": "M",
                        "Ḿ": "M",
                        "Ṁ": "M",
                        "Ṃ": "M",
                        "Ɱ": "M",
                        "Ɯ": "M",
                        "Ⓝ": "N",
                        "Ｎ": "N",
                        "Ǹ": "N",
                        "Ń": "N",
                        "Ñ": "N",
                        "Ṅ": "N",
                        "Ň": "N",
                        "Ṇ": "N",
                        "Ņ": "N",
                        "Ṋ": "N",
                        "Ṉ": "N",
                        "Ƞ": "N",
                        "Ɲ": "N",
                        "Ꞑ": "N",
                        "Ꞥ": "N",
                        "Ǌ": "NJ",
                        "ǋ": "Nj",
                        "Ⓞ": "O",
                        "Ｏ": "O",
                        "Ò": "O",
                        "Ó": "O",
                        "Ô": "O",
                        "Ồ": "O",
                        "Ố": "O",
                        "Ỗ": "O",
                        "Ổ": "O",
                        "Õ": "O",
                        "Ṍ": "O",
                        "Ȭ": "O",
                        "Ṏ": "O",
                        "Ō": "O",
                        "Ṑ": "O",
                        "Ṓ": "O",
                        "Ŏ": "O",
                        "Ȯ": "O",
                        "Ȱ": "O",
                        "Ö": "O",
                        "Ȫ": "O",
                        "Ỏ": "O",
                        "Ő": "O",
                        "Ǒ": "O",
                        "Ȍ": "O",
                        "Ȏ": "O",
                        "Ơ": "O",
                        "Ờ": "O",
                        "Ớ": "O",
                        "Ỡ": "O",
                        "Ở": "O",
                        "Ợ": "O",
                        "Ọ": "O",
                        "Ộ": "O",
                        "Ǫ": "O",
                        "Ǭ": "O",
                        "Ø": "O",
                        "Ǿ": "O",
                        "Ɔ": "O",
                        "Ɵ": "O",
                        "Ꝋ": "O",
                        "Ꝍ": "O",
                        "Ƣ": "OI",
                        "Ꝏ": "OO",
                        "Ȣ": "OU",
                        "Ⓟ": "P",
                        "Ｐ": "P",
                        "Ṕ": "P",
                        "Ṗ": "P",
                        "Ƥ": "P",
                        "Ᵽ": "P",
                        "Ꝑ": "P",
                        "Ꝓ": "P",
                        "Ꝕ": "P",
                        "Ⓠ": "Q",
                        "Ｑ": "Q",
                        "Ꝗ": "Q",
                        "Ꝙ": "Q",
                        "Ɋ": "Q",
                        "Ⓡ": "R",
                        "Ｒ": "R",
                        "Ŕ": "R",
                        "Ṙ": "R",
                        "Ř": "R",
                        "Ȑ": "R",
                        "Ȓ": "R",
                        "Ṛ": "R",
                        "Ṝ": "R",
                        "Ŗ": "R",
                        "Ṟ": "R",
                        "Ɍ": "R",
                        "Ɽ": "R",
                        "Ꝛ": "R",
                        "Ꞧ": "R",
                        "Ꞃ": "R",
                        "Ⓢ": "S",
                        "Ｓ": "S",
                        "ẞ": "S",
                        "Ś": "S",
                        "Ṥ": "S",
                        "Ŝ": "S",
                        "Ṡ": "S",
                        "Š": "S",
                        "Ṧ": "S",
                        "Ṣ": "S",
                        "Ṩ": "S",
                        "Ș": "S",
                        "Ş": "S",
                        "Ȿ": "S",
                        "Ꞩ": "S",
                        "Ꞅ": "S",
                        "Ⓣ": "T",
                        "Ｔ": "T",
                        "Ṫ": "T",
                        "Ť": "T",
                        "Ṭ": "T",
                        "Ț": "T",
                        "Ţ": "T",
                        "Ṱ": "T",
                        "Ṯ": "T",
                        "Ŧ": "T",
                        "Ƭ": "T",
                        "Ʈ": "T",
                        "Ⱦ": "T",
                        "Ꞇ": "T",
                        "Ꜩ": "TZ",
                        "Ⓤ": "U",
                        "Ｕ": "U",
                        "Ù": "U",
                        "Ú": "U",
                        "Û": "U",
                        "Ũ": "U",
                        "Ṹ": "U",
                        "Ū": "U",
                        "Ṻ": "U",
                        "Ŭ": "U",
                        "Ü": "U",
                        "Ǜ": "U",
                        "Ǘ": "U",
                        "Ǖ": "U",
                        "Ǚ": "U",
                        "Ủ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ǔ": "U",
                        "Ȕ": "U",
                        "Ȗ": "U",
                        "Ư": "U",
                        "Ừ": "U",
                        "Ứ": "U",
                        "Ữ": "U",
                        "Ử": "U",
                        "Ự": "U",
                        "Ụ": "U",
                        "Ṳ": "U",
                        "Ų": "U",
                        "Ṷ": "U",
                        "Ṵ": "U",
                        "Ʉ": "U",
                        "Ⓥ": "V",
                        "Ｖ": "V",
                        "Ṽ": "V",
                        "Ṿ": "V",
                        "Ʋ": "V",
                        "Ꝟ": "V",
                        "Ʌ": "V",
                        "Ꝡ": "VY",
                        "Ⓦ": "W",
                        "Ｗ": "W",
                        "Ẁ": "W",
                        "Ẃ": "W",
                        "Ŵ": "W",
                        "Ẇ": "W",
                        "Ẅ": "W",
                        "Ẉ": "W",
                        "Ⱳ": "W",
                        "Ⓧ": "X",
                        "Ｘ": "X",
                        "Ẋ": "X",
                        "Ẍ": "X",
                        "Ⓨ": "Y",
                        "Ｙ": "Y",
                        "Ỳ": "Y",
                        "Ý": "Y",
                        "Ŷ": "Y",
                        "Ỹ": "Y",
                        "Ȳ": "Y",
                        "Ẏ": "Y",
                        "Ÿ": "Y",
                        "Ỷ": "Y",
                        "Ỵ": "Y",
                        "Ƴ": "Y",
                        "Ɏ": "Y",
                        "Ỿ": "Y",
                        "Ⓩ": "Z",
                        "Ｚ": "Z",
                        "Ź": "Z",
                        "Ẑ": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "Ẓ": "Z",
                        "Ẕ": "Z",
                        "Ƶ": "Z",
                        "Ȥ": "Z",
                        "Ɀ": "Z",
                        "Ⱬ": "Z",
                        "Ꝣ": "Z",
                        "ⓐ": "a",
                        "ａ": "a",
                        "ẚ": "a",
                        "à": "a",
                        "á": "a",
                        "â": "a",
                        "ầ": "a",
                        "ấ": "a",
                        "ẫ": "a",
                        "ẩ": "a",
                        "ã": "a",
                        "ā": "a",
                        "ă": "a",
                        "ằ": "a",
                        "ắ": "a",
                        "ẵ": "a",
                        "ẳ": "a",
                        "ȧ": "a",
                        "ǡ": "a",
                        "ä": "a",
                        "ǟ": "a",
                        "ả": "a",
                        "å": "a",
                        "ǻ": "a",
                        "ǎ": "a",
                        "ȁ": "a",
                        "ȃ": "a",
                        "ạ": "a",
                        "ậ": "a",
                        "ặ": "a",
                        "ḁ": "a",
                        "ą": "a",
                        "ⱥ": "a",
                        "ɐ": "a",
                        "ꜳ": "aa",
                        "æ": "ae",
                        "ǽ": "ae",
                        "ǣ": "ae",
                        "ꜵ": "ao",
                        "ꜷ": "au",
                        "ꜹ": "av",
                        "ꜻ": "av",
                        "ꜽ": "ay",
                        "ⓑ": "b",
                        "ｂ": "b",
                        "ḃ": "b",
                        "ḅ": "b",
                        "ḇ": "b",
                        "ƀ": "b",
                        "ƃ": "b",
                        "ɓ": "b",
                        "ⓒ": "c",
                        "ｃ": "c",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "ç": "c",
                        "ḉ": "c",
                        "ƈ": "c",
                        "ȼ": "c",
                        "ꜿ": "c",
                        "ↄ": "c",
                        "ⓓ": "d",
                        "ｄ": "d",
                        "ḋ": "d",
                        "ď": "d",
                        "ḍ": "d",
                        "ḑ": "d",
                        "ḓ": "d",
                        "ḏ": "d",
                        "đ": "d",
                        "ƌ": "d",
                        "ɖ": "d",
                        "ɗ": "d",
                        "ꝺ": "d",
                        "ǳ": "dz",
                        "ǆ": "dz",
                        "ⓔ": "e",
                        "ｅ": "e",
                        "è": "e",
                        "é": "e",
                        "ê": "e",
                        "ề": "e",
                        "ế": "e",
                        "ễ": "e",
                        "ể": "e",
                        "ẽ": "e",
                        "ē": "e",
                        "ḕ": "e",
                        "ḗ": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ë": "e",
                        "ẻ": "e",
                        "ě": "e",
                        "ȅ": "e",
                        "ȇ": "e",
                        "ẹ": "e",
                        "ệ": "e",
                        "ȩ": "e",
                        "ḝ": "e",
                        "ę": "e",
                        "ḙ": "e",
                        "ḛ": "e",
                        "ɇ": "e",
                        "ɛ": "e",
                        "ǝ": "e",
                        "ⓕ": "f",
                        "ｆ": "f",
                        "ḟ": "f",
                        "ƒ": "f",
                        "ꝼ": "f",
                        "ⓖ": "g",
                        "ｇ": "g",
                        "ǵ": "g",
                        "ĝ": "g",
                        "ḡ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ǧ": "g",
                        "ģ": "g",
                        "ǥ": "g",
                        "ɠ": "g",
                        "ꞡ": "g",
                        "ᵹ": "g",
                        "ꝿ": "g",
                        "ⓗ": "h",
                        "ｈ": "h",
                        "ĥ": "h",
                        "ḣ": "h",
                        "ḧ": "h",
                        "ȟ": "h",
                        "ḥ": "h",
                        "ḩ": "h",
                        "ḫ": "h",
                        "ẖ": "h",
                        "ħ": "h",
                        "ⱨ": "h",
                        "ⱶ": "h",
                        "ɥ": "h",
                        "ƕ": "hv",
                        "ⓘ": "i",
                        "ｉ": "i",
                        "ì": "i",
                        "í": "i",
                        "î": "i",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "ï": "i",
                        "ḯ": "i",
                        "ỉ": "i",
                        "ǐ": "i",
                        "ȉ": "i",
                        "ȋ": "i",
                        "ị": "i",
                        "į": "i",
                        "ḭ": "i",
                        "ɨ": "i",
                        "ı": "i",
                        "ⓙ": "j",
                        "ｊ": "j",
                        "ĵ": "j",
                        "ǰ": "j",
                        "ɉ": "j",
                        "ⓚ": "k",
                        "ｋ": "k",
                        "ḱ": "k",
                        "ǩ": "k",
                        "ḳ": "k",
                        "ķ": "k",
                        "ḵ": "k",
                        "ƙ": "k",
                        "ⱪ": "k",
                        "ꝁ": "k",
                        "ꝃ": "k",
                        "ꝅ": "k",
                        "ꞣ": "k",
                        "ⓛ": "l",
                        "ｌ": "l",
                        "ŀ": "l",
                        "ĺ": "l",
                        "ľ": "l",
                        "ḷ": "l",
                        "ḹ": "l",
                        "ļ": "l",
                        "ḽ": "l",
                        "ḻ": "l",
                        "ſ": "l",
                        "ł": "l",
                        "ƚ": "l",
                        "ɫ": "l",
                        "ⱡ": "l",
                        "ꝉ": "l",
                        "ꞁ": "l",
                        "ꝇ": "l",
                        "ǉ": "lj",
                        "ⓜ": "m",
                        "ｍ": "m",
                        "ḿ": "m",
                        "ṁ": "m",
                        "ṃ": "m",
                        "ɱ": "m",
                        "ɯ": "m",
                        "ⓝ": "n",
                        "ｎ": "n",
                        "ǹ": "n",
                        "ń": "n",
                        "ñ": "n",
                        "ṅ": "n",
                        "ň": "n",
                        "ṇ": "n",
                        "ņ": "n",
                        "ṋ": "n",
                        "ṉ": "n",
                        "ƞ": "n",
                        "ɲ": "n",
                        "ŉ": "n",
                        "ꞑ": "n",
                        "ꞥ": "n",
                        "ǌ": "nj",
                        "ⓞ": "o",
                        "ｏ": "o",
                        "ò": "o",
                        "ó": "o",
                        "ô": "o",
                        "ồ": "o",
                        "ố": "o",
                        "ỗ": "o",
                        "ổ": "o",
                        "õ": "o",
                        "ṍ": "o",
                        "ȭ": "o",
                        "ṏ": "o",
                        "ō": "o",
                        "ṑ": "o",
                        "ṓ": "o",
                        "ŏ": "o",
                        "ȯ": "o",
                        "ȱ": "o",
                        "ö": "o",
                        "ȫ": "o",
                        "ỏ": "o",
                        "ő": "o",
                        "ǒ": "o",
                        "ȍ": "o",
                        "ȏ": "o",
                        "ơ": "o",
                        "ờ": "o",
                        "ớ": "o",
                        "ỡ": "o",
                        "ở": "o",
                        "ợ": "o",
                        "ọ": "o",
                        "ộ": "o",
                        "ǫ": "o",
                        "ǭ": "o",
                        "ø": "o",
                        "ǿ": "o",
                        "ɔ": "o",
                        "ꝋ": "o",
                        "ꝍ": "o",
                        "ɵ": "o",
                        "ƣ": "oi",
                        "ȣ": "ou",
                        "ꝏ": "oo",
                        "ⓟ": "p",
                        "ｐ": "p",
                        "ṕ": "p",
                        "ṗ": "p",
                        "ƥ": "p",
                        "ᵽ": "p",
                        "ꝑ": "p",
                        "ꝓ": "p",
                        "ꝕ": "p",
                        "ⓠ": "q",
                        "ｑ": "q",
                        "ɋ": "q",
                        "ꝗ": "q",
                        "ꝙ": "q",
                        "ⓡ": "r",
                        "ｒ": "r",
                        "ŕ": "r",
                        "ṙ": "r",
                        "ř": "r",
                        "ȑ": "r",
                        "ȓ": "r",
                        "ṛ": "r",
                        "ṝ": "r",
                        "ŗ": "r",
                        "ṟ": "r",
                        "ɍ": "r",
                        "ɽ": "r",
                        "ꝛ": "r",
                        "ꞧ": "r",
                        "ꞃ": "r",
                        "ⓢ": "s",
                        "ｓ": "s",
                        "ß": "s",
                        "ś": "s",
                        "ṥ": "s",
                        "ŝ": "s",
                        "ṡ": "s",
                        "š": "s",
                        "ṧ": "s",
                        "ṣ": "s",
                        "ṩ": "s",
                        "ș": "s",
                        "ş": "s",
                        "ȿ": "s",
                        "ꞩ": "s",
                        "ꞅ": "s",
                        "ẛ": "s",
                        "ⓣ": "t",
                        "ｔ": "t",
                        "ṫ": "t",
                        "ẗ": "t",
                        "ť": "t",
                        "ṭ": "t",
                        "ț": "t",
                        "ţ": "t",
                        "ṱ": "t",
                        "ṯ": "t",
                        "ŧ": "t",
                        "ƭ": "t",
                        "ʈ": "t",
                        "ⱦ": "t",
                        "ꞇ": "t",
                        "ꜩ": "tz",
                        "ⓤ": "u",
                        "ｕ": "u",
                        "ù": "u",
                        "ú": "u",
                        "û": "u",
                        "ũ": "u",
                        "ṹ": "u",
                        "ū": "u",
                        "ṻ": "u",
                        "ŭ": "u",
                        "ü": "u",
                        "ǜ": "u",
                        "ǘ": "u",
                        "ǖ": "u",
                        "ǚ": "u",
                        "ủ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ǔ": "u",
                        "ȕ": "u",
                        "ȗ": "u",
                        "ư": "u",
                        "ừ": "u",
                        "ứ": "u",
                        "ữ": "u",
                        "ử": "u",
                        "ự": "u",
                        "ụ": "u",
                        "ṳ": "u",
                        "ų": "u",
                        "ṷ": "u",
                        "ṵ": "u",
                        "ʉ": "u",
                        "ⓥ": "v",
                        "ｖ": "v",
                        "ṽ": "v",
                        "ṿ": "v",
                        "ʋ": "v",
                        "ꝟ": "v",
                        "ʌ": "v",
                        "ꝡ": "vy",
                        "ⓦ": "w",
                        "ｗ": "w",
                        "ẁ": "w",
                        "ẃ": "w",
                        "ŵ": "w",
                        "ẇ": "w",
                        "ẅ": "w",
                        "ẘ": "w",
                        "ẉ": "w",
                        "ⱳ": "w",
                        "ⓧ": "x",
                        "ｘ": "x",
                        "ẋ": "x",
                        "ẍ": "x",
                        "ⓨ": "y",
                        "ｙ": "y",
                        "ỳ": "y",
                        "ý": "y",
                        "ŷ": "y",
                        "ỹ": "y",
                        "ȳ": "y",
                        "ẏ": "y",
                        "ÿ": "y",
                        "ỷ": "y",
                        "ẙ": "y",
                        "ỵ": "y",
                        "ƴ": "y",
                        "ɏ": "y",
                        "ỿ": "y",
                        "ⓩ": "z",
                        "ｚ": "z",
                        "ź": "z",
                        "ẑ": "z",
                        "ż": "z",
                        "ž": "z",
                        "ẓ": "z",
                        "ẕ": "z",
                        "ƶ": "z",
                        "ȥ": "z",
                        "ɀ": "z",
                        "ⱬ": "z",
                        "ꝣ": "z",
                        "Ά": "Α",
                        "Έ": "Ε",
                        "Ή": "Η",
                        "Ί": "Ι",
                        "Ϊ": "Ι",
                        "Ό": "Ο",
                        "Ύ": "Υ",
                        "Ϋ": "Υ",
                        "Ώ": "Ω",
                        "ά": "α",
                        "έ": "ε",
                        "ή": "η",
                        "ί": "ι",
                        "ϊ": "ι",
                        "ΐ": "ι",
                        "ό": "ο",
                        "ύ": "υ",
                        "ϋ": "υ",
                        "ΰ": "υ",
                        "ω": "ω",
                        "ς": "σ"
                    };
                    return diacritics
                }), S2.define("select2/data/base", ["../utils"], function(Utils) {
                    function BaseAdapter($element, options) {
                        BaseAdapter.__super__.constructor.call(this)
                    }
                    return Utils.Extend(BaseAdapter, Utils.Observable), BaseAdapter.prototype.current = function(callback) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, BaseAdapter.prototype.query = function(params, callback) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, BaseAdapter.prototype.bind = function(container, $container) {}, BaseAdapter.prototype.destroy = function() {}, BaseAdapter.prototype.generateResultId = function(container, data) {
                        var id = container.id + "-result-";
                        return id += Utils.generateChars(4), id += null != data.id ? "-" + data.id.toString() : "-" + Utils.generateChars(4)
                    }, BaseAdapter
                }), S2.define("select2/data/select", ["./base", "../utils", "jquery"], function(BaseAdapter, Utils, $) {
                    function SelectAdapter($element, options) {
                        this.$element = $element, this.options = options, SelectAdapter.__super__.constructor.call(this)
                    }
                    return Utils.Extend(SelectAdapter, BaseAdapter), SelectAdapter.prototype.current = function(callback) {
                        var data = [],
                            self = this;
                        this.$element.find(":selected").each(function() {
                            var $option = $(this),
                                option = self.item($option);
                            data.push(option)
                        }), callback(data)
                    }, SelectAdapter.prototype.select = function(data) {
                        var self = this;
                        if (data.selected = !0, $(data.element).is("option")) return data.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function(currentData) {
                            var val = [];
                            data = [data], data.push.apply(data, currentData);
                            for (var d = 0; d < data.length; d++) {
                                var id = data[d].id; - 1 === $.inArray(id, val) && val.push(id)
                            }
                            self.$element.val(val), self.$element.trigger("change")
                        });
                        else {
                            var val = data.id;
                            this.$element.val(val), this.$element.trigger("change")
                        }
                    }, SelectAdapter.prototype.unselect = function(data) {
                        var self = this;
                        if (this.$element.prop("multiple")) return data.selected = !1, $(data.element).is("option") ? (data.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(currentData) {
                            for (var val = [], d = 0; d < currentData.length; d++) {
                                var id = currentData[d].id;
                                id !== data.id && -1 === $.inArray(id, val) && val.push(id)
                            }
                            self.$element.val(val), self.$element.trigger("change")
                        })
                    }, SelectAdapter.prototype.bind = function(container, $container) {
                        var self = this;
                        this.container = container, container.on("select", function(params) {
                            self.select(params.data)
                        }), container.on("unselect", function(params) {
                            self.unselect(params.data)
                        })
                    }, SelectAdapter.prototype.destroy = function() {
                        this.$element.find("*").each(function() {
                            $.removeData(this, "data")
                        })
                    }, SelectAdapter.prototype.query = function(params, callback) {
                        var data = [],
                            self = this,
                            $options = this.$element.children();
                        $options.each(function() {
                            var $option = $(this);
                            if ($option.is("option") || $option.is("optgroup")) {
                                var option = self.item($option),
                                    matches = self.matches(params, option);
                                null !== matches && data.push(matches)
                            }
                        }), callback({
                            results: data
                        })
                    }, SelectAdapter.prototype.addOptions = function($options) {
                        Utils.appendMany(this.$element, $options)
                    }, SelectAdapter.prototype.option = function(data) {
                        var option;
                        data.children ? (option = document.createElement("optgroup"), option.label = data.text) : (option = document.createElement("option"), void 0 !== option.textContent ? option.textContent = data.text : option.innerText = data.text), data.id && (option.value = data.id), data.disabled && (option.disabled = !0), data.selected && (option.selected = !0), data.title && (option.title = data.title);
                        var $option = $(option),
                            normalizedData = this._normalizeItem(data);
                        return normalizedData.element = option, $.data(option, "data", normalizedData), $option
                    }, SelectAdapter.prototype.item = function($option) {
                        var data = {};
                        if (data = $.data($option[0], "data"), null != data) return data;
                        if ($option.is("option")) data = {
                            id: $option.val(),
                            text: $option.text(),
                            disabled: $option.prop("disabled"),
                            selected: $option.prop("selected"),
                            title: $option.prop("title")
                        };
                        else if ($option.is("optgroup")) {
                            data = {
                                text: $option.prop("label"),
                                children: [],
                                title: $option.prop("title")
                            };
                            for (var $children = $option.children("option"), children = [], c = 0; c < $children.length; c++) {
                                var $child = $($children[c]),
                                    child = this.item($child);
                                children.push(child)
                            }
                            data.children = children
                        }
                        return data = this._normalizeItem(data), data.element = $option[0], $.data($option[0], "data", data), data
                    }, SelectAdapter.prototype._normalizeItem = function(item) {
                        $.isPlainObject(item) || (item = {
                            id: item,
                            text: item
                        }), item = $.extend({}, {
                            text: ""
                        }, item);
                        var defaults = {
                            selected: !1,
                            disabled: !1
                        };
                        return null != item.id && (item.id = item.id.toString()), null != item.text && (item.text = item.text.toString()), null == item._resultId && item.id && null != this.container && (item._resultId = this.generateResultId(this.container, item)), $.extend({}, defaults, item)
                    }, SelectAdapter.prototype.matches = function(params, data) {
                        var matcher = this.options.get("matcher");
                        return matcher(params, data)
                    }, SelectAdapter
                }), S2.define("select2/data/array", ["./select", "../utils", "jquery"], function(SelectAdapter, Utils, $) {
                    function ArrayAdapter($element, options) {
                        var data = options.get("data") || [];
                        ArrayAdapter.__super__.constructor.call(this, $element, options), this.addOptions(this.convertToOptions(data))
                    }
                    return Utils.Extend(ArrayAdapter, SelectAdapter), ArrayAdapter.prototype.select = function(data) {
                        var $option = this.$element.find("option").filter(function(i, elm) {
                            return elm.value == data.id.toString()
                        });
                        0 === $option.length && ($option = this.option(data), this.addOptions($option)), ArrayAdapter.__super__.select.call(this, data)
                    }, ArrayAdapter.prototype.convertToOptions = function(data) {
                        function onlyItem(item) {
                            return function() {
                                return $(this).val() == item.id
                            }
                        }
                        for (var self = this, $existing = this.$element.find("option"), existingIds = $existing.map(function() {
                                return self.item($(this)).id
                            }).get(), $options = [], d = 0; d < data.length; d++) {
                            var item = this._normalizeItem(data[d]);
                            if ($.inArray(item.id, existingIds) >= 0) {
                                var $existingOption = $existing.filter(onlyItem(item)),
                                    existingData = this.item($existingOption),
                                    newData = $.extend(!0, {}, existingData, item),
                                    $newOption = this.option(newData);
                                $existingOption.replaceWith($newOption)
                            } else {
                                var $option = this.option(item);
                                if (item.children) {
                                    var $children = this.convertToOptions(item.children);
                                    Utils.appendMany($option, $children)
                                }
                                $options.push($option)
                            }
                        }
                        return $options
                    }, ArrayAdapter
                }), S2.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(ArrayAdapter, Utils, $) {
                    function AjaxAdapter($element, options) {
                        this.ajaxOptions = this._applyDefaults(options.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), AjaxAdapter.__super__.constructor.call(this, $element, options)
                    }
                    return Utils.Extend(AjaxAdapter, ArrayAdapter), AjaxAdapter.prototype._applyDefaults = function(options) {
                        var defaults = {
                            data: function(params) {
                                return $.extend({}, params, {
                                    q: params.term
                                })
                            },
                            transport: function(params, success, failure) {
                                var $request = $.ajax(params);
                                return $request.then(success), $request.fail(failure), $request
                            }
                        };
                        return $.extend({}, defaults, options, !0)
                    }, AjaxAdapter.prototype.processResults = function(results) {
                        return results
                    }, AjaxAdapter.prototype.query = function(params, callback) {
                        function request() {
                            var $request = options.transport(options, function(data) {
                                var results = self.processResults(data, params);
                                self.options.get("debug") && window.console && console.error && (results && results.results && $.isArray(results.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), callback(results)
                            }, function() {});
                            self._request = $request
                        }
                        var self = this;
                        null != this._request && ($.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var options = $.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        "function" == typeof options.url && (options.url = options.url.call(this.$element, params)), "function" == typeof options.data && (options.data = options.data.call(this.$element, params)), this.ajaxOptions.delay && "" !== params.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay)) : request()
                    }, AjaxAdapter
                }), S2.define("select2/data/tags", ["jquery"], function($) {
                    function Tags(decorated, $element, options) {
                        var tags = options.get("tags"),
                            createTag = options.get("createTag");
                        if (void 0 !== createTag && (this.createTag = createTag), decorated.call(this, $element, options), $.isArray(tags))
                            for (var t = 0; t < tags.length; t++) {
                                var tag = tags[t],
                                    item = this._normalizeItem(tag),
                                    $option = this.option(item);
                                this.$element.append($option)
                            }
                    }
                    return Tags.prototype.query = function(decorated, params, callback) {
                        function wrapper(obj, child) {
                            for (var data = obj.results, i = 0; i < data.length; i++) {
                                var option = data[i],
                                    checkChildren = null != option.children && !wrapper({
                                        results: option.children
                                    }, !0),
                                    checkText = option.text === params.term;
                                if (checkText || checkChildren) return child ? !1 : (obj.data = data, void callback(obj))
                            }
                            if (child) return !0;
                            var tag = self.createTag(params);
                            if (null != tag) {
                                var $option = self.option(tag);
                                $option.attr("data-select2-tag", !0), self.addOptions([$option]), self.insertTag(data, tag)
                            }
                            obj.results = data, callback(obj)
                        }
                        var self = this;
                        return this._removeOldTags(), null == params.term || null != params.page ? void decorated.call(this, params, callback) : void decorated.call(this, params, wrapper)
                    }, Tags.prototype.createTag = function(decorated, params) {
                        var term = $.trim(params.term);
                        return "" === term ? null : {
                            id: term,
                            text: term
                        }
                    }, Tags.prototype.insertTag = function(_, data, tag) {
                        data.unshift(tag)
                    }, Tags.prototype._removeOldTags = function(_) {
                        var $options = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                        $options.each(function() {
                            this.selected || $(this).remove()
                        })
                    }, Tags
                }), S2.define("select2/data/tokenizer", ["jquery"], function($) {
                    function Tokenizer(decorated, $element, options) {
                        var tokenizer = options.get("tokenizer");
                        void 0 !== tokenizer && (this.tokenizer = tokenizer), decorated.call(this, $element, options)
                    }
                    return Tokenizer.prototype.bind = function(decorated, container, $container) {
                        decorated.call(this, container, $container), this.$search = container.dropdown.$search || container.selection.$search || $container.find(".select2-search__field")
                    }, Tokenizer.prototype.query = function(decorated, params, callback) {
                        function select(data) {
                            self.trigger("select", {
                                data: data
                            })
                        }
                        var self = this;
                        params.term = params.term || "";
                        var tokenData = this.tokenizer(params, this.options, select);
                        tokenData.term !== params.term && (this.$search.length && (this.$search.val(tokenData.term), this.$search.focus()), params.term = tokenData.term), decorated.call(this, params, callback)
                    }, Tokenizer.prototype.tokenizer = function(_, params, options, callback) {
                        for (var separators = options.get("tokenSeparators") || [], term = params.term, i = 0, createTag = this.createTag || function(params) {
                                return {
                                    id: params.term,
                                    text: params.term
                                }
                            }; i < term.length;) {
                            var termChar = term[i];
                            if (-1 !== $.inArray(termChar, separators)) {
                                var part = term.substr(0, i),
                                    partParams = $.extend({}, params, {
                                        term: part
                                    }),
                                    data = createTag(partParams);
                                null != data ? (callback(data), term = term.substr(i + 1) || "", i = 0) : i++
                            } else i++
                        }
                        return {
                            term: term
                        }
                    }, Tokenizer
                }), S2.define("select2/data/minimumInputLength", [], function() {
                    function MinimumInputLength(decorated, $e, options) {
                        this.minimumInputLength = options.get("minimumInputLength"), decorated.call(this, $e, options)
                    }
                    return MinimumInputLength.prototype.query = function(decorated, params, callback) {
                        return params.term = params.term || "", params.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: params.term,
                                params: params
                            }
                        }) : void decorated.call(this, params, callback)
                    }, MinimumInputLength
                }), S2.define("select2/data/maximumInputLength", [], function() {
                    function MaximumInputLength(decorated, $e, options) {
                        this.maximumInputLength = options.get("maximumInputLength"), decorated.call(this, $e, options)
                    }
                    return MaximumInputLength.prototype.query = function(decorated, params, callback) {
                        return params.term = params.term || "", this.maximumInputLength > 0 && params.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: params.term,
                                params: params
                            }
                        }) : void decorated.call(this, params, callback)
                    }, MaximumInputLength
                }), S2.define("select2/data/maximumSelectionLength", [], function() {
                    function MaximumSelectionLength(decorated, $e, options) {
                        this.maximumSelectionLength = options.get("maximumSelectionLength"), decorated.call(this, $e, options)
                    }
                    return MaximumSelectionLength.prototype.query = function(decorated, params, callback) {
                        var self = this;
                        this.current(function(currentData) {
                            var count = null != currentData ? currentData.length : 0;
                            return self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength ? void self.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: self.maximumSelectionLength
                                }
                            }) : void decorated.call(self, params, callback)
                        })
                    }, MaximumSelectionLength
                }), S2.define("select2/dropdown", ["jquery", "./utils"], function($, Utils) {
                    function Dropdown($element, options) {
                        this.$element = $element, this.options = options, Dropdown.__super__.constructor.call(this)
                    }
                    return Utils.Extend(Dropdown, Utils.Observable), Dropdown.prototype.render = function() {
                        var $dropdown = $('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return $dropdown.attr("dir", this.options.get("dir")), this.$dropdown = $dropdown, $dropdown
                    }, Dropdown.prototype.bind = function() {}, Dropdown.prototype.position = function($dropdown, $container) {}, Dropdown.prototype.destroy = function() {
                        this.$dropdown.remove()
                    }, Dropdown
                }), S2.define("select2/dropdown/search", ["jquery", "../utils"], function($, Utils) {
                    function Search() {}
                    return Search.prototype.render = function(decorated) {
                        var $rendered = decorated.call(this),
                            $search = $('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = $search, this.$search = $search.find("input"), $rendered.prepend($search), $rendered
                    }, Search.prototype.bind = function(decorated, container, $container) {
                        var self = this;
                        decorated.call(this, container, $container), this.$search.on("keydown", function(evt) {
                            self.trigger("keypress", evt), self._keyUpPrevented = evt.isDefaultPrevented()
                        }), this.$search.on("input", function(evt) {
                            $(this).off("keyup")
                        }), this.$search.on("keyup input", function(evt) {
                            self.handleSearch(evt)
                        }), container.on("open", function() {
                            self.$search.attr("tabindex", 0), self.$search.focus(), window.setTimeout(function() {
                                self.$search.focus()
                            }, 0)
                        }), container.on("close", function() {
                            self.$search.attr("tabindex", -1), self.$search.val("")
                        }), container.on("results:all", function(params) {
                            if (null == params.query.term || "" === params.query.term) {
                                var showSearch = self.showSearch(params);
                                showSearch ? self.$searchContainer.removeClass("select2-search--hide") : self.$searchContainer.addClass("select2-search--hide")
                            }
                        })
                    }, Search.prototype.handleSearch = function(evt) {
                        if (!this._keyUpPrevented) {
                            var input = this.$search.val();
                            this.trigger("query", {
                                term: input
                            })
                        }
                        this._keyUpPrevented = !1
                    }, Search.prototype.showSearch = function(_, params) {
                        return !0
                    }, Search
                }), S2.define("select2/dropdown/hidePlaceholder", [], function() {
                    function HidePlaceholder(decorated, $element, options, dataAdapter) {
                        this.placeholder = this.normalizePlaceholder(options.get("placeholder")), decorated.call(this, $element, options, dataAdapter)
                    }
                    return HidePlaceholder.prototype.append = function(decorated, data) {
                        data.results = this.removePlaceholder(data.results), decorated.call(this, data)
                    }, HidePlaceholder.prototype.normalizePlaceholder = function(_, placeholder) {
                        return "string" == typeof placeholder && (placeholder = {
                            id: "",
                            text: placeholder
                        }), placeholder
                    }, HidePlaceholder.prototype.removePlaceholder = function(_, data) {
                        for (var modifiedData = data.slice(0), d = data.length - 1; d >= 0; d--) {
                            var item = data[d];
                            this.placeholder.id === item.id && modifiedData.splice(d, 1)
                        }
                        return modifiedData
                    }, HidePlaceholder
                }), S2.define("select2/dropdown/infiniteScroll", ["jquery"], function($) {
                    function InfiniteScroll(decorated, $element, options, dataAdapter) {
                        this.lastParams = {}, decorated.call(this, $element, options, dataAdapter), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }
                    return InfiniteScroll.prototype.append = function(decorated, data) {
                        this.$loadingMore.remove(), this.loading = !1, decorated.call(this, data), this.showLoadingMore(data) && this.$results.append(this.$loadingMore)
                    }, InfiniteScroll.prototype.bind = function(decorated, container, $container) {
                        var self = this;
                        decorated.call(this, container, $container), container.on("query", function(params) {
                            self.lastParams = params, self.loading = !0
                        }), container.on("query:append", function(params) {
                            self.lastParams = params, self.loading = !0
                        }), this.$results.on("scroll", function() {
                            var isLoadMoreVisible = $.contains(document.documentElement, self.$loadingMore[0]);
                            if (!self.loading && isLoadMoreVisible) {
                                var currentOffset = self.$results.offset().top + self.$results.outerHeight(!1),
                                    loadingMoreOffset = self.$loadingMore.offset().top + self.$loadingMore.outerHeight(!1);
                                currentOffset + 50 >= loadingMoreOffset && self.loadMore()
                            }
                        })
                    }, InfiniteScroll.prototype.loadMore = function() {
                        this.loading = !0;
                        var params = $.extend({}, {
                            page: 1
                        }, this.lastParams);
                        params.page++, this.trigger("query:append", params)
                    }, InfiniteScroll.prototype.showLoadingMore = function(_, data) {
                        return data.pagination && data.pagination.more
                    }, InfiniteScroll.prototype.createLoadingMore = function() {
                        var $option = $('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            message = this.options.get("translations").get("loadingMore");
                        return $option.html(message(this.lastParams)), $option
                    }, InfiniteScroll
                }), S2.define("select2/dropdown/attachBody", ["jquery", "../utils"], function($, Utils) {
                    function AttachBody(decorated, $element, options) {
                        this.$dropdownParent = options.get("dropdownParent") || $(document.body), decorated.call(this, $element, options)
                    }
                    return AttachBody.prototype.bind = function(decorated, container, $container) {
                        var self = this,
                            setupResultsEvents = !1;
                        decorated.call(this, container, $container), container.on("open", function() {
                            self._showDropdown(), self._attachPositioningHandler(container), setupResultsEvents || (setupResultsEvents = !0, container.on("results:all", function() {
                                self._positionDropdown(), self._resizeDropdown()
                            }), container.on("results:append", function() {
                                self._positionDropdown(), self._resizeDropdown()
                            }))
                        }), container.on("close", function() {
                            self._hideDropdown(), self._detachPositioningHandler(container)
                        }), this.$dropdownContainer.on("mousedown", function(evt) {
                            evt.stopPropagation()
                        })
                    }, AttachBody.prototype.destroy = function(decorated) {
                        decorated.call(this), this.$dropdownContainer.remove()
                    }, AttachBody.prototype.position = function(decorated, $dropdown, $container) {
                        $dropdown.attr("class", $container.attr("class")), $dropdown.removeClass("select2"), $dropdown.addClass("select2-container--open"), $dropdown.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = $container
                    }, AttachBody.prototype.render = function(decorated) {
                        var $container = $("<span></span>"),
                            $dropdown = decorated.call(this);
                        return $container.append($dropdown), this.$dropdownContainer = $container, $container
                    }, AttachBody.prototype._hideDropdown = function(decorated) {
                        this.$dropdownContainer.detach()
                    }, AttachBody.prototype._attachPositioningHandler = function(decorated, container) {
                        var self = this,
                            scrollEvent = "scroll.select2." + container.id,
                            resizeEvent = "resize.select2." + container.id,
                            orientationEvent = "orientationchange.select2." + container.id,
                            $watchers = this.$container.parents().filter(Utils.hasScroll);
                        $watchers.each(function() {
                            $(this).data("select2-scroll-position", {
                                x: $(this).scrollLeft(),
                                y: $(this).scrollTop()
                            })
                        }), $watchers.on(scrollEvent, function(ev) {
                            var position = $(this).data("select2-scroll-position");
                            $(this).scrollTop(position.y)
                        }), $(window).on(scrollEvent + " " + resizeEvent + " " + orientationEvent, function(e) {
                            self._positionDropdown(), self._resizeDropdown()
                        })
                    }, AttachBody.prototype._detachPositioningHandler = function(decorated, container) {
                        var scrollEvent = "scroll.select2." + container.id,
                            resizeEvent = "resize.select2." + container.id,
                            orientationEvent = "orientationchange.select2." + container.id,
                            $watchers = this.$container.parents().filter(Utils.hasScroll);
                        $watchers.off(scrollEvent), $(window).off(scrollEvent + " " + resizeEvent + " " + orientationEvent)
                    }, AttachBody.prototype._positionDropdown = function() {
                        var $window = $(window),
                            isCurrentlyAbove = this.$dropdown.hasClass("select2-dropdown--above"),
                            isCurrentlyBelow = this.$dropdown.hasClass("select2-dropdown--below"),
                            newDirection = null,
                            offset = (this.$container.position(), this.$container.offset());
                        offset.bottom = offset.top + this.$container.outerHeight(!1);
                        var container = {
                            height: this.$container.outerHeight(!1)
                        };
                        container.top = offset.top, container.bottom = offset.top + container.height;
                        var dropdown = {
                                height: this.$dropdown.outerHeight(!1)
                            },
                            viewport = {
                                top: $window.scrollTop(),
                                bottom: $window.scrollTop() + $window.height()
                            },
                            enoughRoomAbove = viewport.top < offset.top - dropdown.height,
                            enoughRoomBelow = viewport.bottom > offset.bottom + dropdown.height,
                            css = {
                                left: offset.left,
                                top: container.bottom
                            };
                        if ("static" !== this.$dropdownParent[0].style.position) {
                            var parentOffset = this.$dropdownParent.offset();
                            css.top -= parentOffset.top, css.left -= parentOffset.left
                        }
                        isCurrentlyAbove || isCurrentlyBelow || (newDirection = "below"), enoughRoomBelow || !enoughRoomAbove || isCurrentlyAbove ? !enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove && (newDirection = "below") : newDirection = "above", ("above" == newDirection || isCurrentlyAbove && "below" !== newDirection) && (css.top = container.top - dropdown.height), null != newDirection && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + newDirection), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + newDirection)), this.$dropdownContainer.css(css)
                    }, AttachBody.prototype._resizeDropdown = function() {
                        var css = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (css.minWidth = css.width, css.width = "auto"), this.$dropdown.css(css)
                    }, AttachBody.prototype._showDropdown = function(decorated) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, AttachBody
                }), S2.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function countResults(data) {
                        for (var count = 0, d = 0; d < data.length; d++) {
                            var item = data[d];
                            item.children ? count += countResults(item.children) : count++
                        }
                        return count
                    }

                    function MinimumResultsForSearch(decorated, $element, options, dataAdapter) {
                        this.minimumResultsForSearch = options.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), decorated.call(this, $element, options, dataAdapter)
                    }
                    return MinimumResultsForSearch.prototype.showSearch = function(decorated, params) {
                        return countResults(params.data.results) < this.minimumResultsForSearch ? !1 : decorated.call(this, params)
                    }, MinimumResultsForSearch
                }), S2.define("select2/dropdown/selectOnClose", [], function() {
                    function SelectOnClose() {}
                    return SelectOnClose.prototype.bind = function(decorated, container, $container) {
                        var self = this;
                        decorated.call(this, container, $container), container.on("close", function() {
                            self._handleSelectOnClose()
                        })
                    }, SelectOnClose.prototype._handleSelectOnClose = function() {
                        var $highlightedResults = this.getHighlightedResults();
                        if (!($highlightedResults.length < 1)) {
                            var data = $highlightedResults.data("data");
                            null != data.element && data.element.selected || null == data.element && data.selected || this.trigger("select", {
                                data: data
                            })
                        }
                    }, SelectOnClose
                }), S2.define("select2/dropdown/closeOnSelect", [], function() {
                    function CloseOnSelect() {}
                    return CloseOnSelect.prototype.bind = function(decorated, container, $container) {
                        var self = this;
                        decorated.call(this, container, $container), container.on("select", function(evt) {
                            self._selectTriggered(evt)
                        }), container.on("unselect", function(evt) {
                            self._selectTriggered(evt)
                        })
                    }, CloseOnSelect.prototype._selectTriggered = function(_, evt) {
                        var originalEvent = evt.originalEvent;
                        originalEvent && originalEvent.ctrlKey || this.trigger("close", {})
                    }, CloseOnSelect
                }), S2.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function(args) {
                            var overChars = args.input.length - args.maximum,
                                message = "Please delete " + overChars + " character";
                            return 1 != overChars && (message += "s"), message
                        },
                        inputTooShort: function(args) {
                            var remainingChars = args.minimum - args.input.length,
                                message = "Please enter " + remainingChars + " or more characters";
                            return message
                        },
                        loadingMore: function() {
                            return "Loading more results…"
                        },
                        maximumSelected: function(args) {
                            var message = "You can only select " + args.maximum + " item";
                            return 1 != args.maximum && (message += "s"), message
                        },
                        noResults: function() {
                            return "No results found"
                        },
                        searching: function() {
                            return "Searching…"
                        }
                    }
                }), S2.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function($, require, ResultsList, SingleSelection, MultipleSelection, Placeholder, AllowClear, SelectionSearch, EventRelay, Utils, Translation, DIACRITICS, SelectData, ArrayData, AjaxData, Tags, Tokenizer, MinimumInputLength, MaximumInputLength, MaximumSelectionLength, Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll, AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect, EnglishTranslation) {
                    function Defaults() {
                        this.reset()
                    }
                    Defaults.prototype.apply = function(options) {
                        if (options = $.extend({}, this.defaults, options), null == options.dataAdapter) {
                            if (null != options.ajax ? options.dataAdapter = AjaxData : null != options.data ? options.dataAdapter = ArrayData : options.dataAdapter = SelectData, options.minimumInputLength > 0 && (options.dataAdapter = Utils.Decorate(options.dataAdapter, MinimumInputLength)), options.maximumInputLength > 0 && (options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumInputLength)), options.maximumSelectionLength > 0 && (options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumSelectionLength)), options.tags && (options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags)), (null != options.tokenSeparators || null != options.tokenizer) && (options.dataAdapter = Utils.Decorate(options.dataAdapter, Tokenizer)), null != options.query) {
                                var Query = require(options.amdBase + "compat/query");
                                options.dataAdapter = Utils.Decorate(options.dataAdapter, Query)
                            }
                            if (null != options.initSelection) {
                                var InitSelection = require(options.amdBase + "compat/initSelection");
                                options.dataAdapter = Utils.Decorate(options.dataAdapter, InitSelection)
                            }
                        }
                        if (null == options.resultsAdapter && (options.resultsAdapter = ResultsList, null != options.ajax && (options.resultsAdapter = Utils.Decorate(options.resultsAdapter, InfiniteScroll)), null != options.placeholder && (options.resultsAdapter = Utils.Decorate(options.resultsAdapter, HidePlaceholder)), options.selectOnClose && (options.resultsAdapter = Utils.Decorate(options.resultsAdapter, SelectOnClose))), null == options.dropdownAdapter) {
                            if (options.multiple) options.dropdownAdapter = Dropdown;
                            else {
                                var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);
                                options.dropdownAdapter = SearchableDropdown
                            }
                            if (0 !== options.minimumResultsForSearch && (options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, MinimumResultsForSearch)), options.closeOnSelect && (options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, CloseOnSelect)), null != options.dropdownCssClass || null != options.dropdownCss || null != options.adaptDropdownCssClass) {
                                var DropdownCSS = require(options.amdBase + "compat/dropdownCss");
                                options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, DropdownCSS)
                            }
                            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, AttachBody)
                        }
                        if (null == options.selectionAdapter) {
                            if (options.multiple ? options.selectionAdapter = MultipleSelection : options.selectionAdapter = SingleSelection, null != options.placeholder && (options.selectionAdapter = Utils.Decorate(options.selectionAdapter, Placeholder)), options.allowClear && (options.selectionAdapter = Utils.Decorate(options.selectionAdapter, AllowClear)), options.multiple && (options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionSearch)), null != options.containerCssClass || null != options.containerCss || null != options.adaptContainerCssClass) {
                                var ContainerCSS = require(options.amdBase + "compat/containerCss");
                                options.selectionAdapter = Utils.Decorate(options.selectionAdapter, ContainerCSS)
                            }
                            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, EventRelay)
                        }
                        if ("string" == typeof options.language)
                            if (options.language.indexOf("-") > 0) {
                                var languageParts = options.language.split("-"),
                                    baseLanguage = languageParts[0];
                                options.language = [options.language, baseLanguage]
                            } else options.language = [options.language];
                        if ($.isArray(options.language)) {
                            var languages = new Translation;
                            options.language.push("en");
                            for (var languageNames = options.language, l = 0; l < languageNames.length; l++) {
                                var name = languageNames[l],
                                    language = {};
                                try {
                                    language = Translation.loadPath(name)
                                } catch (e) {
                                    try {
                                        name = this.defaults.amdLanguageBase + name, language = Translation.loadPath(name)
                                    } catch (ex) {
                                        options.debug && window.console && console.warn && console.warn('Select2: The language file for "' + name + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                languages.extend(language)
                            }
                            options.translations = languages
                        } else {
                            var baseTranslation = Translation.loadPath(this.defaults.amdLanguageBase + "en"),
                                customTranslation = new Translation(options.language);
                            customTranslation.extend(baseTranslation), options.translations = customTranslation
                        }
                        return options
                    }, Defaults.prototype.reset = function() {
                        function stripDiacritics(text) {
                            function match(a) {
                                return DIACRITICS[a] || a
                            }
                            return text.replace(/[^\u0000-\u007E]/g, match)
                        }

                        function matcher(params, data) {
                            if ("" === $.trim(params.term)) return data;
                            if (data.children && data.children.length > 0) {
                                for (var match = $.extend(!0, {}, data), c = data.children.length - 1; c >= 0; c--) {
                                    var child = data.children[c],
                                        matches = matcher(params, child);
                                    null == matches && match.children.splice(c, 1)
                                }
                                return match.children.length > 0 ? match : matcher(params, match)
                            }
                            var original = stripDiacritics(data.text).toUpperCase(),
                                term = stripDiacritics(params.term).toUpperCase();
                            return original.indexOf(term) > -1 ? data : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: Utils.escapeMarkup,
                            language: EnglishTranslation,
                            matcher: matcher,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(data) {
                                return data
                            },
                            templateResult: function(result) {
                                return result.text
                            },
                            templateSelection: function(selection) {
                                return selection.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, Defaults.prototype.set = function(key, value) {
                        var camelKey = $.camelCase(key),
                            data = {};
                        data[camelKey] = value;
                        var convertedData = Utils._convertData(data);
                        $.extend(this.defaults, convertedData)
                    };
                    var defaults = new Defaults;
                    return defaults
                }), S2.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(require, $, Defaults, Utils) {
                    function Options(options, $element) {
                        if (this.options = options, null != $element && this.fromElement($element), this.options = Defaults.apply(this.options), $element && $element.is("input")) {
                            var InputCompat = require(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = Utils.Decorate(this.options.dataAdapter, InputCompat)
                        }
                    }
                    return Options.prototype.fromElement = function($e) {
                        var excludedData = ["select2"];
                        null == this.options.multiple && (this.options.multiple = $e.prop("multiple")), null == this.options.disabled && (this.options.disabled = $e.prop("disabled")), null == this.options.language && ($e.prop("lang") ? this.options.language = $e.prop("lang").toLowerCase() : $e.closest("[lang]").prop("lang") && (this.options.language = $e.closest("[lang]").prop("lang"))), null == this.options.dir && ($e.prop("dir") ? this.options.dir = $e.prop("dir") : $e.closest("[dir]").prop("dir") ? this.options.dir = $e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), $e.prop("disabled", this.options.disabled), $e.prop("multiple", this.options.multiple), $e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), $e.data("data", $e.data("select2Tags")), $e.data("tags", !0)), $e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), $e.attr("ajax--url", $e.data("ajaxUrl")), $e.data("ajax--url", $e.data("ajaxUrl")));
                        var dataset = {};
                        dataset = $.fn.jquery && "1." == $.fn.jquery.substr(0, 2) && $e[0].dataset ? $.extend(!0, {}, $e[0].dataset, $e.data()) : $e.data();
                        var data = $.extend(!0, {}, dataset);
                        data = Utils._convertData(data);
                        for (var key in data) $.inArray(key, excludedData) > -1 || ($.isPlainObject(this.options[key]) ? $.extend(this.options[key], data[key]) : this.options[key] = data[key]);
                        return this
                    }, Options.prototype.get = function(key) {
                        return this.options[key]
                    }, Options.prototype.set = function(key, val) {
                        this.options[key] = val
                    }, Options
                }), S2.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function($, Options, Utils, KEYS) {
                    var Select2 = function($element, options) {
                        null != $element.data("select2") && $element.data("select2").destroy(), this.$element = $element, this.id = this._generateId($element), options = options || {}, this.options = new Options(options, $element), Select2.__super__.constructor.call(this);
                        var tabindex = $element.attr("tabindex") || 0;
                        $element.data("old-tabindex", tabindex), $element.attr("tabindex", "-1");
                        var DataAdapter = this.options.get("dataAdapter");
                        this.dataAdapter = new DataAdapter($element, this.options);
                        var $container = this.render();
                        this._placeContainer($container);
                        var SelectionAdapter = this.options.get("selectionAdapter");
                        this.selection = new SelectionAdapter($element, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, $container);
                        var DropdownAdapter = this.options.get("dropdownAdapter");
                        this.dropdown = new DropdownAdapter($element, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, $container);
                        var ResultsAdapter = this.options.get("resultsAdapter");
                        this.results = new ResultsAdapter($element, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var self = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(initialData) {
                            self.trigger("selection:update", {
                                data: initialData
                            })
                        }), $element.addClass("select2-hidden-accessible"), $element.attr("aria-hidden", "true"), this._syncAttributes(), $element.data("select2", this)
                    };
                    return Utils.Extend(Select2, Utils.Observable), Select2.prototype._generateId = function($element) {
                        var id = "";
                        return id = null != $element.attr("id") ? $element.attr("id") : null != $element.attr("name") ? $element.attr("name") + "-" + Utils.generateChars(2) : Utils.generateChars(4), id = "select2-" + id
                    }, Select2.prototype._placeContainer = function($container) {
                        $container.insertAfter(this.$element);
                        var width = this._resolveWidth(this.$element, this.options.get("width"));
                        null != width && $container.css("width", width)
                    }, Select2.prototype._resolveWidth = function($element, method) {
                        var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == method) {
                            var styleWidth = this._resolveWidth($element, "style");
                            return null != styleWidth ? styleWidth : this._resolveWidth($element, "element")
                        }
                        if ("element" == method) {
                            var elementWidth = $element.outerWidth(!1);
                            return 0 >= elementWidth ? "auto" : elementWidth + "px"
                        }
                        if ("style" == method) {
                            var style = $element.attr("style");
                            if ("string" != typeof style) return null;
                            for (var attrs = style.split(";"), i = 0, l = attrs.length; l > i; i += 1) {
                                var attr = attrs[i].replace(/\s/g, ""),
                                    matches = attr.match(WIDTH);
                                if (null !== matches && matches.length >= 1) return matches[1]
                            }
                            return null
                        }
                        return method
                    }, Select2.prototype._bindAdapters = function() {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, Select2.prototype._registerDomEvents = function() {
                        var self = this;
                        this.$element.on("change.select2", function() {
                            self.dataAdapter.current(function(data) {
                                self.trigger("selection:update", {
                                    data: data
                                })
                            })
                        }), this._sync = Utils.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                        var observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != observer ? (this._observer = new observer(function(mutations) {
                            $.each(mutations, self._sync)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", self._sync, !1)
                    }, Select2.prototype._registerDataEvents = function() {
                        var self = this;
                        this.dataAdapter.on("*", function(name, params) {
                            self.trigger(name, params)
                        })
                    }, Select2.prototype._registerSelectionEvents = function() {
                        var self = this,
                            nonRelayEvents = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            self.toggleDropdown()
                        }), this.selection.on("focus", function(params) {
                            self.focus(params)
                        }), this.selection.on("*", function(name, params) {
                            -1 === $.inArray(name, nonRelayEvents) && self.trigger(name, params)
                        })
                    }, Select2.prototype._registerDropdownEvents = function() {
                        var self = this;
                        this.dropdown.on("*", function(name, params) {
                            self.trigger(name, params)
                        })
                    }, Select2.prototype._registerResultsEvents = function() {
                        var self = this;
                        this.results.on("*", function(name, params) {
                            self.trigger(name, params)
                        })
                    }, Select2.prototype._registerEvents = function() {
                        var self = this;
                        this.on("open", function() {
                            self.$container.addClass("select2-container--open")
                        }), this.on("close", function() {
                            self.$container.removeClass("select2-container--open")
                        }), this.on("enable", function() {
                            self.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function() {
                            self.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function() {
                            self.$container.removeClass("select2-container--focus")
                        }), this.on("query", function(params) {
                            self.isOpen() || self.trigger("open", {}), this.dataAdapter.query(params, function(data) {
                                self.trigger("results:all", {
                                    data: data,
                                    query: params
                                })
                            })
                        }), this.on("query:append", function(params) {
                            this.dataAdapter.query(params, function(data) {
                                self.trigger("results:append", {
                                    data: data,
                                    query: params
                                })
                            })
                        }), this.on("keypress", function(evt) {
                            var key = evt.which;
                            self.isOpen() ? key === KEYS.ESC || key === KEYS.TAB || key === KEYS.UP && evt.altKey ? (self.close(), evt.preventDefault()) : key === KEYS.ENTER ? (self.trigger("results:select", {}), evt.preventDefault()) : key === KEYS.SPACE && evt.ctrlKey ? (self.trigger("results:toggle", {}), evt.preventDefault()) : key === KEYS.UP ? (self.trigger("results:previous", {}), evt.preventDefault()) : key === KEYS.DOWN && (self.trigger("results:next", {}), evt.preventDefault()) : (key === KEYS.ENTER || key === KEYS.SPACE || key === KEYS.DOWN && evt.altKey) && (self.open(), evt.preventDefault())
                        })
                    }, Select2.prototype._syncAttributes = function() {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, Select2.prototype.trigger = function(name, args) {
                        var actualTrigger = Select2.__super__.trigger,
                            preTriggerMap = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            };
                        if (void 0 === args && (args = {}), name in preTriggerMap) {
                            var preTriggerName = preTriggerMap[name],
                                preTriggerArgs = {
                                    prevented: !1,
                                    name: name,
                                    args: args
                                };
                            if (actualTrigger.call(this, preTriggerName, preTriggerArgs), preTriggerArgs.prevented) return void(args.prevented = !0)
                        }
                        actualTrigger.call(this, name, args)
                    }, Select2.prototype.toggleDropdown = function() {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, Select2.prototype.open = function() {
                        this.isOpen() || this.trigger("query", {})
                    }, Select2.prototype.close = function() {
                        this.isOpen() && this.trigger("close", {})
                    }, Select2.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, Select2.prototype.hasFocus = function() {
                        return this.$container.hasClass("select2-container--focus")
                    }, Select2.prototype.focus = function(data) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, Select2.prototype.enable = function(args) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == args || 0 === args.length) && (args = [!0]);
                        var disabled = !args[0];
                        this.$element.prop("disabled", disabled)
                    }, Select2.prototype.data = function() {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var data = [];
                        return this.dataAdapter.current(function(currentData) {
                            data = currentData
                        }), data
                    }, Select2.prototype.val = function(args) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == args || 0 === args.length) return this.$element.val();
                        var newVal = args[0];
                        $.isArray(newVal) && (newVal = $.map(newVal, function(obj) {
                            return obj.toString()
                        })), this.$element.val(newVal).trigger("change")
                    }, Select2.prototype.destroy = function() {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                    }, Select2.prototype.render = function() {
                        var $container = $('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return $container.attr("dir", this.options.get("dir")), this.$container = $container, this.$container.addClass("select2-container--" + this.options.get("theme")), $container.data("element", this.$element), $container
                    }, Select2
                }), S2.define("select2/compat/utils", ["jquery"], function($) {
                    function syncCssClasses($dest, $src, adapter) {
                        var classes, adapted, replacements = [];
                        classes = $.trim($dest.attr("class")), classes && (classes = "" + classes, $(classes.split(/\s+/)).each(function() {
                            0 === this.indexOf("select2-") && replacements.push(this)
                        })), classes = $.trim($src.attr("class")), classes && (classes = "" + classes, $(classes.split(/\s+/)).each(function() {
                            0 !== this.indexOf("select2-") && (adapted = adapter(this), null != adapted && replacements.push(adapted))
                        })), $dest.attr("class", replacements.join(" "))
                    }
                    return {
                        syncCssClasses: syncCssClasses
                    }
                }), S2.define("select2/compat/containerCss", ["jquery", "./utils"], function($, CompatUtils) {
                    function _containerAdapter(clazz) {
                        return null
                    }

                    function ContainerCSS() {}
                    return ContainerCSS.prototype.render = function(decorated) {
                        var $container = decorated.call(this),
                            containerCssClass = this.options.get("containerCssClass") || "";
                        $.isFunction(containerCssClass) && (containerCssClass = containerCssClass(this.$element));
                        var containerCssAdapter = this.options.get("adaptContainerCssClass");
                        if (containerCssAdapter = containerCssAdapter || _containerAdapter, -1 !== containerCssClass.indexOf(":all:")) {
                            containerCssClass = containerCssClass.replace(":all:", "");
                            var _cssAdapter = containerCssAdapter;
                            containerCssAdapter = function(clazz) {
                                var adapted = _cssAdapter(clazz);
                                return null != adapted ? adapted + " " + clazz : clazz
                            }
                        }
                        var containerCss = this.options.get("containerCss") || {};
                        return $.isFunction(containerCss) && (containerCss = containerCss(this.$element)), CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter), $container.css(containerCss), $container.addClass(containerCssClass), $container
                    }, ContainerCSS
                }), S2.define("select2/compat/dropdownCss", ["jquery", "./utils"], function($, CompatUtils) {
                    function _dropdownAdapter(clazz) {
                        return null
                    }

                    function DropdownCSS() {}
                    return DropdownCSS.prototype.render = function(decorated) {
                        var $dropdown = decorated.call(this),
                            dropdownCssClass = this.options.get("dropdownCssClass") || "";
                        $.isFunction(dropdownCssClass) && (dropdownCssClass = dropdownCssClass(this.$element));
                        var dropdownCssAdapter = this.options.get("adaptDropdownCssClass");
                        if (dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter, -1 !== dropdownCssClass.indexOf(":all:")) {
                            dropdownCssClass = dropdownCssClass.replace(":all:", "");
                            var _cssAdapter = dropdownCssAdapter;
                            dropdownCssAdapter = function(clazz) {
                                var adapted = _cssAdapter(clazz);
                                return null != adapted ? adapted + " " + clazz : clazz
                            }
                        }
                        var dropdownCss = this.options.get("dropdownCss") || {};
                        return $.isFunction(dropdownCss) && (dropdownCss = dropdownCss(this.$element)), CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter), $dropdown.css(dropdownCss), $dropdown.addClass(dropdownCssClass), $dropdown
                    }, DropdownCSS
                }), S2.define("select2/compat/initSelection", ["jquery"], function($) {
                    function InitSelection(decorated, $element, options) {
                        options.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = options.get("initSelection"), this._isInitialized = !1, decorated.call(this, $element, options)
                    }
                    return InitSelection.prototype.current = function(decorated, callback) {
                        var self = this;
                        return this._isInitialized ? void decorated.call(this, callback) : void this.initSelection.call(null, this.$element, function(data) {
                            self._isInitialized = !0, $.isArray(data) || (data = [data]), callback(data)
                        })
                    }, InitSelection
                }), S2.define("select2/compat/inputData", ["jquery"], function($) {
                    function InputData(decorated, $element, options) {
                        this._currentData = [], this._valueSeparator = options.get("valueSeparator") || ",", "hidden" === $element.prop("type") && options.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), decorated.call(this, $element, options)
                    }
                    return InputData.prototype.current = function(_, callback) {
                        function getSelected(data, selectedIds) {
                            var selected = [];
                            return data.selected || -1 !== $.inArray(data.id, selectedIds) ? (data.selected = !0, selected.push(data)) : data.selected = !1, data.children && selected.push.apply(selected, getSelected(data.children, selectedIds)), selected
                        }
                        for (var selected = [], d = 0; d < this._currentData.length; d++) {
                            var data = this._currentData[d];
                            selected.push.apply(selected, getSelected(data, this.$element.val().split(this._valueSeparator)))
                        }
                        callback(selected)
                    }, InputData.prototype.select = function(_, data) {
                        if (this.options.get("multiple")) {
                            var value = this.$element.val();
                            value += this._valueSeparator + data.id, this.$element.val(value), this.$element.trigger("change")
                        } else this.current(function(allData) {
                            $.map(allData, function(data) {
                                data.selected = !1
                            })
                        }), this.$element.val(data.id), this.$element.trigger("change")
                    }, InputData.prototype.unselect = function(_, data) {
                        var self = this;
                        data.selected = !1, this.current(function(allData) {
                            for (var values = [], d = 0; d < allData.length; d++) {
                                var item = allData[d];
                                data.id != item.id && values.push(item.id)
                            }
                            self.$element.val(values.join(self._valueSeparator)), self.$element.trigger("change")
                        })
                    }, InputData.prototype.query = function(_, params, callback) {
                        for (var results = [], d = 0; d < this._currentData.length; d++) {
                            var data = this._currentData[d],
                                matches = this.matches(params, data);
                            null !== matches && results.push(matches)
                        }
                        callback({
                            results: results
                        })
                    }, InputData.prototype.addOptions = function(_, $options) {
                        var options = $.map($options, function($option) {
                            return $.data($option[0], "data")
                        });
                        this._currentData.push.apply(this._currentData, options)
                    }, InputData
                }), S2.define("select2/compat/matcher", ["jquery"], function($) {
                    function oldMatcher(matcher) {
                        function wrappedMatcher(params, data) {
                            var match = $.extend(!0, {}, data);
                            if (null == params.term || "" === $.trim(params.term)) return match;
                            if (data.children) {
                                for (var c = data.children.length - 1; c >= 0; c--) {
                                    var child = data.children[c],
                                        doesMatch = matcher(params.term, child.text, child);
                                    doesMatch || match.children.splice(c, 1)
                                }
                                if (match.children.length > 0) return match
                            }
                            return matcher(params.term, data.text, data) ? match : null
                        }
                        return wrappedMatcher
                    }
                    return oldMatcher
                }), S2.define("select2/compat/query", [], function() {
                    function Query(decorated, $element, options) {
                        options.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), decorated.call(this, $element, options)
                    }
                    return Query.prototype.query = function(_, params, callback) {
                        params.callback = callback;
                        var query = this.options.get("query");
                        query.call(null, params)
                    }, Query
                }), S2.define("select2/dropdown/attachContainer", [], function() {
                    function AttachContainer(decorated, $element, options) {
                        decorated.call(this, $element, options)
                    }
                    return AttachContainer.prototype.position = function(decorated, $dropdown, $container) {
                        var $dropdownContainer = $container.find(".dropdown-wrapper");
                        $dropdownContainer.append($dropdown), $dropdown.addClass("select2-dropdown--below"), $container.addClass("select2-container--below")
                    }, AttachContainer
                }), S2.define("select2/dropdown/stopPropagation", [], function() {
                    function StopPropagation() {}
                    return StopPropagation.prototype.bind = function(decorated, container, $container) {
                        decorated.call(this, container, $container);
                        var stoppedEvents = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$dropdown.on(stoppedEvents.join(" "), function(evt) {
                            evt.stopPropagation()
                        })
                    }, StopPropagation
                }), S2.define("select2/selection/stopPropagation", [], function() {
                    function StopPropagation() {}
                    return StopPropagation.prototype.bind = function(decorated, container, $container) {
                        decorated.call(this, container, $container);
                        var stoppedEvents = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$selection.on(stoppedEvents.join(" "), function(evt) {
                            evt.stopPropagation()
                        })
                    }, StopPropagation
                }),
                function(factory) {
                    "function" == typeof S2.define && S2.define.amd ? S2.define("jquery-mousewheel", ["jquery"], factory) : "object" == typeof exports ? module.exports = factory : factory(jQuery)
                }(function($) {
                    function handler(event) {
                        var orgEvent = event || window.event,
                            args = slice.call(arguments, 1),
                            delta = 0,
                            deltaX = 0,
                            deltaY = 0,
                            absDelta = 0,
                            offsetX = 0,
                            offsetY = 0;
                        if (event = $.event.fix(orgEvent), event.type = "mousewheel", "detail" in orgEvent && (deltaY = -1 * orgEvent.detail), "wheelDelta" in orgEvent && (deltaY = orgEvent.wheelDelta), "wheelDeltaY" in orgEvent && (deltaY = orgEvent.wheelDeltaY), "wheelDeltaX" in orgEvent && (deltaX = -1 * orgEvent.wheelDeltaX), "axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS && (deltaX = -1 * deltaY, deltaY = 0), delta = 0 === deltaY ? deltaX : deltaY, "deltaY" in orgEvent && (deltaY = -1 * orgEvent.deltaY, delta = deltaY), "deltaX" in orgEvent && (deltaX = orgEvent.deltaX, 0 === deltaY && (delta = -1 * deltaX)), 0 !== deltaY || 0 !== deltaX) {
                            if (1 === orgEvent.deltaMode) {
                                var lineHeight = $.data(this, "mousewheel-line-height");
                                delta *= lineHeight, deltaY *= lineHeight, deltaX *= lineHeight
                            } else if (2 === orgEvent.deltaMode) {
                                var pageHeight = $.data(this, "mousewheel-page-height");
                                delta *= pageHeight, deltaY *= pageHeight, deltaX *= pageHeight
                            }
                            if (absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX)), (!lowestDelta || lowestDelta > absDelta) && (lowestDelta = absDelta, shouldAdjustOldDeltas(orgEvent, absDelta) && (lowestDelta /= 40)), shouldAdjustOldDeltas(orgEvent, absDelta) && (delta /= 40, deltaX /= 40, deltaY /= 40), delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta), deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta), deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta), special.settings.normalizeOffset && this.getBoundingClientRect) {
                                var boundingRect = this.getBoundingClientRect();
                                offsetX = event.clientX - boundingRect.left, offsetY = event.clientY - boundingRect.top
                            }
                            return event.deltaX = deltaX, event.deltaY = deltaY, event.deltaFactor = lowestDelta, event.offsetX = offsetX, event.offsetY = offsetY, event.deltaMode = 0, args.unshift(event, delta, deltaX, deltaY), nullLowestDeltaTimeout && clearTimeout(nullLowestDeltaTimeout), nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200), ($.event.dispatch || $.event.handle).apply(this, args)
                        }
                    }

                    function nullLowestDelta() {
                        lowestDelta = null
                    }

                    function shouldAdjustOldDeltas(orgEvent, absDelta) {
                        return special.settings.adjustOldDeltas && "mousewheel" === orgEvent.type && absDelta % 120 === 0
                    }
                    var nullLowestDeltaTimeout, lowestDelta, toFix = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        toBind = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        slice = Array.prototype.slice;
                    if ($.event.fixHooks)
                        for (var i = toFix.length; i;) $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
                    var special = $.event.special.mousewheel = {
                        version: "3.1.12",
                        setup: function() {
                            if (this.addEventListener)
                                for (var i = toBind.length; i;) this.addEventListener(toBind[--i], handler, !1);
                            else this.onmousewheel = handler;
                            $.data(this, "mousewheel-line-height", special.getLineHeight(this)), $.data(this, "mousewheel-page-height", special.getPageHeight(this))
                        },
                        teardown: function() {
                            if (this.removeEventListener)
                                for (var i = toBind.length; i;) this.removeEventListener(toBind[--i], handler, !1);
                            else this.onmousewheel = null;
                            $.removeData(this, "mousewheel-line-height"), $.removeData(this, "mousewheel-page-height")
                        },
                        getLineHeight: function(elem) {
                            var $elem = $(elem),
                                $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
                            return $parent.length || ($parent = $("body")), parseInt($parent.css("fontSize"), 10) || parseInt($elem.css("fontSize"), 10) || 16
                        },
                        getPageHeight: function(elem) {
                            return $(elem).height()
                        },
                        settings: {
                            adjustOldDeltas: !0,
                            normalizeOffset: !0
                        }
                    };
                    $.fn.extend({
                        mousewheel: function(fn) {
                            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel")
                        },
                        unmousewheel: function(fn) {
                            return this.unbind("mousewheel", fn)
                        }
                    })
                }), S2.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function($, _, Select2, Defaults) {
                    if (null == $.fn.select2) {
                        var thisMethods = ["open", "close", "destroy"];
                        $.fn.select2 = function(options) {
                            if (options = options || {}, "object" == typeof options) return this.each(function() {
                                var instanceOptions = $.extend(!0, {}, options);
                                new Select2($(this), instanceOptions)
                            }), this;
                            if ("string" == typeof options) {
                                var ret;
                                return this.each(function() {
                                    var instance = $(this).data("select2");
                                    null == instance && window.console && console.error && console.error("The select2('" + options + "') method was called on an element that is not using Select2.");
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    ret = instance[options].apply(instance, args)
                                }), $.inArray(options, thisMethods) > -1 ? this : ret
                            }
                            throw new Error("Invalid arguments for Select2: " + options)
                        }
                    }
                    return null == $.fn.select2.defaults && ($.fn.select2.defaults = Defaults), Select2
                }), {
                    define: S2.define,
                    require: S2.require
                }
        }(),
        select2 = S2.require("jquery.select2");
    return jQuery.fn.select2.amd = S2, select2
}),
function($, w, undefined) {
    "use strict";

    function Sly(frame, options, callbackMap) {
        function load(isInit) {
            var lastItemsCount = 0,
                lastPagesCount = pages.length;
            if (pos.old = $.extend({}, pos), frameSize = parallax ? 0 : $frame[o.horizontal ? "width" : "height"](), sbSize = $sb[o.horizontal ? "width" : "height"](), slideeSize = parallax ? frame : $slidee[o.horizontal ? "outerWidth" : "outerHeight"](), pages.length = 0, pos.start = 0, pos.end = max(slideeSize - frameSize, 0), itemNav) {
                lastItemsCount = items.length, $items = $slidee.children(o.itemSelector), items.length = 0;
                var lastItem, paddingStart = getPx($slidee, o.horizontal ? "paddingLeft" : "paddingTop"),
                    paddingEnd = getPx($slidee, o.horizontal ? "paddingRight" : "paddingBottom"),
                    borderBox = "border-box" === $($items).css("boxSizing"),
                    areFloated = "none" !== $items.css("float"),
                    ignoredMargin = 0,
                    lastItemIndex = $items.length - 1;
                slideeSize = 0, $items.each(function(i, element) {
                    var $item = $(element),
                        rect = element.getBoundingClientRect(),
                        itemSize = round(o.horizontal ? rect.width || rect.right - rect.left : rect.height || rect.bottom - rect.top),
                        itemMarginStart = getPx($item, o.horizontal ? "marginLeft" : "marginTop"),
                        itemMarginEnd = getPx($item, o.horizontal ? "marginRight" : "marginBottom"),
                        itemSizeFull = itemSize + itemMarginStart + itemMarginEnd,
                        singleSpaced = !itemMarginStart || !itemMarginEnd,
                        item = {};
                    item.el = element, item.size = singleSpaced ? itemSize : itemSizeFull, item.half = item.size / 2, item.start = slideeSize + (singleSpaced ? itemMarginStart : 0), item.center = item.start - round(frameSize / 2 - item.size / 2), item.end = item.start - frameSize + item.size, i || (slideeSize += paddingStart), slideeSize += itemSizeFull, o.horizontal || areFloated || itemMarginEnd && itemMarginStart && i > 0 && (slideeSize -= min(itemMarginStart, itemMarginEnd)), i === lastItemIndex && (item.end += paddingEnd, slideeSize += paddingEnd, ignoredMargin = singleSpaced ? itemMarginEnd : 0), items.push(item), lastItem = item
                }), $slidee[0].style[o.horizontal ? "width" : "height"] = (borderBox ? slideeSize : slideeSize - paddingStart - paddingEnd) + "px", slideeSize -= ignoredMargin, items.length ? (pos.start = items[0][forceCenteredNav ? "center" : "start"], pos.end = forceCenteredNav ? lastItem.center : slideeSize > frameSize ? lastItem.end : pos.start) : pos.start = pos.end = 0
            }
            if (pos.center = round(pos.end / 2 + pos.start / 2), updateRelatives(), $handle.length && sbSize > 0 && (o.dynamicHandle ? (handleSize = pos.start === pos.end ? sbSize : round(sbSize * frameSize / slideeSize), handleSize = within(handleSize, o.minHandleSize, sbSize), $handle[0].style[o.horizontal ? "width" : "height"] = handleSize + "px") : handleSize = $handle[o.horizontal ? "outerWidth" : "outerHeight"](), hPos.end = sbSize - handleSize, renderID || syncScrollbar()), !parallax && frameSize > 0) {
                var tempPagePos = pos.start,
                    pagesHtml = "";
                if (itemNav) $.each(items, function(i, item) {
                    forceCenteredNav ? pages.push(item.center) : item.start + item.size > tempPagePos && tempPagePos <= pos.end && (tempPagePos = item.start, pages.push(tempPagePos), tempPagePos += frameSize, tempPagePos > pos.end && tempPagePos < pos.end + frameSize && pages.push(pos.end))
                });
                else
                    for (; tempPagePos - frameSize < pos.end;) pages.push(tempPagePos), tempPagePos += frameSize;
                if ($pb[0] && lastPagesCount !== pages.length) {
                    for (var i = 0; i < pages.length; i++) pagesHtml += o.pageBuilder.call(self, i);
                    $pages = $pb.html(pagesHtml).children(), $pages.eq(rel.activePage).addClass(o.activeClass)
                }
            }
            if (rel.slideeSize = slideeSize, rel.frameSize = frameSize, rel.sbSize = sbSize, rel.handleSize = handleSize, itemNav) {
                isInit && null != o.startAt && (activate(o.startAt), self[centeredNav ? "toCenter" : "toStart"](o.startAt));
                var activeItem = items[rel.activeItem];
                slideTo(centeredNav && activeItem ? activeItem.center : within(pos.dest, pos.start, pos.end))
            } else isInit ? null != o.startAt && slideTo(o.startAt, 1) : slideTo(within(pos.dest, pos.start, pos.end));
            trigger("load")
        }

        function slideTo(newPos, immediate, dontAlign) {
            if (itemNav && dragging.released && !dontAlign) {
                var tempRel = getRelatives(newPos),
                    isNotBordering = newPos > pos.start && newPos < pos.end;
                centeredNav ? (isNotBordering && (newPos = items[tempRel.centerItem].center), forceCenteredNav && o.activateMiddle && activate(tempRel.centerItem)) : isNotBordering && (newPos = items[tempRel.firstItem].start)
            }
            dragging.init && dragging.slidee && o.elasticBounds ? newPos > pos.end ? newPos = pos.end + (newPos - pos.end) / 6 : newPos < pos.start && (newPos = pos.start + (newPos - pos.start) / 6) : newPos = within(newPos, pos.start, pos.end), animation.start = +new Date, animation.time = 0, animation.from = pos.cur, animation.to = newPos, animation.delta = newPos - pos.cur, animation.tweesing = dragging.tweese || dragging.init && !dragging.slidee, animation.immediate = !animation.tweesing && (immediate || dragging.init && dragging.slidee || !o.speed), dragging.tweese = 0, newPos !== pos.dest && (pos.dest = newPos, trigger("change"), renderID || render()), resetCycle(), updateRelatives(), updateButtonsState(), syncPagesbar()
        }

        function render() {
            if (self.initialized) {
                if (!renderID) return renderID = rAF(render), void(dragging.released && trigger("moveStart"));
                animation.immediate ? pos.cur = animation.to : animation.tweesing ? (animation.tweeseDelta = animation.to - pos.cur, abs(animation.tweeseDelta) < .1 ? pos.cur = animation.to : pos.cur += animation.tweeseDelta * (dragging.released ? o.swingSpeed : o.syncSpeed)) : (animation.time = min(+new Date - animation.start, o.speed), pos.cur = animation.from + animation.delta * $.easing[o.easing](animation.time / o.speed, animation.time, 0, 1, o.speed)), animation.to === pos.cur ? (pos.cur = animation.to, dragging.tweese = renderID = 0) : renderID = rAF(render), trigger("move"), parallax || (transform ? $slidee[0].style[transform] = gpuAcceleration + (o.horizontal ? "translateX" : "translateY") + "(" + -pos.cur + "px)" : $slidee[0].style[o.horizontal ? "left" : "top"] = -round(pos.cur) + "px"), !renderID && dragging.released && trigger("moveEnd"), syncScrollbar()
            }
        }

        function syncScrollbar() {
            $handle.length && (hPos.cur = pos.start === pos.end ? 0 : ((dragging.init && !dragging.slidee ? pos.dest : pos.cur) - pos.start) / (pos.end - pos.start) * hPos.end, hPos.cur = within(round(hPos.cur), hPos.start, hPos.end), last.hPos !== hPos.cur && (last.hPos = hPos.cur, transform ? $handle[0].style[transform] = gpuAcceleration + (o.horizontal ? "translateX" : "translateY") + "(" + hPos.cur + "px)" : $handle[0].style[o.horizontal ? "left" : "top"] = hPos.cur + "px"))
        }

        function syncPagesbar() {
            $pages[0] && last.page !== rel.activePage && (last.page = rel.activePage, $pages.removeClass(o.activeClass).eq(rel.activePage).addClass(o.activeClass), trigger("activePage", last.page))
        }

        function moveLoop() {
            move.speed && pos.cur !== (move.speed > 0 ? pos.end : pos.start) || self.stop(), continuousID = dragging.init ? rAF(moveLoop) : 0, move.now = +new Date, move.pos = pos.cur + (move.now - move.lastTime) / 1e3 * move.speed, slideTo(dragging.init ? move.pos : round(move.pos)), dragging.init || pos.cur !== pos.dest || trigger("moveEnd"), move.lastTime = move.now
        }

        function to(location, item, immediate) {
            if ("boolean" === type(item) && (immediate = item, item = undefined), item === undefined) slideTo(pos[location], immediate);
            else {
                if (centeredNav && "center" !== location) return;
                var itemPos = self.getPos(item);
                itemPos && slideTo(itemPos[location], immediate, !centeredNav)
            }
        }

        function getIndex(item) {
            return null != item ? isNumber(item) ? item >= 0 && item < items.length ? item : -1 : $items.index(item) : -1
        }

        function getRelativeIndex(item) {
            return getIndex(isNumber(item) && 0 > item ? item + items.length : item)
        }

        function activate(item, force) {
            var index = getIndex(item);
            return !itemNav || 0 > index ? !1 : ((last.active !== index || force) && ($items.eq(rel.activeItem).removeClass(o.activeClass), $items.eq(index).addClass(o.activeClass), last.active = rel.activeItem = index, updateButtonsState(), trigger("active", index)), index)
        }

        function getRelatives(slideePos) {
            slideePos = within(isNumber(slideePos) ? slideePos : pos.dest, pos.start, pos.end);
            var relatives = {},
                centerOffset = forceCenteredNav ? 0 : frameSize / 2;
            if (!parallax)
                for (var p = 0, pl = pages.length; pl > p; p++) {
                    if (slideePos >= pos.end || p === pages.length - 1) {
                        relatives.activePage = pages.length - 1;
                        break
                    }
                    if (slideePos <= pages[p] + centerOffset) {
                        relatives.activePage = p;
                        break
                    }
                }
            if (itemNav) {
                for (var first = !1, last = !1, center = !1, i = 0, il = items.length; il > i; i++)
                    if (first === !1 && slideePos <= items[i].start + items[i].half && (first = i), center === !1 && slideePos <= items[i].center + items[i].half && (center = i), i === il - 1 || slideePos <= items[i].end + items[i].half) {
                        last = i;
                        break
                    }
                relatives.firstItem = isNumber(first) ? first : 0, relatives.centerItem = isNumber(center) ? center : relatives.firstItem, relatives.lastItem = isNumber(last) ? last : relatives.centerItem
            }
            return relatives
        }

        function updateRelatives(newPos) {
            $.extend(rel, getRelatives(newPos))
        }

        function updateButtonsState() {
            var isStart = pos.dest <= pos.start,
                isEnd = pos.dest >= pos.end,
                slideePosState = (isStart ? 1 : 0) | (isEnd ? 2 : 0);
            if (last.slideePosState !== slideePosState && (last.slideePosState = slideePosState, $prevPageButton.is("button,input") && $prevPageButton.prop("disabled", isStart), $nextPageButton.is("button,input") && $nextPageButton.prop("disabled", isEnd), $prevPageButton.add($backwardButton)[isStart ? "addClass" : "removeClass"](o.disabledClass), $nextPageButton.add($forwardButton)[isEnd ? "addClass" : "removeClass"](o.disabledClass)), last.fwdbwdState !== slideePosState && dragging.released && (last.fwdbwdState = slideePosState, $backwardButton.is("button,input") && $backwardButton.prop("disabled", isStart), $forwardButton.is("button,input") && $forwardButton.prop("disabled", isEnd)), itemNav && null != rel.activeItem) {
                var isFirst = 0 === rel.activeItem,
                    isLast = rel.activeItem >= items.length - 1,
                    itemsButtonState = (isFirst ? 1 : 0) | (isLast ? 2 : 0);
                last.itemsButtonState !== itemsButtonState && (last.itemsButtonState = itemsButtonState, $prevButton.is("button,input") && $prevButton.prop("disabled", isFirst), $nextButton.is("button,input") && $nextButton.prop("disabled", isLast), $prevButton[isFirst ? "addClass" : "removeClass"](o.disabledClass), $nextButton[isLast ? "addClass" : "removeClass"](o.disabledClass))
            }
        }

        function moveItem(item, position, after) {
            if (item = getRelativeIndex(item), position = getRelativeIndex(position), item > -1 && position > -1 && item !== position && (!after || position !== item - 1) && (after || position !== item + 1)) {
                $items.eq(item)[after ? "insertAfter" : "insertBefore"](items[position].el);
                var shiftStart = position > item ? item : after ? position : position - 1,
                    shiftEnd = item > position ? item : after ? position + 1 : position,
                    shiftsUp = item > position;
                null != rel.activeItem && (item === rel.activeItem ? last.active = rel.activeItem = after ? shiftsUp ? position + 1 : position : shiftsUp ? position : position - 1 : rel.activeItem > shiftStart && rel.activeItem < shiftEnd && (last.active = rel.activeItem += shiftsUp ? 1 : -1)), load()
            }
        }

        function callbackIndex(name, fn) {
            for (var i = 0, l = callbacks[name].length; l > i; i++)
                if (callbacks[name][i] === fn) return i;
            return -1
        }

        function resetCycle() {
            dragging.released && !self.isPaused && self.resume()
        }

        function handleToSlidee(handlePos) {
            return round(within(handlePos, hPos.start, hPos.end) / hPos.end * (pos.end - pos.start)) + pos.start
        }

        function draggingHistoryTick() {
            dragging.history[0] = dragging.history[1], dragging.history[1] = dragging.history[2], dragging.history[2] = dragging.history[3], dragging.history[3] = dragging.delta
        }

        function continuousInit(source) {
            dragging.released = 0, dragging.source = source, dragging.slidee = "slidee" === source
        }

        function dragInit(event) {
            var isTouch = "touchstart" === event.type,
                source = event.data.source,
                isSlidee = "slidee" === source;
            dragging.init || !isTouch && isInteractive(event.target) || ("handle" !== source || o.dragHandle && hPos.start !== hPos.end) && (!isSlidee || (isTouch ? o.touchDragging : o.mouseDragging && event.which < 2)) && (isTouch || stopDefault(event), continuousInit(source), dragging.init = 0, dragging.$source = $(event.target), dragging.touch = isTouch, dragging.pointer = isTouch ? event.originalEvent.touches[0] : event, dragging.initX = dragging.pointer.pageX, dragging.initY = dragging.pointer.pageY, dragging.initPos = isSlidee ? pos.cur : hPos.cur, dragging.start = +new Date, dragging.time = 0, dragging.path = 0, dragging.delta = 0, dragging.locked = 0, dragging.history = [0, 0, 0, 0], dragging.pathToLock = isSlidee ? isTouch ? 30 : 10 : 0, $doc.on(isTouch ? dragTouchEvents : dragMouseEvents, dragHandler), self.pause(1), (isSlidee ? $slidee : $handle).addClass(o.draggedClass), trigger("moveStart"), isSlidee && (historyID = setInterval(draggingHistoryTick, 10)))
        }

        function dragHandler(event) {
            if (dragging.released = "mouseup" === event.type || "touchend" === event.type, dragging.pointer = dragging.touch ? event.originalEvent[dragging.released ? "changedTouches" : "touches"][0] : event, dragging.pathX = dragging.pointer.pageX - dragging.initX, dragging.pathY = dragging.pointer.pageY - dragging.initY, dragging.path = sqrt(pow(dragging.pathX, 2) + pow(dragging.pathY, 2)), dragging.delta = o.horizontal ? dragging.pathX : dragging.pathY, dragging.released || !(dragging.path < 1)) {
                if (!dragging.init) {
                    if (dragging.path < o.dragThreshold) return dragging.released ? dragEnd() : undefined;
                    if (!(o.horizontal ? abs(dragging.pathX) > abs(dragging.pathY) : abs(dragging.pathX) < abs(dragging.pathY))) return dragEnd();
                    dragging.init = 1
                }
                stopDefault(event), !dragging.locked && dragging.path > dragging.pathToLock && dragging.slidee && (dragging.locked = 1, dragging.$source.on(clickEvent, disableOneEvent)), dragging.released && (dragEnd(), o.releaseSwing && dragging.slidee && (dragging.swing = (dragging.delta - dragging.history[0]) / 40 * 300, dragging.delta += dragging.swing, dragging.tweese = abs(dragging.swing) > 10)), slideTo(dragging.slidee ? round(dragging.initPos - dragging.delta) : handleToSlidee(dragging.initPos + dragging.delta))
            }
        }

        function dragEnd() {
            clearInterval(historyID), dragging.released = !0, $doc.off(dragging.touch ? dragTouchEvents : dragMouseEvents, dragHandler), (dragging.slidee ? $slidee : $handle).removeClass(o.draggedClass), setTimeout(function() {
                dragging.$source.off(clickEvent, disableOneEvent)
            }), pos.cur === pos.dest && dragging.init && trigger("moveEnd"), self.resume(1), dragging.init = 0
        }

        function isInteractive(element) {
            return ~$.inArray(element.nodeName, interactiveElements) || $(element).is(o.interactive)
        }

        function movementReleaseHandler() {
            self.stop(), $doc.off("mouseup", movementReleaseHandler)
        }

        function buttonsHandler(event) {
            switch (stopDefault(event), this) {
                case $forwardButton[0]:
                case $backwardButton[0]:
                    self.moveBy($forwardButton.is(this) ? o.moveBy : -o.moveBy), $doc.on("mouseup", movementReleaseHandler);
                    break;
                case $prevButton[0]:
                    self.prev();
                    break;
                case $nextButton[0]:
                    self.next();
                    break;
                case $prevPageButton[0]:
                    self.prevPage();
                    break;
                case $nextPageButton[0]:
                    self.nextPage()
            }
        }

        function normalizeWheelDelta(event) {
            return scrolling.curDelta = (o.horizontal ? event.deltaY || event.deltaX : event.deltaY) || -event.wheelDelta, scrolling.curDelta /= 1 === event.deltaMode ? 3 : 100, itemNav ? (time = +new Date, scrolling.last < time - scrolling.resetTime && (scrolling.delta = 0), scrolling.last = time, scrolling.delta += scrolling.curDelta, abs(scrolling.delta) < 1 ? scrolling.finalDelta = 0 : (scrolling.finalDelta = round(scrolling.delta / 1), scrolling.delta %= 1), scrolling.finalDelta) : scrolling.curDelta
        }

        function scrollHandler(event) {
            event.originalEvent[namespace] = self;
            var time = +new Date;
            if (lastGlobalWheel + o.scrollHijack > time && $scrollSource[0] !== document && $scrollSource[0] !== window) return void(lastGlobalWheel = time);
            if (o.scrollBy && pos.start !== pos.end) {
                var delta = normalizeWheelDelta(event.originalEvent);
                (o.scrollTrap || delta > 0 && pos.dest < pos.end || 0 > delta && pos.dest > pos.start) && stopDefault(event, 1), self.slideBy(o.scrollBy * delta)
            }
        }

        function scrollbarHandler(event) {
            o.clickBar && event.target === $sb[0] && (stopDefault(event), slideTo(handleToSlidee((o.horizontal ? event.pageX - $sb.offset().left : event.pageY - $sb.offset().top) - handleSize / 2)))
        }

        function keyboardHandler(event) {
            if (o.keyboardNavBy) switch (event.which) {
                case o.horizontal ? 37:
                    38: stopDefault(event), self["pages" === o.keyboardNavBy ? "prevPage" : "prev"]();
                    break;
                case o.horizontal ? 39:
                    40: stopDefault(event), self["pages" === o.keyboardNavBy ? "nextPage" : "next"]()
            }
        }

        function activateHandler(event) {
            return isInteractive(this) ? void(event.originalEvent[namespace + "ignore"] = !0) : void(this.parentNode !== $slidee[0] || event.originalEvent[namespace + "ignore"] || self.activate(this))
        }

        function activatePageHandler() {
            this.parentNode === $pb[0] && self.activatePage($pages.index(this))
        }

        function pauseOnHoverHandler(event) {
            o.pauseOnHover && self["mouseenter" === event.type ? "pause" : "resume"](2)
        }

        function trigger(name, arg1) {
            if (callbacks[name]) {
                for (l = callbacks[name].length, tmpArray.length = 0, i = 0; l > i; i++) tmpArray.push(callbacks[name][i]);
                for (i = 0; l > i; i++) tmpArray[i].call(self, name, arg1)
            }
        }
        if (!(this instanceof Sly)) return new Sly(frame, options, callbackMap);
        var i, l, o = $.extend({}, Sly.defaults, options),
            self = this,
            parallax = isNumber(frame),
            $frame = $(frame),
            $slidee = o.slidee ? $(o.slidee).eq(0) : $frame.children().eq(0),
            frameSize = 0,
            slideeSize = 0,
            pos = {
                start: 0,
                center: 0,
                end: 0,
                cur: 0,
                dest: 0
            },
            $sb = $(o.scrollBar).eq(0),
            $handle = $sb.children().eq(0),
            sbSize = 0,
            handleSize = 0,
            hPos = {
                start: 0,
                end: 0,
                cur: 0
            },
            $pb = $(o.pagesBar),
            $pages = 0,
            pages = [],
            $items = 0,
            items = [],
            rel = {
                firstItem: 0,
                lastItem: 0,
                centerItem: 0,
                activeItem: null,
                activePage: 0
            },
            frameStyles = new StyleRestorer($frame[0]),
            slideeStyles = new StyleRestorer($slidee[0]),
            sbStyles = new StyleRestorer($sb[0]),
            handleStyles = new StyleRestorer($handle[0]),
            basicNav = "basic" === o.itemNav,
            forceCenteredNav = "forceCentered" === o.itemNav,
            centeredNav = "centered" === o.itemNav || forceCenteredNav,
            itemNav = !parallax && (basicNav || centeredNav || forceCenteredNav),
            $scrollSource = o.scrollSource ? $(o.scrollSource) : $frame,
            $dragSource = o.dragSource ? $(o.dragSource) : $frame,
            $forwardButton = $(o.forward),
            $backwardButton = $(o.backward),
            $prevButton = $(o.prev),
            $nextButton = $(o.next),
            $prevPageButton = $(o.prevPage),
            $nextPageButton = $(o.nextPage),
            callbacks = {},
            last = {},
            animation = {},
            move = {},
            dragging = {
                released: 1
            },
            scrolling = {
                last: 0,
                delta: 0,
                resetTime: 200
            },
            renderID = 0,
            historyID = 0,
            cycleID = 0,
            continuousID = 0;
        parallax || (frame = $frame[0]), self.initialized = 0, self.frame = frame, self.slidee = $slidee[0], self.pos = pos, self.rel = rel, self.items = items, self.pages = pages, self.isPaused = 0, self.options = o, self.dragging = dragging, self.reload = function() {
            load()
        }, self.getPos = function(item) {
            if (itemNav) {
                var index = getIndex(item);
                return -1 !== index ? items[index] : !1
            }
            var $item = $slidee.find(item).eq(0);
            if ($item[0]) {
                var offset = o.horizontal ? $item.offset().left - $slidee.offset().left : $item.offset().top - $slidee.offset().top,
                    size = $item[o.horizontal ? "outerWidth" : "outerHeight"]();
                return {
                    start: offset,
                    center: offset - frameSize / 2 + size / 2,
                    end: offset - frameSize + size,
                    size: size
                }
            }
            return !1
        }, self.moveBy = function(speed) {
            move.speed = speed, !dragging.init && move.speed && pos.cur !== (move.speed > 0 ? pos.end : pos.start) && (move.lastTime = +new Date, move.startPos = pos.cur, continuousInit("button"), dragging.init = 1, trigger("moveStart"), cAF(continuousID), moveLoop())
        }, self.stop = function() {
            "button" === dragging.source && (dragging.init = 0, dragging.released = 1)
        }, self.prev = function() {
            self.activate(null == rel.activeItem ? 0 : rel.activeItem - 1)
        }, self.next = function() {
            self.activate(null == rel.activeItem ? 0 : rel.activeItem + 1)
        }, self.prevPage = function() {
            self.activatePage(rel.activePage - 1)
        }, self.nextPage = function() {
            self.activatePage(rel.activePage + 1)
        }, self.slideBy = function(delta, immediate) {
            delta && (itemNav ? self[centeredNav ? "toCenter" : "toStart"](within((centeredNav ? rel.centerItem : rel.firstItem) + o.scrollBy * delta, 0, items.length)) : slideTo(pos.dest + delta, immediate))
        }, self.slideTo = function(pos, immediate) {
            slideTo(pos, immediate)
        }, self.toStart = function(item, immediate) {
            to("start", item, immediate)
        }, self.toEnd = function(item, immediate) {
            to("end", item, immediate)
        }, self.toCenter = function(item, immediate) {
            to("center", item, immediate)
        }, self.getIndex = getIndex, self.activate = function(item, immediate) {
            var index = activate(item);
            o.smart && index !== !1 && (centeredNav ? self.toCenter(index, immediate) : index >= rel.lastItem ? self.toStart(index, immediate) : index <= rel.firstItem ? self.toEnd(index, immediate) : resetCycle())
        }, self.activatePage = function(index, immediate) {
            isNumber(index) && slideTo(pages[within(index, 0, pages.length - 1)], immediate)
        }, self.resume = function(priority) {
            o.cycleBy && o.cycleInterval && ("items" !== o.cycleBy || items[0] && null != rel.activeItem) && !(priority < self.isPaused) && (self.isPaused = 0, cycleID ? cycleID = clearTimeout(cycleID) : trigger("resume"), cycleID = setTimeout(function() {
                switch (trigger("cycle"), o.cycleBy) {
                    case "items":
                        self.activate(rel.activeItem >= items.length - 1 ? 0 : rel.activeItem + 1);
                        break;
                    case "pages":
                        self.activatePage(rel.activePage >= pages.length - 1 ? 0 : rel.activePage + 1)
                }
            }, o.cycleInterval))
        }, self.pause = function(priority) {
            priority < self.isPaused || (self.isPaused = priority || 100, cycleID && (cycleID = clearTimeout(cycleID), trigger("pause")))
        }, self.toggle = function() {
            self[cycleID ? "pause" : "resume"]()
        }, self.set = function(name, value) {
            $.isPlainObject(name) ? $.extend(o, name) : o.hasOwnProperty(name) && (o[name] = value)
        }, self.add = function(element, index) {
            var $element = $(element);
            itemNav ? (null == index || !items[0] || index >= items.length ? $element.appendTo($slidee) : items.length && $element.insertBefore(items[index].el), null != rel.activeItem && index <= rel.activeItem && (last.active = rel.activeItem += $element.length)) : $slidee.append($element), load()
        }, self.remove = function(element) {
            if (itemNav) {
                var index = getRelativeIndex(element);
                if (index > -1) {
                    $items.eq(index).remove();
                    var reactivate = index === rel.activeItem;
                    null != rel.activeItem && index < rel.activeItem && (last.active = --rel.activeItem), load(), reactivate && (last.active = null, self.activate(rel.activeItem))
                }
            } else $(element).remove(), load()
        }, self.moveAfter = function(item, position) {
            moveItem(item, position, 1)
        }, self.moveBefore = function(item, position) {
            moveItem(item, position)
        }, self.on = function(name, fn) {
            if ("object" === type(name))
                for (var key in name) name.hasOwnProperty(key) && self.on(key, name[key]);
            else if ("function" === type(fn))
                for (var names = name.split(" "), n = 0, nl = names.length; nl > n; n++) callbacks[names[n]] = callbacks[names[n]] || [], -1 === callbackIndex(names[n], fn) && callbacks[names[n]].push(fn);
            else if ("array" === type(fn))
                for (var f = 0, fl = fn.length; fl > f; f++) self.on(name, fn[f])
        }, self.one = function(name, fn) {
            function proxy() {
                fn.apply(self, arguments), self.off(name, proxy)
            }
            self.on(name, proxy)
        }, self.off = function(name, fn) {
            if (fn instanceof Array)
                for (var f = 0, fl = fn.length; fl > f; f++) self.off(name, fn[f]);
            else
                for (var names = name.split(" "), n = 0, nl = names.length; nl > n; n++)
                    if (callbacks[names[n]] = callbacks[names[n]] || [], null == fn) callbacks[names[n]].length = 0;
                    else {
                        var index = callbackIndex(names[n], fn); - 1 !== index && callbacks[names[n]].splice(index, 1)
                    }
        }, self.destroy = function() {
            return Sly.removeInstance(frame), $scrollSource.add($handle).add($sb).add($pb).add($forwardButton).add($backwardButton).add($prevButton).add($nextButton).add($prevPageButton).add($nextPageButton).off("." + namespace), $doc.off("keydown", keyboardHandler), $prevButton.add($nextButton).add($prevPageButton).add($nextPageButton).removeClass(o.disabledClass), $items && null != rel.activeItem && $items.eq(rel.activeItem).removeClass(o.activeClass), $pb.empty(), parallax || ($frame.off("." + namespace), frameStyles.restore(), slideeStyles.restore(), sbStyles.restore(), handleStyles.restore(), $.removeData(frame, namespace)), items.length = pages.length = 0, last = {}, self.initialized = 0, self
        }, self.init = function() {
            if (!self.initialized) {
                if (Sly.getInstance(frame)) throw new Error("There is already a Sly instance on this element");
                Sly.storeInstance(frame, self), self.on(callbackMap);
                var holderProps = ["overflow", "position"],
                    movableProps = ["position", "webkitTransform", "msTransform", "transform", "left", "top", "width", "height"];
                frameStyles.save.apply(frameStyles, holderProps), sbStyles.save.apply(sbStyles, holderProps), slideeStyles.save.apply(slideeStyles, movableProps), handleStyles.save.apply(handleStyles, movableProps);
                var $movables = $handle;
                return parallax || ($movables = $movables.add($slidee), $frame.css("overflow", "hidden"), transform || "static" !== $frame.css("position") || $frame.css("position", "relative")), transform ? gpuAcceleration && $movables.css(transform, gpuAcceleration) : ("static" === $sb.css("position") && $sb.css("position", "relative"), $movables.css({
                        position: "absolute"
                    })), o.forward && $forwardButton.on(mouseDownEvent, buttonsHandler), o.backward && $backwardButton.on(mouseDownEvent, buttonsHandler), o.prev && $prevButton.on(clickEvent, buttonsHandler), o.next && $nextButton.on(clickEvent, buttonsHandler), o.prevPage && $prevPageButton.on(clickEvent, buttonsHandler), o.nextPage && $nextPageButton.on(clickEvent, buttonsHandler), $scrollSource.on(wheelEvent, scrollHandler),
                    $sb[0] && $sb.on(clickEvent, scrollbarHandler), itemNav && o.activateOn && $frame.on(o.activateOn + "." + namespace, "*", activateHandler), $pb[0] && o.activatePageOn && $pb.on(o.activatePageOn + "." + namespace, "*", activatePageHandler), $dragSource.on(dragInitEvents, {
                        source: "slidee"
                    }, dragInit), $handle && $handle.on(dragInitEvents, {
                        source: "handle"
                    }, dragInit), $doc.on("keydown", keyboardHandler), parallax || ($frame.on("mouseenter." + namespace + " mouseleave." + namespace, pauseOnHoverHandler), $frame.on("scroll." + namespace, resetScroll)), self.initialized = 1, load(!0), o.cycleBy && !parallax && self[o.startPaused ? "pause" : "resume"](), self
            }
        }
    }

    function type(value) {
        return null == value ? String(value) : "object" == typeof value || "function" == typeof value ? Object.prototype.toString.call(value).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof value
    }

    function stopDefault(event, noBubbles) {
        event.preventDefault(), noBubbles && event.stopPropagation()
    }

    function disableOneEvent(event) {
        stopDefault(event, 1), $(this).off(event.type, disableOneEvent)
    }

    function resetScroll() {
        this.scrollLeft = 0, this.scrollTop = 0
    }

    function isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value)
    }

    function getPx($item, property) {
        return 0 | round(String($item.css(property)).replace(/[^\-0-9.]/g, ""))
    }

    function within(number, min, max) {
        return min > number ? min : number > max ? max : number
    }

    function StyleRestorer(element) {
        var self = {};
        return self.style = {}, self.save = function() {
            if (element && element.nodeType) {
                for (var i = 0; i < arguments.length; i++) self.style[arguments[i]] = element.style[arguments[i]];
                return self
            }
        }, self.restore = function() {
            if (element && element.nodeType) {
                for (var prop in self.style) self.style.hasOwnProperty(prop) && (element.style[prop] = self.style[prop]);
                return self
            }
        }, self
    }
    var transform, gpuAcceleration, time, pluginName = "sly",
        className = "Sly",
        namespace = pluginName,
        cAF = w.cancelAnimationFrame || w.cancelRequestAnimationFrame,
        rAF = w.requestAnimationFrame,
        $doc = $(document),
        dragInitEvents = "touchstart." + namespace + " mousedown." + namespace,
        dragMouseEvents = "mousemove." + namespace + " mouseup." + namespace,
        dragTouchEvents = "touchmove." + namespace + " touchend." + namespace,
        wheelEvent = (document.implementation.hasFeature("Event.wheel", "3.0") ? "wheel." : "mousewheel.") + namespace,
        clickEvent = "click." + namespace,
        mouseDownEvent = "mousedown." + namespace,
        interactiveElements = ["INPUT", "SELECT", "BUTTON", "TEXTAREA"],
        tmpArray = [],
        abs = Math.abs,
        sqrt = Math.sqrt,
        pow = Math.pow,
        round = Math.round,
        max = Math.max,
        min = Math.min,
        lastGlobalWheel = 0;
    $doc.on(wheelEvent, function(event) {
            var sly = event.originalEvent[namespace],
                time = +new Date;
            (!sly || sly.options.scrollHijack < time - lastGlobalWheel) && (lastGlobalWheel = time)
        }), Sly.getInstance = function(element) {
            return $.data(element, namespace)
        }, Sly.storeInstance = function(element, sly) {
            return $.data(element, namespace, sly)
        }, Sly.removeInstance = function(element) {
            return $.removeData(element, namespace)
        },
        function(w) {
            function fallback(fn) {
                var curr = (new Date).getTime(),
                    ms = Math.max(0, 16 - (curr - prev)),
                    req = setTimeout(fn, ms);
                return prev = curr, req
            }
            rAF = w.requestAnimationFrame || w.webkitRequestAnimationFrame || fallback;
            var prev = (new Date).getTime(),
                cancel = w.cancelAnimationFrame || w.webkitCancelAnimationFrame || w.clearTimeout;
            cAF = function(id) {
                cancel.call(w, id)
            }
        }(window),
        function() {
            function testProp(prop) {
                for (var p = 0, pl = prefixes.length; pl > p; p++) {
                    var prefixedProp = prefixes[p] ? prefixes[p] + prop.charAt(0).toUpperCase() + prop.slice(1) : prop;
                    if (null != el.style[prefixedProp]) return prefixedProp
                }
            }
            var prefixes = ["", "Webkit", "Moz", "ms", "O"],
                el = document.createElement("div");
            transform = testProp("transform"), gpuAcceleration = testProp("perspective") ? "translateZ(0) " : ""
        }(), w[className] = Sly, $.fn[pluginName] = function(options, callbackMap) {
            var method, methodArgs;
            return $.isPlainObject(options) || (("string" === type(options) || options === !1) && (method = options === !1 ? "destroy" : options, methodArgs = Array.prototype.slice.call(arguments, 1)), options = {}), this.each(function(i, element) {
                var plugin = Sly.getInstance(element);
                plugin || method ? plugin && method && plugin[method] && plugin[method].apply(plugin, methodArgs) : plugin = new Sly(element, options, callbackMap).init()
            })
        }, Sly.defaults = {
            slidee: null,
            horizontal: !1,
            itemNav: null,
            itemSelector: null,
            smart: !1,
            activateOn: null,
            activateMiddle: !1,
            scrollSource: null,
            scrollBy: 0,
            scrollHijack: 300,
            scrollTrap: !1,
            dragSource: null,
            mouseDragging: !1,
            touchDragging: !1,
            releaseSwing: !1,
            swingSpeed: .2,
            elasticBounds: !1,
            dragThreshold: 3,
            interactive: null,
            scrollBar: null,
            dragHandle: !1,
            dynamicHandle: !1,
            minHandleSize: 50,
            clickBar: !1,
            syncSpeed: .5,
            pagesBar: null,
            activatePageOn: null,
            pageBuilder: function(index) {
                return "<li>" + (index + 1) + "</li>"
            },
            forward: null,
            backward: null,
            prev: null,
            next: null,
            prevPage: null,
            nextPage: null,
            cycleBy: null,
            cycleInterval: 5e3,
            pauseOnHover: !1,
            startPaused: !1,
            moveBy: 300,
            speed: 0,
            easing: "swing",
            startAt: null,
            keyboardNavBy: null,
            draggedClass: "dragged",
            activeClass: "active",
            disabledClass: "disabled"
        }
}(jQuery, window),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(t, s) {
        var n, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position"),
                s = "absolute" === i,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function() {
                    var t = e(this);
                    return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function(i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        },
        tabbable: function(i) {
            var s = e.attr(i, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
        function s(t, i, s, a) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function(t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
                e(this).css(a, s(this, t) + "px")
            })
        }, e.fn["outer" + i] = function(t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                e(this).css(a, s(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                    if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    n = n.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, i, s) {
            var n, a = e.ui[t].prototype;
            for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
        },
        call: function(e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var s = 0,
        n = Array.prototype.slice;
    e.cleanData = function(t) {
            return function(i) {
                var s, n, a;
                for (a = 0; null != (n = i[a]); a++) try {
                    s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
                } catch (o) {}
                t(i)
            }
        }(e.cleanData), e.widget = function(t, i, s) {
            var n, a, o, r, h = {},
                l = t.split(".")[0];
            return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) {
                return !!e.data(t, n)
            }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) {
                return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new o(e, t)
            }, e.extend(o, a, {
                version: s.version,
                _proto: e.extend({}, s),
                _childConstructors: []
            }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) {
                return e.isFunction(s) ? void(h[t] = function() {
                    var e = function() {
                            return i.prototype[t].apply(this, arguments)
                        },
                        n = function(e) {
                            return i.prototype[t].apply(this, e)
                        };
                    return function() {
                        var t, i = this._super,
                            a = this._superApply;
                        return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                    }
                }()) : void(h[t] = s)
            }), o.prototype = e.widget.extend(r, {
                widgetEventPrefix: a ? r.widgetEventPrefix || t : t
            }, h, {
                constructor: o,
                namespace: l,
                widgetName: t,
                widgetFullName: n
            }), a ? (e.each(a._childConstructors, function(t, i) {
                var s = i.prototype;
                e.widget(s.namespace + "." + s.widgetName, o, i._proto)
            }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
        }, e.widget.extend = function(t) {
            for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
                for (i in a[o]) s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
            return t
        }, e.widget.bridge = function(t, i) {
            var s = i.prototype.widgetFullName || t;
            e.fn[t] = function(a) {
                var o = "string" == typeof a,
                    r = n.call(arguments, 1),
                    h = this;
                return o ? this.each(function() {
                    var i, n = e.data(this, s);
                    return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
                }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function() {
                    var t = e.data(this, s);
                    t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
                })), h
            }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(t, i) {
                i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === i && this.destroy()
                    }
                }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: e.noop,
            widget: function() {
                return this.element
            },
            option: function(t, i) {
                var s, n, a, o = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                        for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                        if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                        n[t] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        o[t] = i
                    }
                return this._setOptions(o), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(t, i, s) {
                var n, a = this;
                "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
                    function r() {
                        return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                    }
                    "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                    var h = s.match(/^([\w:-]*)\s*(.*)$/),
                        l = h[1] + a.eventNamespace,
                        u = h[2];
                    u ? n.delegate(u, l, r) : i.bind(l, r)
                })
            },
            _off: function(t, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function(e, t) {
                function i() {
                    return ("string" == typeof e ? s[e] : e).apply(s, arguments)
                }
                var s = this;
                return setTimeout(i, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        e(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(t) {
                        e(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        e(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(t) {
                        e(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(t, i, s) {
                var n, a, o = this.options[t];
                if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                    for (n in a) n in i || (i[n] = a[n]);
                return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, i) {
            e.Widget.prototype["_" + t] = function(s, n, a) {
                "string" == typeof n && (n = {
                    effect: n
                });
                var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
                n = n || {}, "number" == typeof n && (n = {
                    duration: n
                }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
                    e(this)[t](), a && a.call(s[0]), i()
                })
            }
        }), e.widget,
        function() {
            function t(e, t, i) {
                return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
            }

            function i(t, i) {
                return parseInt(e.css(t, i), 10) || 0
            }

            function s(t) {
                var i = t[0];
                return 9 === i.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(i) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            e.ui = e.ui || {};
            var n, a, o = Math.max,
                r = Math.abs,
                h = Math.round,
                l = /left|center|right/,
                u = /top|center|bottom/,
                d = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                p = /%$/,
                f = e.fn.position;
            e.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== n) return n;
                        var t, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            a = s.children()[0];
                        return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i
                    },
                    getScrollInfo: function(t) {
                        var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                            a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
                        return {
                            width: a ? e.position.scrollbarWidth() : 0,
                            height: n ? e.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(t) {
                        var i = e(t || window),
                            s = e.isWindow(i[0]),
                            n = !!i[0] && 9 === i[0].nodeType;
                        return {
                            element: i,
                            isWindow: s,
                            isDocument: n,
                            offset: i.offset() || {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: i.scrollLeft(),
                            scrollTop: i.scrollTop(),
                            width: s || n ? i.width() : i.outerWidth(),
                            height: s || n ? i.height() : i.outerHeight()
                        }
                    }
                }, e.fn.position = function(n) {
                    if (!n || !n.of) return f.apply(this, arguments);
                    n = e.extend({}, n);
                    var p, m, g, v, y, b, _ = e(n.of),
                        x = e.position.getWithinInfo(n.within),
                        w = e.position.getScrollInfo(x),
                        k = (n.collision || "flip").split(" "),
                        T = {};
                    return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function() {
                        var e, t, i = (n[this] || "").split(" ");
                        1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                    }), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function() {
                        var s, l, u = e(this),
                            d = u.outerWidth(),
                            c = u.outerHeight(),
                            f = i(this, "marginLeft"),
                            b = i(this, "marginTop"),
                            D = d + f + i(this, "marginRight") + w.width,
                            S = c + b + i(this, "marginBottom") + w.height,
                            N = e.extend({}, y),
                            M = t(T.my, u.outerWidth(), u.outerHeight());
                        "right" === n.my[0] ? N.left -= d : "center" === n.my[0] && (N.left -= d / 2), "bottom" === n.my[1] ? N.top -= c : "center" === n.my[1] && (N.top -= c / 2), N.left += M[0], N.top += M[1], a || (N.left = h(N.left), N.top = h(N.top)), s = {
                            marginLeft: f,
                            marginTop: b
                        }, e.each(["left", "top"], function(t, i) {
                            e.ui.position[k[t]] && e.ui.position[k[t]][i](N, {
                                targetWidth: m,
                                targetHeight: g,
                                elemWidth: d,
                                elemHeight: c,
                                collisionPosition: s,
                                collisionWidth: D,
                                collisionHeight: S,
                                offset: [p[0] + M[0], p[1] + M[1]],
                                my: n.my,
                                at: n.at,
                                within: x,
                                elem: u
                            })
                        }), n.using && (l = function(e) {
                            var t = v.left - N.left,
                                i = t + m - d,
                                s = v.top - N.top,
                                a = s + g - c,
                                h = {
                                    target: {
                                        element: _,
                                        left: v.left,
                                        top: v.top,
                                        width: m,
                                        height: g
                                    },
                                    element: {
                                        element: u,
                                        left: N.left,
                                        top: N.top,
                                        width: d,
                                        height: c
                                    },
                                    horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
                                    vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                                };
                            d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h)
                        }), u.offset(e.extend(N, {
                            using: l
                        }))
                    })
                }, e.ui.position = {
                    fit: {
                        left: function(e, t) {
                            var i, s = t.within,
                                n = s.isWindow ? s.scrollLeft : s.offset.left,
                                a = s.width,
                                r = e.left - t.collisionPosition.marginLeft,
                                h = n - r,
                                l = r + t.collisionWidth - a - n;
                            t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left)
                        },
                        top: function(e, t) {
                            var i, s = t.within,
                                n = s.isWindow ? s.scrollTop : s.offset.top,
                                a = t.within.height,
                                r = e.top - t.collisionPosition.marginTop,
                                h = n - r,
                                l = r + t.collisionHeight - a - n;
                            t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top)
                        }
                    },
                    flip: {
                        left: function(e, t) {
                            var i, s, n = t.within,
                                a = n.offset.left + n.scrollLeft,
                                o = n.width,
                                h = n.isWindow ? n.scrollLeft : n.offset.left,
                                l = e.left - t.collisionPosition.marginLeft,
                                u = l - h,
                                d = l + t.collisionWidth - o - h,
                                c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                                p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                                f = -2 * t.offset[0];
                            0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f))
                        },
                        top: function(e, t) {
                            var i, s, n = t.within,
                                a = n.offset.top + n.scrollTop,
                                o = n.height,
                                h = n.isWindow ? n.scrollTop : n.offset.top,
                                l = e.top - t.collisionPosition.marginTop,
                                u = l - h,
                                d = l + t.collisionHeight - o - h,
                                c = "top" === t.my[1],
                                p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                                f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                                m = -2 * t.offset[1];
                            0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, (i > 0 || d > r(i)) && (e.top += p + f + m))
                        }
                    },
                    flipfit: {
                        left: function() {
                            e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function() {
                    var t, i, s, n, o, r = document.getElementsByTagName("body")[0],
                        h = document.createElement("div");
                    t = document.createElement(r ? "div" : "body"), s = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, r && e.extend(s, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (o in s) t.style[o] = s[o];
                    t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t)
                }()
        }(), e.ui.position, e.widget("ui.tooltip", {
            version: "1.11.4",
            options: {
                content: function() {
                    var t = e(this).attr("title") || "";
                    return e("<a>").text(t).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function(t, i) {
                var s = (t.attr("aria-describedby") || "").split(/\s+/);
                s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" ")))
            },
            _removeDescribedBy: function(t) {
                var i = t.data("ui-tooltip-id"),
                    s = (t.attr("aria-describedby") || "").split(/\s+/),
                    n = e.inArray(i, s); - 1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"), s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby")
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
            },
            _setOption: function(t, i) {
                var s = this;
                return "disabled" === t ? (this[i ? "_disable" : "_enable"](), void(this.options[t] = i)) : (this._super(t, i), void("content" === t && e.each(this.tooltips, function(e, t) {
                    s._updateContent(t.element)
                })))
            },
            _disable: function() {
                var t = this;
                e.each(this.tooltips, function(i, s) {
                    var n = e.Event("blur");
                    n.target = n.currentTarget = s.element[0], t.close(n, !0)
                }), this.element.find(this.options.items).addBack().each(function() {
                    var t = e(this);
                    t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
                })
            },
            _enable: function() {
                this.element.find(this.options.items).addBack().each(function() {
                    var t = e(this);
                    t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                })
            },
            open: function(t) {
                var i = this,
                    s = e(t ? t.target : this.element).closest(this.options.items);
                s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function() {
                    var t, s = e(this);
                    s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: s.attr("title")
                    }, s.attr("title", ""))
                }), this._registerCloseHandlers(t, s), this._updateContent(s, t))
            },
            _updateContent: function(e, t) {
                var i, s = this.options.content,
                    n = this,
                    a = t ? t.type : null;
                return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function(i) {
                    n._delay(function() {
                        e.data("ui-tooltip-open") && (t && (t.type = a), this._open(t, e, i))
                    })
                }), void(i && this._open(t, e, i)))
            },
            _open: function(t, i, s) {
                function n(e) {
                    l.of = e, o.is(":hidden") || o.position(l)
                }
                var a, o, r, h, l = e.extend({}, this.options.position);
                if (s) {
                    if (a = this._find(i)) return void a.tooltip.find(".ui-tooltip-content").html(s);
                    i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), o = a.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (h = s.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = s, e("<div>").html(h).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                        mousemove: n
                    }), n(t)) : o.position(e.extend({
                        of: i
                    }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                        o.is(":visible") && (n(l.of), clearInterval(r))
                    }, e.fx.interval)), this._trigger("open", t, {
                        tooltip: o
                    })
                }
            },
            _registerCloseHandlers: function(t, i) {
                var s = {
                    keyup: function(t) {
                        if (t.keyCode === e.ui.keyCode.ESCAPE) {
                            var s = e.Event(t);
                            s.currentTarget = i[0], this.close(s, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (s.remove = function() {
                    this._removeTooltip(this._find(i).tooltip)
                }), t && "mouseover" !== t.type || (s.mouseleave = "close"), t && "focusin" !== t.type || (s.focusout = "close"), this._on(!0, i, s)
            },
            close: function(t) {
                var i, s = this,
                    n = e(t ? t.currentTarget : this.element),
                    a = this._find(n);
                return a ? (i = a.tooltip, void(a.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), a.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                    s._removeTooltip(e(this))
                }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function(t, i) {
                    e(i.element).attr("title", i.title), delete s.parents[t]
                }), a.closing = !0, this._trigger("close", t, {
                    tooltip: i
                }), a.hiding || (a.closing = !1)))) : void n.removeData("ui-tooltip-open")
            },
            _tooltip: function(t) {
                var i = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                    s = i.uniqueId().attr("id");
                return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = {
                    element: t,
                    tooltip: i
                }
            },
            _find: function(e) {
                var t = e.data("ui-tooltip-id");
                return t ? this.tooltips[t] : null
            },
            _removeTooltip: function(e) {
                e.remove(), delete this.tooltips[e.attr("id")]
            },
            _destroy: function() {
                var t = this;
                e.each(this.tooltips, function(i, s) {
                    var n = e.Event("blur"),
                        a = s.element;
                    n.target = n.currentTarget = a[0], t.close(n, !0), e("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        })
}), ! function(e, n, t) {
    function o(e) {
        var n = u.className,
            t = Modernizr._config.classPrefix || "";
        if (p && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(o, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), p ? u.className.baseVal = n : u.className = n)
    }

    function s(e, n) {
        return typeof e === n
    }

    function a() {
        var e, n, t, o, a, i, r;
        for (var l in c)
            if (c.hasOwnProperty(l)) {
                if (e = [], n = c[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = s(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) i = e[a], r = i.split("."), 1 === r.length ? Modernizr[r[0]] = o : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = o), f.push((o ? "" : "no-") + r.join("-"))
            }
    }

    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function r() {
        var e = n.body;
        return e || (e = i(p ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, t, o, s) {
        var a, l, f, c, d = "modernizr",
            p = i("div"),
            h = r();
        if (parseInt(o, 10))
            for (; o--;) f = i("div"), f.id = s ? s[o] : d + (o + 1), p.appendChild(f);
        return a = i("style"), a.type = "text/css", a.id = "s" + d, (h.fake ? h : p).appendChild(a), h.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), p.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = u.style.overflow, u.style.overflow = "hidden", u.appendChild(h)), l = t(p, e), h.fake ? (h.parentNode.removeChild(h), u.style.overflow = c, u.offsetHeight) : p.parentNode.removeChild(p), !!l
    }
    var f = [],
        c = [],
        d = {
            _version: "3.2.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                c.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                c.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = d, Modernizr = new Modernizr;
    var u = n.documentElement,
        p = "svg" === u.nodeName.toLowerCase(),
        h = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    d._prefixes = h;
    var m = d.testStyles = l;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            m(o, function(e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    }), a(), o(f), delete d.addTest, delete d.addAsyncTest;
    for (var v = 0; v < Modernizr._q.length; v++) Modernizr._q[v]();
    e.Modernizr = Modernizr
}(window, document),
function($, window, document, undefined) {
    var $window = $(window);
    $.fn.lazyload = function(options) {
        function update() {
            var counter = 0;
            elements.each(function() {
                var $this = $(this);
                if (!settings.skip_invisible || $this.is(":visible"))
                    if ($.abovethetop(this, settings) || $.leftofbegin(this, settings));
                    else if ($.belowthefold(this, settings) || $.rightoffold(this, settings)) {
                    if (++counter > settings.failure_limit) return !1
                } else $this.trigger("appear"), counter = 0
            })
        }
        var $container, elements = this,
            settings = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: window,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null,
                error: null,
                complete: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return options && (undefined !== options.failurelimit && (options.failure_limit = options.failurelimit, delete options.failurelimit), undefined !== options.effectspeed && (options.effect_speed = options.effectspeed, delete options.effectspeed), $.extend(settings, options)), $container = settings.container === undefined || settings.container === window ? $window : $(settings.container), 0 === settings.event.indexOf("scroll") && $container.bind(settings.event, function() {
            return update()
        }), this.each(function() {
            var self = this,
                $self = $(self);
            self.loaded = !1, ($self.attr("src") === undefined || $self.attr("src") === !1) && $self.attr("src", settings.placeholder), $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings)
                    }
                    $("<img />").bind("load", function() {
                        var original = $self.data(settings.data_attribute);
                        if ($self.hide(), $self.is("img") ? $self.attr("src", original) : $self.css("background-image", "url('" + original + "')"), $self[settings.effect](settings.effect_speed), self.loaded = !0, elements = elements.not(self), settings.load) {
                            var elements_left = elements.length;
                            settings.load.call(self, elements_left, settings)
                        }
                        settings.complete && 0 === elements.length && settings.complete.call()
                    }).bind("error", function() {
                        elements = elements.not(self);
                        var elements_left = elements.length;
                        settings.complete && 0 === elements_left && settings.complete.call(), settings.error && settings.error.call(self, elements_left, settings)
                    }).attr("src", $self.data(settings.data_attribute))
                }
            }), 0 !== settings.event.indexOf("scroll") && $self.bind(settings.event, function() {
                self.loaded || $self.trigger("appear")
            })
        }), $window.bind("resize", function() {
            update()
        }), /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && $window.bind("pageshow", function(event) {
            event.originalEvent && event.originalEvent.persisted && elements.each(function() {
                $(this).trigger("appear")
            })
        }), $(document).ready(function() {
            update()
        }), this;
    }, $.belowthefold = function(element, settings) {
        var fold;
        return fold = settings.container === undefined || settings.container === window ? (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop() : $(settings.container).offset().top + $(settings.container).height(), fold <= $(element).offset().top - settings.threshold
    }, $.rightoffold = function(element, settings) {
        var fold;
        return fold = settings.container === undefined || settings.container === window ? $window.width() + $window.scrollLeft() : $(settings.container).offset().left + $(settings.container).width(), fold <= $(element).offset().left - settings.threshold
    }, $.abovethetop = function(element, settings) {
        var fold;
        return fold = settings.container === undefined || settings.container === window ? $window.scrollTop() : $(settings.container).offset().top, fold >= $(element).offset().top + settings.threshold + $(element).height()
    }, $.leftofbegin = function(element, settings) {
        var fold;
        return fold = settings.container === undefined || settings.container === window ? $window.scrollLeft() : $(settings.container).offset().left, fold >= $(element).offset().left + settings.threshold + $(element).width()
    }, $.inviewport = function(element, settings) {
        return !($.rightoffold(element, settings) || $.leftofbegin(element, settings) || $.belowthefold(element, settings) || $.abovethetop(element, settings))
    }, $.extend($.expr[":"], {
        "below-the-fold": function(a) {
            return $.belowthefold(a, {
                threshold: 0
            })
        },
        "above-the-top": function(a) {
            return !$.belowthefold(a, {
                threshold: 0
            })
        },
        "right-of-screen": function(a) {
            return $.rightoffold(a, {
                threshold: 0
            })
        },
        "left-of-screen": function(a) {
            return !$.rightoffold(a, {
                threshold: 0
            })
        },
        "in-viewport": function(a) {
            return $.inviewport(a, {
                threshold: 0
            })
        },
        "above-the-fold": function(a) {
            return !$.belowthefold(a, {
                threshold: 0
            })
        },
        "right-of-fold": function(a) {
            return $.rightoffold(a, {
                threshold: 0
            })
        },
        "left-of-fold": function(a) {
            return !$.rightoffold(a, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document), $(document).ready(function() {
    ajax_forms(), $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked: !1
            },
            title: {
                type: "inside",
                position: "top"
            }
        },
        beforeShow: function() {
            var url = $(this.element).find("img").data("url");
            url && (this.title = '<a href="' + url + '" target="_blank">' + this.title + ' <span class="link-arrow">&rarr;</span></a>')
        }
    })
}), window.landmarkMapInit = function() {
    window.maps = window.maps || [];
    for (var $mapWrapper, $map, maps = window.maps, mapPos = 0, mapsLength = maps.length; mapsLength > mapPos; mapPos++) maps[mapPos].initialized || ! function(map) {
        $map = $("#" + map.id), $mapWrapper = $map.closest(".lauda-map__wrapper"), $mapWrapper.toggleSpinner(), "landmark" === map.type ? $.getJSON("/", {
            api: 1,
            action: "get-map-for-landmark",
            resource_id: map.resourceId
        }, function(data) {
            map.currentLandmark = data.currentLandmark, map.relatedLandmarks = data.relatedLandmarks, window.loadGeoObjects(map), $mapWrapper.toggleSpinner()
        }) : "street" === map.type ? $.getJSON("/", {
            api: 1,
            action: "get-map-for-street",
            resource_id: map.resourceId
        }, function(data) {
            map.relatedLandmarks = data.relatedLandmarks, window.loadGeoObjects(map), $mapWrapper.toggleSpinner()
        }) : "tour" === map.type ? $.getJSON("/", {
            api: 1,
            action: "get-map-for-tour",
            resource_id: map.resourceId
        }, function(data) {
            map.relatedLandmarks = data.relatedLandmarks, window.loadGeoObjects(map), $mapWrapper.toggleSpinner()
        }) : "landmarks-list" === map.type && $.getJSON("/", {
            api: 1,
            action: "get-map-for-landmarks-list",
            resource_id: map.resourceId
        }, function(data) {
            map.relatedLandmarks = data.relatedLandmarks, window.loadGeoObjects(map), $mapWrapper.toggleSpinner()
        })
    }(maps[mapPos])
}, window.createTemplatesForMap = function() {
    var balloonLayout = ymaps.templateLayoutFactory.createClass('<div class="map-item__full">$[[options.contentLayout]]<div class="map-item__full-close">&times;</div></div>', {
            build: function() {
                this.constructor.superclass.build.call(this), this._$element = $(".map-item__full", this.getParentElement()), this.applyElementOffset(), this._$element.on("click", ".map-item__full-close", $.proxy(this.onCloseClick, this))
            },
            clear: function() {
                this._$element.find(".map-item__full-close").off("click"), this.constructor.superclass.clear.call(this)
            },
            onSublayoutSizeChange: function() {
                balloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments), this._isElement(this._$element) && (this.applyElementOffset(), this.events.fire("shapechange"))
            },
            applyElementOffset: function() {
                this._$element.css({
                    left: -(this._$element[0].offsetWidth / 2),
                    top: -(this._$element[0].offsetHeight / 2)
                })
            },
            onCloseClick: function(e) {
                e.preventDefault(), this.events.fire("userclose")
            },
            getShape: function() {
                if (!this._isElement(this._$element)) return balloonLayout.superclass.getShape.call(this);
                var position = this._$element.position();
                return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                    [position.left, position.top],
                    [position.left + this._$element[0].offsetWidth, position.top + this._$element[0].offsetHeight]
                ]))
            },
            _isElement: function(element) {
                return element && element[0]
            }
        }),
        balloonContentLayout = ymaps.templateLayoutFactory.createClass('<div class="map-item__full-inner">$[properties.balloonContent]</div>'),
        panelContentLayout = ymaps.templateLayoutFactory.createClass('<div class="map-item__full-inner map-item__full-inner_panel">$[properties.balloonContent]</div>'),
        iconLayoutVerySmall = ymaps.templateLayoutFactory.createClass('<div><img class="map-item__preview map-item__preview_very-small" src="$[properties.previewImage]"></div>'),
        iconLayoutSmall = ymaps.templateLayoutFactory.createClass('<div><img class="map-item__preview map-item__preview_small" src="$[properties.previewImage]"></div>'),
        iconLayoutNormal = ymaps.templateLayoutFactory.createClass('<div><img class="map-item__preview map-item__preview_normal" src="$[properties.previewImage]"></div>'),
        clusterIconLayout = ymaps.templateLayoutFactory.createClass('<div class="map-item__cluster">   <div class="map-item__cluster-image-wrapper">       <img class="map-item__cluster-image" src="{{ properties.geoObjects[0].properties.previewImage }}">   </div>   <div class="map-item__cluster-text">{{ properties.geoObjects.length }}</div></div>');
    return {
        layout: balloonLayout,
        contentLayout: balloonContentLayout,
        panelContentLayout: panelContentLayout,
        iconLayoutVerySmall: iconLayoutVerySmall,
        iconLayoutSmall: iconLayoutSmall,
        iconLayoutNormal: iconLayoutNormal,
        clusterIconLayout: clusterIconLayout
    }
}, window.loadGeoObjects = function(mapData) {
    if (mapData.initialized = !0, 0 === mapData.relatedLandmarks.length) return void $("#" + mapData.id).closest(".lauda-map__wrapper").remove();
    var $mapWrapper = $("#" + mapData.id).closest(".lauda-map__wrapper"),
        map = new ymaps.Map(mapData.id, {
            checkZoomRange: !0,
            center: mapData.currentLandmark ? mapData.currentLandmark.placemarkCoords : mapData.relatedLandmarks[0].placemarkCoords,
            zoom: 15,
            type: "yandex#map",
            controls: ["zoomControl", "fullscreenControl"]
        });
    map.behaviors.disable("scrollZoom"), map.controls.add("geolocationControl", {
        "float": "right"
    }), mapData.map = map;
    var geoObjects = [],
        balloonTemplates = window.createTemplatesForMap(),
        objectManager = new ymaps.ObjectManager({
            clusterize: !0,
            geoObjectOpenBalloonOnClick: !1,
            clusterIconLayout: balloonTemplates.clusterIconLayout,
            clusterIconShape: {
                type: "Rectangle",
                coordinates: [
                    [0, 0],
                    [35, 35]
                ]
            },
            maxZoom: 15
        });
    if (objectManager.objects.options.set("balloonLayout", balloonTemplates.layout), objectManager.objects.options.set("balloonContentLayout", balloonTemplates.contentLayout), objectManager.objects.options.set("balloonPanelContentLayout", balloonTemplates.panelContentLayout), objectManager.objects.options.set("iconLayout", balloonTemplates.iconLayoutNormal), objectManager.clusters.options.set("hasBalloon", !1), mapData.currentLandmark) {
        var mainPlacemark = new ymaps.Placemark(mapData.currentLandmark.placemarkCoords, {
            hintContent: mapData.currentLandmark.address,
            uri: mapData.currentLandmark.uri,
            image: mapData.currentLandmark.bigImage,
            longtitle: mapData.currentLandmark.title,
            balloonContentBody: mapData.currentLandmark.address
        }, {
            preset: "islands#redIcon",
            hasBalloon: !0,
            zIndex: 1e3
        });
        map.geoObjects.add(mainPlacemark)
    }
    if (objectManager.objects.events.add("click", function(e) {
            var objectId = e.get("objectId"),
                object = objectManager.objects.getById(objectId);
            object.properties.balloonContent = '<a href="' + object.properties.uri + '" class="map-item__full-link"><img src="' + object.properties.image + '" alt="" class="map-item__full-image"><a href="' + object.properties.uri + '" class="map-item__full-title-wrapper"><div class="map-item__full-title">' + object.properties.longtitle + '</div></a></a>"', objectManager.objects.balloon.open(objectId), $mapWrapper.find(".lauda-map__select").data("dontChangePosition", 1), $mapWrapper.find(".lauda-map__select").val(object.properties.position).trigger("change")
        }), mapData.currentLandmark ? $mapWrapper.find(".lauda-map__select").append('<option value="-1" selected>' + mainPlacemark.properties.get("longtitle") + "</option>") : $mapWrapper.find(".lauda-map__select").append('<option value="">Поиск достопримечательностей</option>'), mapData.relatedLandmarks)
        for (var relatedLandmark in mapData.relatedLandmarks) mapData.currentLandmark && mapData.currentLandmark.uri == mapData.relatedLandmarks[relatedLandmark].uri || (geoObjects.push({
            type: "Feature",
            id: relatedLandmark,
            geometry: {
                type: "Point",
                coordinates: mapData.relatedLandmarks[relatedLandmark].placemarkCoords
            },
            properties: {
                hintContent: mapData.relatedLandmarks[relatedLandmark].title,
                uri: mapData.relatedLandmarks[relatedLandmark].uri,
                image: mapData.relatedLandmarks[relatedLandmark].bigImage,
                previewImage: mapData.relatedLandmarks[relatedLandmark].previewImage,
                longtitle: mapData.relatedLandmarks[relatedLandmark].title,
                position: geoObjects.length
            },
            options: {
                iconImageSize: [50, 50],
                iconShape: {
                    type: "Rectangle",
                    coordinates: [
                        [0, 0],
                        [50, 50]
                    ]
                },
                openEmptyBalloon: !0
            }
        }), $mapWrapper.find(".lauda-map__select").append('<option value="' + relatedLandmark + '">' + mapData.relatedLandmarks[relatedLandmark].title + "</option>"));
    objectManager.add({
        type: "FeatureCollection",
        features: geoObjects
    }), map.geoObjects.add(objectManager), mapData.currentLandmark || map.setBounds(objectManager.getBounds()), $mapWrapper.find(".lauda-map__select").on("change", function() {
        var value = $(this).val();
        if ($(this).data("dontChangePosition")) $(this).data("dontChangePosition", "");
        else {
            var selectedObject = objectManager.objects.getById(value);
            selectedObject ? map.setCenter(selectedObject.geometry.coordinates, 16, {
                duration: 500
            }).then(function() {
                objectManager.objects.overlays.getById(value).events.fire("click")
            }) : mapData.currentLandmark && map.setCenter(mainPlacemark.geometry.coordinates, 16, {
                duration: 500
            }).then(function() {
                mainPlacemark.events.fire("click")
            })
        }
    }), $mapWrapper.find(".lauda-map__select-wrapper").css("display", "block"), $mapWrapper.find(".lauda-map__select").select2({
        dropdownCss: {
            "z-index": "9999"
        }
    })
}, $.fn.toggleSpinner = function() {
    this.each(function() {
        var $spinner = $(this).find(".loading-spinner");
        "static" === $(this).css("position") && $(this).css("position", "relative"), $spinner.length > 0 ? $spinner.remove() : ($(this).innerHeight() < 44 && $(this).css("min-height", "44px"), $(this).innerWidth() < 44 && $(this).css("min-width", "44px"), $(this).append($('<div class="loading-spinner">').append($('<div class="loading-spinner__inner">'))))
    })
}, $(document).ready(function() {
    $("html").removeClass("no-js"), $("html").addClass("js"), window.getViewportWidth = function() {
        var width;
        if (window.innerWidth) width = window.innerWidth;
        else {
            if (!document.documentElement || !document.documentElement.clientWidth) throw "Can not detect viewport width.";
            width = document.documentElement.clientWidth
        }
        return width
    }, window.handleFooterIndent = function() {
        var footerHeight = $(".footer").height();
        $(".main").css({
            margin: "0 auto -" + footerHeight + "px auto",
            padding: "0 0 " + footerHeight + "px 0"
        }), $(".footer").css({
            minHeight: footerHeight + "px"
        })
    }, window.handleFooterIndent(), $(window).resize(function() {
        window.handleFooterIndent()
    });
    var openSubMenuFromMainMenu2 = function($menuElement, force, event) {
        $menuElement = $menuElement.closest(".main-menu-2__menu-level-1__item");
        var $innerList = $menuElement.find(".main-menu-2__menu-level-2"),
            $mainMenu2ItemsContainer = $(".main-menu-2__items-container");
        $innerList.length > 0 && ("none" !== $mainMenu2ItemsContainer.parent().css("display") || force) && ("undefined" != typeof event && event.preventDefault && event.preventDefault(), $mainMenu2ItemsContainer.empty(), $menuElement.hasClass("opened") ? $(".main-menu-2__menu-level-1__item").removeClass("opened") : ($mainMenu2ItemsContainer.append($innerList.clone()), $(".main-menu-2__menu-level-1__item").removeClass("opened"), $menuElement.addClass("opened")))
    };
    $(".main-menu-2").on("click", ".main-menu-2__menu-level-1__link", function(event) {
        openSubMenuFromMainMenu2($(event.target), !1, event)
    });
    var $elementToOpen = $(".main-menu-2__menu-level-1 .main-menu-2__menu-level-1__item.active").first();
    $elementToOpen.length > 0 && openSubMenuFromMainMenu2($elementToOpen, !0), $(".main-menu-1__wrapper").on("click", ".openable", function(e) {
        var viewportWidth = window.getViewportWidth(),
            $menuElement = $(e.target).closest(".openable"),
            $wrapper = $menuElement.find(".openable__wrapper");
        if (1600 > viewportWidth && "undefined" != typeof $(this).data("window") && $($(this).data("window")).length > 0 && 0 === $(e.target).closest(".openable__wrapper").length) {
            if (0 === $wrapper.length) {
                var $content = $($(this).data("window")).clone();
                $content.addClass("openable__content"), $wrapper = $('<div class="openable__wrapper"></div>').append($content).appendTo($menuElement)
            }
            $wrapper.hasClass("opened") ? ($(".main-menu-1__wrapper").find(".openable__wrapper").removeClass("opened"), $menuElement.closest(".main-menu-1").find(".openable").removeClass("opened")) : ($(".main-menu-1__wrapper").find(".openable__wrapper").removeClass("opened"), $menuElement.closest(".main-menu-1").find(".openable").removeClass("opened"), $wrapper.addClass("opened"), $menuElement.addClass("opened"))
        }
    }), $(".main-menu-1__wrapper .openable").length > 0 && $("body").on("click", function(event) {
        var viewportWidth = window.getViewportWidth();
        1600 > viewportWidth && 0 === $(event.target).closest(".main-menu-1").length && ($(".openable__wrapper.opened").removeClass("opened"), $(".main-menu-1").find(".openable").removeClass("opened"))
    }), $(".actions-carousel").each(function() {
        var options = {
            items: 2,
            margin: 15,
            loop: !1,
            lazyLoad: !0,
            nav: !1,
            autoplay: !1,
            responsiveClass: !0,
            responsive: {
                0: {
                    items: 1
                },
                1280: {
                    items: 2
                }
            }
        };
        $(this).owlCarousel(options)
    }), $(".interesting-stuff__actions-carousel, .interesting-stuff__tours-carousel").each(function() {
        var items_count = $(this).hasClass("col-xs-6") || $(this).closest(".interesting-stuff__item").hasClass("col-sm-6") ? 1 : 2,
            options = {
                items: items_count,
                responsive: {
                    0: {
                        items: 1
                    },
                    970: {
                        items: items_count
                    }
                },
                margin: 15,
                loop: !1,
                lazyLoad: !0,
                nav: !1,
                autoplay: !1,
                responsiveClass: !0
            };
        $(this).children().length <= 1 && (options.mouseDrag = !1, options.touchDrag = !0, options.pullDrag = !1), $(this).owlCarousel(options)
    }), $(".near-tours-slider").children().length >= 2 ? $(".near-tours-slider").owlCarousel({
        items: 2,
        margin: 15,
        loop: !1,
        nav: !1,
        autoplay: !1,
        responsiveClass: !0,
        lazyLoad: !0,
        responsive: {
            0: {
                items: 1
            },
            1280: {
                items: 2
            }
        }
    }) : $(".near-tours-slider").removeClass("owl-carousel"), $(".moscow-tours-slider").owlCarousel({
        items: 2,
        margin: 15,
        loop: !1,
        nav: !1,
        autoplay: !1,
        responsiveClass: !0,
        lazyLoad: !0,
        responsive: {
            0: {
                items: 1
            },
            1280: {
                items: 2
            }
        }
    }), $(".streets-slider").owlCarousel({
        items: 2,
        margin: 15,
        loop: !1,
        nav: !1,
        autoplay: !1,
        responsiveClass: !0,
        lazyLoad: !0,
        responsive: {
            0: {
                items: 1
            },
            970: {
                items: 2
            }
        }
    }), $(".not-near-tours-slider").owlCarousel({
        items: 4,
        margin: 15,
        loop: !1,
        nav: !1,
        autoplay: !1,
        responsiveClass: !0,
        lazyLoad: !0,
        responsive: {
            0: {
                items: 2
            },
            970: {
                items: 3
            },
            1280: {
                items: 4
            }
        }
    }), $(".tours__item-time").each(function() {
        $(this).data("time") && $(this).countdown($(this).data("time"), function(event) {
            var daysParts = event.offset.totalDays.toString().split("");
            1 === daysParts.length && daysParts.unshift(0);
            var daysTemplate = '<div class="tours__item-time-wrapper"><div class="tours__item-time-item">' + daysParts[0] + '</div> <div class="tours__item-time-item">' + daysParts[1] + '</div><div class="tours__item-time-label">дней</div></div>',
                hoursParts = event.offset.hours.toString().split("");
            1 === hoursParts.length && hoursParts.unshift(0);
            var hoursTemplate = '<div class="tours__item-time-wrapper"><div class="tours__item-time-item">' + hoursParts[0] + '</div> <div class="tours__item-time-item">' + hoursParts[1] + '</div><div class="tours__item-time-label">часов</div></div>',
                minutesParts = event.offset.minutes.toString().split("");
            1 === minutesParts.length && minutesParts.unshift(0);
            var minutesTemplate = '<div class="tours__item-time-wrapper"><div class="tours__item-time-item">' + minutesParts[0] + '</div> <div class="tours__item-time-item">' + minutesParts[1] + '</div><div class="tours__item-time-label">минут</div></div>';
            $(this).html(daysTemplate + hoursTemplate + minutesTemplate)
        })
    }), $(".tour-time").each(function() {
        $(this).data("time") && $(this).countdown($(this).data("time"), function(event) {
            var daysParts = event.offset.totalDays.toString().split("");
            1 === daysParts.length && daysParts.unshift(0);
            var daysTemplate = '<div class="tour-time__wrapper"><div class="tour-time__item">' + daysParts[0] + '</div> <div class="tour-time__item">' + daysParts[1] + '</div><div class="tour-time__label">дней</div></div>',
                hoursParts = event.offset.hours.toString().split("");
            1 === hoursParts.length && hoursParts.unshift(0);
            var hoursTemplate = '<div class="tour-time__wrapper"><div class="tour-time__item">' + hoursParts[0] + '</div> <div class="tour-time__item">' + hoursParts[1] + '</div><div class="tour-time__label">часов</div></div>',
                minutesParts = event.offset.minutes.toString().split("");
            1 === minutesParts.length && minutesParts.unshift(0);
            var minutesTemplate = '<div class="tour-time__wrapper"><div class="tour-time__item">' + minutesParts[0] + '</div> <div class="tour-time__item">' + minutesParts[1] + '</div><div class="tour-time__label">минут</div></div>';
            $(this).html(daysTemplate + hoursTemplate + minutesTemplate)
        })
    }), $(".features-1__items").owlCarousel({
        items: 1,
        margin: 15,
        loop: !1,
        nav: !1,
        dots: !0,
        autoplay: !1,
        mouseDrag: !1,
        touchDrag: !0,
        pullDrag: !1,
        lazyLoad: !0
    }), $(".features-1").on("click", ".features-1__control-wrapper", function(e) {
        var $this = $(e.target).closest(".features-1__control-wrapper");
        if ("undefined" != typeof $this.data("position")) {
            var $wrapper = $($this).closest(".features-1");
            $wrapper.find(".features-1__control").removeClass("active"), $this.find(".features-1__control").addClass("active"), $wrapper.find(".features-1__items").trigger("to.owl.carousel", [$this.data("position"), 1e3, !0])
        }
    }), $(".features-1__accordion").on("click", ".features-1__accordion-preview", function(event) {
        var $currentItem = $(event.target).closest(".features-1__accordion-item").find(".features-1__accordion-content"),
            $allItems = $(event.target).closest(".features-1__accordion-items").find(".features-1__accordion-content").not($currentItem);
        $allItems.closest(".features-1__accordion-item").removeClass("opened"), $allItems.slideUp(200), $currentItem.closest(".features-1__accordion-item").addClass("opened"), $currentItem.slideDown(200)
    }), $(".features-1__accordion").find(".features-1__accordion-content").first().css("display", "block"), $(".features-1__accordion").find(".features-1__accordion-item").first().addClass("opened"), $(".reviews__slider").owlCarousel({
        items: 3,
        margin: 15,
        loop: !1,
        nav: !0,
        navText: ["", ""],
        dots: !1,
        autoplay: !1,
        lazyLoad: !0,
        mouseDrag: !1,
        touchDrag: !0,
        pullDrag: !1,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            970: {
                items: 2
            },
            1280: {
                items: 3
            }
        }
    }), $(".features-2__items").owlCarousel({
        items: 1,
        margin: 15,
        loop: !1,
        nav: !1,
        dots: !1,
        autoplay: !1,
        mouseDrag: !1,
        touchDrag: !0,
        pullDrag: !1,
        lazyLoad: !0
    }), $(".features-2").on("click", ".features-2__control-wrapper", function(e) {
        var $this = $(e.target).closest(".features-2__control-wrapper");
        if ("undefined" != typeof $this.data("position")) {
            var $wrapper = $($this).closest(".features-2");
            $wrapper.find(".features-2__control").removeClass("active"), $this.find(".features-2__control").addClass("active"), $wrapper.find(".features-2__items").trigger("to.owl.carousel", [$this.data("position"), 1e3, !0])
        }
    }), $(".features-2__accordion").on("click", ".features-2__accordion-preview", function(event) {
        var $currentItem = $(event.target).closest(".features-2__accordion-item").find(".features-2__accordion-content"),
            $allItems = $(event.target).closest(".features-2__accordion-items").find(".features-2__accordion-content").not($currentItem);
        $allItems.closest(".features-2__accordion-item").removeClass("opened"), $allItems.slideUp(200), $currentItem.closest(".features-2__accordion-item").addClass("opened"), $currentItem.slideDown(200)
    }), $(".features-2__accordion").find(".features-2__accordion-item").first().addClass("opened"), $(".features-2__accordion").find(".features-2__accordion-content").first().css("display", "block");
    var createToursTypesSlider = function() {
        $(".cheap-tours__slider").owlCarousel({
            items: 1,
            margin: 15,
            loop: !1,
            nav: !1,
            autoplay: !1,
            responsiveClass: !0,
            lazyLoad: !0
        })
    };
    window.getViewportWidth() < 768 ? createToursTypesSlider() : $(".cheap-tours__slider").css("display", "block"), $(window).resize(function() {
        window.getViewportWidth() < 768 ? createToursTypesSlider() : ($(".cheap-tours__slider").trigger("destroy.owl.carousel"), $(".cheap-tours__slider").css("display", "block"))
    }), window.handleMobileFooterMenuElementSelect = function($menuElement, event) {
        var $subMenu = $menuElement.find(".footer__mobile-menu-level-1");
        $subMenu.length > 0 && ("undefined" != typeof event && event.preventDefault(), $menuElement.hasClass("opened") ? $subMenu.slideUp(200) : $subMenu.slideDown(200), $menuElement.toggleClass("opened"))
    }, $("body").on("click", ".footer__mobile-menu-level-0-item>a", function(event) {
        window.handleMobileFooterMenuElementSelect($(event.target).closest(".footer__mobile-menu-level-0-item"), event)
    });
    var formatMainMenu2MobileEl = function(state) {
        var className = 2 == $(state.element).data("level") ? "main-menu-2__menu-mobile-item-level-2" : "main-menu-2__menu-mobile-item-level-1";
        return $('<div class="' + className + '">' + state.text + "</div>")
    };
    $(".main-menu-2__menu-mobile-select").select2({
        templateResult: formatMainMenu2MobileEl,
        minimumResultsForSearch: 1 / 0,
        dropdownCssClass: "main-menu__dropdown"
    }), $(".main-menu-2__menu-mobile-select").on("select2:select", function(event) {
        var address = $(event.params.data.element).data("address");
        "undefined" != typeof address && (window.location.href = address)
    }), $(".tour-schedule").css("opacity", "1"), $(".tour-schedule__inner").sly({
        horizontal: 1,
        itemNav: "basic",
        smart: 1,
        activateOn: "click",
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        scrollBar: $(".tour-schedule__scrollbar"),
        scrollBy: 1,
        activatePageOn: "click",
        speed: 300,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1
    })
}), $(document).ready(function() {
    if (0 !== $("#category-page").length) {
        var $wrapper = $("#category-page"),
            pagination = ".category-pagination",
            rows = ".category-page-rows";
        window.currentAjaxPage = pdoPage.keys.page, pdoPage.callbacks.before = function(config) {
            $.fancybox.showLoading()
        }, pdoPage.callbacks.after = function(config, response) {
            window.currentAjaxPage = response.page, $.fancybox.hideLoading(), $wrapper.css({
                opacity: 1
            }), $("html, body").animate({
                scrollTop: $wrapper.position().top - 50 || 0
            }, 0), response.page == response.pages ? $(".category-pagination__more-btn").css("display", "none") : $(".category-pagination__more-btn").css("display", "block")
        }, 0 === $(".category-pagination__item_last-page").length && $(".category-pagination__more-btn").css("display", "none"), $(document).on("click", ".category-pagination__more-btn", function() {
            var pagination_wrap = $(this).closest(".category-pagination"),
                currentUrl = $(".category-pagination__item-next", pagination_wrap).attr("href");
            window.currentAjaxPage += 1, $.fancybox.showLoading(), $.get(currentUrl, {
                page: window.currentAjaxPage
            }, function(response) {
                if (response && response.total) {
                    var $pagination = $(response.pagination);
                    response.page == response.pages && $pagination.find(".category-pagination__more-btn").css("display", "none"), $wrapper.find(pagination).empty(), $wrapper.find(pagination).append($pagination);
                    var $divider = $('<div class="col-xs-12"><div class="category-page__divider">Страница ' + response.page + " из " + response.pages + "</div></div>");
                    $wrapper.find(rows).append($divider), $wrapper.find(rows).append(response.output), $wrapper.css({
                        opacity: 1
                    }), $("html, body").animate({
                        scrollTop: $divider.position().top - 50 || 0
                    }, 250), pdoPage.Hash.add("page", window.currentAjaxPage)
                }
            }, "json").always(function() {
                $.fancybox.hideLoading()
            })
        })
    }
}), $(document).ready(function() {
    window.showQuote = function($quotesBlock, quotes) {
        var quotesLength = quotes.length,
            $btnLeft = $quotesBlock.find(".quote-block__button_left"),
            $btnRight = $quotesBlock.find(".quote-block__button_right");
        $btnLeft.removeClass("disabled"), $btnRight.removeClass("disabled"), quotePosition >= quotesLength - 1 && (quotePosition = quotesLength - 1, $btnRight.addClass("disabled")), 0 >= quotePosition && (quotePosition = 0, $btnLeft.addClass("disabled"));
        var quote = quotes[quotePosition],
            $quotesText = $quotesBlock.find(".quote-block__text");
        $quotesText.animate({
            opacity: 0
        }, 200, function() {
            $quotesText.html(quote), $quotesText.animate({
                opacity: 1
            }, 200)
        })
    }, $(".quote-block__button").on("click", function() {
        var $quotesBlock = $(this).closest(".quote-block");
        $(this).hasClass("quote-block__button_left") && 0 == $(this).hasClass("disabled") ? (quotePosition -= 1, window.showQuote($quotesBlock, window.quotesData)) : $(this).hasClass("quote-block__button_right") && 0 == $(this).hasClass("disabled") && (quotePosition += 1, window.showQuote($quotesBlock, window.quotesData))
    });
    var quotePosition = 0;
    $(".quote-block").toggleSpinner(), $.get("/?api=1&action=quotes", function(data) {
        window.quotesData = data, $(".quote-block").toggleSpinner(), window.showQuote($(".quote-block"), window.quotesData, 0)
    }, "json")
}), $(document).ready(function() {
    $("body").on("click", '.form-row-icon:has(input[name="date"])', function() {
        $('input[name="date"]', this).datepicker({
            showOtherMonths: !0,
            selectOtherMonths: !0,
            hideIfNoPrevNext: !0,
            minDate: $(".inline-datepicker").data("date"),
            maxDate: "+2m",
            beforeShowDay: function(date) {
                return 0 == repeat_days.length && 0 == rewrite_dates_flip.length ? [!0, ""] : (day = date.getDay() || 7, str_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(), -1 == $.inArray(day, repeat_days) && -1 == $.inArray(str_date, rewrite_dates_flip) || -1 != $.inArray(str_date, exclude_dates) || $(".inline-datepicker").data("disable") == date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() ? [!1, ""] : [!0, ""])
            },
            onSelect: function(dateText, obj) {
                $(this).datepicker("refresh"), get_times($(this).datepicker("getDate"))
            }
        }), $(this).datepicker("show")
    })
}), window.visitTour = function() {}, $(document).ready(function() {
    $("body").on("click", ".tour-order-schedule__day-inner", function() {
        for (var $wrapper = $(this).closest(".tour-order-schedule__day"), $timeBlock = $(this).closest(".ajax-form").find(".tour-order-time"), $timeBlockInner = $timeBlock.find(".tour-order-time__inner"), $timeBlockTitle = $timeBlock.find(".tour-order-time__title"), timeArray = $wrapper.data("time") || [], filteredTimeArray = [], timeArrayPos = 0, timeArrayLength = timeArray.length; timeArrayPos < timeArray.length; timeArrayPos++) timeArray[timeArrayPos] && filteredTimeArray.push(timeArray[timeArrayPos]);
        var $inputDate = $(this).closest(".ajax-form").find('input[name="date"]'),
            $inputTime = $(this).closest(".ajax-form").find('input[name="time"]');
        $(this).closest(".tour-order-schedule__days").find(".tour-order-schedule__day").removeClass("active"), $wrapper.addClass("active"), $inputDate.val($wrapper.data("date")), $timeBlockInner.empty(), $timeBlock.css("display", "block");
        var $timeSelect;
        if (filteredTimeArray.length > 0)
            for ($timeSelect = $('<select class="tour-order-time__select" style="width:100%">'), $inputTime.val(filteredTimeArray[0]), $timeSelect.on("change", function() {
                    $inputTime.val($(this).val())
                }), timeArrayPos = 0, timeArrayLength = filteredTimeArray.length; timeArrayLength > timeArrayPos; timeArrayPos++) $timeSelect.append($('<option value="' + filteredTimeArray[timeArrayPos] + '">' + filteredTimeArray[timeArrayPos] + "</option>"));
        else $inputTime.val(""), $timeSelect = $('<select class="tour-order-time__select" style="width:100%" disabled>'), $timeSelect.append($('<option value="" selected disabled>По запросу</option>'));
        $timeBlockTitle.html("Выберите время:"), $timeBlockInner.append($timeSelect), $timeSelect.select2({
            minimumResultsForSearch: 1 / 0,
            dropdownCss: {
                "z-index": "9999"
            }
        })
    })
}), window.spinnerLoaded = !1, window.form_spinner = function() {
    window.spinnerLoaded = !0;
    var sum = 0,
        count = 0,
        calc = function(obj) {
            var input = $("input", obj);
            sum = 0, count = 0, $(input.data("count")).length && ($('.form-row-spinner input[data-count="' + input.data("count") + '"]').each(function() {
                count += parseInt($(this).val())
            }), $(input.data("count")).text(count.toFixed(0))), $(input.data("sum")).length && (1 == input.data("group") ? count <= parseInt($(".tour-order_total_nums [data-num1]").data("num1")) ? (sum += parseInt(input.data("price1")), $(".price", obj).text(input.data("price1"))) : count > parseInt($(".tour-order_total_nums [data-num1]").data("num1")) && count <= parseInt($(".tour-order_total_nums [data-num2]").data("num2")) ? (sum += parseInt(input.data("price2")), $(".price", obj).text(input.data("price2"))) : (sum += parseInt(input.data("price3")), $(".price", obj).text(input.data("price3"))) : $('.form-row-spinner input[data-sum="' + input.data("sum") + '"]').each(function() {
                sum += parseInt($(this).val()) * parseInt($(this).data("price"))
            }), $(input.data("sum")).text(sum.toFixed(0)))
        };
    calc($(".form-row-spinner:first")), window.visitTour();
    var time = $(".ajax-form").find('input[name="time"]').val(),
        date = $(".ajax-form").find('input[name="date"]').val();
    date && $('.tour-order-schedule__day[data-date="' + date + '"]').length ? ($(".tour-order-schedule__inner").sly("slideTo", 0, !0), $('.tour-order-schedule__day[data-date="' + date + '"] .tour-order-schedule__day-inner').trigger("click"), time && $(".tour-order-time__select").val(time).trigger("change"), $('.tour-order-schedule__day[data-date="' + date + '"]').length ? window.modal_schedule_current_date_index = $('.tour-order-schedule__day[data-date="' + date + '"]').prevAll().length : window.modal_schedule_current_date_index = 0, console.log(window.modal_schedule_current_date_index)) : $(".tour-order-schedule__day-inner").first().click(), "reinitialization" != arguments[0] && ($("body").on("click", ".form-row-spinner .spinner span", function() {
        var wrapper = $(this).closest(".form-row-spinner"),
            input = $("input", wrapper);
        count = 0, $(input.data("count")).length && $('.form-row-spinner input[data-count="' + input.data("count") + '"]').each(function() {
            count += parseInt($(this).val())
        }), $(this).hasClass("down") ? input.val() > 0 && input.val(parseInt(input.val()) - 1) : "" != $(input.data("count")).data("max") ? count < parseInt($(input.data("count")).data("max")) && input.val(parseInt(input.val()) + 1) : input.val(parseInt(input.val()) + 1), calc(wrapper)
    }), $("body").on("keyup", ".form-row-spinner input", function(e) {
        return !1
    }))
}, $(document).ready(function() {
    $(".accordion").each(function() {
        var $accordion = $(this);
        $accordion.on("click", ".accordion__button", function() {
            var $currentTab = $accordion.find($(this).data("tab"));
            if ($(this).data("hideOnClick")) $accordion.find(".accordion__tab").slideUp(), $currentTab.slideDown(), $(this).remove();
            else {
                var opened = "none" !== $currentTab.css("display");
                $accordion.find(".accordion__tab").slideUp(), opened ? $currentTab.slideUp() : $currentTab.slideDown()
            }
        })
    })
}), $(document).ready(function() {
    $(".tour-schedule__date-inner").each(function() {
        var $el = $(this);
        $el.tooltip({
            content: $el.attr("title"),
            tooltipClass: "date-tooltip"
        })
    })
}), $(document).ready(function() {
    $("[data-widget]").each(function() {
        var $element = $(this);
        $element.toggleSpinner(), $.get(location.href, {
            widget: $element.data("widget")
        }, function(data) {
            if ($element.toggleSpinner(), $element.replaceWith(data), "footerMenusPart3" == $element.data("widget")) {
                var $mobileFooterMenuElementToShow = $(".footer__mobile-menu-level-0").find(".footer__mobile-menu-level-0-item.active");
                $mobileFooterMenuElementToShow.length > 0 && window.handleMobileFooterMenuElementSelect($mobileFooterMenuElementToShow)
            }
            handleFooterIndent()
        })
    })
}), $(document).ready(function() {
    if ($(".landmark-gallery__show-all").length > 0) {
        var handleGallery = function(force) {
            if (window.getViewportWidth() < 970) $(".landmark-gallery .row").hasClass("owl-carousel") || ($(".landmark-gallery__show-all").css("display", "none"), $(".landmark-gallery").css("height", "auto"), $(".landmark-gallery__image").lazyload({
                event: "load-images"
            }), $(".landmark-gallery__image").trigger("load-images"), $(".landmark-gallery .row").addClass("owl-carousel gallery-carousel"), $(".landmark-gallery .row").trigger("destroy.owl.carousel"), $(".landmark-gallery .row").owlCarousel({
                items: 3,
                margin: 15,
                loop: !1,
                lazyLoad: !0,
                nav: !1,
                autoplay: !1,
                responsiveClass: !0,
                dots: !1,
                nav: !0,
                navText: ["", ""],
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    }
                }
            }));
            else if ($(".landmark-gallery .row").trigger("destroy.owl.carousel"), $(".landmark-gallery .row").removeClass("owl-carousel gallery-carousel"), $(".landmark-gallery__image").length > 12) {
                if ("none" == $(".landmark-gallery__show-all").css("display") && !$(".landmark-gallery").data("opened") || force) {
                    $(".landmark-gallery__show-all").css("display", "block"), $(".landmark-gallery .row").removeClass("owl-carousel gallery-carousel");
                    var item_height = $(".landmark-gallery__item").outerHeight() > 100 ? $(".landmark-gallery__item").outerHeight() : 100;
                    $(".landmark-gallery").css("height", 2 * item_height), $(".landmark-gallery__image").lazyload()
                }
            } else $(".landmark-gallery__image").lazyload({
                event: "load-images"
            }), $(".landmark-gallery__image").trigger("load-images")
        };
        $(".landmark-gallery__image").length > 12 ? $(".landmark-gallery__show-all").on("click", function() {
            $(this).closest(".landmark-gallery").css("height", "auto").slideUp(0).slideDown(1e3), $(this).closest(".landmark-gallery").data("opened", "1"), $(this).css("display", "none"), $(".landmark-gallery__image").lazyload({
                event: "load-images"
            }), $(".landmark-gallery__image").trigger("load-images")
        }) : ($(".landmark-gallery__show-all").css("display", "none"), $(".landmark-gallery").css("height", "auto")), handleGallery(!0), $(window).resize(function() {
            handleGallery()
        })
    }
});