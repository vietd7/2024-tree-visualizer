(this["webpackJsonptree-visualizer"] = this["webpackJsonptree-visualizer"] || []).push([
    [0], {
        122: function (e, t, a) {
            e.exports = a.p + "static/media/addNode.ec158f9f.mp4"
        },
        123: function (e, t, a) {
            e.exports = a.p + "static/media/deleteNode.49098f7f.mp4"
        },
        124: function (e, t, a) {
            e.exports = a.p + "static/media/deleteTree.decb90bd.mp4"
        },
        125: function (e, t, a) {
            e.exports = a.p + "static/media/editNode.e24912de.mp4"
        },
        126: function (e, t, a) {
            e.exports = a.p + "static/media/copyTree.3a8d1203.mp4"
        },
        127: function (e, t, a) {
            e.exports = a.p + "static/media/traversalAlgorithms.bd1941cf.mp4"
        },
        128: function (e, t, a) {
            e.exports = a.p + "static/media/visualizingAlgorithms.1883da2f.mp4"
        },
        138: function (e, t, a) {
            e.exports = a(235)
        },
        143: function (e, t, a) { },
        144: function (e, t, a) { },
        145: function (e, t, a) { },
        146: function (e, t, a) { },
        178: function (e, t, a) { },
        187: function (e, t, a) { },
        191: function (e, t, a) { },
        192: function (e, t, a) { },
        235: function (e, t, a) {
            "use strict";
            a.r(t);
            var n, l, r = a(0),
                o = a.n(r),
                i = a(9),
                c = a.n(i),
                d = (a(143), a(40)),
                s = a(28);
            ! function (e) {
                e.UpdatePlayground = "UPDATE_PLAYGROUND"
            }(n || (n = {})),
                function (e) {
                    e.Home = "HomeView", e.NodeUpdate = "NodeUpdateView", e.Visualization = "VisualizationView"
                }(l || (l = {}));
            var u, m, h, p, v, f = {
                playgroundView: l.Home
            },
                g = function (e) {
                    return {
                        type: n.UpdatePlayground,
                        payload: e
                    }
                },
                E = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case n.UpdatePlayground:
                            return Object(d.a)({}, e, {}, t.payload);
                        default:
                            return e
                    }
                },
                y = a(17);
            ! function (e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(u || (u = {})),
                function (e) {
                    e.Regular = "regular", e.Plus = "plus"
                }(m || (m = {})),
                function (e) {
                    e.Visible = "visible", e.Hidden = "hidden"
                }(h || (h = {})),
                function (e) {
                    e.Shown = "+", e.Hidden = ""
                }(p || (p = {})),
                function (e) {
                    e.FetchTree = "FETCH_TREE", e.UpdateTree = "UPDATE_TREE", e.DeleteTree = "DELETE_TREE"
                }(v || (v = {}));
            var b, N = {
                shape: "circle",
                shapeProps: {
                    r: 30,
                    fill: "#FFFFFF"
                }
            },
                w = {
                    shape: "circle",
                    shapeProps: {
                        r: 20,
                        strokeWidth: 1,
                        fill: "#FFFFFF",
                        visibility: h.Visible
                    }
                },
                O = {
                    shape: "circle",
                    shapeProps: {
                        r: 20,
                        strokeWidth: 1,
                        fill: "#FFFFFF",
                        visibility: h.Hidden
                    }
                },
                k = {
                    shape: "circle",
                    shapeProps: {
                        r: 30,
                        stroke: "#003a8c",
                        strokeWidth: 10,
                        fill: "#FFFFFF",
                        visibility: h.Visible
                    }
                },
                P = {
                    name: "0",
                    location: "",
                    type: m.Regular,
                    nodeSvgShape: Object(y.a)(N)
                };
            ! function (e) {
                e[e.AddNewNode = 0] = "AddNewNode", e[e.ShowPlusNodes = 1] = "ShowPlusNodes", e[e.HidePlusNodes = 2] = "HidePlusNodes"
            }(b || (b = {}));
            var j, S, C, F, V, x = function (e) {
                return !!e.children && 2 === e.children.length && e.children[0].type === m.Plus && e.children[1].type === m.Regular
            },
                I = function (e) {
                    return !!e.children && 2 === e.children.length && e.children[0].type === m.Regular && e.children[1].type === m.Plus
                },
                z = function (e) {
                    return (!e.children || 0 === e.children.length) && e.type === m.Regular
                },
                T = function (e) {
                    return e.type === m.Plus ? b.AddNewNode : z(e) || function (e) {
                        return !!e.children && 2 === e.children.length && (e.children[0].type === m.Plus && e.children[0].name === p.Hidden || e.children[1].type === m.Plus && e.children[1].name === p.Hidden)
                    }(e) ? b.ShowPlusNodes : b.HidePlusNodes
                },
                R = function (e) {
                    if (void 0 === e) return 0;
                    // var t = parseInt(e, 10);
                    var t = e.replace(/[^0-9.]/g, '');;
                    // console.log("eeee",e);
                    // if (Number.isNaN(t)) throw new Error("[Utils] Invalid value passed to `toNumber`.");
                    return t
                },
                A = function (e, t) {
                    var a = e;
                    return t.split("").forEach((function (e) {
                        a.children && (a = a.children[R(e)])
                    })), a
                },
                L = function (e) {
                    e.nodeSvgShape = Object(y.a)(k)
                },
                H = function (e) {
                    e.nodeSvgShape = Object(y.a)(N)
                },
                D = function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return {
                        name: t ? p.Shown : p.Hidden,
                        location: e,
                        type: m.Plus,
                        nodeSvgShape: t ? Object(y.a)(w) : Object(y.a)(O)
                    }
                },
                U = function (e) {
                    H(e), e.children && (! function (e) {
                        return !!e.children && 2 === e.children.length && e.children[0].type === m.Plus && e.children[1].type === m.Plus
                    }(e) ? x(e) ? (e.children[0].name = p.Hidden, e.children[0].nodeSvgShape = Object(y.a)(O)) : I(e) && (e.children[1].name = p.Hidden, e.children[1].nodeSvgShape = Object(y.a)(O)) : delete e.children)
                },
                M = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return {
                        name: e.toString(),
                        location: t,
                        type: m.Regular,
                        nodeSvgShape: Object(y.a)(N)
                    }
                },
                W = function (e, t) {
                    if (void 0 !== t) {
                        var a = A(e, t);
                        U(a)
                    }
                },
                B = a(96),
                J = function (e) {
                    for (var t = Object(B.a)(e), a = t.length - 1; a >= 0;) {
                        null === t[Math.floor((a - 1) / 2)] && t.splice(a, 1), a -= 1
                    }
                    return t
                },
                _ = function (e) {
                    for (var t = [], a = 0, n = [
                        [e, 0]
                    ]; n.length;) {
                        for (var l = 1 << a, r = n.length, o = 0, i = -1; r > 0;) {
                            var c = n.shift();
                            if (!c) break;
                            var d = Object(s.a)(c, 2),
                                h = d[0],
                                p = d[1]; - 1 === i && 0 !== p ? t = t.concat(Array(p).fill(null)) : i !== p - 1 && i !== p && (t = t.concat(Array(p - i - 1).fill(null))), t.push(R(h.name)), o = p + 1, r -= 1, i = p, h.children && (h.children[u.Left].type === m.Regular && n.push([h.children[u.Left], 2 * p]), h.children[u.Right].type === m.Regular && n.push([h.children[u.Right], 2 * p + 1]))
                        }
                        o !== l && (t = t.concat(Array(l - o).fill(null))), a += 1
                    }
                    return function (e) {
                        for (var t = Object(B.a)(e), a = t.length - 1; a >= 0 && null === t[a];) t.pop(), a -= 1;
                        return t
                    }(t)
                },
                Y = function (e) {
                    var t = JSON.parse(null !== e && void 0 !== e ? e : "[]");
                    if (! function (e) {
                        return Array.isArray(e) && e.length > 0 && null !== e[0]
                    }(t)) return Object(y.a)(P);
                    for (var a = M(t[0].toString()), n = [
                        [a, 0]
                    ]; n.length;) {
                        var l = n.shift();
                        if (l) {
                            var r = Object(s.a)(l, 2),
                                o = r[0],
                                i = r[1],
                                c = 2 * i + 1,
                                d = 2 * i + 2;
                            o.type === m.Plus || c >= t.length && d >= t.length || null === t[c] && null === t[d] || (o.children = [c < t.length && null !== t[c] ? M(t[c].toString(), o.location + u.Left) : D(o.location + u.Left, !1), d < t.length && null !== t[d] ? M(t[d].toString(), o.location + u.Right) : D(o.location + u.Right, !1)], n.push([o.children[u.Left], c]), n.push([o.children[u.Right], d]))
                        }
                    }
                    return a
                },
                $ = function (e) {
                    var t = _(e);
                    return [JSON.stringify(t), JSON.stringify(J(t))]
                },
                G = function (e) {
                    if (null === e) return 0;
                    try {
                        return R(e)
                    } catch (t) {
                        return 0
                    }
                },
                Z = "tree-visualization-data",
                q = {
                    data: Object(y.a)(P),
                    selectedNode: null,
                    nodeCounter: 0
                },
                K = function (e) {
                    return {
                        type: v.UpdateTree,
                        payload: e
                    }
                },
                Q = function () {
                    return {
                        type: v.DeleteTree
                    }
                },
                X = function (e) {
                    var t = $(e);
                    ! function (e) {
                        var t = document.createElement("input");
                        document.body.appendChild(t), t.setAttribute("value", e), t.select(), document.execCommand("copy"), document.body.removeChild(t)
                    }(Object(s.a)(t, 2)[1])
                },
                ee = function (e, t) {
                    var a = $(e),
                        n = Object(s.a)(a, 1)[0],
                        l = function (e) {
                            return JSON.stringify(e)
                        }(t);
                    localStorage.setItem(Z, n), localStorage.setItem("tree-node-counter", l)
                },
                te = function () {
                    localStorage.removeItem(Z), localStorage.removeItem("tree-node-counter")
                },
                ae = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case v.FetchTree:
                            return Object(d.a)({}, e, {
                                data: Y(localStorage.getItem(Z)),
                                nodeCounter: G(localStorage.getItem("tree-node-counter"))
                            });
                        case v.UpdateTree:
                            return Object(d.a)({}, e, {}, t.payload);
                        case v.DeleteTree:
                            return te(), q;
                        default:
                            return e
                    }
                };
            ! function (e) {
                e.Explore = "explore", e.Process = "process"
            }(j || (j = {})),
                function (e) {
                    e.LevelOrder = "bfs", e.PreOrder = "preorder", e.InOrder = "inorder", e.PostOrder = "postorder", e.Default = "bfs"
                }(S || (S = {})),
                function (e) {
                    e.Fast = "fast", e.Average = "average", e.Slow = "slow", e.Default = "average"
                }(C || (C = {})),
                function (e) {
                    e.Idle = "idle", e.Running = "running", e.Paused = "paused", e.Default = "idle"
                }(F || (F = {})),
                function (e) {
                    e.UpdateVisualization = "UPDATE_VISUALIZATION"
                }(V || (V = {}));
            var ne, le, re, oe = {
                algorithm: S.Default,
                speed: C.Default,
                status: F.Default,
                traversalPath: [],
                traversalPathIndex: 0
            },
                ie = function (e) {
                    return {
                        type: V.UpdateVisualization,
                        payload: e
                    }
                },
                ce = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case V.UpdateVisualization:
                            return Object(d.a)({}, e, {}, t.payload);
                        default:
                            return e
                    }
                },
                de = {
                    playground: f,
                    tree: q,
                    visualization: oe
                },
                se = o.a.createContext({
                    state: de,
                    dispatch: function () {
                        return null
                    }
                }),
                ue = a(35),
                me = function (e) {
                    return function (t, a) {
                        return Object.keys(e).reduce((function (t, n) {
                            return Object(d.a)({}, t, Object(ue.a)({}, n, e[n](t[n], a)))
                        }), t)
                    }
                }({
                    playground: E,
                    tree: ae,
                    visualization: ce
                }),
                he = (a(144), a(145), function (e, t) {
                    switch (t) {
                        case S.LevelOrder:
                            return function (e) {
                                for (var t = [], a = [e]; a.length;) {
                                    var n = a.shift();
                                    n && (t.push({
                                        location: n.location,
                                        action: j.Explore
                                    }), t.push({
                                        location: n.location,
                                        action: j.Process
                                    }), n.children && n.children.forEach((function (e) {
                                        e.type === m.Regular && a.push(e)
                                    })))
                                }
                                return t
                            }(e);
                        case S.PreOrder:
                            return function (e) {
                                for (var t = [], a = [e]; a.length;) {
                                    var n = a.pop();
                                    n && (t.push({
                                        location: n.location,
                                        action: j.Explore
                                    }), t.push({
                                        location: n.location,
                                        action: j.Process
                                    }), n.children && n.children.slice().reverse().forEach((function (e) {
                                        e.type === m.Regular && a.push(e)
                                    })))
                                }
                                return t
                            }(e);
                        case S.InOrder:
                            return function (e) {
                                for (var t = [], a = [], n = e; a.length || n;) {
                                    for (; n && n.type === m.Regular;) {
                                        if (a.push(n), t.push({
                                            location: n.location,
                                            action: j.Explore
                                        }), n.children && n.children[0]) n = Object(s.a)(n.children, 1)[0];
                                        else n = null
                                    }
                                    if (n = a.pop())
                                        if (t.push({
                                            location: n.location,
                                            action: j.Process
                                        }), n.children && n.children[1]) n = Object(s.a)(n.children, 2)[1];
                                        else n = null
                                }
                                return t
                            }(e);
                        case S.PostOrder:
                            return function (e) {
                                for (var t = [], a = [
                                    [e, !1]
                                ]; a.length;) {
                                    var n = a.pop();
                                    if (n) {
                                        var l = Object(s.a)(n, 2),
                                            r = l[0];
                                        if (l[1]) t.push({
                                            location: r.location,
                                            action: j.Process
                                        });
                                        else {
                                            if (t.push({
                                                location: r.location,
                                                action: j.Explore
                                            }), a.push([r, !0]), !r.children) continue;
                                            r.children.slice().reverse().forEach((function (e) {
                                                e.type === m.Regular && a.push([e, !1])
                                            }))
                                        }
                                    }
                                }
                                return t
                            }(e);
                        default:
                            throw new Error("[VisualizationHelper] Invalid `VisualizationAlgorithms` type.")
                    }
                }),
                pe = (ne = {}, Object(ue.a)(ne, S.LevelOrder, "Level-Order"), Object(ue.a)(ne, S.PreOrder, "Pre-Order"), Object(ue.a)(ne, S.InOrder, "In-Order"), Object(ue.a)(ne, S.PostOrder, "Post-Order"), ne),
                ve = (le = {}, Object(ue.a)(le, C.Fast, "Fast"), Object(ue.a)(le, C.Average, "Average"), Object(ue.a)(le, C.Slow, "Slow"), le),
                fe = (re = {}, Object(ue.a)(re, C.Fast, 250), Object(ue.a)(re, C.Average, 550), Object(ue.a)(re, C.Slow, 800), re),
                ge = {
                    shape: "circle",
                    shapeProps: {
                        r: 30,
                        stroke: "#096dd9",
                        strokeWidth: 10,
                        fill: "#FFFFFF"
                    }
                },
                Ee = {
                    shape: "circle",
                    shapeProps: {
                        r: 30,
                        stroke: "#389e0d",
                        strokeWidth: 10,
                        fill: "#FFFFFF"
                    }
                },
                ye = function (e) {
                    for (var t = [e]; t.length;) {
                        var a = t.shift();
                        a && (H(a), a.children && a.children.forEach((function (e) {
                            e.type === m.Regular && t.push(e)
                        })))
                    }
                },
                be = function (e) {
                    var t = e.status,
                        a = e.traversalPath,
                        n = e.traversalPathIndex;
                    return t === F.Running && 0 !== a.length && n >= 0 && n < a.length
                },
                Ne = a(258),
                we = a(246),
                Oe = a(236),
                ke = a(243),
                Pe = a(244),
                je = a(245),
                Se = a(239),
                Ce = a(240),
                Fe = a(39),
                Ve = (a(146), function (e) {
                    var t = e.speedMenu,
                        a = e.visualizationMenu,
                        n = Object(r.useContext)(se),
                        i = n.state,
                        c = n.dispatch,
                        d = i.tree.data,
                        s = i.visualization,
                        u = s.algorithm,
                        m = s.speed,
                        h = function () {
                            c(Q())
                        },
                        p = function () {
                            X(d), Se.a.success({
                                message: "Successfully Copied!",
                                description: "The LeetCode array version of the tree has been copied to your clipboard.",
                                duration: 5,
                                placement: "bottomLeft"
                            })
                        },
                        v = function () {
                            c(g({
                                playgroundView: l.Visualization
                            })), c(ie({
                                status: F.Running,
                                traversalPath: he(d, u),
                                traversalPathIndex: 0
                            }))
                        };
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: "homeview desktop"
                    }, o.a.createElement("div", {
                        className: "homeview-left"
                    }, o.a.createElement(Ce.a.Button, {
                        className: "homeview-left-item",
                        overlay: a,
                        type: "primary",
                        onClick: v
                    }, "Visualize ".concat(pe[u])), o.a.createElement(Ce.a, {
                        className: "homeview-left-item",
                        overlay: t
                    }, o.a.createElement(Fe.a, {
                        type: "primary"
                    }, "Speed: ".concat(ve[m]), " ", o.a.createElement(ke.a, null)))), o.a.createElement("div", {
                        className: "homeview-right"
                    }, o.a.createElement(Fe.a, {
                        className: "homeview-right-item",
                        icon: o.a.createElement(Pe.a, null),
                        shape: "circle",
                        size: "large",
                        type: "primary",
                        onClick: p
                    }), o.a.createElement(Fe.a, {
                        className: "homeview-right-item danger",
                        icon: o.a.createElement(je.a, null),
                        shape: "circle",
                        size: "large",
                        type: "primary",
                        onClick: h
                    }))), o.a.createElement("div", {
                        className: "homeview mobile"
                    }, o.a.createElement("div", {
                        className: "homeview-left"
                    }, o.a.createElement(Ce.a.Button, {
                        className: "homeview-left-item",
                        overlay: a,
                        type: "primary",
                        onClick: v
                    }, pe[u])), o.a.createElement("div", {
                        className: "homeview-right"
                    }, o.a.createElement(Fe.a, {
                        className: "homeview-right-item",
                        icon: o.a.createElement(Pe.a, null),
                        shape: "circle",
                        size: "middle",
                        type: "primary",
                        onClick: p
                    }), o.a.createElement(Fe.a, {
                        className: "homeview-right-item danger",
                        icon: o.a.createElement(je.a, null),
                        shape: "circle",
                        size: "middle",
                        type: "primary",
                        onClick: h
                    }))))
                }),
                xe = a(238),
                Ie = (a(178), function () {
                    var e, t = Object(r.useContext)(se),
                        a = t.state,
                        n = t.dispatch,
                        i = a.tree,
                        c = i.data,
                        d = i.selectedNode,
                        u = Object(r.useState)(null !== (e = null === d || void 0 === d ? void 0 : d.name) && void 0 !== e ? e : ""),
                        m = Object(s.a)(u, 2),
                        h = m[0],
                        p = m[1];
                    Object(r.useEffect)((function () {
                        var e;
                        p(null !== (e = null === d || void 0 === d ? void 0 : d.name) && void 0 !== e ? e : "")
                    }), [d]);
                    var v = function (e) {
                        // return !Number.isNaN(+e) && /^([1-9]+\d*|0)$/.test(e) || "" === e
                        return true
                    },
                        f = function (e) {
                            var t = e.target.value;
                            p(e.target.value)
                        },
                        E = function () {
                            if (d) {
                                var e = Object(y.a)(c);
                                A(e, d.location).name = h.toString(), n(K({
                                    data: e
                                }))
                            }
                        },
                        b = function (e) {
                            var t = e.target.value;
                            v(t) && E()
                        },
                        N = function () {
                            if (d) {
                                if ("" === d.location) return n(g({
                                    playgroundView: l.Home
                                })), void n(Q());
                                var e = d.location.slice(0, -1),
                                    t = R(d.location.slice(-1)),
                                    a = Object(y.a)(c),
                                    r = A(a, e);
                                r.children && (r.children[t] = D(e + t), W(a, e), n(g({
                                    playgroundView: l.Home
                                })), n(K({
                                    data: a,
                                    selectedNode: null
                                })))
                            }
                        };
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: "nodeupdateview desktop"
                    }, o.a.createElement("div", {
                        className: "nodeupdateview-left"
                    }, o.a.createElement(xe.a, {
                        className: "nodeupdateview-left-input",
                        addonBefore: o.a.createElement(we.a, null),
                        bordered: !0,
                        maxLength: 20,
                        placeholder: "Node Value",
                        value: h,
                        id: "myInput",
                        onChange: f,
                        onPressEnter: E
                    }), o.a.createElement(Fe.a, {
                        className: "nodeupdateview-left-compressed-item",
                        type: "primary",
                        disabled: "" === h,
                        onClick: E
                    }, "Edit Node"), o.a.createElement(Fe.a, {
                        className: "nodeupdateview-left-compressed-item danger",
                        type: "primary",
                        onClick: N
                    }, "Delete Node")), o.a.createElement("div", {
                        className: "nodeupdateview-right"
                    }, o.a.createElement(Fe.a, {
                        className: "nodeupdateview-right-item",
                        type: "primary",
                        onClick: function () {
                            var e = Object(y.a)(c);
                            W(e, null === d || void 0 === d ? void 0 : d.location), n(g({
                                playgroundView: l.Home
                            })), n(K({
                                data: e,
                                selectedNode: null
                            }))
                        }
                    }, "Cancel"))), o.a.createElement("div", {
                        className: "nodeupdateview mobile"
                    }, o.a.createElement("div", {
                        className: "nodeupdateview-left"
                    }, o.a.createElement(xe.a, {
                        className: "nodeupdateview-left-input",
                        addonBefore: o.a.createElement(we.a, null),
                        bordered: !0,
                        maxLength: 9,
                        placeholder: "Node Value",
                        value: h,
                        onChange: f,
                        onPressEnter: b
                    }), o.a.createElement(Fe.a, {
                        className: "nodeupdateview-left-compressed-item",
                        type: "primary",
                        disabled: "" === h,
                        onClick: E
                    }, "Edit"), o.a.createElement(Fe.a, {
                        className: "nodeupdateview-left-compressed-item danger",
                        type: "primary",
                        onClick: N
                    }, "Delete"))))
                }),
                ze = a(247),
                Te = a(237),
                Re = a(122),
                Ae = a.n(Re),
                Le = a(123),
                He = a.n(Le),
                De = a(124),
                Ue = a.n(De),
                Me = a(125),
                We = a.n(Me),
                Be = a(126),
                Je = a.n(Be),
                _e = a(127),
                Ye = a.n(_e),
                $e = a(128),
                Ge = a.n($e),
                Ze = (a(187), [{
                    title: "Add a new Node",
                    content: o.a.createElement("div", {
                        className: "tutorial-content"
                    }, o.a.createElement("ol", null, o.a.createElement("li", null, "Click on a leaf node or a node with incomplete children."), o.a.createElement("li", null, "Click on the ", o.a.createElement("strong", null, '"+"'), " node under the selected node."), o.a.createElement("li", null, "Voila! A new node has been created.")), o.a.createElement("div", {
                        className: "tutorial-content-video"
                    }, o.a.createElement("div", {
                        className: "tutorial-content-video-background"
                    }), o.a.createElement("video", {
                        key: "add-node",
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        height: 273
                    }, o.a.createElement("source", {
                        src: Ae.a,
                        type: "video/mp4"
                    }))))
                }, {
                    title: "Edit a Node Value",
                    content: o.a.createElement("div", {
                        className: "tutorial-content"
                    }, o.a.createElement("ol", null, o.a.createElement("li", null, "Click on the node you want to edit."), o.a.createElement("li", null, "Type a new number in the input on the top right corner of the screen."), o.a.createElement("li", null, "Click ", o.a.createElement("strong", null, '"Edit Node"'), " on the top left corner of the screen."), o.a.createElement("li", null, "Voila! The node value has been updated.")), o.a.createElement("div", {
                        className: "tutorial-content-video"
                    }, o.a.createElement("div", {
                        className: "tutorial-content-video-background"
                    }), o.a.createElement("video", {
                        key: "edit-node",
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        height: 273
                    }, o.a.createElement("source", {
                        src: We.a,
                        type: "video/mp4"
                    }))))
                }, {
                    title: "Delete a Node and its Children",
                    content: o.a.createElement("div", {
                        className: "tutorial-content"
                    }, o.a.createElement("ol", null, o.a.createElement("li", null, "Click on the node you want to delete."), o.a.createElement("li", null, "Click ", o.a.createElement("strong", null, '"Delete Node"'), "on the top left corner of the screen."), o.a.createElement("li", null, "Voila! The node and its descendants has been deleted.")), o.a.createElement("div", {
                        className: "tutorial-content-video"
                    }, o.a.createElement("div", {
                        className: "tutorial-content-video-background"
                    }), o.a.createElement("video", {
                        key: "delete-node",
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        height: 273
                    }, o.a.createElement("source", {
                        src: He.a,
                        type: "video/mp4"
                    }))))
                }, {
                    title: "Copy the Tree",
                    content: o.a.createElement("div", {
                        className: "tutorial-content"
                    }, o.a.createElement("ol", null, o.a.createElement("li", null, "Click the copy icon button on the top right corner of the screen."), o.a.createElement("li", null, "Voila! A LeetCode version of the tree has been copied to your clipboard. You can directly paste it on any of the LeetCode tree problems.")), o.a.createElement("div", {
                        className: "tutorial-content-video"
                    }, o.a.createElement("div", {
                        className: "tutorial-content-video-background"
                    }), o.a.createElement("video", {
                        key: "save-tree",
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        height: 273
                    }, o.a.createElement("source", {
                        src: Je.a,
                        type: "video/mp4"
                    }))))
                }, {
                    title: "Delete the Tree",
                    content: o.a.createElement("div", {
                        className: "tutorial-content"
                    }, o.a.createElement("ol", null, o.a.createElement("li", null, "Click the delete icon button on the top right corner of the screen."), o.a.createElement("li", null, "Voila! The tree has been destroyed and has been reset into a single root node."), o.a.createElement("li", null, "Note that you can achieve the same behavior when you delete the root node of your tree.")), o.a.createElement("div", {
                        className: "tutorial-content-video"
                    }, o.a.createElement("div", {
                        className: "tutorial-content-video-background"
                    }), o.a.createElement("video", {
                        key: "delete-tree",
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        height: 273
                    }, o.a.createElement("source", {
                        src: Ue.a,
                        type: "video/mp4"
                    }))))
                }, {
                    title: "Traversal Algorithms",
                    content: o.a.createElement("div", {
                        className: "tutorial-content"
                    }, o.a.createElement("ul", null, o.a.createElement("li", null, o.a.createElement("strong", null, "Level-order"), " - process nodes per depth from left to right"), o.a.createElement("li", null, o.a.createElement("strong", null, "Pre-order"), " - process node, traverse left subtree, traverse right subtree"), o.a.createElement("li", null, o.a.createElement("strong", null, "In-order"), " - traverse left subtree, process node, traverse right subtree"), o.a.createElement("li", null, o.a.createElement("strong", null, "Post-order"), " - traverse left subtree, traverse right subtree, process node")), o.a.createElement("div", {
                        className: "tutorial-content-video"
                    }, o.a.createElement("div", {
                        className: "tutorial-content-video-background"
                    }), o.a.createElement("video", {
                        key: "traversal-algorithms",
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        height: 273
                    }, o.a.createElement("source", {
                        src: Ye.a,
                        type: "video/mp4"
                    }))))
                }, {
                    title: "Visualizing the Algorithms",
                    content: o.a.createElement("div", {
                        className: "tutorial-content"
                    }, o.a.createElement("ol", null, o.a.createElement("li", null, "Select the traversal algorithm and the algorithm speed via the dropdowns on the top left corner of the screen."), o.a.createElement("li", null, "To start the animation, simply click on the", " ", o.a.createElement("strong", null, '"Visualize ..."'), " button."), o.a.createElement("li", null, "Voila! The animation is now playing! You can also find more about the animation colors on the bottom left corner of the screen.")), o.a.createElement("div", {
                        className: "tutorial-content-video"
                    }, o.a.createElement("div", {
                        className: "tutorial-content-video-background"
                    }), o.a.createElement("video", {
                        key: "visualizing-algorithms",
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        height: 273
                    }, o.a.createElement("source", {
                        src: Ge.a,
                        type: "video/mp4"
                    }))))
                }]),
                qe = Ze.length - 1,
                Ke = function (e) {
                    var t = e.page,
                        a = e.visible,
                        n = e.handleDone,
                        l = e.handleNextPage,
                        r = e.handlePreviousPage,
                        i = Ze[t],
                        c = i.content,
                        d = i.title;
                    return o.a.createElement(Te.a, {
                        centered: !0,
                        visible: a,
                        title: d,
                        footer: [o.a.createElement(Fe.a, {
                            hidden: 0 === t,
                            key: "previous",
                            type: "primary",
                            onClick: r
                        }, "Previous Page"), o.a.createElement(Fe.a, {
                            key: "next",
                            type: "primary",
                            onClick: t !== qe ? l : n
                        }, t !== qe ? "Next Page" : "Done")],
                        width: 600,
                        onOk: n,
                        onCancel: n
                    }, c)
                },
                Qe = (a(191), function () {
                    var e = Object(r.useState)(!1),
                        t = Object(s.a)(e, 2),
                        a = t[0],
                        n = t[1],
                        l = Object(r.useState)(0),
                        i = Object(s.a)(l, 2),
                        c = i[0],
                        d = i[1];
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement(Ke, {
                        page: c,
                        visible: a,
                        handleDone: function () {
                            n(!1)
                        },
                        handleNextPage: function () {
                            d(c + 1)
                        },
                        handlePreviousPage: function () {
                            d(c - 1)
                        }
                    }), o.a.createElement("div", {
                        className: "overlay-bottom-right"
                    }, o.a.createElement(Fe.a, {
                        className: "overlay-bottom-item",
                        icon: o.a.createElement(ze.a, null),
                        shape: "circle",
                        size: "small",
                        type: "primary",
                        onClick: function () {
                            n(!0)
                        }
                    })))
                }),
                Xe = a(248),
                et = a(249),
                tt = a(250),
                at = a(251),
                nt = a(252),
                lt = a(253),
                rt = a(254),
                ot = a(255),
                it = a(256),
                ct = a(257),
                dt = a(242),
                st = (a(192), function (e) {
                    var t, a, n = e.speedMenu,
                        i = Object(r.useContext)(se),
                        c = i.state,
                        d = i.dispatch,
                        s = c.tree.data,
                        u = c.visualization,
                        m = u.algorithm,
                        h = u.speed,
                        p = u.status,
                        v = u.traversalPath,
                        f = function () {
                            var e = Object(y.a)(s);
                            ye(e), d(K({
                                data: e
                            })), d(ie({
                                status: F.Running,
                                traversalPathIndex: 0
                            }))
                        },
                        E = function () {
                            p === F.Running && d(ie({
                                status: F.Paused
                            }))
                        },
                        b = function () {
                            p === F.Paused && d(ie({
                                status: F.Running
                            }))
                        },
                        N = function () {
                            var e = Object(y.a)(s);
                            ye(e), d(g({
                                playgroundView: l.Home
                            })), d(K({
                                data: e
                            })), d(ie({
                                status: F.Idle,
                                traversalPath: [],
                                traversalPathIndex: 0
                            }))
                        };
                    return u.traversalPathIndex === v.length ? t = null : p === F.Paused ? (t = o.a.createElement(Fe.a, {
                        className: "overlay-right-item",
                        icon: o.a.createElement(Xe.a, null),
                        type: "primary",
                        onClick: b
                    }, "Play"), a = o.a.createElement(Fe.a, {
                        className: "homeview-right-item",
                        icon: o.a.createElement(et.a, null),
                        shape: "circle",
                        size: "middle",
                        type: "primary",
                        onClick: b
                    })) : (t = o.a.createElement(Fe.a, {
                        className: "homeview-right-item",
                        icon: o.a.createElement(tt.a, null),
                        type: "primary",
                        onClick: E
                    }, "Pause"), a = o.a.createElement(Fe.a, {
                        className: "homeview-right-item",
                        icon: o.a.createElement(at.a, null),
                        shape: "circle",
                        size: "middle",
                        type: "primary",
                        onClick: E
                    })), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: "homeview desktop"
                    }, o.a.createElement("div", {
                        className: "homeview-left"
                    }, o.a.createElement(Fe.a, {
                        className: "homeview-left-item",
                        icon: o.a.createElement(nt.a, null),
                        type: "primary",
                        onClick: f
                    }, "Replay ".concat(pe[m])), o.a.createElement(Ce.a, {
                        className: "homeview-left-item",
                        overlay: n
                    }, o.a.createElement(Fe.a, {
                        type: "primary"
                    }, "Speed: ".concat(ve[h]), " ", o.a.createElement(ke.a, null)))), o.a.createElement("div", {
                        className: "homeview-right"
                    }, t, o.a.createElement(Fe.a, {
                        className: "homeview-right-item danger",
                        icon: o.a.createElement(lt.a, null),
                        type: "primary",
                        onClick: N
                    }, "Stop"))), o.a.createElement("div", {
                        className: "homeview mobile"
                    }, o.a.createElement("div", {
                        className: "homeview-left"
                    }, o.a.createElement(Fe.a, {
                        className: "homeview-left-item",
                        icon: o.a.createElement(nt.a, null),
                        type: "primary",
                        onClick: f
                    }, "Replay")), o.a.createElement("div", {
                        className: "homeview-right"
                    }, a, o.a.createElement(Fe.a, {
                        className: "homeview-right-item danger",
                        icon: o.a.createElement(rt.a, null),
                        shape: "circle",
                        size: "middle",
                        type: "primary",
                        onClick: N
                    }))), o.a.createElement("div", {
                        className: "homeview-bottom-left"
                    }, o.a.createElement(dt.a, {
                        color: "default",
                        icon: o.a.createElement(ot.a, null)
                    }, "Unvisited"), o.a.createElement(dt.a, {
                        color: "#096dd9",
                        icon: o.a.createElement(it.a, null)
                    }, "Explored"), o.a.createElement(dt.a, {
                        color: "#389e0d",
                        icon: o.a.createElement(ct.a, null)
                    }, "Processed")))
                }),
                ut = function (e) {
                    var t, a = e.playgroundView,
                        n = Object(r.useContext)(se).dispatch,
                        i = o.a.createElement(Oe.a, {
                            onClick: function (e) {
                                var t = e.key;
                                n(ie({
                                    speed: t
                                }))
                            }
                        }, o.a.createElement(Oe.a.Item, {
                            key: C.Fast,
                            icon: o.a.createElement(Ne.a, null)
                        }, "Fast"), o.a.createElement(Oe.a.Item, {
                            key: C.Average,
                            icon: o.a.createElement(Ne.a, null)
                        }, "Average"), o.a.createElement(Oe.a.Item, {
                            key: C.Slow,
                            icon: o.a.createElement(Ne.a, null)
                        }, "Slow")),
                        c = o.a.createElement(Oe.a, {
                            onClick: function (e) {
                                var t = e.key;
                                n(ie({
                                    algorithm: t
                                }))
                            }
                        }, o.a.createElement(Oe.a.Item, {
                            key: S.PreOrder,
                            icon: o.a.createElement(we.a, null)
                        }, "Visualize Pre-Order"), o.a.createElement(Oe.a.Item, {
                            key: S.InOrder,
                            icon: o.a.createElement(we.a, null)
                        }, "Visualize In-Order"), o.a.createElement(Oe.a.Item, {
                            key: S.PostOrder,
                            icon: o.a.createElement(we.a, null)
                        }, "Visualize Post-Order"), o.a.createElement(Oe.a.Item, {
                            key: S.LevelOrder,
                            icon: o.a.createElement(we.a, null)
                        }, "Visualize Level-Order"));
                    switch (a) {
                        case l.Home:
                            t = o.a.createElement(Ve, {
                                speedMenu: i,
                                visualizationMenu: c
                            });
                            break;
                        case l.NodeUpdate:
                            t = o.a.createElement(Ie, null);
                            break;
                        case l.Visualization:
                            t = o.a.createElement(st, {
                                speedMenu: i
                            });
                            break;
                        default:
                            throw new Error("[TreePlayground] Invalid `NodeClickAction` type.")
                    }
                    return o.a.createElement(o.a.Fragment, null, t, o.a.createElement(Qe, null))
                },
                mt = a(132),
                ht = a.n(mt),
                pt = {
                    textAnchor: "middle",
                    x: 0,
                    y: 0
                },
                vt = !1,
                ft = "vertical",
                gt = 0,
                Et = function (e) {
                    var t = e.source,
                        a = e.target;
                    return "plus" === a.type ? null : "M".concat(t.x, ",").concat(t.y, "L").concat(a.x, ",").concat(a.y)
                },
                yt = function (e) {
                    var t = e.data,
                        a = e.onClick,
                        n = vt,
                        l = ft,
                        i = gt,
                        c = Et,
                        d = Object(r.useState)({
                            width: window.innerWidth,
                            height: window.innerHeight
                        }),
                        u = Object(s.a)(d, 1)[0];
                    return o.a.createElement(ht.a, {
                        data: t,
                        collapsible: n,
                        nodeSvgShape: N,
                        orientation: l,
                        textLayout: pt,
                        transitionDuration: i,
                        translate: {
                            x: u.width / 2,
                            y: u.height / 3
                        },
                        onClick: a,
                        pathFunc: c
                    })
                },
                bt = function () {
                    var e = Object(r.useContext)(se),
                        t = e.state,
                        a = e.dispatch,
                        n = t.playground,
                        i = t.tree,
                        c = t.visualization,
                        d = n.playgroundView,
                        s = i.data,
                        h = i.selectedNode,
                        v = i.nodeCounter,
                        f = c.speed,
                        E = c.status,
                        O = c.traversalPath,
                        k = c.traversalPathIndex,
                        P = Object(r.useCallback)((function () {
                            ee(s, v)
                        }), [v, s]),
                        S = Object(r.useCallback)((function (e) {
                            if ("Escape" === e.code && null !== h && d === l.NodeUpdate) {
                                var t = Object(y.a)(s);
                                W(t, null === h || void 0 === h ? void 0 : h.location), a(g({
                                    playgroundView: l.Home
                                })), a(K({
                                    data: t,
                                    selectedNode: null
                                }))
                            }
                        }), [a, s, d, h]);
                    Object(r.useEffect)((function () {
                        return window.addEventListener("beforeunload", P), window.addEventListener("keydown", S),
                            function () {
                                window.removeEventListener("beforeunload", P), window.removeEventListener("keydown", S)
                            }
                    }), [P, S]), Object(r.useEffect)((function () {
                        var e = setTimeout((function () {
                            if (be(c)) {
                                var e = O[k],
                                    t = e.location,
                                    n = e.action,
                                    l = Object(y.a)(s);
                                ! function (e, t) {
                                    switch (t) {
                                        case j.Explore:
                                            e.nodeSvgShape = Object(y.a)(ge);
                                            break;
                                        case j.Process:
                                            e.nodeSvgShape = Object(y.a)(Ee);
                                            break;
                                        default:
                                            throw new Error("[VisualizationHelper] Invalid `TraversalActions` type.")
                                    }
                                }(A(l, t), n), a(K({
                                    data: l
                                })), a(ie({
                                    traversalPathIndex: k + 1
                                }))
                            }
                        }), fe[f]);
                        return be(c) || clearTimeout(e),
                            function () {
                                return clearTimeout(e)
                            }
                    }), [a, i, s, c, f, E, O, k]);
                    return o.a.createElement("div", {
                        className: "playground"
                    }, o.a.createElement(ut, {
                        playgroundView: d
                    }), o.a.createElement(yt, {
                        data: t.tree.data,
                        onClick: function (e) {
                            if (E === F.Idle) {
                                var t = e,
                                    n = Object(y.a)(s),
                                    r = A(n, t.location);
                                switch (T(e)) {
                                    case b.AddNewNode:
                                        ! function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                            e.name = t.toString(), e.type = m.Regular, e.nodeSvgShape = Object(y.a)(N)
                                        }(r, (parseInt(v)) + 1), a(K({
                                            data: n,
                                            nodeCounter: (parseInt(v, 10)) + 1
                                        }));
                                        break;
                                    case b.ShowPlusNodes:
                                        console.log(1234);
                                        let input = document.getElementById('myInput');
                                        if (input) {
                                            input.focus();
                                            setTimeout(() => {
                                                input.select();
                                            }, 100);
                                        }
                                        ! function (e) {
                                            L(e), z(e) ? e.children = [D(e.location + u.Left), D(e.location + u.Right)] : e.children && x(e) ? (e.children[0].name = p.Shown, e.children[0].nodeSvgShape = Object(y.a)(w)) : e.children && I(e) && (e.children[1].name = p.Shown, e.children[1].nodeSvgShape = Object(y.a)(w))
                                        }(r), (null === h || void 0 === h ? void 0 : h.location) !== t.location && W(n, null === h || void 0 === h ? void 0 : h.location), a(g({
                                            playgroundView: l.NodeUpdate
                                        })), a(K({
                                            data: n,
                                            selectedNode: {
                                                name: r.name,
                                                location: r.location
                                            }
                                        }));
                                        break;
                                    case b.HidePlusNodes:
                                        let input2 = document.getElementById('myInput');
                                        if (input2) {
                                            input2.focus();
                                            setTimeout(() => {
                                                input2.select();
                                            }, 100);
                                        }
                                        if (W(n, null === h || void 0 === h ? void 0 : h.location), (null === h || void 0 === h ? void 0 : h.location) === t.location) {
                                            a(g({
                                                playgroundView: l.Home
                                            })), a(K({
                                                data: n,
                                                selectedNode: null
                                            }));
                                            break
                                        }
                                        L(r), a(g({
                                            playgroundView: l.NodeUpdate
                                        })), a(K({
                                            data: n,
                                            selectedNode: {
                                                name: r.name,
                                                location: r.location
                                            }
                                        }));
                                        break;
                                    default:
                                        throw new Error("[TreePlayground] Invalid `NodeClickAction` type.")
                                }
                            }
                        }
                    }))
                },
                Nt = function () {
                    var e = Object(r.useReducer)(me, de),
                        t = Object(s.a)(e, 2),
                        a = t[0],
                        n = t[1];
                    Object(r.useEffect)((function () {
                        n({
                            type: v.FetchTree
                        })
                    }), []);
                    var l = Object(r.useMemo)((function () {
                        return {
                            state: a,
                            dispatch: n
                        }
                    }), [a, n]);
                    return o.a.createElement(se.Provider, {
                        value: Object(d.a)({}, l)
                    }, o.a.createElement(bt, null))
                };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            c.a.render(o.a.createElement(Nt, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
                e.unregister()
            })).catch((function (e) {
                console.error(e.message)
            }))
        }
    },
    [
        [138, 1, 2]
    ]
]);
//# sourceMappingURL=main.5503405a.chunk.js.map