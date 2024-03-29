/*!

Holder - 2.2 - client side image placeholders
(c) 2012-2013 Ivan Malopinsky / http://imsky.co

Provided under the MIT License.
Commercial use requires attribution.

*/
var Holder = Holder || {};
!function(a, b) {
    function c(a, b) {
        var c = "complete", d = "readystatechange", e=!1, f = e, g=!0, h = a.document, i = h.documentElement, j = h.addEventListener ? "addEventListener" : "attachEvent", k = h.addEventListener ? "removeEventListener" : "detachEvent", l = h.addEventListener ? "" : "on", m = function(g) {
            (g.type != d || h.readyState == c) && (("load" == g.type ? a : h)[k](l + g.type, m, e), !f && (f=!0) && b.call(a, null))
        }, n = function() {
            try {
                i.doScroll("left")
            } catch (a) {
                return void setTimeout(n, 50)
            }
            m("poll")
        };
        if (h.readyState == c)
            b.call(a, "lazy");
        else {
            if (h.createEventObject && i.doScroll) {
                try {
                    g=!a.frameElement
                } catch (o) {}
                g && n()
            }
            h[j](l + "DOMContentLoaded", m, e), h[j](l + d, m, e), a[j](l + "load", m, e)
        }
    }
    function d(a) {
        a = a.match(/^(\W)?(.*)/);
        var b = document["getElement" + (a[1] ? "#" == a[1] ? "ById" : "sByClassName" : "sByTagName")](a[2]), c = [];
        return null !== b && (c = b.length ? b : 0 === b.length ? b : [b]), c
    }
    function e(a, b) {
        var c = {};
        for (var d in a)
            a.hasOwnProperty(d) && (c[d] = a[d]);
        for (var d in b)
            b.hasOwnProperty(d) && (c[d] = b[d]);
        return c
    }
    function f(a, b, c) {
        b = parseInt(b, 10), a = parseInt(a, 10);
        var d = Math.max(b, a), e = Math.min(b, a), f = 1 / 12, g = Math.min(.75 * e, .75 * d * f);
        return {
            height: Math.round(Math.max(c.size, g))
        }
    }
    function g(a) {
        var b = a.ctx, c = a.dimensions, d = a.template, e = a.ratio, g = a.holder, h = "literal" == g.textmode, i = "exact" == g.textmode, j = f(c.width, c.height, d), k = j.height, l = c.width * e, m = c.height * e, n = d.font ? d.font: "sans-serif";
        o.width = l, o.height = m, b.textAlign = "center", b.textBaseline = "middle", b.fillStyle = d.background, b.fillRect(0, 0, l, m), b.fillStyle = d.foreground, b.font = "bold " + k + "px " + n;
        var p = d.text ? d.text: Math.floor(c.width) + "x" + Math.floor(c.height);
        if (h) {
            var c = g.dimensions;
            p = c.width + "x" + c.height
        } else if (i && g.exact_dimensions) {
            var c = g.exact_dimensions;
            p = Math.floor(c.width) + "x" + Math.floor(c.height)
        }
        var q = b.measureText(p).width;
        return q / l >= .75 && (k = Math.floor(.75 * k * (l / q))), b.font = "bold " + k * e + "px " + n, b.fillText(p, l / 2, m / 2, l), o.toDataURL("image/png")
    }
    function h(a, b, c, d) {
        var f = c.dimensions, h = c.theme, i = c.text ? decodeURIComponent(c.text): c.text, j = f.width + "x" + f.height;
        h = i ? e(h, {
            text: i
        }) : h, h = c.font ? e(h, {
            font: c.font
        }) : h, b.setAttribute("data-src", d), c.theme = h, b.holder_data = c, "image" == a ? (b.setAttribute("alt", i ? i : h.text ? h.text + " [" + j + "]" : j), (n ||!c.auto) && (b.style.width = f.width + "px", b.style.height = f.height + "px"), n ? b.style.backgroundColor = h.background : (b.setAttribute("src", g({
            ctx: s,
            dimensions: f,
            template: h,
            ratio: t,
            holder: c
        })), c.textmode && "exact" == c.textmode && (r.push(b), k(b)))) : "background" == a ? n || (b.style.backgroundImage = "url(" + g({
            ctx: s,
            dimensions: f,
            template: h,
            ratio: t,
            holder: c
        }) + ")", b.style.backgroundSize = f.width + "px " + f.height + "px") : "fluid" == a && (b.setAttribute("alt", i ? i : h.text ? h.text + " [" + j + "]" : j), b.style.height = "%" == f.height.slice(-1) ? f.height : f.height + "px", b.style.width = "%" == f.width.slice(-1) ? f.width : f.width + "px", ("inline" == b.style.display || "" === b.style.display || "none" == b.style.display) && (b.style.display = "block"), n ? b.style.backgroundColor = h.background : (r.push(b), k(b)))
    }
    function i(a, b) {
        var c = {
            height: a.clientHeight,
            width: a.clientWidth
        };
        if (!c.height&&!c.width) {
            if (a.hasAttribute("data-holder-invisible"))
                throw new Error("Holder: placeholder is not visible");
            return a.setAttribute("data-holder-invisible", !0), setTimeout(function() {
                b.call(this, a)
            }, 1), null
        }
        return a.removeAttribute("data-holder-invisible"), c
    }
    function k(a) {
        var b;
        b = null == a.nodeType ? r : [a];
        for (var c in b)
            if (b.hasOwnProperty(c)) {
                var d = b[c];
                if (d.holder_data) {
                    var e = d.holder_data, f = i(d, k);
                    f && (e.fluid && d.setAttribute("src", g({
                        ctx: s,
                        dimensions: f,
                        template: e.theme,
                        ratio: t,
                        holder: e
                    })), e.textmode && "exact" == e.textmode && (e.exact_dimensions = f, d.setAttribute("src", g({
                        ctx : s, dimensions : e.dimensions, template : e.theme, ratio : t, holder : e
                    }))))
                }
            }
        }
    function l(b, c) {
        var d = {
            theme: e(u.themes.gray, {})
        }, f=!1;
        for (sl = b.length, j = 0; sl > j; j++) {
            var g = b[j];
            a.flags.dimensions.match(g) ? (f=!0, d.dimensions = a.flags.dimensions.output(g)) : a.flags.fluid.match(g) ? (f=!0, d.dimensions = a.flags.fluid.output(g), d.fluid=!0) : a.flags.textmode.match(g) ? d.textmode = a.flags.textmode.output(g) : a.flags.colors.match(g) ? d.theme = a.flags.colors.output(g) : c.themes[g] ? c.themes.hasOwnProperty(g) && (d.theme = e(c.themes[g], {})) : a.flags.font.match(g) ? d.font = a.flags.font.output(g) : a.flags.auto.match(g) ? d.auto=!0 : a.flags.text.match(g) && (d.text = a.flags.text.output(g))
        }
        return f ? d : !1
    }
    var m=!1, n=!1, o = document.createElement("canvas"), p = 1, q = 1, r = [];
    if (o.getContext)
        if (o.toDataURL("image/png").indexOf("data:image/png") < 0)
            n=!0;
        else 
            var s = o.getContext("2d");
    else 
        n=!0;
    n || (p = window.devicePixelRatio || 1, q = s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1);
    var t = p / q, u = {
        domain: "holder.js",
        images: "img",
        bgnodes: ".holderjs",
        themes: {
            gray: {
                background: "#eee",
                foreground: "#aaa",
                size: 12
            },
            social: {
                background: "#3a5a97",
                foreground: "#fff",
                size: 12
            },
            industrial: {
                background: "#434A52",
                foreground: "#C2F200",
                size: 12
            },
            sky: {
                background: "#0D8FDB",
                foreground: "#fff",
                size: 12
            },
            vine: {
                background: "#39DBAC",
                foreground: "#1E292C",
                size: 12
            },
            lava: {
                background: "#F8591A",
                foreground: "#1C2846",
                size: 12
            }
        },
        stylesheet: ""
    };
    a.flags = {
        dimensions: {
            regex: /^(\d+)x(\d+)$/,
            output: function(a) {
                var b = this.regex.exec(a);
                return {
                    width: + b[1],
                    height: + b[2]
                }
            }
        },
        fluid: {
            regex: /^([0-9%]+)x([0-9%]+)$/,
            output: function(a) {
                var b = this.regex.exec(a);
                return {
                    width: b[1],
                    height: b[2]
                }
            }
        },
        colors: {
            regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,
            output: function(a) {
                var b = this.regex.exec(a);
                return {
                    size: u.themes.gray.size,
                    foreground: "#" + b[2],
                    background: "#" + b[1]
                }
            }
        },
        text: {
            regex: /text\:(.*)/,
            output: function(a) {
                return this.regex.exec(a)[1]
            }
        },
        font: {
            regex: /font\:(.*)/,
            output: function(a) {
                return this.regex.exec(a)[1]
            }
        },
        auto: {
            regex: /^auto$/
        },
        textmode: {
            regex: /textmode\:(.*)/,
            output: function(a) {
                return this.regex.exec(a)[1]
            }
        }
    }, document.getElementsByClassName || (document.getElementsByClassName = function(a) {
        var b, c, d, e = document, f = [];
        if (e.querySelectorAll)
            return e.querySelectorAll("." + a);
        if (e.evaluate)
            for (c = ".//*[contains(concat(' ', @class, ' '), ' " + a + " ')]", b = e.evaluate(c, e, null, 0, null);
        d = b.iterateNext();
        )f.push(d);
        else 
            for (b = e.getElementsByTagName("*"), c = new RegExp("(^|\\s)" + a + "(\\s|$)")
                , d = 0;
        d < b.length;
        d++)c.test(b[d].className) && f.push(b[d]);
        return f
    }), window.getComputedStyle || (window.getComputedStyle = function(a) {
        return this.el = a, this.getPropertyValue = function(b) {
            var c = /(\-([a-z]){1})/g;
            return "float" == b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function() {
                return arguments[2].toUpperCase()
            })), a.currentStyle[b] ? a.currentStyle[b] : null
        }, this
    }), Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function(a) {
        var b = this.__proto__ || this.constructor.prototype;
        return a in this && (!(a in b) || b[a] !== this[a])
    });
    for (var v in a.flags)
        a.flags.hasOwnProperty(v) && (a.flags[v].match = function(a) {
            return a.match(this.regex)
        });
    a.add_theme = function(b, c) {
        return null != b && null != c && (u.themes[b] = c), a
    }, a.add_image = function(b, c) {
        var e = d(c);
        if (e.length)
            for (var f = 0, g = e.length; g > f; f++) {
                var h = document.createElement("img");
                h.setAttribute("data-src", b), e[f].appendChild(h)
            }
        return a
    }, a.run = function(b) {
        m=!0;
        var c = e(u, b), f = [], g = [], i = [];
        for ("string" == typeof c.images ? g = d(c.images) : window.NodeList && c.images instanceof window.NodeList ? g = c.images : window.Node && c.images instanceof window.Node && (g = [c.images]), "string" == typeof c.bgnodes ? i = d(c.bgnodes) : window.NodeList && c.elements instanceof window.NodeList ? i = c.bgnodes : window.Node && c.bgnodes instanceof window.Node && (i = [c.bgnodes]), o = 0, n = g.length; n > o; o++)
            f.push(g[o]);
        var j = document.getElementById("holderjs-style");
        j || (j = document.createElement("style"), j.setAttribute("id", "holderjs-style"), j.type = "text/css", document.getElementsByTagName("head")[0].appendChild(j)), c.nocss || (j.styleSheet ? j.styleSheet.cssText += c.stylesheet : j.appendChild(document.createTextNode(c.stylesheet)));
        for (var k = new RegExp(c.domain + '/(.*?)"?\\)'), n = i.length, o = 0; n > o; o++) {
            var p = window.getComputedStyle(i[o], null).getPropertyValue("background-image"), q = p.match(k), r = i[o].getAttribute("data-background-src");
            if (q) {
                var s = l(q[1].split("/"), c);
                s && h("background", i[o], s, p)
            } else if (null != r) {
                var s = l(r.substr(r.lastIndexOf(c.domain) + c.domain.length + 1).split("/"), c);
                s && h("background", i[o], s, p)
            }
        }
        for (n = f.length, o = 0; n > o; o++) {
            var t, v;
            v = t = p = null;
            try {
                v = f[o].getAttribute("src"), attr_datasrc = f[o].getAttribute("data-src")
            } catch (w) {}
            if (null == attr_datasrc && v && v.indexOf(c.domain) >= 0 ? p = v : attr_datasrc && attr_datasrc.indexOf(c.domain) >= 0 && (p = attr_datasrc), p) {
                var s = l(p.substr(p.lastIndexOf(c.domain) + c.domain.length + 1).split("/"), c);
                s && (s.fluid ? h("fluid", f[o], s, p) : h("image", f[o], s, p))
            }
        }
        return a
    }, c(b, function() {
        window.addEventListener ? (window.addEventListener("resize", k, !1), window.addEventListener("orientationchange", k, !1)) : window.attachEvent("onresize", k), m || a.run()
    }), "function" == typeof define && define.amd && define([], function() {
        return a
    })
}(Holder, window), /*!
 * JavaScript for Bootstrap's docs (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */
!function(a) {
    a(function() {
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var b = document.createElement("style");
            b.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(b)
        }
        {
            var c = a(window), d = a(document.body);
            a(".navbar").outerHeight(!0) + 10
        }
        d.scrollspy({
            target: ".bs-sidebar"
        }), c.on("load", function() {
            d.scrollspy("refresh")
        }), a(".bs-docs-container [href=#]").click(function(a) {
            a.preventDefault()
        }), setTimeout(function() {
            var b = a(".bs-sidebar");
            b.affix({
                offset: {
                    top: function() {
                        var c = b.offset().top, d = parseInt(b.children(0).css("margin-top"), 10), e = a(".bs-docs-nav").height();
                        return this.top = c - e - d
                    },
                    bottom: function() {
                        return this.bottom = a(".bs-footer").outerHeight(!0)
                    }
                }
            })
        }, 100), setTimeout(function() {
            a(".bs-top").affix()
        }, 100), a(".tooltip-demo").tooltip({
            selector: "[data-toggle=tooltip]",
            container: "body"
        }), a(".tooltip-test").tooltip(), a(".popover-test").popover(), a(".bs-docs-navbar").tooltip({
            selector: "a[data-toggle=tooltip]",
            container: ".bs-docs-navbar .nav"
        }), a("[data-toggle=popover]").popover(), a("#loading-example-btn").click(function() {
            var b = a(this);
            b.button("loading"), setTimeout(function() {
                b.button("reset")
            }, 3e3)
        })
    })
}(jQuery);
