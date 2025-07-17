(() => {
    var e = {
            927: e => {
                var t = function(e, t, i) {
                        var n = {},
                            r = 0;
                        for (var s in e) r >= t && r < i && (n[s] = e[s]), r++;
                        return n
                    },
                    i = function(e) {
                        var t = 0;
                        for (var i in e) e.hasOwnProperty(i) && t++;
                        return t
                    },
                    n = function(e, t) {
                        return t > -1 && e.splice(t, 1), e
                    },
                    r = function(e) {
                        return (e = e.replace(/\n/g, ",").replace(/[、，]/g, ",")).split(/[,、，]\s*/).map((function(e) {
                            return e.trim()
                        })).filter((function(e) {
                            return e
                        }))
                    },
                    s = function(e, t) {
                        return e.includes("、") ? t.join("、") : e.includes("，") ? t.join("，") : e.includes("\n") ? t.join("\n") : t.join(", ")
                    };
                e.exports = {
                    slice: t,
                    chunks: function(e, n) {
                        for (var r = [], s = 0; s = i(e); s += n) r.push(t(e, s, s + n));
                        return r
                    },
                    inArray: function(e, t) {
                        for (var i = t.length, n = 0; n < i; n++)
                            if (t[n] == e) return !0;
                        return !1
                    },
                    toProperCase: function(e) {
                        return e.replace(/\w\S*/g, (function(e) {
                            return e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
                        }))
                    },
                    getRandom: function(e) {
                        return e[Math.floor(Math.random() * e.length)]
                    },
                    getRandomInteger: function(e, t) {
                        return Math.floor(Math.random() * (t - e + 1) + e)
                    },
                    getRandomWithIndex: function(e) {
                        var t = Math.floor(Math.random() * e.length);
                        return [t, e[t]]
                    },
                    getTextareaValues: r,
                    getTextareaNewValues: function(e, t) {
                        var i = r(e),
                            a = n(i, t);
                        return s(e, a)
                    },
                    joinTextareaValues: s,
                    removeValueFromArray: n
                }
            }
        },
        t = {};

    function i(n) {
        var r = t[n];
        if (void 0 !== r) return r.exports;
        var s = t[n] = {
            exports: {}
        };
        return e[n](s, s.exports, i), s.exports
    }(() => {
        "use strict";
        var e = Object.defineProperty,
            t = Object.getOwnPropertySymbols,
            n = Object.prototype.hasOwnProperty,
            r = Object.prototype.propertyIsEnumerable,
            s = Math.pow,
            a = (t, i, n) => i in t ? e(t, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[i] = n,
            o = (e, i) => {
                for (var s in i || (i = {})) n.call(i, s) && a(e, s, i[s]);
                if (t)
                    for (var s of t(i)) r.call(i, s) && a(e, s, i[s]);
                return e
            };

        function l(e = 0) {
            return e * Math.PI / 180
        }

        function h(e, t, i) {
            return t < i ? t <= e && e < i : t <= e || e < i
        }

        function u(e, t, i, n) {
            n.save(), n.font = `1px ${t}`;
            let r = n.measureText(e).width;
            return n.restore(), i / r
        }

        function d(e = {
            x: 0,
            y: 0
        }, t = {}, i = 1) {
            let n = t.getBoundingClientRect();
            return {
                x: (e.x - n.left) * i,
                y: (e.y - n.top) * i
            }
        }

        function m(e = 0, t = 0, i = 1) {
            let n = (e % 360 + t) % 360;
            return n = function(e = 0) {
                return Number(e.toFixed(9))
            }(n), n = (1 === i ? 360 - n : 360 + n) % 360, n *= i, e + n
        }

        function c(e) {
            return "object" == typeof e && !Array.isArray(e) && null !== e
        }

        function g(e) {
            return "number" == typeof e && !Number.isNaN(e)
        }

        function f({
            val: e,
            isValid: t,
            errorMessage: i,
            defaultValue: n,
            action: r = null
        }) {
            if (t) return r ? r() : e;
            if (void 0 === e) return n;
            throw new Error(i)
        }

        function b(e) {
            return e && e.complete && 0 !== e.naturalWidth && 0 !== e.naturalHeight
        }

        function v(e) {
            return Math.sin(e * Math.PI / 2)
        }
        var _ = Object.freeze({
                left: "left",
                right: "right",
                center: "center"
            }),
            p = Object.freeze({
                wheel: {
                    borderColor: "#000",
                    borderWidth: 1,
                    debug: !1,
                    image: null,
                    isInteractive: !0,
                    itemBackgroundColors: ["#fff"],
                    itemLabelAlign: _.right,
                    itemLabelBaselineOffset: 0,
                    itemLabelColors: ["#000"],
                    itemLabelFont: "sans-serif",
                    itemLabelFontSizeMax: 500,
                    itemLabelRadius: .85,
                    itemLabelRadiusMax: .2,
                    itemLabelRotation: 0,
                    itemLabelStrokeColor: "#fff",
                    itemLabelStrokeWidth: 0,
                    items: [],
                    lineColor: "#000",
                    lineWidth: 1,
                    pixelRatio: 0,
                    radius: .95,
                    rotation: 0,
                    rotationResistance: -35,
                    rotationSpeedMax: 300,
                    offset: {
                        w: 0,
                        h: 0
                    },
                    onCurrentIndexChange: null,
                    onRest: null,
                    onSpin: null,
                    overlayImage: null,
                    pointerAngle: 0
                },
                item: {
                    backgroundColor: null,
                    image: null,
                    imageOpacity: 1,
                    imageRadius: .5,
                    imageRotation: 0,
                    imageScale: 1,
                    label: "",
                    labelColor: null,
                    value: null,
                    weight: 1
                }
            }),
            w = Object.freeze({
                pointerLineColor: "#ff00ff",
                labelOutlineColor: "#ff00ff",
                labelRadiusColor: "#00ff00",
                dragPointHue: 300
            });

        function C(e = {}) {
            (function(e = {}) {
                let t = e.canvas;
                e._handler_onPointerMoveRefreshCursor = (t = {}) => {
                    let i = {
                        x: t.clientX,
                        y: t.clientY
                    };
                    e._isCursorOverWheel = e.wheelHitTest(i), e.refreshCursor()
                }, e._handler_onMouseMoveRefreshCursor = (t = {}) => {
                    let i = {
                        x: t.clientX,
                        y: t.clientY
                    };
                    e._isCursorOverWheel = e.wheelHitTest(i), e.refreshCursor()
                }, e._handler_onPointerDown = (i = {}) => {
                    let n = {
                        x: i.clientX,
                        y: i.clientY
                    };

                    function r(t = {}) {
                        t.preventDefault(), e.dragMove({
                            x: t.clientX,
                            y: t.clientY
                        })
                    }

                    function s(i = {}) {
                        i.preventDefault(), t.releasePointerCapture(i.pointerId), t.removeEventListener("pointermove", r), t.removeEventListener("pointerup", s), t.removeEventListener("pointercancel", s), t.removeEventListener("pointerout", s), e.dragEnd()
                    }
                    e.isInteractive && e.wheelHitTest(n) && (i.preventDefault(), e.dragStart(n), t.setPointerCapture(i.pointerId), t.addEventListener("pointermove", r), t.addEventListener("pointerup", s), t.addEventListener("pointercancel", s), t.addEventListener("pointerout", s))
                }, e._handler_onMouseDown = (t = {}) => {
                    let i = {
                        x: t.clientX,
                        y: t.clientY
                    };

                    function n(t = {}) {
                        t.preventDefault(), e.dragMove({
                            x: t.clientX,
                            y: t.clientY
                        })
                    }

                    function r(t = {}) {
                        t.preventDefault(), document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", r), e.dragEnd()
                    }
                    e.isInteractive && e.wheelHitTest(i) && (e.dragStart(i), document.addEventListener("mousemove", n), document.addEventListener("mouseup", r))
                }, e._handler_onTouchStart = (i = {}) => {
                    let n = {
                        x: i.targetTouches[0].clientX,
                        y: i.targetTouches[0].clientY
                    };

                    function r(t = {}) {
                        t.preventDefault(), e.dragMove({
                            x: t.targetTouches[0].clientX,
                            y: t.targetTouches[0].clientY
                        })
                    }

                    function s(i = {}) {
                        i.preventDefault(), t.removeEventListener("touchmove", r), t.removeEventListener("touchend", s), t.removeEventListener("touchcancel", s), e.dragEnd()
                    }
                    e.isInteractive && e.wheelHitTest(n) && (i.preventDefault(), e.dragStart(n), t.addEventListener("touchmove", r), t.addEventListener("touchend", s), t.addEventListener("touchcancel", s))
                }, "PointerEvent" in window ? (t.addEventListener("pointerdown", e._handler_onPointerDown), t.addEventListener("pointermove", e._handler_onPointerMoveRefreshCursor)) : (t.addEventListener("touchstart", e._handler_onTouchStart), t.addEventListener("mousedown", e._handler_onMouseDown), t.addEventListener("mousemove", e._handler_onMouseMoveRefreshCursor))
            })(e), e._handler_onResize = ((e = {}, t = {}) => {
                if (window.ResizeObserver) {
                    let i = new ResizeObserver((() => {
                        t({
                            redraw: !0
                        })
                    }));
                    return i.observe(e), {
                        stop: () => {
                            i.unobserve(e), i.disconnect()
                        }
                    }
                }
                return window.addEventListener("resize", t), {
                    stop: () => {
                        window.removeEventListener("resize", t)
                    }
                }
            })(e._canvasContainer, (({
                redraw: t = !0
            }) => {
                e.resize(), t && e.draw(performance.now())
            }));
            let t = () => {
                e._mediaQueryList = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), e._mediaQueryList.addEventListener("change", e._handler_onDevicePixelRatioChange, {
                    once: !0
                })
            };
            e._handler_onDevicePixelRatioChange = () => {
                e.resize(), t()
            }, t()
        }
        var x = class {
            constructor(e, t = {}) {
                if (!c(e)) throw new Error("wheel must be an instance of Wheel");
                if (!c(t) && null !== t) throw new Error("props must be an Object or null");
                this._wheel = e;
                for (let e of Object.keys(p.item)) this["_" + e] = p.item[e];
                t ? this.init(t) : this.init(p.item)
            }
            init(e = {}) {
                this.backgroundColor = e.backgroundColor, this.image = e.image, this.imageOpacity = e.imageOpacity, this.imageRadius = e.imageRadius, this.imageRotation = e.imageRotation, this.imageScale = e.imageScale, this.label = e.label, this.labelColor = e.labelColor, this.value = e.value, this.weight = e.weight
            }
            get backgroundColor() {
                return this._backgroundColor
            }
            set backgroundColor(e) {
                this._backgroundColor = "string" == typeof e ? e : p.item.backgroundColor, this._wheel.refresh()
            }
            get image() {
                return this._image
            }
            set image(e) {
                let t;
                "string" == typeof e ? (t = new Image, t.src = e, t.onload = e => this._wheel.refresh()) : t = p.item.image, this._image = t, this._wheel.refresh()
            }
            get imageOpacity() {
                return this._imageOpacity
            }
            set imageOpacity(e) {
                this._imageOpacity = "number" == typeof e ? e : p.item.imageOpacity, this._wheel.refresh()
            }
            get imageRadius() {
                return this._imageRadius
            }
            set imageRadius(e) {
                this._imageRadius = "number" == typeof e ? e : p.item.imageRadius, this._wheel.refresh()
            }
            get imageRotation() {
                return this._imageRotation
            }
            set imageRotation(e) {
                this._imageRotation = "number" == typeof e ? e : p.item.imageRotation, this._wheel.refresh()
            }
            get imageScale() {
                return this._imageScale
            }
            set imageScale(e) {
                this._imageScale = "number" == typeof e ? e : p.item.imageScale, this._wheel.refresh()
            }
            get label() {
                return this._label
            }
            set label(e) {
                this._label = "string" == typeof e ? e : p.item.label, this._wheel.refresh()
            }
            get labelColor() {
                return this._labelColor
            }
            set labelColor(e) {
                this._labelColor = "string" == typeof e ? e : p.item.labelColor, this._wheel.refresh()
            }
            get value() {
                return this._value
            }
            set value(e) {
                this._value = void 0 !== e ? e : p.item.value
            }
            get weight() {
                return this._weight
            }
            set weight(e) {
                this._weight = "number" == typeof e ? e : p.item.weight
            }
            getIndex() {
                let e = this._wheel.items.findIndex((e => e === this));
                if (-1 === e) throw new Error("Item not found in parent Wheel");
                return e
            }
            getCenterAngle() {
                let e = this._wheel.getItemAngles()[this.getIndex()];
                return e.start + (e.end - e.start) / 2
            }
            getStartAngle() {
                return this._wheel.getItemAngles()[this.getIndex()].start
            }
            getEndAngle() {
                return this._wheel.getItemAngles()[this.getIndex()].end
            }
            getRandomAngle() {
                return function(e = 0, t = 0, i = 14) {
                    return parseFloat((Math.random() * (t - e) + e).toFixed(i))
                }(this.getStartAngle(), this.getEndAngle())
            }
        };

        function y(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function S(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function R(e, t, i) {
            return t && S(e.prototype, t), i && S(e, i), e
        }

        function L(e) {
            return +e.replace(/px/, "")
        }

        function I(e, t) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                n = Math.random() * (t - e) + e;
            return Math.floor(n * Math.pow(10, i)) / Math.pow(10, i)
        }

        function M(e) {
            return e[I(0, e.length)]
        }
        var E = ["#fcf403", "#62fc03", "#f4fc03", "#03e7fc", "#03fca5", "#a503fc", "#fc03ad", "#fc03c2"];

        function A(e) {
            return Math.log(e) / Math.log(1920)
        }
        var W = function() {
            function e(t) {
                y(this, e);
                var i = t.initialPosition,
                    n = t.direction,
                    r = t.confettiRadius,
                    s = t.confettiColors,
                    a = t.emojis,
                    o = t.emojiSize,
                    l = t.canvasWidth,
                    h = I(.9, 1.7, 3) * A(l);
                this.confettiSpeed = {
                    x: h,
                    y: h
                }, this.finalConfettiSpeedX = I(.2, .6, 3), this.rotationSpeed = a.length ? .01 : I(.03, .07, 3) * A(l), this.dragForceCoefficient = I(5e-4, 9e-4, 6), this.radius = {
                    x: r,
                    y: r
                }, this.initialRadius = r, this.rotationAngle = "left" === n ? I(0, .2, 3) : I(-.2, 0, 3), this.emojiSize = o, this.emojiRotationAngle = I(0, 2 * Math.PI), this.radiusYUpdateDirection = "down";
                var u = "left" === n ? I(82, 15) * Math.PI / 180 : I(-15, -82) * Math.PI / 180;
                this.absCos = Math.abs(Math.cos(u)), this.absSin = Math.abs(Math.sin(u));
                var d = I(-150, 0),
                    m = {
                        x: i.x + ("left" === n ? -d : d) * this.absCos,
                        y: i.y - d * this.absSin
                    };
                this.currentPosition = Object.assign({}, m), this.initialPosition = Object.assign({}, m), this.color = a.length ? null : M(s), this.emoji = a.length ? M(a) : null, this.createdAt = (new Date).getTime(), this.direction = n
            }
            return R(e, [{
                key: "draw",
                value: function(e) {
                    var t = this.currentPosition,
                        i = this.radius,
                        n = this.color,
                        r = this.emoji,
                        s = this.rotationAngle,
                        a = this.emojiRotationAngle,
                        o = this.emojiSize,
                        l = window.devicePixelRatio;
                    n ? (e.fillStyle = n, e.beginPath(), e.ellipse(t.x * l, t.y * l, i.x * l, i.y * l, s, 0, 2 * Math.PI), e.fill()) : r && (e.font = "".concat(o, "px serif"), e.save(), e.translate(l * t.x, l * t.y), e.rotate(a), e.textAlign = "center", e.fillText(r, 0, 0), e.restore())
                }
            }, {
                key: "updatePosition",
                value: function(e, t) {
                    var i = this.confettiSpeed,
                        n = this.dragForceCoefficient,
                        r = this.finalConfettiSpeedX,
                        s = this.radiusYUpdateDirection,
                        a = this.rotationSpeed,
                        o = this.createdAt,
                        l = this.direction,
                        h = t - o;
                    i.x > r && (this.confettiSpeed.x -= n * e), this.currentPosition.x += i.x * ("left" === l ? -this.absCos : this.absCos) * e, this.currentPosition.y = this.initialPosition.y - i.y * this.absSin * h + .00125 * Math.pow(h, 2) / 2, this.rotationSpeed -= this.emoji ? 1e-4 : 1e-5 * e, this.rotationSpeed < 0 && (this.rotationSpeed = 0), this.emoji ? this.emojiRotationAngle += this.rotationSpeed * e % (2 * Math.PI) : "down" === s ? (this.radius.y -= e * a, this.radius.y <= 0 && (this.radius.y = 0, this.radiusYUpdateDirection = "up")) : (this.radius.y += e * a, this.radius.y >= this.initialRadius && (this.radius.y = this.initialRadius, this.radiusYUpdateDirection = "down"))
                }
            }, {
                key: "getIsVisibleOnCanvas",
                value: function(e) {
                    return this.currentPosition.y < e + 100
                }
            }]), e
        }();
        var k = function() {
            function e(t) {
                var i = this;
                y(this, e), this.canvasContext = t, this.shapes = [], this.promise = new Promise((function(e) {
                    return i.resolvePromise = e
                }))
            }
            return R(e, [{
                key: "getBatchCompletePromise",
                value: function() {
                    return this.promise
                }
            }, {
                key: "addShapes",
                value: function() {
                    var e;
                    (e = this.shapes).push.apply(e, arguments)
                }
            }, {
                key: "complete",
                value: function() {
                    var e;
                    return !this.shapes.length && (null === (e = this.resolvePromise) || void 0 === e || e.call(this), !0)
                }
            }, {
                key: "processShapes",
                value: function(e, t, i) {
                    var n = this,
                        r = e.timeDelta,
                        s = e.currentTime;
                    this.shapes = this.shapes.filter((function(e) {
                        return e.updatePosition(r, s), e.draw(n.canvasContext), !i || e.getIsVisibleOnCanvas(t)
                    }))
                }
            }]), e
        }();
        const T = function() {
            function e() {
                var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                y(this, e), this.activeConfettiBatches = [], this.canvas = i.canvas || ((t = document.createElement("canvas")).style.position = "fixed", t.style.width = "100%", t.style.height = "100%", t.style.top = "0", t.style.left = "0", t.style.zIndex = "1000", t.style.pointerEvents = "none", document.body.appendChild(t), t), this.canvasContext = this.canvas.getContext("2d"), this.requestAnimationFrameRequested = !1, this.lastUpdated = (new Date).getTime(), this.iterationIndex = 0, this.loop = this.loop.bind(this), requestAnimationFrame(this.loop)
            }
            return R(e, [{
                key: "loop",
                value: function() {
                    var e, t, i, n, r;
                    this.requestAnimationFrameRequested = !1, e = this.canvas, t = window.devicePixelRatio, i = getComputedStyle(e), n = L(i.getPropertyValue("width")), r = L(i.getPropertyValue("height")), e.setAttribute("width", (n * t).toString()), e.setAttribute("height", (r * t).toString());
                    var s = (new Date).getTime(),
                        a = s - this.lastUpdated,
                        o = this.canvas.offsetHeight,
                        l = this.iterationIndex % 10 == 0;
                    this.activeConfettiBatches = this.activeConfettiBatches.filter((function(e) {
                        return e.processShapes({
                            timeDelta: a,
                            currentTime: s
                        }, o, l), !l || !e.complete()
                    })), this.iterationIndex++, this.queueAnimationFrameIfNeeded(s)
                }
            }, {
                key: "queueAnimationFrameIfNeeded",
                value: function(e) {
                    this.requestAnimationFrameRequested || this.activeConfettiBatches.length < 1 || (this.requestAnimationFrameRequested = !0, this.lastUpdated = e || (new Date).getTime(), requestAnimationFrame(this.loop))
                }
            }, {
                key: "addConfetti",
                value: function() {
                    for (var e = function(e) {
                            var t = e.confettiRadius,
                                i = void 0 === t ? 6 : t,
                                n = e.confettiNumber,
                                r = void 0 === n ? e.confettiesNumber || (e.emojis ? 40 : 250) : n,
                                s = e.confettiColors,
                                a = void 0 === s ? E : s,
                                o = e.emojis,
                                l = void 0 === o ? e.emojies || [] : o,
                                h = e.emojiSize,
                                u = void 0 === h ? 80 : h;
                            return e.emojies && console.error("emojies argument is deprecated, please use emojis instead"), e.confettiesNumber && console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"), {
                                confettiRadius: i,
                                confettiNumber: r,
                                confettiColors: a,
                                emojis: l,
                                emojiSize: u
                            }
                        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), t = e.confettiRadius, i = e.confettiNumber, n = e.confettiColors, r = e.emojis, s = e.emojiSize, a = this.canvas.getBoundingClientRect(), o = a.width, l = 5 * a.height / 7, h = {
                            x: 0,
                            y: l
                        }, u = {
                            x: o,
                            y: l
                        }, d = new k(this.canvasContext), m = 0; m < i / 2; m++) {
                        var c = new W({
                                initialPosition: h,
                                direction: "right",
                                confettiRadius: t,
                                confettiColors: n,
                                confettiNumber: i,
                                emojis: r,
                                emojiSize: s,
                                canvasWidth: o
                            }),
                            g = new W({
                                initialPosition: u,
                                direction: "left",
                                confettiRadius: t,
                                confettiColors: n,
                                confettiNumber: i,
                                emojis: r,
                                emojiSize: s,
                                canvasWidth: o
                            });
                        d.addShapes(c, g)
                    }
                    return this.activeConfettiBatches.push(d), this.queueAnimationFrameIfNeeded(), d.getBatchCompletePromise()
                }
            }, {
                key: "clearCanvas",
                value: function() {
                    this.activeConfettiBatches = []
                }
            }, {
                key: "destroyCanvas",
                value: function() {
                    this.canvas.remove()
                }
            }]), e
        }();
        var P = i(927),
            V = new T,
            F = document.getElementById("wheel"),
            z = document.getElementById("entries"),
            B = document.getElementById("pick"),
            D = document.getElementById("yes-no"),
            j = document.getElementById("food"),
            O = document.getElementById("input-data"),
            N = document.getElementById("modal"),
            q = document.getElementById("remove"),
            H = document.getElementById("winner"),
            Y = -1,
            U = {
                name: "Main",
                borderColor: "#bebebf",
                borderWidth: 0,
                isInteractive: !1,
                itemLabelBaselineOffset: 0,
                itemLabelFontSizeMax: 32,
                itemLabelRadius: .84,
                itemLabelRadiusMax: .16,
                itemLabelRotation: 0,
                itemLabelAlign: "right",
                itemLabelColors: ["#fff"],
                itemLabelFont: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                lineWidth: 0,
                radius: 1,
                rotationSpeedMax: 500,
                rotationResistance: -100,
                itemBackgroundColors: ["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#90BE6D", "#43AA8B", "#577590", "#277DA1", "#4D908E", "#577590", "#F9844A", "#FDCB6E", "#C6D5C6", "#B5E48C", "#99D98C", "#76C893", "#52B69A", "#34A0A4", "#1A759F", "#168AAD", "#184E77", "#9B2226", "#D00000", "#6A057F"],
                items: [],
                onRest: function(e) {
                    var t = (0, P.getTextareaValues)(z.value);
                    Y = e.currentIndex, H.innerText = t[Y], N.showModal(), V.addConfetti()
                }
            },
            X = function() {
                return function(e) {
                    for (var t in U.items = [], e) U.items.push({
                        label: e[t]
                    });
                    return U
                }((0, P.getTextareaValues)(z.value))
            },
            $ = function(e) {
                z.value = e.join("\n"), Q.init(X())
            },
            Q = new class {
                constructor(e, t = {}) {
                    if (!(e instanceof Element)) throw new Error("container must be an instance of Element");
                    if (!c(t) && null !== t) throw new Error("props must be an Object or null");
                    this._frameRequestId = null, this._rotationSpeed = 0, this._rotationDirection = 1, this._spinToTimeEnd = null, this._lastSpinFrameTime = null, this._isCursorOverWheel = !1, this.add(e);
                    for (let e of Object.keys(p.wheel)) this["_" + e] = p.wheel[e];
                    t ? this.init(t) : this.init(p.wheel)
                }
                init(e = {}) {
                    this._isInitialising = !0, this.borderColor = e.borderColor, this.borderWidth = e.borderWidth, this.debug = e.debug, this.image = e.image, this.isInteractive = e.isInteractive, this.itemBackgroundColors = e.itemBackgroundColors, this.itemLabelAlign = e.itemLabelAlign, this.itemLabelBaselineOffset = e.itemLabelBaselineOffset, this.itemLabelColors = e.itemLabelColors, this.itemLabelFont = e.itemLabelFont, this.itemLabelFontSizeMax = e.itemLabelFontSizeMax, this.itemLabelRadius = e.itemLabelRadius, this.itemLabelRadiusMax = e.itemLabelRadiusMax, this.itemLabelRotation = e.itemLabelRotation, this.itemLabelStrokeColor = e.itemLabelStrokeColor, this.itemLabelStrokeWidth = e.itemLabelStrokeWidth, this.items = e.items, this.lineColor = e.lineColor, this.lineWidth = e.lineWidth, this.pixelRatio = e.pixelRatio, this.rotationSpeedMax = e.rotationSpeedMax, this.radius = e.radius, this.rotation = e.rotation, this.rotationResistance = e.rotationResistance, this.offset = e.offset, this.onCurrentIndexChange = e.onCurrentIndexChange, this.onRest = e.onRest, this.onSpin = e.onSpin, this.overlayImage = e.overlayImage, this.pointerAngle = e.pointerAngle
                }
                add(e) {
                    this._canvasContainer = e, this.canvas = document.createElement("canvas"), this._context = this.canvas.getContext("2d"), this._canvasContainer.append(this.canvas), C(this), !1 === this._isInitialising && this.resize()
                }
                remove() {
                    null !== this.canvas && (null !== this._frameRequestId && window.cancelAnimationFrame(this._frameRequestId), function(e = {}) {
                        let t = e.canvas;
                        "PointerEvent" in window ? (t.removeEventListener("pointerdown", e._handler_onPointerDown), t.removeEventListener("pointermove", e._handler_onPointerMoveRefreshCursor)) : (t.removeEventListener("touchstart", e._handler_onTouchStart), t.removeEventListener("mousedown", e._handler_onMouseDown), t.removeEventListener("mousemove", e._handler_onMouseMoveRefreshCursor)), e._handler_onResize.stop(), e._mediaQueryList.removeEventListener("change", e._handler_onDevicePixelRatioChange)
                    }(this), this._canvasContainer.removeChild(this.canvas), this._canvasContainer = null, this.canvas = null, this._context = null)
                }
                resize() {
                    if (null === this.canvas) return;
                    this.canvas.style.width = this._canvasContainer.clientWidth + "px", this.canvas.style.height = this._canvasContainer.clientHeight + "px";
                    let [e, t] = [this._canvasContainer.clientWidth * this.getActualPixelRatio(), this._canvasContainer.clientHeight * this.getActualPixelRatio()];
                    this.canvas.width = e, this.canvas.height = t;
                    let i = Math.min(e, t),
                        n = i - i * this.offset.w,
                        r = i - i * this.offset.h,
                        s = Math.min(e / n, t / r);
                    this._size = Math.max(n * s, r * s), this._center = {
                        x: e / 2 + e * this.offset.w,
                        y: t / 2 + t * this.offset.h
                    }, this._actualRadius = this._size / 2 * this.radius, this._itemLabelFontSize = this.itemLabelFontSizeMax * (this._size / 500), this._labelMaxWidth = this._actualRadius * (this.itemLabelRadius - this.itemLabelRadiusMax);
                    for (let e of this._items) this._itemLabelFontSize = Math.min(this._itemLabelFontSize, u(e.label, this.itemLabelFont, this._labelMaxWidth, this._context));
                    this.refresh()
                }
                draw(e = 0) {
                    if (this._frameRequestId = null, null === this._context || null === this.canvas) return;
                    let t = this._context;
                    t.clearRect(0, 0, this.canvas.width, this.canvas.height), this.animateRotation(e);
                    let i = this.getItemAngles(this._rotation),
                        n = this.getScaledNumber(this._borderWidth);
                    t.textBaseline = "middle", t.textAlign = this.itemLabelAlign, t.font = this._itemLabelFontSize + "px " + this.itemLabelFont, t.save();
                    for (let [e, t] of i.entries()) {
                        let i = this._items[e],
                            r = new Path2D;
                        r.moveTo(this._center.x, this._center.y), r.arc(this._center.x, this._center.y, this._actualRadius - n / 2, l(t.start + -90), l(t.end + -90)), i.path = r
                    }
                    this.drawItemBackgrounds(t, i), this.drawItemImages(t, i), this.drawItemLines(t, i), this.drawItemLabels(t, i), this.drawBorder(t), this.drawImage(t, this._image, !1), this.drawImage(t, this._overlayImage, !0), this.drawDebugPointerLine(t), this.drawDebugDragPoints(t), this._isInitialising = !1
                }
                drawItemBackgrounds(e, t = []) {
                    var i;
                    for (let [n, r] of t.entries()) {
                        let t = this._items[n];
                        e.fillStyle = null != (i = t.backgroundColor) ? i : this._itemBackgroundColors[n % this._itemBackgroundColors.length], e.fill(t.path)
                    }
                }
                drawItemImages(e, t = []) {
                    for (let [i, n] of t.entries()) {
                        let t = this._items[i];
                        if (!b(t.image)) continue;
                        e.save(), e.clip(t.path);
                        let r = n.start + (n.end - n.start) / 2;
                        e.translate(this._center.x + Math.cos(l(r + -90)) * (this._actualRadius * t.imageRadius), this._center.y + Math.sin(l(r + -90)) * (this._actualRadius * t.imageRadius)), e.rotate(l(r + t.imageRotation)), e.globalAlpha = t.imageOpacity;
                        let s = this._size / 500 * t.image.width * t.imageScale,
                            a = this._size / 500 * t.image.height * t.imageScale,
                            o = -s / 2,
                            h = -a / 2;
                        e.drawImage(t.image, o, h, s, a), e.restore()
                    }
                }
                drawImage(e, t, i = !1) {
                    if (!b(t)) return;
                    e.translate(this._center.x, this._center.y), i || e.rotate(l(this._rotation));
                    let n = i ? this._size : this._size * this.radius,
                        r = -n / 2;
                    e.drawImage(t, r, r, n, n), e.resetTransform()
                }
                drawDebugPointerLine(e) {
                    !this.debug || (e.translate(this._center.x, this._center.y), e.rotate(l(this._pointerAngle + -90)), e.beginPath(), e.moveTo(0, 0), e.lineTo(2 * this._actualRadius, 0), e.strokeStyle = w.pointerLineColor, e.lineWidth = this.getScaledNumber(2), e.stroke(), e.resetTransform())
                }
                drawBorder(e) {
                    if (this._borderWidth <= 0) return;
                    let t = this.getScaledNumber(this._borderWidth),
                        i = this._borderColor || "transparent";
                    if (e.beginPath(), e.strokeStyle = i, e.lineWidth = t, e.arc(this._center.x, this._center.y, this._actualRadius - t / 2, 0, 2 * Math.PI), e.stroke(), this.debug) {
                        let t = this.getScaledNumber(1);
                        e.beginPath(), e.strokeStyle = e.strokeStyle = w.labelRadiusColor, e.lineWidth = t, e.arc(this._center.x, this._center.y, this._actualRadius * this.itemLabelRadius, 0, 2 * Math.PI), e.stroke(), e.beginPath(), e.strokeStyle = e.strokeStyle = w.labelRadiusColor, e.lineWidth = t, e.arc(this._center.x, this._center.y, this._actualRadius * this.itemLabelRadiusMax, 0, 2 * Math.PI), e.stroke()
                    }
                }
                drawItemLines(e, t = []) {
                    if (this._lineWidth <= 0) return;
                    let i = this.getScaledNumber(this._lineWidth),
                        n = this.getScaledNumber(this._borderWidth);
                    e.translate(this._center.x, this._center.y);
                    for (let r of t) e.rotate(l(r.start + -90)), e.beginPath(), e.moveTo(0, 0), e.lineTo(this._actualRadius - n, 0), e.strokeStyle = this.lineColor, e.lineWidth = i, e.stroke(), e.rotate(-l(r.start + -90));
                    e.resetTransform()
                }
                drawItemLabels(e, t = []) {
                    let i = this._itemLabelFontSize * -this.itemLabelBaselineOffset,
                        n = this.getScaledNumber(1),
                        r = this.getScaledNumber(2 * this._itemLabelStrokeWidth);
                    for (let [s, a] of t.entries()) {
                        let t = this._items[s],
                            o = t.labelColor || this._itemLabelColors[s % this._itemLabelColors.length] || "transparent";
                        if ("" === t.label.trim() || "transparent" === o) continue;
                        e.save(), e.clip(t.path);
                        let h = a.start + (a.end - a.start) / 2;
                        e.translate(this._center.x + Math.cos(l(h + -90)) * (this._actualRadius * this.itemLabelRadius), this._center.y + Math.sin(l(h + -90)) * (this._actualRadius * this.itemLabelRadius)), e.rotate(l(h + -90)), e.rotate(l(this.itemLabelRotation)), this.debug && (e.beginPath(), e.moveTo(0, 0), e.lineTo(-this._labelMaxWidth, 0), e.strokeStyle = w.labelOutlineColor, e.lineWidth = n, e.stroke(), e.strokeRect(0, -this._itemLabelFontSize / 2, -this._labelMaxWidth, this._itemLabelFontSize)), this._itemLabelStrokeWidth > 0 && (e.lineWidth = r, e.strokeStyle = this._itemLabelStrokeColor, e.lineJoin = "round", e.strokeText(t.label, 0, i)), e.fillStyle = o, e.fillText(t.label, 0, i), e.restore()
                    }
                }
                drawDebugDragPoints(e) {
                    var t;
                    if (!this.debug || null == (t = this._dragEvents) || !t.length) return;
                    let i = [...this._dragEvents].reverse(),
                        n = this.getScaledNumber(.5),
                        r = this.getScaledNumber(4);
                    for (let [t, s] of i.entries()) {
                        let i = t / this._dragEvents.length * 100;
                        e.beginPath(), e.arc(s.x, s.y, r, 0, 2 * Math.PI), e.fillStyle = `hsl(${w.dragPointHue},100%,${i}%)`, e.strokeStyle = "#000", e.lineWidth = n, e.fill(), e.stroke()
                    }
                }
                animateRotation(e = 0) {
                    if (null !== this._spinToTimeEnd) {
                        if (e >= this._spinToTimeEnd) return this.rotation = this._spinToEndRotation, this._spinToTimeEnd = null, void this.raiseEvent_onRest();
                        let t = this._spinToTimeEnd - this._spinToTimeStart,
                            i = (e - this._spinToTimeStart) / t;
                        i = i < 0 ? 0 : i;
                        let n = this._spinToEndRotation - this._spinToStartRotation;
                        return this.rotation = this._spinToStartRotation + n * this._spinToEasingFunction(i), void this.refresh()
                    }
                    if (null !== this._lastSpinFrameTime) {
                        let t = e - this._lastSpinFrameTime;
                        return t > 0 && (this.rotation += t / 1e3 * this._rotationSpeed % 360, this._rotationSpeed = this.getRotationSpeedPlusDrag(t), 0 === this._rotationSpeed ? (this.raiseEvent_onRest(), this._lastSpinFrameTime = null) : this._lastSpinFrameTime = e), void this.refresh()
                    }
                }
                getRotationSpeedPlusDrag(e = 0) {
                    let t = this._rotationSpeed + this.rotationResistance * (e / 1e3) * this._rotationDirection;
                    return 1 === this._rotationDirection && t < 0 || -1 === this._rotationDirection && t >= 0 ? 0 : t
                }
                spin(e = 0) {
                    if (!g(e)) throw new Error("rotationSpeed must be a number");
                    this._dragEvents = [], this.beginSpin(e, "spin")
                }
                spinTo(e = 0, t = 0, i = null) {
                    if (!g(e)) throw new Error("Error: rotation must be a number");
                    if (!g(t)) throw new Error("Error: duration must be a number");
                    this.stop(), this._dragEvents = [], this.animate(e, t, i), this.raiseEvent_onSpin({
                        method: "spinto",
                        targetRotation: e,
                        duration: t
                    })
                }
                spinToItem(e = 0, t = 0, i = !0, n = 1, r = 1, s = null) {
                    this.stop(), this._dragEvents = [];
                    // Lấy góc bắt đầu và kết thúc của ô
                    const itemAngles = this.getItemAngles();
                    const startAngle = itemAngles[e].start;
                    const endAngle = itemAngles[e].end;
                    // Tạo độ lệch ngẫu nhiên trong phạm vi 80% giữa ô (tránh mép 10% mỗi bên)
                    const range = endAngle - startAngle;
                    const minOffset = range * 0.1;
                    const maxOffset = range * 0.9;
                    const randomOffset = minOffset + Math.random() * (maxOffset - minOffset);
                    // Mũi tên sẽ dừng ở vị trí ngẫu nhiên trong 80% giữa ô
                    let a = startAngle + randomOffset;
                    let o = m(this.rotation, a - this._pointerAngle, r);
                    o += 360 * n * r, this.animate(o, t, s), this.raiseEvent_onSpin({
                        method: "spintoitem",
                        targetItemIndex: e,
                        targetRotation: o,
                        duration: t
                    })
                }
                animate(e, t, i) {
                    this._spinToStartRotation = this.rotation, this._spinToEndRotation = e, this._spinToTimeStart = performance.now(), this._spinToTimeEnd = this._spinToTimeStart + t, this._spinToEasingFunction = i || v, this.refresh()
                }
                stop() {
                    this._spinToTimeEnd = null, this._rotationSpeed = 0, this._lastSpinFrameTime = null
                }
                getScaledNumber(e) {
                    return e / 500 * this._size
                }
                getActualPixelRatio() {
                    return 0 !== this._pixelRatio ? this._pixelRatio : window.devicePixelRatio
                }
                wheelHitTest(e = {
                    x: 0,
                    y: 0
                }) {
                    if (null === this.canvas) return !1;
                    return function(e = {
                        x: 0,
                        y: 0
                    }, t, i, n) {
                        return s(e.x - t, 2) + s(e.y - i, 2) <= s(n, 2)
                    }(d(e, this.canvas, this.getActualPixelRatio()), this._center.x, this._center.y, this._actualRadius)
                }
                refreshCursor() {
                    if (null !== this.canvas) {
                        if (this.isInteractive) {
                            if (this.isDragging) return void(this.canvas.style.cursor = "grabbing");
                            if (this._isCursorOverWheel) return void(this.canvas.style.cursor = "grab")
                        }
                        this.canvas.style.cursor = ""
                    }
                }
                getAngleFromCenter(e = {
                    x: 0,
                    y: 0
                }) {
                    return (function(e, t, i, n) {
                        let r = e - i,
                            s = t - n,
                            a = Math.atan2(-s, -r);
                        return a *= 180 / Math.PI, a < 0 && (a += 360), a
                    }(this._center.x, this._center.y, e.x, e.y) + 90) % 360
                }
                getCurrentIndex() {
                    return this._currentIndex
                }
                refreshCurrentIndex(e = []) {
                    0 === this._items.length && (this._currentIndex = -1);
                    for (let [t, i] of e.entries())
                        if (h(this._pointerAngle, i.start % 360, i.end % 360)) {
                            if (this._currentIndex === t) break;
                            this._currentIndex = t, this._isInitialising || this.raiseEvent_onCurrentIndexChange();
                            break
                        }
                }
                getItemAngles(e = 0) {
                    let t = 0;
                    for (let e of this.items) t += e.weight;
                    let i, n = 360 / t,
                        r = e,
                        s = [];
                    for (let e of this._items) i = e.weight * n, s.push({
                        start: r,
                        end: r + i
                    }), r += i;
                    return this._items.length > 1 && (s[s.length - 1].end = s[0].start + 360), s
                }
                refresh() {
                    null === this._frameRequestId && (this._frameRequestId = window.requestAnimationFrame((e => this.draw(e))))
                }
                limitSpeed(e = 0, t = 0) {
                    let i = Math.min(e, t);
                    return Math.max(i, -t)
                }
                beginSpin(e = 0, t = "") {
                    this.stop(), this._rotationSpeed = this.limitSpeed(e, this._rotationSpeedMax), this._lastSpinFrameTime = performance.now(), this._rotationDirection = this._rotationSpeed >= 0 ? 1 : -1, 0 !== this._rotationSpeed && this.raiseEvent_onSpin({
                        method: t,
                        rotationSpeed: this._rotationSpeed,
                        rotationResistance: this._rotationResistance
                    }), this.refresh()
                }
                refreshAriaLabel() {
                    if (null === this.canvas) return;
                    this.canvas.setAttribute("role", "img");
                    let e = this.items.length >= 2 ? ` The wheel has ${this.items.length} slices.` : "";
                    this.canvas.setAttribute("aria-label", "An image of a spinning prize wheel." + e)
                }
                get borderColor() {
                    return this._borderColor
                }
                set borderColor(e) {
                    this._borderColor = f({
                        val: e,
                        isValid: "string" == typeof e,
                        errorMessage: "Wheel.borderColor must be a string",
                        defaultValue: p.wheel.borderColor
                    }), this.refresh()
                }
                get borderWidth() {
                    return this._borderWidth
                }
                set borderWidth(e) {
                    this._borderWidth = f({
                        val: e,
                        isValid: g(e),
                        errorMessage: "Wheel.borderWidth must be a number",
                        defaultValue: p.wheel.borderWidth
                    }), this.refresh()
                }
                get debug() {
                    return this._debug
                }
                set debug(e) {
                    this._debug = f({
                        val: e,
                        isValid: "boolean" == typeof e,
                        errorMessage: "Wheel.debug must be a boolean",
                        defaultValue: p.wheel.debug
                    }), this.refresh()
                }
                get image() {
                    var e, t;
                    return null != (t = null == (e = this._image) ? void 0 : e.src) ? t : null
                }
                set image(e) {
                    this._image = f({
                        val: e,
                        isValid: "string" == typeof e || null === e,
                        errorMessage: "Wheel.image must be a url (string) or null",
                        defaultValue: p.wheel.image,
                        action: () => {
                            if (null === e) return null;
                            let t = new Image;
                            return t.src = e, t.onload = e => this.refresh(), t
                        }
                    }), this.refresh()
                }
                get isInteractive() {
                    return this._isInteractive
                }
                set isInteractive(e) {
                    this._isInteractive = f({
                        val: e,
                        isValid: "boolean" == typeof e,
                        errorMessage: "Wheel.isInteractive must be a boolean",
                        defaultValue: p.wheel.isInteractive
                    }), this.refreshCursor()
                }
                get itemBackgroundColors() {
                    return this._itemBackgroundColors
                }
                set itemBackgroundColors(e) {
                    this._itemBackgroundColors = f({
                        val: e,
                        isValid: Array.isArray(e),
                        errorMessage: "Wheel.itemBackgroundColors must be an array",
                        defaultValue: p.wheel.itemBackgroundColors
                    }), this.refresh()
                }
                get itemLabelAlign() {
                    return this._itemLabelAlign
                }
                set itemLabelAlign(e) {
                    this._itemLabelAlign = f({
                        val: e,
                        isValid: "string" == typeof e,
                        errorMessage: "Wheel.itemLabelAlign must be a string",
                        defaultValue: p.wheel.itemLabelAlign
                    }), this.refresh()
                }
                get itemLabelBaselineOffset() {
                    return this._itemLabelBaselineOffset
                }
                set itemLabelBaselineOffset(e) {
                    this._itemLabelBaselineOffset = f({
                        val: e,
                        isValid: g(e),
                        errorMessage: "Wheel.itemLabelBaselineOffset must be a number",
                        defaultValue: p.wheel.itemLabelBaselineOffset
                    }), this.resize()
                }
                get itemLabelColors() {
                    return this._itemLabelColors
                }
                set itemLabelColors(e) {
                    this._itemLabelColors = f({
                        val: e,
                        isValid: Array.isArray(e),
                        errorMessage: "Wheel.itemLabelColors must be an array",
                        defaultValue: p.wheel.itemLabelColors
                    }), this.refresh()
                }
                get itemLabelFont() {
                    return this._itemLabelFont
                }
                set itemLabelFont(e) {
                    this._itemLabelFont = f({
                        val: e,
                        isValid: "string" == typeof e,
                        errorMessage: "Wheel.itemLabelFont must be a string",
                        defaultValue: p.wheel.itemLabelFont
                    }), this.resize()
                }
                get itemLabelFontSizeMax() {
                    return this._itemLabelFontSizeMax
                }
                set itemLabelFontSizeMax(e) {
                    this._itemLabelFontSizeMax = f({
                        val: e,
                        isValid: g(e),
                        errorMessage: "Wheel.itemLabelFontSizeMax must be a number",
                        defaultValue: p.wheel.itemLabelFontSizeMax
                    }), this.resize()
                }
                get itemLabelRadius() {
                    return this._itemLabelRadius
                }
                set itemLabelRadius(e) {
                    this._itemLabelRadius = f({
                        val: e,
                        isValid: g(e),
                        errorMessage: "Wheel.itemLabelRadius must be a number",
                        defaultValue: p.wheel.itemLabelRadius
                    }), this.resize()
                }
                get itemLabelRadiusMax() {
                    return this._itemLabelRadiusMax
                }
                set itemLabelRadiusMax(e) {
                    this._itemLabelRadiusMax = f({
                        val: e,
                        isValid: g(e),
                        errorMessage: "Wheel.itemLabelRadiusMax must be a number",
                        defaultValue: p.wheel.itemLabelRadiusMax
                    }), this.resize()
                }
                get itemLabelRotation() {
                    return this._itemLabelRotation
                }
                set itemLabelRotation(e) {
                    this._itemLabelRotation = f({
                        val: e,
                        isValid: g(e),
                        errorMessage: "Wheel.itemLabelRotation must be a number",
                        defaultValue: p.wheel.itemLabelRotation
                    }), this.refresh()
                }
                get itemLabelStrokeColor() {
                    return this._itemLabelStrokeColor
                }
                set itemLabelStrokeColor(e) {
                    this._itemLabelStrokeColor = f({
                        val: e,
                        isValid: "string" == typeof e,
                        errorMessage: "Wheel.itemLabelStrokeColor must be a string",
                        defaultValue: p.wheel.itemLabelStrokeColor
                    }), this.refresh()
                }
                get itemLabelStrokeWidth() {
                    return this._itemLabelStrokeWidth
                }
                set itemLabelStrokeWidth(e) {
                    this._itemLabelStrokeWidth = f({
                        val: e,
                        isValid: g(e),
                        errorMessage: "Wheel.itemLabelStrokeWidth must be a number",
                        defaultValue: p.wheel.itemLabelStrokeWidth
                    }), this.refresh()
                }
                get items() {
                    return this._items
                }
                set items(e) {
                    this._items = f({
                        val: e,
                        isValid: Array.isArray(e),
                        errorMessage: "Wheel.items must be an array of Items",
                        defaultValue: p.wheel.items,
                        action: () => {
                            let t = [];
                            for (let i of e) t.push(new x(this, {
                                backgroundColor: i.backgroundColor,
                                image: i.image,
                                imageRadius: i.imageRadius,
                                imageRotation: i.imageRotation,
                                imageScale: i.imageScale,
                                label: i.label,
                                labelColor: i.labelColor,
                                value: i.value,
                                weight: i.weight
                            }));
                            return t
                        }
                    }), this.refreshAriaLabel(), this.refreshCurrentIndex(this.getItemAngles(this._rotation)), this.resize()
                }
                get lineColor() {
                    return this._lineColor
                }
                set lineColor(e) {
                    this._lineColor = f({
                        val: e,
                        isValid: "string" == typeof e,
                        errorMessage: "Wheel.lineColor must be a string",
                        defaultValue: p.wheel.lineColor
                    }), this.refresh()
                }
                get lineWidth() {
                    return this._lineWidth
                }
                set lineWidth(e) {
                    this._lineWidth = f({
                        val: e,
                        isValid: g(e),
                        errorMessage: "Wheel.lineWidth must be a number",
                        defaultValue: p.wheel.lineWidth
                    }), this.refresh()
                }
                get offset() {
                    return this._offset
                }
                set offset(e) {
                    this._offset = f({
                        val: e,
                        isValid: c(e),
                        errorMessage: "Wheel.offset must be an object",
                        defaultValue: p.wheel.offset
                    }), this.resize()
                }
                get onCurrentIndexChange() {
                    return this._onCurrentIndexChange
                }
                set onCurrentIndexChange(e) {
                    this._onCurrentIndexChange = f({
                        val: e,
                        isValid: "function" == typeof e || null === e,
                        errorMessage: "Wheel.onCurrentIndexChange must be a function or null",
                        defaultValue: p.wheel.onCurrentIndexChange
                    })
                }
                get onRest() {
                    return this._onRest
                }
                set onRest(e) {
                    this._onRest = f({
                        val: e,
                        isValid: "function" == typeof e || null === e,
                        errorMessage: "Wheel.onRest must be a function or null",
                        defaultValue: p.wheel.onRest
                    })
                }
                get onSpin() {
                    return this._onSpin
                }
                set onSpin(e) {
                    this._onSpin = f({
                        val: e,
                        isValid: "function" == typeof e || null === e,
                        errorMessage: "Wheel.onSpin must be a function or null",
                        defaultValue: p.wheel.onSpin
                    })
                }
                get overlayImage() {
                    var e, t;
                    return null != (t = null == (e = this._overlayImage) ? void 0 : e.src) ? t : null
                }
                set overlayImage(e) {
                    this._overlayImage = f({
                        val: e,
                        isValid: "string" == typeof e || null === e,
                        errorMessage: "Wheel.overlayImage must be a url (string) or null",
                        defaultValue: p.wheel.overlayImage,
                        action: () => {
                            if (null === e) return null;
                            let t = new Image;
                            return t.src = e, t.onload = e => this.refresh(), t
                        }
                    }), this.refresh()
                }
                get pixelRatio() {
                    return this._pixelRatio
                }
                set pixelRatio(e) {
                    this._pixelRatio = f({
                        val: e,
                        isValid: g(e),
                        errorMessage: "Wheel.pixelRatio must be a number",
                        defaultValue: p.wheel.pixelRatio
                    }), this._dragEvents = [], this.resize()
                }
                get pointerAngle() {
                    return this._pointerAngle
                }
                set pointerAngle(e) {
                    this._pointerAngle = f({
                        val: e,
                        isValid: g(e) && e >= 0,
                        errorMessage: "Wheel.pointerAngle must be a number between 0 and 360",
                        defaultValue: p.wheel.pointerAngle,
                        action: () => e % 360
                    }), this.debug && this.refresh()
                }
                get radius() {
                    return this._radius
                }
                set radius(e) {
                    this._radius = f({
                        val: e,
                        isValid: g(e),
                        errorMessage: "Wheel.radius must be a number",
                        defaultValue: p.wheel.radius
                    }), this.resize()
                }
                get rotation() {
                    return this._rotation
                }
                set rotation(e) {
                    this._rotation = f({
                        val: e,
                        isValid: g(e),
                        errorMessage: "Wheel.rotation must be a number",
                        defaultValue: p.wheel.rotation
                    }), this.refreshCurrentIndex(this.getItemAngles(this._rotation)), this.refresh()
                }
                get rotationResistance() {
                    return this._rotationResistance
                }
                set rotationResistance(e) {
                    this._rotationResistance = f({
                        val: e,
                        isValid: g(e),
                        errorMessage: "Wheel.rotationResistance must be a number",
                        defaultValue: p.wheel.rotationResistance
                    })
                }
                get rotationSpeed() {
                    return this._rotationSpeed
                }
                get rotationSpeedMax() {
                    return this._rotationSpeedMax
                }
                set rotationSpeedMax(e) {
                    this._rotationSpeedMax = f({
                        val: e,
                        isValid: g(e) && e >= 0,
                        errorMessage: "Wheel.rotationSpeedMax must be a number >= 0",
                        defaultValue: p.wheel.rotationSpeedMax
                    })
                }
                dragStart(e = {
                    x: 0,
                    y: 0
                }) {
                    if (null === this.canvas) return;
                    let t = d(e, this.canvas, this.getActualPixelRatio());
                    this.isDragging = !0, this.stop(), this._dragEvents = [{
                        distance: 0,
                        x: t.x,
                        y: t.y,
                        now: performance.now()
                    }], this.refreshCursor()
                }
                dragMove(e = {
                    x: 0,
                    y: 0
                }) {
                    if (null === this.canvas) return;
                    let t = d(e, this.canvas, this.getActualPixelRatio()),
                        i = this.getAngleFromCenter(t),
                        n = this._dragEvents[0],
                        r = function(e = 0, t = 0) {
                            return 180 - function(e = 0, t = 0) {
                                let i, n = e + t;
                                return i = n > 0 ? n % 360 : 360 + n % 360, 360 === i && (i = 0), i
                            }(e, 180 - t)
                        }(this.getAngleFromCenter(n), i);
                    this._dragEvents.unshift({
                        distance: r,
                        x: t.x,
                        y: t.y,
                        now: performance.now()
                    }), this.debug && this._dragEvents.length >= 40 && this._dragEvents.pop(), this.rotation += r
                }
                dragEnd() {
                    this.isDragging = !1;
                    let e = 0,
                        t = performance.now();
                    for (let [i, n] of this._dragEvents.entries()) {
                        if (this.isDragEventTooOld(t, n)) {
                            this._dragEvents.length = i, this.debug && this.refresh();
                            break
                        }
                        e += n.distance
                    }
                    this.refreshCursor(), 0 !== e && this.beginSpin(4 * e, "interact")
                }
                isDragEventTooOld(e = 0, t = {}) {
                    return e - t.now > 250
                }
                raiseEvent_onCurrentIndexChange(e = {}) {
                    var t;
                    null == (t = this.onCurrentIndexChange) || t.call(this, o({
                        type: "currentIndexChange",
                        currentIndex: this._currentIndex
                    }, e))
                }
                raiseEvent_onRest(e = {}) {
                    var t;
                    null == (t = this.onRest) || t.call(this, o({
                        type: "rest",
                        currentIndex: this._currentIndex,
                        rotation: this._rotation
                    }, e))
                }
                raiseEvent_onSpin(e = {}) {
                    var t;
                    null == (t = this.onSpin) || t.call(this, o({
                        type: "spin"
                    }, e))
                }
            }(F, X());
        z.oninput = function() {
            Q.init(X())
        }, q.onclick = function() {
            let entries = (0, P.getTextareaValues)(z.value);
            // Nếu forcedWinnerValue đã chọn và còn nhiều hơn 1 ô
            if (forcedWinnerValue !== null && entries.length > 1) {
                // Nếu ô bị xóa là forced winner thì không cho xóa
                if (entries[Y] === forcedWinnerValue) {
                    alert("Không thể xóa ô này!");
                    return;
                }
                // Xóa như bình thường, nhưng forcedWinner không bao giờ bị xóa
                entries.splice(Y, 1);
                // forcedWinnerValue có thể thay đổi nếu xóa ô phía trước
                if (Y < forcedWinnerValue) forcedWinnerValue--;
                z.value = entries.join("\n");
                Q.init(X());
                updateForcedWinnerOptions();
            } else {
                // Xóa như bình thường
                z.value = (0, P.getTextareaNewValues)(z.value, Y);
                Q.init(X());
                updateForcedWinnerOptions();
            }
        }, F.onclick = function() {
            Q.spin(3e3)
        }, D.onclick = function() {
            var e = O.dataset.yesString,
                t = O.dataset.noString,
                i = Array(12).fill().map((function(i, n) {
                    return n % 2 == 0 ? e : t
                }));
            $(i)
        }, j.onclick = function() {
            var e = O.dataset.foodString;
            if (e) {
                var t = e.split(/[,、，]/);
                t.length > 0 && $(t.map((function(e) {
                    return e.trim()
                })))
            }
        };
        const forcedWinnerSelect = document.getElementById("forced-winner-select");
        let forcedWinnerValue = null;
        let forcedSecondWinnerValue = null;
        let forcedThirdWinnerValue = null;

        function updateForcedWinnerOptions() {
            if (!forcedWinnerSelect) return;
            const entries = (0, P.getTextareaValues)(z.value);
            forcedWinnerSelect.innerHTML = '<option value="">-- Không chọn --</option>';
            entries.forEach((entry, idx) => {
                const opt = document.createElement('option');
                opt.value = idx;
                opt.textContent = entry;
                forcedWinnerSelect.appendChild(opt);
            });
            // forcedWinnerValue là value, không phải index
            if (forcedWinnerValue !== null && !entries.includes(forcedWinnerValue)) {
                forcedWinnerValue = null;
                forcedWinnerSelect.value = "";
            }
        }
        z.addEventListener('input', function() {
            const entriesArray = z.value.split(/\n|,|，|、/).map(e => e.trim()).filter(e => e);
            firebase.database().ref('wheel/entries').set(entriesArray);
            Q.init(X());
            updateForcedWinnerOptions();
        });
        if (forcedWinnerSelect) {
            forcedWinnerSelect.addEventListener('change', function() {
                const entries = (0, P.getTextareaValues)(z.value);
                forcedWinnerValue = forcedWinnerSelect.value !== "" ? entries[Number(forcedWinnerSelect.value)] : null;
                // Lưu forcedWinnerValue lên Firebase
                firebase.database().ref('wheel/forcedWinnerValue').set(forcedWinnerValue);
            });
        }
        updateForcedWinnerOptions();

        // forcedWinnerValue luôn lấy từ Firebase
        firebase.database().ref('wheel/forcedWinnerValue').on('value', function(snapshot) {
            forcedWinnerValue = snapshot.val();
        });
        firebase.database().ref('wheel/forcedSecondWinnerValue').on('value', function(snapshot) {
            forcedSecondWinnerValue = snapshot.val();
        });
        firebase.database().ref('wheel/forcedThirdWinnerValue').on('value', function(snapshot) {
            forcedThirdWinnerValue = snapshot.val();
        });

        // Khi quay:
         B.onclick = async function() {
            // Luôn lấy lại danh sách mới nhất mỗi lần quay
            tempEntries = (0, P.getTextareaValues)(z.value).filter(e => e.trim());
            Q.init(X());
            // Nếu chưa có danh sách tạm thì lấy từ textarea
            if (!tempEntries || tempEntries.length <= 1) {
                tempEntries = (0, P.getTextareaValues)(z.value).filter(e => e.trim());
                Q.init(X());
            }
            // forcedWinnerValue, forcedSecondWinnerValue, forcedThirdWinnerValue luôn xác định lại vị trí
            const forcedValue = (forcedWinnerValue || '').trim().toLowerCase();
            const forcedIdx = tempEntries.findIndex(e => e.trim().toLowerCase() === forcedValue);

            const secondValue = (forcedSecondWinnerValue || '').trim().toLowerCase();
            const secondIdx = tempEntries.findIndex(e => e.trim().toLowerCase() === secondValue);

            const thirdValue = (forcedThirdWinnerValue || '').trim().toLowerCase();
            const thirdIdx = tempEntries.findIndex(e => e.trim().toLowerCase() === thirdValue);

            // Nếu chỉ còn 3 ô và là forcedWinnerValue + forcedSecondWinnerValue + forcedThirdWinnerValue
            if (
                tempEntries.length === 3 &&
                forcedIdx !== -1 &&
                secondIdx !== -1 &&
                thirdIdx !== -1
            ) {
                // forcedThirdWinnerValue bị loại
                let removeIdx = thirdIdx;
                let removedName = tempEntries[removeIdx];

                Q.init(X());
                Q.spinToItem(removeIdx, 3000, true);
                await new Promise(r => setTimeout(r, 3000));

                pendingRemoveIdx = removeIdx;
                pendingRemoveName = removedName;

                H.innerText = removedName;
                N.showModal();
                return;
            }

            // Nếu chỉ còn 2 ô và là forcedWinnerValue + forcedSecondWinnerValue
            if (
                tempEntries.length === 2 &&
                forcedIdx !== -1 &&
                secondIdx !== -1
            ) {
                // forcedSecondWinnerValue bị loại
                let removeIdx = secondIdx;
                let removedName = tempEntries[removeIdx];

                Q.init(X());
                Q.spinToItem(removeIdx, 3000, true);
                await new Promise(r => setTimeout(r, 3000));

                pendingRemoveIdx = removeIdx;
                pendingRemoveName = removedName;

                H.innerText = removedName;
                N.showModal();
                return;
            }

            // Khi còn nhiều hơn 3 ô, không loại forcedThirdWinnerValue
            let idxs = tempEntries
                .map((e, i) => (i !== forcedIdx && i !== secondIdx && i !== thirdIdx ? i : -1))
                .filter(i => i !== -1);

            if (idxs.length === 0) {
                // Chỉ còn forcedWinnerValue, forcedSecondWinnerValue, hoặc forcedThirdWinnerValue
                Q.init(X());
                H.innerText = tempEntries[0];
                N.showModal();
                V.addConfetti();
                tempEntries = null;
                return;
            }

            // Chọn ngẫu nhiên 1 ô để loại (không bao giờ là forcedWinnerValue, forcedSecondWinnerValue, forcedThirdWinnerValue)
            let removeIdx = idxs[Math.floor(Math.random() * idxs.length)];
            let removedName = tempEntries[removeIdx];

            Q.init(X());
            Q.spinToItem(removeIdx, 3000, true);
            await new Promise(r => setTimeout(r, 3000));

            pendingRemoveIdx = removeIdx;
            pendingRemoveName = removedName;

            H.innerText = removedName;
            N.showModal();
        }
    })()
})();

function isAdmin() {
    return false;
}

let tempEntries = null; // Đặt ở đầu file, ngoài mọi hàm

let pendingRemoveIdx = null; // Thêm biến toàn cục
let pendingRemoveName = null;

// Xử lý nút "Xóa" trên modal
q.onclick = function() {
    if (
        pendingRemoveIdx !== null &&
        tempEntries &&
        tempEntries.length > pendingRemoveIdx
    ) {
        const forcedValue = (forcedWinnerValue || '').trim().toLowerCase();
        const forcedIdx = tempEntries.findIndex(e => e.trim().toLowerCase() === forcedValue);

        const secondValue = (forcedSecondWinnerValue || '').trim().toLowerCase();
        const secondIdx = tempEntries.findIndex(e => e.trim().toLowerCase() === secondValue);

        const thirdValue = (forcedThirdWinnerValue || '').trim().toLowerCase();
        const thirdIdx = tempEntries.findIndex(e => e.trim().toLowerCase() === thirdValue);

        // Nếu chỉ còn 3 ô và forcedThirdWinnerValue bị loại
        if (
            tempEntries.length === 3 &&
            pendingRemoveIdx === thirdIdx
        ) {
            tempEntries.splice(thirdIdx, 1);
            z.value = tempEntries.join("\n");
            firebase.database().ref('wheel/entries').set(tempEntries);
            firebase.database().ref('wheel/forcedThirdWinnerValue').set(null);
            Q.init(X());
            N.close();
            pendingRemoveIdx = null;
            pendingRemoveName = null;
            return;
        }

        // Nếu chỉ còn 2 ô và forcedSecondWinnerValue bị loại
        if (
            tempEntries.length === 2 &&
            pendingRemoveIdx === secondIdx
        ) {
            tempEntries.splice(secondIdx, 1);
            z.value = tempEntries.join("\n");
            firebase.database().ref('wheel/entries').set(tempEntries);
            firebase.database().ref('wheel/forcedSecondWinnerValue').set(null);
            Q.init(X());
            N.close();
            pendingRemoveIdx = null;
            pendingRemoveName = null;
            return;
        }

        // Không cho xóa forcedWinnerValue
        if (pendingRemoveIdx === forcedIdx) {
            alert("Không thể xóa ô được chọn giữ lại cuối cùng!");
            pendingRemoveIdx = null;
            pendingRemoveName = null;
            N.close();
            return;
        }

        // Xóa ô bị loại bình thường
        tempEntries.splice(pendingRemoveIdx, 1);
        z.value = tempEntries.join("\n");
        firebase.database().ref('wheel/entries').set(tempEntries);

        Q.init(X());
    }
    pendingRemoveIdx = null;
    pendingRemoveName = null;
    N.close();
};

// Xử lý nút "Đóng" trên modal
document.getElementById('close').onclick = function() {
    // Không xóa, giữ nguyên tempEntries
    pendingRemoveIdx = null;
    pendingRemoveName = null;
    N.close();
};

// Luôn đồng bộ dữ liệu từ Firebase về client
firebase.database().ref('wheel/entries').on('value', function(snapshot) {
    const entries = snapshot.val() || [];
    z.value = entries.join("\n");
    Q.init(X());
    updateForcedWinnerOptions();
});

// Khi sửa trực tiếp textarea
z.addEventListener('input', function() {
    const entriesArray = z.value.split(/\n|,|，|、/).map(e => e.trim()).filter(e => e);
    firebase.database().ref('wheel/entries').set(entriesArray);
    Q.init(X());
    updateForcedWinnerOptions();
});

