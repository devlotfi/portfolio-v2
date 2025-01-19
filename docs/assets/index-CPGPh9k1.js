var gy = Object.defineProperty;
var yy = (n, a, l) =>
  a in n
    ? gy(n, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
    : (n[a] = l);
var q1 = (n, a, l) => yy(n, typeof a != "symbol" ? a + "" : a, l);
import {
  r as vy,
  a as by,
  g as xy,
  $ as o3,
  b as A,
  j as T,
  c as en,
  d as En,
  e as _t,
  f as Sy,
  h as Ty,
  i as Cy,
  m as Kc,
  l as So,
  k as X1,
  s as Ay,
  N as Ey,
} from "./nextui-ClVRno2R.js";
(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const f of o)
      if (f.type === "childList")
        for (const d of f.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && r(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(o) {
    const f = {};
    return (
      o.integrity && (f.integrity = o.integrity),
      o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const f = l(o);
    fetch(o.href, f);
  }
})();
var Qc = { exports: {} },
  Fl = {},
  Wc = { exports: {} },
  $c = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Z1;
function wy() {
  return (
    Z1 ||
      ((Z1 = 1),
      (function (n) {
        function a(q, Q) {
          var J = q.length;
          q.push(Q);
          t: for (; 0 < J; ) {
            var pt = (J - 1) >>> 1,
              St = q[pt];
            if (0 < o(St, Q)) (q[pt] = Q), (q[J] = St), (J = pt);
            else break t;
          }
        }
        function l(q) {
          return q.length === 0 ? null : q[0];
        }
        function r(q) {
          if (q.length === 0) return null;
          var Q = q[0],
            J = q.pop();
          if (J !== Q) {
            q[0] = J;
            t: for (var pt = 0, St = q.length, $a = St >>> 1; pt < $a; ) {
              var ya = 2 * (pt + 1) - 1,
                rn = q[ya],
                ft = ya + 1,
                be = q[ft];
              if (0 > o(rn, J))
                ft < St && 0 > o(be, rn)
                  ? ((q[pt] = be), (q[ft] = J), (pt = ft))
                  : ((q[pt] = rn), (q[ya] = J), (pt = ya));
              else if (ft < St && 0 > o(be, J))
                (q[pt] = be), (q[ft] = J), (pt = ft);
              else break t;
            }
          }
          return Q;
        }
        function o(q, Q) {
          var J = q.sortIndex - Q.sortIndex;
          return J !== 0 ? J : q.id - Q.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            h = d.now();
          n.unstable_now = function () {
            return d.now() - h;
          };
        }
        var m = [],
          p = [],
          y = 1,
          x = null,
          b = 3,
          C = !1,
          M = !1,
          z = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          D = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        function B(q) {
          for (var Q = l(p); Q !== null; ) {
            if (Q.callback === null) r(p);
            else if (Q.startTime <= q)
              r(p), (Q.sortIndex = Q.expirationTime), a(m, Q);
            else break;
            Q = l(p);
          }
        }
        function Y(q) {
          if (((z = !1), B(q), !M))
            if (l(m) !== null) (M = !0), ke();
            else {
              var Q = l(p);
              Q !== null && jn(Y, Q.startTime - q);
            }
        }
        var k = !1,
          $ = -1,
          at = 5,
          K = -1;
        function G() {
          return !(n.unstable_now() - K < at);
        }
        function I() {
          if (k) {
            var q = n.unstable_now();
            K = q;
            var Q = !0;
            try {
              t: {
                (M = !1), z && ((z = !1), D($), ($ = -1)), (C = !0);
                var J = b;
                try {
                  e: {
                    for (
                      B(q), x = l(m);
                      x !== null && !(x.expirationTime > q && G());

                    ) {
                      var pt = x.callback;
                      if (typeof pt == "function") {
                        (x.callback = null), (b = x.priorityLevel);
                        var St = pt(x.expirationTime <= q);
                        if (((q = n.unstable_now()), typeof St == "function")) {
                          (x.callback = St), B(q), (Q = !0);
                          break e;
                        }
                        x === l(m) && r(m), B(q);
                      } else r(m);
                      x = l(m);
                    }
                    if (x !== null) Q = !0;
                    else {
                      var $a = l(p);
                      $a !== null && jn(Y, $a.startTime - q), (Q = !1);
                    }
                  }
                  break t;
                } finally {
                  (x = null), (b = J), (C = !1);
                }
                Q = void 0;
              }
            } finally {
              Q ? kt() : (k = !1);
            }
          }
        }
        var kt;
        if (typeof V == "function")
          kt = function () {
            V(I);
          };
        else if (typeof MessageChannel < "u") {
          var Vn = new MessageChannel(),
            sn = Vn.port2;
          (Vn.port1.onmessage = I),
            (kt = function () {
              sn.postMessage(null);
            });
        } else
          kt = function () {
            L(I, 0);
          };
        function ke() {
          k || ((k = !0), kt());
        }
        function jn(q, Q) {
          $ = L(function () {
            q(n.unstable_now());
          }, Q);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (q) {
            q.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            M || C || ((M = !0), ke());
          }),
          (n.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (at = 0 < q ? Math.floor(1e3 / q) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return l(m);
          }),
          (n.unstable_next = function (q) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = b;
            }
            var J = b;
            b = Q;
            try {
              return q();
            } finally {
              b = J;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (q, Q) {
            switch (q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                q = 3;
            }
            var J = b;
            b = q;
            try {
              return Q();
            } finally {
              b = J;
            }
          }),
          (n.unstable_scheduleCallback = function (q, Q, J) {
            var pt = n.unstable_now();
            switch (
              (typeof J == "object" && J !== null
                ? ((J = J.delay),
                  (J = typeof J == "number" && 0 < J ? pt + J : pt))
                : (J = pt),
              q)
            ) {
              case 1:
                var St = -1;
                break;
              case 2:
                St = 250;
                break;
              case 5:
                St = 1073741823;
                break;
              case 4:
                St = 1e4;
                break;
              default:
                St = 5e3;
            }
            return (
              (St = J + St),
              (q = {
                id: y++,
                callback: Q,
                priorityLevel: q,
                startTime: J,
                expirationTime: St,
                sortIndex: -1,
              }),
              J > pt
                ? ((q.sortIndex = J),
                  a(p, q),
                  l(m) === null &&
                    q === l(p) &&
                    (z ? (D($), ($ = -1)) : (z = !0), jn(Y, J - pt)))
                : ((q.sortIndex = St), a(m, q), M || C || ((M = !0), ke())),
              q
            );
          }),
          (n.unstable_shouldYield = G),
          (n.unstable_wrapCallback = function (q) {
            var Q = b;
            return function () {
              var J = b;
              b = Q;
              try {
                return q.apply(this, arguments);
              } finally {
                b = J;
              }
            };
          });
      })($c)),
    $c
  );
}
var F1;
function My() {
  return F1 || ((F1 = 1), (Wc.exports = wy())), Wc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var K1;
function Dy() {
  if (K1) return Fl;
  K1 = 1;
  var n = My(),
    a = vy(),
    l = by();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        e += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var f = Symbol.for("react.element"),
    d = Symbol.for("react.transitional.element"),
    h = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    p = Symbol.for("react.strict_mode"),
    y = Symbol.for("react.profiler"),
    x = Symbol.for("react.provider"),
    b = Symbol.for("react.consumer"),
    C = Symbol.for("react.context"),
    M = Symbol.for("react.forward_ref"),
    z = Symbol.for("react.suspense"),
    L = Symbol.for("react.suspense_list"),
    D = Symbol.for("react.memo"),
    V = Symbol.for("react.lazy"),
    B = Symbol.for("react.offscreen"),
    Y = Symbol.for("react.memo_cache_sentinel"),
    k = Symbol.iterator;
  function $(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (k && t[k]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var at = Symbol.for("react.client.reference");
  function K(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === at ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case m:
        return "Fragment";
      case h:
        return "Portal";
      case y:
        return "Profiler";
      case p:
        return "StrictMode";
      case z:
        return "Suspense";
      case L:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case C:
          return (t.displayName || "Context") + ".Provider";
        case b:
          return (t._context.displayName || "Context") + ".Consumer";
        case M:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case D:
          return (
            (e = t.displayName || null), e !== null ? e : K(t.type) || "Memo"
          );
        case V:
          (e = t._payload), (t = t._init);
          try {
            return K(t(e));
          } catch {}
      }
    return null;
  }
  var G = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = Object.assign,
    kt,
    Vn;
  function sn(t) {
    if (kt === void 0)
      try {
        throw Error();
      } catch (i) {
        var e = i.stack.trim().match(/\n( *(at )?)/);
        (kt = (e && e[1]) || ""),
          (Vn =
            -1 <
            i.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < i.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      kt +
      t +
      Vn
    );
  }
  var ke = !1;
  function jn(t, e) {
    if (!t || ke) return "";
    ke = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var U = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(U.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(U, []);
                } catch (j) {
                  var N = j;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (j) {
                  N = j;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                N = j;
              }
              (U = t()) &&
                typeof U.catch == "function" &&
                U.catch(function () {});
            }
          } catch (j) {
            if (j && N && typeof j.stack == "string") return [j.stack, N.stack];
          }
          return [null, null];
        },
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = s.DetermineComponentFrameRoot(),
        g = c[0],
        v = c[1];
      if (g && v) {
        var S = g.split(`
`),
          w = v.split(`
`);
        for (
          u = s = 0;
          s < S.length && !S[s].includes("DetermineComponentFrameRoot");

        )
          s++;
        for (; u < w.length && !w[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (s === S.length || u === w.length)
          for (
            s = S.length - 1, u = w.length - 1;
            1 <= s && 0 <= u && S[s] !== w[u];

          )
            u--;
        for (; 1 <= s && 0 <= u; s--, u--)
          if (S[s] !== w[u]) {
            if (s !== 1 || u !== 1)
              do
                if ((s--, u--, 0 > u || S[s] !== w[u])) {
                  var _ =
                    `
` + S[s].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      _.includes("<anonymous>") &&
                      (_ = _.replace("<anonymous>", t.displayName)),
                    _
                  );
                }
              while (1 <= s && 0 <= u);
            break;
          }
      }
    } finally {
      (ke = !1), (Error.prepareStackTrace = i);
    }
    return (i = t ? t.displayName || t.name : "") ? sn(i) : "";
  }
  function q(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return sn(t.type);
      case 16:
        return sn("Lazy");
      case 13:
        return sn("Suspense");
      case 19:
        return sn("SuspenseList");
      case 0:
      case 15:
        return (t = jn(t.type, !1)), t;
      case 11:
        return (t = jn(t.type.render, !1)), t;
      case 1:
        return (t = jn(t.type, !0)), t;
      default:
        return "";
    }
  }
  function Q(t) {
    try {
      var e = "";
      do (e += q(t)), (t = t.return);
      while (t);
      return e;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  function J(t) {
    var e = t,
      i = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), e.flags & 4098 && (i = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? i : null;
  }
  function pt(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function St(t) {
    if (J(t) !== t) throw Error(r(188));
  }
  function $a(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = J(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var i = t, s = e; ; ) {
      var u = i.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (((s = u.return), s !== null)) {
          i = s;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === i) return St(u), t;
          if (c === s) return St(u), e;
          c = c.sibling;
        }
        throw Error(r(188));
      }
      if (i.return !== s.return) (i = u), (s = c);
      else {
        for (var g = !1, v = u.child; v; ) {
          if (v === i) {
            (g = !0), (i = u), (s = c);
            break;
          }
          if (v === s) {
            (g = !0), (s = u), (i = c);
            break;
          }
          v = v.sibling;
        }
        if (!g) {
          for (v = c.child; v; ) {
            if (v === i) {
              (g = !0), (i = c), (s = u);
              break;
            }
            if (v === s) {
              (g = !0), (s = c), (i = u);
              break;
            }
            v = v.sibling;
          }
          if (!g) throw Error(r(189));
        }
      }
      if (i.alternate !== s) throw Error(r(190));
    }
    if (i.tag !== 3) throw Error(r(188));
    return i.stateNode.current === i ? t : e;
  }
  function ya(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = ya(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var rn = Array.isArray,
    ft = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    be = { pending: !1, data: null, method: null, action: null },
    Bo = [],
    Ja = -1;
  function Pe(t) {
    return { current: t };
  }
  function qt(t) {
    0 > Ja || ((t.current = Bo[Ja]), (Bo[Ja] = null), Ja--);
  }
  function Ct(t, e) {
    Ja++, (Bo[Ja] = t.current), (t.current = e);
  }
  var Ge = Pe(null),
    Wi = Pe(null),
    _n = Pe(null),
    Os = Pe(null);
  function Rs(t, e) {
    switch ((Ct(_n, e), Ct(Wi, t), Ct(Ge, null), (t = e.nodeType), t)) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? b1(e) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? e.parentNode : e),
          (e = t.tagName),
          (t = t.namespaceURI))
        )
          (t = b1(t)), (e = x1(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    qt(Ge), Ct(Ge, e);
  }
  function Ia() {
    qt(Ge), qt(Wi), qt(_n);
  }
  function Uo(t) {
    t.memoizedState !== null && Ct(Os, t);
    var e = Ge.current,
      i = x1(e, t.type);
    e !== i && (Ct(Wi, t), Ct(Ge, i));
  }
  function Ls(t) {
    Wi.current === t && (qt(Ge), qt(Wi)),
      Os.current === t && (qt(Os), (Gl._currentValue = be));
  }
  var ko = Object.prototype.hasOwnProperty,
    Po = n.unstable_scheduleCallback,
    Go = n.unstable_cancelCallback,
    K4 = n.unstable_shouldYield,
    Q4 = n.unstable_requestPaint,
    Ye = n.unstable_now,
    W4 = n.unstable_getCurrentPriorityLevel,
    o2 = n.unstable_ImmediatePriority,
    u2 = n.unstable_UserBlockingPriority,
    zs = n.unstable_NormalPriority,
    $4 = n.unstable_LowPriority,
    c2 = n.unstable_IdlePriority,
    J4 = n.log,
    I4 = n.unstable_setDisableYieldValue,
    $i = null,
    ce = null;
  function t6(t) {
    if (ce && typeof ce.onCommitFiberRoot == "function")
      try {
        ce.onCommitFiberRoot($i, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function Hn(t) {
    if (
      (typeof J4 == "function" && I4(t),
      ce && typeof ce.setStrictMode == "function")
    )
      try {
        ce.setStrictMode($i, t);
      } catch {}
  }
  var fe = Math.clz32 ? Math.clz32 : a6,
    e6 = Math.log,
    n6 = Math.LN2;
  function a6(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((e6(t) / n6) | 0)) | 0;
  }
  var Ns = 128,
    Vs = 4194304;
  function va(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function js(t, e) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      u = t.suspendedLanes,
      c = t.pingedLanes,
      g = t.warmLanes;
    t = t.finishedLanes !== 0;
    var v = i & 134217727;
    return (
      v !== 0
        ? ((i = v & ~u),
          i !== 0
            ? (s = va(i))
            : ((c &= v),
              c !== 0
                ? (s = va(c))
                : t || ((g = v & ~g), g !== 0 && (s = va(g)))))
        : ((v = i & ~u),
          v !== 0
            ? (s = va(v))
            : c !== 0
            ? (s = va(c))
            : t || ((g = i & ~g), g !== 0 && (s = va(g)))),
      s === 0
        ? 0
        : e !== 0 &&
          e !== s &&
          !(e & u) &&
          ((u = s & -s),
          (g = e & -e),
          u >= g || (u === 32 && (g & 4194176) !== 0))
        ? e
        : s
    );
  }
  function Ji(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function i6(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return e + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function f2() {
    var t = Ns;
    return (Ns <<= 1), !(Ns & 4194176) && (Ns = 128), t;
  }
  function d2() {
    var t = Vs;
    return (Vs <<= 1), !(Vs & 62914560) && (Vs = 4194304), t;
  }
  function Yo(t) {
    for (var e = [], i = 0; 31 > i; i++) e.push(t);
    return e;
  }
  function Ii(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function l6(t, e, i, s, u, c) {
    var g = t.pendingLanes;
    (t.pendingLanes = i),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= i),
      (t.entangledLanes &= i),
      (t.errorRecoveryDisabledLanes &= i),
      (t.shellSuspendCounter = 0);
    var v = t.entanglements,
      S = t.expirationTimes,
      w = t.hiddenUpdates;
    for (i = g & ~i; 0 < i; ) {
      var _ = 31 - fe(i),
        U = 1 << _;
      (v[_] = 0), (S[_] = -1);
      var N = w[_];
      if (N !== null)
        for (w[_] = null, _ = 0; _ < N.length; _++) {
          var j = N[_];
          j !== null && (j.lane &= -536870913);
        }
      i &= ~U;
    }
    s !== 0 && h2(t, s, 0),
      c !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(g & ~e));
  }
  function h2(t, e, i) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var s = 31 - fe(e);
    (t.entangledLanes |= e),
      (t.entanglements[s] = t.entanglements[s] | 1073741824 | (i & 4194218));
  }
  function m2(t, e) {
    var i = (t.entangledLanes |= e);
    for (t = t.entanglements; i; ) {
      var s = 31 - fe(i),
        u = 1 << s;
      (u & e) | (t[s] & e) && (t[s] |= e), (i &= ~u);
    }
  }
  function p2(t) {
    return (
      (t &= -t), 2 < t ? (8 < t ? (t & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function g2() {
    var t = ft.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : B1(t.type));
  }
  function s6(t, e) {
    var i = ft.p;
    try {
      return (ft.p = t), e();
    } finally {
      ft.p = i;
    }
  }
  var Bn = Math.random().toString(36).slice(2),
    It = "__reactFiber$" + Bn,
    re = "__reactProps$" + Bn,
    ti = "__reactContainer$" + Bn,
    qo = "__reactEvents$" + Bn,
    r6 = "__reactListeners$" + Bn,
    o6 = "__reactHandles$" + Bn,
    y2 = "__reactResources$" + Bn,
    tl = "__reactMarker$" + Bn;
  function Xo(t) {
    delete t[It], delete t[re], delete t[qo], delete t[r6], delete t[o6];
  }
  function ba(t) {
    var e = t[It];
    if (e) return e;
    for (var i = t.parentNode; i; ) {
      if ((e = i[ti] || i[It])) {
        if (
          ((i = e.alternate),
          e.child !== null || (i !== null && i.child !== null))
        )
          for (t = C1(t); t !== null; ) {
            if ((i = t[It])) return i;
            t = C1(t);
          }
        return e;
      }
      (t = i), (i = t.parentNode);
    }
    return null;
  }
  function ei(t) {
    if ((t = t[It] || t[ti])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function el(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function ni(t) {
    var e = t[y2];
    return (
      e ||
        (e = t[y2] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Xt(t) {
    t[tl] = !0;
  }
  var v2 = new Set(),
    b2 = {};
  function xa(t, e) {
    ai(t, e), ai(t + "Capture", e);
  }
  function ai(t, e) {
    for (b2[t] = e, t = 0; t < e.length; t++) v2.add(e[t]);
  }
  var on = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    u6 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    x2 = {},
    S2 = {};
  function c6(t) {
    return ko.call(S2, t)
      ? !0
      : ko.call(x2, t)
      ? !1
      : u6.test(t)
      ? (S2[t] = !0)
      : ((x2[t] = !0), !1);
  }
  function _s(t, e, i) {
    if (c6(e))
      if (i === null) t.removeAttribute(e);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var s = e.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + i);
      }
  }
  function Hs(t, e, i) {
    if (i === null) t.removeAttribute(e);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + i);
    }
  }
  function un(t, e, i, s) {
    if (s === null) t.removeAttribute(i);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(i);
          return;
      }
      t.setAttributeNS(e, i, "" + s);
    }
  }
  function xe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function T2(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function f6(t) {
    var e = T2(t) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      s = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var u = i.get,
        c = i.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (g) {
            (s = "" + g), c.call(this, g);
          },
        }),
        Object.defineProperty(t, e, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (g) {
            s = "" + g;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Bs(t) {
    t._valueTracker || (t._valueTracker = f6(t));
  }
  function C2(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var i = e.getValue(),
      s = "";
    return (
      t && (s = T2(t) ? (t.checked ? "true" : "false") : t.value),
      (t = s),
      t !== i ? (e.setValue(t), !0) : !1
    );
  }
  function Us(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var d6 = /[\n"\\]/g;
  function Se(t) {
    return t.replace(d6, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Zo(t, e, i, s, u, c, g, v) {
    (t.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (t.type = g)
        : t.removeAttribute("type"),
      e != null
        ? g === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + xe(e))
          : t.value !== "" + xe(e) && (t.value = "" + xe(e))
        : (g !== "submit" && g !== "reset") || t.removeAttribute("value"),
      e != null
        ? Fo(t, g, xe(e))
        : i != null
        ? Fo(t, g, xe(i))
        : s != null && t.removeAttribute("value"),
      u == null && c != null && (t.defaultChecked = !!c),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + xe(v))
        : t.removeAttribute("name");
  }
  function A2(t, e, i, s, u, c, g, v) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.type = c),
      e != null || i != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || e != null)) return;
      (i = i != null ? "" + xe(i) : ""),
        (e = e != null ? "" + xe(e) : i),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (s = s ?? u),
      (s = typeof s != "function" && typeof s != "symbol" && !!s),
      (t.checked = v ? t.checked : !!s),
      (t.defaultChecked = !!s),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (t.name = g);
  }
  function Fo(t, e, i) {
    (e === "number" && Us(t.ownerDocument) === t) ||
      t.defaultValue === "" + i ||
      (t.defaultValue = "" + i);
  }
  function ii(t, e, i, s) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < i.length; u++) e["$" + i[u]] = !0;
      for (i = 0; i < t.length; i++)
        (u = e.hasOwnProperty("$" + t[i].value)),
          t[i].selected !== u && (t[i].selected = u),
          u && s && (t[i].defaultSelected = !0);
    } else {
      for (i = "" + xe(i), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === i) {
          (t[u].selected = !0), s && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function E2(t, e, i) {
    if (
      e != null &&
      ((e = "" + xe(e)), e !== t.value && (t.value = e), i == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = i != null ? "" + xe(i) : "";
  }
  function w2(t, e, i, s) {
    if (e == null) {
      if (s != null) {
        if (i != null) throw Error(r(92));
        if (rn(s)) {
          if (1 < s.length) throw Error(r(93));
          s = s[0];
        }
        i = s;
      }
      i == null && (i = ""), (e = i);
    }
    (i = xe(e)),
      (t.defaultValue = i),
      (s = t.textContent),
      s === i && s !== "" && s !== null && (t.value = s);
  }
  function li(t, e) {
    if (e) {
      var i = t.firstChild;
      if (i && i === t.lastChild && i.nodeType === 3) {
        i.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var h6 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function M2(t, e, i) {
    var s = e.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === ""
      ? s
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : s
      ? t.setProperty(e, i)
      : typeof i != "number" || i === 0 || h6.has(e)
      ? e === "float"
        ? (t.cssFloat = i)
        : (t[e] = ("" + i).trim())
      : (t[e] = i + "px");
  }
  function D2(t, e, i) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), i != null)) {
      for (var s in i)
        !i.hasOwnProperty(s) ||
          (e != null && e.hasOwnProperty(s)) ||
          (s.indexOf("--") === 0
            ? t.setProperty(s, "")
            : s === "float"
            ? (t.cssFloat = "")
            : (t[s] = ""));
      for (var u in e)
        (s = e[u]), e.hasOwnProperty(u) && i[u] !== s && M2(t, u, s);
    } else for (var c in e) e.hasOwnProperty(c) && M2(t, c, e[c]);
  }
  function Ko(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var m6 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    p6 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ks(t) {
    return p6.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Qo = null;
  function Wo(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var si = null,
    ri = null;
  function O2(t) {
    var e = ei(t);
    if (e && (t = e.stateNode)) {
      var i = t[re] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Zo(
              t,
              i.value,
              i.defaultValue,
              i.defaultValue,
              i.checked,
              i.defaultChecked,
              i.type,
              i.name
            ),
            (e = i.name),
            i.type === "radio" && e != null)
          ) {
            for (i = t; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                'input[name="' + Se("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < i.length;
              e++
            ) {
              var s = i[e];
              if (s !== t && s.form === t.form) {
                var u = s[re] || null;
                if (!u) throw Error(r(90));
                Zo(
                  s,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < i.length; e++)
              (s = i[e]), s.form === t.form && C2(s);
          }
          break t;
        case "textarea":
          E2(t, i.value, i.defaultValue);
          break t;
        case "select":
          (e = i.value), e != null && ii(t, !!i.multiple, e, !1);
      }
    }
  }
  var $o = !1;
  function R2(t, e, i) {
    if ($o) return t(e, i);
    $o = !0;
    try {
      var s = t(e);
      return s;
    } finally {
      if (
        (($o = !1),
        (si !== null || ri !== null) &&
          (Cr(), si && ((e = si), (t = ri), (ri = si = null), O2(e), t)))
      )
        for (e = 0; e < t.length; e++) O2(t[e]);
    }
  }
  function nl(t, e) {
    var i = t.stateNode;
    if (i === null) return null;
    var s = i[re] || null;
    if (s === null) return null;
    i = s[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) ||
          ((t = t.type),
          (s = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !s);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (i && typeof i != "function") throw Error(r(231, e, typeof i));
    return i;
  }
  var Jo = !1;
  if (on)
    try {
      var al = {};
      Object.defineProperty(al, "passive", {
        get: function () {
          Jo = !0;
        },
      }),
        window.addEventListener("test", al, al),
        window.removeEventListener("test", al, al);
    } catch {
      Jo = !1;
    }
  var Un = null,
    Io = null,
    Ps = null;
  function L2() {
    if (Ps) return Ps;
    var t,
      e = Io,
      i = e.length,
      s,
      u = "value" in Un ? Un.value : Un.textContent,
      c = u.length;
    for (t = 0; t < i && e[t] === u[t]; t++);
    var g = i - t;
    for (s = 1; s <= g && e[i - s] === u[c - s]; s++);
    return (Ps = u.slice(t, 1 < s ? 1 - s : void 0));
  }
  function Gs(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ys() {
    return !0;
  }
  function z2() {
    return !1;
  }
  function oe(t) {
    function e(i, s, u, c, g) {
      (this._reactName = i),
        (this._targetInst = u),
        (this.type = s),
        (this.nativeEvent = c),
        (this.target = g),
        (this.currentTarget = null);
      for (var v in t)
        t.hasOwnProperty(v) && ((i = t[v]), (this[v] = i ? i(c) : c[v]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Ys
          : z2),
        (this.isPropagationStopped = z2),
        this
      );
    }
    return (
      I(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = Ys));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = Ys));
        },
        persist: function () {},
        isPersistent: Ys,
      }),
      e
    );
  }
  var Sa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    qs = oe(Sa),
    il = I({}, Sa, { view: 0, detail: 0 }),
    g6 = oe(il),
    tu,
    eu,
    ll,
    Xs = I({}, il, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: au,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== ll &&
              (ll && t.type === "mousemove"
                ? ((tu = t.screenX - ll.screenX), (eu = t.screenY - ll.screenY))
                : (eu = tu = 0),
              (ll = t)),
            tu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : eu;
      },
    }),
    N2 = oe(Xs),
    y6 = I({}, Xs, { dataTransfer: 0 }),
    v6 = oe(y6),
    b6 = I({}, il, { relatedTarget: 0 }),
    nu = oe(b6),
    x6 = I({}, Sa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    S6 = oe(x6),
    T6 = I({}, Sa, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    C6 = oe(T6),
    A6 = I({}, Sa, { data: 0 }),
    V2 = oe(A6),
    E6 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    w6 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    M6 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function D6(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = M6[t])
      ? !!e[t]
      : !1;
  }
  function au() {
    return D6;
  }
  var O6 = I({}, il, {
      key: function (t) {
        if (t.key) {
          var e = E6[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Gs(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? w6[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: au,
      charCode: function (t) {
        return t.type === "keypress" ? Gs(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Gs(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    R6 = oe(O6),
    L6 = I({}, Xs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    j2 = oe(L6),
    z6 = I({}, il, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: au,
    }),
    N6 = oe(z6),
    V6 = I({}, Sa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    j6 = oe(V6),
    _6 = I({}, Xs, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    H6 = oe(_6),
    B6 = I({}, Sa, { newState: 0, oldState: 0 }),
    U6 = oe(B6),
    k6 = [9, 13, 27, 32],
    iu = on && "CompositionEvent" in window,
    sl = null;
  on && "documentMode" in document && (sl = document.documentMode);
  var P6 = on && "TextEvent" in window && !sl,
    _2 = on && (!iu || (sl && 8 < sl && 11 >= sl)),
    H2 = " ",
    B2 = !1;
  function U2(t, e) {
    switch (t) {
      case "keyup":
        return k6.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function k2(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var oi = !1;
  function G6(t, e) {
    switch (t) {
      case "compositionend":
        return k2(e);
      case "keypress":
        return e.which !== 32 ? null : ((B2 = !0), H2);
      case "textInput":
        return (t = e.data), t === H2 && B2 ? null : t;
      default:
        return null;
    }
  }
  function Y6(t, e) {
    if (oi)
      return t === "compositionend" || (!iu && U2(t, e))
        ? ((t = L2()), (Ps = Io = Un = null), (oi = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return _2 && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var q6 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function P2(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!q6[t.type] : e === "textarea";
  }
  function G2(t, e, i, s) {
    si ? (ri ? ri.push(s) : (ri = [s])) : (si = s),
      (e = Dr(e, "onChange")),
      0 < e.length &&
        ((i = new qs("onChange", "change", null, i, s)),
        t.push({ event: i, listeners: e }));
  }
  var rl = null,
    ol = null;
  function X6(t) {
    m1(t, 0);
  }
  function Zs(t) {
    var e = el(t);
    if (C2(e)) return t;
  }
  function Y2(t, e) {
    if (t === "change") return e;
  }
  var q2 = !1;
  if (on) {
    var lu;
    if (on) {
      var su = "oninput" in document;
      if (!su) {
        var X2 = document.createElement("div");
        X2.setAttribute("oninput", "return;"),
          (su = typeof X2.oninput == "function");
      }
      lu = su;
    } else lu = !1;
    q2 = lu && (!document.documentMode || 9 < document.documentMode);
  }
  function Z2() {
    rl && (rl.detachEvent("onpropertychange", F2), (ol = rl = null));
  }
  function F2(t) {
    if (t.propertyName === "value" && Zs(ol)) {
      var e = [];
      G2(e, ol, t, Wo(t)), R2(X6, e);
    }
  }
  function Z6(t, e, i) {
    t === "focusin"
      ? (Z2(), (rl = e), (ol = i), rl.attachEvent("onpropertychange", F2))
      : t === "focusout" && Z2();
  }
  function F6(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Zs(ol);
  }
  function K6(t, e) {
    if (t === "click") return Zs(e);
  }
  function Q6(t, e) {
    if (t === "input" || t === "change") return Zs(e);
  }
  function W6(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var de = typeof Object.is == "function" ? Object.is : W6;
  function ul(t, e) {
    if (de(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var i = Object.keys(t),
      s = Object.keys(e);
    if (i.length !== s.length) return !1;
    for (s = 0; s < i.length; s++) {
      var u = i[s];
      if (!ko.call(e, u) || !de(t[u], e[u])) return !1;
    }
    return !0;
  }
  function K2(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Q2(t, e) {
    var i = K2(t);
    t = 0;
    for (var s; i; ) {
      if (i.nodeType === 3) {
        if (((s = t + i.textContent.length), t <= e && s >= e))
          return { node: i, offset: e - t };
        t = s;
      }
      t: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break t;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = K2(i);
    }
  }
  function W2(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? W2(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function $2(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Us(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var i = typeof e.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) t = e.contentWindow;
      else break;
      e = Us(t.document);
    }
    return e;
  }
  function ru(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function $6(t, e) {
    var i = $2(e);
    e = t.focusedElem;
    var s = t.selectionRange;
    if (
      i !== e &&
      e &&
      e.ownerDocument &&
      W2(e.ownerDocument.documentElement, e)
    ) {
      if (s !== null && ru(e)) {
        if (
          ((t = s.start),
          (i = s.end),
          i === void 0 && (i = t),
          "selectionStart" in e)
        )
          (e.selectionStart = t),
            (e.selectionEnd = Math.min(i, e.value.length));
        else if (
          ((i = ((t = e.ownerDocument || document) && t.defaultView) || window),
          i.getSelection)
        ) {
          i = i.getSelection();
          var u = e.textContent.length,
            c = Math.min(s.start, u);
          (s = s.end === void 0 ? c : Math.min(s.end, u)),
            !i.extend && c > s && ((u = s), (s = c), (c = u)),
            (u = Q2(e, c));
          var g = Q2(e, s);
          u &&
            g &&
            (i.rangeCount !== 1 ||
              i.anchorNode !== u.node ||
              i.anchorOffset !== u.offset ||
              i.focusNode !== g.node ||
              i.focusOffset !== g.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            i.removeAllRanges(),
            c > s
              ? (i.addRange(t), i.extend(g.node, g.offset))
              : (t.setEnd(g.node, g.offset), i.addRange(t)));
        }
      }
      for (t = [], i = e; (i = i.parentNode); )
        i.nodeType === 1 &&
          t.push({ element: i, left: i.scrollLeft, top: i.scrollTop });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++)
        (i = t[e]),
          (i.element.scrollLeft = i.left),
          (i.element.scrollTop = i.top);
    }
  }
  var J6 = on && "documentMode" in document && 11 >= document.documentMode,
    ui = null,
    ou = null,
    cl = null,
    uu = !1;
  function J2(t, e, i) {
    var s =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    uu ||
      ui == null ||
      ui !== Us(s) ||
      ((s = ui),
      "selectionStart" in s && ru(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (cl && ul(cl, s)) ||
        ((cl = s),
        (s = Dr(ou, "onSelect")),
        0 < s.length &&
          ((e = new qs("onSelect", "select", null, e, i)),
          t.push({ event: e, listeners: s }),
          (e.target = ui))));
  }
  function Ta(t, e) {
    var i = {};
    return (
      (i[t.toLowerCase()] = e.toLowerCase()),
      (i["Webkit" + t] = "webkit" + e),
      (i["Moz" + t] = "moz" + e),
      i
    );
  }
  var ci = {
      animationend: Ta("Animation", "AnimationEnd"),
      animationiteration: Ta("Animation", "AnimationIteration"),
      animationstart: Ta("Animation", "AnimationStart"),
      transitionrun: Ta("Transition", "TransitionRun"),
      transitionstart: Ta("Transition", "TransitionStart"),
      transitioncancel: Ta("Transition", "TransitionCancel"),
      transitionend: Ta("Transition", "TransitionEnd"),
    },
    cu = {},
    I2 = {};
  on &&
    ((I2 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ci.animationend.animation,
      delete ci.animationiteration.animation,
      delete ci.animationstart.animation),
    "TransitionEvent" in window || delete ci.transitionend.transition);
  function Ca(t) {
    if (cu[t]) return cu[t];
    if (!ci[t]) return t;
    var e = ci[t],
      i;
    for (i in e) if (e.hasOwnProperty(i) && i in I2) return (cu[t] = e[i]);
    return t;
  }
  var td = Ca("animationend"),
    ed = Ca("animationiteration"),
    nd = Ca("animationstart"),
    I6 = Ca("transitionrun"),
    t5 = Ca("transitionstart"),
    e5 = Ca("transitioncancel"),
    ad = Ca("transitionend"),
    id = new Map(),
    ld =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Ve(t, e) {
    id.set(t, e), xa(e, [t]);
  }
  var Te = [],
    fi = 0,
    fu = 0;
  function Fs() {
    for (var t = fi, e = (fu = fi = 0); e < t; ) {
      var i = Te[e];
      Te[e++] = null;
      var s = Te[e];
      Te[e++] = null;
      var u = Te[e];
      Te[e++] = null;
      var c = Te[e];
      if (((Te[e++] = null), s !== null && u !== null)) {
        var g = s.pending;
        g === null ? (u.next = u) : ((u.next = g.next), (g.next = u)),
          (s.pending = u);
      }
      c !== 0 && sd(i, u, c);
    }
  }
  function Ks(t, e, i, s) {
    (Te[fi++] = t),
      (Te[fi++] = e),
      (Te[fi++] = i),
      (Te[fi++] = s),
      (fu |= s),
      (t.lanes |= s),
      (t = t.alternate),
      t !== null && (t.lanes |= s);
  }
  function du(t, e, i, s) {
    return Ks(t, e, i, s), Qs(t);
  }
  function kn(t, e) {
    return Ks(t, null, null, e), Qs(t);
  }
  function sd(t, e, i) {
    t.lanes |= i;
    var s = t.alternate;
    s !== null && (s.lanes |= i);
    for (var u = !1, c = t.return; c !== null; )
      (c.childLanes |= i),
        (s = c.alternate),
        s !== null && (s.childLanes |= i),
        c.tag === 22 &&
          ((t = c.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = c),
        (c = c.return);
    u &&
      e !== null &&
      t.tag === 3 &&
      ((c = t.stateNode),
      (u = 31 - fe(i)),
      (c = c.hiddenUpdates),
      (t = c[u]),
      t === null ? (c[u] = [e]) : t.push(e),
      (e.lane = i | 536870912));
  }
  function Qs(t) {
    if (50 < jl) throw ((jl = 0), (vc = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var di = {},
    rd = new WeakMap();
  function Ce(t, e) {
    if (typeof t == "object" && t !== null) {
      var i = rd.get(t);
      return i !== void 0
        ? i
        : ((e = { value: t, source: e, stack: Q(e) }), rd.set(t, e), e);
    }
    return { value: t, source: e, stack: Q(e) };
  }
  var hi = [],
    mi = 0,
    Ws = null,
    $s = 0,
    Ae = [],
    Ee = 0,
    Aa = null,
    cn = 1,
    fn = "";
  function Ea(t, e) {
    (hi[mi++] = $s), (hi[mi++] = Ws), (Ws = t), ($s = e);
  }
  function od(t, e, i) {
    (Ae[Ee++] = cn), (Ae[Ee++] = fn), (Ae[Ee++] = Aa), (Aa = t);
    var s = cn;
    t = fn;
    var u = 32 - fe(s) - 1;
    (s &= ~(1 << u)), (i += 1);
    var c = 32 - fe(e) + u;
    if (30 < c) {
      var g = u - (u % 5);
      (c = (s & ((1 << g) - 1)).toString(32)),
        (s >>= g),
        (u -= g),
        (cn = (1 << (32 - fe(e) + u)) | (i << u) | s),
        (fn = c + t);
    } else (cn = (1 << c) | (i << u) | s), (fn = t);
  }
  function hu(t) {
    t.return !== null && (Ea(t, 1), od(t, 1, 0));
  }
  function mu(t) {
    for (; t === Ws; )
      (Ws = hi[--mi]), (hi[mi] = null), ($s = hi[--mi]), (hi[mi] = null);
    for (; t === Aa; )
      (Aa = Ae[--Ee]),
        (Ae[Ee] = null),
        (fn = Ae[--Ee]),
        (Ae[Ee] = null),
        (cn = Ae[--Ee]),
        (Ae[Ee] = null);
  }
  var ie = null,
    Wt = null,
    dt = !1,
    je = null,
    qe = !1,
    pu = Error(r(519));
  function wa(t) {
    var e = Error(r(418, ""));
    throw (hl(Ce(e, t)), pu);
  }
  function ud(t) {
    var e = t.stateNode,
      i = t.type,
      s = t.memoizedProps;
    switch (((e[It] = t), (e[re] = s), i)) {
      case "dialog":
        ut("cancel", e), ut("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Hl.length; i++) ut(Hl[i], e);
        break;
      case "source":
        ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ut("error", e), ut("load", e);
        break;
      case "details":
        ut("toggle", e);
        break;
      case "input":
        ut("invalid", e),
          A2(
            e,
            s.value,
            s.defaultValue,
            s.checked,
            s.defaultChecked,
            s.type,
            s.name,
            !0
          ),
          Bs(e);
        break;
      case "select":
        ut("invalid", e);
        break;
      case "textarea":
        ut("invalid", e), w2(e, s.value, s.defaultValue, s.children), Bs(e);
    }
    (i = s.children),
      (typeof i != "string" && typeof i != "number" && typeof i != "bigint") ||
      e.textContent === "" + i ||
      s.suppressHydrationWarning === !0 ||
      v1(e.textContent, i)
        ? (s.popover != null && (ut("beforetoggle", e), ut("toggle", e)),
          s.onScroll != null && ut("scroll", e),
          s.onScrollEnd != null && ut("scrollend", e),
          s.onClick != null && (e.onclick = Or),
          (e = !0))
        : (e = !1),
      e || wa(t);
  }
  function cd(t) {
    for (ie = t.return; ie; )
      switch (ie.tag) {
        case 3:
        case 27:
          qe = !0;
          return;
        case 5:
        case 13:
          qe = !1;
          return;
        default:
          ie = ie.return;
      }
  }
  function fl(t) {
    if (t !== ie) return !1;
    if (!dt) return cd(t), (dt = !0), !1;
    var e = !1,
      i;
    if (
      ((i = t.tag !== 3 && t.tag !== 27) &&
        ((i = t.tag === 5) &&
          ((i = t.type),
          (i =
            !(i !== "form" && i !== "button") || jc(t.type, t.memoizedProps))),
        (i = !i)),
      i && (e = !0),
      e && Wt && wa(t),
      cd(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((i = t.data), i === "/$")) {
              if (e === 0) {
                Wt = He(t.nextSibling);
                break t;
              }
              e--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || e++;
          t = t.nextSibling;
        }
        Wt = null;
      }
    } else Wt = ie ? He(t.stateNode.nextSibling) : null;
    return !0;
  }
  function dl() {
    (Wt = ie = null), (dt = !1);
  }
  function hl(t) {
    je === null ? (je = [t]) : je.push(t);
  }
  var ml = Error(r(460)),
    fd = Error(r(474)),
    gu = { then: function () {} };
  function dd(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Js() {}
  function hd(t, e, i) {
    switch (
      ((i = t[i]),
      i === void 0 ? t.push(e) : i !== e && (e.then(Js, Js), (e = i)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), t === ml ? Error(r(483)) : t);
      default:
        if (typeof e.status == "string") e.then(Js, Js);
        else {
          if (((t = bt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (s) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "fulfilled"), (u.value = s);
                }
              },
              function (s) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "rejected"), (u.reason = s);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), t === ml ? Error(r(483)) : t);
        }
        throw ((pl = e), ml);
    }
  }
  var pl = null;
  function md() {
    if (pl === null) throw Error(r(459));
    var t = pl;
    return (pl = null), t;
  }
  var pi = null,
    gl = 0;
  function Is(t) {
    var e = gl;
    return (gl += 1), pi === null && (pi = []), hd(pi, t, e);
  }
  function yl(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function tr(t, e) {
    throw e.$$typeof === f
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function pd(t) {
    var e = t._init;
    return e(t._payload);
  }
  function gd(t) {
    function e(O, E) {
      if (t) {
        var R = O.deletions;
        R === null ? ((O.deletions = [E]), (O.flags |= 16)) : R.push(E);
      }
    }
    function i(O, E) {
      if (!t) return null;
      for (; E !== null; ) e(O, E), (E = E.sibling);
      return null;
    }
    function s(O) {
      for (var E = new Map(); O !== null; )
        O.key !== null ? E.set(O.key, O) : E.set(O.index, O), (O = O.sibling);
      return E;
    }
    function u(O, E) {
      return (O = Jn(O, E)), (O.index = 0), (O.sibling = null), O;
    }
    function c(O, E, R) {
      return (
        (O.index = R),
        t
          ? ((R = O.alternate),
            R !== null
              ? ((R = R.index), R < E ? ((O.flags |= 33554434), E) : R)
              : ((O.flags |= 33554434), E))
          : ((O.flags |= 1048576), E)
      );
    }
    function g(O) {
      return t && O.alternate === null && (O.flags |= 33554434), O;
    }
    function v(O, E, R, H) {
      return E === null || E.tag !== 6
        ? ((E = cc(R, O.mode, H)), (E.return = O), E)
        : ((E = u(E, R)), (E.return = O), E);
    }
    function S(O, E, R, H) {
      var X = R.type;
      return X === m
        ? _(O, E, R.props.children, H, R.key)
        : E !== null &&
          (E.elementType === X ||
            (typeof X == "object" &&
              X !== null &&
              X.$$typeof === V &&
              pd(X) === E.type))
        ? ((E = u(E, R.props)), yl(E, R), (E.return = O), E)
        : ((E = vr(R.type, R.key, R.props, null, O.mode, H)),
          yl(E, R),
          (E.return = O),
          E);
    }
    function w(O, E, R, H) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== R.containerInfo ||
        E.stateNode.implementation !== R.implementation
        ? ((E = fc(R, O.mode, H)), (E.return = O), E)
        : ((E = u(E, R.children || [])), (E.return = O), E);
    }
    function _(O, E, R, H, X) {
      return E === null || E.tag !== 7
        ? ((E = _a(R, O.mode, H, X)), (E.return = O), E)
        : ((E = u(E, R)), (E.return = O), E);
    }
    function U(O, E, R) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (E = cc("" + E, O.mode, R)), (E.return = O), E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case d:
            return (
              (R = vr(E.type, E.key, E.props, null, O.mode, R)),
              yl(R, E),
              (R.return = O),
              R
            );
          case h:
            return (E = fc(E, O.mode, R)), (E.return = O), E;
          case V:
            var H = E._init;
            return (E = H(E._payload)), U(O, E, R);
        }
        if (rn(E) || $(E))
          return (E = _a(E, O.mode, R, null)), (E.return = O), E;
        if (typeof E.then == "function") return U(O, Is(E), R);
        if (E.$$typeof === C) return U(O, pr(O, E), R);
        tr(O, E);
      }
      return null;
    }
    function N(O, E, R, H) {
      var X = E !== null ? E.key : null;
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return X !== null ? null : v(O, E, "" + R, H);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case d:
            return R.key === X ? S(O, E, R, H) : null;
          case h:
            return R.key === X ? w(O, E, R, H) : null;
          case V:
            return (X = R._init), (R = X(R._payload)), N(O, E, R, H);
        }
        if (rn(R) || $(R)) return X !== null ? null : _(O, E, R, H, null);
        if (typeof R.then == "function") return N(O, E, Is(R), H);
        if (R.$$typeof === C) return N(O, E, pr(O, R), H);
        tr(O, R);
      }
      return null;
    }
    function j(O, E, R, H, X) {
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return (O = O.get(R) || null), v(E, O, "" + H, X);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case d:
            return (
              (O = O.get(H.key === null ? R : H.key) || null), S(E, O, H, X)
            );
          case h:
            return (
              (O = O.get(H.key === null ? R : H.key) || null), w(E, O, H, X)
            );
          case V:
            var lt = H._init;
            return (H = lt(H._payload)), j(O, E, R, H, X);
        }
        if (rn(H) || $(H)) return (O = O.get(R) || null), _(E, O, H, X, null);
        if (typeof H.then == "function") return j(O, E, R, Is(H), X);
        if (H.$$typeof === C) return j(O, E, R, pr(E, H), X);
        tr(E, H);
      }
      return null;
    }
    function Z(O, E, R, H) {
      for (
        var X = null, lt = null, W = E, tt = (E = 0), Kt = null;
        W !== null && tt < R.length;
        tt++
      ) {
        W.index > tt ? ((Kt = W), (W = null)) : (Kt = W.sibling);
        var ht = N(O, W, R[tt], H);
        if (ht === null) {
          W === null && (W = Kt);
          break;
        }
        t && W && ht.alternate === null && e(O, W),
          (E = c(ht, E, tt)),
          lt === null ? (X = ht) : (lt.sibling = ht),
          (lt = ht),
          (W = Kt);
      }
      if (tt === R.length) return i(O, W), dt && Ea(O, tt), X;
      if (W === null) {
        for (; tt < R.length; tt++)
          (W = U(O, R[tt], H)),
            W !== null &&
              ((E = c(W, E, tt)),
              lt === null ? (X = W) : (lt.sibling = W),
              (lt = W));
        return dt && Ea(O, tt), X;
      }
      for (W = s(W); tt < R.length; tt++)
        (Kt = j(W, O, tt, R[tt], H)),
          Kt !== null &&
            (t &&
              Kt.alternate !== null &&
              W.delete(Kt.key === null ? tt : Kt.key),
            (E = c(Kt, E, tt)),
            lt === null ? (X = Kt) : (lt.sibling = Kt),
            (lt = Kt));
      return (
        t &&
          W.forEach(function (la) {
            return e(O, la);
          }),
        dt && Ea(O, tt),
        X
      );
    }
    function nt(O, E, R, H) {
      if (R == null) throw Error(r(151));
      for (
        var X = null, lt = null, W = E, tt = (E = 0), Kt = null, ht = R.next();
        W !== null && !ht.done;
        tt++, ht = R.next()
      ) {
        W.index > tt ? ((Kt = W), (W = null)) : (Kt = W.sibling);
        var la = N(O, W, ht.value, H);
        if (la === null) {
          W === null && (W = Kt);
          break;
        }
        t && W && la.alternate === null && e(O, W),
          (E = c(la, E, tt)),
          lt === null ? (X = la) : (lt.sibling = la),
          (lt = la),
          (W = Kt);
      }
      if (ht.done) return i(O, W), dt && Ea(O, tt), X;
      if (W === null) {
        for (; !ht.done; tt++, ht = R.next())
          (ht = U(O, ht.value, H)),
            ht !== null &&
              ((E = c(ht, E, tt)),
              lt === null ? (X = ht) : (lt.sibling = ht),
              (lt = ht));
        return dt && Ea(O, tt), X;
      }
      for (W = s(W); !ht.done; tt++, ht = R.next())
        (ht = j(W, O, tt, ht.value, H)),
          ht !== null &&
            (t &&
              ht.alternate !== null &&
              W.delete(ht.key === null ? tt : ht.key),
            (E = c(ht, E, tt)),
            lt === null ? (X = ht) : (lt.sibling = ht),
            (lt = ht));
      return (
        t &&
          W.forEach(function (py) {
            return e(O, py);
          }),
        dt && Ea(O, tt),
        X
      );
    }
    function zt(O, E, R, H) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === m &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case d:
            t: {
              for (var X = R.key; E !== null; ) {
                if (E.key === X) {
                  if (((X = R.type), X === m)) {
                    if (E.tag === 7) {
                      i(O, E.sibling),
                        (H = u(E, R.props.children)),
                        (H.return = O),
                        (O = H);
                      break t;
                    }
                  } else if (
                    E.elementType === X ||
                    (typeof X == "object" &&
                      X !== null &&
                      X.$$typeof === V &&
                      pd(X) === E.type)
                  ) {
                    i(O, E.sibling),
                      (H = u(E, R.props)),
                      yl(H, R),
                      (H.return = O),
                      (O = H);
                    break t;
                  }
                  i(O, E);
                  break;
                } else e(O, E);
                E = E.sibling;
              }
              R.type === m
                ? ((H = _a(R.props.children, O.mode, H, R.key)),
                  (H.return = O),
                  (O = H))
                : ((H = vr(R.type, R.key, R.props, null, O.mode, H)),
                  yl(H, R),
                  (H.return = O),
                  (O = H));
            }
            return g(O);
          case h:
            t: {
              for (X = R.key; E !== null; ) {
                if (E.key === X)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === R.containerInfo &&
                    E.stateNode.implementation === R.implementation
                  ) {
                    i(O, E.sibling),
                      (H = u(E, R.children || [])),
                      (H.return = O),
                      (O = H);
                    break t;
                  } else {
                    i(O, E);
                    break;
                  }
                else e(O, E);
                E = E.sibling;
              }
              (H = fc(R, O.mode, H)), (H.return = O), (O = H);
            }
            return g(O);
          case V:
            return (X = R._init), (R = X(R._payload)), zt(O, E, R, H);
        }
        if (rn(R)) return Z(O, E, R, H);
        if ($(R)) {
          if (((X = $(R)), typeof X != "function")) throw Error(r(150));
          return (R = X.call(R)), nt(O, E, R, H);
        }
        if (typeof R.then == "function") return zt(O, E, Is(R), H);
        if (R.$$typeof === C) return zt(O, E, pr(O, R), H);
        tr(O, R);
      }
      return (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
        ? ((R = "" + R),
          E !== null && E.tag === 6
            ? (i(O, E.sibling), (H = u(E, R)), (H.return = O), (O = H))
            : (i(O, E), (H = cc(R, O.mode, H)), (H.return = O), (O = H)),
          g(O))
        : i(O, E);
    }
    return function (O, E, R, H) {
      try {
        gl = 0;
        var X = zt(O, E, R, H);
        return (pi = null), X;
      } catch (W) {
        if (W === ml) throw W;
        var lt = Oe(29, W, null, O.mode);
        return (lt.lanes = H), (lt.return = O), lt;
      } finally {
      }
    };
  }
  var Ma = gd(!0),
    yd = gd(!1),
    gi = Pe(null),
    er = Pe(0);
  function vd(t, e) {
    (t = Tn), Ct(er, t), Ct(gi, e), (Tn = t | e.baseLanes);
  }
  function yu() {
    Ct(er, Tn), Ct(gi, gi.current);
  }
  function vu() {
    (Tn = er.current), qt(gi), qt(er);
  }
  var we = Pe(null),
    Xe = null;
  function Pn(t) {
    var e = t.alternate;
    Ct(Pt, Pt.current & 1),
      Ct(we, t),
      Xe === null &&
        (e === null || gi.current !== null || e.memoizedState !== null) &&
        (Xe = t);
  }
  function bd(t) {
    if (t.tag === 22) {
      if ((Ct(Pt, Pt.current), Ct(we, t), Xe === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Xe = t);
      }
    } else Gn();
  }
  function Gn() {
    Ct(Pt, Pt.current), Ct(we, we.current);
  }
  function dn(t) {
    qt(we), Xe === t && (Xe = null), qt(Pt);
  }
  var Pt = Pe(0);
  function nr(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var i = e.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if (e.flags & 128) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var n5 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (i, s) {
                  t.push(s);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (i) {
                  return i();
                });
            };
          },
    a5 = n.unstable_scheduleCallback,
    i5 = n.unstable_NormalPriority,
    Gt = {
      $$typeof: C,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function bu() {
    return { controller: new n5(), data: new Map(), refCount: 0 };
  }
  function vl(t) {
    t.refCount--,
      t.refCount === 0 &&
        a5(i5, function () {
          t.controller.abort();
        });
  }
  var bl = null,
    xu = 0,
    yi = 0,
    vi = null;
  function l5(t, e) {
    if (bl === null) {
      var i = (bl = []);
      (xu = 0),
        (yi = wc()),
        (vi = {
          status: "pending",
          value: void 0,
          then: function (s) {
            i.push(s);
          },
        });
    }
    return xu++, e.then(xd, xd), e;
  }
  function xd() {
    if (--xu === 0 && bl !== null) {
      vi !== null && (vi.status = "fulfilled");
      var t = bl;
      (bl = null), (yi = 0), (vi = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function s5(t, e) {
    var i = [],
      s = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          i.push(u);
        },
      };
    return (
      t.then(
        function () {
          (s.status = "fulfilled"), (s.value = e);
          for (var u = 0; u < i.length; u++) (0, i[u])(e);
        },
        function (u) {
          for (s.status = "rejected", s.reason = u, u = 0; u < i.length; u++)
            (0, i[u])(void 0);
        }
      ),
      s
    );
  }
  var Sd = G.S;
  G.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      l5(t, e),
      Sd !== null && Sd(t, e);
  };
  var Da = Pe(null);
  function Su() {
    var t = Da.current;
    return t !== null ? t : bt.pooledCache;
  }
  function ar(t, e) {
    e === null ? Ct(Da, Da.current) : Ct(Da, e.pool);
  }
  function Td() {
    var t = Su();
    return t === null ? null : { parent: Gt._currentValue, pool: t };
  }
  var Yn = 0,
    it = null,
    gt = null,
    Ht = null,
    ir = !1,
    bi = !1,
    Oa = !1,
    lr = 0,
    xl = 0,
    xi = null,
    r5 = 0;
  function Vt() {
    throw Error(r(321));
  }
  function Tu(t, e) {
    if (e === null) return !1;
    for (var i = 0; i < e.length && i < t.length; i++)
      if (!de(t[i], e[i])) return !1;
    return !0;
  }
  function Cu(t, e, i, s, u, c) {
    return (
      (Yn = c),
      (it = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (G.H = t === null || t.memoizedState === null ? Ra : qn),
      (Oa = !1),
      (c = i(s, u)),
      (Oa = !1),
      bi && (c = Ad(e, i, s, u)),
      Cd(t),
      c
    );
  }
  function Cd(t) {
    G.H = Ze;
    var e = gt !== null && gt.next !== null;
    if (((Yn = 0), (Ht = gt = it = null), (ir = !1), (xl = 0), (xi = null), e))
      throw Error(r(300));
    t === null ||
      Zt ||
      ((t = t.dependencies), t !== null && mr(t) && (Zt = !0));
  }
  function Ad(t, e, i, s) {
    it = t;
    var u = 0;
    do {
      if ((bi && (xi = null), (xl = 0), (bi = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (Ht = gt = null), t.updateQueue != null)) {
        var c = t.updateQueue;
        (c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0);
      }
      (G.H = La), (c = e(i, s));
    } while (bi);
    return c;
  }
  function o5() {
    var t = G.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Sl(e) : e),
      (t = t.useState()[0]),
      (gt !== null ? gt.memoizedState : null) !== t && (it.flags |= 1024),
      e
    );
  }
  function Au() {
    var t = lr !== 0;
    return (lr = 0), t;
  }
  function Eu(t, e, i) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~i);
  }
  function wu(t) {
    if (ir) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      ir = !1;
    }
    (Yn = 0), (Ht = gt = it = null), (bi = !1), (xl = lr = 0), (xi = null);
  }
  function ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ht === null ? (it.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht;
  }
  function Bt() {
    if (gt === null) {
      var t = it.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var e = Ht === null ? it.memoizedState : Ht.next;
    if (e !== null) (Ht = e), (gt = t);
    else {
      if (t === null)
        throw it.alternate === null ? Error(r(467)) : Error(r(310));
      (gt = t),
        (t = {
          memoizedState: gt.memoizedState,
          baseState: gt.baseState,
          baseQueue: gt.baseQueue,
          queue: gt.queue,
          next: null,
        }),
        Ht === null ? (it.memoizedState = Ht = t) : (Ht = Ht.next = t);
    }
    return Ht;
  }
  var sr;
  sr = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Sl(t) {
    var e = xl;
    return (
      (xl += 1),
      xi === null && (xi = []),
      (t = hd(xi, t, e)),
      (e = it),
      (Ht === null ? e.memoizedState : Ht.next) === null &&
        ((e = e.alternate),
        (G.H = e === null || e.memoizedState === null ? Ra : qn)),
      t
    );
  }
  function rr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Sl(t);
      if (t.$$typeof === C) return te(t);
    }
    throw Error(r(438, String(t)));
  }
  function Mu(t) {
    var e = null,
      i = it.updateQueue;
    if ((i !== null && (e = i.memoCache), e == null)) {
      var s = it.alternate;
      s !== null &&
        ((s = s.updateQueue),
        s !== null &&
          ((s = s.memoCache),
          s != null &&
            (e = {
              data: s.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      i === null && ((i = sr()), (it.updateQueue = i)),
      (i.memoCache = e),
      (i = e.data[e.index]),
      i === void 0)
    )
      for (i = e.data[e.index] = Array(t), s = 0; s < t; s++) i[s] = Y;
    return e.index++, i;
  }
  function hn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function or(t) {
    var e = Bt();
    return Du(e, gt, t);
  }
  function Du(t, e, i) {
    var s = t.queue;
    if (s === null) throw Error(r(311));
    s.lastRenderedReducer = i;
    var u = t.baseQueue,
      c = s.pending;
    if (c !== null) {
      if (u !== null) {
        var g = u.next;
        (u.next = c.next), (c.next = g);
      }
      (e.baseQueue = u = c), (s.pending = null);
    }
    if (((c = t.baseState), u === null)) t.memoizedState = c;
    else {
      e = u.next;
      var v = (g = null),
        S = null,
        w = e,
        _ = !1;
      do {
        var U = w.lane & -536870913;
        if (U !== w.lane ? (ct & U) === U : (Yn & U) === U) {
          var N = w.revertLane;
          if (N === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: w.action,
                  hasEagerState: w.hasEagerState,
                  eagerState: w.eagerState,
                  next: null,
                }),
              U === yi && (_ = !0);
          else if ((Yn & N) === N) {
            (w = w.next), N === yi && (_ = !0);
            continue;
          } else
            (U = {
              lane: 0,
              revertLane: w.revertLane,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null,
            }),
              S === null ? ((v = S = U), (g = c)) : (S = S.next = U),
              (it.lanes |= N),
              (In |= N);
          (U = w.action),
            Oa && i(c, U),
            (c = w.hasEagerState ? w.eagerState : i(c, U));
        } else
          (N = {
            lane: U,
            revertLane: w.revertLane,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          }),
            S === null ? ((v = S = N), (g = c)) : (S = S.next = N),
            (it.lanes |= U),
            (In |= U);
        w = w.next;
      } while (w !== null && w !== e);
      if (
        (S === null ? (g = c) : (S.next = v),
        !de(c, t.memoizedState) && ((Zt = !0), _ && ((i = vi), i !== null)))
      )
        throw i;
      (t.memoizedState = c),
        (t.baseState = g),
        (t.baseQueue = S),
        (s.lastRenderedState = c);
    }
    return u === null && (s.lanes = 0), [t.memoizedState, s.dispatch];
  }
  function Ou(t) {
    var e = Bt(),
      i = e.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = t;
    var s = i.dispatch,
      u = i.pending,
      c = e.memoizedState;
    if (u !== null) {
      i.pending = null;
      var g = (u = u.next);
      do (c = t(c, g.action)), (g = g.next);
      while (g !== u);
      de(c, e.memoizedState) || (Zt = !0),
        (e.memoizedState = c),
        e.baseQueue === null && (e.baseState = c),
        (i.lastRenderedState = c);
    }
    return [c, s];
  }
  function Ed(t, e, i) {
    var s = it,
      u = Bt(),
      c = dt;
    if (c) {
      if (i === void 0) throw Error(r(407));
      i = i();
    } else i = e();
    var g = !de((gt || u).memoizedState, i);
    if (
      (g && ((u.memoizedState = i), (Zt = !0)),
      (u = u.queue),
      zu(Dd.bind(null, s, u, t), [t]),
      u.getSnapshot !== e || g || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        Si(9, Md.bind(null, s, u, i, e), { destroy: void 0 }, null),
        bt === null)
      )
        throw Error(r(349));
      c || Yn & 60 || wd(s, e, i);
    }
    return i;
  }
  function wd(t, e, i) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: i }),
      (e = it.updateQueue),
      e === null
        ? ((e = sr()), (it.updateQueue = e), (e.stores = [t]))
        : ((i = e.stores), i === null ? (e.stores = [t]) : i.push(t));
  }
  function Md(t, e, i, s) {
    (e.value = i), (e.getSnapshot = s), Od(e) && Rd(t);
  }
  function Dd(t, e, i) {
    return i(function () {
      Od(e) && Rd(t);
    });
  }
  function Od(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var i = e();
      return !de(t, i);
    } catch {
      return !0;
    }
  }
  function Rd(t) {
    var e = kn(t, 2);
    e !== null && le(e, t, 2);
  }
  function Ru(t) {
    var e = ue();
    if (typeof t == "function") {
      var i = t;
      if (((t = i()), Oa)) {
        Hn(!0);
        try {
          i();
        } finally {
          Hn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Ld(t, e, i, s) {
    return (t.baseState = i), Du(t, gt, typeof s == "function" ? s : hn);
  }
  function u5(t, e, i, s, u) {
    if (fr(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var c = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          c.listeners.push(g);
        },
      };
      G.T !== null ? i(!0) : (c.isTransition = !1),
        s(c),
        (i = e.pending),
        i === null
          ? ((c.next = e.pending = c), zd(e, c))
          : ((c.next = i.next), (e.pending = i.next = c));
    }
  }
  function zd(t, e) {
    var i = e.action,
      s = e.payload,
      u = t.state;
    if (e.isTransition) {
      var c = G.T,
        g = {};
      G.T = g;
      try {
        var v = i(u, s),
          S = G.S;
        S !== null && S(g, v), Nd(t, e, v);
      } catch (w) {
        Lu(t, e, w);
      } finally {
        G.T = c;
      }
    } else
      try {
        (c = i(u, s)), Nd(t, e, c);
      } catch (w) {
        Lu(t, e, w);
      }
  }
  function Nd(t, e, i) {
    i !== null && typeof i == "object" && typeof i.then == "function"
      ? i.then(
          function (s) {
            Vd(t, e, s);
          },
          function (s) {
            return Lu(t, e, s);
          }
        )
      : Vd(t, e, i);
  }
  function Vd(t, e, i) {
    (e.status = "fulfilled"),
      (e.value = i),
      jd(e),
      (t.state = i),
      (e = t.pending),
      e !== null &&
        ((i = e.next),
        i === e ? (t.pending = null) : ((i = i.next), (e.next = i), zd(t, i)));
  }
  function Lu(t, e, i) {
    var s = t.pending;
    if (((t.pending = null), s !== null)) {
      s = s.next;
      do (e.status = "rejected"), (e.reason = i), jd(e), (e = e.next);
      while (e !== s);
    }
    t.action = null;
  }
  function jd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function _d(t, e) {
    return e;
  }
  function Hd(t, e) {
    if (dt) {
      var i = bt.formState;
      if (i !== null) {
        t: {
          var s = it;
          if (dt) {
            if (Wt) {
              e: {
                for (var u = Wt, c = qe; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break e;
                  }
                  if (((u = He(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (c = u.data), (u = c === "F!" || c === "F" ? u : null);
              }
              if (u) {
                (Wt = He(u.nextSibling)), (s = u.data === "F!");
                break t;
              }
            }
            wa(s);
          }
          s = !1;
        }
        s && (e = i[0]);
      }
    }
    return (
      (i = ue()),
      (i.memoizedState = i.baseState = e),
      (s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _d,
        lastRenderedState: e,
      }),
      (i.queue = s),
      (i = eh.bind(null, it, s)),
      (s.dispatch = i),
      (s = Ru(!1)),
      (c = Hu.bind(null, it, !1, s.queue)),
      (s = ue()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (s.queue = u),
      (i = u5.bind(null, it, u, c, i)),
      (u.dispatch = i),
      (s.memoizedState = t),
      [e, i, !1]
    );
  }
  function Bd(t) {
    var e = Bt();
    return Ud(e, gt, t);
  }
  function Ud(t, e, i) {
    (e = Du(t, e, _d)[0]),
      (t = or(hn)[0]),
      (e =
        typeof e == "object" && e !== null && typeof e.then == "function"
          ? Sl(e)
          : e);
    var s = Bt(),
      u = s.queue,
      c = u.dispatch;
    return (
      i !== s.memoizedState &&
        ((it.flags |= 2048),
        Si(9, c5.bind(null, u, i), { destroy: void 0 }, null)),
      [e, c, t]
    );
  }
  function c5(t, e) {
    t.action = e;
  }
  function kd(t) {
    var e = Bt(),
      i = gt;
    if (i !== null) return Ud(e, i, t);
    Bt(), (e = e.memoizedState), (i = Bt());
    var s = i.queue.dispatch;
    return (i.memoizedState = t), [e, s, !1];
  }
  function Si(t, e, i, s) {
    return (
      (t = { tag: t, create: e, inst: i, deps: s, next: null }),
      (e = it.updateQueue),
      e === null && ((e = sr()), (it.updateQueue = e)),
      (i = e.lastEffect),
      i === null
        ? (e.lastEffect = t.next = t)
        : ((s = i.next), (i.next = t), (t.next = s), (e.lastEffect = t)),
      t
    );
  }
  function Pd() {
    return Bt().memoizedState;
  }
  function ur(t, e, i, s) {
    var u = ue();
    (it.flags |= t),
      (u.memoizedState = Si(
        1 | e,
        i,
        { destroy: void 0 },
        s === void 0 ? null : s
      ));
  }
  function cr(t, e, i, s) {
    var u = Bt();
    s = s === void 0 ? null : s;
    var c = u.memoizedState.inst;
    gt !== null && s !== null && Tu(s, gt.memoizedState.deps)
      ? (u.memoizedState = Si(e, i, c, s))
      : ((it.flags |= t), (u.memoizedState = Si(1 | e, i, c, s)));
  }
  function Gd(t, e) {
    ur(8390656, 8, t, e);
  }
  function zu(t, e) {
    cr(2048, 8, t, e);
  }
  function Yd(t, e) {
    return cr(4, 2, t, e);
  }
  function qd(t, e) {
    return cr(4, 4, t, e);
  }
  function Xd(t, e) {
    if (typeof e == "function") {
      t = t();
      var i = e(t);
      return function () {
        typeof i == "function" ? i() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Zd(t, e, i) {
    (i = i != null ? i.concat([t]) : null), cr(4, 4, Xd.bind(null, e, t), i);
  }
  function Nu() {}
  function Fd(t, e) {
    var i = Bt();
    e = e === void 0 ? null : e;
    var s = i.memoizedState;
    return e !== null && Tu(e, s[1]) ? s[0] : ((i.memoizedState = [t, e]), t);
  }
  function Kd(t, e) {
    var i = Bt();
    e = e === void 0 ? null : e;
    var s = i.memoizedState;
    if (e !== null && Tu(e, s[1])) return s[0];
    if (((s = t()), Oa)) {
      Hn(!0);
      try {
        t();
      } finally {
        Hn(!1);
      }
    }
    return (i.memoizedState = [s, e]), s;
  }
  function Vu(t, e, i) {
    return i === void 0 || Yn & 1073741824
      ? (t.memoizedState = e)
      : ((t.memoizedState = i), (t = Wh()), (it.lanes |= t), (In |= t), i);
  }
  function Qd(t, e, i, s) {
    return de(i, e)
      ? i
      : gi.current !== null
      ? ((t = Vu(t, i, s)), de(t, e) || (Zt = !0), t)
      : Yn & 42
      ? ((t = Wh()), (it.lanes |= t), (In |= t), e)
      : ((Zt = !0), (t.memoizedState = i));
  }
  function Wd(t, e, i, s, u) {
    var c = ft.p;
    ft.p = c !== 0 && 8 > c ? c : 8;
    var g = G.T,
      v = {};
    (G.T = v), Hu(t, !1, e, i);
    try {
      var S = u(),
        w = G.S;
      if (
        (w !== null && w(v, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var _ = s5(S, s);
        Tl(t, e, _, ge(t));
      } else Tl(t, e, s, ge(t));
    } catch (U) {
      Tl(t, e, { then: function () {}, status: "rejected", reason: U }, ge());
    } finally {
      (ft.p = c), (G.T = g);
    }
  }
  function f5() {}
  function ju(t, e, i, s) {
    if (t.tag !== 5) throw Error(r(476));
    var u = $d(t).queue;
    Wd(
      t,
      u,
      e,
      be,
      i === null
        ? f5
        : function () {
            return Jd(t), i(s);
          }
    );
  }
  function $d(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: be,
      baseState: be,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hn,
        lastRenderedState: be,
      },
      next: null,
    };
    var i = {};
    return (
      (e.next = {
        memoizedState: i,
        baseState: i,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: hn,
          lastRenderedState: i,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Jd(t) {
    var e = $d(t).next.queue;
    Tl(t, e, {}, ge());
  }
  function _u() {
    return te(Gl);
  }
  function Id() {
    return Bt().memoizedState;
  }
  function th() {
    return Bt().memoizedState;
  }
  function d5(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var i = ge();
          t = Fn(i);
          var s = Kn(e, t, i);
          s !== null && (le(s, e, i), El(s, e, i)),
            (e = { cache: bu() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function h5(t, e, i) {
    var s = ge();
    (i = {
      lane: s,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      fr(t)
        ? nh(e, i)
        : ((i = du(t, e, i, s)), i !== null && (le(i, t, s), ah(i, e, s)));
  }
  function eh(t, e, i) {
    var s = ge();
    Tl(t, e, i, s);
  }
  function Tl(t, e, i, s) {
    var u = {
      lane: s,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (fr(t)) nh(e, u);
    else {
      var c = t.alternate;
      if (
        t.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = e.lastRenderedReducer), c !== null)
      )
        try {
          var g = e.lastRenderedState,
            v = c(g, i);
          if (((u.hasEagerState = !0), (u.eagerState = v), de(v, g)))
            return Ks(t, e, u, 0), bt === null && Fs(), !1;
        } catch {
        } finally {
        }
      if (((i = du(t, e, u, s)), i !== null))
        return le(i, t, s), ah(i, e, s), !0;
    }
    return !1;
  }
  function Hu(t, e, i, s) {
    if (
      ((s = {
        lane: 2,
        revertLane: wc(),
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      fr(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = du(t, i, s, 2)), e !== null && le(e, t, 2);
  }
  function fr(t) {
    var e = t.alternate;
    return t === it || (e !== null && e === it);
  }
  function nh(t, e) {
    bi = ir = !0;
    var i = t.pending;
    i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (t.pending = e);
  }
  function ah(t, e, i) {
    if (i & 4194176) {
      var s = e.lanes;
      (s &= t.pendingLanes), (i |= s), (e.lanes = i), m2(t, i);
    }
  }
  var Ze = {
    readContext: te,
    use: rr,
    useCallback: Vt,
    useContext: Vt,
    useEffect: Vt,
    useImperativeHandle: Vt,
    useLayoutEffect: Vt,
    useInsertionEffect: Vt,
    useMemo: Vt,
    useReducer: Vt,
    useRef: Vt,
    useState: Vt,
    useDebugValue: Vt,
    useDeferredValue: Vt,
    useTransition: Vt,
    useSyncExternalStore: Vt,
    useId: Vt,
  };
  (Ze.useCacheRefresh = Vt),
    (Ze.useMemoCache = Vt),
    (Ze.useHostTransitionStatus = Vt),
    (Ze.useFormState = Vt),
    (Ze.useActionState = Vt),
    (Ze.useOptimistic = Vt);
  var Ra = {
    readContext: te,
    use: rr,
    useCallback: function (t, e) {
      return (ue().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: te,
    useEffect: Gd,
    useImperativeHandle: function (t, e, i) {
      (i = i != null ? i.concat([t]) : null),
        ur(4194308, 4, Xd.bind(null, e, t), i);
    },
    useLayoutEffect: function (t, e) {
      return ur(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      ur(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var i = ue();
      e = e === void 0 ? null : e;
      var s = t();
      if (Oa) {
        Hn(!0);
        try {
          t();
        } finally {
          Hn(!1);
        }
      }
      return (i.memoizedState = [s, e]), s;
    },
    useReducer: function (t, e, i) {
      var s = ue();
      if (i !== void 0) {
        var u = i(e);
        if (Oa) {
          Hn(!0);
          try {
            i(e);
          } finally {
            Hn(!1);
          }
        }
      } else u = e;
      return (
        (s.memoizedState = s.baseState = u),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: u,
        }),
        (s.queue = t),
        (t = t.dispatch = h5.bind(null, it, t)),
        [s.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = ue();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: function (t) {
      t = Ru(t);
      var e = t.queue,
        i = eh.bind(null, it, e);
      return (e.dispatch = i), [t.memoizedState, i];
    },
    useDebugValue: Nu,
    useDeferredValue: function (t, e) {
      var i = ue();
      return Vu(i, t, e);
    },
    useTransition: function () {
      var t = Ru(!1);
      return (
        (t = Wd.bind(null, it, t.queue, !0, !1)),
        (ue().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, e, i) {
      var s = it,
        u = ue();
      if (dt) {
        if (i === void 0) throw Error(r(407));
        i = i();
      } else {
        if (((i = e()), bt === null)) throw Error(r(349));
        ct & 60 || wd(s, e, i);
      }
      u.memoizedState = i;
      var c = { value: i, getSnapshot: e };
      return (
        (u.queue = c),
        Gd(Dd.bind(null, s, c, t), [t]),
        (s.flags |= 2048),
        Si(9, Md.bind(null, s, c, i, e), { destroy: void 0 }, null),
        i
      );
    },
    useId: function () {
      var t = ue(),
        e = bt.identifierPrefix;
      if (dt) {
        var i = fn,
          s = cn;
        (i = (s & ~(1 << (32 - fe(s) - 1))).toString(32) + i),
          (e = ":" + e + "R" + i),
          (i = lr++),
          0 < i && (e += "H" + i.toString(32)),
          (e += ":");
      } else (i = r5++), (e = ":" + e + "r" + i.toString(32) + ":");
      return (t.memoizedState = e);
    },
    useCacheRefresh: function () {
      return (ue().memoizedState = d5.bind(null, it));
    },
  };
  (Ra.useMemoCache = Mu),
    (Ra.useHostTransitionStatus = _u),
    (Ra.useFormState = Hd),
    (Ra.useActionState = Hd),
    (Ra.useOptimistic = function (t) {
      var e = ue();
      e.memoizedState = e.baseState = t;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (e.queue = i), (e = Hu.bind(null, it, !0, i)), (i.dispatch = e), [t, e]
      );
    });
  var qn = {
    readContext: te,
    use: rr,
    useCallback: Fd,
    useContext: te,
    useEffect: zu,
    useImperativeHandle: Zd,
    useInsertionEffect: Yd,
    useLayoutEffect: qd,
    useMemo: Kd,
    useReducer: or,
    useRef: Pd,
    useState: function () {
      return or(hn);
    },
    useDebugValue: Nu,
    useDeferredValue: function (t, e) {
      var i = Bt();
      return Qd(i, gt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = or(hn)[0],
        e = Bt().memoizedState;
      return [typeof t == "boolean" ? t : Sl(t), e];
    },
    useSyncExternalStore: Ed,
    useId: Id,
  };
  (qn.useCacheRefresh = th),
    (qn.useMemoCache = Mu),
    (qn.useHostTransitionStatus = _u),
    (qn.useFormState = Bd),
    (qn.useActionState = Bd),
    (qn.useOptimistic = function (t, e) {
      var i = Bt();
      return Ld(i, gt, t, e);
    });
  var La = {
    readContext: te,
    use: rr,
    useCallback: Fd,
    useContext: te,
    useEffect: zu,
    useImperativeHandle: Zd,
    useInsertionEffect: Yd,
    useLayoutEffect: qd,
    useMemo: Kd,
    useReducer: Ou,
    useRef: Pd,
    useState: function () {
      return Ou(hn);
    },
    useDebugValue: Nu,
    useDeferredValue: function (t, e) {
      var i = Bt();
      return gt === null ? Vu(i, t, e) : Qd(i, gt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Ou(hn)[0],
        e = Bt().memoizedState;
      return [typeof t == "boolean" ? t : Sl(t), e];
    },
    useSyncExternalStore: Ed,
    useId: Id,
  };
  (La.useCacheRefresh = th),
    (La.useMemoCache = Mu),
    (La.useHostTransitionStatus = _u),
    (La.useFormState = kd),
    (La.useActionState = kd),
    (La.useOptimistic = function (t, e) {
      var i = Bt();
      return gt !== null
        ? Ld(i, gt, t, e)
        : ((i.baseState = t), [t, i.queue.dispatch]);
    });
  function Bu(t, e, i, s) {
    (e = t.memoizedState),
      (i = i(s, e)),
      (i = i == null ? e : I({}, e, i)),
      (t.memoizedState = i),
      t.lanes === 0 && (t.updateQueue.baseState = i);
  }
  var Uu = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? J(t) === t : !1;
    },
    enqueueSetState: function (t, e, i) {
      t = t._reactInternals;
      var s = ge(),
        u = Fn(s);
      (u.payload = e),
        i != null && (u.callback = i),
        (e = Kn(t, u, s)),
        e !== null && (le(e, t, s), El(e, t, s));
    },
    enqueueReplaceState: function (t, e, i) {
      t = t._reactInternals;
      var s = ge(),
        u = Fn(s);
      (u.tag = 1),
        (u.payload = e),
        i != null && (u.callback = i),
        (e = Kn(t, u, s)),
        e !== null && (le(e, t, s), El(e, t, s));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var i = ge(),
        s = Fn(i);
      (s.tag = 2),
        e != null && (s.callback = e),
        (e = Kn(t, s, i)),
        e !== null && (le(e, t, i), El(e, t, i));
    },
  };
  function ih(t, e, i, s, u, c, g) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(s, c, g)
        : e.prototype && e.prototype.isPureReactComponent
        ? !ul(i, s) || !ul(u, c)
        : !0
    );
  }
  function lh(t, e, i, s) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(i, s),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(i, s),
      e.state !== t && Uu.enqueueReplaceState(e, e.state, null);
  }
  function za(t, e) {
    var i = e;
    if ("ref" in e) {
      i = {};
      for (var s in e) s !== "ref" && (i[s] = e[s]);
    }
    if ((t = t.defaultProps)) {
      i === e && (i = I({}, i));
      for (var u in t) i[u] === void 0 && (i[u] = t[u]);
    }
    return i;
  }
  var dr =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function sh(t) {
    dr(t);
  }
  function rh(t) {
    console.error(t);
  }
  function oh(t) {
    dr(t);
  }
  function hr(t, e) {
    try {
      var i = t.onUncaughtError;
      i(e.value, { componentStack: e.stack });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function uh(t, e, i) {
    try {
      var s = t.onCaughtError;
      s(i.value, {
        componentStack: i.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function ku(t, e, i) {
    return (
      (i = Fn(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        hr(t, e);
      }),
      i
    );
  }
  function ch(t) {
    return (t = Fn(t)), (t.tag = 3), t;
  }
  function fh(t, e, i, s) {
    var u = i.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = s.value;
      (t.payload = function () {
        return u(c);
      }),
        (t.callback = function () {
          uh(e, i, s);
        });
    }
    var g = i.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (t.callback = function () {
        uh(e, i, s),
          typeof u != "function" &&
            (ta === null ? (ta = new Set([this])) : ta.add(this));
        var v = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function m5(t, e, i, s, u) {
    if (
      ((i.flags |= 32768),
      s !== null && typeof s == "object" && typeof s.then == "function")
    ) {
      if (
        ((e = i.alternate),
        e !== null && Al(e, i, u, !0),
        (i = we.current),
        i !== null)
      ) {
        switch (i.tag) {
          case 13:
            return (
              Xe === null ? Sc() : i.alternate === null && Lt === 0 && (Lt = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = u),
              s === gu
                ? (i.flags |= 16384)
                : ((e = i.updateQueue),
                  e === null ? (i.updateQueue = new Set([s])) : e.add(s),
                  Cc(t, s, u)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              s === gu
                ? (i.flags |= 16384)
                : ((e = i.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s]),
                      }),
                      (i.updateQueue = e))
                    : ((i = e.retryQueue),
                      i === null ? (e.retryQueue = new Set([s])) : i.add(s)),
                  Cc(t, s, u)),
              !1
            );
        }
        throw Error(r(435, i.tag));
      }
      return Cc(t, s, u), Sc(), !1;
    }
    if (dt)
      return (
        (e = we.current),
        e !== null
          ? (!(e.flags & 65536) && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            s !== pu && ((t = Error(r(422), { cause: s })), hl(Ce(t, i))))
          : (s !== pu && ((e = Error(r(423), { cause: s })), hl(Ce(e, i))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (s = Ce(s, i)),
            (u = ku(t.stateNode, s, u)),
            ec(t, u),
            Lt !== 4 && (Lt = 2)),
        !1
      );
    var c = Error(r(520), { cause: s });
    if (
      ((c = Ce(c, i)),
      Nl === null ? (Nl = [c]) : Nl.push(c),
      Lt !== 4 && (Lt = 2),
      e === null)
    )
      return !0;
    (s = Ce(s, i)), (i = e);
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (t = u & -u),
            (i.lanes |= t),
            (t = ku(i.stateNode, s, t)),
            ec(i, t),
            !1
          );
        case 1:
          if (
            ((e = i.type),
            (c = i.stateNode),
            (i.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (ta === null || !ta.has(c)))))
          )
            return (
              (i.flags |= 65536),
              (u &= -u),
              (i.lanes |= u),
              (u = ch(u)),
              fh(u, t, i, s),
              ec(i, u),
              !1
            );
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var dh = Error(r(461)),
    Zt = !1;
  function $t(t, e, i, s) {
    e.child = t === null ? yd(e, null, i, s) : Ma(e, t.child, i, s);
  }
  function hh(t, e, i, s, u) {
    i = i.render;
    var c = e.ref;
    if ("ref" in s) {
      var g = {};
      for (var v in s) v !== "ref" && (g[v] = s[v]);
    } else g = s;
    return (
      Va(e),
      (s = Cu(t, e, i, g, c, u)),
      (v = Au()),
      t !== null && !Zt
        ? (Eu(t, e, u), mn(t, e, u))
        : (dt && v && hu(e), (e.flags |= 1), $t(t, e, s, u), e.child)
    );
  }
  function mh(t, e, i, s, u) {
    if (t === null) {
      var c = i.type;
      return typeof c == "function" &&
        !uc(c) &&
        c.defaultProps === void 0 &&
        i.compare === null
        ? ((e.tag = 15), (e.type = c), ph(t, e, c, s, u))
        : ((t = vr(i.type, null, s, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((c = t.child), !Qu(t, u))) {
      var g = c.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : ul), i(g, s) && t.ref === e.ref)
      )
        return mn(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = Jn(c, s)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function ph(t, e, i, s, u) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (ul(c, s) && t.ref === e.ref)
        if (((Zt = !1), (e.pendingProps = s = c), Qu(t, u)))
          t.flags & 131072 && (Zt = !0);
        else return (e.lanes = t.lanes), mn(t, e, u);
    }
    return Pu(t, e, i, s, u);
  }
  function gh(t, e, i) {
    var s = e.pendingProps,
      u = s.children,
      c = (e.stateNode._pendingVisibility & 2) !== 0,
      g = t !== null ? t.memoizedState : null;
    if ((Cl(t, e), s.mode === "hidden" || c)) {
      if (e.flags & 128) {
        if (((s = g !== null ? g.baseLanes | i : i), t !== null)) {
          for (u = e.child = t.child, c = 0; u !== null; )
            (c = c | u.lanes | u.childLanes), (u = u.sibling);
          e.childLanes = c & ~s;
        } else (e.childLanes = 0), (e.child = null);
        return yh(t, e, s, i);
      }
      if (i & 536870912)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ar(e, g !== null ? g.cachePool : null),
          g !== null ? vd(e, g) : yu(),
          bd(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          yh(t, e, g !== null ? g.baseLanes | i : i, i)
        );
    } else
      g !== null
        ? (ar(e, g.cachePool), vd(e, g), Gn(), (e.memoizedState = null))
        : (t !== null && ar(e, null), yu(), Gn());
    return $t(t, e, u, i), e.child;
  }
  function yh(t, e, i, s) {
    var u = Su();
    return (
      (u = u === null ? null : { parent: Gt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: i, cachePool: u }),
      t !== null && ar(e, null),
      yu(),
      bd(e),
      t !== null && Al(t, e, s, !0),
      null
    );
  }
  function Cl(t, e) {
    var i = e.ref;
    if (i === null) t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(r(284));
      (t === null || t.ref !== i) && (e.flags |= 2097664);
    }
  }
  function Pu(t, e, i, s, u) {
    return (
      Va(e),
      (i = Cu(t, e, i, s, void 0, u)),
      (s = Au()),
      t !== null && !Zt
        ? (Eu(t, e, u), mn(t, e, u))
        : (dt && s && hu(e), (e.flags |= 1), $t(t, e, i, u), e.child)
    );
  }
  function vh(t, e, i, s, u, c) {
    return (
      Va(e),
      (e.updateQueue = null),
      (i = Ad(e, s, i, u)),
      Cd(t),
      (s = Au()),
      t !== null && !Zt
        ? (Eu(t, e, c), mn(t, e, c))
        : (dt && s && hu(e), (e.flags |= 1), $t(t, e, i, c), e.child)
    );
  }
  function bh(t, e, i, s, u) {
    if ((Va(e), e.stateNode === null)) {
      var c = di,
        g = i.contextType;
      typeof g == "object" && g !== null && (c = te(g)),
        (c = new i(s, c)),
        (e.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = Uu),
        (e.stateNode = c),
        (c._reactInternals = e),
        (c = e.stateNode),
        (c.props = s),
        (c.state = e.memoizedState),
        (c.refs = {}),
        Iu(e),
        (g = i.contextType),
        (c.context = typeof g == "object" && g !== null ? te(g) : di),
        (c.state = e.memoizedState),
        (g = i.getDerivedStateFromProps),
        typeof g == "function" && (Bu(e, i, g, s), (c.state = e.memoizedState)),
        typeof i.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((g = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          g !== c.state && Uu.enqueueReplaceState(c, c.state, null),
          Ml(e, s, c, u),
          wl(),
          (c.state = e.memoizedState)),
        typeof c.componentDidMount == "function" && (e.flags |= 4194308),
        (s = !0);
    } else if (t === null) {
      c = e.stateNode;
      var v = e.memoizedProps,
        S = za(i, v);
      c.props = S;
      var w = c.context,
        _ = i.contextType;
      (g = di), typeof _ == "object" && _ !== null && (g = te(_));
      var U = i.getDerivedStateFromProps;
      (_ =
        typeof U == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        _ ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((v || w !== g) && lh(e, c, s, g)),
        (Zn = !1);
      var N = e.memoizedState;
      (c.state = N),
        Ml(e, s, c, u),
        wl(),
        (w = e.memoizedState),
        v || N !== w || Zn
          ? (typeof U == "function" && (Bu(e, i, U, s), (w = e.memoizedState)),
            (S = Zn || ih(e, i, S, s, N, w, g))
              ? (_ ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = s),
                (e.memoizedState = w)),
            (c.props = s),
            (c.state = w),
            (c.context = g),
            (s = S))
          : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            (s = !1));
    } else {
      (c = e.stateNode),
        tc(t, e),
        (g = e.memoizedProps),
        (_ = za(i, g)),
        (c.props = _),
        (U = e.pendingProps),
        (N = c.context),
        (w = i.contextType),
        (S = di),
        typeof w == "object" && w !== null && (S = te(w)),
        (v = i.getDerivedStateFromProps),
        (w =
          typeof v == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((g !== U || N !== S) && lh(e, c, s, S)),
        (Zn = !1),
        (N = e.memoizedState),
        (c.state = N),
        Ml(e, s, c, u),
        wl();
      var j = e.memoizedState;
      g !== U ||
      N !== j ||
      Zn ||
      (t !== null && t.dependencies !== null && mr(t.dependencies))
        ? (typeof v == "function" && (Bu(e, i, v, s), (j = e.memoizedState)),
          (_ =
            Zn ||
            ih(e, i, _, s, N, j, S) ||
            (t !== null && t.dependencies !== null && mr(t.dependencies)))
            ? (w ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(s, j, S),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(s, j, S)),
              typeof c.componentDidUpdate == "function" && (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (g === t.memoizedProps && N === t.memoizedState) ||
                (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (g === t.memoizedProps && N === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = s),
              (e.memoizedState = j)),
          (c.props = s),
          (c.state = j),
          (c.context = S),
          (s = _))
        : (typeof c.componentDidUpdate != "function" ||
            (g === t.memoizedProps && N === t.memoizedState) ||
            (e.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (g === t.memoizedProps && N === t.memoizedState) ||
            (e.flags |= 1024),
          (s = !1));
    }
    return (
      (c = s),
      Cl(t, e),
      (s = (e.flags & 128) !== 0),
      c || s
        ? ((c = e.stateNode),
          (i =
            s && typeof i.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (e.flags |= 1),
          t !== null && s
            ? ((e.child = Ma(e, t.child, null, u)),
              (e.child = Ma(e, null, i, u)))
            : $t(t, e, i, u),
          (e.memoizedState = c.state),
          (t = e.child))
        : (t = mn(t, e, u)),
      t
    );
  }
  function xh(t, e, i, s) {
    return dl(), (e.flags |= 256), $t(t, e, i, s), e.child;
  }
  var Gu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yu(t) {
    return { baseLanes: t, cachePool: Td() };
  }
  function qu(t, e, i) {
    return (t = t !== null ? t.childLanes & ~i : 0), e && (t |= Re), t;
  }
  function Sh(t, e, i) {
    var s = e.pendingProps,
      u = !1,
      c = (e.flags & 128) !== 0,
      g;
    if (
      ((g = c) ||
        (g =
          t !== null && t.memoizedState === null ? !1 : (Pt.current & 2) !== 0),
      g && ((u = !0), (e.flags &= -129)),
      (g = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (dt) {
        if ((u ? Pn(e) : Gn(), dt)) {
          var v = Wt,
            S;
          if ((S = v)) {
            t: {
              for (S = v, v = qe; S.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (((S = He(S.nextSibling)), S === null)) {
                  v = null;
                  break t;
                }
              }
              v = S;
            }
            v !== null
              ? ((e.memoizedState = {
                  dehydrated: v,
                  treeContext: Aa !== null ? { id: cn, overflow: fn } : null,
                  retryLane: 536870912,
                }),
                (S = Oe(18, null, null, 0)),
                (S.stateNode = v),
                (S.return = e),
                (e.child = S),
                (ie = e),
                (Wt = null),
                (S = !0))
              : (S = !1);
          }
          S || wa(e);
        }
        if (
          ((v = e.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return v.data === "$!" ? (e.lanes = 16) : (e.lanes = 536870912), null;
        dn(e);
      }
      return (
        (v = s.children),
        (s = s.fallback),
        u
          ? (Gn(),
            (u = e.mode),
            (v = Zu({ mode: "hidden", children: v }, u)),
            (s = _a(s, u, i, null)),
            (v.return = e),
            (s.return = e),
            (v.sibling = s),
            (e.child = v),
            (u = e.child),
            (u.memoizedState = Yu(i)),
            (u.childLanes = qu(t, g, i)),
            (e.memoizedState = Gu),
            s)
          : (Pn(e), Xu(e, v))
      );
    }
    if (
      ((S = t.memoizedState), S !== null && ((v = S.dehydrated), v !== null))
    ) {
      if (c)
        e.flags & 256
          ? (Pn(e), (e.flags &= -257), (e = Fu(t, e, i)))
          : e.memoizedState !== null
          ? (Gn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (Gn(),
            (u = s.fallback),
            (v = e.mode),
            (s = Zu({ mode: "visible", children: s.children }, v)),
            (u = _a(u, v, i, null)),
            (u.flags |= 2),
            (s.return = e),
            (u.return = e),
            (s.sibling = u),
            (e.child = s),
            Ma(e, t.child, null, i),
            (s = e.child),
            (s.memoizedState = Yu(i)),
            (s.childLanes = qu(t, g, i)),
            (e.memoizedState = Gu),
            (e = u));
      else if ((Pn(e), v.data === "$!")) {
        if (((g = v.nextSibling && v.nextSibling.dataset), g)) var w = g.dgst;
        (g = w),
          (s = Error(r(419))),
          (s.stack = ""),
          (s.digest = g),
          hl({ value: s, source: null, stack: null }),
          (e = Fu(t, e, i));
      } else if (
        (Zt || Al(t, e, i, !1), (g = (i & t.childLanes) !== 0), Zt || g)
      ) {
        if (((g = bt), g !== null)) {
          if (((s = i & -i), s & 42)) s = 1;
          else
            switch (s) {
              case 2:
                s = 1;
                break;
              case 8:
                s = 4;
                break;
              case 32:
                s = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                s = 64;
                break;
              case 268435456:
                s = 134217728;
                break;
              default:
                s = 0;
            }
          if (
            ((s = s & (g.suspendedLanes | i) ? 0 : s),
            s !== 0 && s !== S.retryLane)
          )
            throw ((S.retryLane = s), kn(t, s), le(g, t, s), dh);
        }
        v.data === "$?" || Sc(), (e = Fu(t, e, i));
      } else
        v.data === "$?"
          ? ((e.flags |= 128),
            (e.child = t.child),
            (e = O5.bind(null, t)),
            (v._reactRetry = e),
            (e = null))
          : ((t = S.treeContext),
            (Wt = He(v.nextSibling)),
            (ie = e),
            (dt = !0),
            (je = null),
            (qe = !1),
            t !== null &&
              ((Ae[Ee++] = cn),
              (Ae[Ee++] = fn),
              (Ae[Ee++] = Aa),
              (cn = t.id),
              (fn = t.overflow),
              (Aa = e)),
            (e = Xu(e, s.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (Gn(),
        (u = s.fallback),
        (v = e.mode),
        (S = t.child),
        (w = S.sibling),
        (s = Jn(S, { mode: "hidden", children: s.children })),
        (s.subtreeFlags = S.subtreeFlags & 31457280),
        w !== null ? (u = Jn(w, u)) : ((u = _a(u, v, i, null)), (u.flags |= 2)),
        (u.return = e),
        (s.return = e),
        (s.sibling = u),
        (e.child = s),
        (s = u),
        (u = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = Yu(i))
          : ((S = v.cachePool),
            S !== null
              ? ((w = Gt._currentValue),
                (S = S.parent !== w ? { parent: w, pool: w } : S))
              : (S = Td()),
            (v = { baseLanes: v.baseLanes | i, cachePool: S })),
        (u.memoizedState = v),
        (u.childLanes = qu(t, g, i)),
        (e.memoizedState = Gu),
        s)
      : (Pn(e),
        (i = t.child),
        (t = i.sibling),
        (i = Jn(i, { mode: "visible", children: s.children })),
        (i.return = e),
        (i.sibling = null),
        t !== null &&
          ((g = e.deletions),
          g === null ? ((e.deletions = [t]), (e.flags |= 16)) : g.push(t)),
        (e.child = i),
        (e.memoizedState = null),
        i);
  }
  function Xu(t, e) {
    return (
      (e = Zu({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Zu(t, e) {
    return Fh(t, e, 0, null);
  }
  function Fu(t, e, i) {
    return (
      Ma(e, t.child, null, i),
      (t = Xu(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Th(t, e, i) {
    t.lanes |= e;
    var s = t.alternate;
    s !== null && (s.lanes |= e), $u(t.return, e, i);
  }
  function Ku(t, e, i, s, u) {
    var c = t.memoizedState;
    c === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: i,
          tailMode: u,
        })
      : ((c.isBackwards = e),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = s),
        (c.tail = i),
        (c.tailMode = u));
  }
  function Ch(t, e, i) {
    var s = e.pendingProps,
      u = s.revealOrder,
      c = s.tail;
    if (($t(t, e, s.children, i), (s = Pt.current), s & 2))
      (s = (s & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && t.flags & 128)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Th(t, i, e);
          else if (t.tag === 19) Th(t, i, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      s &= 1;
    }
    switch ((Ct(Pt, s), u)) {
      case "forwards":
        for (i = e.child, u = null; i !== null; )
          (t = i.alternate),
            t !== null && nr(t) === null && (u = i),
            (i = i.sibling);
        (i = u),
          i === null
            ? ((u = e.child), (e.child = null))
            : ((u = i.sibling), (i.sibling = null)),
          Ku(e, !1, u, i, c);
        break;
      case "backwards":
        for (i = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && nr(t) === null)) {
            e.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = i), (i = u), (u = t);
        }
        Ku(e, !0, i, null, c);
        break;
      case "together":
        Ku(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function mn(t, e, i) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (In |= e.lanes),
      !(i & e.childLanes))
    )
      if (t !== null) {
        if ((Al(t, e, i, !1), (i & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, i = Jn(t, t.pendingProps), e.child = i, i.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (i = i.sibling = Jn(t, t.pendingProps)),
          (i.return = e);
      i.sibling = null;
    }
    return e.child;
  }
  function Qu(t, e) {
    return t.lanes & e ? !0 : ((t = t.dependencies), !!(t !== null && mr(t)));
  }
  function p5(t, e, i) {
    switch (e.tag) {
      case 3:
        Rs(e, e.stateNode.containerInfo),
          Xn(e, Gt, t.memoizedState.cache),
          dl();
        break;
      case 27:
      case 5:
        Uo(e);
        break;
      case 4:
        Rs(e, e.stateNode.containerInfo);
        break;
      case 10:
        Xn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var s = e.memoizedState;
        if (s !== null)
          return s.dehydrated !== null
            ? (Pn(e), (e.flags |= 128), null)
            : i & e.child.childLanes
            ? Sh(t, e, i)
            : (Pn(e), (t = mn(t, e, i)), t !== null ? t.sibling : null);
        Pn(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((s = (i & e.childLanes) !== 0),
          s || (Al(t, e, i, !1), (s = (i & e.childLanes) !== 0)),
          u)
        ) {
          if (s) return Ch(t, e, i);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ct(Pt, Pt.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), gh(t, e, i);
      case 24:
        Xn(e, Gt, t.memoizedState.cache);
    }
    return mn(t, e, i);
  }
  function Ah(t, e, i) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Zt = !0;
      else {
        if (!Qu(t, i) && !(e.flags & 128)) return (Zt = !1), p5(t, e, i);
        Zt = !!(t.flags & 131072);
      }
    else (Zt = !1), dt && e.flags & 1048576 && od(e, $s, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var s = e.elementType,
            u = s._init;
          if (((s = u(s._payload)), (e.type = s), typeof s == "function"))
            uc(s)
              ? ((t = za(s, t)), (e.tag = 1), (e = bh(null, e, s, t, i)))
              : ((e.tag = 0), (e = Pu(null, e, s, t, i)));
          else {
            if (s != null) {
              if (((u = s.$$typeof), u === M)) {
                (e.tag = 11), (e = hh(null, e, s, t, i));
                break t;
              } else if (u === D) {
                (e.tag = 14), (e = mh(null, e, s, t, i));
                break t;
              }
            }
            throw ((e = K(s) || s), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Pu(t, e, e.type, e.pendingProps, i);
      case 1:
        return (s = e.type), (u = za(s, e.pendingProps)), bh(t, e, s, u, i);
      case 3:
        t: {
          if ((Rs(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          var c = e.pendingProps;
          (u = e.memoizedState), (s = u.element), tc(t, e), Ml(e, c, null, i);
          var g = e.memoizedState;
          if (
            ((c = g.cache),
            Xn(e, Gt, c),
            c !== u.cache && Ju(e, [Gt], i, !0),
            wl(),
            (c = g.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: c, isDehydrated: !1, cache: g.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = xh(t, e, c, i);
              break t;
            } else if (c !== s) {
              (s = Ce(Error(r(424)), e)), hl(s), (e = xh(t, e, c, i));
              break t;
            } else
              for (
                Wt = He(e.stateNode.containerInfo.firstChild),
                  ie = e,
                  dt = !0,
                  je = null,
                  qe = !0,
                  i = yd(e, null, c, i),
                  e.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if ((dl(), c === s)) {
              e = mn(t, e, i);
              break t;
            }
            $t(t, e, c, i);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Cl(t, e),
          t === null
            ? (i = M1(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = i)
              : dt ||
                ((i = e.type),
                (t = e.pendingProps),
                (s = Rr(_n.current).createElement(i)),
                (s[It] = e),
                (s[re] = t),
                Jt(s, i, t),
                Xt(s),
                (e.stateNode = s))
            : (e.memoizedState = M1(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Uo(e),
          t === null &&
            dt &&
            ((s = e.stateNode = A1(e.type, e.pendingProps, _n.current)),
            (ie = e),
            (qe = !0),
            (Wt = He(s.firstChild))),
          (s = e.pendingProps.children),
          t !== null || dt ? $t(t, e, s, i) : (e.child = Ma(e, null, s, i)),
          Cl(t, e),
          e.child
        );
      case 5:
        return (
          t === null &&
            dt &&
            ((u = s = Wt) &&
              ((s = X5(s, e.type, e.pendingProps, qe)),
              s !== null
                ? ((e.stateNode = s),
                  (ie = e),
                  (Wt = He(s.firstChild)),
                  (qe = !1),
                  (u = !0))
                : (u = !1)),
            u || wa(e)),
          Uo(e),
          (u = e.type),
          (c = e.pendingProps),
          (g = t !== null ? t.memoizedProps : null),
          (s = c.children),
          jc(u, c) ? (s = null) : g !== null && jc(u, g) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = Cu(t, e, o5, null, null, i)), (Gl._currentValue = u)),
          Cl(t, e),
          $t(t, e, s, i),
          e.child
        );
      case 6:
        return (
          t === null &&
            dt &&
            ((t = i = Wt) &&
              ((i = Z5(i, e.pendingProps, qe)),
              i !== null
                ? ((e.stateNode = i), (ie = e), (Wt = null), (t = !0))
                : (t = !1)),
            t || wa(e)),
          null
        );
      case 13:
        return Sh(t, e, i);
      case 4:
        return (
          Rs(e, e.stateNode.containerInfo),
          (s = e.pendingProps),
          t === null ? (e.child = Ma(e, null, s, i)) : $t(t, e, s, i),
          e.child
        );
      case 11:
        return hh(t, e, e.type, e.pendingProps, i);
      case 7:
        return $t(t, e, e.pendingProps, i), e.child;
      case 8:
        return $t(t, e, e.pendingProps.children, i), e.child;
      case 12:
        return $t(t, e, e.pendingProps.children, i), e.child;
      case 10:
        return (
          (s = e.pendingProps),
          Xn(e, e.type, s.value),
          $t(t, e, s.children, i),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (s = e.pendingProps.children),
          Va(e),
          (u = te(u)),
          (s = s(u)),
          (e.flags |= 1),
          $t(t, e, s, i),
          e.child
        );
      case 14:
        return mh(t, e, e.type, e.pendingProps, i);
      case 15:
        return ph(t, e, e.type, e.pendingProps, i);
      case 19:
        return Ch(t, e, i);
      case 22:
        return gh(t, e, i);
      case 24:
        return (
          Va(e),
          (s = te(Gt)),
          t === null
            ? ((u = Su()),
              u === null &&
                ((u = bt),
                (c = bu()),
                (u.pooledCache = c),
                c.refCount++,
                c !== null && (u.pooledCacheLanes |= i),
                (u = c)),
              (e.memoizedState = { parent: s, cache: u }),
              Iu(e),
              Xn(e, Gt, u))
            : (t.lanes & i && (tc(t, e), Ml(e, null, null, i), wl()),
              (u = t.memoizedState),
              (c = e.memoizedState),
              u.parent !== s
                ? ((u = { parent: s, cache: s }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  Xn(e, Gt, s))
                : ((s = c.cache),
                  Xn(e, Gt, s),
                  s !== u.cache && Ju(e, [Gt], i, !0))),
          $t(t, e, e.pendingProps.children, i),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  var Wu = Pe(null),
    Na = null,
    pn = null;
  function Xn(t, e, i) {
    Ct(Wu, e._currentValue), (e._currentValue = i);
  }
  function gn(t) {
    (t._currentValue = Wu.current), qt(Wu);
  }
  function $u(t, e, i) {
    for (; t !== null; ) {
      var s = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), s !== null && (s.childLanes |= e))
          : s !== null && (s.childLanes & e) !== e && (s.childLanes |= e),
        t === i)
      )
        break;
      t = t.return;
    }
  }
  function Ju(t, e, i, s) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var g = u.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var v = c;
          c = u;
          for (var S = 0; S < e.length; S++)
            if (v.context === e[S]) {
              (c.lanes |= i),
                (v = c.alternate),
                v !== null && (v.lanes |= i),
                $u(c.return, i, t),
                s || (g = null);
              break t;
            }
          c = v.next;
        }
      } else if (u.tag === 18) {
        if (((g = u.return), g === null)) throw Error(r(341));
        (g.lanes |= i),
          (c = g.alternate),
          c !== null && (c.lanes |= i),
          $u(g, i, t),
          (g = null);
      } else g = u.child;
      if (g !== null) g.return = u;
      else
        for (g = u; g !== null; ) {
          if (g === t) {
            g = null;
            break;
          }
          if (((u = g.sibling), u !== null)) {
            (u.return = g.return), (g = u);
            break;
          }
          g = g.return;
        }
      u = g;
    }
  }
  function Al(t, e, i, s) {
    t = null;
    for (var u = e, c = !1; u !== null; ) {
      if (!c) {
        if (u.flags & 524288) c = !0;
        else if (u.flags & 262144) break;
      }
      if (u.tag === 10) {
        var g = u.alternate;
        if (g === null) throw Error(r(387));
        if (((g = g.memoizedProps), g !== null)) {
          var v = u.type;
          de(u.pendingProps.value, g.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (u === Os.current) {
        if (((g = u.alternate), g === null)) throw Error(r(387));
        g.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Gl) : (t = [Gl]));
      }
      u = u.return;
    }
    t !== null && Ju(e, t, i, s), (e.flags |= 262144);
  }
  function mr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!de(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Va(t) {
    (Na = t),
      (pn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function te(t) {
    return Eh(Na, t);
  }
  function pr(t, e) {
    return Na === null && Va(t), Eh(t, e);
  }
  function Eh(t, e) {
    var i = e._currentValue;
    if (((e = { context: e, memoizedValue: i, next: null }), pn === null)) {
      if (t === null) throw Error(r(308));
      (pn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else pn = pn.next = e;
    return i;
  }
  var Zn = !1;
  function Iu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function tc(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Fn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Kn(t, e, i) {
    var s = t.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), Et & 2)) {
      var u = s.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (s.pending = e),
        (e = Qs(t)),
        sd(t, null, i),
        e
      );
    }
    return Ks(t, s, e, i), Qs(t);
  }
  function El(t, e, i) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (i & 4194176) !== 0))
    ) {
      var s = e.lanes;
      (s &= t.pendingLanes), (i |= s), (e.lanes = i), m2(t, i);
    }
  }
  function ec(t, e) {
    var i = t.updateQueue,
      s = t.alternate;
    if (s !== null && ((s = s.updateQueue), i === s)) {
      var u = null,
        c = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var g = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null,
          };
          c === null ? (u = c = g) : (c = c.next = g), (i = i.next);
        } while (i !== null);
        c === null ? (u = c = e) : (c = c.next = e);
      } else u = c = e;
      (i = {
        baseState: s.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: s.shared,
        callbacks: s.callbacks,
      }),
        (t.updateQueue = i);
      return;
    }
    (t = i.lastBaseUpdate),
      t === null ? (i.firstBaseUpdate = e) : (t.next = e),
      (i.lastBaseUpdate = e);
  }
  var nc = !1;
  function wl() {
    if (nc) {
      var t = vi;
      if (t !== null) throw t;
    }
  }
  function Ml(t, e, i, s) {
    nc = !1;
    var u = t.updateQueue;
    Zn = !1;
    var c = u.firstBaseUpdate,
      g = u.lastBaseUpdate,
      v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var S = v,
        w = S.next;
      (S.next = null), g === null ? (c = w) : (g.next = w), (g = S);
      var _ = t.alternate;
      _ !== null &&
        ((_ = _.updateQueue),
        (v = _.lastBaseUpdate),
        v !== g &&
          (v === null ? (_.firstBaseUpdate = w) : (v.next = w),
          (_.lastBaseUpdate = S)));
    }
    if (c !== null) {
      var U = u.baseState;
      (g = 0), (_ = w = S = null), (v = c);
      do {
        var N = v.lane & -536870913,
          j = N !== v.lane;
        if (j ? (ct & N) === N : (s & N) === N) {
          N !== 0 && N === yi && (nc = !0),
            _ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var Z = t,
              nt = v;
            N = e;
            var zt = i;
            switch (nt.tag) {
              case 1:
                if (((Z = nt.payload), typeof Z == "function")) {
                  U = Z.call(zt, U, N);
                  break t;
                }
                U = Z;
                break t;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = nt.payload),
                  (N = typeof Z == "function" ? Z.call(zt, U, N) : Z),
                  N == null)
                )
                  break t;
                U = I({}, U, N);
                break t;
              case 2:
                Zn = !0;
            }
          }
          (N = v.callback),
            N !== null &&
              ((t.flags |= 64),
              j && (t.flags |= 8192),
              (j = u.callbacks),
              j === null ? (u.callbacks = [N]) : j.push(N));
        } else
          (j = {
            lane: N,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            _ === null ? ((w = _ = j), (S = U)) : (_ = _.next = j),
            (g |= N);
        if (((v = v.next), v === null)) {
          if (((v = u.shared.pending), v === null)) break;
          (j = v),
            (v = j.next),
            (j.next = null),
            (u.lastBaseUpdate = j),
            (u.shared.pending = null);
        }
      } while (!0);
      _ === null && (S = U),
        (u.baseState = S),
        (u.firstBaseUpdate = w),
        (u.lastBaseUpdate = _),
        c === null && (u.shared.lanes = 0),
        (In |= g),
        (t.lanes = g),
        (t.memoizedState = U);
    }
  }
  function wh(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Mh(t, e) {
    var i = t.callbacks;
    if (i !== null)
      for (t.callbacks = null, t = 0; t < i.length; t++) wh(i[t], e);
  }
  function Dl(t, e) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        i = u;
        do {
          if ((i.tag & t) === t) {
            s = void 0;
            var c = i.create,
              g = i.inst;
            (s = c()), (g.destroy = s);
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (v) {
      vt(e, e.return, v);
    }
  }
  function Qn(t, e, i) {
    try {
      var s = e.updateQueue,
        u = s !== null ? s.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        s = c;
        do {
          if ((s.tag & t) === t) {
            var g = s.inst,
              v = g.destroy;
            if (v !== void 0) {
              (g.destroy = void 0), (u = e);
              var S = i;
              try {
                v();
              } catch (w) {
                vt(u, S, w);
              }
            }
          }
          s = s.next;
        } while (s !== c);
      }
    } catch (w) {
      vt(e, e.return, w);
    }
  }
  function Dh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var i = t.stateNode;
      try {
        Mh(e, i);
      } catch (s) {
        vt(t, t.return, s);
      }
    }
  }
  function Oh(t, e, i) {
    (i.props = za(t.type, t.memoizedProps)), (i.state = t.memoizedState);
    try {
      i.componentWillUnmount();
    } catch (s) {
      vt(t, e, s);
    }
  }
  function ja(t, e) {
    try {
      var i = t.ref;
      if (i !== null) {
        var s = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var u = s;
            break;
          default:
            u = s;
        }
        typeof i == "function" ? (t.refCleanup = i(u)) : (i.current = u);
      }
    } catch (c) {
      vt(t, e, c);
    }
  }
  function he(t, e) {
    var i = t.ref,
      s = t.refCleanup;
    if (i !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (u) {
          vt(t, e, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (u) {
          vt(t, e, u);
        }
      else i.current = null;
  }
  function Rh(t) {
    var e = t.type,
      i = t.memoizedProps,
      s = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && s.focus();
          break t;
        case "img":
          i.src ? (s.src = i.src) : i.srcSet && (s.srcset = i.srcSet);
      }
    } catch (u) {
      vt(t, t.return, u);
    }
  }
  function Lh(t, e, i) {
    try {
      var s = t.stateNode;
      k5(s, t.type, i, e), (s[re] = e);
    } catch (u) {
      vt(t, t.return, u);
    }
  }
  function zh(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function ac(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || zh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ic(t, e, i) {
    var s = t.tag;
    if (s === 5 || s === 6)
      (t = t.stateNode),
        e
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(t, e)
            : i.insertBefore(t, e)
          : (i.nodeType === 8
              ? ((e = i.parentNode), e.insertBefore(t, i))
              : ((e = i), e.appendChild(t)),
            (i = i._reactRootContainer),
            i != null || e.onclick !== null || (e.onclick = Or));
    else if (s !== 4 && s !== 27 && ((t = t.child), t !== null))
      for (ic(t, e, i), t = t.sibling; t !== null; )
        ic(t, e, i), (t = t.sibling);
  }
  function gr(t, e, i) {
    var s = t.tag;
    if (s === 5 || s === 6)
      (t = t.stateNode), e ? i.insertBefore(t, e) : i.appendChild(t);
    else if (s !== 4 && s !== 27 && ((t = t.child), t !== null))
      for (gr(t, e, i), t = t.sibling; t !== null; )
        gr(t, e, i), (t = t.sibling);
  }
  var yn = !1,
    Rt = !1,
    lc = !1,
    Nh = typeof WeakSet == "function" ? WeakSet : Set,
    Ft = null,
    Vh = !1;
  function g5(t, e) {
    if (((t = t.containerInfo), (Nc = _r), (t = $2(t)), ru(t))) {
      if ("selectionStart" in t)
        var i = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          i = ((i = t.ownerDocument) && i.defaultView) || window;
          var s = i.getSelection && i.getSelection();
          if (s && s.rangeCount !== 0) {
            i = s.anchorNode;
            var u = s.anchorOffset,
              c = s.focusNode;
            s = s.focusOffset;
            try {
              i.nodeType, c.nodeType;
            } catch {
              i = null;
              break t;
            }
            var g = 0,
              v = -1,
              S = -1,
              w = 0,
              _ = 0,
              U = t,
              N = null;
            e: for (;;) {
              for (
                var j;
                U !== i || (u !== 0 && U.nodeType !== 3) || (v = g + u),
                  U !== c || (s !== 0 && U.nodeType !== 3) || (S = g + s),
                  U.nodeType === 3 && (g += U.nodeValue.length),
                  (j = U.firstChild) !== null;

              )
                (N = U), (U = j);
              for (;;) {
                if (U === t) break e;
                if (
                  (N === i && ++w === u && (v = g),
                  N === c && ++_ === s && (S = g),
                  (j = U.nextSibling) !== null)
                )
                  break;
                (U = N), (N = U.parentNode);
              }
              U = j;
            }
            i = v === -1 || S === -1 ? null : { start: v, end: S };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      Vc = { focusedElem: t, selectionRange: i }, _r = !1, Ft = e;
      Ft !== null;

    )
      if (
        ((e = Ft), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Ft = t);
      else
        for (; Ft !== null; ) {
          switch (((e = Ft), (c = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (t & 1024 && c !== null) {
                (t = void 0),
                  (i = e),
                  (u = c.memoizedProps),
                  (c = c.memoizedState),
                  (s = i.stateNode);
                try {
                  var Z = za(i.type, u, i.elementType === i.type);
                  (t = s.getSnapshotBeforeUpdate(Z, c)),
                    (s.__reactInternalSnapshotBeforeUpdate = t);
                } catch (nt) {
                  vt(i, i.return, nt);
                }
              }
              break;
            case 3:
              if (t & 1024) {
                if (
                  ((t = e.stateNode.containerInfo), (i = t.nodeType), i === 9)
                )
                  Bc(t);
                else if (i === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Bc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (t & 1024) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Ft = t);
            break;
          }
          Ft = e.return;
        }
    return (Z = Vh), (Vh = !1), Z;
  }
  function jh(t, e, i) {
    var s = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        bn(t, i), s & 4 && Dl(5, i);
        break;
      case 1:
        if ((bn(t, i), s & 4))
          if (((t = i.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (v) {
              vt(i, i.return, v);
            }
          else {
            var u = za(i.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              vt(i, i.return, v);
            }
          }
        s & 64 && Dh(i), s & 512 && ja(i, i.return);
        break;
      case 3:
        if ((bn(t, i), s & 64 && ((s = i.updateQueue), s !== null))) {
          if (((t = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                t = i.child.stateNode;
                break;
              case 1:
                t = i.child.stateNode;
            }
          try {
            Mh(s, t);
          } catch (v) {
            vt(i, i.return, v);
          }
        }
        break;
      case 26:
        bn(t, i), s & 512 && ja(i, i.return);
        break;
      case 27:
      case 5:
        bn(t, i), e === null && s & 4 && Rh(i), s & 512 && ja(i, i.return);
        break;
      case 12:
        bn(t, i);
        break;
      case 13:
        bn(t, i), s & 4 && Bh(t, i);
        break;
      case 22:
        if (((u = i.memoizedState !== null || yn), !u)) {
          e = (e !== null && e.memoizedState !== null) || Rt;
          var c = yn,
            g = Rt;
          (yn = u),
            (Rt = e) && !g ? Wn(t, i, (i.subtreeFlags & 8772) !== 0) : bn(t, i),
            (yn = c),
            (Rt = g);
        }
        s & 512 &&
          (i.memoizedProps.mode === "manual"
            ? ja(i, i.return)
            : he(i, i.return));
        break;
      default:
        bn(t, i);
    }
  }
  function _h(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), _h(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Xo(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Ut = null,
    me = !1;
  function vn(t, e, i) {
    for (i = i.child; i !== null; ) Hh(t, e, i), (i = i.sibling);
  }
  function Hh(t, e, i) {
    if (ce && typeof ce.onCommitFiberUnmount == "function")
      try {
        ce.onCommitFiberUnmount($i, i);
      } catch {}
    switch (i.tag) {
      case 26:
        Rt || he(i, e),
          vn(t, e, i),
          i.memoizedState
            ? i.memoizedState.count--
            : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i));
        break;
      case 27:
        Rt || he(i, e);
        var s = Ut,
          u = me;
        for (
          Ut = i.stateNode, vn(t, e, i), i = i.stateNode, e = i.attributes;
          e.length;

        )
          i.removeAttributeNode(e[0]);
        Xo(i), (Ut = s), (me = u);
        break;
      case 5:
        Rt || he(i, e);
      case 6:
        u = Ut;
        var c = me;
        if (((Ut = null), vn(t, e, i), (Ut = u), (me = c), Ut !== null))
          if (me)
            try {
              (t = Ut),
                (s = i.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(s)
                  : t.removeChild(s);
            } catch (g) {
              vt(i, e, g);
            }
          else
            try {
              Ut.removeChild(i.stateNode);
            } catch (g) {
              vt(i, e, g);
            }
        break;
      case 18:
        Ut !== null &&
          (me
            ? ((e = Ut),
              (i = i.stateNode),
              e.nodeType === 8
                ? Hc(e.parentNode, i)
                : e.nodeType === 1 && Hc(e, i),
              Zl(e))
            : Hc(Ut, i.stateNode));
        break;
      case 4:
        (s = Ut),
          (u = me),
          (Ut = i.stateNode.containerInfo),
          (me = !0),
          vn(t, e, i),
          (Ut = s),
          (me = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Rt || Qn(2, i, e), Rt || Qn(4, i, e), vn(t, e, i);
        break;
      case 1:
        Rt ||
          (he(i, e),
          (s = i.stateNode),
          typeof s.componentWillUnmount == "function" && Oh(i, e, s)),
          vn(t, e, i);
        break;
      case 21:
        vn(t, e, i);
        break;
      case 22:
        Rt || he(i, e),
          (Rt = (s = Rt) || i.memoizedState !== null),
          vn(t, e, i),
          (Rt = s);
        break;
      default:
        vn(t, e, i);
    }
  }
  function Bh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Zl(t);
      } catch (i) {
        vt(e, e.return, i);
      }
  }
  function y5(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Nh()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Nh()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function sc(t, e) {
    var i = y5(t);
    e.forEach(function (s) {
      var u = R5.bind(null, t, s);
      i.has(s) || (i.add(s), s.then(u, u));
    });
  }
  function Me(t, e) {
    var i = e.deletions;
    if (i !== null)
      for (var s = 0; s < i.length; s++) {
        var u = i[s],
          c = t,
          g = e,
          v = g;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
            case 5:
              (Ut = v.stateNode), (me = !1);
              break t;
            case 3:
              (Ut = v.stateNode.containerInfo), (me = !0);
              break t;
            case 4:
              (Ut = v.stateNode.containerInfo), (me = !0);
              break t;
          }
          v = v.return;
        }
        if (Ut === null) throw Error(r(160));
        Hh(c, g, u),
          (Ut = null),
          (me = !1),
          (c = u.alternate),
          c !== null && (c.return = null),
          (u.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Uh(e, t), (e = e.sibling);
  }
  var _e = null;
  function Uh(t, e) {
    var i = t.alternate,
      s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Me(e, t),
          De(t),
          s & 4 && (Qn(3, t, t.return), Dl(3, t), Qn(5, t, t.return));
        break;
      case 1:
        Me(e, t),
          De(t),
          s & 512 && (Rt || i === null || he(i, i.return)),
          s & 64 &&
            yn &&
            ((t = t.updateQueue),
            t !== null &&
              ((s = t.callbacks),
              s !== null &&
                ((i = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = i === null ? s : i.concat(s)))));
        break;
      case 26:
        var u = _e;
        if (
          (Me(e, t),
          De(t),
          s & 512 && (Rt || i === null || he(i, i.return)),
          s & 4)
        ) {
          var c = i !== null ? i.memoizedState : null;
          if (((s = t.memoizedState), i === null))
            if (s === null)
              if (t.stateNode === null) {
                t: {
                  (s = t.type),
                    (i = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  e: switch (s) {
                    case "title":
                      (c = u.getElementsByTagName("title")[0]),
                        (!c ||
                          c[tl] ||
                          c[It] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = u.createElement(s)),
                          u.head.insertBefore(
                            c,
                            u.querySelector("head > title")
                          )),
                        Jt(c, s, i),
                        (c[It] = t),
                        Xt(c),
                        (s = c);
                      break t;
                    case "link":
                      var g = R1("link", "href", u).get(s + (i.href || ""));
                      if (g) {
                        for (var v = 0; v < g.length; v++)
                          if (
                            ((c = g[v]),
                            c.getAttribute("href") ===
                              (i.href == null ? null : i.href) &&
                              c.getAttribute("rel") ===
                                (i.rel == null ? null : i.rel) &&
                              c.getAttribute("title") ===
                                (i.title == null ? null : i.title) &&
                              c.getAttribute("crossorigin") ===
                                (i.crossOrigin == null ? null : i.crossOrigin))
                          ) {
                            g.splice(v, 1);
                            break e;
                          }
                      }
                      (c = u.createElement(s)),
                        Jt(c, s, i),
                        u.head.appendChild(c);
                      break;
                    case "meta":
                      if (
                        (g = R1("meta", "content", u).get(
                          s + (i.content || "")
                        ))
                      ) {
                        for (v = 0; v < g.length; v++)
                          if (
                            ((c = g[v]),
                            c.getAttribute("content") ===
                              (i.content == null ? null : "" + i.content) &&
                              c.getAttribute("name") ===
                                (i.name == null ? null : i.name) &&
                              c.getAttribute("property") ===
                                (i.property == null ? null : i.property) &&
                              c.getAttribute("http-equiv") ===
                                (i.httpEquiv == null ? null : i.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (i.charSet == null ? null : i.charSet))
                          ) {
                            g.splice(v, 1);
                            break e;
                          }
                      }
                      (c = u.createElement(s)),
                        Jt(c, s, i),
                        u.head.appendChild(c);
                      break;
                    default:
                      throw Error(r(468, s));
                  }
                  (c[It] = t), Xt(c), (s = c);
                }
                t.stateNode = s;
              } else L1(u, t.type, t.stateNode);
            else t.stateNode = O1(u, s, t.memoizedProps);
          else
            c !== s
              ? (c === null
                  ? i.stateNode !== null &&
                    ((i = i.stateNode), i.parentNode.removeChild(i))
                  : c.count--,
                s === null
                  ? L1(u, t.type, t.stateNode)
                  : O1(u, s, t.memoizedProps))
              : s === null &&
                t.stateNode !== null &&
                Lh(t, t.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        if (s & 4 && t.alternate === null) {
          (u = t.stateNode), (c = t.memoizedProps);
          try {
            for (var S = u.firstChild; S; ) {
              var w = S.nextSibling,
                _ = S.nodeName;
              S[tl] ||
                _ === "HEAD" ||
                _ === "BODY" ||
                _ === "SCRIPT" ||
                _ === "STYLE" ||
                (_ === "LINK" && S.rel.toLowerCase() === "stylesheet") ||
                u.removeChild(S),
                (S = w);
            }
            for (var U = t.type, N = u.attributes; N.length; )
              u.removeAttributeNode(N[0]);
            Jt(u, U, c), (u[It] = t), (u[re] = c);
          } catch (Z) {
            vt(t, t.return, Z);
          }
        }
      case 5:
        if (
          (Me(e, t),
          De(t),
          s & 512 && (Rt || i === null || he(i, i.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            li(u, "");
          } catch (Z) {
            vt(t, t.return, Z);
          }
        }
        s & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), Lh(t, u, i !== null ? i.memoizedProps : u)),
          s & 1024 && (lc = !0);
        break;
      case 6:
        if ((Me(e, t), De(t), s & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (s = t.memoizedProps), (i = t.stateNode);
          try {
            i.nodeValue = s;
          } catch (Z) {
            vt(t, t.return, Z);
          }
        }
        break;
      case 3:
        if (
          ((Nr = null),
          (u = _e),
          (_e = Lr(e.containerInfo)),
          Me(e, t),
          (_e = u),
          De(t),
          s & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Zl(e.containerInfo);
          } catch (Z) {
            vt(t, t.return, Z);
          }
        lc && ((lc = !1), kh(t));
        break;
      case 4:
        (s = _e),
          (_e = Lr(t.stateNode.containerInfo)),
          Me(e, t),
          De(t),
          (_e = s);
        break;
      case 12:
        Me(e, t), De(t);
        break;
      case 13:
        Me(e, t),
          De(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (i !== null && i.memoizedState !== null) &&
            (pc = Ye()),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), sc(t, s)));
        break;
      case 22:
        if (
          (s & 512 && (Rt || i === null || he(i, i.return)),
          (S = t.memoizedState !== null),
          (w = i !== null && i.memoizedState !== null),
          (_ = yn),
          (U = Rt),
          (yn = _ || S),
          (Rt = U || w),
          Me(e, t),
          (Rt = U),
          (yn = _),
          De(t),
          (e = t.stateNode),
          (e._current = t),
          (e._visibility &= -3),
          (e._visibility |= e._pendingVisibility & 2),
          s & 8192 &&
            ((e._visibility = S ? e._visibility & -2 : e._visibility | 1),
            S && ((e = yn || Rt), i === null || w || e || Ti(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          t: for (i = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
              if (i === null) {
                w = i = e;
                try {
                  if (((u = w.stateNode), S))
                    (c = u.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    (g = w.stateNode), (v = w.memoizedProps.style);
                    var j =
                      v != null && v.hasOwnProperty("display")
                        ? v.display
                        : null;
                    g.style.display =
                      j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (Z) {
                  vt(w, w.return, Z);
                }
              }
            } else if (e.tag === 6) {
              if (i === null) {
                w = e;
                try {
                  w.stateNode.nodeValue = S ? "" : w.memoizedProps;
                } catch (Z) {
                  vt(w, w.return, Z);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              i === e && (i = null), (e = e.return);
            }
            i === e && (i = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        s & 4 &&
          ((s = t.updateQueue),
          s !== null &&
            ((i = s.retryQueue),
            i !== null && ((s.retryQueue = null), sc(t, i))));
        break;
      case 19:
        Me(e, t),
          De(t),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), sc(t, s)));
        break;
      case 21:
        break;
      default:
        Me(e, t), De(t);
    }
  }
  function De(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var i = t.return; i !== null; ) {
              if (zh(i)) {
                var s = i;
                break t;
              }
              i = i.return;
            }
            throw Error(r(160));
          }
          switch (s.tag) {
            case 27:
              var u = s.stateNode,
                c = ac(t);
              gr(t, c, u);
              break;
            case 5:
              var g = s.stateNode;
              s.flags & 32 && (li(g, ""), (s.flags &= -33));
              var v = ac(t);
              gr(t, v, g);
              break;
            case 3:
            case 4:
              var S = s.stateNode.containerInfo,
                w = ac(t);
              ic(t, w, S);
              break;
            default:
              throw Error(r(161));
          }
        }
      } catch (_) {
        vt(t, t.return, _);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function kh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        kh(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function bn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) jh(t, e.alternate, e), (e = e.sibling);
  }
  function Ti(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Qn(4, e, e.return), Ti(e);
          break;
        case 1:
          he(e, e.return);
          var i = e.stateNode;
          typeof i.componentWillUnmount == "function" && Oh(e, e.return, i),
            Ti(e);
          break;
        case 26:
        case 27:
        case 5:
          he(e, e.return), Ti(e);
          break;
        case 22:
          he(e, e.return), e.memoizedState === null && Ti(e);
          break;
        default:
          Ti(e);
      }
      t = t.sibling;
    }
  }
  function Wn(t, e, i) {
    for (i = i && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var s = e.alternate,
        u = t,
        c = e,
        g = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Wn(u, c, i), Dl(4, c);
          break;
        case 1:
          if (
            (Wn(u, c, i),
            (s = c),
            (u = s.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (w) {
              vt(s, s.return, w);
            }
          if (((s = c), (u = s.updateQueue), u !== null)) {
            var v = s.stateNode;
            try {
              var S = u.shared.hiddenCallbacks;
              if (S !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < S.length; u++)
                  wh(S[u], v);
            } catch (w) {
              vt(s, s.return, w);
            }
          }
          i && g & 64 && Dh(c), ja(c, c.return);
          break;
        case 26:
        case 27:
        case 5:
          Wn(u, c, i), i && s === null && g & 4 && Rh(c), ja(c, c.return);
          break;
        case 12:
          Wn(u, c, i);
          break;
        case 13:
          Wn(u, c, i), i && g & 4 && Bh(u, c);
          break;
        case 22:
          c.memoizedState === null && Wn(u, c, i), ja(c, c.return);
          break;
        default:
          Wn(u, c, i);
      }
      e = e.sibling;
    }
  }
  function rc(t, e) {
    var i = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (i = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== i && (t != null && t.refCount++, i != null && vl(i));
  }
  function oc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && vl(t));
  }
  function $n(t, e, i, s) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Ph(t, e, i, s), (e = e.sibling);
  }
  function Ph(t, e, i, s) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        $n(t, e, i, s), u & 2048 && Dl(9, e);
        break;
      case 3:
        $n(t, e, i, s),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && vl(t)));
        break;
      case 12:
        if (u & 2048) {
          $n(t, e, i, s), (t = e.stateNode);
          try {
            var c = e.memoizedProps,
              g = c.id,
              v = c.onPostCommit;
            typeof v == "function" &&
              v(
                g,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (S) {
            vt(e, e.return, S);
          }
        } else $n(t, e, i, s);
        break;
      case 23:
        break;
      case 22:
        (c = e.stateNode),
          e.memoizedState !== null
            ? c._visibility & 4
              ? $n(t, e, i, s)
              : Ol(t, e)
            : c._visibility & 4
            ? $n(t, e, i, s)
            : ((c._visibility |= 4),
              Ci(t, e, i, s, (e.subtreeFlags & 10256) !== 0)),
          u & 2048 && rc(e.alternate, e);
        break;
      case 24:
        $n(t, e, i, s), u & 2048 && oc(e.alternate, e);
        break;
      default:
        $n(t, e, i, s);
    }
  }
  function Ci(t, e, i, s, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var c = t,
        g = e,
        v = i,
        S = s,
        w = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Ci(c, g, v, S, u), Dl(8, g);
          break;
        case 23:
          break;
        case 22:
          var _ = g.stateNode;
          g.memoizedState !== null
            ? _._visibility & 4
              ? Ci(c, g, v, S, u)
              : Ol(c, g)
            : ((_._visibility |= 4), Ci(c, g, v, S, u)),
            u && w & 2048 && rc(g.alternate, g);
          break;
        case 24:
          Ci(c, g, v, S, u), u && w & 2048 && oc(g.alternate, g);
          break;
        default:
          Ci(c, g, v, S, u);
      }
      e = e.sibling;
    }
  }
  function Ol(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var i = t,
          s = e,
          u = s.flags;
        switch (s.tag) {
          case 22:
            Ol(i, s), u & 2048 && rc(s.alternate, s);
            break;
          case 24:
            Ol(i, s), u & 2048 && oc(s.alternate, s);
            break;
          default:
            Ol(i, s);
        }
        e = e.sibling;
      }
  }
  var Rl = 8192;
  function Ai(t) {
    if (t.subtreeFlags & Rl)
      for (t = t.child; t !== null; ) Gh(t), (t = t.sibling);
  }
  function Gh(t) {
    switch (t.tag) {
      case 26:
        Ai(t),
          t.flags & Rl &&
            t.memoizedState !== null &&
            ly(_e, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ai(t);
        break;
      case 3:
      case 4:
        var e = _e;
        (_e = Lr(t.stateNode.containerInfo)), Ai(t), (_e = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Rl), (Rl = 16777216), Ai(t), (Rl = e))
            : Ai(t));
        break;
      default:
        Ai(t);
    }
  }
  function Yh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Ll(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null)
        for (var i = 0; i < e.length; i++) {
          var s = e[i];
          (Ft = s), Xh(s, t);
        }
      Yh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) qh(t), (t = t.sibling);
  }
  function qh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ll(t), t.flags & 2048 && Qn(9, t, t.return);
        break;
      case 3:
        Ll(t);
        break;
      case 12:
        Ll(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -5), yr(t))
          : Ll(t);
        break;
      default:
        Ll(t);
    }
  }
  function yr(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null)
        for (var i = 0; i < e.length; i++) {
          var s = e[i];
          (Ft = s), Xh(s, t);
        }
      Yh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Qn(8, e, e.return), yr(e);
          break;
        case 22:
          (i = e.stateNode),
            i._visibility & 4 && ((i._visibility &= -5), yr(e));
          break;
        default:
          yr(e);
      }
      t = t.sibling;
    }
  }
  function Xh(t, e) {
    for (; Ft !== null; ) {
      var i = Ft;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Qn(8, i, e);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var s = i.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          vl(i.memoizedState.cache);
      }
      if (((s = i.child), s !== null)) (s.return = i), (Ft = s);
      else
        t: for (i = t; Ft !== null; ) {
          s = Ft;
          var u = s.sibling,
            c = s.return;
          if ((_h(s), s === i)) {
            Ft = null;
            break t;
          }
          if (u !== null) {
            (u.return = c), (Ft = u);
            break t;
          }
          Ft = c;
        }
    }
  }
  function v5(t, e, i, s) {
    (this.tag = t),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Oe(t, e, i, s) {
    return new v5(t, e, i, s);
  }
  function uc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Jn(t, e) {
    var i = t.alternate;
    return (
      i === null
        ? ((i = Oe(t.tag, e, t.key, t.mode)),
          (i.elementType = t.elementType),
          (i.type = t.type),
          (i.stateNode = t.stateNode),
          (i.alternate = t),
          (t.alternate = i))
        : ((i.pendingProps = e),
          (i.type = t.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = t.flags & 31457280),
      (i.childLanes = t.childLanes),
      (i.lanes = t.lanes),
      (i.child = t.child),
      (i.memoizedProps = t.memoizedProps),
      (i.memoizedState = t.memoizedState),
      (i.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (i.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (i.sibling = t.sibling),
      (i.index = t.index),
      (i.ref = t.ref),
      (i.refCleanup = t.refCleanup),
      i
    );
  }
  function Zh(t, e) {
    t.flags &= 31457282;
    var i = t.alternate;
    return (
      i === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = i.childLanes),
          (t.lanes = i.lanes),
          (t.child = i.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = i.memoizedProps),
          (t.memoizedState = i.memoizedState),
          (t.updateQueue = i.updateQueue),
          (t.type = i.type),
          (e = i.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function vr(t, e, i, s, u, c) {
    var g = 0;
    if (((s = t), typeof t == "function")) uc(t) && (g = 1);
    else if (typeof t == "string")
      g = ay(t, i, Ge.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case m:
          return _a(i.children, u, c, e);
        case p:
          (g = 8), (u |= 24);
          break;
        case y:
          return (
            (t = Oe(12, i, e, u | 2)), (t.elementType = y), (t.lanes = c), t
          );
        case z:
          return (t = Oe(13, i, e, u)), (t.elementType = z), (t.lanes = c), t;
        case L:
          return (t = Oe(19, i, e, u)), (t.elementType = L), (t.lanes = c), t;
        case B:
          return Fh(i, u, c, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case x:
              case C:
                g = 10;
                break t;
              case b:
                g = 9;
                break t;
              case M:
                g = 11;
                break t;
              case D:
                g = 14;
                break t;
              case V:
                (g = 16), (s = null);
                break t;
            }
          (g = 29),
            (i = Error(r(130, t === null ? "null" : typeof t, ""))),
            (s = null);
      }
    return (
      (e = Oe(g, i, e, u)), (e.elementType = t), (e.type = s), (e.lanes = c), e
    );
  }
  function _a(t, e, i, s) {
    return (t = Oe(7, t, s, e)), (t.lanes = i), t;
  }
  function Fh(t, e, i, s) {
    (t = Oe(22, t, s, e)), (t.elementType = B), (t.lanes = i);
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var c = u._current;
        if (c === null) throw Error(r(456));
        if (!(u._pendingVisibility & 2)) {
          var g = kn(c, 2);
          g !== null && ((u._pendingVisibility |= 2), le(g, c, 2));
        }
      },
      attach: function () {
        var c = u._current;
        if (c === null) throw Error(r(456));
        if (u._pendingVisibility & 2) {
          var g = kn(c, 2);
          g !== null && ((u._pendingVisibility &= -3), le(g, c, 2));
        }
      },
    };
    return (t.stateNode = u), t;
  }
  function cc(t, e, i) {
    return (t = Oe(6, t, null, e)), (t.lanes = i), t;
  }
  function fc(t, e, i) {
    return (
      (e = Oe(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = i),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  function xn(t) {
    t.flags |= 4;
  }
  function Kh(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !z1(e))) {
      if (
        ((e = we.current),
        e !== null &&
          ((ct & 4194176) === ct
            ? Xe !== null
            : ((ct & 62914560) !== ct && !(ct & 536870912)) || e !== Xe))
      )
        throw ((pl = gu), fd);
      t.flags |= 8192;
    }
  }
  function br(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? d2() : 536870912), (t.lanes |= e), (wi |= e));
  }
  function zl(t, e) {
    if (!dt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var i = null; e !== null; )
            e.alternate !== null && (i = e), (e = e.sibling);
          i === null ? (t.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = t.tail;
          for (var s = null; i !== null; )
            i.alternate !== null && (s = i), (i = i.sibling);
          s === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function At(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      i = 0,
      s = 0;
    if (e)
      for (var u = t.child; u !== null; )
        (i |= u.lanes | u.childLanes),
          (s |= u.subtreeFlags & 31457280),
          (s |= u.flags & 31457280),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (i |= u.lanes | u.childLanes),
          (s |= u.subtreeFlags),
          (s |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= s), (t.childLanes = i), e;
  }
  function b5(t, e, i) {
    var s = e.pendingProps;
    switch ((mu(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return At(e), null;
      case 1:
        return At(e), null;
      case 3:
        return (
          (i = e.stateNode),
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          e.memoizedState.cache !== s && (e.flags |= 2048),
          gn(Gt),
          Ia(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (t === null || t.child === null) &&
            (fl(e)
              ? xn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
                ((e.flags |= 1024), je !== null && (bc(je), (je = null)))),
          At(e),
          null
        );
      case 26:
        return (
          (i = e.memoizedState),
          t === null
            ? (xn(e),
              i !== null ? (At(e), Kh(e, i)) : (At(e), (e.flags &= -16777217)))
            : i
            ? i !== t.memoizedState
              ? (xn(e), At(e), Kh(e, i))
              : (At(e), (e.flags &= -16777217))
            : (t.memoizedProps !== s && xn(e), At(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Ls(e), (i = _n.current);
        var u = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== s && xn(e);
        else {
          if (!s) {
            if (e.stateNode === null) throw Error(r(166));
            return At(e), null;
          }
          (t = Ge.current),
            fl(e) ? ud(e) : ((t = A1(u, s, i)), (e.stateNode = t), xn(e));
        }
        return At(e), null;
      case 5:
        if ((Ls(e), (i = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== s && xn(e);
        else {
          if (!s) {
            if (e.stateNode === null) throw Error(r(166));
            return At(e), null;
          }
          if (((t = Ge.current), fl(e))) ud(e);
          else {
            switch (((u = Rr(_n.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof s.is == "string"
                        ? u.createElement("select", { is: s.is })
                        : u.createElement("select")),
                      s.multiple
                        ? (t.multiple = !0)
                        : s.size && (t.size = s.size);
                    break;
                  default:
                    t =
                      typeof s.is == "string"
                        ? u.createElement(i, { is: s.is })
                        : u.createElement(i);
                }
            }
            (t[It] = e), (t[re] = s);
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            e.stateNode = t;
            t: switch ((Jt(t, i, s), i)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!s.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && xn(e);
          }
        }
        return At(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== s && xn(e);
        else {
          if (typeof s != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = _n.current), fl(e))) {
            if (
              ((t = e.stateNode),
              (i = e.memoizedProps),
              (s = null),
              (u = ie),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  s = u.memoizedProps;
              }
            (t[It] = e),
              (t = !!(
                t.nodeValue === i ||
                (s !== null && s.suppressHydrationWarning === !0) ||
                v1(t.nodeValue, i)
              )),
              t || wa(e);
          } else (t = Rr(t).createTextNode(s)), (t[It] = e), (e.stateNode = t);
        }
        return At(e), null;
      case 13:
        if (
          ((s = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = fl(e)), s !== null && s.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[It] = e;
            } else
              dl(),
                !(e.flags & 128) && (e.memoizedState = null),
                (e.flags |= 4);
            At(e), (u = !1);
          } else je !== null && (bc(je), (je = null)), (u = !0);
          if (!u) return e.flags & 256 ? (dn(e), e) : (dn(e), null);
        }
        if ((dn(e), e.flags & 128)) return (e.lanes = i), e;
        if (
          ((i = s !== null), (t = t !== null && t.memoizedState !== null), i)
        ) {
          (s = e.child),
            (u = null),
            s.alternate !== null &&
              s.alternate.memoizedState !== null &&
              s.alternate.memoizedState.cachePool !== null &&
              (u = s.alternate.memoizedState.cachePool.pool);
          var c = null;
          s.memoizedState !== null &&
            s.memoizedState.cachePool !== null &&
            (c = s.memoizedState.cachePool.pool),
            c !== u && (s.flags |= 2048);
        }
        return (
          i !== t && i && (e.child.flags |= 8192),
          br(e, e.updateQueue),
          At(e),
          null
        );
      case 4:
        return Ia(), t === null && Rc(e.stateNode.containerInfo), At(e), null;
      case 10:
        return gn(e.type), At(e), null;
      case 19:
        if ((qt(Pt), (u = e.memoizedState), u === null)) return At(e), null;
        if (((s = (e.flags & 128) !== 0), (c = u.rendering), c === null))
          if (s) zl(u, !1);
          else {
            if (Lt !== 0 || (t !== null && t.flags & 128))
              for (t = e.child; t !== null; ) {
                if (((c = nr(t)), c !== null)) {
                  for (
                    e.flags |= 128,
                      zl(u, !1),
                      t = c.updateQueue,
                      e.updateQueue = t,
                      br(e, t),
                      e.subtreeFlags = 0,
                      t = i,
                      i = e.child;
                    i !== null;

                  )
                    Zh(i, t), (i = i.sibling);
                  return Ct(Pt, (Pt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              Ye() > xr &&
              ((e.flags |= 128), (s = !0), zl(u, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = nr(c)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                br(e, t),
                zl(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !c.alternate &&
                  !dt)
              )
                return At(e), null;
            } else
              2 * Ye() - u.renderingStartTime > xr &&
                i !== 536870912 &&
                ((e.flags |= 128), (s = !0), zl(u, !1), (e.lanes = 4194304));
          u.isBackwards
            ? ((c.sibling = e.child), (e.child = c))
            : ((t = u.last),
              t !== null ? (t.sibling = c) : (e.child = c),
              (u.last = c));
        }
        return u.tail !== null
          ? ((e = u.tail),
            (u.rendering = e),
            (u.tail = e.sibling),
            (u.renderingStartTime = Ye()),
            (e.sibling = null),
            (t = Pt.current),
            Ct(Pt, s ? (t & 1) | 2 : t & 1),
            e)
          : (At(e), null);
      case 22:
      case 23:
        return (
          dn(e),
          vu(),
          (s = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== s && (e.flags |= 8192)
            : s && (e.flags |= 8192),
          s
            ? i & 536870912 &&
              !(e.flags & 128) &&
              (At(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : At(e),
          (i = e.updateQueue),
          i !== null && br(e, i.retryQueue),
          (i = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (i = t.memoizedState.cachePool.pool),
          (s = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (s = e.memoizedState.cachePool.pool),
          s !== i && (e.flags |= 2048),
          t !== null && qt(Da),
          null
        );
      case 24:
        return (
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          gn(Gt),
          At(e),
          null
        );
      case 25:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function x5(t, e) {
    switch ((mu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          gn(Gt),
          Ia(),
          (t = e.flags),
          t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return Ls(e), null;
      case 13:
        if (
          (dn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          dl();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return qt(Pt), null;
      case 4:
        return Ia(), null;
      case 10:
        return gn(e.type), null;
      case 22:
      case 23:
        return (
          dn(e),
          vu(),
          t !== null && qt(Da),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return gn(Gt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qh(t, e) {
    switch ((mu(e), e.tag)) {
      case 3:
        gn(Gt), Ia();
        break;
      case 26:
      case 27:
      case 5:
        Ls(e);
        break;
      case 4:
        Ia();
        break;
      case 13:
        dn(e);
        break;
      case 19:
        qt(Pt);
        break;
      case 10:
        gn(e.type);
        break;
      case 22:
      case 23:
        dn(e), vu(), t !== null && qt(Da);
        break;
      case 24:
        gn(Gt);
    }
  }
  var S5 = {
      getCacheForType: function (t) {
        var e = te(Gt),
          i = e.data.get(t);
        return i === void 0 && ((i = t()), e.data.set(t, i)), i;
      },
    },
    T5 = typeof WeakMap == "function" ? WeakMap : Map,
    Et = 0,
    bt = null,
    rt = null,
    ct = 0,
    xt = 0,
    pe = null,
    Sn = !1,
    Ei = !1,
    dc = !1,
    Tn = 0,
    Lt = 0,
    In = 0,
    Ha = 0,
    hc = 0,
    Re = 0,
    wi = 0,
    Nl = null,
    Fe = null,
    mc = !1,
    pc = 0,
    xr = 1 / 0,
    Sr = null,
    ta = null,
    Tr = !1,
    Ba = null,
    Vl = 0,
    gc = 0,
    yc = null,
    jl = 0,
    vc = null;
  function ge() {
    if (Et & 2 && ct !== 0) return ct & -ct;
    if (G.T !== null) {
      var t = yi;
      return t !== 0 ? t : wc();
    }
    return g2();
  }
  function Wh() {
    Re === 0 && (Re = !(ct & 536870912) || dt ? f2() : 536870912);
    var t = we.current;
    return t !== null && (t.flags |= 32), Re;
  }
  function le(t, e, i) {
    ((t === bt && xt === 2) || t.cancelPendingCommit !== null) &&
      (Mi(t, 0), Cn(t, ct, Re, !1)),
      Ii(t, i),
      (!(Et & 2) || t !== bt) &&
        (t === bt && (!(Et & 2) && (Ha |= i), Lt === 4 && Cn(t, ct, Re, !1)),
        Ke(t));
  }
  function $h(t, e, i) {
    if (Et & 6) throw Error(r(327));
    var s = (!i && (e & 60) === 0 && (e & t.expiredLanes) === 0) || Ji(t, e),
      u = s ? E5(t, e) : Tc(t, e, !0),
      c = s;
    do {
      if (u === 0) {
        Ei && !s && Cn(t, e, 0, !1);
        break;
      } else if (u === 6) Cn(t, e, 0, !Sn);
      else {
        if (((i = t.current.alternate), c && !C5(i))) {
          (u = Tc(t, e, !1)), (c = !1);
          continue;
        }
        if (u === 2) {
          if (((c = e), t.errorRecoveryDisabledLanes & c)) var g = 0;
          else
            (g = t.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            e = g;
            t: {
              var v = t;
              u = Nl;
              var S = v.current.memoizedState.isDehydrated;
              if ((S && (Mi(v, g).flags |= 256), (g = Tc(v, g, !1)), g !== 2)) {
                if (dc && !S) {
                  (v.errorRecoveryDisabledLanes |= c), (Ha |= c), (u = 4);
                  break t;
                }
                (c = Fe), (Fe = u), c !== null && bc(c);
              }
              u = g;
            }
            if (((c = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Mi(t, 0), Cn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((s = t), u)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194176) === e) {
                Cn(s, e, Re, !Sn);
                break t;
              }
              break;
            case 2:
              Fe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if (
            ((s.finishedWork = i),
            (s.finishedLanes = e),
            (e & 62914560) === e && ((c = pc + 300 - Ye()), 10 < c))
          ) {
            if ((Cn(s, e, Re, !Sn), js(s, 0) !== 0)) break t;
            s.timeoutHandle = S1(
              Jh.bind(null, s, i, Fe, Sr, mc, e, Re, Ha, wi, Sn, 2, -0, 0),
              c
            );
            break t;
          }
          Jh(s, i, Fe, Sr, mc, e, Re, Ha, wi, Sn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ke(t);
  }
  function bc(t) {
    Fe === null ? (Fe = t) : Fe.push.apply(Fe, t);
  }
  function Jh(t, e, i, s, u, c, g, v, S, w, _, U, N) {
    var j = e.subtreeFlags;
    if (
      (j & 8192 || (j & 16785408) === 16785408) &&
      ((Pl = { stylesheets: null, count: 0, unsuspend: iy }),
      Gh(e),
      (e = sy()),
      e !== null)
    ) {
      (t.cancelPendingCommit = e(l1.bind(null, t, i, s, u, g, v, S, 1, U, N))),
        Cn(t, c, g, !w);
      return;
    }
    l1(t, i, s, u, g, v, S, _, U, N);
  }
  function C5(t) {
    for (var e = t; ; ) {
      var i = e.tag;
      if (
        (i === 0 || i === 11 || i === 15) &&
        e.flags & 16384 &&
        ((i = e.updateQueue), i !== null && ((i = i.stores), i !== null))
      )
        for (var s = 0; s < i.length; s++) {
          var u = i[s],
            c = u.getSnapshot;
          u = u.value;
          try {
            if (!de(c(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = e.child), e.subtreeFlags & 16384 && i !== null))
        (i.return = e), (e = i);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Cn(t, e, i, s) {
    (e &= ~hc),
      (e &= ~Ha),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      s && (t.warmLanes |= e),
      (s = t.expirationTimes);
    for (var u = e; 0 < u; ) {
      var c = 31 - fe(u),
        g = 1 << c;
      (s[c] = -1), (u &= ~g);
    }
    i !== 0 && h2(t, i, e);
  }
  function Cr() {
    return Et & 6 ? !0 : (_l(0), !1);
  }
  function xc() {
    if (rt !== null) {
      if (xt === 0) var t = rt.return;
      else (t = rt), (pn = Na = null), wu(t), (pi = null), (gl = 0), (t = rt);
      for (; t !== null; ) Qh(t.alternate, t), (t = t.return);
      rt = null;
    }
  }
  function Mi(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var i = t.timeoutHandle;
    i !== -1 && ((t.timeoutHandle = -1), G5(i)),
      (i = t.cancelPendingCommit),
      i !== null && ((t.cancelPendingCommit = null), i()),
      xc(),
      (bt = t),
      (rt = i = Jn(t.current, null)),
      (ct = e),
      (xt = 0),
      (pe = null),
      (Sn = !1),
      (Ei = Ji(t, e)),
      (dc = !1),
      (wi = Re = hc = Ha = In = Lt = 0),
      (Fe = Nl = null),
      (mc = !1),
      e & 8 && (e |= e & 32);
    var s = t.entangledLanes;
    if (s !== 0)
      for (t = t.entanglements, s &= e; 0 < s; ) {
        var u = 31 - fe(s),
          c = 1 << u;
        (e |= t[u]), (s &= ~c);
      }
    return (Tn = e), Fs(), i;
  }
  function Ih(t, e) {
    (it = null),
      (G.H = Ze),
      e === ml
        ? ((e = md()), (xt = 3))
        : e === fd
        ? ((e = md()), (xt = 4))
        : (xt =
            e === dh
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (pe = e),
      rt === null && ((Lt = 1), hr(t, Ce(e, t.current)));
  }
  function t1() {
    var t = G.H;
    return (G.H = Ze), t === null ? Ze : t;
  }
  function e1() {
    var t = G.A;
    return (G.A = S5), t;
  }
  function Sc() {
    (Lt = 4),
      Sn || ((ct & 4194176) !== ct && we.current !== null) || (Ei = !0),
      (!(In & 134217727) && !(Ha & 134217727)) ||
        bt === null ||
        Cn(bt, ct, Re, !1);
  }
  function Tc(t, e, i) {
    var s = Et;
    Et |= 2;
    var u = t1(),
      c = e1();
    (bt !== t || ct !== e) && ((Sr = null), Mi(t, e)), (e = !1);
    var g = Lt;
    t: do
      try {
        if (xt !== 0 && rt !== null) {
          var v = rt,
            S = pe;
          switch (xt) {
            case 8:
              xc(), (g = 6);
              break t;
            case 3:
            case 2:
            case 6:
              we.current === null && (e = !0);
              var w = xt;
              if (((xt = 0), (pe = null), Di(t, v, S, w), i && Ei)) {
                g = 0;
                break t;
              }
              break;
            default:
              (w = xt), (xt = 0), (pe = null), Di(t, v, S, w);
          }
        }
        A5(), (g = Lt);
        break;
      } catch (_) {
        Ih(t, _);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (pn = Na = null),
      (Et = s),
      (G.H = u),
      (G.A = c),
      rt === null && ((bt = null), (ct = 0), Fs()),
      g
    );
  }
  function A5() {
    for (; rt !== null; ) n1(rt);
  }
  function E5(t, e) {
    var i = Et;
    Et |= 2;
    var s = t1(),
      u = e1();
    bt !== t || ct !== e
      ? ((Sr = null), (xr = Ye() + 500), Mi(t, e))
      : (Ei = Ji(t, e));
    t: do
      try {
        if (xt !== 0 && rt !== null) {
          e = rt;
          var c = pe;
          e: switch (xt) {
            case 1:
              (xt = 0), (pe = null), Di(t, e, c, 1);
              break;
            case 2:
              if (dd(c)) {
                (xt = 0), (pe = null), a1(e);
                break;
              }
              (e = function () {
                xt === 2 && bt === t && (xt = 7), Ke(t);
              }),
                c.then(e, e);
              break t;
            case 3:
              xt = 7;
              break t;
            case 4:
              xt = 5;
              break t;
            case 7:
              dd(c)
                ? ((xt = 0), (pe = null), a1(e))
                : ((xt = 0), (pe = null), Di(t, e, c, 7));
              break;
            case 5:
              var g = null;
              switch (rt.tag) {
                case 26:
                  g = rt.memoizedState;
                case 5:
                case 27:
                  var v = rt;
                  if (!g || z1(g)) {
                    (xt = 0), (pe = null);
                    var S = v.sibling;
                    if (S !== null) rt = S;
                    else {
                      var w = v.return;
                      w !== null ? ((rt = w), Ar(w)) : (rt = null);
                    }
                    break e;
                  }
              }
              (xt = 0), (pe = null), Di(t, e, c, 5);
              break;
            case 6:
              (xt = 0), (pe = null), Di(t, e, c, 6);
              break;
            case 8:
              xc(), (Lt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        w5();
        break;
      } catch (_) {
        Ih(t, _);
      }
    while (!0);
    return (
      (pn = Na = null),
      (G.H = s),
      (G.A = u),
      (Et = i),
      rt !== null ? 0 : ((bt = null), (ct = 0), Fs(), Lt)
    );
  }
  function w5() {
    for (; rt !== null && !K4(); ) n1(rt);
  }
  function n1(t) {
    var e = Ah(t.alternate, t, Tn);
    (t.memoizedProps = t.pendingProps), e === null ? Ar(t) : (rt = e);
  }
  function a1(t) {
    var e = t,
      i = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = vh(i, e, e.pendingProps, e.type, void 0, ct);
        break;
      case 11:
        e = vh(i, e, e.pendingProps, e.type.render, e.ref, ct);
        break;
      case 5:
        wu(e);
      default:
        Qh(i, e), (e = rt = Zh(e, Tn)), (e = Ah(i, e, Tn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Ar(t) : (rt = e);
  }
  function Di(t, e, i, s) {
    (pn = Na = null), wu(e), (pi = null), (gl = 0);
    var u = e.return;
    try {
      if (m5(t, u, e, i, ct)) {
        (Lt = 1), hr(t, Ce(i, t.current)), (rt = null);
        return;
      }
    } catch (c) {
      if (u !== null) throw ((rt = u), c);
      (Lt = 1), hr(t, Ce(i, t.current)), (rt = null);
      return;
    }
    e.flags & 32768
      ? (dt || s === 1
          ? (t = !0)
          : Ei || ct & 536870912
          ? (t = !1)
          : ((Sn = t = !0),
            (s === 2 || s === 3 || s === 6) &&
              ((s = we.current),
              s !== null && s.tag === 13 && (s.flags |= 16384))),
        i1(e, t))
      : Ar(e);
  }
  function Ar(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        i1(e, Sn);
        return;
      }
      t = e.return;
      var i = b5(e.alternate, e, Tn);
      if (i !== null) {
        rt = i;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        rt = e;
        return;
      }
      rt = e = t;
    } while (e !== null);
    Lt === 0 && (Lt = 5);
  }
  function i1(t, e) {
    do {
      var i = x5(t.alternate, t);
      if (i !== null) {
        (i.flags &= 32767), (rt = i);
        return;
      }
      if (
        ((i = t.return),
        i !== null &&
          ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        rt = t;
        return;
      }
      rt = t = i;
    } while (t !== null);
    (Lt = 6), (rt = null);
  }
  function l1(t, e, i, s, u, c, g, v, S, w) {
    var _ = G.T,
      U = ft.p;
    try {
      (ft.p = 2), (G.T = null), M5(t, e, i, s, U, u, c, g, v, S, w);
    } finally {
      (G.T = _), (ft.p = U);
    }
  }
  function M5(t, e, i, s, u, c, g, v) {
    do Oi();
    while (Ba !== null);
    if (Et & 6) throw Error(r(327));
    var S = t.finishedWork;
    if (((s = t.finishedLanes), S === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), S === t.current))
      throw Error(r(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var w = S.lanes | S.childLanes;
    if (
      ((w |= fu),
      l6(t, s, w, c, g, v),
      t === bt && ((rt = bt = null), (ct = 0)),
      (!(S.subtreeFlags & 10256) && !(S.flags & 10256)) ||
        Tr ||
        ((Tr = !0),
        (gc = w),
        (yc = i),
        L5(zs, function () {
          return Oi(), null;
        })),
      (i = (S.flags & 15990) !== 0),
      S.subtreeFlags & 15990 || i
        ? ((i = G.T),
          (G.T = null),
          (c = ft.p),
          (ft.p = 2),
          (g = Et),
          (Et |= 4),
          g5(t, S),
          Uh(S, t),
          $6(Vc, t.containerInfo),
          (_r = !!Nc),
          (Vc = Nc = null),
          (t.current = S),
          jh(t, S.alternate, S),
          Q4(),
          (Et = g),
          (ft.p = c),
          (G.T = i))
        : (t.current = S),
      Tr ? ((Tr = !1), (Ba = t), (Vl = s)) : s1(t, w),
      (w = t.pendingLanes),
      w === 0 && (ta = null),
      t6(S.stateNode),
      Ke(t),
      e !== null)
    )
      for (u = t.onRecoverableError, S = 0; S < e.length; S++)
        (w = e[S]), u(w.value, { componentStack: w.stack });
    return (
      Vl & 3 && Oi(),
      (w = t.pendingLanes),
      s & 4194218 && w & 42
        ? t === vc
          ? jl++
          : ((jl = 0), (vc = t))
        : (jl = 0),
      _l(0),
      null
    );
  }
  function s1(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), vl(e)));
  }
  function Oi() {
    if (Ba !== null) {
      var t = Ba,
        e = gc;
      gc = 0;
      var i = p2(Vl),
        s = G.T,
        u = ft.p;
      try {
        if (((ft.p = 32 > i ? 32 : i), (G.T = null), Ba === null)) var c = !1;
        else {
          (i = yc), (yc = null);
          var g = Ba,
            v = Vl;
          if (((Ba = null), (Vl = 0), Et & 6)) throw Error(r(331));
          var S = Et;
          if (
            ((Et |= 4),
            qh(g.current),
            Ph(g, g.current, v, i),
            (Et = S),
            _l(0, !1),
            ce && typeof ce.onPostCommitFiberRoot == "function")
          )
            try {
              ce.onPostCommitFiberRoot($i, g);
            } catch {}
          c = !0;
        }
        return c;
      } finally {
        (ft.p = u), (G.T = s), s1(t, e);
      }
    }
    return !1;
  }
  function r1(t, e, i) {
    (e = Ce(i, e)),
      (e = ku(t.stateNode, e, 2)),
      (t = Kn(t, e, 2)),
      t !== null && (Ii(t, 2), Ke(t));
  }
  function vt(t, e, i) {
    if (t.tag === 3) r1(t, t, i);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          r1(e, t, i);
          break;
        } else if (e.tag === 1) {
          var s = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (ta === null || !ta.has(s)))
          ) {
            (t = Ce(i, t)),
              (i = ch(2)),
              (s = Kn(e, i, 2)),
              s !== null && (fh(i, s, e, t), Ii(s, 2), Ke(s));
            break;
          }
        }
        e = e.return;
      }
  }
  function Cc(t, e, i) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new T5();
      var u = new Set();
      s.set(e, u);
    } else (u = s.get(e)), u === void 0 && ((u = new Set()), s.set(e, u));
    u.has(i) ||
      ((dc = !0), u.add(i), (t = D5.bind(null, t, e, i)), e.then(t, t));
  }
  function D5(t, e, i) {
    var s = t.pingCache;
    s !== null && s.delete(e),
      (t.pingedLanes |= t.suspendedLanes & i),
      (t.warmLanes &= ~i),
      bt === t &&
        (ct & i) === i &&
        (Lt === 4 || (Lt === 3 && (ct & 62914560) === ct && 300 > Ye() - pc)
          ? !(Et & 2) && Mi(t, 0)
          : (hc |= i),
        wi === ct && (wi = 0)),
      Ke(t);
  }
  function o1(t, e) {
    e === 0 && (e = d2()), (t = kn(t, e)), t !== null && (Ii(t, e), Ke(t));
  }
  function O5(t) {
    var e = t.memoizedState,
      i = 0;
    e !== null && (i = e.retryLane), o1(t, i);
  }
  function R5(t, e) {
    var i = 0;
    switch (t.tag) {
      case 13:
        var s = t.stateNode,
          u = t.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        s = t.stateNode;
        break;
      case 22:
        s = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    s !== null && s.delete(e), o1(t, i);
  }
  function L5(t, e) {
    return Po(t, e);
  }
  var Er = null,
    Ri = null,
    Ac = !1,
    wr = !1,
    Ec = !1,
    Ua = 0;
  function Ke(t) {
    t !== Ri &&
      t.next === null &&
      (Ri === null ? (Er = Ri = t) : (Ri = Ri.next = t)),
      (wr = !0),
      Ac || ((Ac = !0), N5(z5));
  }
  function _l(t, e) {
    if (!Ec && wr) {
      Ec = !0;
      do
        for (var i = !1, s = Er; s !== null; ) {
          if (t !== 0) {
            var u = s.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var g = s.suspendedLanes,
                v = s.pingedLanes;
              (c = (1 << (31 - fe(42 | t) + 1)) - 1),
                (c &= u & ~(g & ~v)),
                (c = c & 201326677 ? (c & 201326677) | 1 : c ? c | 2 : 0);
            }
            c !== 0 && ((i = !0), f1(s, c));
          } else
            (c = ct),
              (c = js(s, s === bt ? c : 0)),
              !(c & 3) || Ji(s, c) || ((i = !0), f1(s, c));
          s = s.next;
        }
      while (i);
      Ec = !1;
    }
  }
  function z5() {
    wr = Ac = !1;
    var t = 0;
    Ua !== 0 && (P5() && (t = Ua), (Ua = 0));
    for (var e = Ye(), i = null, s = Er; s !== null; ) {
      var u = s.next,
        c = u1(s, e);
      c === 0
        ? ((s.next = null),
          i === null ? (Er = u) : (i.next = u),
          u === null && (Ri = i))
        : ((i = s), (t !== 0 || c & 3) && (wr = !0)),
        (s = u);
    }
    _l(t);
  }
  function u1(t, e) {
    for (
      var i = t.suspendedLanes,
        s = t.pingedLanes,
        u = t.expirationTimes,
        c = t.pendingLanes & -62914561;
      0 < c;

    ) {
      var g = 31 - fe(c),
        v = 1 << g,
        S = u[g];
      S === -1
        ? (!(v & i) || v & s) && (u[g] = i6(v, e))
        : S <= e && (t.expiredLanes |= v),
        (c &= ~v);
    }
    if (
      ((e = bt),
      (i = ct),
      (i = js(t, t === e ? i : 0)),
      (s = t.callbackNode),
      i === 0 || (t === e && xt === 2) || t.cancelPendingCommit !== null)
    )
      return (
        s !== null && s !== null && Go(s),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if (!(i & 3) || Ji(t, i)) {
      if (((e = i & -i), e === t.callbackPriority)) return e;
      switch ((s !== null && Go(s), p2(i))) {
        case 2:
        case 8:
          i = u2;
          break;
        case 32:
          i = zs;
          break;
        case 268435456:
          i = c2;
          break;
        default:
          i = zs;
      }
      return (
        (s = c1.bind(null, t)),
        (i = Po(i, s)),
        (t.callbackPriority = e),
        (t.callbackNode = i),
        e
      );
    }
    return (
      s !== null && s !== null && Go(s),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function c1(t, e) {
    var i = t.callbackNode;
    if (Oi() && t.callbackNode !== i) return null;
    var s = ct;
    return (
      (s = js(t, t === bt ? s : 0)),
      s === 0
        ? null
        : ($h(t, s, e),
          u1(t, Ye()),
          t.callbackNode != null && t.callbackNode === i
            ? c1.bind(null, t)
            : null)
    );
  }
  function f1(t, e) {
    if (Oi()) return null;
    $h(t, e, !0);
  }
  function N5(t) {
    Y5(function () {
      Et & 6 ? Po(o2, t) : t();
    });
  }
  function wc() {
    return Ua === 0 && (Ua = f2()), Ua;
  }
  function d1(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : ks("" + t);
  }
  function h1(t, e) {
    var i = e.ownerDocument.createElement("input");
    return (
      (i.name = e.name),
      (i.value = e.value),
      t.id && i.setAttribute("form", t.id),
      e.parentNode.insertBefore(i, e),
      (t = new FormData(t)),
      i.parentNode.removeChild(i),
      t
    );
  }
  function V5(t, e, i, s, u) {
    if (e === "submit" && i && i.stateNode === u) {
      var c = d1((u[re] || null).action),
        g = s.submitter;
      g &&
        ((e = (e = g[re] || null)
          ? d1(e.formAction)
          : g.getAttribute("formAction")),
        e !== null && ((c = e), (g = null)));
      var v = new qs("action", "action", null, s, u);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (s.defaultPrevented) {
                if (Ua !== 0) {
                  var S = g ? h1(u, g) : new FormData(u);
                  ju(
                    i,
                    { pending: !0, data: S, method: u.method, action: c },
                    null,
                    S
                  );
                }
              } else
                typeof c == "function" &&
                  (v.preventDefault(),
                  (S = g ? h1(u, g) : new FormData(u)),
                  ju(
                    i,
                    { pending: !0, data: S, method: u.method, action: c },
                    c,
                    S
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Mc = 0; Mc < ld.length; Mc++) {
    var Dc = ld[Mc],
      j5 = Dc.toLowerCase(),
      _5 = Dc[0].toUpperCase() + Dc.slice(1);
    Ve(j5, "on" + _5);
  }
  Ve(td, "onAnimationEnd"),
    Ve(ed, "onAnimationIteration"),
    Ve(nd, "onAnimationStart"),
    Ve("dblclick", "onDoubleClick"),
    Ve("focusin", "onFocus"),
    Ve("focusout", "onBlur"),
    Ve(I6, "onTransitionRun"),
    Ve(t5, "onTransitionStart"),
    Ve(e5, "onTransitionCancel"),
    Ve(ad, "onTransitionEnd"),
    ai("onMouseEnter", ["mouseout", "mouseover"]),
    ai("onMouseLeave", ["mouseout", "mouseover"]),
    ai("onPointerEnter", ["pointerout", "pointerover"]),
    ai("onPointerLeave", ["pointerout", "pointerover"]),
    xa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    xa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    xa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    xa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    xa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    xa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Hl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    H5 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Hl)
    );
  function m1(t, e) {
    e = (e & 4) !== 0;
    for (var i = 0; i < t.length; i++) {
      var s = t[i],
        u = s.event;
      s = s.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var g = s.length - 1; 0 <= g; g--) {
            var v = s[g],
              S = v.instance,
              w = v.currentTarget;
            if (((v = v.listener), S !== c && u.isPropagationStopped()))
              break t;
            (c = v), (u.currentTarget = w);
            try {
              c(u);
            } catch (_) {
              dr(_);
            }
            (u.currentTarget = null), (c = S);
          }
        else
          for (g = 0; g < s.length; g++) {
            if (
              ((v = s[g]),
              (S = v.instance),
              (w = v.currentTarget),
              (v = v.listener),
              S !== c && u.isPropagationStopped())
            )
              break t;
            (c = v), (u.currentTarget = w);
            try {
              c(u);
            } catch (_) {
              dr(_);
            }
            (u.currentTarget = null), (c = S);
          }
      }
    }
  }
  function ut(t, e) {
    var i = e[qo];
    i === void 0 && (i = e[qo] = new Set());
    var s = t + "__bubble";
    i.has(s) || (p1(e, t, 2, !1), i.add(s));
  }
  function Oc(t, e, i) {
    var s = 0;
    e && (s |= 4), p1(i, t, s, e);
  }
  var Mr = "_reactListening" + Math.random().toString(36).slice(2);
  function Rc(t) {
    if (!t[Mr]) {
      (t[Mr] = !0),
        v2.forEach(function (i) {
          i !== "selectionchange" && (H5.has(i) || Oc(i, !1, t), Oc(i, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Mr] || ((e[Mr] = !0), Oc("selectionchange", !1, e));
    }
  }
  function p1(t, e, i, s) {
    switch (B1(e)) {
      case 2:
        var u = uy;
        break;
      case 8:
        u = cy;
        break;
      default:
        u = Yc;
    }
    (i = u.bind(null, e, i, t)),
      (u = void 0),
      !Jo ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      s
        ? u !== void 0
          ? t.addEventListener(e, i, { capture: !0, passive: u })
          : t.addEventListener(e, i, !0)
        : u !== void 0
        ? t.addEventListener(e, i, { passive: u })
        : t.addEventListener(e, i, !1);
  }
  function Lc(t, e, i, s, u) {
    var c = s;
    if (!(e & 1) && !(e & 2) && s !== null)
      t: for (;;) {
        if (s === null) return;
        var g = s.tag;
        if (g === 3 || g === 4) {
          var v = s.stateNode.containerInfo;
          if (v === u || (v.nodeType === 8 && v.parentNode === u)) break;
          if (g === 4)
            for (g = s.return; g !== null; ) {
              var S = g.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = g.stateNode.containerInfo),
                S === u || (S.nodeType === 8 && S.parentNode === u))
              )
                return;
              g = g.return;
            }
          for (; v !== null; ) {
            if (((g = ba(v)), g === null)) return;
            if (((S = g.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              s = c = g;
              continue t;
            }
            v = v.parentNode;
          }
        }
        s = s.return;
      }
    R2(function () {
      var w = c,
        _ = Wo(i),
        U = [];
      t: {
        var N = id.get(t);
        if (N !== void 0) {
          var j = qs,
            Z = t;
          switch (t) {
            case "keypress":
              if (Gs(i) === 0) break t;
            case "keydown":
            case "keyup":
              j = R6;
              break;
            case "focusin":
              (Z = "focus"), (j = nu);
              break;
            case "focusout":
              (Z = "blur"), (j = nu);
              break;
            case "beforeblur":
            case "afterblur":
              j = nu;
              break;
            case "click":
              if (i.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = N2;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = v6;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = N6;
              break;
            case td:
            case ed:
            case nd:
              j = S6;
              break;
            case ad:
              j = j6;
              break;
            case "scroll":
            case "scrollend":
              j = g6;
              break;
            case "wheel":
              j = H6;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = C6;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = j2;
              break;
            case "toggle":
            case "beforetoggle":
              j = U6;
          }
          var nt = (e & 4) !== 0,
            zt = !nt && (t === "scroll" || t === "scrollend"),
            O = nt ? (N !== null ? N + "Capture" : null) : N;
          nt = [];
          for (var E = w, R; E !== null; ) {
            var H = E;
            if (
              ((R = H.stateNode),
              (H = H.tag),
              (H !== 5 && H !== 26 && H !== 27) ||
                R === null ||
                O === null ||
                ((H = nl(E, O)), H != null && nt.push(Bl(E, H, R))),
              zt)
            )
              break;
            E = E.return;
          }
          0 < nt.length &&
            ((N = new j(N, Z, null, i, _)),
            U.push({ event: N, listeners: nt }));
        }
      }
      if (!(e & 7)) {
        t: {
          if (
            ((N = t === "mouseover" || t === "pointerover"),
            (j = t === "mouseout" || t === "pointerout"),
            N &&
              i !== Qo &&
              (Z = i.relatedTarget || i.fromElement) &&
              (ba(Z) || Z[ti]))
          )
            break t;
          if (
            (j || N) &&
            ((N =
              _.window === _
                ? _
                : (N = _.ownerDocument)
                ? N.defaultView || N.parentWindow
                : window),
            j
              ? ((Z = i.relatedTarget || i.toElement),
                (j = w),
                (Z = Z ? ba(Z) : null),
                Z !== null &&
                  ((zt = J(Z)),
                  (nt = Z.tag),
                  Z !== zt || (nt !== 5 && nt !== 27 && nt !== 6)) &&
                  (Z = null))
              : ((j = null), (Z = w)),
            j !== Z)
          ) {
            if (
              ((nt = N2),
              (H = "onMouseLeave"),
              (O = "onMouseEnter"),
              (E = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((nt = j2),
                (H = "onPointerLeave"),
                (O = "onPointerEnter"),
                (E = "pointer")),
              (zt = j == null ? N : el(j)),
              (R = Z == null ? N : el(Z)),
              (N = new nt(H, E + "leave", j, i, _)),
              (N.target = zt),
              (N.relatedTarget = R),
              (H = null),
              ba(_) === w &&
                ((nt = new nt(O, E + "enter", Z, i, _)),
                (nt.target = R),
                (nt.relatedTarget = zt),
                (H = nt)),
              (zt = H),
              j && Z)
            )
              e: {
                for (nt = j, O = Z, E = 0, R = nt; R; R = Li(R)) E++;
                for (R = 0, H = O; H; H = Li(H)) R++;
                for (; 0 < E - R; ) (nt = Li(nt)), E--;
                for (; 0 < R - E; ) (O = Li(O)), R--;
                for (; E--; ) {
                  if (nt === O || (O !== null && nt === O.alternate)) break e;
                  (nt = Li(nt)), (O = Li(O));
                }
                nt = null;
              }
            else nt = null;
            j !== null && g1(U, N, j, nt, !1),
              Z !== null && zt !== null && g1(U, zt, Z, nt, !0);
          }
        }
        t: {
          if (
            ((N = w ? el(w) : window),
            (j = N.nodeName && N.nodeName.toLowerCase()),
            j === "select" || (j === "input" && N.type === "file"))
          )
            var X = Y2;
          else if (P2(N))
            if (q2) X = Q6;
            else {
              X = F6;
              var lt = Z6;
            }
          else
            (j = N.nodeName),
              !j ||
              j.toLowerCase() !== "input" ||
              (N.type !== "checkbox" && N.type !== "radio")
                ? w && Ko(w.elementType) && (X = Y2)
                : (X = K6);
          if (X && (X = X(t, w))) {
            G2(U, X, i, _);
            break t;
          }
          lt && lt(t, N, w),
            t === "focusout" &&
              w &&
              N.type === "number" &&
              w.memoizedProps.value != null &&
              Fo(N, "number", N.value);
        }
        switch (((lt = w ? el(w) : window), t)) {
          case "focusin":
            (P2(lt) || lt.contentEditable === "true") &&
              ((ui = lt), (ou = w), (cl = null));
            break;
          case "focusout":
            cl = ou = ui = null;
            break;
          case "mousedown":
            uu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (uu = !1), J2(U, i, _);
            break;
          case "selectionchange":
            if (J6) break;
          case "keydown":
          case "keyup":
            J2(U, i, _);
        }
        var W;
        if (iu)
          t: {
            switch (t) {
              case "compositionstart":
                var tt = "onCompositionStart";
                break t;
              case "compositionend":
                tt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                tt = "onCompositionUpdate";
                break t;
            }
            tt = void 0;
          }
        else
          oi
            ? U2(t, i) && (tt = "onCompositionEnd")
            : t === "keydown" &&
              i.keyCode === 229 &&
              (tt = "onCompositionStart");
        tt &&
          (_2 &&
            i.locale !== "ko" &&
            (oi || tt !== "onCompositionStart"
              ? tt === "onCompositionEnd" && oi && (W = L2())
              : ((Un = _),
                (Io = "value" in Un ? Un.value : Un.textContent),
                (oi = !0))),
          (lt = Dr(w, tt)),
          0 < lt.length &&
            ((tt = new V2(tt, t, null, i, _)),
            U.push({ event: tt, listeners: lt }),
            W ? (tt.data = W) : ((W = k2(i)), W !== null && (tt.data = W)))),
          (W = P6 ? G6(t, i) : Y6(t, i)) &&
            ((tt = Dr(w, "onBeforeInput")),
            0 < tt.length &&
              ((lt = new V2("onBeforeInput", "beforeinput", null, i, _)),
              U.push({ event: lt, listeners: tt }),
              (lt.data = W))),
          V5(U, t, w, i, _);
      }
      m1(U, e);
    });
  }
  function Bl(t, e, i) {
    return { instance: t, listener: e, currentTarget: i };
  }
  function Dr(t, e) {
    for (var i = e + "Capture", s = []; t !== null; ) {
      var u = t,
        c = u.stateNode;
      (u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          c === null ||
          ((u = nl(t, i)),
          u != null && s.unshift(Bl(t, u, c)),
          (u = nl(t, e)),
          u != null && s.push(Bl(t, u, c))),
        (t = t.return);
    }
    return s;
  }
  function Li(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function g1(t, e, i, s, u) {
    for (var c = e._reactName, g = []; i !== null && i !== s; ) {
      var v = i,
        S = v.alternate,
        w = v.stateNode;
      if (((v = v.tag), S !== null && S === s)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        w === null ||
        ((S = w),
        u
          ? ((w = nl(i, c)), w != null && g.unshift(Bl(i, w, S)))
          : u || ((w = nl(i, c)), w != null && g.push(Bl(i, w, S)))),
        (i = i.return);
    }
    g.length !== 0 && t.push({ event: e, listeners: g });
  }
  var B5 = /\r\n?/g,
    U5 = /\u0000|\uFFFD/g;
  function y1(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        B5,
        `
`
      )
      .replace(U5, "");
  }
  function v1(t, e) {
    return (e = y1(e)), y1(t) === e;
  }
  function Or() {}
  function yt(t, e, i, s, u, c) {
    switch (i) {
      case "children":
        typeof s == "string"
          ? e === "body" || (e === "textarea" && s === "") || li(t, s)
          : (typeof s == "number" || typeof s == "bigint") &&
            e !== "body" &&
            li(t, "" + s);
        break;
      case "className":
        Hs(t, "class", s);
        break;
      case "tabIndex":
        Hs(t, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Hs(t, i, s);
        break;
      case "style":
        D2(t, s, c);
        break;
      case "data":
        if (e !== "object") {
          Hs(t, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (e !== "a" || i !== "href")) {
          t.removeAttribute(i);
          break;
        }
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "symbol" ||
          typeof s == "boolean"
        ) {
          t.removeAttribute(i);
          break;
        }
        (s = ks("" + s)), t.setAttribute(i, s);
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          t.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" &&
            (i === "formAction"
              ? (e !== "input" && yt(t, e, "name", u.name, u, null),
                yt(t, e, "formEncType", u.formEncType, u, null),
                yt(t, e, "formMethod", u.formMethod, u, null),
                yt(t, e, "formTarget", u.formTarget, u, null))
              : (yt(t, e, "encType", u.encType, u, null),
                yt(t, e, "method", u.method, u, null),
                yt(t, e, "target", u.target, u, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          t.removeAttribute(i);
          break;
        }
        (s = ks("" + s)), t.setAttribute(i, s);
        break;
      case "onClick":
        s != null && (t.onclick = Or);
        break;
      case "onScroll":
        s != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        s != null && ut("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(r(61));
          if (((i = s.__html), i != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = i;
          }
        }
        break;
      case "multiple":
        t.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        t.muted = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "boolean" ||
          typeof s == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (i = ks("" + s)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        s != null && typeof s != "function" && typeof s != "symbol"
          ? t.setAttribute(i, "" + s)
          : t.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        s && typeof s != "function" && typeof s != "symbol"
          ? t.setAttribute(i, "")
          : t.removeAttribute(i);
        break;
      case "capture":
      case "download":
        s === !0
          ? t.setAttribute(i, "")
          : s !== !1 &&
            s != null &&
            typeof s != "function" &&
            typeof s != "symbol"
          ? t.setAttribute(i, s)
          : t.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        !isNaN(s) &&
        1 <= s
          ? t.setAttribute(i, s)
          : t.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s)
          ? t.removeAttribute(i)
          : t.setAttribute(i, s);
        break;
      case "popover":
        ut("beforetoggle", t), ut("toggle", t), _s(t, "popover", s);
        break;
      case "xlinkActuate":
        un(t, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
        break;
      case "xlinkArcrole":
        un(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
        break;
      case "xlinkRole":
        un(t, "http://www.w3.org/1999/xlink", "xlink:role", s);
        break;
      case "xlinkShow":
        un(t, "http://www.w3.org/1999/xlink", "xlink:show", s);
        break;
      case "xlinkTitle":
        un(t, "http://www.w3.org/1999/xlink", "xlink:title", s);
        break;
      case "xlinkType":
        un(t, "http://www.w3.org/1999/xlink", "xlink:type", s);
        break;
      case "xmlBase":
        un(t, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
        break;
      case "xmlLang":
        un(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
        break;
      case "xmlSpace":
        un(t, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
        break;
      case "is":
        _s(t, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) ||
          (i[0] !== "o" && i[0] !== "O") ||
          (i[1] !== "n" && i[1] !== "N")) &&
          ((i = m6.get(i) || i), _s(t, i, s));
    }
  }
  function zc(t, e, i, s, u, c) {
    switch (i) {
      case "style":
        D2(t, s, c);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(r(61));
          if (((i = s.__html), i != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof s == "string"
          ? li(t, s)
          : (typeof s == "number" || typeof s == "bigint") && li(t, "" + s);
        break;
      case "onScroll":
        s != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        s != null && ut("scrollend", t);
        break;
      case "onClick":
        s != null && (t.onclick = Or);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!b2.hasOwnProperty(i))
          t: {
            if (
              i[0] === "o" &&
              i[1] === "n" &&
              ((u = i.endsWith("Capture")),
              (e = i.slice(2, u ? i.length - 7 : void 0)),
              (c = t[re] || null),
              (c = c != null ? c[i] : null),
              typeof c == "function" && t.removeEventListener(e, c, u),
              typeof s == "function")
            ) {
              typeof c != "function" &&
                c !== null &&
                (i in t
                  ? (t[i] = null)
                  : t.hasAttribute(i) && t.removeAttribute(i)),
                t.addEventListener(e, s, u);
              break t;
            }
            i in t
              ? (t[i] = s)
              : s === !0
              ? t.setAttribute(i, "")
              : _s(t, i, s);
          }
    }
  }
  function Jt(t, e, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ut("error", t), ut("load", t);
        var s = !1,
          u = !1,
          c;
        for (c in i)
          if (i.hasOwnProperty(c)) {
            var g = i[c];
            if (g != null)
              switch (c) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  yt(t, e, c, g, i, null);
              }
          }
        u && yt(t, e, "srcSet", i.srcSet, i, null),
          s && yt(t, e, "src", i.src, i, null);
        return;
      case "input":
        ut("invalid", t);
        var v = (c = g = u = null),
          S = null,
          w = null;
        for (s in i)
          if (i.hasOwnProperty(s)) {
            var _ = i[s];
            if (_ != null)
              switch (s) {
                case "name":
                  u = _;
                  break;
                case "type":
                  g = _;
                  break;
                case "checked":
                  S = _;
                  break;
                case "defaultChecked":
                  w = _;
                  break;
                case "value":
                  c = _;
                  break;
                case "defaultValue":
                  v = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null) throw Error(r(137, e));
                  break;
                default:
                  yt(t, e, s, _, i, null);
              }
          }
        A2(t, c, v, S, w, g, u, !1), Bs(t);
        return;
      case "select":
        ut("invalid", t), (s = g = c = null);
        for (u in i)
          if (i.hasOwnProperty(u) && ((v = i[u]), v != null))
            switch (u) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                g = v;
                break;
              case "multiple":
                s = v;
              default:
                yt(t, e, u, v, i, null);
            }
        (e = c),
          (i = g),
          (t.multiple = !!s),
          e != null ? ii(t, !!s, e, !1) : i != null && ii(t, !!s, i, !0);
        return;
      case "textarea":
        ut("invalid", t), (c = u = s = null);
        for (g in i)
          if (i.hasOwnProperty(g) && ((v = i[g]), v != null))
            switch (g) {
              case "value":
                s = v;
                break;
              case "defaultValue":
                u = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(r(91));
                break;
              default:
                yt(t, e, g, v, i, null);
            }
        w2(t, s, u, c), Bs(t);
        return;
      case "option":
        for (S in i)
          if (i.hasOwnProperty(S) && ((s = i[S]), s != null))
            switch (S) {
              case "selected":
                t.selected =
                  s && typeof s != "function" && typeof s != "symbol";
                break;
              default:
                yt(t, e, S, s, i, null);
            }
        return;
      case "dialog":
        ut("cancel", t), ut("close", t);
        break;
      case "iframe":
      case "object":
        ut("load", t);
        break;
      case "video":
      case "audio":
        for (s = 0; s < Hl.length; s++) ut(Hl[s], t);
        break;
      case "image":
        ut("error", t), ut("load", t);
        break;
      case "details":
        ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ut("error", t), ut("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (w in i)
          if (i.hasOwnProperty(w) && ((s = i[w]), s != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                yt(t, e, w, s, i, null);
            }
        return;
      default:
        if (Ko(e)) {
          for (_ in i)
            i.hasOwnProperty(_) &&
              ((s = i[_]), s !== void 0 && zc(t, e, _, s, i, void 0));
          return;
        }
    }
    for (v in i)
      i.hasOwnProperty(v) && ((s = i[v]), s != null && yt(t, e, v, s, i, null));
  }
  function k5(t, e, i, s) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          c = null,
          g = null,
          v = null,
          S = null,
          w = null,
          _ = null;
        for (j in i) {
          var U = i[j];
          if (i.hasOwnProperty(j) && U != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = U;
              default:
                s.hasOwnProperty(j) || yt(t, e, j, null, s, U);
            }
        }
        for (var N in s) {
          var j = s[N];
          if (((U = i[N]), s.hasOwnProperty(N) && (j != null || U != null)))
            switch (N) {
              case "type":
                c = j;
                break;
              case "name":
                u = j;
                break;
              case "checked":
                w = j;
                break;
              case "defaultChecked":
                _ = j;
                break;
              case "value":
                g = j;
                break;
              case "defaultValue":
                v = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(r(137, e));
                break;
              default:
                j !== U && yt(t, e, N, j, s, U);
            }
        }
        Zo(t, g, v, S, w, _, c, u);
        return;
      case "select":
        j = g = v = N = null;
        for (c in i)
          if (((S = i[c]), i.hasOwnProperty(c) && S != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                j = S;
              default:
                s.hasOwnProperty(c) || yt(t, e, c, null, s, S);
            }
        for (u in s)
          if (
            ((c = s[u]),
            (S = i[u]),
            s.hasOwnProperty(u) && (c != null || S != null))
          )
            switch (u) {
              case "value":
                N = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                g = c;
              default:
                c !== S && yt(t, e, u, c, s, S);
            }
        (e = v),
          (i = g),
          (s = j),
          N != null
            ? ii(t, !!i, N, !1)
            : !!s != !!i &&
              (e != null ? ii(t, !!i, e, !0) : ii(t, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        j = N = null;
        for (v in i)
          if (
            ((u = i[v]),
            i.hasOwnProperty(v) && u != null && !s.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                yt(t, e, v, null, s, u);
            }
        for (g in s)
          if (
            ((u = s[g]),
            (c = i[g]),
            s.hasOwnProperty(g) && (u != null || c != null))
          )
            switch (g) {
              case "value":
                N = u;
                break;
              case "defaultValue":
                j = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== c && yt(t, e, g, u, s, c);
            }
        E2(t, N, j);
        return;
      case "option":
        for (var Z in i)
          if (
            ((N = i[Z]),
            i.hasOwnProperty(Z) && N != null && !s.hasOwnProperty(Z))
          )
            switch (Z) {
              case "selected":
                t.selected = !1;
                break;
              default:
                yt(t, e, Z, null, s, N);
            }
        for (S in s)
          if (
            ((N = s[S]),
            (j = i[S]),
            s.hasOwnProperty(S) && N !== j && (N != null || j != null))
          )
            switch (S) {
              case "selected":
                t.selected =
                  N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                yt(t, e, S, N, s, j);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var nt in i)
          (N = i[nt]),
            i.hasOwnProperty(nt) &&
              N != null &&
              !s.hasOwnProperty(nt) &&
              yt(t, e, nt, null, s, N);
        for (w in s)
          if (
            ((N = s[w]),
            (j = i[w]),
            s.hasOwnProperty(w) && N !== j && (N != null || j != null))
          )
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(r(137, e));
                break;
              default:
                yt(t, e, w, N, s, j);
            }
        return;
      default:
        if (Ko(e)) {
          for (var zt in i)
            (N = i[zt]),
              i.hasOwnProperty(zt) &&
                N !== void 0 &&
                !s.hasOwnProperty(zt) &&
                zc(t, e, zt, void 0, s, N);
          for (_ in s)
            (N = s[_]),
              (j = i[_]),
              !s.hasOwnProperty(_) ||
                N === j ||
                (N === void 0 && j === void 0) ||
                zc(t, e, _, N, s, j);
          return;
        }
    }
    for (var O in i)
      (N = i[O]),
        i.hasOwnProperty(O) &&
          N != null &&
          !s.hasOwnProperty(O) &&
          yt(t, e, O, null, s, N);
    for (U in s)
      (N = s[U]),
        (j = i[U]),
        !s.hasOwnProperty(U) ||
          N === j ||
          (N == null && j == null) ||
          yt(t, e, U, N, s, j);
  }
  var Nc = null,
    Vc = null;
  function Rr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function b1(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function x1(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function jc(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var _c = null;
  function P5() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === _c
        ? !1
        : ((_c = t), !0)
      : ((_c = null), !1);
  }
  var S1 = typeof setTimeout == "function" ? setTimeout : void 0,
    G5 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    T1 = typeof Promise == "function" ? Promise : void 0,
    Y5 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof T1 < "u"
        ? function (t) {
            return T1.resolve(null).then(t).catch(q5);
          }
        : S1;
  function q5(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Hc(t, e) {
    var i = e,
      s = 0;
    do {
      var u = i.nextSibling;
      if ((t.removeChild(i), u && u.nodeType === 8))
        if (((i = u.data), i === "/$")) {
          if (s === 0) {
            t.removeChild(u), Zl(e);
            return;
          }
          s--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || s++;
      i = u;
    } while (i);
    Zl(e);
  }
  function Bc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var i = e;
      switch (((e = e.nextSibling), i.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bc(i), Xo(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(i);
    }
  }
  function X5(t, e, i, s) {
    for (; t.nodeType === 1; ) {
      var u = i;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (s) {
        if (!t[tl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((c = t.getAttribute("rel")),
                c === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== u.rel ||
                t.getAttribute("href") !== (u.href == null ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((c = t.getAttribute("src")),
                (c !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  c &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === c) return t;
      } else return t;
      if (((t = He(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Z5(t, e, i) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !i) ||
        ((t = He(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function He(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  function C1(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var i = t.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (e === 0) return t;
          e--;
        } else i === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function A1(t, e, i) {
    switch (((e = Rr(i)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  var Le = new Map(),
    E1 = new Set();
  function Lr(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var An = ft.d;
  ft.d = { f: F5, r: K5, D: Q5, C: W5, L: $5, m: J5, X: ty, S: I5, M: ey };
  function F5() {
    var t = An.f(),
      e = Cr();
    return t || e;
  }
  function K5(t) {
    var e = ei(t);
    e !== null && e.tag === 5 && e.type === "form" ? Jd(e) : An.r(t);
  }
  var zi = typeof document > "u" ? null : document;
  function w1(t, e, i) {
    var s = zi;
    if (s && typeof e == "string" && e) {
      var u = Se(e);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof i == "string" && (u += '[crossorigin="' + i + '"]'),
        E1.has(u) ||
          (E1.add(u),
          (t = { rel: t, crossOrigin: i, href: e }),
          s.querySelector(u) === null &&
            ((e = s.createElement("link")),
            Jt(e, "link", t),
            Xt(e),
            s.head.appendChild(e)));
    }
  }
  function Q5(t) {
    An.D(t), w1("dns-prefetch", t, null);
  }
  function W5(t, e) {
    An.C(t, e), w1("preconnect", t, e);
  }
  function $5(t, e, i) {
    An.L(t, e, i);
    var s = zi;
    if (s && t && e) {
      var u = 'link[rel="preload"][as="' + Se(e) + '"]';
      e === "image" && i && i.imageSrcSet
        ? ((u += '[imagesrcset="' + Se(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == "string" &&
            (u += '[imagesizes="' + Se(i.imageSizes) + '"]'))
        : (u += '[href="' + Se(t) + '"]');
      var c = u;
      switch (e) {
        case "style":
          c = Ni(t);
          break;
        case "script":
          c = Vi(t);
      }
      Le.has(c) ||
        ((t = I(
          {
            rel: "preload",
            href: e === "image" && i && i.imageSrcSet ? void 0 : t,
            as: e,
          },
          i
        )),
        Le.set(c, t),
        s.querySelector(u) !== null ||
          (e === "style" && s.querySelector(Ul(c))) ||
          (e === "script" && s.querySelector(kl(c))) ||
          ((e = s.createElement("link")),
          Jt(e, "link", t),
          Xt(e),
          s.head.appendChild(e)));
    }
  }
  function J5(t, e) {
    An.m(t, e);
    var i = zi;
    if (i && t) {
      var s = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Se(s) + '"][href="' + Se(t) + '"]',
        c = u;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Vi(t);
      }
      if (
        !Le.has(c) &&
        ((t = I({ rel: "modulepreload", href: t }, e)),
        Le.set(c, t),
        i.querySelector(u) === null)
      ) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(kl(c))) return;
        }
        (s = i.createElement("link")),
          Jt(s, "link", t),
          Xt(s),
          i.head.appendChild(s);
      }
    }
  }
  function I5(t, e, i) {
    An.S(t, e, i);
    var s = zi;
    if (s && t) {
      var u = ni(s).hoistableStyles,
        c = Ni(t);
      e = e || "default";
      var g = u.get(c);
      if (!g) {
        var v = { loading: 0, preload: null };
        if ((g = s.querySelector(Ul(c)))) v.loading = 5;
        else {
          (t = I({ rel: "stylesheet", href: t, "data-precedence": e }, i)),
            (i = Le.get(c)) && Uc(t, i);
          var S = (g = s.createElement("link"));
          Xt(S),
            Jt(S, "link", t),
            (S._p = new Promise(function (w, _) {
              (S.onload = w), (S.onerror = _);
            })),
            S.addEventListener("load", function () {
              v.loading |= 1;
            }),
            S.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            zr(g, e, s);
        }
        (g = { type: "stylesheet", instance: g, count: 1, state: v }),
          u.set(c, g);
      }
    }
  }
  function ty(t, e) {
    An.X(t, e);
    var i = zi;
    if (i && t) {
      var s = ni(i).hoistableScripts,
        u = Vi(t),
        c = s.get(u);
      c ||
        ((c = i.querySelector(kl(u))),
        c ||
          ((t = I({ src: t, async: !0 }, e)),
          (e = Le.get(u)) && kc(t, e),
          (c = i.createElement("script")),
          Xt(c),
          Jt(c, "link", t),
          i.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        s.set(u, c));
    }
  }
  function ey(t, e) {
    An.M(t, e);
    var i = zi;
    if (i && t) {
      var s = ni(i).hoistableScripts,
        u = Vi(t),
        c = s.get(u);
      c ||
        ((c = i.querySelector(kl(u))),
        c ||
          ((t = I({ src: t, async: !0, type: "module" }, e)),
          (e = Le.get(u)) && kc(t, e),
          (c = i.createElement("script")),
          Xt(c),
          Jt(c, "link", t),
          i.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        s.set(u, c));
    }
  }
  function M1(t, e, i, s) {
    var u = (u = _n.current) ? Lr(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string"
          ? ((e = Ni(i.href)),
            (i = ni(u).hoistableStyles),
            (s = i.get(e)),
            s ||
              ((s = { type: "style", instance: null, count: 0, state: null }),
              i.set(e, s)),
            s)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          i.rel === "stylesheet" &&
          typeof i.href == "string" &&
          typeof i.precedence == "string"
        ) {
          t = Ni(i.href);
          var c = ni(u).hoistableStyles,
            g = c.get(t);
          if (
            (g ||
              ((u = u.ownerDocument || u),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(t, g),
              (c = u.querySelector(Ul(t))) &&
                !c._p &&
                ((g.instance = c), (g.state.loading = 5)),
              Le.has(t) ||
                ((i = {
                  rel: "preload",
                  as: "style",
                  href: i.href,
                  crossOrigin: i.crossOrigin,
                  integrity: i.integrity,
                  media: i.media,
                  hrefLang: i.hrefLang,
                  referrerPolicy: i.referrerPolicy,
                }),
                Le.set(t, i),
                c || ny(u, t, i, g.state))),
            e && s === null)
          )
            throw Error(r(528, ""));
          return g;
        }
        if (e && s !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = i.async),
          (i = i.src),
          typeof i == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Vi(i)),
              (i = ni(u).hoistableScripts),
              (s = i.get(e)),
              s ||
                ((s = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                i.set(e, s)),
              s)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Ni(t) {
    return 'href="' + Se(t) + '"';
  }
  function Ul(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function D1(t) {
    return I({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function ny(t, e, i, s) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (s.loading = 1)
      : ((e = t.createElement("link")),
        (s.preload = e),
        e.addEventListener("load", function () {
          return (s.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (s.loading |= 2);
        }),
        Jt(e, "link", i),
        Xt(e),
        t.head.appendChild(e));
  }
  function Vi(t) {
    return '[src="' + Se(t) + '"]';
  }
  function kl(t) {
    return "script[async]" + t;
  }
  function O1(t, e, i) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var s = t.querySelector('style[data-href~="' + Se(i.href) + '"]');
          if (s) return (e.instance = s), Xt(s), s;
          var u = I({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null,
          });
          return (
            (s = (t.ownerDocument || t).createElement("style")),
            Xt(s),
            Jt(s, "style", u),
            zr(s, i.precedence, t),
            (e.instance = s)
          );
        case "stylesheet":
          u = Ni(i.href);
          var c = t.querySelector(Ul(u));
          if (c) return (e.state.loading |= 4), (e.instance = c), Xt(c), c;
          (s = D1(i)),
            (u = Le.get(u)) && Uc(s, u),
            (c = (t.ownerDocument || t).createElement("link")),
            Xt(c);
          var g = c;
          return (
            (g._p = new Promise(function (v, S) {
              (g.onload = v), (g.onerror = S);
            })),
            Jt(c, "link", s),
            (e.state.loading |= 4),
            zr(c, i.precedence, t),
            (e.instance = c)
          );
        case "script":
          return (
            (c = Vi(i.src)),
            (u = t.querySelector(kl(c)))
              ? ((e.instance = u), Xt(u), u)
              : ((s = i),
                (u = Le.get(c)) && ((s = I({}, i)), kc(s, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                Xt(u),
                Jt(u, "link", s),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        !(e.state.loading & 4) &&
        ((s = e.instance), (e.state.loading |= 4), zr(s, i.precedence, t));
    return e.instance;
  }
  function zr(t, e, i) {
    for (
      var s = i.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = s.length ? s[s.length - 1] : null,
        c = u,
        g = 0;
      g < s.length;
      g++
    ) {
      var v = s[g];
      if (v.dataset.precedence === e) c = v;
      else if (c !== u) break;
    }
    c
      ? c.parentNode.insertBefore(t, c.nextSibling)
      : ((e = i.nodeType === 9 ? i.head : i), e.insertBefore(t, e.firstChild));
  }
  function Uc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function kc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Nr = null;
  function R1(t, e, i) {
    if (Nr === null) {
      var s = new Map(),
        u = (Nr = new Map());
      u.set(i, s);
    } else (u = Nr), (s = u.get(i)), s || ((s = new Map()), u.set(i, s));
    if (s.has(t)) return s;
    for (
      s.set(t, null), i = i.getElementsByTagName(t), u = 0;
      u < i.length;
      u++
    ) {
      var c = i[u];
      if (
        !(
          c[tl] ||
          c[It] ||
          (t === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = c.getAttribute(e) || "";
        g = t + g;
        var v = s.get(g);
        v ? v.push(c) : s.set(g, [c]);
      }
    }
    return s;
  }
  function L1(t, e, i) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        i,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function ay(t, e, i) {
    if (i === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function z1(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  var Pl = null;
  function iy() {}
  function ly(t, e, i) {
    if (Pl === null) throw Error(r(475));
    var s = Pl;
    if (
      e.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      !(e.state.loading & 4)
    ) {
      if (e.instance === null) {
        var u = Ni(i.href),
          c = t.querySelector(Ul(u));
        if (c) {
          (t = c._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (s.count++, (s = Vr.bind(s)), t.then(s, s)),
            (e.state.loading |= 4),
            (e.instance = c),
            Xt(c);
          return;
        }
        (c = t.ownerDocument || t),
          (i = D1(i)),
          (u = Le.get(u)) && Uc(i, u),
          (c = c.createElement("link")),
          Xt(c);
        var g = c;
        (g._p = new Promise(function (v, S) {
          (g.onload = v), (g.onerror = S);
        })),
          Jt(c, "link", i),
          (e.instance = c);
      }
      s.stylesheets === null && (s.stylesheets = new Map()),
        s.stylesheets.set(e, t),
        (t = e.state.preload) &&
          !(e.state.loading & 3) &&
          (s.count++,
          (e = Vr.bind(s)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function sy() {
    if (Pl === null) throw Error(r(475));
    var t = Pl;
    return (
      t.stylesheets && t.count === 0 && Pc(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var i = setTimeout(function () {
              if ((t.stylesheets && Pc(t, t.stylesheets), t.unsuspend)) {
                var s = t.unsuspend;
                (t.unsuspend = null), s();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(i);
              }
            );
          }
        : null
    );
  }
  function Vr() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Pc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var jr = null;
  function Pc(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (jr = new Map()),
        e.forEach(ry, t),
        (jr = null),
        Vr.call(t));
  }
  function ry(t, e) {
    if (!(e.state.loading & 4)) {
      var i = jr.get(t);
      if (i) var s = i.get(null);
      else {
        (i = new Map()), jr.set(t, i);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            c = 0;
          c < u.length;
          c++
        ) {
          var g = u[c];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (i.set(g.dataset.precedence, g), (s = g));
        }
        s && i.set(null, s);
      }
      (u = e.instance),
        (g = u.getAttribute("data-precedence")),
        (c = i.get(g) || s),
        c === s && i.set(null, u),
        i.set(g, u),
        this.count++,
        (s = Vr.bind(this)),
        u.addEventListener("load", s),
        u.addEventListener("error", s),
        c
          ? c.parentNode.insertBefore(u, c.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Gl = {
    $$typeof: C,
    Provider: null,
    Consumer: null,
    _currentValue: be,
    _currentValue2: be,
    _threadCount: 0,
  };
  function oy(t, e, i, s, u, c, g, v) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Yo(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yo(0)),
      (this.hiddenUpdates = Yo(null)),
      (this.identifierPrefix = s),
      (this.onUncaughtError = u),
      (this.onCaughtError = c),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function N1(t, e, i, s, u, c, g, v, S, w, _, U) {
    return (
      (t = new oy(t, e, i, g, v, S, w, U)),
      (e = 1),
      c === !0 && (e |= 24),
      (c = Oe(3, null, null, e)),
      (t.current = c),
      (c.stateNode = t),
      (e = bu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (c.memoizedState = { element: s, isDehydrated: i, cache: e }),
      Iu(c),
      t
    );
  }
  function V1(t) {
    return t ? ((t = di), t) : di;
  }
  function j1(t, e, i, s, u, c) {
    (u = V1(u)),
      s.context === null ? (s.context = u) : (s.pendingContext = u),
      (s = Fn(e)),
      (s.payload = { element: i }),
      (c = c === void 0 ? null : c),
      c !== null && (s.callback = c),
      (i = Kn(t, s, e)),
      i !== null && (le(i, t, e), El(i, t, e));
  }
  function _1(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var i = t.retryLane;
      t.retryLane = i !== 0 && i < e ? i : e;
    }
  }
  function Gc(t, e) {
    _1(t, e), (t = t.alternate) && _1(t, e);
  }
  function H1(t) {
    if (t.tag === 13) {
      var e = kn(t, 67108864);
      e !== null && le(e, t, 67108864), Gc(t, 67108864);
    }
  }
  var _r = !0;
  function uy(t, e, i, s) {
    var u = G.T;
    G.T = null;
    var c = ft.p;
    try {
      (ft.p = 2), Yc(t, e, i, s);
    } finally {
      (ft.p = c), (G.T = u);
    }
  }
  function cy(t, e, i, s) {
    var u = G.T;
    G.T = null;
    var c = ft.p;
    try {
      (ft.p = 8), Yc(t, e, i, s);
    } finally {
      (ft.p = c), (G.T = u);
    }
  }
  function Yc(t, e, i, s) {
    if (_r) {
      var u = qc(s);
      if (u === null) Lc(t, e, s, Hr, i), U1(t, s);
      else if (dy(u, t, e, i, s)) s.stopPropagation();
      else if ((U1(t, s), e & 4 && -1 < fy.indexOf(t))) {
        for (; u !== null; ) {
          var c = ei(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var g = va(c.pendingLanes);
                  if (g !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; g; ) {
                      var S = 1 << (31 - fe(g));
                      (v.entanglements[1] |= S), (g &= ~S);
                    }
                    Ke(c), !(Et & 6) && ((xr = Ye() + 500), _l(0));
                  }
                }
                break;
              case 13:
                (v = kn(c, 2)), v !== null && le(v, c, 2), Cr(), Gc(c, 2);
            }
          if (((c = qc(s)), c === null && Lc(t, e, s, Hr, i), c === u)) break;
          u = c;
        }
        u !== null && s.stopPropagation();
      } else Lc(t, e, s, null, i);
    }
  }
  function qc(t) {
    return (t = Wo(t)), Xc(t);
  }
  var Hr = null;
  function Xc(t) {
    if (((Hr = null), (t = ba(t)), t !== null)) {
      var e = J(t);
      if (e === null) t = null;
      else {
        var i = e.tag;
        if (i === 13) {
          if (((t = pt(e)), t !== null)) return t;
          t = null;
        } else if (i === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Hr = t), null;
  }
  function B1(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (W4()) {
          case o2:
            return 2;
          case u2:
            return 8;
          case zs:
          case $4:
            return 32;
          case c2:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zc = !1,
    ea = null,
    na = null,
    aa = null,
    Yl = new Map(),
    ql = new Map(),
    ia = [],
    fy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function U1(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ea = null;
        break;
      case "dragenter":
      case "dragleave":
        na = null;
        break;
      case "mouseover":
      case "mouseout":
        aa = null;
        break;
      case "pointerover":
      case "pointerout":
        Yl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ql.delete(e.pointerId);
    }
  }
  function Xl(t, e, i, s, u, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: e,
          domEventName: i,
          eventSystemFlags: s,
          nativeEvent: c,
          targetContainers: [u],
        }),
        e !== null && ((e = ei(e)), e !== null && H1(e)),
        t)
      : ((t.eventSystemFlags |= s),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function dy(t, e, i, s, u) {
    switch (e) {
      case "focusin":
        return (ea = Xl(ea, t, e, i, s, u)), !0;
      case "dragenter":
        return (na = Xl(na, t, e, i, s, u)), !0;
      case "mouseover":
        return (aa = Xl(aa, t, e, i, s, u)), !0;
      case "pointerover":
        var c = u.pointerId;
        return Yl.set(c, Xl(Yl.get(c) || null, t, e, i, s, u)), !0;
      case "gotpointercapture":
        return (
          (c = u.pointerId), ql.set(c, Xl(ql.get(c) || null, t, e, i, s, u)), !0
        );
    }
    return !1;
  }
  function k1(t) {
    var e = ba(t.target);
    if (e !== null) {
      var i = J(e);
      if (i !== null) {
        if (((e = i.tag), e === 13)) {
          if (((e = pt(i)), e !== null)) {
            (t.blockedOn = e),
              s6(t.priority, function () {
                if (i.tag === 13) {
                  var s = ge(),
                    u = kn(i, s);
                  u !== null && le(u, i, s), Gc(i, s);
                }
              });
            return;
          }
        } else if (e === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Br(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var i = qc(t.nativeEvent);
      if (i === null) {
        i = t.nativeEvent;
        var s = new i.constructor(i.type, i);
        (Qo = s), i.target.dispatchEvent(s), (Qo = null);
      } else return (e = ei(i)), e !== null && H1(e), (t.blockedOn = i), !1;
      e.shift();
    }
    return !0;
  }
  function P1(t, e, i) {
    Br(t) && i.delete(e);
  }
  function hy() {
    (Zc = !1),
      ea !== null && Br(ea) && (ea = null),
      na !== null && Br(na) && (na = null),
      aa !== null && Br(aa) && (aa = null),
      Yl.forEach(P1),
      ql.forEach(P1);
  }
  function Ur(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Zc ||
        ((Zc = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, hy)));
  }
  var kr = null;
  function G1(t) {
    kr !== t &&
      ((kr = t),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        kr === t && (kr = null);
        for (var e = 0; e < t.length; e += 3) {
          var i = t[e],
            s = t[e + 1],
            u = t[e + 2];
          if (typeof s != "function") {
            if (Xc(s || i) === null) continue;
            break;
          }
          var c = ei(i);
          c !== null &&
            (t.splice(e, 3),
            (e -= 3),
            ju(c, { pending: !0, data: u, method: i.method, action: s }, s, u));
        }
      }));
  }
  function Zl(t) {
    function e(S) {
      return Ur(S, t);
    }
    ea !== null && Ur(ea, t),
      na !== null && Ur(na, t),
      aa !== null && Ur(aa, t),
      Yl.forEach(e),
      ql.forEach(e);
    for (var i = 0; i < ia.length; i++) {
      var s = ia[i];
      s.blockedOn === t && (s.blockedOn = null);
    }
    for (; 0 < ia.length && ((i = ia[0]), i.blockedOn === null); )
      k1(i), i.blockedOn === null && ia.shift();
    if (((i = (t.ownerDocument || t).$$reactFormReplay), i != null))
      for (s = 0; s < i.length; s += 3) {
        var u = i[s],
          c = i[s + 1],
          g = u[re] || null;
        if (typeof c == "function") g || G1(i);
        else if (g) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (((u = c), (g = c[re] || null))) v = g.formAction;
            else if (Xc(u) !== null) continue;
          } else v = g.action;
          typeof v == "function" ? (i[s + 1] = v) : (i.splice(s, 3), (s -= 3)),
            G1(i);
        }
      }
  }
  function Fc(t) {
    this._internalRoot = t;
  }
  (Pr.prototype.render = Fc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var i = e.current,
        s = ge();
      j1(i, s, t, e, null, null);
    }),
    (Pr.prototype.unmount = Fc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          t.tag === 0 && Oi(),
            j1(t.current, 2, null, t, null, null),
            Cr(),
            (e[ti] = null);
        }
      });
  function Pr(t) {
    this._internalRoot = t;
  }
  Pr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = g2();
      t = { blockedOn: null, target: t, priority: e };
      for (var i = 0; i < ia.length && e !== 0 && e < ia[i].priority; i++);
      ia.splice(i, 0, t), i === 0 && k1(t);
    }
  };
  var Y1 = a.version;
  if (Y1 !== "19.0.0") throw Error(r(527, Y1, "19.0.0"));
  ft.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = $a(e)),
      (t = t !== null ? ya(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var my = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    findFiberByHostInstance: ba,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gr.isDisabled && Gr.supportsFiber)
      try {
        ($i = Gr.inject(my)), (ce = Gr);
      } catch {}
  }
  return (
    (Fl.createRoot = function (t, e) {
      if (!o(t)) throw Error(r(299));
      var i = !1,
        s = "",
        u = sh,
        c = rh,
        g = oh,
        v = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (i = !0),
          e.identifierPrefix !== void 0 && (s = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (g = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (v = e.unstable_transitionCallbacks)),
        (e = N1(t, 1, !1, null, null, i, s, u, c, g, v, null)),
        (t[ti] = e.current),
        Rc(t.nodeType === 8 ? t.parentNode : t),
        new Fc(e)
      );
    }),
    (Fl.hydrateRoot = function (t, e, i) {
      if (!o(t)) throw Error(r(299));
      var s = !1,
        u = "",
        c = sh,
        g = rh,
        v = oh,
        S = null,
        w = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (s = !0),
          i.identifierPrefix !== void 0 && (u = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (c = i.onUncaughtError),
          i.onCaughtError !== void 0 && (g = i.onCaughtError),
          i.onRecoverableError !== void 0 && (v = i.onRecoverableError),
          i.unstable_transitionCallbacks !== void 0 &&
            (S = i.unstable_transitionCallbacks),
          i.formState !== void 0 && (w = i.formState)),
        (e = N1(t, 1, !0, e, i ?? null, s, u, c, g, v, S, w)),
        (e.context = V1(null)),
        (i = e.current),
        (s = ge()),
        (u = Fn(s)),
        (u.callback = null),
        Kn(i, u, s),
        (e.current.lanes = s),
        Ii(e, s),
        Ke(e),
        (t[ti] = e.current),
        Rc(t),
        new Pr(e)
      );
    }),
    (Fl.version = "19.0.0"),
    Fl
  );
}
var Q1;
function Oy() {
  if (Q1) return Qc.exports;
  Q1 = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (Qc.exports = Dy()), Qc.exports;
}
var Ry = Oy();
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ const Ly = {
    prefix: "fas",
    iconName: "at",
    icon: [
      512,
      512,
      [61946],
      "40",
      "M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z",
    ],
  },
  zy = {
    prefix: "fas",
    iconName: "file-lines",
    icon: [
      384,
      512,
      [128441, 128462, 61686, "file-alt", "file-text"],
      "f15c",
      "M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z",
    ],
  },
  Ny = {
    prefix: "fas",
    iconName: "angles-down",
    icon: [
      448,
      512,
      ["angle-double-down"],
      "f103",
      "M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z",
    ],
  },
  Vy = Ny,
  jy = {
    prefix: "fas",
    iconName: "bars",
    icon: [
      448,
      512,
      ["navicon"],
      "f0c9",
      "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z",
    ],
  },
  u3 = {
    prefix: "fas",
    iconName: "list",
    icon: [
      512,
      512,
      ["list-squares"],
      "f03a",
      "M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z",
    ],
  },
  _y = {
    prefix: "fas",
    iconName: "paintbrush",
    icon: [
      576,
      512,
      [128396, "paint-brush"],
      "f1fc",
      "M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448L64 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z",
    ],
  },
  Hy = _y,
  By = {
    prefix: "fas",
    iconName: "globe",
    icon: [
      512,
      512,
      [127760],
      "f0ac",
      "M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z",
    ],
  },
  c3 = {
    prefix: "fas",
    iconName: "star",
    icon: [
      576,
      512,
      [11088, 61446],
      "f005",
      "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z",
    ],
  },
  Uy = {
    prefix: "fas",
    iconName: "server",
    icon: [
      512,
      512,
      [],
      "f233",
      "M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z",
    ],
  },
  ky = {
    prefix: "fas",
    iconName: "window-restore",
    icon: [
      512,
      512,
      [],
      "f2d2",
      "M432 64L208 64c-8.8 0-16 7.2-16 16l0 16-64 0 0-16c0-44.2 35.8-80 80-80L432 0c44.2 0 80 35.8 80 80l0 224c0 44.2-35.8 80-80 80l-16 0 0-64 16 0c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192zm64 32c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 192c-17.7 0-32 14.3-32 32z",
    ],
  },
  Py = {
    prefix: "fas",
    iconName: "code",
    icon: [
      640,
      512,
      [],
      "f121",
      "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z",
    ],
  },
  Gy = {
    prefix: "fas",
    iconName: "mobile-screen-button",
    icon: [
      384,
      512,
      ["mobile-alt"],
      "f3cd",
      "M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z",
    ],
  },
  Yy = {
    prefix: "fas",
    iconName: "wrench",
    icon: [
      512,
      512,
      [128295],
      "f0ad",
      "M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z",
    ],
  },
  f3 = {
    prefix: "fas",
    iconName: "envelope",
    icon: [
      512,
      512,
      [128386, 9993, 61443],
      "f0e0",
      "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z",
    ],
  },
  qy = {
    prefix: "fas",
    iconName: "angles-up",
    icon: [
      448,
      512,
      ["angle-double-up"],
      "f102",
      "M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z",
    ],
  },
  Xy = qy,
  Zy = {
    prefix: "fas",
    iconName: "circle-info",
    icon: [
      512,
      512,
      ["info-circle"],
      "f05a",
      "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
    ],
  },
  f0 = Zy,
  Fy = {
    prefix: "fas",
    iconName: "sun",
    icon: [
      512,
      512,
      [9728],
      "f185",
      "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z",
    ],
  },
  Ky = {
    prefix: "fas",
    iconName: "computer",
    icon: [
      640,
      512,
      [],
      "e4e5",
      "M384 96l0 224L64 320 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l117.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L384 384c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32zm464 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0zm16 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
    ],
  },
  Qy = {
    prefix: "fas",
    iconName: "xmark",
    icon: [
      384,
      512,
      [
        128473,
        10005,
        10006,
        10060,
        215,
        "close",
        "multiply",
        "remove",
        "times",
      ],
      "f00d",
      "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
    ],
  },
  Wy = Qy,
  $y = {
    prefix: "fas",
    iconName: "moon",
    icon: [
      384,
      512,
      [127769, 9214],
      "f186",
      "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",
    ],
  },
  Jy = {
    prefix: "fas",
    iconName: "desktop",
    icon: [
      576,
      512,
      [128421, 61704, "desktop-alt"],
      "f390",
      "M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z",
    ],
  },
  Iy = {
    prefix: "fas",
    iconName: "database",
    icon: [
      448,
      512,
      [],
      "f1c0",
      "M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z",
    ],
  },
  d3 = {
    prefix: "fas",
    iconName: "graduation-cap",
    icon: [
      640,
      512,
      [127891, "mortar-board"],
      "f19d",
      "M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z",
    ],
  };
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ function t8(n, a, l) {
  return (
    (a = n8(a)) in n
      ? Object.defineProperty(n, a, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[a] = l),
    n
  );
}
function W1(n, a) {
  var l = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    a &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      })),
      l.push.apply(l, r);
  }
  return l;
}
function P(n) {
  for (var a = 1; a < arguments.length; a++) {
    var l = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? W1(Object(l), !0).forEach(function (r) {
          t8(n, r, l[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
      : W1(Object(l)).forEach(function (r) {
          Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(l, r));
        });
  }
  return n;
}
function e8(n, a) {
  if (typeof n != "object" || !n) return n;
  var l = n[Symbol.toPrimitive];
  if (l !== void 0) {
    var r = l.call(n, a || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function n8(n) {
  var a = e8(n, "string");
  return typeof a == "symbol" ? a : a + "";
}
const $1 = () => {};
let d0 = {},
  h3 = {},
  m3 = null,
  p3 = { mark: $1, measure: $1 };
try {
  typeof window < "u" && (d0 = window),
    typeof document < "u" && (h3 = document),
    typeof MutationObserver < "u" && (m3 = MutationObserver),
    typeof performance < "u" && (p3 = performance);
} catch {}
const { userAgent: J1 = "" } = d0.navigator || {},
  ca = d0,
  Tt = h3,
  I1 = m3,
  Yr = p3;
ca.document;
const Ln =
    !!Tt.documentElement &&
    !!Tt.head &&
    typeof Tt.addEventListener == "function" &&
    typeof Tt.createElement == "function",
  g3 = ~J1.indexOf("MSIE") || ~J1.indexOf("Trident/");
var a8 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
  i8 =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  y3 = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands",
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin",
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin",
    },
  },
  l8 = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  v3 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
  ae = "classic",
  To = "duotone",
  s8 = "sharp",
  r8 = "sharp-duotone",
  b3 = [ae, To, s8, r8],
  o8 = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    duotone: { 900: "fad", 400: "fadr", 300: "fadl", 100: "fadt" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds", 400: "fasdr", 300: "fasdl", 100: "fasdt" },
  },
  u8 = {
    "Font Awesome 6 Free": { 900: "fas", 400: "far" },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    },
    "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 6 Duotone": {
      900: "fad",
      400: "fadr",
      normal: "fadr",
      300: "fadl",
      100: "fadt",
    },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast",
    },
    "Font Awesome 6 Sharp Duotone": {
      900: "fasds",
      400: "fasdr",
      normal: "fasdr",
      300: "fasdl",
      100: "fasdt",
    },
  },
  c8 = new Map([
    [
      "classic",
      {
        defaultShortPrefixId: "fas",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin", "brands"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp",
      {
        defaultShortPrefixId: "fass",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "duotone",
      {
        defaultShortPrefixId: "fad",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp-duotone",
      {
        defaultShortPrefixId: "fasds",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
  ]),
  f8 = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      brands: "fab",
    },
    duotone: { solid: "fad", regular: "fadr", light: "fadl", thin: "fadt" },
    sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
    "sharp-duotone": {
      solid: "fasds",
      regular: "fasdr",
      light: "fasdl",
      thin: "fasdt",
    },
  },
  d8 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  tm = {
    kit: { fak: "kit", "fa-kit": "kit" },
    "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
  },
  h8 = ["kit"],
  m8 = {
    kit: { "fa-kit": "fak" },
    "kit-duotone": { "fa-kit-duotone": "fakd" },
  },
  p8 = ["fak", "fakd"],
  g8 = { kit: { fak: "fa-kit" }, "kit-duotone": { fakd: "fa-kit-duotone" } },
  em = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } },
  qr = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  y8 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
  v8 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  b8 = {
    "Font Awesome Kit": { 400: "fak", normal: "fak" },
    "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
  },
  x8 = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    duotone: { "fa-regular": "fadr", "fa-light": "fadl", "fa-thin": "fadt" },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt",
    },
  },
  S8 = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  },
  Af = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    duotone: { fadr: "fa-regular", fadl: "fa-light", fadt: "fa-thin" },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin",
    },
  },
  T8 = [
    "fa-solid",
    "fa-regular",
    "fa-light",
    "fa-thin",
    "fa-duotone",
    "fa-brands",
  ],
  Ef = [
    "fa",
    "fas",
    "far",
    "fal",
    "fat",
    "fad",
    "fadr",
    "fadl",
    "fadt",
    "fab",
    "fass",
    "fasr",
    "fasl",
    "fast",
    "fasds",
    "fasdr",
    "fasdl",
    "fasdt",
    ...y8,
    ...T8,
  ],
  C8 = ["solid", "regular", "light", "thin", "duotone", "brands"],
  x3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  A8 = x3.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  E8 = [
    ...Object.keys(S8),
    ...C8,
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    qr.GROUP,
    qr.SWAP_OPACITY,
    qr.PRIMARY,
    qr.SECONDARY,
  ]
    .concat(x3.map((n) => "".concat(n, "x")))
    .concat(A8.map((n) => "w-".concat(n))),
  w8 = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  };
const On = "___FONT_AWESOME___",
  wf = 16,
  S3 = "fa",
  T3 = "svg-inline--fa",
  Za = "data-fa-i2svg",
  Mf = "data-fa-pseudo-element",
  M8 = "data-fa-pseudo-element-pending",
  h0 = "data-prefix",
  m0 = "data-icon",
  nm = "fontawesome-i2svg",
  D8 = "async",
  O8 = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  C3 = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })();
function ys(n) {
  return new Proxy(n, {
    get(a, l) {
      return l in a ? a[l] : a[ae];
    },
  });
}
const A3 = P({}, y3);
A3[ae] = P(
  P(P(P({}, { "fa-duotone": "duotone" }), y3[ae]), tm.kit),
  tm["kit-duotone"]
);
const R8 = ys(A3),
  Df = P({}, f8);
Df[ae] = P(P(P(P({}, { duotone: "fad" }), Df[ae]), em.kit), em["kit-duotone"]);
const am = ys(Df),
  Of = P({}, Af);
Of[ae] = P(P({}, Of[ae]), g8.kit);
const p0 = ys(Of),
  Rf = P({}, x8);
Rf[ae] = P(P({}, Rf[ae]), m8.kit);
ys(Rf);
const L8 = a8,
  E3 = "fa-layers-text",
  z8 = i8,
  N8 = P({}, o8);
ys(N8);
const V8 = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  Jc = l8,
  j8 = [...h8, ...E8],
  as = ca.FontAwesomeConfig || {};
function _8(n) {
  var a = Tt.querySelector("script[" + n + "]");
  if (a) return a.getAttribute(n);
}
function H8(n) {
  return n === "" ? !0 : n === "false" ? !1 : n === "true" ? !0 : n;
}
Tt &&
  typeof Tt.querySelector == "function" &&
  [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ].forEach((a) => {
    let [l, r] = a;
    const o = H8(_8(l));
    o != null && (as[r] = o);
  });
const w3 = {
  styleDefault: "solid",
  familyDefault: ae,
  cssPrefix: S3,
  replacementClass: T3,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
as.familyPrefix && (as.cssPrefix = as.familyPrefix);
const Yi = P(P({}, w3), as);
Yi.autoReplaceSvg || (Yi.observeMutations = !1);
const F = {};
Object.keys(w3).forEach((n) => {
  Object.defineProperty(F, n, {
    enumerable: !0,
    set: function (a) {
      (Yi[n] = a), is.forEach((l) => l(F));
    },
    get: function () {
      return Yi[n];
    },
  });
});
Object.defineProperty(F, "familyPrefix", {
  enumerable: !0,
  set: function (n) {
    (Yi.cssPrefix = n), is.forEach((a) => a(F));
  },
  get: function () {
    return Yi.cssPrefix;
  },
});
ca.FontAwesomeConfig = F;
const is = [];
function B8(n) {
  return (
    is.push(n),
    () => {
      is.splice(is.indexOf(n), 1);
    }
  );
}
const sa = wf,
  We = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function U8(n) {
  if (!n || !Ln) return;
  const a = Tt.createElement("style");
  a.setAttribute("type", "text/css"), (a.innerHTML = n);
  const l = Tt.head.childNodes;
  let r = null;
  for (let o = l.length - 1; o > -1; o--) {
    const f = l[o],
      d = (f.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(d) > -1 && (r = f);
  }
  return Tt.head.insertBefore(a, r), n;
}
const k8 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function cs() {
  let n = 12,
    a = "";
  for (; n-- > 0; ) a += k8[(Math.random() * 62) | 0];
  return a;
}
function Zi(n) {
  const a = [];
  for (let l = (n || []).length >>> 0; l--; ) a[l] = n[l];
  return a;
}
function g0(n) {
  return n.classList
    ? Zi(n.classList)
    : (n.getAttribute("class") || "").split(" ").filter((a) => a);
}
function M3(n) {
  return ""
    .concat(n)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function P8(n) {
  return Object.keys(n || {})
    .reduce((a, l) => a + "".concat(l, '="').concat(M3(n[l]), '" '), "")
    .trim();
}
function Co(n) {
  return Object.keys(n || {}).reduce(
    (a, l) => a + "".concat(l, ": ").concat(n[l].trim(), ";"),
    ""
  );
}
function y0(n) {
  return (
    n.size !== We.size ||
    n.x !== We.x ||
    n.y !== We.y ||
    n.rotate !== We.rotate ||
    n.flipX ||
    n.flipY
  );
}
function G8(n) {
  let { transform: a, containerWidth: l, iconWidth: r } = n;
  const o = { transform: "translate(".concat(l / 2, " 256)") },
    f = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "),
    d = "scale("
      .concat((a.size / 16) * (a.flipX ? -1 : 1), ", ")
      .concat((a.size / 16) * (a.flipY ? -1 : 1), ") "),
    h = "rotate(".concat(a.rotate, " 0 0)"),
    m = { transform: "".concat(f, " ").concat(d, " ").concat(h) },
    p = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: o, inner: m, path: p };
}
function Y8(n) {
  let {
      transform: a,
      width: l = wf,
      height: r = wf,
      startCentered: o = !1,
    } = n,
    f = "";
  return (
    o && g3
      ? (f += "translate("
          .concat(a.x / sa - l / 2, "em, ")
          .concat(a.y / sa - r / 2, "em) "))
      : o
      ? (f += "translate(calc(-50% + "
          .concat(a.x / sa, "em), calc(-50% + ")
          .concat(a.y / sa, "em)) "))
      : (f += "translate(".concat(a.x / sa, "em, ").concat(a.y / sa, "em) ")),
    (f += "scale("
      .concat((a.size / sa) * (a.flipX ? -1 : 1), ", ")
      .concat((a.size / sa) * (a.flipY ? -1 : 1), ") ")),
    (f += "rotate(".concat(a.rotate, "deg) ")),
    f
  );
}
var q8 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function D3() {
  const n = S3,
    a = T3,
    l = F.cssPrefix,
    r = F.replacementClass;
  let o = q8;
  if (l !== n || r !== a) {
    const f = new RegExp("\\.".concat(n, "\\-"), "g"),
      d = new RegExp("\\--".concat(n, "\\-"), "g"),
      h = new RegExp("\\.".concat(a), "g");
    o = o
      .replace(f, ".".concat(l, "-"))
      .replace(d, "--".concat(l, "-"))
      .replace(h, ".".concat(r));
  }
  return o;
}
let im = !1;
function Ic() {
  F.autoAddCss && !im && (U8(D3()), (im = !0));
}
var X8 = {
  mixout() {
    return { dom: { css: D3, insertCss: Ic } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Ic();
      },
      beforeI2svg() {
        Ic();
      },
    };
  },
};
const Rn = ca || {};
Rn[On] || (Rn[On] = {});
Rn[On].styles || (Rn[On].styles = {});
Rn[On].hooks || (Rn[On].hooks = {});
Rn[On].shims || (Rn[On].shims = []);
var $e = Rn[On];
const O3 = [],
  R3 = function () {
    Tt.removeEventListener("DOMContentLoaded", R3),
      (uo = 1),
      O3.map((n) => n());
  };
let uo = !1;
Ln &&
  ((uo = (Tt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    Tt.readyState
  )),
  uo || Tt.addEventListener("DOMContentLoaded", R3));
function Z8(n) {
  Ln && (uo ? setTimeout(n, 0) : O3.push(n));
}
function vs(n) {
  const { tag: a, attributes: l = {}, children: r = [] } = n;
  return typeof n == "string"
    ? M3(n)
    : "<"
        .concat(a, " ")
        .concat(P8(l), ">")
        .concat(r.map(vs).join(""), "</")
        .concat(a, ">");
}
function lm(n, a, l) {
  if (n && n[a] && n[a][l]) return { prefix: a, iconName: l, icon: n[a][l] };
}
var tf = function (a, l, r, o) {
  var f = Object.keys(a),
    d = f.length,
    h = l,
    m,
    p,
    y;
  for (r === void 0 ? ((m = 1), (y = a[f[0]])) : ((m = 0), (y = r)); m < d; m++)
    (p = f[m]), (y = h(y, a[p], p, a));
  return y;
};
function F8(n) {
  const a = [];
  let l = 0;
  const r = n.length;
  for (; l < r; ) {
    const o = n.charCodeAt(l++);
    if (o >= 55296 && o <= 56319 && l < r) {
      const f = n.charCodeAt(l++);
      (f & 64512) == 56320
        ? a.push(((o & 1023) << 10) + (f & 1023) + 65536)
        : (a.push(o), l--);
    } else a.push(o);
  }
  return a;
}
function Lf(n) {
  const a = F8(n);
  return a.length === 1 ? a[0].toString(16) : null;
}
function K8(n, a) {
  const l = n.length;
  let r = n.charCodeAt(a),
    o;
  return r >= 55296 &&
    r <= 56319 &&
    l > a + 1 &&
    ((o = n.charCodeAt(a + 1)), o >= 56320 && o <= 57343)
    ? (r - 55296) * 1024 + o - 56320 + 65536
    : r;
}
function sm(n) {
  return Object.keys(n).reduce((a, l) => {
    const r = n[l];
    return !!r.icon ? (a[r.iconName] = r.icon) : (a[l] = r), a;
  }, {});
}
function zf(n, a) {
  let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: r = !1 } = l,
    o = sm(a);
  typeof $e.hooks.addPack == "function" && !r
    ? $e.hooks.addPack(n, sm(a))
    : ($e.styles[n] = P(P({}, $e.styles[n] || {}), o)),
    n === "fas" && zf("fa", a);
}
const { styles: fs, shims: Q8 } = $e,
  L3 = Object.keys(p0),
  W8 = L3.reduce((n, a) => ((n[a] = Object.keys(p0[a])), n), {});
let v0 = null,
  z3 = {},
  N3 = {},
  V3 = {},
  j3 = {},
  _3 = {};
function $8(n) {
  return ~j8.indexOf(n);
}
function J8(n, a) {
  const l = a.split("-"),
    r = l[0],
    o = l.slice(1).join("-");
  return r === n && o !== "" && !$8(o) ? o : null;
}
const H3 = () => {
  const n = (r) => tf(fs, (o, f, d) => ((o[d] = tf(f, r, {})), o), {});
  (z3 = n(
    (r, o, f) => (
      o[3] && (r[o[3]] = f),
      o[2] &&
        o[2]
          .filter((h) => typeof h == "number")
          .forEach((h) => {
            r[h.toString(16)] = f;
          }),
      r
    )
  )),
    (N3 = n(
      (r, o, f) => (
        (r[f] = f),
        o[2] &&
          o[2]
            .filter((h) => typeof h == "string")
            .forEach((h) => {
              r[h] = f;
            }),
        r
      )
    )),
    (_3 = n((r, o, f) => {
      const d = o[2];
      return (
        (r[f] = f),
        d.forEach((h) => {
          r[h] = f;
        }),
        r
      );
    }));
  const a = "far" in fs || F.autoFetchSvg,
    l = tf(
      Q8,
      (r, o) => {
        const f = o[0];
        let d = o[1];
        const h = o[2];
        return (
          d === "far" && !a && (d = "fas"),
          typeof f == "string" && (r.names[f] = { prefix: d, iconName: h }),
          typeof f == "number" &&
            (r.unicodes[f.toString(16)] = { prefix: d, iconName: h }),
          r
        );
      },
      { names: {}, unicodes: {} }
    );
  (V3 = l.names),
    (j3 = l.unicodes),
    (v0 = Ao(F.styleDefault, { family: F.familyDefault }));
};
B8((n) => {
  v0 = Ao(n.styleDefault, { family: F.familyDefault });
});
H3();
function b0(n, a) {
  return (z3[n] || {})[a];
}
function I8(n, a) {
  return (N3[n] || {})[a];
}
function Ya(n, a) {
  return (_3[n] || {})[a];
}
function B3(n) {
  return V3[n] || { prefix: null, iconName: null };
}
function tv(n) {
  const a = j3[n],
    l = b0("fas", n);
  return (
    a ||
    (l ? { prefix: "fas", iconName: l } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function fa() {
  return v0;
}
const U3 = () => ({ prefix: null, iconName: null, rest: [] });
function ev(n) {
  let a = ae;
  const l = L3.reduce(
    (r, o) => ((r[o] = "".concat(F.cssPrefix, "-").concat(o)), r),
    {}
  );
  return (
    b3.forEach((r) => {
      (n.includes(l[r]) || n.some((o) => W8[r].includes(o))) && (a = r);
    }),
    a
  );
}
function Ao(n) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: l = ae } = a,
    r = R8[l][n];
  if (l === To && !n) return "fad";
  const o = am[l][n] || am[l][r],
    f = n in $e.styles ? n : null;
  return o || f || null;
}
function nv(n) {
  let a = [],
    l = null;
  return (
    n.forEach((r) => {
      const o = J8(F.cssPrefix, r);
      o ? (l = o) : r && a.push(r);
    }),
    { iconName: l, rest: a }
  );
}
function rm(n) {
  return n.sort().filter((a, l, r) => r.indexOf(a) === l);
}
function Eo(n) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: l = !1 } = a;
  let r = null;
  const o = Ef.concat(v8),
    f = rm(n.filter((x) => o.includes(x))),
    d = rm(n.filter((x) => !Ef.includes(x))),
    h = f.filter((x) => ((r = x), !v3.includes(x))),
    [m = null] = h,
    p = ev(f),
    y = P(P({}, nv(d)), {}, { prefix: Ao(m, { family: p }) });
  return P(
    P(
      P({}, y),
      sv({
        values: n,
        family: p,
        styles: fs,
        config: F,
        canonical: y,
        givenPrefix: r,
      })
    ),
    av(l, r, y)
  );
}
function av(n, a, l) {
  let { prefix: r, iconName: o } = l;
  if (n || !r || !o) return { prefix: r, iconName: o };
  const f = a === "fa" ? B3(o) : {},
    d = Ya(r, o);
  return (
    (o = f.iconName || d || o),
    (r = f.prefix || r),
    r === "far" && !fs.far && fs.fas && !F.autoFetchSvg && (r = "fas"),
    { prefix: r, iconName: o }
  );
}
const iv = b3.filter((n) => n !== ae || n !== To),
  lv = Object.keys(Af)
    .filter((n) => n !== ae)
    .map((n) => Object.keys(Af[n]))
    .flat();
function sv(n) {
  const {
      values: a,
      family: l,
      canonical: r,
      givenPrefix: o = "",
      styles: f = {},
      config: d = {},
    } = n,
    h = l === To,
    m = a.includes("fa-duotone") || a.includes("fad"),
    p = d.familyDefault === "duotone",
    y = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (
    (!h && (m || p || y) && (r.prefix = "fad"),
    (a.includes("fa-brands") || a.includes("fab")) && (r.prefix = "fab"),
    !r.prefix &&
      iv.includes(l) &&
      (Object.keys(f).find((b) => lv.includes(b)) || d.autoFetchSvg))
  ) {
    const b = c8.get(l).defaultShortPrefixId;
    (r.prefix = b), (r.iconName = Ya(r.prefix, r.iconName) || r.iconName);
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = fa() || "fas"), r;
}
class rv {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++)
      l[r] = arguments[r];
    const o = l.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((f) => {
      (this.definitions[f] = P(P({}, this.definitions[f] || {}), o[f])),
        zf(f, o[f]);
      const d = p0[ae][f];
      d && zf(d, o[f]), H3();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(a, l) {
    const r = l.prefix && l.iconName && l.icon ? { 0: l } : l;
    return (
      Object.keys(r).map((o) => {
        const { prefix: f, iconName: d, icon: h } = r[o],
          m = h[2];
        a[f] || (a[f] = {}),
          m.length > 0 &&
            m.forEach((p) => {
              typeof p == "string" && (a[f][p] = h);
            }),
          (a[f][d] = h);
      }),
      a
    );
  }
}
let om = [],
  ji = {};
const Gi = {},
  ov = Object.keys(Gi);
function uv(n, a) {
  let { mixoutsTo: l } = a;
  return (
    (om = n),
    (ji = {}),
    Object.keys(Gi).forEach((r) => {
      ov.indexOf(r) === -1 && delete Gi[r];
    }),
    om.forEach((r) => {
      const o = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(o).forEach((f) => {
          typeof o[f] == "function" && (l[f] = o[f]),
            typeof o[f] == "object" &&
              Object.keys(o[f]).forEach((d) => {
                l[f] || (l[f] = {}), (l[f][d] = o[f][d]);
              });
        }),
        r.hooks)
      ) {
        const f = r.hooks();
        Object.keys(f).forEach((d) => {
          ji[d] || (ji[d] = []), ji[d].push(f[d]);
        });
      }
      r.provides && r.provides(Gi);
    }),
    l
  );
}
function Nf(n, a) {
  for (
    var l = arguments.length, r = new Array(l > 2 ? l - 2 : 0), o = 2;
    o < l;
    o++
  )
    r[o - 2] = arguments[o];
  return (
    (ji[n] || []).forEach((d) => {
      a = d.apply(null, [a, ...r]);
    }),
    a
  );
}
function Fa(n) {
  for (
    var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), r = 1;
    r < a;
    r++
  )
    l[r - 1] = arguments[r];
  (ji[n] || []).forEach((f) => {
    f.apply(null, l);
  });
}
function da() {
  const n = arguments[0],
    a = Array.prototype.slice.call(arguments, 1);
  return Gi[n] ? Gi[n].apply(null, a) : void 0;
}
function Vf(n) {
  n.prefix === "fa" && (n.prefix = "fas");
  let { iconName: a } = n;
  const l = n.prefix || fa();
  if (a)
    return (a = Ya(l, a) || a), lm(k3.definitions, l, a) || lm($e.styles, l, a);
}
const k3 = new rv(),
  cv = () => {
    (F.autoReplaceSvg = !1), (F.observeMutations = !1), Fa("noAuto");
  },
  fv = {
    i2svg: function () {
      let n =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Ln
        ? (Fa("beforeI2svg", n), da("pseudoElements2svg", n), da("i2svg", n))
        : Promise.reject(new Error("Operation requires a DOM of some kind."));
    },
    watch: function () {
      let n =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: a } = n;
      F.autoReplaceSvg === !1 && (F.autoReplaceSvg = !0),
        (F.observeMutations = !0),
        Z8(() => {
          hv({ autoReplaceSvgRoot: a }), Fa("watch", n);
        });
    },
  },
  dv = {
    icon: (n) => {
      if (n === null) return null;
      if (typeof n == "object" && n.prefix && n.iconName)
        return {
          prefix: n.prefix,
          iconName: Ya(n.prefix, n.iconName) || n.iconName,
        };
      if (Array.isArray(n) && n.length === 2) {
        const a = n[1].indexOf("fa-") === 0 ? n[1].slice(3) : n[1],
          l = Ao(n[0]);
        return { prefix: l, iconName: Ya(l, a) || a };
      }
      if (
        typeof n == "string" &&
        (n.indexOf("".concat(F.cssPrefix, "-")) > -1 || n.match(L8))
      ) {
        const a = Eo(n.split(" "), { skipLookups: !0 });
        return {
          prefix: a.prefix || fa(),
          iconName: Ya(a.prefix, a.iconName) || a.iconName,
        };
      }
      if (typeof n == "string") {
        const a = fa();
        return { prefix: a, iconName: Ya(a, n) || n };
      }
    },
  },
  ve = {
    noAuto: cv,
    config: F,
    dom: fv,
    parse: dv,
    library: k3,
    findIconDefinition: Vf,
    toHtml: vs,
  },
  hv = function () {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: a = Tt } = n;
    (Object.keys($e.styles).length > 0 || F.autoFetchSvg) &&
      Ln &&
      F.autoReplaceSvg &&
      ve.dom.i2svg({ node: a });
  };
function wo(n, a) {
  return (
    Object.defineProperty(n, "abstract", { get: a }),
    Object.defineProperty(n, "html", {
      get: function () {
        return n.abstract.map((l) => vs(l));
      },
    }),
    Object.defineProperty(n, "node", {
      get: function () {
        if (!Ln) return;
        const l = Tt.createElement("div");
        return (l.innerHTML = n.html), l.children;
      },
    }),
    n
  );
}
function mv(n) {
  let {
    children: a,
    main: l,
    mask: r,
    attributes: o,
    styles: f,
    transform: d,
  } = n;
  if (y0(d) && l.found && !r.found) {
    const { width: h, height: m } = l,
      p = { x: h / m / 2, y: 0.5 };
    o.style = Co(
      P(
        P({}, f),
        {},
        {
          "transform-origin": ""
            .concat(p.x + d.x / 16, "em ")
            .concat(p.y + d.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: o, children: a }];
}
function pv(n) {
  let { prefix: a, iconName: l, children: r, attributes: o, symbol: f } = n;
  const d = f === !0 ? "".concat(a, "-").concat(F.cssPrefix, "-").concat(l) : f;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: P(P({}, o), {}, { id: d }), children: r },
      ],
    },
  ];
}
function x0(n) {
  const {
      icons: { main: a, mask: l },
      prefix: r,
      iconName: o,
      transform: f,
      symbol: d,
      title: h,
      maskId: m,
      titleId: p,
      extra: y,
      watchable: x = !1,
    } = n,
    { width: b, height: C } = l.found ? l : a,
    M = p8.includes(r),
    z = [F.replacementClass, o ? "".concat(F.cssPrefix, "-").concat(o) : ""]
      .filter((k) => y.classes.indexOf(k) === -1)
      .filter((k) => k !== "" || !!k)
      .concat(y.classes)
      .join(" ");
  let L = {
    children: [],
    attributes: P(
      P({}, y.attributes),
      {},
      {
        "data-prefix": r,
        "data-icon": o,
        class: z,
        role: y.attributes.role || "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(b, " ").concat(C),
      }
    ),
  };
  const D =
    M && !~y.classes.indexOf("fa-fw")
      ? { width: "".concat((b / C) * 16 * 0.0625, "em") }
      : {};
  x && (L.attributes[Za] = ""),
    h &&
      (L.children.push({
        tag: "title",
        attributes: {
          id: L.attributes["aria-labelledby"] || "title-".concat(p || cs()),
        },
        children: [h],
      }),
      delete L.attributes.title);
  const V = P(
      P({}, L),
      {},
      {
        prefix: r,
        iconName: o,
        main: a,
        mask: l,
        maskId: m,
        transform: f,
        symbol: d,
        styles: P(P({}, D), y.styles),
      }
    ),
    { children: B, attributes: Y } =
      l.found && a.found
        ? da("generateAbstractMask", V) || { children: [], attributes: {} }
        : da("generateAbstractIcon", V) || { children: [], attributes: {} };
  return (V.children = B), (V.attributes = Y), d ? pv(V) : mv(V);
}
function um(n) {
  const {
      content: a,
      width: l,
      height: r,
      transform: o,
      title: f,
      extra: d,
      watchable: h = !1,
    } = n,
    m = P(
      P(P({}, d.attributes), f ? { title: f } : {}),
      {},
      { class: d.classes.join(" ") }
    );
  h && (m[Za] = "");
  const p = P({}, d.styles);
  y0(o) &&
    ((p.transform = Y8({
      transform: o,
      startCentered: !0,
      width: l,
      height: r,
    })),
    (p["-webkit-transform"] = p.transform));
  const y = Co(p);
  y.length > 0 && (m.style = y);
  const x = [];
  return (
    x.push({ tag: "span", attributes: m, children: [a] }),
    f &&
      x.push({ tag: "span", attributes: { class: "sr-only" }, children: [f] }),
    x
  );
}
function gv(n) {
  const { content: a, title: l, extra: r } = n,
    o = P(
      P(P({}, r.attributes), l ? { title: l } : {}),
      {},
      { class: r.classes.join(" ") }
    ),
    f = Co(r.styles);
  f.length > 0 && (o.style = f);
  const d = [];
  return (
    d.push({ tag: "span", attributes: o, children: [a] }),
    l &&
      d.push({ tag: "span", attributes: { class: "sr-only" }, children: [l] }),
    d
  );
}
const { styles: ef } = $e;
function jf(n) {
  const a = n[0],
    l = n[1],
    [r] = n.slice(4);
  let o = null;
  return (
    Array.isArray(r)
      ? (o = {
          tag: "g",
          attributes: { class: "".concat(F.cssPrefix, "-").concat(Jc.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(F.cssPrefix, "-").concat(Jc.SECONDARY),
                fill: "currentColor",
                d: r[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(F.cssPrefix, "-").concat(Jc.PRIMARY),
                fill: "currentColor",
                d: r[1],
              },
            },
          ],
        })
      : (o = { tag: "path", attributes: { fill: "currentColor", d: r } }),
    { found: !0, width: a, height: l, icon: o }
  );
}
const yv = { found: !1, width: 512, height: 512 };
function vv(n, a) {
  !C3 &&
    !F.showMissingIcons &&
    n &&
    console.error(
      'Icon with name "'.concat(n, '" and prefix "').concat(a, '" is missing.')
    );
}
function _f(n, a) {
  let l = a;
  return (
    a === "fa" && F.styleDefault !== null && (a = fa()),
    new Promise((r, o) => {
      if (l === "fa") {
        const f = B3(n);
        (n = f.iconName || n), (a = f.prefix || a);
      }
      if (n && a && ef[a] && ef[a][n]) {
        const f = ef[a][n];
        return r(jf(f));
      }
      vv(n, a),
        r(
          P(
            P({}, yv),
            {},
            {
              icon:
                F.showMissingIcons && n ? da("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
const cm = () => {},
  Hf =
    F.measurePerformance && Yr && Yr.mark && Yr.measure
      ? Yr
      : { mark: cm, measure: cm },
  Jl = 'FA "6.7.2"',
  bv = (n) => (Hf.mark("".concat(Jl, " ").concat(n, " begins")), () => P3(n)),
  P3 = (n) => {
    Hf.mark("".concat(Jl, " ").concat(n, " ends")),
      Hf.measure(
        "".concat(Jl, " ").concat(n),
        "".concat(Jl, " ").concat(n, " begins"),
        "".concat(Jl, " ").concat(n, " ends")
      );
  };
var S0 = { begin: bv, end: P3 };
const to = () => {};
function fm(n) {
  return typeof (n.getAttribute ? n.getAttribute(Za) : null) == "string";
}
function xv(n) {
  const a = n.getAttribute ? n.getAttribute(h0) : null,
    l = n.getAttribute ? n.getAttribute(m0) : null;
  return a && l;
}
function Sv(n) {
  return (
    n &&
    n.classList &&
    n.classList.contains &&
    n.classList.contains(F.replacementClass)
  );
}
function Tv() {
  return F.autoReplaceSvg === !0
    ? eo.replace
    : eo[F.autoReplaceSvg] || eo.replace;
}
function Cv(n) {
  return Tt.createElementNS("http://www.w3.org/2000/svg", n);
}
function Av(n) {
  return Tt.createElement(n);
}
function G3(n) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: l = n.tag === "svg" ? Cv : Av } = a;
  if (typeof n == "string") return Tt.createTextNode(n);
  const r = l(n.tag);
  return (
    Object.keys(n.attributes || []).forEach(function (f) {
      r.setAttribute(f, n.attributes[f]);
    }),
    (n.children || []).forEach(function (f) {
      r.appendChild(G3(f, { ceFn: l }));
    }),
    r
  );
}
function Ev(n) {
  let a = " ".concat(n.outerHTML, " ");
  return (a = "".concat(a, "Font Awesome fontawesome.com ")), a;
}
const eo = {
  replace: function (n) {
    const a = n[0];
    if (a.parentNode)
      if (
        (n[1].forEach((l) => {
          a.parentNode.insertBefore(G3(l), a);
        }),
        a.getAttribute(Za) === null && F.keepOriginalSource)
      ) {
        let l = Tt.createComment(Ev(a));
        a.parentNode.replaceChild(l, a);
      } else a.remove();
  },
  nest: function (n) {
    const a = n[0],
      l = n[1];
    if (~g0(a).indexOf(F.replacementClass)) return eo.replace(n);
    const r = new RegExp("".concat(F.cssPrefix, "-.*"));
    if ((delete l[0].attributes.id, l[0].attributes.class)) {
      const f = l[0].attributes.class
        .split(" ")
        .reduce(
          (d, h) => (
            h === F.replacementClass || h.match(r)
              ? d.toSvg.push(h)
              : d.toNode.push(h),
            d
          ),
          { toNode: [], toSvg: [] }
        );
      (l[0].attributes.class = f.toSvg.join(" ")),
        f.toNode.length === 0
          ? a.removeAttribute("class")
          : a.setAttribute("class", f.toNode.join(" "));
    }
    const o = l.map((f) => vs(f)).join(`
`);
    a.setAttribute(Za, ""), (a.innerHTML = o);
  },
};
function dm(n) {
  n();
}
function Y3(n, a) {
  const l = typeof a == "function" ? a : to;
  if (n.length === 0) l();
  else {
    let r = dm;
    F.mutateApproach === D8 && (r = ca.requestAnimationFrame || dm),
      r(() => {
        const o = Tv(),
          f = S0.begin("mutate");
        n.map(o), f(), l();
      });
  }
}
let T0 = !1;
function q3() {
  T0 = !0;
}
function Bf() {
  T0 = !1;
}
let co = null;
function hm(n) {
  if (!I1 || !F.observeMutations) return;
  const {
    treeCallback: a = to,
    nodeCallback: l = to,
    pseudoElementsCallback: r = to,
    observeMutationsRoot: o = Tt,
  } = n;
  (co = new I1((f) => {
    if (T0) return;
    const d = fa();
    Zi(f).forEach((h) => {
      if (
        (h.type === "childList" &&
          h.addedNodes.length > 0 &&
          !fm(h.addedNodes[0]) &&
          (F.searchPseudoElements && r(h.target), a(h.target)),
        h.type === "attributes" &&
          h.target.parentNode &&
          F.searchPseudoElements &&
          r(h.target.parentNode),
        h.type === "attributes" && fm(h.target) && ~V8.indexOf(h.attributeName))
      )
        if (h.attributeName === "class" && xv(h.target)) {
          const { prefix: m, iconName: p } = Eo(g0(h.target));
          h.target.setAttribute(h0, m || d), p && h.target.setAttribute(m0, p);
        } else Sv(h.target) && l(h.target);
    });
  })),
    Ln &&
      co.observe(o, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
      });
}
function wv() {
  co && co.disconnect();
}
function Mv(n) {
  const a = n.getAttribute("style");
  let l = [];
  return (
    a &&
      (l = a.split(";").reduce((r, o) => {
        const f = o.split(":"),
          d = f[0],
          h = f.slice(1);
        return d && h.length > 0 && (r[d] = h.join(":").trim()), r;
      }, {})),
    l
  );
}
function Dv(n) {
  const a = n.getAttribute("data-prefix"),
    l = n.getAttribute("data-icon"),
    r = n.innerText !== void 0 ? n.innerText.trim() : "";
  let o = Eo(g0(n));
  return (
    o.prefix || (o.prefix = fa()),
    a && l && ((o.prefix = a), (o.iconName = l)),
    (o.iconName && o.prefix) ||
      (o.prefix &&
        r.length > 0 &&
        (o.iconName =
          I8(o.prefix, n.innerText) || b0(o.prefix, Lf(n.innerText))),
      !o.iconName &&
        F.autoFetchSvg &&
        n.firstChild &&
        n.firstChild.nodeType === Node.TEXT_NODE &&
        (o.iconName = n.firstChild.data)),
    o
  );
}
function Ov(n) {
  const a = Zi(n.attributes).reduce(
      (o, f) => (
        o.name !== "class" && o.name !== "style" && (o[f.name] = f.value), o
      ),
      {}
    ),
    l = n.getAttribute("title"),
    r = n.getAttribute("data-fa-title-id");
  return (
    F.autoA11y &&
      (l
        ? (a["aria-labelledby"] = ""
            .concat(F.replacementClass, "-title-")
            .concat(r || cs()))
        : ((a["aria-hidden"] = "true"), (a.focusable = "false"))),
    a
  );
}
function Rv() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: We,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function mm(n) {
  let a =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { styleParser: !0 };
  const { iconName: l, prefix: r, rest: o } = Dv(n),
    f = Ov(n),
    d = Nf("parseNodeAttributes", {}, n);
  let h = a.styleParser ? Mv(n) : [];
  return P(
    {
      iconName: l,
      title: n.getAttribute("title"),
      titleId: n.getAttribute("data-fa-title-id"),
      prefix: r,
      transform: We,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: o, styles: h, attributes: f },
    },
    d
  );
}
const { styles: Lv } = $e;
function X3(n) {
  const a = F.autoReplaceSvg === "nest" ? mm(n, { styleParser: !1 }) : mm(n);
  return ~a.extra.classes.indexOf(E3)
    ? da("generateLayersText", n, a)
    : da("generateSvgReplacementMutation", n, a);
}
function zv() {
  return [...d8, ...Ef];
}
function pm(n) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ln) return Promise.resolve();
  const l = Tt.documentElement.classList,
    r = (y) => l.add("".concat(nm, "-").concat(y)),
    o = (y) => l.remove("".concat(nm, "-").concat(y)),
    f = F.autoFetchSvg ? zv() : v3.concat(Object.keys(Lv));
  f.includes("fa") || f.push("fa");
  const d = [".".concat(E3, ":not([").concat(Za, "])")]
    .concat(f.map((y) => ".".concat(y, ":not([").concat(Za, "])")))
    .join(", ");
  if (d.length === 0) return Promise.resolve();
  let h = [];
  try {
    h = Zi(n.querySelectorAll(d));
  } catch {}
  if (h.length > 0) r("pending"), o("complete");
  else return Promise.resolve();
  const m = S0.begin("onTree"),
    p = h.reduce((y, x) => {
      try {
        const b = X3(x);
        b && y.push(b);
      } catch (b) {
        C3 || (b.name === "MissingIcon" && console.error(b));
      }
      return y;
    }, []);
  return new Promise((y, x) => {
    Promise.all(p)
      .then((b) => {
        Y3(b, () => {
          r("active"),
            r("complete"),
            o("pending"),
            typeof a == "function" && a(),
            m(),
            y();
        });
      })
      .catch((b) => {
        m(), x(b);
      });
  });
}
function Nv(n) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  X3(n).then((l) => {
    l && Y3([l], a);
  });
}
function Vv(n) {
  return function (a) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (a || {}).icon ? a : Vf(a || {});
    let { mask: o } = l;
    return (
      o && (o = (o || {}).icon ? o : Vf(o || {})),
      n(r, P(P({}, l), {}, { mask: o }))
    );
  };
}
const jv = function (n) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: l = We,
    symbol: r = !1,
    mask: o = null,
    maskId: f = null,
    title: d = null,
    titleId: h = null,
    classes: m = [],
    attributes: p = {},
    styles: y = {},
  } = a;
  if (!n) return;
  const { prefix: x, iconName: b, icon: C } = n;
  return wo(
    P({ type: "icon" }, n),
    () => (
      Fa("beforeDOMElementCreation", { iconDefinition: n, params: a }),
      F.autoA11y &&
        (d
          ? (p["aria-labelledby"] = ""
              .concat(F.replacementClass, "-title-")
              .concat(h || cs()))
          : ((p["aria-hidden"] = "true"), (p.focusable = "false"))),
      x0({
        icons: {
          main: jf(C),
          mask: o
            ? jf(o.icon)
            : { found: !1, width: null, height: null, icon: {} },
        },
        prefix: x,
        iconName: b,
        transform: P(P({}, We), l),
        symbol: r,
        title: d,
        maskId: f,
        titleId: h,
        extra: { attributes: p, styles: y, classes: m },
      })
    )
  );
};
var _v = {
    mixout() {
      return { icon: Vv(jv) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(n) {
          return (n.treeCallback = pm), (n.nodeCallback = Nv), n;
        },
      };
    },
    provides(n) {
      (n.i2svg = function (a) {
        const { node: l = Tt, callback: r = () => {} } = a;
        return pm(l, r);
      }),
        (n.generateSvgReplacementMutation = function (a, l) {
          const {
            iconName: r,
            title: o,
            titleId: f,
            prefix: d,
            transform: h,
            symbol: m,
            mask: p,
            maskId: y,
            extra: x,
          } = l;
          return new Promise((b, C) => {
            Promise.all([
              _f(r, d),
              p.iconName
                ? _f(p.iconName, p.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then((M) => {
                let [z, L] = M;
                b([
                  a,
                  x0({
                    icons: { main: z, mask: L },
                    prefix: d,
                    iconName: r,
                    transform: h,
                    symbol: m,
                    maskId: y,
                    title: o,
                    titleId: f,
                    extra: x,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(C);
          });
        }),
        (n.generateAbstractIcon = function (a) {
          let {
            children: l,
            attributes: r,
            main: o,
            transform: f,
            styles: d,
          } = a;
          const h = Co(d);
          h.length > 0 && (r.style = h);
          let m;
          return (
            y0(f) &&
              (m = da("generateAbstractTransformGrouping", {
                main: o,
                transform: f,
                containerWidth: o.width,
                iconWidth: o.width,
              })),
            l.push(m || o.icon),
            { children: l, attributes: r }
          );
        });
    },
  },
  Hv = {
    mixout() {
      return {
        layer(n) {
          let a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: l = [] } = a;
          return wo({ type: "layer" }, () => {
            Fa("beforeDOMElementCreation", { assembler: n, params: a });
            let r = [];
            return (
              n((o) => {
                Array.isArray(o)
                  ? o.map((f) => {
                      r = r.concat(f.abstract);
                    })
                  : (r = r.concat(o.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(F.cssPrefix, "-layers"), ...l].join(" "),
                  },
                  children: r,
                },
              ]
            );
          });
        },
      };
    },
  },
  Bv = {
    mixout() {
      return {
        counter(n) {
          let a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title: l = null,
            classes: r = [],
            attributes: o = {},
            styles: f = {},
          } = a;
          return wo(
            { type: "counter", content: n },
            () => (
              Fa("beforeDOMElementCreation", { content: n, params: a }),
              gv({
                content: n.toString(),
                title: l,
                extra: {
                  attributes: o,
                  styles: f,
                  classes: ["".concat(F.cssPrefix, "-layers-counter"), ...r],
                },
              })
            )
          );
        },
      };
    },
  },
  Uv = {
    mixout() {
      return {
        text(n) {
          let a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform: l = We,
            title: r = null,
            classes: o = [],
            attributes: f = {},
            styles: d = {},
          } = a;
          return wo(
            { type: "text", content: n },
            () => (
              Fa("beforeDOMElementCreation", { content: n, params: a }),
              um({
                content: n,
                transform: P(P({}, We), l),
                title: r,
                extra: {
                  attributes: f,
                  styles: d,
                  classes: ["".concat(F.cssPrefix, "-layers-text"), ...o],
                },
              })
            )
          );
        },
      };
    },
    provides(n) {
      n.generateLayersText = function (a, l) {
        const { title: r, transform: o, extra: f } = l;
        let d = null,
          h = null;
        if (g3) {
          const m = parseInt(getComputedStyle(a).fontSize, 10),
            p = a.getBoundingClientRect();
          (d = p.width / m), (h = p.height / m);
        }
        return (
          F.autoA11y && !r && (f.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            a,
            um({
              content: a.innerHTML,
              width: d,
              height: h,
              transform: o,
              title: r,
              extra: f,
              watchable: !0,
            }),
          ])
        );
      };
    },
  };
const kv = new RegExp('"', "ug"),
  gm = [1105920, 1112319],
  ym = P(
    P(P(P({}, { FontAwesome: { normal: "fas", 400: "fas" } }), u8), w8),
    b8
  ),
  Uf = Object.keys(ym).reduce((n, a) => ((n[a.toLowerCase()] = ym[a]), n), {}),
  Pv = Object.keys(Uf).reduce((n, a) => {
    const l = Uf[a];
    return (n[a] = l[900] || [...Object.entries(l)][0][1]), n;
  }, {});
function Gv(n) {
  const a = n.replace(kv, ""),
    l = K8(a, 0),
    r = l >= gm[0] && l <= gm[1],
    o = a.length === 2 ? a[0] === a[1] : !1;
  return { value: Lf(o ? a[0] : a), isSecondary: r || o };
}
function Yv(n, a) {
  const l = n.replace(/^['"]|['"]$/g, "").toLowerCase(),
    r = parseInt(a),
    o = isNaN(r) ? "normal" : r;
  return (Uf[l] || {})[o] || Pv[l];
}
function vm(n, a) {
  const l = "".concat(M8).concat(a.replace(":", "-"));
  return new Promise((r, o) => {
    if (n.getAttribute(l) !== null) return r();
    const d = Zi(n.children).filter((b) => b.getAttribute(Mf) === a)[0],
      h = ca.getComputedStyle(n, a),
      m = h.getPropertyValue("font-family"),
      p = m.match(z8),
      y = h.getPropertyValue("font-weight"),
      x = h.getPropertyValue("content");
    if (d && !p) return n.removeChild(d), r();
    if (p && x !== "none" && x !== "") {
      const b = h.getPropertyValue("content");
      let C = Yv(m, y);
      const { value: M, isSecondary: z } = Gv(b),
        L = p[0].startsWith("FontAwesome");
      let D = b0(C, M),
        V = D;
      if (L) {
        const B = tv(M);
        B.iconName && B.prefix && ((D = B.iconName), (C = B.prefix));
      }
      if (
        D &&
        !z &&
        (!d || d.getAttribute(h0) !== C || d.getAttribute(m0) !== V)
      ) {
        n.setAttribute(l, V), d && n.removeChild(d);
        const B = Rv(),
          { extra: Y } = B;
        (Y.attributes[Mf] = a),
          _f(D, C)
            .then((k) => {
              const $ = x0(
                  P(
                    P({}, B),
                    {},
                    {
                      icons: { main: k, mask: U3() },
                      prefix: C,
                      iconName: V,
                      extra: Y,
                      watchable: !0,
                    }
                  )
                ),
                at = Tt.createElementNS("http://www.w3.org/2000/svg", "svg");
              a === "::before"
                ? n.insertBefore(at, n.firstChild)
                : n.appendChild(at),
                (at.outerHTML = $.map((K) => vs(K)).join(`
`)),
                n.removeAttribute(l),
                r();
            })
            .catch(o);
      } else r();
    } else r();
  });
}
function qv(n) {
  return Promise.all([vm(n, "::before"), vm(n, "::after")]);
}
function Xv(n) {
  return (
    n.parentNode !== document.head &&
    !~O8.indexOf(n.tagName.toUpperCase()) &&
    !n.getAttribute(Mf) &&
    (!n.parentNode || n.parentNode.tagName !== "svg")
  );
}
function bm(n) {
  if (Ln)
    return new Promise((a, l) => {
      const r = Zi(n.querySelectorAll("*")).filter(Xv).map(qv),
        o = S0.begin("searchPseudoElements");
      q3(),
        Promise.all(r)
          .then(() => {
            o(), Bf(), a();
          })
          .catch(() => {
            o(), Bf(), l();
          });
    });
}
var Zv = {
  hooks() {
    return {
      mutationObserverCallbacks(n) {
        return (n.pseudoElementsCallback = bm), n;
      },
    };
  },
  provides(n) {
    n.pseudoElements2svg = function (a) {
      const { node: l = Tt } = a;
      F.searchPseudoElements && bm(l);
    };
  },
};
let xm = !1;
var Fv = {
  mixout() {
    return {
      dom: {
        unwatch() {
          q3(), (xm = !0);
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        hm(Nf("mutationObserverCallbacks", {}));
      },
      noAuto() {
        wv();
      },
      watch(n) {
        const { observeMutationsRoot: a } = n;
        xm
          ? Bf()
          : hm(Nf("mutationObserverCallbacks", { observeMutationsRoot: a }));
      },
    };
  },
};
const Sm = (n) => {
  let a = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return n
    .toLowerCase()
    .split(" ")
    .reduce((l, r) => {
      const o = r.toLowerCase().split("-"),
        f = o[0];
      let d = o.slice(1).join("-");
      if (f && d === "h") return (l.flipX = !0), l;
      if (f && d === "v") return (l.flipY = !0), l;
      if (((d = parseFloat(d)), isNaN(d))) return l;
      switch (f) {
        case "grow":
          l.size = l.size + d;
          break;
        case "shrink":
          l.size = l.size - d;
          break;
        case "left":
          l.x = l.x - d;
          break;
        case "right":
          l.x = l.x + d;
          break;
        case "up":
          l.y = l.y - d;
          break;
        case "down":
          l.y = l.y + d;
          break;
        case "rotate":
          l.rotate = l.rotate + d;
          break;
      }
      return l;
    }, a);
};
var Kv = {
  mixout() {
    return { parse: { transform: (n) => Sm(n) } };
  },
  hooks() {
    return {
      parseNodeAttributes(n, a) {
        const l = a.getAttribute("data-fa-transform");
        return l && (n.transform = Sm(l)), n;
      },
    };
  },
  provides(n) {
    n.generateAbstractTransformGrouping = function (a) {
      let { main: l, transform: r, containerWidth: o, iconWidth: f } = a;
      const d = { transform: "translate(".concat(o / 2, " 256)") },
        h = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "),
        m = "scale("
          .concat((r.size / 16) * (r.flipX ? -1 : 1), ", ")
          .concat((r.size / 16) * (r.flipY ? -1 : 1), ") "),
        p = "rotate(".concat(r.rotate, " 0 0)"),
        y = { transform: "".concat(h, " ").concat(m, " ").concat(p) },
        x = { transform: "translate(".concat((f / 2) * -1, " -256)") },
        b = { outer: d, inner: y, path: x };
      return {
        tag: "g",
        attributes: P({}, b.outer),
        children: [
          {
            tag: "g",
            attributes: P({}, b.inner),
            children: [
              {
                tag: l.icon.tag,
                children: l.icon.children,
                attributes: P(P({}, l.icon.attributes), b.path),
              },
            ],
          },
        ],
      };
    };
  },
};
const nf = { x: 0, y: 0, width: "100%", height: "100%" };
function Tm(n) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    n.attributes && (n.attributes.fill || a) && (n.attributes.fill = "black"), n
  );
}
function Qv(n) {
  return n.tag === "g" ? n.children : [n];
}
var Wv = {
    hooks() {
      return {
        parseNodeAttributes(n, a) {
          const l = a.getAttribute("data-fa-mask"),
            r = l ? Eo(l.split(" ").map((o) => o.trim())) : U3();
          return (
            r.prefix || (r.prefix = fa()),
            (n.mask = r),
            (n.maskId = a.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides(n) {
      n.generateAbstractMask = function (a) {
        let {
          children: l,
          attributes: r,
          main: o,
          mask: f,
          maskId: d,
          transform: h,
        } = a;
        const { width: m, icon: p } = o,
          { width: y, icon: x } = f,
          b = G8({ transform: h, containerWidth: y, iconWidth: m }),
          C = { tag: "rect", attributes: P(P({}, nf), {}, { fill: "white" }) },
          M = p.children ? { children: p.children.map(Tm) } : {},
          z = {
            tag: "g",
            attributes: P({}, b.inner),
            children: [
              Tm(
                P({ tag: p.tag, attributes: P(P({}, p.attributes), b.path) }, M)
              ),
            ],
          },
          L = { tag: "g", attributes: P({}, b.outer), children: [z] },
          D = "mask-".concat(d || cs()),
          V = "clip-".concat(d || cs()),
          B = {
            tag: "mask",
            attributes: P(
              P({}, nf),
              {},
              {
                id: D,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [C, L],
          },
          Y = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: V }, children: Qv(x) },
              B,
            ],
          };
        return (
          l.push(Y, {
            tag: "rect",
            attributes: P(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(V, ")"),
                mask: "url(#".concat(D, ")"),
              },
              nf
            ),
          }),
          { children: l, attributes: r }
        );
      };
    },
  },
  $v = {
    provides(n) {
      let a = !1;
      ca.matchMedia &&
        (a = ca.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (n.missingIconAbstract = function () {
          const l = [],
            r = { fill: "currentColor" },
            o = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          l.push({
            tag: "path",
            attributes: P(
              P({}, r),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          const f = P(P({}, o), {}, { attributeName: "opacity" }),
            d = {
              tag: "circle",
              attributes: P(P({}, r), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            a ||
              d.children.push(
                {
                  tag: "animate",
                  attributes: P(
                    P({}, o),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: P(P({}, f), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            l.push(d),
            l.push({
              tag: "path",
              attributes: P(
                P({}, r),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: a
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: P(P({}, f), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            a ||
              l.push({
                tag: "path",
                attributes: P(
                  P({}, r),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: P(P({}, f), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: l }
          );
        });
    },
  },
  Jv = {
    hooks() {
      return {
        parseNodeAttributes(n, a) {
          const l = a.getAttribute("data-fa-symbol"),
            r = l === null ? !1 : l === "" ? !0 : l;
          return (n.symbol = r), n;
        },
      };
    },
  },
  Iv = [X8, _v, Hv, Bv, Uv, Zv, Fv, Kv, Wv, $v, Jv];
uv(Iv, { mixoutsTo: ve });
ve.noAuto;
ve.config;
ve.library;
ve.dom;
const kf = ve.parse;
ve.findIconDefinition;
ve.toHtml;
const t7 = ve.icon;
ve.layer;
ve.text;
ve.counter;
var af = { exports: {} },
  lf,
  Cm;
function e7() {
  if (Cm) return lf;
  Cm = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (lf = n), lf;
}
var sf, Am;
function n7() {
  if (Am) return sf;
  Am = 1;
  var n = e7();
  function a() {}
  function l() {}
  return (
    (l.resetWarningCache = a),
    (sf = function () {
      function r(d, h, m, p, y, x) {
        if (x !== n) {
          var b = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((b.name = "Invariant Violation"), b);
        }
      }
      r.isRequired = r;
      function o() {
        return r;
      }
      var f = {
        array: r,
        bigint: r,
        bool: r,
        func: r,
        number: r,
        object: r,
        string: r,
        symbol: r,
        any: r,
        arrayOf: o,
        element: r,
        elementType: r,
        instanceOf: o,
        node: r,
        objectOf: o,
        oneOf: o,
        oneOfType: o,
        shape: o,
        exact: o,
        checkPropTypes: l,
        resetWarningCache: a,
      };
      return (f.PropTypes = f), f;
    }),
    sf
  );
}
var Em;
function a7() {
  return Em || ((Em = 1), (af.exports = n7()())), af.exports;
}
var i7 = a7();
const ot = xy(i7);
function wm(n, a) {
  var l = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    a &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      })),
      l.push.apply(l, r);
  }
  return l;
}
function Qe(n) {
  for (var a = 1; a < arguments.length; a++) {
    var l = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? wm(Object(l), !0).forEach(function (r) {
          _i(n, r, l[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
      : wm(Object(l)).forEach(function (r) {
          Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(l, r));
        });
  }
  return n;
}
function fo(n) {
  "@babel/helpers - typeof";
  return (
    (fo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              typeof Symbol == "function" &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          }),
    fo(n)
  );
}
function _i(n, a, l) {
  return (
    a in n
      ? Object.defineProperty(n, a, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[a] = l),
    n
  );
}
function l7(n, a) {
  if (n == null) return {};
  var l = {},
    r = Object.keys(n),
    o,
    f;
  for (f = 0; f < r.length; f++)
    (o = r[f]), !(a.indexOf(o) >= 0) && (l[o] = n[o]);
  return l;
}
function s7(n, a) {
  if (n == null) return {};
  var l = l7(n, a),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(n);
    for (o = 0; o < f.length; o++)
      (r = f[o]),
        !(a.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, r) &&
          (l[r] = n[r]);
  }
  return l;
}
function Pf(n) {
  return r7(n) || o7(n) || u7(n) || c7();
}
function r7(n) {
  if (Array.isArray(n)) return Gf(n);
}
function o7(n) {
  if (
    (typeof Symbol < "u" && n[Symbol.iterator] != null) ||
    n["@@iterator"] != null
  )
    return Array.from(n);
}
function u7(n, a) {
  if (n) {
    if (typeof n == "string") return Gf(n, a);
    var l = Object.prototype.toString.call(n).slice(8, -1);
    if (
      (l === "Object" && n.constructor && (l = n.constructor.name),
      l === "Map" || l === "Set")
    )
      return Array.from(n);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
      return Gf(n, a);
  }
}
function Gf(n, a) {
  (a == null || a > n.length) && (a = n.length);
  for (var l = 0, r = new Array(a); l < a; l++) r[l] = n[l];
  return r;
}
function c7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f7(n) {
  var a,
    l = n.beat,
    r = n.fade,
    o = n.beatFade,
    f = n.bounce,
    d = n.shake,
    h = n.flash,
    m = n.spin,
    p = n.spinPulse,
    y = n.spinReverse,
    x = n.pulse,
    b = n.fixedWidth,
    C = n.inverse,
    M = n.border,
    z = n.listItem,
    L = n.flip,
    D = n.size,
    V = n.rotation,
    B = n.pull,
    Y =
      ((a = {
        "fa-beat": l,
        "fa-fade": r,
        "fa-beat-fade": o,
        "fa-bounce": f,
        "fa-shake": d,
        "fa-flash": h,
        "fa-spin": m,
        "fa-spin-reverse": y,
        "fa-spin-pulse": p,
        "fa-pulse": x,
        "fa-fw": b,
        "fa-inverse": C,
        "fa-border": M,
        "fa-li": z,
        "fa-flip": L === !0,
        "fa-flip-horizontal": L === "horizontal" || L === "both",
        "fa-flip-vertical": L === "vertical" || L === "both",
      }),
      _i(a, "fa-".concat(D), typeof D < "u" && D !== null),
      _i(a, "fa-rotate-".concat(V), typeof V < "u" && V !== null && V !== 0),
      _i(a, "fa-pull-".concat(B), typeof B < "u" && B !== null),
      _i(a, "fa-swap-opacity", n.swapOpacity),
      a);
  return Object.keys(Y)
    .map(function (k) {
      return Y[k] ? k : null;
    })
    .filter(function (k) {
      return k;
    });
}
function d7(n) {
  return (n = n - 0), n === n;
}
function Z3(n) {
  return d7(n)
    ? n
    : ((n = n.replace(/[\-_\s]+(.)?/g, function (a, l) {
        return l ? l.toUpperCase() : "";
      })),
      n.substr(0, 1).toLowerCase() + n.substr(1));
}
var h7 = ["style"];
function m7(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function p7(n) {
  return n
    .split(";")
    .map(function (a) {
      return a.trim();
    })
    .filter(function (a) {
      return a;
    })
    .reduce(function (a, l) {
      var r = l.indexOf(":"),
        o = Z3(l.slice(0, r)),
        f = l.slice(r + 1).trim();
      return o.startsWith("webkit") ? (a[m7(o)] = f) : (a[o] = f), a;
    }, {});
}
function F3(n, a) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof a == "string") return a;
  var r = (a.children || []).map(function (m) {
      return F3(n, m);
    }),
    o = Object.keys(a.attributes || {}).reduce(
      function (m, p) {
        var y = a.attributes[p];
        switch (p) {
          case "class":
            (m.attrs.className = y), delete a.attributes.class;
            break;
          case "style":
            m.attrs.style = p7(y);
            break;
          default:
            p.indexOf("aria-") === 0 || p.indexOf("data-") === 0
              ? (m.attrs[p.toLowerCase()] = y)
              : (m.attrs[Z3(p)] = y);
        }
        return m;
      },
      { attrs: {} }
    ),
    f = l.style,
    d = f === void 0 ? {} : f,
    h = s7(l, h7);
  return (
    (o.attrs.style = Qe(Qe({}, o.attrs.style), d)),
    n.apply(void 0, [a.tag, Qe(Qe({}, o.attrs), h)].concat(Pf(r)))
  );
}
var K3 = !1;
try {
  K3 = !0;
} catch {}
function g7() {
  if (!K3 && console && typeof console.error == "function") {
    var n;
    (n = console).error.apply(n, arguments);
  }
}
function Mm(n) {
  if (n && fo(n) === "object" && n.prefix && n.iconName && n.icon) return n;
  if (kf.icon) return kf.icon(n);
  if (n === null) return null;
  if (n && fo(n) === "object" && n.prefix && n.iconName) return n;
  if (Array.isArray(n) && n.length === 2)
    return { prefix: n[0], iconName: n[1] };
  if (typeof n == "string") return { prefix: "fas", iconName: n };
}
function rf(n, a) {
  return (Array.isArray(a) && a.length > 0) || (!Array.isArray(a) && a)
    ? _i({}, n, a)
    : {};
}
var Dm = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  Dt = o3.forwardRef(function (n, a) {
    var l = Qe(Qe({}, Dm), n),
      r = l.icon,
      o = l.mask,
      f = l.symbol,
      d = l.className,
      h = l.title,
      m = l.titleId,
      p = l.maskId,
      y = Mm(r),
      x = rf("classes", [].concat(Pf(f7(l)), Pf((d || "").split(" ")))),
      b = rf(
        "transform",
        typeof l.transform == "string" ? kf.transform(l.transform) : l.transform
      ),
      C = rf("mask", Mm(o)),
      M = t7(
        y,
        Qe(
          Qe(Qe(Qe({}, x), b), C),
          {},
          { symbol: f, title: h, titleId: m, maskId: p }
        )
      );
    if (!M) return g7("Could not find icon", y), null;
    var z = M.abstract,
      L = { ref: a };
    return (
      Object.keys(l).forEach(function (D) {
        Dm.hasOwnProperty(D) || (L[D] = l[D]);
      }),
      y7(z[0], L)
    );
  });
Dt.displayName = "FontAwesomeIcon";
Dt.propTypes = {
  beat: ot.bool,
  border: ot.bool,
  beatFade: ot.bool,
  bounce: ot.bool,
  className: ot.string,
  fade: ot.bool,
  flash: ot.bool,
  mask: ot.oneOfType([ot.object, ot.array, ot.string]),
  maskId: ot.string,
  fixedWidth: ot.bool,
  inverse: ot.bool,
  flip: ot.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: ot.oneOfType([ot.object, ot.array, ot.string]),
  listItem: ot.bool,
  pull: ot.oneOf(["right", "left"]),
  pulse: ot.bool,
  rotation: ot.oneOf([0, 90, 180, 270]),
  shake: ot.bool,
  size: ot.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: ot.bool,
  spinPulse: ot.bool,
  spinReverse: ot.bool,
  symbol: ot.oneOfType([ot.bool, ot.string]),
  title: ot.string,
  titleId: ot.string,
  transform: ot.oneOfType([ot.string, ot.object]),
  swapOpacity: ot.bool,
};
var y7 = F3.bind(null, o3.createElement);
const C0 = A.createContext({});
function bs(n) {
  const a = A.useRef(null);
  return a.current === null && (a.current = n()), a.current;
}
const Mo = A.createContext(null),
  xs = A.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: "never",
  });
class v7 extends A.Component {
  getSnapshotBeforeUpdate(a) {
    const l = this.props.childRef.current;
    if (l && a.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = l.offsetHeight || 0),
        (r.width = l.offsetWidth || 0),
        (r.top = l.offsetTop),
        (r.left = l.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function b7({ children: n, isPresent: a }) {
  const l = A.useId(),
    r = A.useRef(null),
    o = A.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: f } = A.useContext(xs);
  return (
    A.useInsertionEffect(() => {
      const { width: d, height: h, top: m, left: p } = o.current;
      if (a || !r.current || !d || !h) return;
      r.current.dataset.motionPopId = l;
      const y = document.createElement("style");
      return (
        f && (y.nonce = f),
        document.head.appendChild(y),
        y.sheet &&
          y.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${h}px !important;
            top: ${m}px !important;
            left: ${p}px !important;
          }
        `),
        () => {
          document.head.removeChild(y);
        }
      );
    }, [a]),
    T.jsx(v7, {
      isPresent: a,
      childRef: r,
      sizeRef: o,
      children: A.cloneElement(n, { ref: r }),
    })
  );
}
const x7 = ({
  children: n,
  initial: a,
  isPresent: l,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: f,
  mode: d,
}) => {
  const h = bs(S7),
    m = A.useId(),
    p = A.useCallback(
      (x) => {
        h.set(x, !0);
        for (const b of h.values()) if (!b) return;
        r && r();
      },
      [h, r]
    ),
    y = A.useMemo(
      () => ({
        id: m,
        initial: a,
        isPresent: l,
        custom: o,
        onExitComplete: p,
        register: (x) => (h.set(x, !1), () => h.delete(x)),
      }),
      f ? [Math.random(), p] : [l, p]
    );
  return (
    A.useMemo(() => {
      h.forEach((x, b) => h.set(b, !1));
    }, [l]),
    A.useEffect(() => {
      !l && !h.size && r && r();
    }, [l]),
    d === "popLayout" && (n = T.jsx(b7, { isPresent: l, children: n })),
    T.jsx(Mo.Provider, { value: y, children: n })
  );
};
function S7() {
  return new Map();
}
function Q3(n = !0) {
  const a = A.useContext(Mo);
  if (a === null) return [!0, null];
  const { isPresent: l, onExitComplete: r, register: o } = a,
    f = A.useId();
  A.useEffect(() => {
    n && o(f);
  }, [n]);
  const d = A.useCallback(() => n && r && r(f), [f, r, n]);
  return !l && r ? [!1, d] : [!0];
}
const Xr = (n) => n.key || "";
function Om(n) {
  const a = [];
  return (
    A.Children.forEach(n, (l) => {
      A.isValidElement(l) && a.push(l);
    }),
    a
  );
}
const A0 = typeof window < "u",
  Do = A0 ? A.useLayoutEffect : A.useEffect,
  T7 = ({
    children: n,
    custom: a,
    initial: l = !0,
    onExitComplete: r,
    presenceAffectsLayout: o = !0,
    mode: f = "sync",
    propagate: d = !1,
  }) => {
    const [h, m] = Q3(d),
      p = A.useMemo(() => Om(n), [n]),
      y = d && !h ? [] : p.map(Xr),
      x = A.useRef(!0),
      b = A.useRef(p),
      C = bs(() => new Map()),
      [M, z] = A.useState(p),
      [L, D] = A.useState(p);
    Do(() => {
      (x.current = !1), (b.current = p);
      for (let Y = 0; Y < L.length; Y++) {
        const k = Xr(L[Y]);
        y.includes(k) ? C.delete(k) : C.get(k) !== !0 && C.set(k, !1);
      }
    }, [L, y.length, y.join("-")]);
    const V = [];
    if (p !== M) {
      let Y = [...p];
      for (let k = 0; k < L.length; k++) {
        const $ = L[k],
          at = Xr($);
        y.includes(at) || (Y.splice(k, 0, $), V.push($));
      }
      f === "wait" && V.length && (Y = V), D(Om(Y)), z(p);
      return;
    }
    const { forceRender: B } = A.useContext(C0);
    return T.jsx(T.Fragment, {
      children: L.map((Y) => {
        const k = Xr(Y),
          $ = d && !h ? !1 : p === L || y.includes(k),
          at = () => {
            if (C.has(k)) C.set(k, !0);
            else return;
            let K = !0;
            C.forEach((G) => {
              G || (K = !1);
            }),
              K &&
                (B == null || B(),
                D(b.current),
                d && (m == null || m()),
                r && r());
          };
        return T.jsx(
          x7,
          {
            isPresent: $,
            initial: !x.current || l ? void 0 : !1,
            custom: $ ? void 0 : a,
            presenceAffectsLayout: o,
            mode: f,
            onExitComplete: $ ? void 0 : at,
            children: Y,
          },
          k
        );
      }),
    });
  },
  se = (n) => n;
let C7 = se,
  Yf = se;
const A7 = { skipAnimations: !1, useManualTiming: !1 };
function E7(n) {
  let a = new Set(),
    l = new Set(),
    r = !1,
    o = !1;
  const f = new WeakSet();
  let d = { delta: 0, timestamp: 0, isProcessing: !1 };
  function h(p) {
    f.has(p) && (m.schedule(p), n()), p(d);
  }
  const m = {
    schedule: (p, y = !1, x = !1) => {
      const C = x && r ? a : l;
      return y && f.add(p), C.has(p) || C.add(p), p;
    },
    cancel: (p) => {
      l.delete(p), f.delete(p);
    },
    process: (p) => {
      if (((d = p), r)) {
        o = !0;
        return;
      }
      (r = !0),
        ([a, l] = [l, a]),
        a.forEach(h),
        a.clear(),
        (r = !1),
        o && ((o = !1), m.process(p));
    },
  };
  return m;
}
const Zr = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  w7 = 40;
function W3(n, a) {
  let l = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    f = () => (l = !0),
    d = Zr.reduce((D, V) => ((D[V] = E7(f)), D), {}),
    {
      read: h,
      resolveKeyframes: m,
      update: p,
      preRender: y,
      render: x,
      postRender: b,
    } = d,
    C = () => {
      const D = performance.now();
      (l = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(D - o.timestamp, w7), 1)),
        (o.timestamp = D),
        (o.isProcessing = !0),
        h.process(o),
        m.process(o),
        p.process(o),
        y.process(o),
        x.process(o),
        b.process(o),
        (o.isProcessing = !1),
        l && a && ((r = !1), n(C));
    },
    M = () => {
      (l = !0), (r = !0), o.isProcessing || n(C);
    };
  return {
    schedule: Zr.reduce((D, V) => {
      const B = d[V];
      return (D[V] = (Y, k = !1, $ = !1) => (l || M(), B.schedule(Y, k, $))), D;
    }, {}),
    cancel: (D) => {
      for (let V = 0; V < Zr.length; V++) d[Zr[V]].cancel(D);
    },
    state: o,
    steps: d,
  };
}
const {
    schedule: mt,
    cancel: nn,
    state: Yt,
    steps: of,
  } = W3(typeof requestAnimationFrame < "u" ? requestAnimationFrame : se, !0),
  $3 = A.createContext({ strict: !1 }),
  Rm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  qi = {};
for (const n in Rm) qi[n] = { isEnabled: (a) => Rm[n].some((l) => !!a[l]) };
function M7(n) {
  for (const a in n) qi[a] = { ...qi[a], ...n[a] };
}
const D7 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ho(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    D7.has(n)
  );
}
let J3 = (n) => !ho(n);
function O7(n) {
  n && (J3 = (a) => (a.startsWith("on") ? !ho(a) : n(a)));
}
try {
  O7(require("@emotion/is-prop-valid").default);
} catch {}
function R7(n, a, l) {
  const r = {};
  for (const o in n)
    (o === "values" && typeof n.values == "object") ||
      ((J3(o) ||
        (l === !0 && ho(o)) ||
        (!a && !ho(o)) ||
        (n.draggable && o.startsWith("onDrag"))) &&
        (r[o] = n[o]));
  return r;
}
function L7(n) {
  if (typeof Proxy > "u") return n;
  const a = new Map(),
    l = (...r) => n(...r);
  return new Proxy(l, {
    get: (r, o) =>
      o === "create" ? n : (a.has(o) || a.set(o, n(o)), a.get(o)),
  });
}
const Oo = A.createContext({});
function ds(n) {
  return typeof n == "string" || Array.isArray(n);
}
function Ro(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
const E0 = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  w0 = ["initial", ...E0];
function Lo(n) {
  return Ro(n.animate) || w0.some((a) => ds(n[a]));
}
function I3(n) {
  return !!(Lo(n) || n.variants);
}
function z7(n, a) {
  if (Lo(n)) {
    const { initial: l, animate: r } = n;
    return {
      initial: l === !1 || ds(l) ? l : void 0,
      animate: ds(r) ? r : void 0,
    };
  }
  return n.inherit !== !1 ? a : {};
}
function N7(n) {
  const { initial: a, animate: l } = z7(n, A.useContext(Oo));
  return A.useMemo(() => ({ initial: a, animate: l }), [Lm(a), Lm(l)]);
}
function Lm(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const V7 = Symbol.for("motionComponentSymbol");
function Hi(n) {
  return (
    n &&
    typeof n == "object" &&
    Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function j7(n, a, l) {
  return A.useCallback(
    (r) => {
      r && n.onMount && n.onMount(r),
        a && (r ? a.mount(r) : a.unmount()),
        l && (typeof l == "function" ? l(r) : Hi(l) && (l.current = r));
    },
    [a]
  );
}
const M0 = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  _7 = "framerAppearId",
  tg = "data-" + M0(_7),
  { schedule: D0, cancel: DA } = W3(queueMicrotask, !1),
  eg = A.createContext({});
function H7(n, a, l, r, o) {
  var f, d;
  const { visualElement: h } = A.useContext(Oo),
    m = A.useContext($3),
    p = A.useContext(Mo),
    y = A.useContext(xs).reducedMotion,
    x = A.useRef(null);
  (r = r || m.renderer),
    !x.current &&
      r &&
      (x.current = r(n, {
        visualState: a,
        parent: h,
        props: l,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: y,
      }));
  const b = x.current,
    C = A.useContext(eg);
  b &&
    !b.projection &&
    o &&
    (b.type === "html" || b.type === "svg") &&
    B7(x.current, l, o, C);
  const M = A.useRef(!1);
  A.useInsertionEffect(() => {
    b && M.current && b.update(l, p);
  });
  const z = l[tg],
    L = A.useRef(
      !!z &&
        !(
          !((f = window.MotionHandoffIsComplete) === null || f === void 0) &&
          f.call(window, z)
        ) &&
        ((d = window.MotionHasOptimisedAnimation) === null || d === void 0
          ? void 0
          : d.call(window, z))
    );
  return (
    Do(() => {
      b &&
        ((M.current = !0),
        (window.MotionIsMounted = !0),
        b.updateFeatures(),
        D0.render(b.render),
        L.current && b.animationState && b.animationState.animateChanges());
    }),
    A.useEffect(() => {
      b &&
        (!L.current && b.animationState && b.animationState.animateChanges(),
        L.current &&
          (queueMicrotask(() => {
            var D;
            (D = window.MotionHandoffMarkAsComplete) === null ||
              D === void 0 ||
              D.call(window, z);
          }),
          (L.current = !1)));
    }),
    b
  );
}
function B7(n, a, l, r) {
  const {
    layoutId: o,
    layout: f,
    drag: d,
    dragConstraints: h,
    layoutScroll: m,
    layoutRoot: p,
  } = a;
  (n.projection = new l(
    n.latestValues,
    a["data-framer-portal-id"] ? void 0 : ng(n.parent)
  )),
    n.projection.setOptions({
      layoutId: o,
      layout: f,
      alwaysMeasureLayout: !!d || (h && Hi(h)),
      visualElement: n,
      animationType: typeof f == "string" ? f : "both",
      initialPromotionConfig: r,
      layoutScroll: m,
      layoutRoot: p,
    });
}
function ng(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : ng(n.parent);
}
function U7({
  preloadedFeatures: n,
  createVisualElement: a,
  useRender: l,
  useVisualState: r,
  Component: o,
}) {
  var f, d;
  n && M7(n);
  function h(p, y) {
    let x;
    const b = { ...A.useContext(xs), ...p, layoutId: k7(p) },
      { isStatic: C } = b,
      M = N7(p),
      z = r(p, C);
    if (!C && A0) {
      P7();
      const L = G7(b);
      (x = L.MeasureLayout),
        (M.visualElement = H7(o, z, b, a, L.ProjectionNode));
    }
    return T.jsxs(Oo.Provider, {
      value: M,
      children: [
        x && M.visualElement
          ? T.jsx(x, { visualElement: M.visualElement, ...b })
          : null,
        l(o, p, j7(z, M.visualElement, y), z, C, M.visualElement),
      ],
    });
  }
  h.displayName = `motion.${
    typeof o == "string"
      ? o
      : `create(${
          (d = (f = o.displayName) !== null && f !== void 0 ? f : o.name) !==
            null && d !== void 0
            ? d
            : ""
        })`
  }`;
  const m = A.forwardRef(h);
  return (m[V7] = o), m;
}
function k7({ layoutId: n }) {
  const a = A.useContext(C0).id;
  return a && n !== void 0 ? a + "-" + n : n;
}
function P7(n, a) {
  A.useContext($3).strict;
}
function G7(n) {
  const { drag: a, layout: l } = qi;
  if (!a && !l) return {};
  const r = { ...a, ...l };
  return {
    MeasureLayout:
      (a != null && a.isEnabled(n)) || (l != null && l.isEnabled(n))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Y7 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function O0(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(Y7.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function zm(n) {
  const a = [{}, {}];
  return (
    n == null ||
      n.values.forEach((l, r) => {
        (a[0][r] = l.get()), (a[1][r] = l.getVelocity());
      }),
    a
  );
}
function R0(n, a, l, r) {
  if (typeof a == "function") {
    const [o, f] = zm(r);
    a = a(l !== void 0 ? l : n.custom, o, f);
  }
  if (
    (typeof a == "string" && (a = n.variants && n.variants[a]),
    typeof a == "function")
  ) {
    const [o, f] = zm(r);
    a = a(l !== void 0 ? l : n.custom, o, f);
  }
  return a;
}
const qf = (n) => Array.isArray(n),
  q7 = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
  X7 = (n) => (qf(n) ? n[n.length - 1] || 0 : n),
  Qt = (n) => !!(n && n.getVelocity);
function no(n) {
  const a = Qt(n) ? n.get() : n;
  return q7(a) ? a.toValue() : a;
}
function Z7(
  { scrapeMotionValuesFromProps: n, createRenderState: a, onUpdate: l },
  r,
  o,
  f
) {
  const d = { latestValues: F7(r, o, f, n), renderState: a() };
  return (
    l &&
      ((d.onMount = (h) => l({ props: r, current: h, ...d })),
      (d.onUpdate = (h) => l(h))),
    d
  );
}
const ag = (n) => (a, l) => {
  const r = A.useContext(Oo),
    o = A.useContext(Mo),
    f = () => Z7(n, a, r, o);
  return l ? f() : bs(f);
};
function F7(n, a, l, r) {
  const o = {},
    f = r(n, {});
  for (const b in f) o[b] = no(f[b]);
  let { initial: d, animate: h } = n;
  const m = Lo(n),
    p = I3(n);
  a &&
    p &&
    !m &&
    n.inherit !== !1 &&
    (d === void 0 && (d = a.initial), h === void 0 && (h = a.animate));
  let y = l ? l.initial === !1 : !1;
  y = y || d === !1;
  const x = y ? h : d;
  if (x && typeof x != "boolean" && !Ro(x)) {
    const b = Array.isArray(x) ? x : [x];
    for (let C = 0; C < b.length; C++) {
      const M = R0(n, b[C]);
      if (M) {
        const { transitionEnd: z, transition: L, ...D } = M;
        for (const V in D) {
          let B = D[V];
          if (Array.isArray(B)) {
            const Y = y ? B.length - 1 : 0;
            B = B[Y];
          }
          B !== null && (o[V] = B);
        }
        for (const V in z) o[V] = z[V];
      }
    }
  }
  return o;
}
const Fi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Qa = new Set(Fi),
  ig = (n) => (a) => typeof a == "string" && a.startsWith(n),
  lg = ig("--"),
  K7 = ig("var(--"),
  L0 = (n) => (K7(n) ? Q7.test(n.split("/*")[0].trim()) : !1),
  Q7 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  sg = (n, a) => (a && typeof n == "number" ? a.transform(n) : n),
  an = (n, a, l) => (l > a ? a : l < n ? n : l),
  Ki = {
    test: (n) => typeof n == "number",
    parse: parseFloat,
    transform: (n) => n,
  },
  hs = { ...Ki, transform: (n) => an(0, 1, n) },
  Fr = { ...Ki, default: 1 },
  Ss = (n) => ({
    test: (a) =>
      typeof a == "string" && a.endsWith(n) && a.split(" ").length === 1,
    parse: parseFloat,
    transform: (a) => `${a}${n}`,
  }),
  oa = Ss("deg"),
  Ie = Ss("%"),
  et = Ss("px"),
  W7 = Ss("vh"),
  $7 = Ss("vw"),
  Nm = {
    ...Ie,
    parse: (n) => Ie.parse(n) / 100,
    transform: (n) => Ie.transform(n * 100),
  },
  J7 = {
    borderWidth: et,
    borderTopWidth: et,
    borderRightWidth: et,
    borderBottomWidth: et,
    borderLeftWidth: et,
    borderRadius: et,
    radius: et,
    borderTopLeftRadius: et,
    borderTopRightRadius: et,
    borderBottomRightRadius: et,
    borderBottomLeftRadius: et,
    width: et,
    maxWidth: et,
    height: et,
    maxHeight: et,
    top: et,
    right: et,
    bottom: et,
    left: et,
    padding: et,
    paddingTop: et,
    paddingRight: et,
    paddingBottom: et,
    paddingLeft: et,
    margin: et,
    marginTop: et,
    marginRight: et,
    marginBottom: et,
    marginLeft: et,
    backgroundPositionX: et,
    backgroundPositionY: et,
  },
  I7 = {
    rotate: oa,
    rotateX: oa,
    rotateY: oa,
    rotateZ: oa,
    scale: Fr,
    scaleX: Fr,
    scaleY: Fr,
    scaleZ: Fr,
    skew: oa,
    skewX: oa,
    skewY: oa,
    distance: et,
    translateX: et,
    translateY: et,
    translateZ: et,
    x: et,
    y: et,
    z: et,
    perspective: et,
    transformPerspective: et,
    opacity: hs,
    originX: Nm,
    originY: Nm,
    originZ: et,
  },
  Vm = { ...Ki, transform: Math.round },
  z0 = {
    ...J7,
    ...I7,
    zIndex: Vm,
    size: et,
    fillOpacity: hs,
    strokeOpacity: hs,
    numOctaves: Vm,
  },
  t9 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  e9 = Fi.length;
function n9(n, a, l) {
  let r = "",
    o = !0;
  for (let f = 0; f < e9; f++) {
    const d = Fi[f],
      h = n[d];
    if (h === void 0) continue;
    let m = !0;
    if (
      (typeof h == "number"
        ? (m = h === (d.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(h) === 0),
      !m || l)
    ) {
      const p = sg(h, z0[d]);
      if (!m) {
        o = !1;
        const y = t9[d] || d;
        r += `${y}(${p}) `;
      }
      l && (a[d] = p);
    }
  }
  return (r = r.trim()), l ? (r = l(a, o ? "" : r)) : o && (r = "none"), r;
}
function N0(n, a, l) {
  const { style: r, vars: o, transformOrigin: f } = n;
  let d = !1,
    h = !1;
  for (const m in a) {
    const p = a[m];
    if (Qa.has(m)) {
      d = !0;
      continue;
    } else if (lg(m)) {
      o[m] = p;
      continue;
    } else {
      const y = sg(p, z0[m]);
      m.startsWith("origin") ? ((h = !0), (f[m] = y)) : (r[m] = y);
    }
  }
  if (
    (a.transform ||
      (d || l
        ? (r.transform = n9(a, n.transform, l))
        : r.transform && (r.transform = "none")),
    h)
  ) {
    const { originX: m = "50%", originY: p = "50%", originZ: y = 0 } = f;
    r.transformOrigin = `${m} ${p} ${y}`;
  }
}
function jm(n, a, l) {
  return typeof n == "string" ? n : et.transform(a + l * n);
}
function a9(n, a, l) {
  const r = jm(a, n.x, n.width),
    o = jm(l, n.y, n.height);
  return `${r} ${o}`;
}
const i9 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  l9 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function s9(n, a, l = 1, r = 0, o = !0) {
  n.pathLength = 1;
  const f = o ? i9 : l9;
  n[f.offset] = et.transform(-r);
  const d = et.transform(a),
    h = et.transform(l);
  n[f.array] = `${d} ${h}`;
}
function V0(
  n,
  {
    attrX: a,
    attrY: l,
    attrScale: r,
    originX: o,
    originY: f,
    pathLength: d,
    pathSpacing: h = 1,
    pathOffset: m = 0,
    ...p
  },
  y,
  x
) {
  if ((N0(n, p, x), y)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  (n.attrs = n.style), (n.style = {});
  const { attrs: b, style: C, dimensions: M } = n;
  b.transform && (M && (C.transform = b.transform), delete b.transform),
    M &&
      (o !== void 0 || f !== void 0 || C.transform) &&
      (C.transformOrigin = a9(
        M,
        o !== void 0 ? o : 0.5,
        f !== void 0 ? f : 0.5
      )),
    a !== void 0 && (b.x = a),
    l !== void 0 && (b.y = l),
    r !== void 0 && (b.scale = r),
    d !== void 0 && s9(b, d, h, m, !1);
}
const j0 = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  rg = () => ({ ...j0(), attrs: {} }),
  _0 = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function og(n, { style: a, vars: l }, r, o) {
  Object.assign(n.style, a, o && o.getProjectionStyles(r));
  for (const f in l) n.style.setProperty(f, l[f]);
}
const ug = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function cg(n, a, l, r) {
  og(n, a, void 0, r);
  for (const o in a.attrs) n.setAttribute(ug.has(o) ? o : M0(o), a.attrs[o]);
}
const mo = {};
function r9(n) {
  Object.assign(mo, n);
}
function fg(n, { layout: a, layoutId: l }) {
  return (
    Qa.has(n) ||
    n.startsWith("origin") ||
    ((a || l !== void 0) && (!!mo[n] || n === "opacity"))
  );
}
function H0(n, a, l) {
  var r;
  const { style: o } = n,
    f = {};
  for (const d in o)
    (Qt(o[d]) ||
      (a.style && Qt(a.style[d])) ||
      fg(d, n) ||
      ((r = l == null ? void 0 : l.getValue(d)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (f[d] = o[d]);
  return f;
}
function dg(n, a, l) {
  const r = H0(n, a, l);
  for (const o in n)
    if (Qt(n[o]) || Qt(a[o])) {
      const f =
        Fi.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[f] = n[o];
    }
  return r;
}
function o9(n, a) {
  try {
    a.dimensions =
      typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect();
  } catch {
    a.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const _m = ["x", "y", "width", "height", "cx", "cy", "r"],
  u9 = {
    useVisualState: ag({
      scrapeMotionValuesFromProps: dg,
      createRenderState: rg,
      onUpdate: ({
        props: n,
        prevProps: a,
        current: l,
        renderState: r,
        latestValues: o,
      }) => {
        if (!l) return;
        let f = !!n.drag;
        if (!f) {
          for (const h in o)
            if (Qa.has(h)) {
              f = !0;
              break;
            }
        }
        if (!f) return;
        let d = !a;
        if (a)
          for (let h = 0; h < _m.length; h++) {
            const m = _m[h];
            n[m] !== a[m] && (d = !0);
          }
        d &&
          (mt.read(() => o9(l, r)),
          mt.render(() => {
            V0(r, o, _0(l.tagName), n.transformTemplate), cg(l, r);
          }));
      },
    }),
  },
  c9 = {
    useVisualState: ag({
      scrapeMotionValuesFromProps: H0,
      createRenderState: j0,
    }),
  };
function hg(n, a, l) {
  for (const r in a) !Qt(a[r]) && !fg(r, l) && (n[r] = a[r]);
}
function f9({ transformTemplate: n }, a) {
  return A.useMemo(() => {
    const l = j0();
    return N0(l, a, n), Object.assign({}, l.vars, l.style);
  }, [a]);
}
function d9(n, a) {
  const l = n.style || {},
    r = {};
  return hg(r, l, n), Object.assign(r, f9(n, a)), r;
}
function h9(n, a) {
  const l = {},
    r = d9(n, a);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((l.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (l.tabIndex = 0),
    (l.style = r),
    l
  );
}
function m9(n, a, l, r) {
  const o = A.useMemo(() => {
    const f = rg();
    return (
      V0(f, a, _0(r), n.transformTemplate),
      { ...f.attrs, style: { ...f.style } }
    );
  }, [a]);
  if (n.style) {
    const f = {};
    hg(f, n.style, n), (o.style = { ...f, ...o.style });
  }
  return o;
}
function p9(n = !1) {
  return (l, r, o, { latestValues: f }, d) => {
    const m = (O0(l) ? m9 : h9)(r, f, d, l),
      p = R7(r, typeof l == "string", n),
      y = l !== A.Fragment ? { ...p, ...m, ref: o } : {},
      { children: x } = r,
      b = A.useMemo(() => (Qt(x) ? x.get() : x), [x]);
    return A.createElement(l, { ...y, children: b });
  };
}
function g9(n, a) {
  return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const d = {
      ...(O0(r) ? u9 : c9),
      preloadedFeatures: n,
      useRender: p9(o),
      createVisualElement: a,
      Component: r,
    };
    return U7(d);
  };
}
function mg(n, a) {
  if (!Array.isArray(a)) return !1;
  const l = a.length;
  if (l !== n.length) return !1;
  for (let r = 0; r < l; r++) if (a[r] !== n[r]) return !1;
  return !0;
}
function zo(n, a, l) {
  const r = n.getProps();
  return R0(r, a, l !== void 0 ? l : r.custom, n);
}
function B0(n, a) {
  return n ? n[a] || n.default || n : void 0;
}
const pg = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Fi,
]);
let ao;
function y9() {
  ao = void 0;
}
const tn = {
  now: () => (
    ao === void 0 &&
      tn.set(
        Yt.isProcessing || A7.useManualTiming ? Yt.timestamp : performance.now()
      ),
    ao
  ),
  set: (n) => {
    (ao = n), queueMicrotask(y9);
  },
};
function U0(n, a) {
  n.indexOf(a) === -1 && n.push(a);
}
function k0(n, a) {
  const l = n.indexOf(a);
  l > -1 && n.splice(l, 1);
}
class P0 {
  constructor() {
    this.subscriptions = [];
  }
  add(a) {
    return U0(this.subscriptions, a), () => k0(this.subscriptions, a);
  }
  notify(a, l, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](a, l, r);
      else
        for (let f = 0; f < o; f++) {
          const d = this.subscriptions[f];
          d && d(a, l, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function G0(n, a) {
  return a ? n * (1e3 / a) : 0;
}
const Hm = 30,
  v9 = (n) => !isNaN(parseFloat(n));
class b9 {
  constructor(a, l = {}) {
    (this.version = "11.18.0"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const f = tn.now();
        this.updatedAt !== f && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(a),
      (this.owner = l.owner);
  }
  setCurrent(a) {
    (this.current = a),
      (this.updatedAt = tn.now()),
      this.canTrackVelocity === null &&
        a !== void 0 &&
        (this.canTrackVelocity = v9(this.current));
  }
  setPrevFrameValue(a = this.current) {
    (this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(a) {
    return this.on("change", a);
  }
  on(a, l) {
    this.events[a] || (this.events[a] = new P0());
    const r = this.events[a].add(l);
    return a === "change"
      ? () => {
          r(),
            mt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const a in this.events) this.events[a].clear();
  }
  attach(a, l) {
    (this.passiveEffect = a), (this.stopPassiveEffect = l);
  }
  set(a, l = !0) {
    !l || !this.passiveEffect
      ? this.updateAndNotify(a, l)
      : this.passiveEffect(a, this.updateAndNotify);
  }
  setWithVelocity(a, l, r) {
    this.set(l),
      (this.prev = void 0),
      (this.prevFrameValue = a),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(a, l = !0) {
    this.updateAndNotify(a),
      (this.prev = a),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      l && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const a = tn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      a - this.updatedAt > Hm
    )
      return 0;
    const l = Math.min(this.updatedAt - this.prevUpdatedAt, Hm);
    return G0(parseFloat(this.current) - parseFloat(this.prevFrameValue), l);
  }
  start(a) {
    return (
      this.stop(),
      new Promise((l) => {
        (this.hasAnimated = !0),
          (this.animation = a(l)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Je(n, a) {
  return new b9(n, a);
}
function x9(n, a, l) {
  n.hasValue(a) ? n.getValue(a).set(l) : n.addValue(a, Je(l));
}
function S9(n, a) {
  const l = zo(n, a);
  let { transitionEnd: r = {}, transition: o = {}, ...f } = l || {};
  f = { ...f, ...r };
  for (const d in f) {
    const h = X7(f[d]);
    x9(n, d, h);
  }
}
function T9(n) {
  return !!(Qt(n) && n.add);
}
function Xf(n, a) {
  const l = n.getValue("willChange");
  if (T9(l)) return l.add(a);
}
function gg(n) {
  return n.props[tg];
}
function Y0(n) {
  let a;
  return () => (a === void 0 && (a = n()), a);
}
const yg = Y0(() => window.ScrollTimeline !== void 0);
class C9 {
  constructor(a) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = a.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((a) => ("finished" in a ? a.finished : a))
    );
  }
  getAll(a) {
    return this.animations[0][a];
  }
  setAll(a, l) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][a] = l;
  }
  attachTimeline(a, l) {
    const r = this.animations.map((o) => {
      if (yg() && o.attachTimeline) return o.attachTimeline(a);
      if (typeof l == "function") return l(o);
    });
    return () => {
      r.forEach((o, f) => {
        o && o(), this.animations[f].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(a) {
    this.setAll("time", a);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(a) {
    this.setAll("speed", a);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let a = 0;
    for (let l = 0; l < this.animations.length; l++)
      a = Math.max(a, this.animations[l].duration);
    return a;
  }
  runAll(a) {
    this.animations.forEach((l) => l[a]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class A9 extends C9 {
  then(a, l) {
    return Promise.all(this.animations).then(a).catch(l);
  }
}
const wn = (n) => n * 1e3,
  Mn = (n) => n / 1e3;
function q0(n) {
  return typeof n == "function";
}
function Bm(n, a) {
  (n.timeline = a), (n.onfinish = null);
}
const X0 = (n) => Array.isArray(n) && typeof n[0] == "number",
  E9 = { linearEasing: void 0 };
function w9(n, a) {
  const l = Y0(n);
  return () => {
    var r;
    return (r = E9[a]) !== null && r !== void 0 ? r : l();
  };
}
const po = w9(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Ka = (n, a, l) => {
    const r = a - n;
    return r === 0 ? 1 : (l - n) / r;
  },
  vg = (n, a, l = 10) => {
    let r = "";
    const o = Math.max(Math.round(a / l), 2);
    for (let f = 0; f < o; f++) r += n(Ka(0, o - 1, f)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function bg(n) {
  return !!(
    (typeof n == "function" && po()) ||
    !n ||
    (typeof n == "string" && (n in Zf || po())) ||
    X0(n) ||
    (Array.isArray(n) && n.every(bg))
  );
}
const Il = ([n, a, l, r]) => `cubic-bezier(${n}, ${a}, ${l}, ${r})`,
  Zf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Il([0, 0.65, 0.55, 1]),
    circOut: Il([0.55, 0, 1, 0.45]),
    backIn: Il([0.31, 0.01, 0.66, -0.59]),
    backOut: Il([0.33, 1.53, 0.69, 0.99]),
  };
function xg(n, a) {
  if (n)
    return typeof n == "function" && po()
      ? vg(n, a)
      : X0(n)
      ? Il(n)
      : Array.isArray(n)
      ? n.map((l) => xg(l, a) || Zf.easeOut)
      : Zf[n];
}
const Sg = (n, a, l) =>
    (((1 - 3 * l + 3 * a) * n + (3 * l - 6 * a)) * n + 3 * a) * n,
  M9 = 1e-7,
  D9 = 12;
function O9(n, a, l, r, o) {
  let f,
    d,
    h = 0;
  do (d = a + (l - a) / 2), (f = Sg(d, r, o) - n), f > 0 ? (l = d) : (a = d);
  while (Math.abs(f) > M9 && ++h < D9);
  return d;
}
function Ts(n, a, l, r) {
  if (n === a && l === r) return se;
  const o = (f) => O9(f, 0, 1, n, l);
  return (f) => (f === 0 || f === 1 ? f : Sg(o(f), a, r));
}
const Tg = (n) => (a) => a <= 0.5 ? n(2 * a) / 2 : (2 - n(2 * (1 - a))) / 2,
  Cg = (n) => (a) => 1 - n(1 - a),
  Ag = Ts(0.33, 1.53, 0.69, 0.99),
  Z0 = Cg(Ag),
  Eg = Tg(Z0),
  wg = (n) =>
    (n *= 2) < 1 ? 0.5 * Z0(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  F0 = (n) => 1 - Math.sin(Math.acos(n)),
  Mg = Cg(F0),
  Dg = Tg(F0),
  Og = (n) => /^0[^.\s]+$/u.test(n);
function R9(n) {
  return typeof n == "number"
    ? n === 0
    : n !== null
    ? n === "none" || n === "0" || Og(n)
    : !0;
}
const ls = (n) => Math.round(n * 1e5) / 1e5,
  K0 = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function L9(n) {
  return n == null;
}
const z9 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Q0 = (n, a) => (l) =>
    !!(
      (typeof l == "string" && z9.test(l) && l.startsWith(n)) ||
      (a && !L9(l) && Object.prototype.hasOwnProperty.call(l, a))
    ),
  Rg = (n, a, l) => (r) => {
    if (typeof r != "string") return r;
    const [o, f, d, h] = r.match(K0);
    return {
      [n]: parseFloat(o),
      [a]: parseFloat(f),
      [l]: parseFloat(d),
      alpha: h !== void 0 ? parseFloat(h) : 1,
    };
  },
  N9 = (n) => an(0, 255, n),
  uf = { ...Ki, transform: (n) => Math.round(N9(n)) },
  qa = {
    test: Q0("rgb", "red"),
    parse: Rg("red", "green", "blue"),
    transform: ({ red: n, green: a, blue: l, alpha: r = 1 }) =>
      "rgba(" +
      uf.transform(n) +
      ", " +
      uf.transform(a) +
      ", " +
      uf.transform(l) +
      ", " +
      ls(hs.transform(r)) +
      ")",
  };
function V9(n) {
  let a = "",
    l = "",
    r = "",
    o = "";
  return (
    n.length > 5
      ? ((a = n.substring(1, 3)),
        (l = n.substring(3, 5)),
        (r = n.substring(5, 7)),
        (o = n.substring(7, 9)))
      : ((a = n.substring(1, 2)),
        (l = n.substring(2, 3)),
        (r = n.substring(3, 4)),
        (o = n.substring(4, 5)),
        (a += a),
        (l += l),
        (r += r),
        (o += o)),
    {
      red: parseInt(a, 16),
      green: parseInt(l, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Ff = { test: Q0("#"), parse: V9, transform: qa.transform },
  Bi = {
    test: Q0("hsl", "hue"),
    parse: Rg("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: a, lightness: l, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      Ie.transform(ls(a)) +
      ", " +
      Ie.transform(ls(l)) +
      ", " +
      ls(hs.transform(r)) +
      ")",
  },
  ne = {
    test: (n) => qa.test(n) || Ff.test(n) || Bi.test(n),
    parse: (n) =>
      qa.test(n) ? qa.parse(n) : Bi.test(n) ? Bi.parse(n) : Ff.parse(n),
    transform: (n) =>
      typeof n == "string"
        ? n
        : n.hasOwnProperty("red")
        ? qa.transform(n)
        : Bi.transform(n),
  },
  j9 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function _9(n) {
  var a, l;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((a = n.match(K0)) === null || a === void 0 ? void 0 : a.length) || 0) +
      (((l = n.match(j9)) === null || l === void 0 ? void 0 : l.length) || 0) >
      0
  );
}
const Lg = "number",
  zg = "color",
  H9 = "var",
  B9 = "var(",
  Um = "${}",
  U9 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ms(n) {
  const a = n.toString(),
    l = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let f = 0;
  const h = a
    .replace(
      U9,
      (m) => (
        ne.test(m)
          ? (r.color.push(f), o.push(zg), l.push(ne.parse(m)))
          : m.startsWith(B9)
          ? (r.var.push(f), o.push(H9), l.push(m))
          : (r.number.push(f), o.push(Lg), l.push(parseFloat(m))),
        ++f,
        Um
      )
    )
    .split(Um);
  return { values: l, split: h, indexes: r, types: o };
}
function Ng(n) {
  return ms(n).values;
}
function Vg(n) {
  const { split: a, types: l } = ms(n),
    r = a.length;
  return (o) => {
    let f = "";
    for (let d = 0; d < r; d++)
      if (((f += a[d]), o[d] !== void 0)) {
        const h = l[d];
        h === Lg
          ? (f += ls(o[d]))
          : h === zg
          ? (f += ne.transform(o[d]))
          : (f += o[d]);
      }
    return f;
  };
}
const k9 = (n) => (typeof n == "number" ? 0 : n);
function P9(n) {
  const a = Ng(n);
  return Vg(n)(a.map(k9));
}
const ha = {
    test: _9,
    parse: Ng,
    createTransformer: Vg,
    getAnimatableNone: P9,
  },
  G9 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Y9(n) {
  const [a, l] = n.slice(0, -1).split("(");
  if (a === "drop-shadow") return n;
  const [r] = l.match(K0) || [];
  if (!r) return n;
  const o = l.replace(r, "");
  let f = G9.has(a) ? 1 : 0;
  return r !== l && (f *= 100), a + "(" + f + o + ")";
}
const q9 = /\b([a-z-]*)\(.*?\)/gu,
  Kf = {
    ...ha,
    getAnimatableNone: (n) => {
      const a = n.match(q9);
      return a ? a.map(Y9).join(" ") : n;
    },
  },
  X9 = {
    ...z0,
    color: ne,
    backgroundColor: ne,
    outlineColor: ne,
    fill: ne,
    stroke: ne,
    borderColor: ne,
    borderTopColor: ne,
    borderRightColor: ne,
    borderBottomColor: ne,
    borderLeftColor: ne,
    filter: Kf,
    WebkitFilter: Kf,
  },
  W0 = (n) => X9[n];
function jg(n, a) {
  let l = W0(n);
  return (
    l !== Kf && (l = ha), l.getAnimatableNone ? l.getAnimatableNone(a) : void 0
  );
}
const Z9 = new Set(["auto", "none", "0"]);
function F9(n, a, l) {
  let r = 0,
    o;
  for (; r < n.length && !o; ) {
    const f = n[r];
    typeof f == "string" && !Z9.has(f) && ms(f).values.length && (o = n[r]),
      r++;
  }
  if (o && l) for (const f of a) n[f] = jg(l, o);
}
const km = (n) => n === Ki || n === et,
  Pm = (n, a) => parseFloat(n.split(", ")[a]),
  Gm =
    (n, a) =>
    (l, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return Pm(o[1], a);
      {
        const f = r.match(/^matrix\((.+)\)$/u);
        return f ? Pm(f[1], n) : 0;
      }
    },
  K9 = new Set(["x", "y", "z"]),
  Q9 = Fi.filter((n) => !K9.has(n));
function W9(n) {
  const a = [];
  return (
    Q9.forEach((l) => {
      const r = n.getValue(l);
      r !== void 0 &&
        (a.push([l, r.get()]), r.set(l.startsWith("scale") ? 1 : 0));
    }),
    a
  );
}
const Xi = {
  width: ({ x: n }, { paddingLeft: a = "0", paddingRight: l = "0" }) =>
    n.max - n.min - parseFloat(a) - parseFloat(l),
  height: ({ y: n }, { paddingTop: a = "0", paddingBottom: l = "0" }) =>
    n.max - n.min - parseFloat(a) - parseFloat(l),
  top: (n, { top: a }) => parseFloat(a),
  left: (n, { left: a }) => parseFloat(a),
  bottom: ({ y: n }, { top: a }) => parseFloat(a) + (n.max - n.min),
  right: ({ x: n }, { left: a }) => parseFloat(a) + (n.max - n.min),
  x: Gm(4, 13),
  y: Gm(5, 14),
};
Xi.translateX = Xi.x;
Xi.translateY = Xi.y;
const Xa = new Set();
let Qf = !1,
  Wf = !1;
function _g() {
  if (Wf) {
    const n = Array.from(Xa).filter((r) => r.needsMeasurement),
      a = new Set(n.map((r) => r.element)),
      l = new Map();
    a.forEach((r) => {
      const o = W9(r);
      o.length && (l.set(r, o), r.render());
    }),
      n.forEach((r) => r.measureInitialState()),
      a.forEach((r) => {
        r.render();
        const o = l.get(r);
        o &&
          o.forEach(([f, d]) => {
            var h;
            (h = r.getValue(f)) === null || h === void 0 || h.set(d);
          });
      }),
      n.forEach((r) => r.measureEndState()),
      n.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Wf = !1), (Qf = !1), Xa.forEach((n) => n.complete()), Xa.clear();
}
function Hg() {
  Xa.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (Wf = !0);
  });
}
function $9() {
  Hg(), _g();
}
class $0 {
  constructor(a, l, r, o, f, d = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...a]),
      (this.onComplete = l),
      (this.name = r),
      (this.motionValue = o),
      (this.element = f),
      (this.isAsync = d);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Xa.add(this),
          Qf || ((Qf = !0), mt.read(Hg), mt.resolveKeyframes(_g)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: a,
      name: l,
      element: r,
      motionValue: o,
    } = this;
    for (let f = 0; f < a.length; f++)
      if (a[f] === null)
        if (f === 0) {
          const d = o == null ? void 0 : o.get(),
            h = a[a.length - 1];
          if (d !== void 0) a[0] = d;
          else if (r && l) {
            const m = r.readValue(l, h);
            m != null && (a[0] = m);
          }
          a[0] === void 0 && (a[0] = h), o && d === void 0 && o.set(a[0]);
        } else a[f] = a[f - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Xa.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Xa.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Bg = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  J9 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function I9(n) {
  const a = J9.exec(n);
  if (!a) return [,];
  const [, l, r, o] = a;
  return [`--${l ?? r}`, o];
}
function Ug(n, a, l = 1) {
  const [r, o] = I9(n);
  if (!r) return;
  const f = window.getComputedStyle(a).getPropertyValue(r);
  if (f) {
    const d = f.trim();
    return Bg(d) ? parseFloat(d) : d;
  }
  return L0(o) ? Ug(o, a, l + 1) : o;
}
const kg = (n) => (a) => a.test(n),
  tb = { test: (n) => n === "auto", parse: (n) => n },
  Pg = [Ki, et, Ie, oa, $7, W7, tb],
  Ym = (n) => Pg.find(kg(n));
class Gg extends $0 {
  constructor(a, l, r, o, f) {
    super(a, l, r, o, f, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: a, element: l, name: r } = this;
    if (!l || !l.current) return;
    super.readKeyframes();
    for (let m = 0; m < a.length; m++) {
      let p = a[m];
      if (typeof p == "string" && ((p = p.trim()), L0(p))) {
        const y = Ug(p, l.current);
        y !== void 0 && (a[m] = y),
          m === a.length - 1 && (this.finalKeyframe = p);
      }
    }
    if ((this.resolveNoneKeyframes(), !pg.has(r) || a.length !== 2)) return;
    const [o, f] = a,
      d = Ym(o),
      h = Ym(f);
    if (d !== h)
      if (km(d) && km(h))
        for (let m = 0; m < a.length; m++) {
          const p = a[m];
          typeof p == "string" && (a[m] = parseFloat(p));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: a, name: l } = this,
      r = [];
    for (let o = 0; o < a.length; o++) R9(a[o]) && r.push(o);
    r.length && F9(a, r, l);
  }
  measureInitialState() {
    const { element: a, unresolvedKeyframes: l, name: r } = this;
    if (!a || !a.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Xi[r](
        a.measureViewportBox(),
        window.getComputedStyle(a.current)
      )),
      (l[0] = this.measuredOrigin);
    const o = l[l.length - 1];
    o !== void 0 && a.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var a;
    const { element: l, name: r, unresolvedKeyframes: o } = this;
    if (!l || !l.current) return;
    const f = l.getValue(r);
    f && f.jump(this.measuredOrigin, !1);
    const d = o.length - 1,
      h = o[d];
    (o[d] = Xi[r](l.measureViewportBox(), window.getComputedStyle(l.current))),
      h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
      !((a = this.removedTransforms) === null || a === void 0) &&
        a.length &&
        this.removedTransforms.forEach(([m, p]) => {
          l.getValue(m).set(p);
        }),
      this.resolveNoneKeyframes();
  }
}
const qm = (n, a) =>
  a === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" &&
          (ha.test(n) || n === "0") &&
          !n.startsWith("url("))
      );
function eb(n) {
  const a = n[0];
  if (n.length === 1) return !0;
  for (let l = 0; l < n.length; l++) if (n[l] !== a) return !0;
}
function nb(n, a, l, r) {
  const o = n[0];
  if (o === null) return !1;
  if (a === "display" || a === "visibility") return !0;
  const f = n[n.length - 1],
    d = qm(o, a),
    h = qm(f, a);
  return !d || !h ? !1 : eb(n) || ((l === "spring" || q0(l)) && r);
}
const ab = (n) => n !== null;
function No(n, { repeat: a, repeatType: l = "loop" }, r) {
  const o = n.filter(ab),
    f = a && l !== "loop" && a % 2 === 1 ? 0 : o.length - 1;
  return !f || r === void 0 ? o[f] : r;
}
const ib = 40;
class Yg {
  constructor({
    autoplay: a = !0,
    delay: l = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: f = 0,
    repeatType: d = "loop",
    ...h
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = tn.now()),
      (this.options = {
        autoplay: a,
        delay: l,
        type: r,
        repeat: o,
        repeatDelay: f,
        repeatType: d,
        ...h,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > ib
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && $9(), this._resolved;
  }
  onKeyframesResolved(a, l) {
    (this.resolvedAt = tn.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: o,
      velocity: f,
      delay: d,
      onComplete: h,
      onUpdate: m,
      isGenerator: p,
    } = this.options;
    if (!p && !nb(a, r, o, f))
      if (d) this.options.duration = 0;
      else {
        m == null || m(No(a, this.options, l)),
          h == null || h(),
          this.resolveFinishedPromise();
        return;
      }
    const y = this.initPlayback(a, l);
    y !== !1 &&
      ((this._resolved = { keyframes: a, finalKeyframe: l, ...y }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(a, l) {
    return this.currentFinishedPromise.then(a, l);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((a) => {
      this.resolveFinishedPromise = a;
    });
  }
}
const $f = 2e4;
function qg(n) {
  let a = 0;
  const l = 50;
  let r = n.next(a);
  for (; !r.done && a < $f; ) (a += l), (r = n.next(a));
  return a >= $f ? 1 / 0 : a;
}
const Mt = (n, a, l) => n + (a - n) * l;
function cf(n, a, l) {
  return (
    l < 0 && (l += 1),
    l > 1 && (l -= 1),
    l < 1 / 6
      ? n + (a - n) * 6 * l
      : l < 1 / 2
      ? a
      : l < 2 / 3
      ? n + (a - n) * (2 / 3 - l) * 6
      : n
  );
}
function lb({ hue: n, saturation: a, lightness: l, alpha: r }) {
  (n /= 360), (a /= 100), (l /= 100);
  let o = 0,
    f = 0,
    d = 0;
  if (!a) o = f = d = l;
  else {
    const h = l < 0.5 ? l * (1 + a) : l + a - l * a,
      m = 2 * l - h;
    (o = cf(m, h, n + 1 / 3)), (f = cf(m, h, n)), (d = cf(m, h, n - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(f * 255),
    blue: Math.round(d * 255),
    alpha: r,
  };
}
function go(n, a) {
  return (l) => (l > 0 ? a : n);
}
const ff = (n, a, l) => {
    const r = n * n,
      o = l * (a * a - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  sb = [Ff, qa, Bi],
  rb = (n) => sb.find((a) => a.test(n));
function Xm(n) {
  const a = rb(n);
  if (!a) return !1;
  let l = a.parse(n);
  return a === Bi && (l = lb(l)), l;
}
const Zm = (n, a) => {
    const l = Xm(n),
      r = Xm(a);
    if (!l || !r) return go(n, a);
    const o = { ...l };
    return (f) => (
      (o.red = ff(l.red, r.red, f)),
      (o.green = ff(l.green, r.green, f)),
      (o.blue = ff(l.blue, r.blue, f)),
      (o.alpha = Mt(l.alpha, r.alpha, f)),
      qa.transform(o)
    );
  },
  ob = (n, a) => (l) => a(n(l)),
  Cs = (...n) => n.reduce(ob),
  Jf = new Set(["none", "hidden"]);
function ub(n, a) {
  return Jf.has(n) ? (l) => (l <= 0 ? n : a) : (l) => (l >= 1 ? a : n);
}
function cb(n, a) {
  return (l) => Mt(n, a, l);
}
function J0(n) {
  return typeof n == "number"
    ? cb
    : typeof n == "string"
    ? L0(n)
      ? go
      : ne.test(n)
      ? Zm
      : hb
    : Array.isArray(n)
    ? Xg
    : typeof n == "object"
    ? ne.test(n)
      ? Zm
      : fb
    : go;
}
function Xg(n, a) {
  const l = [...n],
    r = l.length,
    o = n.map((f, d) => J0(f)(f, a[d]));
  return (f) => {
    for (let d = 0; d < r; d++) l[d] = o[d](f);
    return l;
  };
}
function fb(n, a) {
  const l = { ...n, ...a },
    r = {};
  for (const o in l)
    n[o] !== void 0 && a[o] !== void 0 && (r[o] = J0(n[o])(n[o], a[o]));
  return (o) => {
    for (const f in r) l[f] = r[f](o);
    return l;
  };
}
function db(n, a) {
  var l;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let f = 0; f < a.values.length; f++) {
    const d = a.types[f],
      h = n.indexes[d][o[d]],
      m = (l = n.values[h]) !== null && l !== void 0 ? l : 0;
    (r[f] = m), o[d]++;
  }
  return r;
}
const hb = (n, a) => {
  const l = ha.createTransformer(a),
    r = ms(n),
    o = ms(a);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (Jf.has(n) && !o.values.length) || (Jf.has(a) && !r.values.length)
      ? ub(n, a)
      : Cs(Xg(db(r, o), o.values), l)
    : go(n, a);
};
function Zg(n, a, l) {
  return typeof n == "number" && typeof a == "number" && typeof l == "number"
    ? Mt(n, a, l)
    : J0(n)(n, a);
}
const mb = 5;
function Fg(n, a, l) {
  const r = Math.max(a - mb, 0);
  return G0(l - n(r), a - r);
}
const Nt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Fm = 0.001;
function pb({
  duration: n = Nt.duration,
  bounce: a = Nt.bounce,
  velocity: l = Nt.velocity,
  mass: r = Nt.mass,
}) {
  let o,
    f,
    d = 1 - a;
  (d = an(Nt.minDamping, Nt.maxDamping, d)),
    (n = an(Nt.minDuration, Nt.maxDuration, Mn(n))),
    d < 1
      ? ((o = (p) => {
          const y = p * d,
            x = y * n,
            b = y - l,
            C = If(p, d),
            M = Math.exp(-x);
          return Fm - (b / C) * M;
        }),
        (f = (p) => {
          const x = p * d * n,
            b = x * l + l,
            C = Math.pow(d, 2) * Math.pow(p, 2) * n,
            M = Math.exp(-x),
            z = If(Math.pow(p, 2), d);
          return ((-o(p) + Fm > 0 ? -1 : 1) * ((b - C) * M)) / z;
        }))
      : ((o = (p) => {
          const y = Math.exp(-p * n),
            x = (p - l) * n + 1;
          return -0.001 + y * x;
        }),
        (f = (p) => {
          const y = Math.exp(-p * n),
            x = (l - p) * (n * n);
          return y * x;
        }));
  const h = 5 / n,
    m = yb(o, f, h);
  if (((n = wn(n)), isNaN(m)))
    return { stiffness: Nt.stiffness, damping: Nt.damping, duration: n };
  {
    const p = Math.pow(m, 2) * r;
    return { stiffness: p, damping: d * 2 * Math.sqrt(r * p), duration: n };
  }
}
const gb = 12;
function yb(n, a, l) {
  let r = l;
  for (let o = 1; o < gb; o++) r = r - n(r) / a(r);
  return r;
}
function If(n, a) {
  return n * Math.sqrt(1 - a * a);
}
const vb = ["duration", "bounce"],
  bb = ["stiffness", "damping", "mass"];
function Km(n, a) {
  return a.some((l) => n[l] !== void 0);
}
function xb(n) {
  let a = {
    velocity: Nt.velocity,
    stiffness: Nt.stiffness,
    damping: Nt.damping,
    mass: Nt.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Km(n, bb) && Km(n, vb))
    if (n.visualDuration) {
      const l = n.visualDuration,
        r = (2 * Math.PI) / (l * 1.2),
        o = r * r,
        f = 2 * an(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(o);
      a = { ...a, mass: Nt.mass, stiffness: o, damping: f };
    } else {
      const l = pb(n);
      (a = { ...a, ...l, mass: Nt.mass }), (a.isResolvedFromDuration = !0);
    }
  return a;
}
function Kg(n = Nt.visualDuration, a = Nt.bounce) {
  const l =
    typeof n != "object"
      ? { visualDuration: n, keyframes: [0, 1], bounce: a }
      : n;
  let { restSpeed: r, restDelta: o } = l;
  const f = l.keyframes[0],
    d = l.keyframes[l.keyframes.length - 1],
    h = { done: !1, value: f },
    {
      stiffness: m,
      damping: p,
      mass: y,
      duration: x,
      velocity: b,
      isResolvedFromDuration: C,
    } = xb({ ...l, velocity: -Mn(l.velocity || 0) }),
    M = b || 0,
    z = p / (2 * Math.sqrt(m * y)),
    L = d - f,
    D = Mn(Math.sqrt(m / y)),
    V = Math.abs(L) < 5;
  r || (r = V ? Nt.restSpeed.granular : Nt.restSpeed.default),
    o || (o = V ? Nt.restDelta.granular : Nt.restDelta.default);
  let B;
  if (z < 1) {
    const k = If(D, z);
    B = ($) => {
      const at = Math.exp(-z * D * $);
      return (
        d - at * (((M + z * D * L) / k) * Math.sin(k * $) + L * Math.cos(k * $))
      );
    };
  } else if (z === 1) B = (k) => d - Math.exp(-D * k) * (L + (M + D * L) * k);
  else {
    const k = D * Math.sqrt(z * z - 1);
    B = ($) => {
      const at = Math.exp(-z * D * $),
        K = Math.min(k * $, 300);
      return (
        d - (at * ((M + z * D * L) * Math.sinh(K) + k * L * Math.cosh(K))) / k
      );
    };
  }
  const Y = {
    calculatedDuration: (C && x) || null,
    next: (k) => {
      const $ = B(k);
      if (C) h.done = k >= x;
      else {
        let at = 0;
        z < 1 && (at = k === 0 ? wn(M) : Fg(B, k, $));
        const K = Math.abs(at) <= r,
          G = Math.abs(d - $) <= o;
        h.done = K && G;
      }
      return (h.value = h.done ? d : $), h;
    },
    toString: () => {
      const k = Math.min(qg(Y), $f),
        $ = vg((at) => Y.next(k * at).value, k, 30);
      return k + "ms " + $;
    },
  };
  return Y;
}
function Qm({
  keyframes: n,
  velocity: a = 0,
  power: l = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: f = 500,
  modifyTarget: d,
  min: h,
  max: m,
  restDelta: p = 0.5,
  restSpeed: y,
}) {
  const x = n[0],
    b = { done: !1, value: x },
    C = (K) => (h !== void 0 && K < h) || (m !== void 0 && K > m),
    M = (K) =>
      h === void 0
        ? m
        : m === void 0 || Math.abs(h - K) < Math.abs(m - K)
        ? h
        : m;
  let z = l * a;
  const L = x + z,
    D = d === void 0 ? L : d(L);
  D !== L && (z = D - x);
  const V = (K) => -z * Math.exp(-K / r),
    B = (K) => D + V(K),
    Y = (K) => {
      const G = V(K),
        I = B(K);
      (b.done = Math.abs(G) <= p), (b.value = b.done ? D : I);
    };
  let k, $;
  const at = (K) => {
    C(b.value) &&
      ((k = K),
      ($ = Kg({
        keyframes: [b.value, M(b.value)],
        velocity: Fg(B, K, b.value),
        damping: o,
        stiffness: f,
        restDelta: p,
        restSpeed: y,
      })));
  };
  return (
    at(0),
    {
      calculatedDuration: null,
      next: (K) => {
        let G = !1;
        return (
          !$ && k === void 0 && ((G = !0), Y(K), at(K)),
          k !== void 0 && K >= k ? $.next(K - k) : (!G && Y(K), b)
        );
      },
    }
  );
}
const Sb = Ts(0.42, 0, 1, 1),
  Tb = Ts(0, 0, 0.58, 1),
  Qg = Ts(0.42, 0, 0.58, 1),
  Cb = (n) => Array.isArray(n) && typeof n[0] != "number",
  Wm = {
    linear: se,
    easeIn: Sb,
    easeInOut: Qg,
    easeOut: Tb,
    circIn: F0,
    circInOut: Dg,
    circOut: Mg,
    backIn: Z0,
    backInOut: Eg,
    backOut: Ag,
    anticipate: wg,
  },
  $m = (n) => {
    if (X0(n)) {
      Yf(n.length === 4);
      const [a, l, r, o] = n;
      return Ts(a, l, r, o);
    } else if (typeof n == "string") return Yf(Wm[n] !== void 0), Wm[n];
    return n;
  };
function Ab(n, a, l) {
  const r = [],
    o = l || Zg,
    f = n.length - 1;
  for (let d = 0; d < f; d++) {
    let h = o(n[d], n[d + 1]);
    if (a) {
      const m = Array.isArray(a) ? a[d] || se : a;
      h = Cs(m, h);
    }
    r.push(h);
  }
  return r;
}
function Wg(n, a, { clamp: l = !0, ease: r, mixer: o } = {}) {
  const f = n.length;
  if ((Yf(f === a.length), f === 1)) return () => a[0];
  if (f === 2 && a[0] === a[1]) return () => a[1];
  const d = n[0] === n[1];
  n[0] > n[f - 1] && ((n = [...n].reverse()), (a = [...a].reverse()));
  const h = Ab(a, r, o),
    m = h.length,
    p = (y) => {
      if (d && y < n[0]) return a[0];
      let x = 0;
      if (m > 1) for (; x < n.length - 2 && !(y < n[x + 1]); x++);
      const b = Ka(n[x], n[x + 1], y);
      return h[x](b);
    };
  return l ? (y) => p(an(n[0], n[f - 1], y)) : p;
}
function Eb(n, a) {
  const l = n[n.length - 1];
  for (let r = 1; r <= a; r++) {
    const o = Ka(0, a, r);
    n.push(Mt(l, 1, o));
  }
}
function $g(n) {
  const a = [0];
  return Eb(a, n.length - 1), a;
}
function wb(n, a) {
  return n.map((l) => l * a);
}
function Mb(n, a) {
  return n.map(() => a || Qg).splice(0, n.length - 1);
}
function yo({
  duration: n = 300,
  keyframes: a,
  times: l,
  ease: r = "easeInOut",
}) {
  const o = Cb(r) ? r.map($m) : $m(r),
    f = { done: !1, value: a[0] },
    d = wb(l && l.length === a.length ? l : $g(a), n),
    h = Wg(d, a, { ease: Array.isArray(o) ? o : Mb(a, o) });
  return {
    calculatedDuration: n,
    next: (m) => ((f.value = h(m)), (f.done = m >= n), f),
  };
}
const Db = (n) => {
    const a = ({ timestamp: l }) => n(l);
    return {
      start: () => mt.update(a, !0),
      stop: () => nn(a),
      now: () => (Yt.isProcessing ? Yt.timestamp : tn.now()),
    };
  },
  Ob = { decay: Qm, inertia: Qm, tween: yo, keyframes: yo, spring: Kg },
  Rb = (n) => n / 100;
class Vo extends Yg {
  constructor(a) {
    super(a),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: m } = this.options;
        m && m();
      });
    const { name: l, motionValue: r, element: o, keyframes: f } = this.options,
      d = (o == null ? void 0 : o.KeyframeResolver) || $0,
      h = (m, p) => this.onKeyframesResolved(m, p);
    (this.resolver = new d(f, h, l, r, o)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(a) {
    const {
        type: l = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: f,
        velocity: d = 0,
      } = this.options,
      h = q0(l) ? l : Ob[l] || yo;
    let m, p;
    h !== yo &&
      typeof a[0] != "number" &&
      ((m = Cs(Rb, Zg(a[0], a[1]))), (a = [0, 100]));
    const y = h({ ...this.options, keyframes: a });
    f === "mirror" &&
      (p = h({ ...this.options, keyframes: [...a].reverse(), velocity: -d })),
      y.calculatedDuration === null && (y.calculatedDuration = qg(y));
    const { calculatedDuration: x } = y,
      b = x + o,
      C = b * (r + 1) - o;
    return {
      generator: y,
      mirroredGenerator: p,
      mapPercentToKeyframes: m,
      calculatedDuration: x,
      resolvedDuration: b,
      totalDuration: C,
    };
  }
  onPostResolved() {
    const { autoplay: a = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !a
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(a, l = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: K } = this.options;
      return { done: !0, value: K[K.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: f,
      mirroredGenerator: d,
      mapPercentToKeyframes: h,
      keyframes: m,
      calculatedDuration: p,
      totalDuration: y,
      resolvedDuration: x,
    } = r;
    if (this.startTime === null) return f.next(0);
    const {
      delay: b,
      repeat: C,
      repeatType: M,
      repeatDelay: z,
      onUpdate: L,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, a))
      : this.speed < 0 &&
        (this.startTime = Math.min(a - y / this.speed, this.startTime)),
      l
        ? (this.currentTime = a)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(a - this.startTime) * this.speed);
    const D = this.currentTime - b * (this.speed >= 0 ? 1 : -1),
      V = this.speed >= 0 ? D < 0 : D > y;
    (this.currentTime = Math.max(D, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = y);
    let B = this.currentTime,
      Y = f;
    if (C) {
      const K = Math.min(this.currentTime, y) / x;
      let G = Math.floor(K),
        I = K % 1;
      !I && K >= 1 && (I = 1),
        I === 1 && G--,
        (G = Math.min(G, C + 1)),
        !!(G % 2) &&
          (M === "reverse"
            ? ((I = 1 - I), z && (I -= z / x))
            : M === "mirror" && (Y = d)),
        (B = an(0, 1, I) * x);
    }
    const k = V ? { done: !1, value: m[0] } : Y.next(B);
    h && (k.value = h(k.value));
    let { done: $ } = k;
    !V &&
      p !== null &&
      ($ = this.speed >= 0 ? this.currentTime >= y : this.currentTime <= 0);
    const at =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && $));
    return (
      at && o !== void 0 && (k.value = No(m, this.options, o)),
      L && L(k.value),
      at && this.finish(),
      k
    );
  }
  get duration() {
    const { resolved: a } = this;
    return a ? Mn(a.calculatedDuration) : 0;
  }
  get time() {
    return Mn(this.currentTime);
  }
  set time(a) {
    (a = wn(a)),
      (this.currentTime = a),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = a)
        : this.driver && (this.startTime = this.driver.now() - a / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(a) {
    const l = this.playbackSpeed !== a;
    (this.playbackSpeed = a), l && (this.time = Mn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: a = Db, onPlay: l, startTime: r } = this.options;
    this.driver || (this.driver = a((f) => this.tick(f))), l && l();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = o)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var a;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (a = this.currentTime) !== null && a !== void 0 ? a : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: a } = this.options;
    a && a();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(a) {
    return (this.startTime = 0), this.tick(a, !0);
  }
}
function Lb(n) {
  return new Vo(n);
}
const zb = new Set(["opacity", "clipPath", "filter", "transform"]);
function Nb(
  n,
  a,
  l,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: f = 0,
    repeatType: d = "loop",
    ease: h = "easeInOut",
    times: m,
  } = {}
) {
  const p = { [a]: l };
  m && (p.offset = m);
  const y = xg(h, o);
  return (
    Array.isArray(y) && (p.easing = y),
    n.animate(p, {
      delay: r,
      duration: o,
      easing: Array.isArray(y) ? "linear" : y,
      fill: "both",
      iterations: f + 1,
      direction: d === "reverse" ? "alternate" : "normal",
    })
  );
}
const Vb = Y0(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  vo = 10,
  jb = 2e4;
function _b(n) {
  return q0(n.type) || n.type === "spring" || !bg(n.ease);
}
function Hb(n, a) {
  const l = new Vo({
    ...a,
    keyframes: n,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: n[0] };
  const o = [];
  let f = 0;
  for (; !r.done && f < jb; ) (r = l.sample(f)), o.push(r.value), (f += vo);
  return { times: void 0, keyframes: o, duration: f - vo, ease: "linear" };
}
const Jg = { anticipate: wg, backInOut: Eg, circInOut: Dg };
function Bb(n) {
  return n in Jg;
}
class Jm extends Yg {
  constructor(a) {
    super(a);
    const { name: l, motionValue: r, element: o, keyframes: f } = this.options;
    (this.resolver = new Gg(
      f,
      (d, h) => this.onKeyframesResolved(d, h),
      l,
      r,
      o
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(a, l) {
    var r;
    let {
      duration: o = 300,
      times: f,
      ease: d,
      type: h,
      motionValue: m,
      name: p,
      startTime: y,
    } = this.options;
    if (!(!((r = m.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof d == "string" && po() && Bb(d) && (d = Jg[d]), _b(this.options))
    ) {
      const {
          onComplete: b,
          onUpdate: C,
          motionValue: M,
          element: z,
          ...L
        } = this.options,
        D = Hb(a, L);
      (a = D.keyframes),
        a.length === 1 && (a[1] = a[0]),
        (o = D.duration),
        (f = D.times),
        (d = D.ease),
        (h = "keyframes");
    }
    const x = Nb(m.owner.current, p, a, {
      ...this.options,
      duration: o,
      times: f,
      ease: d,
    });
    return (
      (x.startTime = y ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Bm(x, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (x.onfinish = () => {
            const { onComplete: b } = this.options;
            m.set(No(a, this.options, l)),
              b && b(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: x, duration: o, times: f, type: h, ease: d, keyframes: a }
    );
  }
  get duration() {
    const { resolved: a } = this;
    if (!a) return 0;
    const { duration: l } = a;
    return Mn(l);
  }
  get time() {
    const { resolved: a } = this;
    if (!a) return 0;
    const { animation: l } = a;
    return Mn(l.currentTime || 0);
  }
  set time(a) {
    const { resolved: l } = this;
    if (!l) return;
    const { animation: r } = l;
    r.currentTime = wn(a);
  }
  get speed() {
    const { resolved: a } = this;
    if (!a) return 1;
    const { animation: l } = a;
    return l.playbackRate;
  }
  set speed(a) {
    const { resolved: l } = this;
    if (!l) return;
    const { animation: r } = l;
    r.playbackRate = a;
  }
  get state() {
    const { resolved: a } = this;
    if (!a) return "idle";
    const { animation: l } = a;
    return l.playState;
  }
  get startTime() {
    const { resolved: a } = this;
    if (!a) return null;
    const { animation: l } = a;
    return l.startTime;
  }
  attachTimeline(a) {
    if (!this._resolved) this.pendingTimeline = a;
    else {
      const { resolved: l } = this;
      if (!l) return se;
      const { animation: r } = l;
      Bm(r, a);
    }
    return se;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: a } = this;
    if (!a) return;
    const { animation: l } = a;
    l.playState === "finished" && this.updateFinishedPromise(), l.play();
  }
  pause() {
    const { resolved: a } = this;
    if (!a) return;
    const { animation: l } = a;
    l.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: a } = this;
    if (!a) return;
    const {
      animation: l,
      keyframes: r,
      duration: o,
      type: f,
      ease: d,
      times: h,
    } = a;
    if (l.playState === "idle" || l.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: p,
          onUpdate: y,
          onComplete: x,
          element: b,
          ...C
        } = this.options,
        M = new Vo({
          ...C,
          keyframes: r,
          duration: o,
          type: f,
          ease: d,
          times: h,
          isGenerator: !0,
        }),
        z = wn(this.time);
      p.setWithVelocity(M.sample(z - vo).value, M.sample(z).value, vo);
    }
    const { onStop: m } = this.options;
    m && m(), this.cancel();
  }
  complete() {
    const { resolved: a } = this;
    a && a.animation.finish();
  }
  cancel() {
    const { resolved: a } = this;
    a && a.animation.cancel();
  }
  static supports(a) {
    const {
      motionValue: l,
      name: r,
      repeatDelay: o,
      repeatType: f,
      damping: d,
      type: h,
    } = a;
    return (
      Vb() &&
      r &&
      zb.has(r) &&
      l &&
      l.owner &&
      l.owner.current instanceof HTMLElement &&
      !l.owner.getProps().onUpdate &&
      !o &&
      f !== "mirror" &&
      d !== 0 &&
      h !== "inertia"
    );
  }
}
const Ub = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  kb = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Pb = { type: "keyframes", duration: 0.8 },
  Gb = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Yb = (n, { keyframes: a }) =>
    a.length > 2
      ? Pb
      : Qa.has(n)
      ? n.startsWith("scale")
        ? kb(a[1])
        : Ub
      : Gb;
function qb({
  when: n,
  delay: a,
  delayChildren: l,
  staggerChildren: r,
  staggerDirection: o,
  repeat: f,
  repeatType: d,
  repeatDelay: h,
  from: m,
  elapsed: p,
  ...y
}) {
  return !!Object.keys(y).length;
}
const I0 =
  (n, a, l, r = {}, o, f) =>
  (d) => {
    const h = B0(r, n) || {},
      m = h.delay || r.delay || 0;
    let { elapsed: p = 0 } = r;
    p = p - wn(m);
    let y = {
      keyframes: Array.isArray(l) ? l : [null, l],
      ease: "easeOut",
      velocity: a.getVelocity(),
      ...h,
      delay: -p,
      onUpdate: (b) => {
        a.set(b), h.onUpdate && h.onUpdate(b);
      },
      onComplete: () => {
        d(), h.onComplete && h.onComplete();
      },
      name: n,
      motionValue: a,
      element: f ? void 0 : o,
    };
    qb(h) || (y = { ...y, ...Yb(n, y) }),
      y.duration && (y.duration = wn(y.duration)),
      y.repeatDelay && (y.repeatDelay = wn(y.repeatDelay)),
      y.from !== void 0 && (y.keyframes[0] = y.from);
    let x = !1;
    if (
      ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
        ((y.duration = 0), y.delay === 0 && (x = !0)),
      x && !f && a.get() !== void 0)
    ) {
      const b = No(y.keyframes, h);
      if (b !== void 0)
        return (
          mt.update(() => {
            y.onUpdate(b), y.onComplete();
          }),
          new A9([])
        );
    }
    return !f && Jm.supports(y) ? new Jm(y) : new Vo(y);
  };
function Xb({ protectedKeys: n, needsAnimating: a }, l) {
  const r = n.hasOwnProperty(l) && a[l] !== !0;
  return (a[l] = !1), r;
}
function Ig(n, a, { delay: l = 0, transitionOverride: r, type: o } = {}) {
  var f;
  let { transition: d = n.getDefaultTransition(), transitionEnd: h, ...m } = a;
  r && (d = r);
  const p = [],
    y = o && n.animationState && n.animationState.getState()[o];
  for (const x in m) {
    const b = n.getValue(
        x,
        (f = n.latestValues[x]) !== null && f !== void 0 ? f : null
      ),
      C = m[x];
    if (C === void 0 || (y && Xb(y, x))) continue;
    const M = { delay: l, ...B0(d || {}, x) };
    let z = !1;
    if (window.MotionHandoffAnimation) {
      const D = gg(n);
      if (D) {
        const V = window.MotionHandoffAnimation(D, x, mt);
        V !== null && ((M.startTime = V), (z = !0));
      }
    }
    Xf(n, x),
      b.start(
        I0(x, b, C, n.shouldReduceMotion && pg.has(x) ? { type: !1 } : M, n, z)
      );
    const L = b.animation;
    L && p.push(L);
  }
  return (
    h &&
      Promise.all(p).then(() => {
        mt.update(() => {
          h && S9(n, h);
        });
      }),
    p
  );
}
function t0(n, a, l = {}) {
  var r;
  const o = zo(
    n,
    a,
    l.type === "exit"
      ? (r = n.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: f = n.getDefaultTransition() || {} } = o || {};
  l.transitionOverride && (f = l.transitionOverride);
  const d = o ? () => Promise.all(Ig(n, o, l)) : () => Promise.resolve(),
    h =
      n.variantChildren && n.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: y = 0,
              staggerChildren: x,
              staggerDirection: b,
            } = f;
            return Zb(n, a, y + p, x, b, l);
          }
        : () => Promise.resolve(),
    { when: m } = f;
  if (m) {
    const [p, y] = m === "beforeChildren" ? [d, h] : [h, d];
    return p().then(() => y());
  } else return Promise.all([d(), h(l.delay)]);
}
function Zb(n, a, l = 0, r = 0, o = 1, f) {
  const d = [],
    h = (n.variantChildren.size - 1) * r,
    m = o === 1 ? (p = 0) => p * r : (p = 0) => h - p * r;
  return (
    Array.from(n.variantChildren)
      .sort(Fb)
      .forEach((p, y) => {
        p.notify("AnimationStart", a),
          d.push(
            t0(p, a, { ...f, delay: l + m(y) }).then(() =>
              p.notify("AnimationComplete", a)
            )
          );
      }),
    Promise.all(d)
  );
}
function Fb(n, a) {
  return n.sortNodePosition(a);
}
function Kb(n, a, l = {}) {
  n.notify("AnimationStart", a);
  let r;
  if (Array.isArray(a)) {
    const o = a.map((f) => t0(n, f, l));
    r = Promise.all(o);
  } else if (typeof a == "string") r = t0(n, a, l);
  else {
    const o = typeof a == "function" ? zo(n, a, l.custom) : a;
    r = Promise.all(Ig(n, o, l));
  }
  return r.then(() => {
    n.notify("AnimationComplete", a);
  });
}
const Qb = w0.length;
function t4(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const l = n.parent ? t4(n.parent) || {} : {};
    return n.props.initial !== void 0 && (l.initial = n.props.initial), l;
  }
  const a = {};
  for (let l = 0; l < Qb; l++) {
    const r = w0[l],
      o = n.props[r];
    (ds(o) || o === !1) && (a[r] = o);
  }
  return a;
}
const Wb = [...E0].reverse(),
  $b = E0.length;
function Jb(n) {
  return (a) =>
    Promise.all(a.map(({ animation: l, options: r }) => Kb(n, l, r)));
}
function Ib(n) {
  let a = Jb(n),
    l = Im(),
    r = !0;
  const o = (m) => (p, y) => {
    var x;
    const b = zo(
      n,
      y,
      m === "exit"
        ? (x = n.presenceContext) === null || x === void 0
          ? void 0
          : x.custom
        : void 0
    );
    if (b) {
      const { transition: C, transitionEnd: M, ...z } = b;
      p = { ...p, ...z, ...M };
    }
    return p;
  };
  function f(m) {
    a = m(n);
  }
  function d(m) {
    const { props: p } = n,
      y = t4(n.parent) || {},
      x = [],
      b = new Set();
    let C = {},
      M = 1 / 0;
    for (let L = 0; L < $b; L++) {
      const D = Wb[L],
        V = l[D],
        B = p[D] !== void 0 ? p[D] : y[D],
        Y = ds(B),
        k = D === m ? V.isActive : null;
      k === !1 && (M = L);
      let $ = B === y[D] && B !== p[D] && Y;
      if (
        ($ && r && n.manuallyAnimateOnMount && ($ = !1),
        (V.protectedKeys = { ...C }),
        (!V.isActive && k === null) ||
          (!B && !V.prevProp) ||
          Ro(B) ||
          typeof B == "boolean")
      )
        continue;
      const at = tx(V.prevProp, B);
      let K = at || (D === m && V.isActive && !$ && Y) || (L > M && Y),
        G = !1;
      const I = Array.isArray(B) ? B : [B];
      let kt = I.reduce(o(D), {});
      k === !1 && (kt = {});
      const { prevResolvedValues: Vn = {} } = V,
        sn = { ...Vn, ...kt },
        ke = (Q) => {
          (K = !0),
            b.has(Q) && ((G = !0), b.delete(Q)),
            (V.needsAnimating[Q] = !0);
          const J = n.getValue(Q);
          J && (J.liveStyle = !1);
        };
      for (const Q in sn) {
        const J = kt[Q],
          pt = Vn[Q];
        if (C.hasOwnProperty(Q)) continue;
        let St = !1;
        qf(J) && qf(pt) ? (St = !mg(J, pt)) : (St = J !== pt),
          St
            ? J != null
              ? ke(Q)
              : b.add(Q)
            : J !== void 0 && b.has(Q)
            ? ke(Q)
            : (V.protectedKeys[Q] = !0);
      }
      (V.prevProp = B),
        (V.prevResolvedValues = kt),
        V.isActive && (C = { ...C, ...kt }),
        r && n.blockInitialAnimation && (K = !1),
        K &&
          (!($ && at) || G) &&
          x.push(...I.map((Q) => ({ animation: Q, options: { type: D } })));
    }
    if (b.size) {
      const L = {};
      b.forEach((D) => {
        const V = n.getBaseTarget(D),
          B = n.getValue(D);
        B && (B.liveStyle = !0), (L[D] = V ?? null);
      }),
        x.push({ animation: L });
    }
    let z = !!x.length;
    return (
      r &&
        (p.initial === !1 || p.initial === p.animate) &&
        !n.manuallyAnimateOnMount &&
        (z = !1),
      (r = !1),
      z ? a(x) : Promise.resolve()
    );
  }
  function h(m, p) {
    var y;
    if (l[m].isActive === p) return Promise.resolve();
    (y = n.variantChildren) === null ||
      y === void 0 ||
      y.forEach((b) => {
        var C;
        return (C = b.animationState) === null || C === void 0
          ? void 0
          : C.setActive(m, p);
      }),
      (l[m].isActive = p);
    const x = d(m);
    for (const b in l) l[b].protectedKeys = {};
    return x;
  }
  return {
    animateChanges: d,
    setActive: h,
    setAnimateFunction: f,
    getState: () => l,
    reset: () => {
      (l = Im()), (r = !0);
    },
  };
}
function tx(n, a) {
  return typeof a == "string" ? a !== n : Array.isArray(a) ? !mg(a, n) : !1;
}
function ka(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Im() {
  return {
    animate: ka(!0),
    whileInView: ka(),
    whileHover: ka(),
    whileTap: ka(),
    whileDrag: ka(),
    whileFocus: ka(),
    exit: ka(),
  };
}
class pa {
  constructor(a) {
    (this.isMounted = !1), (this.node = a);
  }
  update() {}
}
class ex extends pa {
  constructor(a) {
    super(a), a.animationState || (a.animationState = Ib(a));
  }
  updateAnimationControlsSubscription() {
    const { animate: a } = this.node.getProps();
    Ro(a) && (this.unmountControls = a.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: a } = this.node.getProps(),
      { animate: l } = this.node.prevProps || {};
    a !== l && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var a;
    this.node.animationState.reset(),
      (a = this.unmountControls) === null || a === void 0 || a.call(this);
  }
}
let nx = 0;
class ax extends pa {
  constructor() {
    super(...arguments), (this.id = nx++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: a, onExitComplete: l } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || a === r) return;
    const o = this.node.animationState.setActive("exit", !a);
    l && !a && o.then(() => l(this.id));
  }
  mount() {
    const { register: a } = this.node.presenceContext || {};
    a && (this.unmount = a(this.id));
  }
  unmount() {}
}
const ix = { animation: { Feature: ex }, exit: { Feature: ax } },
  Be = { x: !1, y: !1 };
function e4() {
  return Be.x || Be.y;
}
function lx(n) {
  return n === "x" || n === "y"
    ? Be[n]
      ? null
      : ((Be[n] = !0),
        () => {
          Be[n] = !1;
        })
    : Be.x || Be.y
    ? null
    : ((Be.x = Be.y = !0),
      () => {
        Be.x = Be.y = !1;
      });
}
const t2 = (n) =>
  n.pointerType === "mouse"
    ? typeof n.button != "number" || n.button <= 0
    : n.isPrimary !== !1;
function ps(n, a, l, r = { passive: !0 }) {
  return n.addEventListener(a, l, r), () => n.removeEventListener(a, l);
}
function As(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const sx = (n) => (a) => t2(a) && n(a, As(a));
function ss(n, a, l, r) {
  return ps(n, a, sx(l), r);
}
const tp = (n, a) => Math.abs(n - a);
function rx(n, a) {
  const l = tp(n.x, a.x),
    r = tp(n.y, a.y);
  return Math.sqrt(l ** 2 + r ** 2);
}
class n4 {
  constructor(
    a,
    l,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: f = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const x = hf(this.lastMoveEventInfo, this.history),
          b = this.startEvent !== null,
          C = rx(x.offset, { x: 0, y: 0 }) >= 3;
        if (!b && !C) return;
        const { point: M } = x,
          { timestamp: z } = Yt;
        this.history.push({ ...M, timestamp: z });
        const { onStart: L, onMove: D } = this.handlers;
        b ||
          (L && L(this.lastMoveEvent, x),
          (this.startEvent = this.lastMoveEvent)),
          D && D(this.lastMoveEvent, x);
      }),
      (this.handlePointerMove = (x, b) => {
        (this.lastMoveEvent = x),
          (this.lastMoveEventInfo = df(b, this.transformPagePoint)),
          mt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (x, b) => {
        this.end();
        const { onEnd: C, onSessionEnd: M, resumeAnimation: z } = this.handlers;
        if (
          (this.dragSnapToOrigin && z && z(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const L = hf(
          x.type === "pointercancel"
            ? this.lastMoveEventInfo
            : df(b, this.transformPagePoint),
          this.history
        );
        this.startEvent && C && C(x, L), M && M(x, L);
      }),
      !t2(a))
    )
      return;
    (this.dragSnapToOrigin = f),
      (this.handlers = l),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const d = As(a),
      h = df(d, this.transformPagePoint),
      { point: m } = h,
      { timestamp: p } = Yt;
    this.history = [{ ...m, timestamp: p }];
    const { onSessionStart: y } = l;
    y && y(a, hf(h, this.history)),
      (this.removeListeners = Cs(
        ss(this.contextWindow, "pointermove", this.handlePointerMove),
        ss(this.contextWindow, "pointerup", this.handlePointerUp),
        ss(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(a) {
    this.handlers = a;
  }
  end() {
    this.removeListeners && this.removeListeners(), nn(this.updatePoint);
  }
}
function df(n, a) {
  return a ? { point: a(n.point) } : n;
}
function ep(n, a) {
  return { x: n.x - a.x, y: n.y - a.y };
}
function hf({ point: n }, a) {
  return {
    point: n,
    delta: ep(n, a4(a)),
    offset: ep(n, ox(a)),
    velocity: ux(a, 0.1),
  };
}
function ox(n) {
  return n[0];
}
function a4(n) {
  return n[n.length - 1];
}
function ux(n, a) {
  if (n.length < 2) return { x: 0, y: 0 };
  let l = n.length - 1,
    r = null;
  const o = a4(n);
  for (; l >= 0 && ((r = n[l]), !(o.timestamp - r.timestamp > wn(a))); ) l--;
  if (!r) return { x: 0, y: 0 };
  const f = Mn(o.timestamp - r.timestamp);
  if (f === 0) return { x: 0, y: 0 };
  const d = { x: (o.x - r.x) / f, y: (o.y - r.y) / f };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
const i4 = 1e-4,
  cx = 1 - i4,
  fx = 1 + i4,
  l4 = 0.01,
  dx = 0 - l4,
  hx = 0 + l4;
function ye(n) {
  return n.max - n.min;
}
function mx(n, a, l) {
  return Math.abs(n - a) <= l;
}
function np(n, a, l, r = 0.5) {
  (n.origin = r),
    (n.originPoint = Mt(a.min, a.max, n.origin)),
    (n.scale = ye(l) / ye(a)),
    (n.translate = Mt(l.min, l.max, n.origin) - n.originPoint),
    ((n.scale >= cx && n.scale <= fx) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= dx && n.translate <= hx) || isNaN(n.translate)) &&
      (n.translate = 0);
}
function rs(n, a, l, r) {
  np(n.x, a.x, l.x, r ? r.originX : void 0),
    np(n.y, a.y, l.y, r ? r.originY : void 0);
}
function ap(n, a, l) {
  (n.min = l.min + a.min), (n.max = n.min + ye(a));
}
function px(n, a, l) {
  ap(n.x, a.x, l.x), ap(n.y, a.y, l.y);
}
function ip(n, a, l) {
  (n.min = a.min - l.min), (n.max = n.min + ye(a));
}
function os(n, a, l) {
  ip(n.x, a.x, l.x), ip(n.y, a.y, l.y);
}
function gx(n, { min: a, max: l }, r) {
  return (
    a !== void 0 && n < a
      ? (n = r ? Mt(a, n, r.min) : Math.max(n, a))
      : l !== void 0 && n > l && (n = r ? Mt(l, n, r.max) : Math.min(n, l)),
    n
  );
}
function lp(n, a, l) {
  return {
    min: a !== void 0 ? n.min + a : void 0,
    max: l !== void 0 ? n.max + l - (n.max - n.min) : void 0,
  };
}
function yx(n, { top: a, left: l, bottom: r, right: o }) {
  return { x: lp(n.x, l, o), y: lp(n.y, a, r) };
}
function sp(n, a) {
  let l = a.min - n.min,
    r = a.max - n.max;
  return a.max - a.min < n.max - n.min && ([l, r] = [r, l]), { min: l, max: r };
}
function vx(n, a) {
  return { x: sp(n.x, a.x), y: sp(n.y, a.y) };
}
function bx(n, a) {
  let l = 0.5;
  const r = ye(n),
    o = ye(a);
  return (
    o > r
      ? (l = Ka(a.min, a.max - r, n.min))
      : r > o && (l = Ka(n.min, n.max - o, a.min)),
    an(0, 1, l)
  );
}
function xx(n, a) {
  const l = {};
  return (
    a.min !== void 0 && (l.min = a.min - n.min),
    a.max !== void 0 && (l.max = a.max - n.min),
    l
  );
}
const e0 = 0.35;
function Sx(n = e0) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = e0),
    { x: rp(n, "left", "right"), y: rp(n, "top", "bottom") }
  );
}
function rp(n, a, l) {
  return { min: op(n, a), max: op(n, l) };
}
function op(n, a) {
  return typeof n == "number" ? n : n[a] || 0;
}
const up = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ui = () => ({ x: up(), y: up() }),
  cp = () => ({ min: 0, max: 0 }),
  jt = () => ({ x: cp(), y: cp() });
function Ne(n) {
  return [n("x"), n("y")];
}
function s4({ top: n, left: a, right: l, bottom: r }) {
  return { x: { min: a, max: l }, y: { min: n, max: r } };
}
function Tx({ x: n, y: a }) {
  return { top: a.min, right: n.max, bottom: a.max, left: n.min };
}
function Cx(n, a) {
  if (!a) return n;
  const l = a({ x: n.left, y: n.top }),
    r = a({ x: n.right, y: n.bottom });
  return { top: l.y, left: l.x, bottom: r.y, right: r.x };
}
function mf(n) {
  return n === void 0 || n === 1;
}
function n0({ scale: n, scaleX: a, scaleY: l }) {
  return !mf(n) || !mf(a) || !mf(l);
}
function Pa(n) {
  return (
    n0(n) ||
    r4(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function r4(n) {
  return fp(n.x) || fp(n.y);
}
function fp(n) {
  return n && n !== "0%";
}
function bo(n, a, l) {
  const r = n - l,
    o = a * r;
  return l + o;
}
function dp(n, a, l, r, o) {
  return o !== void 0 && (n = bo(n, o, r)), bo(n, l, r) + a;
}
function a0(n, a = 0, l = 1, r, o) {
  (n.min = dp(n.min, a, l, r, o)), (n.max = dp(n.max, a, l, r, o));
}
function o4(n, { x: a, y: l }) {
  a0(n.x, a.translate, a.scale, a.originPoint),
    a0(n.y, l.translate, l.scale, l.originPoint);
}
const hp = 0.999999999999,
  mp = 1.0000000000001;
function Ax(n, a, l, r = !1) {
  const o = l.length;
  if (!o) return;
  a.x = a.y = 1;
  let f, d;
  for (let h = 0; h < o; h++) {
    (f = l[h]), (d = f.projectionDelta);
    const { visualElement: m } = f.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (r &&
        f.options.layoutScroll &&
        f.scroll &&
        f !== f.root &&
        Pi(n, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
      d && ((a.x *= d.x.scale), (a.y *= d.y.scale), o4(n, d)),
      r && Pa(f.latestValues) && Pi(n, f.latestValues));
  }
  a.x < mp && a.x > hp && (a.x = 1), a.y < mp && a.y > hp && (a.y = 1);
}
function ki(n, a) {
  (n.min = n.min + a), (n.max = n.max + a);
}
function pp(n, a, l, r, o = 0.5) {
  const f = Mt(n.min, n.max, o);
  a0(n, a, l, f, r);
}
function Pi(n, a) {
  pp(n.x, a.x, a.scaleX, a.scale, a.originX),
    pp(n.y, a.y, a.scaleY, a.scale, a.originY);
}
function u4(n, a) {
  return s4(Cx(n.getBoundingClientRect(), a));
}
function Ex(n, a, l) {
  const r = u4(n, l),
    { scroll: o } = a;
  return o && (ki(r.x, o.offset.x), ki(r.y, o.offset.y)), r;
}
const c4 = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  wx = new WeakMap();
class Mx {
  constructor(a) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = jt()),
      (this.visualElement = a);
  }
  start(a, { snapToCursor: l = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (y) => {
        const { dragSnapToOrigin: x } = this.getProps();
        x ? this.pauseAnimation() : this.stopAnimation(),
          l && this.snapToCursor(As(y).point);
      },
      f = (y, x) => {
        const { drag: b, dragPropagation: C, onDragStart: M } = this.getProps();
        if (
          b &&
          !C &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = lx(b)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ne((L) => {
            let D = this.getAxisMotionValue(L).get() || 0;
            if (Ie.test(D)) {
              const { projection: V } = this.visualElement;
              if (V && V.layout) {
                const B = V.layout.layoutBox[L];
                B && (D = ye(B) * (parseFloat(D) / 100));
              }
            }
            this.originPoint[L] = D;
          }),
          M && mt.postRender(() => M(y, x)),
          Xf(this.visualElement, "transform");
        const { animationState: z } = this.visualElement;
        z && z.setActive("whileDrag", !0);
      },
      d = (y, x) => {
        const {
          dragPropagation: b,
          dragDirectionLock: C,
          onDirectionLock: M,
          onDrag: z,
        } = this.getProps();
        if (!b && !this.openDragLock) return;
        const { offset: L } = x;
        if (C && this.currentDirection === null) {
          (this.currentDirection = Dx(L)),
            this.currentDirection !== null && M && M(this.currentDirection);
          return;
        }
        this.updateAxis("x", x.point, L),
          this.updateAxis("y", x.point, L),
          this.visualElement.render(),
          z && z(y, x);
      },
      h = (y, x) => this.stop(y, x),
      m = () =>
        Ne((y) => {
          var x;
          return (
            this.getAnimationState(y) === "paused" &&
            ((x = this.getAxisMotionValue(y).animation) === null || x === void 0
              ? void 0
              : x.play())
          );
        }),
      { dragSnapToOrigin: p } = this.getProps();
    this.panSession = new n4(
      a,
      {
        onSessionStart: o,
        onStart: f,
        onMove: d,
        onSessionEnd: h,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: p,
        contextWindow: c4(this.visualElement),
      }
    );
  }
  stop(a, l) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = l;
    this.startAnimation(o);
    const { onDragEnd: f } = this.getProps();
    f && mt.postRender(() => f(a, l));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: a, animationState: l } = this.visualElement;
    a && (a.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      l && l.setActive("whileDrag", !1);
  }
  updateAxis(a, l, r) {
    const { drag: o } = this.getProps();
    if (!r || !Kr(a, o, this.currentDirection)) return;
    const f = this.getAxisMotionValue(a);
    let d = this.originPoint[a] + r[a];
    this.constraints &&
      this.constraints[a] &&
      (d = gx(d, this.constraints[a], this.elastic[a])),
      f.set(d);
  }
  resolveConstraints() {
    var a;
    const { dragConstraints: l, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (a = this.visualElement.projection) === null || a === void 0
          ? void 0
          : a.layout,
      f = this.constraints;
    l && Hi(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && o
      ? (this.constraints = yx(o.layoutBox, l))
      : (this.constraints = !1),
      (this.elastic = Sx(r)),
      f !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ne((d) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(d) &&
            (this.constraints[d] = xx(o.layoutBox[d], this.constraints[d]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: a, onMeasureDragConstraints: l } = this.getProps();
    if (!a || !Hi(a)) return !1;
    const r = a.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const f = Ex(r, o.root, this.visualElement.getTransformPagePoint());
    let d = vx(o.layout.layoutBox, f);
    if (l) {
      const h = l(Tx(d));
      (this.hasMutatedConstraints = !!h), h && (d = s4(h));
    }
    return d;
  }
  startAnimation(a) {
    const {
        drag: l,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: f,
        dragSnapToOrigin: d,
        onDragTransitionEnd: h,
      } = this.getProps(),
      m = this.constraints || {},
      p = Ne((y) => {
        if (!Kr(y, l, this.currentDirection)) return;
        let x = m[y] || {};
        d && (x = { min: 0, max: 0 });
        const b = o ? 200 : 1e6,
          C = o ? 40 : 1e7,
          M = {
            type: "inertia",
            velocity: r ? a[y] : 0,
            bounceStiffness: b,
            bounceDamping: C,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...f,
            ...x,
          };
        return this.startAxisValueAnimation(y, M);
      });
    return Promise.all(p).then(h);
  }
  startAxisValueAnimation(a, l) {
    const r = this.getAxisMotionValue(a);
    return (
      Xf(this.visualElement, a), r.start(I0(a, r, 0, l, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ne((a) => this.getAxisMotionValue(a).stop());
  }
  pauseAnimation() {
    Ne((a) => {
      var l;
      return (l = this.getAxisMotionValue(a).animation) === null || l === void 0
        ? void 0
        : l.pause();
    });
  }
  getAnimationState(a) {
    var l;
    return (l = this.getAxisMotionValue(a).animation) === null || l === void 0
      ? void 0
      : l.state;
  }
  getAxisMotionValue(a) {
    const l = `_drag${a.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[l];
    return (
      o ||
      this.visualElement.getValue(a, (r.initial ? r.initial[a] : void 0) || 0)
    );
  }
  snapToCursor(a) {
    Ne((l) => {
      const { drag: r } = this.getProps();
      if (!Kr(l, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        f = this.getAxisMotionValue(l);
      if (o && o.layout) {
        const { min: d, max: h } = o.layout.layoutBox[l];
        f.set(a[l] - Mt(d, h, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: a, dragConstraints: l } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Hi(l) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Ne((d) => {
      const h = this.getAxisMotionValue(d);
      if (h && this.constraints !== !1) {
        const m = h.get();
        o[d] = bx({ min: m, max: m }, this.constraints[d]);
      }
    });
    const { transformTemplate: f } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = f ? f({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ne((d) => {
        if (!Kr(d, a, null)) return;
        const h = this.getAxisMotionValue(d),
          { min: m, max: p } = this.constraints[d];
        h.set(Mt(m, p, o[d]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    wx.set(this.visualElement, this);
    const a = this.visualElement.current,
      l = ss(a, "pointerdown", (m) => {
        const { drag: p, dragListener: y = !0 } = this.getProps();
        p && y && this.start(m);
      }),
      r = () => {
        const { dragConstraints: m } = this.getProps();
        Hi(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      f = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      mt.read(r);
    const d = ps(window, "resize", () => this.scalePositionWithinConstraints()),
      h = o.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: p }) => {
          this.isDragging &&
            p &&
            (Ne((y) => {
              const x = this.getAxisMotionValue(y);
              x &&
                ((this.originPoint[y] += m[y].translate),
                x.set(x.get() + m[y].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      d(), l(), f(), h && h();
    };
  }
  getProps() {
    const a = this.visualElement.getProps(),
      {
        drag: l = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: f = !1,
        dragElastic: d = e0,
        dragMomentum: h = !0,
      } = a;
    return {
      ...a,
      drag: l,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: f,
      dragElastic: d,
      dragMomentum: h,
    };
  }
}
function Kr(n, a, l) {
  return (a === !0 || a === n) && (l === null || l === n);
}
function Dx(n, a = 10) {
  let l = null;
  return Math.abs(n.y) > a ? (l = "y") : Math.abs(n.x) > a && (l = "x"), l;
}
class Ox extends pa {
  constructor(a) {
    super(a),
      (this.removeGroupControls = se),
      (this.removeListeners = se),
      (this.controls = new Mx(a));
  }
  mount() {
    const { dragControls: a } = this.node.getProps();
    a && (this.removeGroupControls = a.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || se);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const gp = (n) => (a, l) => {
  n && mt.postRender(() => n(a, l));
};
class Rx extends pa {
  constructor() {
    super(...arguments), (this.removePointerDownListener = se);
  }
  onPointerDown(a) {
    this.session = new n4(a, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: c4(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: a,
      onPanStart: l,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: gp(a),
      onStart: gp(l),
      onMove: r,
      onEnd: (f, d) => {
        delete this.session, o && mt.postRender(() => o(f, d));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ss(this.node.current, "pointerdown", (a) =>
      this.onPointerDown(a)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const io = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function yp(n, a) {
  return a.max === a.min ? 0 : (n / (a.max - a.min)) * 100;
}
const Kl = {
    correct: (n, a) => {
      if (!a.target) return n;
      if (typeof n == "string")
        if (et.test(n)) n = parseFloat(n);
        else return n;
      const l = yp(n, a.target.x),
        r = yp(n, a.target.y);
      return `${l}% ${r}%`;
    },
  },
  Lx = {
    correct: (n, { treeScale: a, projectionDelta: l }) => {
      const r = n,
        o = ha.parse(n);
      if (o.length > 5) return r;
      const f = ha.createTransformer(n),
        d = typeof o[0] != "number" ? 1 : 0,
        h = l.x.scale * a.x,
        m = l.y.scale * a.y;
      (o[0 + d] /= h), (o[1 + d] /= m);
      const p = Mt(h, m, 0.5);
      return (
        typeof o[2 + d] == "number" && (o[2 + d] /= p),
        typeof o[3 + d] == "number" && (o[3 + d] /= p),
        f(o)
      );
    },
  };
class zx extends A.Component {
  componentDidMount() {
    const {
        visualElement: a,
        layoutGroup: l,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: f } = a;
    r9(Nx),
      f &&
        (l.group && l.group.add(f),
        r && r.register && o && r.register(f),
        f.root.didUpdate(),
        f.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        f.setOptions({
          ...f.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (io.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(a) {
    const {
        layoutDependency: l,
        visualElement: r,
        drag: o,
        isPresent: f,
      } = this.props,
      d = r.projection;
    return (
      d &&
        ((d.isPresent = f),
        o || a.layoutDependency !== l || l === void 0
          ? d.willUpdate()
          : this.safeToRemove(),
        a.isPresent !== f &&
          (f
            ? d.promote()
            : d.relegate() ||
              mt.postRender(() => {
                const h = d.getStack();
                (!h || !h.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: a } = this.props.visualElement;
    a &&
      (a.root.didUpdate(),
      D0.postRender(() => {
        !a.currentAnimation && a.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: a,
        layoutGroup: l,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = a;
    o &&
      (o.scheduleCheckAfterUnmount(),
      l && l.group && l.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: a } = this.props;
    a && a();
  }
  render() {
    return null;
  }
}
function f4(n) {
  const [a, l] = Q3(),
    r = A.useContext(C0);
  return T.jsx(zx, {
    ...n,
    layoutGroup: r,
    switchLayoutGroup: A.useContext(eg),
    isPresent: a,
    safeToRemove: l,
  });
}
const Nx = {
  borderRadius: {
    ...Kl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Kl,
  borderTopRightRadius: Kl,
  borderBottomLeftRadius: Kl,
  borderBottomRightRadius: Kl,
  boxShadow: Lx,
};
function Vx(n, a, l) {
  const r = Qt(n) ? n : Je(n);
  return r.start(I0("", r, a, l)), r.animation;
}
function jx(n) {
  return n instanceof SVGElement && n.tagName !== "svg";
}
const _x = (n, a) => n.depth - a.depth;
class Hx {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(a) {
    U0(this.children, a), (this.isDirty = !0);
  }
  remove(a) {
    k0(this.children, a), (this.isDirty = !0);
  }
  forEach(a) {
    this.isDirty && this.children.sort(_x),
      (this.isDirty = !1),
      this.children.forEach(a);
  }
}
function Bx(n, a) {
  const l = tn.now(),
    r = ({ timestamp: o }) => {
      const f = o - l;
      f >= a && (nn(r), n(f - a));
    };
  return mt.read(r, !0), () => nn(r);
}
const d4 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Ux = d4.length,
  vp = (n) => (typeof n == "string" ? parseFloat(n) : n),
  bp = (n) => typeof n == "number" || et.test(n);
function kx(n, a, l, r, o, f) {
  o
    ? ((n.opacity = Mt(0, l.opacity !== void 0 ? l.opacity : 1, Px(r))),
      (n.opacityExit = Mt(a.opacity !== void 0 ? a.opacity : 1, 0, Gx(r))))
    : f &&
      (n.opacity = Mt(
        a.opacity !== void 0 ? a.opacity : 1,
        l.opacity !== void 0 ? l.opacity : 1,
        r
      ));
  for (let d = 0; d < Ux; d++) {
    const h = `border${d4[d]}Radius`;
    let m = xp(a, h),
      p = xp(l, h);
    if (m === void 0 && p === void 0) continue;
    m || (m = 0),
      p || (p = 0),
      m === 0 || p === 0 || bp(m) === bp(p)
        ? ((n[h] = Math.max(Mt(vp(m), vp(p), r), 0)),
          (Ie.test(p) || Ie.test(m)) && (n[h] += "%"))
        : (n[h] = p);
  }
  (a.rotate || l.rotate) && (n.rotate = Mt(a.rotate || 0, l.rotate || 0, r));
}
function xp(n, a) {
  return n[a] !== void 0 ? n[a] : n.borderRadius;
}
const Px = h4(0, 0.5, Mg),
  Gx = h4(0.5, 0.95, se);
function h4(n, a, l) {
  return (r) => (r < n ? 0 : r > a ? 1 : l(Ka(n, a, r)));
}
function Sp(n, a) {
  (n.min = a.min), (n.max = a.max);
}
function ze(n, a) {
  Sp(n.x, a.x), Sp(n.y, a.y);
}
function Tp(n, a) {
  (n.translate = a.translate),
    (n.scale = a.scale),
    (n.originPoint = a.originPoint),
    (n.origin = a.origin);
}
function Cp(n, a, l, r, o) {
  return (
    (n -= a), (n = bo(n, 1 / l, r)), o !== void 0 && (n = bo(n, 1 / o, r)), n
  );
}
function Yx(n, a = 0, l = 1, r = 0.5, o, f = n, d = n) {
  if (
    (Ie.test(a) &&
      ((a = parseFloat(a)), (a = Mt(d.min, d.max, a / 100) - d.min)),
    typeof a != "number")
  )
    return;
  let h = Mt(f.min, f.max, r);
  n === f && (h -= a),
    (n.min = Cp(n.min, a, l, h, o)),
    (n.max = Cp(n.max, a, l, h, o));
}
function Ap(n, a, [l, r, o], f, d) {
  Yx(n, a[l], a[r], a[o], a.scale, f, d);
}
const qx = ["x", "scaleX", "originX"],
  Xx = ["y", "scaleY", "originY"];
function Ep(n, a, l, r) {
  Ap(n.x, a, qx, l ? l.x : void 0, r ? r.x : void 0),
    Ap(n.y, a, Xx, l ? l.y : void 0, r ? r.y : void 0);
}
function wp(n) {
  return n.translate === 0 && n.scale === 1;
}
function m4(n) {
  return wp(n.x) && wp(n.y);
}
function Mp(n, a) {
  return n.min === a.min && n.max === a.max;
}
function Zx(n, a) {
  return Mp(n.x, a.x) && Mp(n.y, a.y);
}
function Dp(n, a) {
  return (
    Math.round(n.min) === Math.round(a.min) &&
    Math.round(n.max) === Math.round(a.max)
  );
}
function p4(n, a) {
  return Dp(n.x, a.x) && Dp(n.y, a.y);
}
function Op(n) {
  return ye(n.x) / ye(n.y);
}
function Rp(n, a) {
  return (
    n.translate === a.translate &&
    n.scale === a.scale &&
    n.originPoint === a.originPoint
  );
}
class Fx {
  constructor() {
    this.members = [];
  }
  add(a) {
    U0(this.members, a), a.scheduleRender();
  }
  remove(a) {
    if (
      (k0(this.members, a),
      a === this.prevLead && (this.prevLead = void 0),
      a === this.lead)
    ) {
      const l = this.members[this.members.length - 1];
      l && this.promote(l);
    }
  }
  relegate(a) {
    const l = this.members.findIndex((o) => a === o);
    if (l === 0) return !1;
    let r;
    for (let o = l; o >= 0; o--) {
      const f = this.members[o];
      if (f.isPresent !== !1) {
        r = f;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(a, l) {
    const r = this.lead;
    if (a !== r && ((this.prevLead = r), (this.lead = a), a.show(), r)) {
      r.instance && r.scheduleRender(),
        a.scheduleRender(),
        (a.resumeFrom = r),
        l && (a.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((a.snapshot = r.snapshot),
          (a.snapshot.latestValues = r.animationValues || r.latestValues)),
        a.root && a.root.isUpdating && (a.isLayoutDirty = !0);
      const { crossfade: o } = a.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((a) => {
      const { options: l, resumingFrom: r } = a;
      l.onExitComplete && l.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((a) => {
      a.instance && a.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Kx(n, a, l) {
  let r = "";
  const o = n.x.translate / a.x,
    f = n.y.translate / a.y,
    d = (l == null ? void 0 : l.z) || 0;
  if (
    ((o || f || d) && (r = `translate3d(${o}px, ${f}px, ${d}px) `),
    (a.x !== 1 || a.y !== 1) && (r += `scale(${1 / a.x}, ${1 / a.y}) `),
    l)
  ) {
    const {
      transformPerspective: p,
      rotate: y,
      rotateX: x,
      rotateY: b,
      skewX: C,
      skewY: M,
    } = l;
    p && (r = `perspective(${p}px) ${r}`),
      y && (r += `rotate(${y}deg) `),
      x && (r += `rotateX(${x}deg) `),
      b && (r += `rotateY(${b}deg) `),
      C && (r += `skewX(${C}deg) `),
      M && (r += `skewY(${M}deg) `);
  }
  const h = n.x.scale * a.x,
    m = n.y.scale * a.y;
  return (h !== 1 || m !== 1) && (r += `scale(${h}, ${m})`), r || "none";
}
const Ga = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ts = typeof window < "u" && window.MotionDebug !== void 0,
  pf = ["", "X", "Y", "Z"],
  Qx = { visibility: "hidden" },
  Lp = 1e3;
let Wx = 0;
function gf(n, a, l, r) {
  const { latestValues: o } = a;
  o[n] && ((l[n] = o[n]), a.setStaticValue(n, 0), r && (r[n] = 0));
}
function g4(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: a } = n.options;
  if (!a) return;
  const l = gg(a);
  if (window.MotionHasOptimisedAnimation(l, "transform")) {
    const { layout: o, layoutId: f } = n.options;
    window.MotionCancelOptimisedAnimation(l, "transform", mt, !(o || f));
  }
  const { parent: r } = n;
  r && !r.hasCheckedOptimisedAppear && g4(r);
}
function y4({
  attachResizeListener: n,
  defaultParent: a,
  measureScroll: l,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(d = {}, h = a == null ? void 0 : a()) {
      (this.id = Wx++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            ts &&
              (Ga.totalNodes =
                Ga.resolvedTargetDeltas =
                Ga.recalculatedProjection =
                  0),
            this.nodes.forEach(Ix),
            this.nodes.forEach(iS),
            this.nodes.forEach(lS),
            this.nodes.forEach(tS),
            ts && window.MotionDebug.record(Ga);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = d),
        (this.root = h ? h.root || h : this),
        (this.path = h ? [...h.path, h] : []),
        (this.parent = h),
        (this.depth = h ? h.depth + 1 : 0);
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Hx());
    }
    addEventListener(d, h) {
      return (
        this.eventHandlers.has(d) || this.eventHandlers.set(d, new P0()),
        this.eventHandlers.get(d).add(h)
      );
    }
    notifyListeners(d, ...h) {
      const m = this.eventHandlers.get(d);
      m && m.notify(...h);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    mount(d, h = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = jx(d)), (this.instance = d);
      const { layoutId: m, layout: p, visualElement: y } = this.options;
      if (
        (y && !y.current && y.mount(d),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        h && (p || m) && (this.isLayoutDirty = !0),
        n)
      ) {
        let x;
        const b = () => (this.root.updateBlockedByResize = !1);
        n(d, () => {
          (this.root.updateBlockedByResize = !0),
            x && x(),
            (x = Bx(b, 250)),
            io.hasAnimatedSinceResize &&
              ((io.hasAnimatedSinceResize = !1), this.nodes.forEach(Np));
        });
      }
      m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          y &&
          (m || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: x,
              hasLayoutChanged: b,
              hasRelativeTargetChanged: C,
              layout: M,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const z =
                  this.options.transition || y.getDefaultTransition() || cS,
                { onLayoutAnimationStart: L, onLayoutAnimationComplete: D } =
                  y.getProps(),
                V = !this.targetLayout || !p4(this.targetLayout, M) || C,
                B = !b && C;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                B ||
                (b && (V || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(x, B);
                const Y = { ...B0(z, "layout"), onPlay: L, onComplete: D };
                (y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((Y.delay = 0), (Y.type = !1)),
                  this.startAnimation(Y);
              } else
                b || Np(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = M;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        nn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(sS),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          g4(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let y = 0; y < this.path.length; y++) {
        const x = this.path[y];
        (x.shouldResetTransform = !0),
          x.updateScroll("snapshot"),
          x.options.layoutRoot && x.willUpdate(!1);
      }
      const { layoutId: h, layout: m } = this.options;
      if (h === void 0 && !m) return;
      const p = this.getTransformTemplate();
      (this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        d && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(zp);
        return;
      }
      this.isUpdating || this.nodes.forEach(nS),
        (this.isUpdating = !1),
        this.nodes.forEach(aS),
        this.nodes.forEach($x),
        this.nodes.forEach(Jx),
        this.clearAllSnapshots();
      const h = tn.now();
      (Yt.delta = an(0, 1e3 / 60, h - Yt.timestamp)),
        (Yt.timestamp = h),
        (Yt.isProcessing = !0),
        of.update.process(Yt),
        of.preRender.process(Yt),
        of.render.process(Yt),
        (Yt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), D0.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(eS), this.sharedNodes.forEach(rS);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        mt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      mt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
      const d = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = jt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h &&
        h.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          d ? d.layoutBox : void 0
        );
    }
    updateScroll(d = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === d &&
          (h = !1),
        h)
      ) {
        const m = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: m,
          offset: l(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const d =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !m4(this.projectionDelta),
        m = this.getTransformTemplate(),
        p = m ? m(this.latestValues, "") : void 0,
        y = p !== this.prevTransformTemplateValue;
      d &&
        (h || Pa(this.latestValues) || y) &&
        (o(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(d = !0) {
      const h = this.measurePageBox();
      let m = this.removeElementScroll(h);
      return (
        d && (m = this.removeTransform(m)),
        fS(m),
        {
          animationId: this.root.animationId,
          measuredBox: h,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var d;
      const { visualElement: h } = this.options;
      if (!h) return jt();
      const m = h.measureViewportBox();
      if (
        !(
          ((d = this.scroll) === null || d === void 0 ? void 0 : d.wasRoot) ||
          this.path.some(dS)
        )
      ) {
        const { scroll: y } = this.root;
        y && (ki(m.x, y.offset.x), ki(m.y, y.offset.y));
      }
      return m;
    }
    removeElementScroll(d) {
      var h;
      const m = jt();
      if (
        (ze(m, d), !((h = this.scroll) === null || h === void 0) && h.wasRoot)
      )
        return m;
      for (let p = 0; p < this.path.length; p++) {
        const y = this.path[p],
          { scroll: x, options: b } = y;
        y !== this.root &&
          x &&
          b.layoutScroll &&
          (x.wasRoot && ze(m, d), ki(m.x, x.offset.x), ki(m.y, x.offset.y));
      }
      return m;
    }
    applyTransform(d, h = !1) {
      const m = jt();
      ze(m, d);
      for (let p = 0; p < this.path.length; p++) {
        const y = this.path[p];
        !h &&
          y.options.layoutScroll &&
          y.scroll &&
          y !== y.root &&
          Pi(m, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
          Pa(y.latestValues) && Pi(m, y.latestValues);
      }
      return Pa(this.latestValues) && Pi(m, this.latestValues), m;
    }
    removeTransform(d) {
      const h = jt();
      ze(h, d);
      for (let m = 0; m < this.path.length; m++) {
        const p = this.path[m];
        if (!p.instance || !Pa(p.latestValues)) continue;
        n0(p.latestValues) && p.updateSnapshot();
        const y = jt(),
          x = p.measurePageBox();
        ze(y, x),
          Ep(h, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, y);
      }
      return Pa(this.latestValues) && Ep(h, this.latestValues), h;
    }
    setTargetDelta(d) {
      (this.targetDelta = d),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Yt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      var h;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== m;
      if (
        !(
          d ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((h = this.parent) === null || h === void 0) &&
            h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: x, layoutId: b } = this.options;
      if (!(!this.layout || !(x || b))) {
        if (
          ((this.resolvedRelativeTargetAt = Yt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const C = this.getClosestProjectingParent();
          C && C.layout && this.animationProgress !== 1
            ? ((this.relativeParent = C),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = jt()),
              (this.relativeTargetOrigin = jt()),
              os(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                C.layout.layoutBox
              ),
              ze(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = jt()), (this.targetWithTransforms = jt())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                px(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : ze(this.target, this.layout.layoutBox),
                o4(this.target, this.targetDelta))
              : ze(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const C = this.getClosestProjectingParent();
            C &&
            !!C.resumingFrom == !!this.resumingFrom &&
            !C.options.layoutScroll &&
            C.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = C),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = jt()),
                (this.relativeTargetOrigin = jt()),
                os(this.relativeTargetOrigin, this.target, C.target),
                ze(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ts && Ga.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          n0(this.parent.latestValues) ||
          r4(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var d;
      const h = this.getLead(),
        m = !!this.resumingFrom || this !== h;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          (!((d = this.parent) === null || d === void 0) &&
            d.isProjectionDirty)) &&
          (p = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === Yt.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: y, layoutId: x } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(y || x))
      )
        return;
      ze(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        C = this.treeScale.y;
      Ax(this.layoutCorrected, this.treeScale, this.path, m),
        h.layout &&
          !h.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((h.target = h.layout.layoutBox), (h.targetWithTransforms = jt()));
      const { target: M } = h;
      if (!M) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Tp(this.prevProjectionDelta.x, this.projectionDelta.x),
          Tp(this.prevProjectionDelta.y, this.projectionDelta.y)),
        rs(this.projectionDelta, this.layoutCorrected, M, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== C ||
          !Rp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Rp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", M)),
        ts && Ga.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      var h;
      if (
        ((h = this.options.visualElement) === null ||
          h === void 0 ||
          h.scheduleRender(),
        d)
      ) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Ui()),
        (this.projectionDelta = Ui()),
        (this.projectionDeltaWithTransform = Ui());
    }
    setAnimationOrigin(d, h = !1) {
      const m = this.snapshot,
        p = m ? m.latestValues : {},
        y = { ...this.latestValues },
        x = Ui();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !h);
      const b = jt(),
        C = m ? m.source : void 0,
        M = this.layout ? this.layout.source : void 0,
        z = C !== M,
        L = this.getStack(),
        D = !L || L.members.length <= 1,
        V = !!(z && !D && this.options.crossfade === !0 && !this.path.some(uS));
      this.animationProgress = 0;
      let B;
      (this.mixTargetDelta = (Y) => {
        const k = Y / 1e3;
        Vp(x.x, d.x, k),
          Vp(x.y, d.y, k),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (os(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            oS(this.relativeTarget, this.relativeTargetOrigin, b, k),
            B && Zx(this.relativeTarget, B) && (this.isProjectionDirty = !1),
            B || (B = jt()),
            ze(B, this.relativeTarget)),
          z &&
            ((this.animationValues = y), kx(y, p, this.latestValues, k, V, D)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (nn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = mt.update(() => {
          (io.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Vx(0, Lp, {
              ...d,
              onUpdate: (h) => {
                this.mixTargetDelta(h), d.onUpdate && d.onUpdate(h);
              },
              onComplete: () => {
                d.onComplete && d.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const d = this.getStack();
      d && d.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Lp),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let {
        targetWithTransforms: h,
        target: m,
        layout: p,
        latestValues: y,
      } = d;
      if (!(!h || !m || !p)) {
        if (
          this !== d &&
          this.layout &&
          p &&
          v4(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          m = this.target || jt();
          const x = ye(this.layout.layoutBox.x);
          (m.x.min = d.target.x.min), (m.x.max = m.x.min + x);
          const b = ye(this.layout.layoutBox.y);
          (m.y.min = d.target.y.min), (m.y.max = m.y.min + b);
        }
        ze(h, m),
          Pi(h, y),
          rs(this.projectionDeltaWithTransform, this.layoutCorrected, h, y);
      }
    }
    registerSharedNode(d, h) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new Fx()),
        this.sharedNodes.get(d).add(h);
      const p = h.options.initialPromotionConfig;
      h.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(h)
            : void 0,
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      var d;
      const { layoutId: h } = this.options;
      return h
        ? ((d = this.getStack()) === null || d === void 0 ? void 0 : d.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var d;
      const { layoutId: h } = this.options;
      return h
        ? (d = this.getStack()) === null || d === void 0
          ? void 0
          : d.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d) return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: h, preserveFollowOpacity: m } = {}) {
      const p = this.getStack();
      p && p.promote(this, m),
        d && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        h && this.setOptions({ transition: h });
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d) return;
      let h = !1;
      const { latestValues: m } = d;
      if (
        ((m.z ||
          m.rotate ||
          m.rotateX ||
          m.rotateY ||
          m.rotateZ ||
          m.skewX ||
          m.skewY) &&
          (h = !0),
        !h)
      )
        return;
      const p = {};
      m.z && gf("z", d, p, this.animationValues);
      for (let y = 0; y < pf.length; y++)
        gf(`rotate${pf[y]}`, d, p, this.animationValues),
          gf(`skew${pf[y]}`, d, p, this.animationValues);
      d.render();
      for (const y in p)
        d.setStaticValue(y, p[y]),
          this.animationValues && (this.animationValues[y] = p[y]);
      d.scheduleRender();
    }
    getProjectionStyles(d) {
      var h, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Qx;
      const p = { visibility: "" },
        y = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (p.opacity = ""),
          (p.pointerEvents = no(d == null ? void 0 : d.pointerEvents) || ""),
          (p.transform = y ? y(this.latestValues, "") : "none"),
          p
        );
      const x = this.getLead();
      if (!this.projectionDelta || !this.layout || !x.target) {
        const z = {};
        return (
          this.options.layoutId &&
            ((z.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (z.pointerEvents = no(d == null ? void 0 : d.pointerEvents) || "")),
          this.hasProjected &&
            !Pa(this.latestValues) &&
            ((z.transform = y ? y({}, "") : "none"), (this.hasProjected = !1)),
          z
        );
      }
      const b = x.animationValues || x.latestValues;
      this.applyTransformsToTarget(),
        (p.transform = Kx(
          this.projectionDeltaWithTransform,
          this.treeScale,
          b
        )),
        y && (p.transform = y(b, p.transform));
      const { x: C, y: M } = this.projectionDelta;
      (p.transformOrigin = `${C.origin * 100}% ${M.origin * 100}% 0`),
        x.animationValues
          ? (p.opacity =
              x === this
                ? (m =
                    (h = b.opacity) !== null && h !== void 0
                      ? h
                      : this.latestValues.opacity) !== null && m !== void 0
                  ? m
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : b.opacityExit)
          : (p.opacity =
              x === this
                ? b.opacity !== void 0
                  ? b.opacity
                  : ""
                : b.opacityExit !== void 0
                ? b.opacityExit
                : 0);
      for (const z in mo) {
        if (b[z] === void 0) continue;
        const { correct: L, applyTo: D } = mo[z],
          V = p.transform === "none" ? b[z] : L(b[z], x);
        if (D) {
          const B = D.length;
          for (let Y = 0; Y < B; Y++) p[D[Y]] = V;
        } else p[z] = V;
      }
      return (
        this.options.layoutId &&
          (p.pointerEvents =
            x === this
              ? no(d == null ? void 0 : d.pointerEvents) || ""
              : "none"),
        p
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((d) => {
        var h;
        return (h = d.currentAnimation) === null || h === void 0
          ? void 0
          : h.stop();
      }),
        this.root.nodes.forEach(zp),
        this.root.sharedNodes.clear();
    }
  };
}
function $x(n) {
  n.updateLayout();
}
function Jx(n) {
  var a;
  const l =
    ((a = n.resumeFrom) === null || a === void 0 ? void 0 : a.snapshot) ||
    n.snapshot;
  if (n.isLead() && n.layout && l && n.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = n.layout,
      { animationType: f } = n.options,
      d = l.source !== n.layout.source;
    f === "size"
      ? Ne((x) => {
          const b = d ? l.measuredBox[x] : l.layoutBox[x],
            C = ye(b);
          (b.min = r[x].min), (b.max = b.min + C);
        })
      : v4(f, l.layoutBox, r) &&
        Ne((x) => {
          const b = d ? l.measuredBox[x] : l.layoutBox[x],
            C = ye(r[x]);
          (b.max = b.min + C),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[x].max = n.relativeTarget[x].min + C));
        });
    const h = Ui();
    rs(h, r, l.layoutBox);
    const m = Ui();
    d ? rs(m, n.applyTransform(o, !0), l.measuredBox) : rs(m, r, l.layoutBox);
    const p = !m4(h);
    let y = !1;
    if (!n.resumeFrom) {
      const x = n.getClosestProjectingParent();
      if (x && !x.resumeFrom) {
        const { snapshot: b, layout: C } = x;
        if (b && C) {
          const M = jt();
          os(M, l.layoutBox, b.layoutBox);
          const z = jt();
          os(z, r, C.layoutBox),
            p4(M, z) || (y = !0),
            x.options.layoutRoot &&
              ((n.relativeTarget = z),
              (n.relativeTargetOrigin = M),
              (n.relativeParent = x));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: r,
      snapshot: l,
      delta: m,
      layoutDelta: h,
      hasLayoutChanged: p,
      hasRelativeTargetChanged: y,
    });
  } else if (n.isLead()) {
    const { onExitComplete: r } = n.options;
    r && r();
  }
  n.options.transition = void 0;
}
function Ix(n) {
  ts && Ga.totalNodes++,
    n.parent &&
      (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
      n.isSharedProjectionDirty ||
        (n.isSharedProjectionDirty = !!(
          n.isProjectionDirty ||
          n.parent.isProjectionDirty ||
          n.parent.isSharedProjectionDirty
        )),
      n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function tS(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function eS(n) {
  n.clearSnapshot();
}
function zp(n) {
  n.clearMeasurements();
}
function nS(n) {
  n.isLayoutDirty = !1;
}
function aS(n) {
  const { visualElement: a } = n.options;
  a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"),
    n.resetTransform();
}
function Np(n) {
  n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0);
}
function iS(n) {
  n.resolveTargetDelta();
}
function lS(n) {
  n.calcProjection();
}
function sS(n) {
  n.resetSkewAndRotation();
}
function rS(n) {
  n.removeLeadSnapshot();
}
function Vp(n, a, l) {
  (n.translate = Mt(a.translate, 0, l)),
    (n.scale = Mt(a.scale, 1, l)),
    (n.origin = a.origin),
    (n.originPoint = a.originPoint);
}
function jp(n, a, l, r) {
  (n.min = Mt(a.min, l.min, r)), (n.max = Mt(a.max, l.max, r));
}
function oS(n, a, l, r) {
  jp(n.x, a.x, l.x, r), jp(n.y, a.y, l.y, r);
}
function uS(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const cS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  _p = (n) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  Hp = _p("applewebkit/") && !_p("chrome/") ? Math.round : se;
function Bp(n) {
  (n.min = Hp(n.min)), (n.max = Hp(n.max));
}
function fS(n) {
  Bp(n.x), Bp(n.y);
}
function v4(n, a, l) {
  return (
    n === "position" || (n === "preserve-aspect" && !mx(Op(a), Op(l), 0.2))
  );
}
function dS(n) {
  var a;
  return (
    n !== n.root &&
    ((a = n.scroll) === null || a === void 0 ? void 0 : a.wasRoot)
  );
}
const hS = y4({
    attachResizeListener: (n, a) => ps(n, "resize", a),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  yf = { current: void 0 },
  b4 = y4({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!yf.current) {
        const n = new hS({});
        n.mount(window), n.setOptions({ layoutScroll: !0 }), (yf.current = n);
      }
      return yf.current;
    },
    resetTransform: (n, a) => {
      n.style.transform = a !== void 0 ? a : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  mS = {
    pan: { Feature: Rx },
    drag: { Feature: Ox, ProjectionNode: b4, MeasureLayout: f4 },
  };
function x4(n, a, l) {
  var r;
  if (n instanceof Element) return [n];
  if (typeof n == "string") {
    let o = document;
    const f = (r = void 0) !== null && r !== void 0 ? r : o.querySelectorAll(n);
    return f ? Array.from(f) : [];
  }
  return Array.from(n);
}
function S4(n, a) {
  const l = x4(n),
    r = new AbortController(),
    o = { passive: !0, ...a, signal: r.signal };
  return [l, o, () => r.abort()];
}
function Up(n) {
  return (a) => {
    a.pointerType === "touch" || e4() || n(a);
  };
}
function pS(n, a, l = {}) {
  const [r, o, f] = S4(n, l),
    d = Up((h) => {
      const { target: m } = h,
        p = a(h);
      if (typeof p != "function" || !m) return;
      const y = Up((x) => {
        p(x), m.removeEventListener("pointerleave", y);
      });
      m.addEventListener("pointerleave", y, o);
    });
  return (
    r.forEach((h) => {
      h.addEventListener("pointerenter", d, o);
    }),
    f
  );
}
function kp(n, a, l) {
  const { props: r } = n;
  n.animationState &&
    r.whileHover &&
    n.animationState.setActive("whileHover", l === "Start");
  const o = "onHover" + l,
    f = r[o];
  f && mt.postRender(() => f(a, As(a)));
}
class gS extends pa {
  mount() {
    const { current: a } = this.node;
    a &&
      (this.unmount = pS(
        a,
        (l) => (kp(this.node, l, "Start"), (r) => kp(this.node, r, "End"))
      ));
  }
  unmount() {}
}
class yS extends pa {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let a = !1;
    try {
      a = this.node.current.matches(":focus-visible");
    } catch {
      a = !0;
    }
    !a ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Cs(
      ps(this.node.current, "focus", () => this.onFocus()),
      ps(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const T4 = (n, a) => (a ? (n === a ? !0 : T4(n, a.parentElement)) : !1),
  vS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function bS(n) {
  return vS.has(n.tagName) || n.tabIndex !== -1;
}
const es = new WeakSet();
function Pp(n) {
  return (a) => {
    a.key === "Enter" && n(a);
  };
}
function vf(n, a) {
  n.dispatchEvent(
    new PointerEvent("pointer" + a, { isPrimary: !0, bubbles: !0 })
  );
}
const xS = (n, a) => {
  const l = n.currentTarget;
  if (!l) return;
  const r = Pp(() => {
    if (es.has(l)) return;
    vf(l, "down");
    const o = Pp(() => {
        vf(l, "up");
      }),
      f = () => vf(l, "cancel");
    l.addEventListener("keyup", o, a), l.addEventListener("blur", f, a);
  });
  l.addEventListener("keydown", r, a),
    l.addEventListener("blur", () => l.removeEventListener("keydown", r), a);
};
function Gp(n) {
  return t2(n) && !e4();
}
function SS(n, a, l = {}) {
  const [r, o, f] = S4(n, l),
    d = (h) => {
      const m = h.currentTarget;
      if (!Gp(h) || es.has(m)) return;
      es.add(m);
      const p = a(h),
        y = (C, M) => {
          window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", b),
            !(!Gp(C) || !es.has(m)) &&
              (es.delete(m), typeof p == "function" && p(C, { success: M }));
        },
        x = (C) => {
          y(C, l.useGlobalTarget || T4(m, C.target));
        },
        b = (C) => {
          y(C, !1);
        };
      window.addEventListener("pointerup", x, o),
        window.addEventListener("pointercancel", b, o);
    };
  return (
    r.forEach((h) => {
      !bS(h) && h.getAttribute("tabindex") === null && (h.tabIndex = 0),
        (l.useGlobalTarget ? window : h).addEventListener("pointerdown", d, o),
        h.addEventListener("focus", (p) => xS(p, o), o);
    }),
    f
  );
}
function Yp(n, a, l) {
  const { props: r } = n;
  n.animationState &&
    r.whileTap &&
    n.animationState.setActive("whileTap", l === "Start");
  const o = "onTap" + (l === "End" ? "" : l),
    f = r[o];
  f && mt.postRender(() => f(a, As(a)));
}
class TS extends pa {
  mount() {
    const { current: a } = this.node;
    a &&
      (this.unmount = SS(
        a,
        (l) => (
          Yp(this.node, l, "Start"),
          (r, { success: o }) => Yp(this.node, r, o ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const i0 = new WeakMap(),
  bf = new WeakMap(),
  CS = (n) => {
    const a = i0.get(n.target);
    a && a(n);
  },
  AS = (n) => {
    n.forEach(CS);
  };
function ES({ root: n, ...a }) {
  const l = n || document;
  bf.has(l) || bf.set(l, {});
  const r = bf.get(l),
    o = JSON.stringify(a);
  return r[o] || (r[o] = new IntersectionObserver(AS, { root: n, ...a })), r[o];
}
function wS(n, a, l) {
  const r = ES(a);
  return (
    i0.set(n, l),
    r.observe(n),
    () => {
      i0.delete(n), r.unobserve(n);
    }
  );
}
const MS = { some: 0, all: 1 };
class DS extends pa {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: a = {} } = this.node.getProps(),
      { root: l, margin: r, amount: o = "some", once: f } = a,
      d = {
        root: l ? l.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : MS[o],
      },
      h = (m) => {
        const { isIntersecting: p } = m;
        if (
          this.isInView === p ||
          ((this.isInView = p), f && !p && this.hasEnteredView)
        )
          return;
        p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", p);
        const { onViewportEnter: y, onViewportLeave: x } = this.node.getProps(),
          b = p ? y : x;
        b && b(m);
      };
    return wS(this.node.current, d, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: a, prevProps: l } = this.node;
    ["amount", "margin", "root"].some(OS(a, l)) && this.startObserver();
  }
  unmount() {}
}
function OS({ viewport: n = {} }, { viewport: a = {} } = {}) {
  return (l) => n[l] !== a[l];
}
const RS = {
    inView: { Feature: DS },
    tap: { Feature: TS },
    focus: { Feature: yS },
    hover: { Feature: gS },
  },
  LS = { layout: { ProjectionNode: b4, MeasureLayout: f4 } },
  l0 = { current: null },
  C4 = { current: !1 };
function zS() {
  if (((C4.current = !0), !!A0))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        a = () => (l0.current = n.matches);
      n.addListener(a), a();
    } else l0.current = !1;
}
const NS = [...Pg, ne, ha],
  VS = (n) => NS.find(kg(n)),
  qp = new WeakMap();
function jS(n, a, l) {
  for (const r in a) {
    const o = a[r],
      f = l[r];
    if (Qt(o)) n.addValue(r, o);
    else if (Qt(f)) n.addValue(r, Je(o, { owner: n }));
    else if (f !== o)
      if (n.hasValue(r)) {
        const d = n.getValue(r);
        d.liveStyle === !0 ? d.jump(o) : d.hasAnimated || d.set(o);
      } else {
        const d = n.getStaticValue(r);
        n.addValue(r, Je(d !== void 0 ? d : o, { owner: n }));
      }
  }
  for (const r in l) a[r] === void 0 && n.removeValue(r);
  return a;
}
const Xp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class _S {
  scrapeMotionValuesFromProps(a, l, r) {
    return {};
  }
  constructor(
    {
      parent: a,
      props: l,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: f,
      visualState: d,
    },
    h = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = $0),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const C = tn.now();
        this.renderScheduledAt < C &&
          ((this.renderScheduledAt = C), mt.render(this.render, !1, !0));
      });
    const { latestValues: m, renderState: p, onUpdate: y } = d;
    (this.onUpdate = y),
      (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = l.initial ? { ...m } : {}),
      (this.renderState = p),
      (this.parent = a),
      (this.props = l),
      (this.presenceContext = r),
      (this.depth = a ? a.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = h),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = Lo(l)),
      (this.isVariantNode = I3(l)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(a && a.current));
    const { willChange: x, ...b } = this.scrapeMotionValuesFromProps(
      l,
      {},
      this
    );
    for (const C in b) {
      const M = b[C];
      m[C] !== void 0 && Qt(M) && M.set(m[C], !1);
    }
  }
  mount(a) {
    (this.current = a),
      qp.set(a, this),
      this.projection && !this.projection.instance && this.projection.mount(a),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((l, r) => this.bindToMotionValue(r, l)),
      C4.current || zS(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : l0.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    qp.delete(this.current),
      this.projection && this.projection.unmount(),
      nn(this.notifyUpdate),
      nn(this.render),
      this.valueSubscriptions.forEach((a) => a()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const a in this.events) this.events[a].clear();
    for (const a in this.features) {
      const l = this.features[a];
      l && (l.unmount(), (l.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(a, l) {
    this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)();
    const r = Qa.has(a),
      o = l.on("change", (h) => {
        (this.latestValues[a] = h),
          this.props.onUpdate && mt.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      f = l.on("renderRequest", this.scheduleRender);
    let d;
    window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, a, l)),
      this.valueSubscriptions.set(a, () => {
        o(), f(), d && d(), l.owner && l.stop();
      });
  }
  sortNodePosition(a) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== a.type
      ? 0
      : this.sortInstanceNodePosition(this.current, a.current);
  }
  updateFeatures() {
    let a = "animation";
    for (a in qi) {
      const l = qi[a];
      if (!l) continue;
      const { isEnabled: r, Feature: o } = l;
      if (
        (!this.features[a] &&
          o &&
          r(this.props) &&
          (this.features[a] = new o(this)),
        this.features[a])
      ) {
        const f = this.features[a];
        f.isMounted ? f.update() : (f.mount(), (f.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : jt();
  }
  getStaticValue(a) {
    return this.latestValues[a];
  }
  setStaticValue(a, l) {
    this.latestValues[a] = l;
  }
  update(a, l) {
    (a.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = a),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = l);
    for (let r = 0; r < Xp.length; r++) {
      const o = Xp[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const f = "on" + o,
        d = a[f];
      d && (this.propEventSubscriptions[o] = this.on(o, d));
    }
    (this.prevMotionValues = jS(
      this,
      this.scrapeMotionValuesFromProps(a, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(a) {
    return this.props.variants ? this.props.variants[a] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(a) {
    const l = this.getClosestVariantNode();
    if (l)
      return (
        l.variantChildren && l.variantChildren.add(a),
        () => l.variantChildren.delete(a)
      );
  }
  addValue(a, l) {
    const r = this.values.get(a);
    l !== r &&
      (r && this.removeValue(a),
      this.bindToMotionValue(a, l),
      this.values.set(a, l),
      (this.latestValues[a] = l.get()));
  }
  removeValue(a) {
    this.values.delete(a);
    const l = this.valueSubscriptions.get(a);
    l && (l(), this.valueSubscriptions.delete(a)),
      delete this.latestValues[a],
      this.removeValueFromRenderState(a, this.renderState);
  }
  hasValue(a) {
    return this.values.has(a);
  }
  getValue(a, l) {
    if (this.props.values && this.props.values[a]) return this.props.values[a];
    let r = this.values.get(a);
    return (
      r === void 0 &&
        l !== void 0 &&
        ((r = Je(l === null ? void 0 : l, { owner: this })),
        this.addValue(a, r)),
      r
    );
  }
  readValue(a, l) {
    var r;
    let o =
      this.latestValues[a] !== void 0 || !this.current
        ? this.latestValues[a]
        : (r = this.getBaseTargetFromProps(this.props, a)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, a, this.options);
    return (
      o != null &&
        (typeof o == "string" && (Bg(o) || Og(o))
          ? (o = parseFloat(o))
          : !VS(o) && ha.test(l) && (o = jg(a, l)),
        this.setBaseTarget(a, Qt(o) ? o.get() : o)),
      Qt(o) ? o.get() : o
    );
  }
  setBaseTarget(a, l) {
    this.baseTarget[a] = l;
  }
  getBaseTarget(a) {
    var l;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const d = R0(
        this.props,
        r,
        (l = this.presenceContext) === null || l === void 0 ? void 0 : l.custom
      );
      d && (o = d[a]);
    }
    if (r && o !== void 0) return o;
    const f = this.getBaseTargetFromProps(this.props, a);
    return f !== void 0 && !Qt(f)
      ? f
      : this.initialValues[a] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[a];
  }
  on(a, l) {
    return this.events[a] || (this.events[a] = new P0()), this.events[a].add(l);
  }
  notify(a, ...l) {
    this.events[a] && this.events[a].notify(...l);
  }
}
class A4 extends _S {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Gg);
  }
  sortInstanceNodePosition(a, l) {
    return a.compareDocumentPosition(l) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(a, l) {
    return a.style ? a.style[l] : void 0;
  }
  removeValueFromRenderState(a, { vars: l, style: r }) {
    delete l[a], delete r[a];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: a } = this.props;
    Qt(a) &&
      (this.childSubscription = a.on("change", (l) => {
        this.current && (this.current.textContent = `${l}`);
      }));
  }
}
function HS(n) {
  return window.getComputedStyle(n);
}
class BS extends A4 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = og);
  }
  readValueFromInstance(a, l) {
    if (Qa.has(l)) {
      const r = W0(l);
      return (r && r.default) || 0;
    } else {
      const r = HS(a),
        o = (lg(l) ? r.getPropertyValue(l) : r[l]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(a, { transformPagePoint: l }) {
    return u4(a, l);
  }
  build(a, l, r) {
    N0(a, l, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(a, l, r) {
    return H0(a, l, r);
  }
}
class US extends A4 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = jt);
  }
  getBaseTargetFromProps(a, l) {
    return a[l];
  }
  readValueFromInstance(a, l) {
    if (Qa.has(l)) {
      const r = W0(l);
      return (r && r.default) || 0;
    }
    return (l = ug.has(l) ? l : M0(l)), a.getAttribute(l);
  }
  scrapeMotionValuesFromProps(a, l, r) {
    return dg(a, l, r);
  }
  build(a, l, r) {
    V0(a, l, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(a, l, r, o) {
    cg(a, l, r, o);
  }
  mount(a) {
    (this.isSVGTag = _0(a.tagName)), super.mount(a);
  }
}
const kS = (n, a) =>
    O0(n) ? new US(a) : new BS(a, { allowProjection: n !== A.Fragment }),
  PS = g9({ ...ix, ...RS, ...mS, ...LS }, kS),
  wt = L7(PS);
function GS(n, a, l) {
  A.useInsertionEffect(() => n.on(a, l), [n, a, l]);
}
function E4(n, a) {
  let l;
  const r = () => {
    const { currentTime: o } = a,
      d = (o === null ? 0 : o.value) / 100;
    l !== d && n(d), (l = d);
  };
  return mt.update(r, !0), () => nn(r);
}
const lo = new WeakMap();
let ua;
function YS(n, a) {
  if (a) {
    const { inlineSize: l, blockSize: r } = a[0];
    return { width: l, height: r };
  } else
    return n instanceof SVGElement && "getBBox" in n
      ? n.getBBox()
      : { width: n.offsetWidth, height: n.offsetHeight };
}
function qS({ target: n, contentRect: a, borderBoxSize: l }) {
  var r;
  (r = lo.get(n)) === null ||
    r === void 0 ||
    r.forEach((o) => {
      o({
        target: n,
        contentSize: a,
        get size() {
          return YS(n, l);
        },
      });
    });
}
function XS(n) {
  n.forEach(qS);
}
function ZS() {
  typeof ResizeObserver > "u" || (ua = new ResizeObserver(XS));
}
function FS(n, a) {
  ua || ZS();
  const l = x4(n);
  return (
    l.forEach((r) => {
      let o = lo.get(r);
      o || ((o = new Set()), lo.set(r, o)),
        o.add(a),
        ua == null || ua.observe(r);
    }),
    () => {
      l.forEach((r) => {
        const o = lo.get(r);
        o == null || o.delete(a),
          (o != null && o.size) || ua == null || ua.unobserve(r);
      });
    }
  );
}
const so = new Set();
let us;
function KS() {
  (us = () => {
    const n = { width: window.innerWidth, height: window.innerHeight },
      a = { target: window, size: n, contentSize: n };
    so.forEach((l) => l(a));
  }),
    window.addEventListener("resize", us);
}
function QS(n) {
  return (
    so.add(n),
    us || KS(),
    () => {
      so.delete(n), !so.size && us && (us = void 0);
    }
  );
}
function WS(n, a) {
  return typeof n == "function" ? QS(n) : FS(n, a);
}
const $S = 50,
  Zp = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  JS = () => ({ time: 0, x: Zp(), y: Zp() }),
  IS = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Fp(n, a, l, r) {
  const o = l[a],
    { length: f, position: d } = IS[a],
    h = o.current,
    m = l.time;
  (o.current = n[`scroll${d}`]),
    (o.scrollLength = n[`scroll${f}`] - n[`client${f}`]),
    (o.offset.length = 0),
    (o.offset[0] = 0),
    (o.offset[1] = o.scrollLength),
    (o.progress = Ka(0, o.scrollLength, o.current));
  const p = r - m;
  o.velocity = p > $S ? 0 : G0(o.current - h, p);
}
function tT(n, a, l) {
  Fp(n, "x", a, l), Fp(n, "y", a, l), (a.time = l);
}
function eT(n, a) {
  const l = { x: 0, y: 0 };
  let r = n;
  for (; r && r !== a; )
    if (r instanceof HTMLElement)
      (l.x += r.offsetLeft), (l.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const o = r.getBoundingClientRect();
      r = r.parentElement;
      const f = r.getBoundingClientRect();
      (l.x += o.left - f.left), (l.y += o.top - f.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: o, y: f } = r.getBBox();
      (l.x += o), (l.y += f);
      let d = null,
        h = r.parentNode;
      for (; !d; ) h.tagName === "svg" && (d = h), (h = r.parentNode);
      r = d;
    } else break;
  return l;
}
const s0 = { start: 0, center: 0.5, end: 1 };
function Kp(n, a, l = 0) {
  let r = 0;
  if ((n in s0 && (n = s0[n]), typeof n == "string")) {
    const o = parseFloat(n);
    n.endsWith("px")
      ? (r = o)
      : n.endsWith("%")
      ? (n = o / 100)
      : n.endsWith("vw")
      ? (r = (o / 100) * document.documentElement.clientWidth)
      : n.endsWith("vh")
      ? (r = (o / 100) * document.documentElement.clientHeight)
      : (n = o);
  }
  return typeof n == "number" && (r = a * n), l + r;
}
const nT = [0, 0];
function aT(n, a, l, r) {
  let o = Array.isArray(n) ? n : nT,
    f = 0,
    d = 0;
  return (
    typeof n == "number"
      ? (o = [n, n])
      : typeof n == "string" &&
        ((n = n.trim()),
        n.includes(" ") ? (o = n.split(" ")) : (o = [n, s0[n] ? n : "0"])),
    (f = Kp(o[0], l, r)),
    (d = Kp(o[1], a)),
    f - d
  );
}
const iT = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  lT = { x: 0, y: 0 };
function sT(n) {
  return "getBBox" in n && n.tagName !== "svg"
    ? n.getBBox()
    : { width: n.clientWidth, height: n.clientHeight };
}
function rT(n, a, l) {
  const { offset: r = iT.All } = l,
    { target: o = n, axis: f = "y" } = l,
    d = f === "y" ? "height" : "width",
    h = o !== n ? eT(o, n) : lT,
    m = o === n ? { width: n.scrollWidth, height: n.scrollHeight } : sT(o),
    p = { width: n.clientWidth, height: n.clientHeight };
  a[f].offset.length = 0;
  let y = !a[f].interpolate;
  const x = r.length;
  for (let b = 0; b < x; b++) {
    const C = aT(r[b], p[d], m[d], h[f]);
    !y && C !== a[f].interpolatorOffsets[b] && (y = !0), (a[f].offset[b] = C);
  }
  y &&
    ((a[f].interpolate = Wg(a[f].offset, $g(r), { clamp: !1 })),
    (a[f].interpolatorOffsets = [...a[f].offset])),
    (a[f].progress = an(0, 1, a[f].interpolate(a[f].current)));
}
function oT(n, a = n, l) {
  if (((l.x.targetOffset = 0), (l.y.targetOffset = 0), a !== n)) {
    let r = a;
    for (; r && r !== n; )
      (l.x.targetOffset += r.offsetLeft),
        (l.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (l.x.targetLength = a === n ? a.scrollWidth : a.clientWidth),
    (l.y.targetLength = a === n ? a.scrollHeight : a.clientHeight),
    (l.x.containerLength = n.clientWidth),
    (l.y.containerLength = n.clientHeight);
}
function uT(n, a, l, r = {}) {
  return {
    measure: () => oT(n, r.target, l),
    update: (o) => {
      tT(n, l, o), (r.offset || r.target) && rT(n, l, r);
    },
    notify: () => a(l),
  };
}
const Ql = new WeakMap(),
  Qp = new WeakMap(),
  xf = new WeakMap(),
  Wp = (n) => (n === document.documentElement ? window : n);
function e2(n, { container: a = document.documentElement, ...l } = {}) {
  let r = xf.get(a);
  r || ((r = new Set()), xf.set(a, r));
  const o = JS(),
    f = uT(a, n, o, l);
  if ((r.add(f), !Ql.has(a))) {
    const h = () => {
        for (const b of r) b.measure();
      },
      m = () => {
        for (const b of r) b.update(Yt.timestamp);
      },
      p = () => {
        for (const b of r) b.notify();
      },
      y = () => {
        mt.read(h, !1, !0), mt.read(m, !1, !0), mt.update(p, !1, !0);
      };
    Ql.set(a, y);
    const x = Wp(a);
    window.addEventListener("resize", y, { passive: !0 }),
      a !== document.documentElement && Qp.set(a, WS(a, y)),
      x.addEventListener("scroll", y, { passive: !0 });
  }
  const d = Ql.get(a);
  return (
    mt.read(d, !1, !0),
    () => {
      var h;
      nn(d);
      const m = xf.get(a);
      if (!m || (m.delete(f), m.size)) return;
      const p = Ql.get(a);
      Ql.delete(a),
        p &&
          (Wp(a).removeEventListener("scroll", p),
          (h = Qp.get(a)) === null || h === void 0 || h(),
          window.removeEventListener("resize", p));
    }
  );
}
function cT({ source: n, container: a, axis: l = "y" }) {
  n && (a = n);
  const r = { value: 0 },
    o = e2(
      (f) => {
        r.value = f[l].progress * 100;
      },
      { container: a, axis: l }
    );
  return { currentTime: r, cancel: o };
}
const Sf = new Map();
function w4({
  source: n,
  container: a = document.documentElement,
  axis: l = "y",
} = {}) {
  n && (a = n), Sf.has(a) || Sf.set(a, {});
  const r = Sf.get(a);
  return (
    r[l] ||
      (r[l] = yg()
        ? new ScrollTimeline({ source: a, axis: l })
        : cT({ source: a, axis: l })),
    r[l]
  );
}
function fT(n) {
  return n.length === 2;
}
function M4(n) {
  return n && (n.target || n.offset);
}
function dT(n, a) {
  return fT(n) || M4(a)
    ? e2((l) => {
        n(l[a.axis].progress, l);
      }, a)
    : E4(n, w4(a));
}
function hT(n, a) {
  if ((n.flatten(), M4(a)))
    return (
      n.pause(),
      e2((l) => {
        n.time = n.duration * l[a.axis].progress;
      }, a)
    );
  {
    const l = w4(a);
    return n.attachTimeline
      ? n.attachTimeline(
          l,
          (r) => (
            r.pause(),
            E4((o) => {
              r.time = r.duration * o;
            }, l)
          )
        )
      : se;
  }
}
function mT(n, { axis: a = "y", ...l } = {}) {
  const r = { axis: a, ...l };
  return typeof n == "function" ? dT(n, r) : hT(n, r);
}
function $p(n, a) {
  C7(!!(!a || a.current));
}
const pT = () => ({
  scrollX: Je(0),
  scrollY: Je(0),
  scrollXProgress: Je(0),
  scrollYProgress: Je(0),
});
function gT({ container: n, target: a, layoutEffect: l = !0, ...r } = {}) {
  const o = bs(pT);
  return (
    (l ? Do : A.useEffect)(
      () => (
        $p("target", a),
        $p("container", n),
        mT(
          (d, { x: h, y: m }) => {
            o.scrollX.set(h.current),
              o.scrollXProgress.set(h.progress),
              o.scrollY.set(m.current),
              o.scrollYProgress.set(m.progress);
          },
          {
            ...r,
            container: (n == null ? void 0 : n.current) || void 0,
            target: (a == null ? void 0 : a.current) || void 0,
          }
        )
      ),
      [n, a, JSON.stringify(r.offset)]
    ),
    o
  );
}
function r0(n) {
  const a = bs(() => Je(n)),
    { isStatic: l } = A.useContext(xs);
  if (l) {
    const [, r] = A.useState(n);
    A.useEffect(() => a.on("change", r), []);
  }
  return a;
}
function Jp(n) {
  return typeof n == "number" ? n : parseFloat(n);
}
function Ip(n, a = {}) {
  const { isStatic: l } = A.useContext(xs),
    r = A.useRef(null),
    o = r0(Qt(n) ? Jp(n.get()) : n),
    f = A.useRef(o.get()),
    d = A.useRef(() => {}),
    h = () => {
      const p = r.current;
      p && p.time === 0 && p.sample(Yt.delta),
        m(),
        (r.current = Lb({
          keyframes: [o.get(), f.current],
          velocity: o.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...a,
          onUpdate: d.current,
        }));
    },
    m = () => {
      r.current && r.current.stop();
    };
  return (
    A.useInsertionEffect(
      () =>
        o.attach(
          (p, y) =>
            l
              ? y(p)
              : ((f.current = p), (d.current = y), mt.update(h), o.get()),
          m
        ),
      [JSON.stringify(a)]
    ),
    Do(() => {
      if (Qt(n)) return n.on("change", (p) => o.set(Jp(p)));
    }, [o]),
    o
  );
}
var Wl = {},
  t3;
function yT() {
  if (t3) return Wl;
  (t3 = 1),
    Object.defineProperty(Wl, "__esModule", { value: !0 }),
    (Wl.parse = d),
    (Wl.serialize = p);
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    a = /^[\u0021-\u003A\u003C-\u007E]*$/,
    l =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    r = /^[\u0020-\u003A\u003D-\u007E]*$/,
    o = Object.prototype.toString,
    f = (() => {
      const b = function () {};
      return (b.prototype = Object.create(null)), b;
    })();
  function d(b, C) {
    const M = new f(),
      z = b.length;
    if (z < 2) return M;
    const L = (C == null ? void 0 : C.decode) || y;
    let D = 0;
    do {
      const V = b.indexOf("=", D);
      if (V === -1) break;
      const B = b.indexOf(";", D),
        Y = B === -1 ? z : B;
      if (V > Y) {
        D = b.lastIndexOf(";", V - 1) + 1;
        continue;
      }
      const k = h(b, D, V),
        $ = m(b, V, k),
        at = b.slice(k, $);
      if (M[at] === void 0) {
        let K = h(b, V + 1, Y),
          G = m(b, Y, K);
        const I = L(b.slice(K, G));
        M[at] = I;
      }
      D = Y + 1;
    } while (D < z);
    return M;
  }
  function h(b, C, M) {
    do {
      const z = b.charCodeAt(C);
      if (z !== 32 && z !== 9) return C;
    } while (++C < M);
    return M;
  }
  function m(b, C, M) {
    for (; C > M; ) {
      const z = b.charCodeAt(--C);
      if (z !== 32 && z !== 9) return C + 1;
    }
    return M;
  }
  function p(b, C, M) {
    const z = (M == null ? void 0 : M.encode) || encodeURIComponent;
    if (!n.test(b)) throw new TypeError(`argument name is invalid: ${b}`);
    const L = z(C);
    if (!a.test(L)) throw new TypeError(`argument val is invalid: ${C}`);
    let D = b + "=" + L;
    if (!M) return D;
    if (M.maxAge !== void 0) {
      if (!Number.isInteger(M.maxAge))
        throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);
      D += "; Max-Age=" + M.maxAge;
    }
    if (M.domain) {
      if (!l.test(M.domain))
        throw new TypeError(`option domain is invalid: ${M.domain}`);
      D += "; Domain=" + M.domain;
    }
    if (M.path) {
      if (!r.test(M.path))
        throw new TypeError(`option path is invalid: ${M.path}`);
      D += "; Path=" + M.path;
    }
    if (M.expires) {
      if (!x(M.expires) || !Number.isFinite(M.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${M.expires}`);
      D += "; Expires=" + M.expires.toUTCString();
    }
    if (
      (M.httpOnly && (D += "; HttpOnly"),
      M.secure && (D += "; Secure"),
      M.partitioned && (D += "; Partitioned"),
      M.priority)
    )
      switch (
        typeof M.priority == "string" ? M.priority.toLowerCase() : void 0
      ) {
        case "low":
          D += "; Priority=Low";
          break;
        case "medium":
          D += "; Priority=Medium";
          break;
        case "high":
          D += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${M.priority}`);
      }
    if (M.sameSite)
      switch (
        typeof M.sameSite == "string" ? M.sameSite.toLowerCase() : M.sameSite
      ) {
        case !0:
        case "strict":
          D += "; SameSite=Strict";
          break;
        case "lax":
          D += "; SameSite=Lax";
          break;
        case "none":
          D += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${M.sameSite}`);
      }
    return D;
  }
  function y(b) {
    if (b.indexOf("%") === -1) return b;
    try {
      return decodeURIComponent(b);
    } catch {
      return b;
    }
  }
  function x(b) {
    return o.call(b) === "[object Date]";
  }
  return Wl;
}
yT();
/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var e3 = "popstate";
function vT(n = {}) {
  function a(o, f) {
    let {
      pathname: d = "/",
      search: h = "",
      hash: m = "",
    } = Wa(o.location.hash.substring(1));
    return (
      !d.startsWith("/") && !d.startsWith(".") && (d = "/" + d),
      o0(
        "",
        { pathname: d, search: h, hash: m },
        (f.state && f.state.usr) || null,
        (f.state && f.state.key) || "default"
      )
    );
  }
  function l(o, f) {
    let d = o.document.querySelector("base"),
      h = "";
    if (d && d.getAttribute("href")) {
      let m = o.location.href,
        p = m.indexOf("#");
      h = p === -1 ? m : m.slice(0, p);
    }
    return h + "#" + (typeof f == "string" ? f : gs(f));
  }
  function r(o, f) {
    Ue(
      o.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        f
      )})`
    );
  }
  return xT(a, l, r, n);
}
function Ot(n, a) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(a);
}
function Ue(n, a) {
  if (!n) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function bT() {
  return Math.random().toString(36).substring(2, 10);
}
function n3(n, a) {
  return { usr: n.state, key: n.key, idx: a };
}
function o0(n, a, l = null, r) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof a == "string" ? Wa(a) : a),
    state: l,
    key: (a && a.key) || r || bT(),
  };
}
function gs({ pathname: n = "/", search: a = "", hash: l = "" }) {
  return (
    a && a !== "?" && (n += a.charAt(0) === "?" ? a : "?" + a),
    l && l !== "#" && (n += l.charAt(0) === "#" ? l : "#" + l),
    n
  );
}
function Wa(n) {
  let a = {};
  if (n) {
    let l = n.indexOf("#");
    l >= 0 && ((a.hash = n.substring(l)), (n = n.substring(0, l)));
    let r = n.indexOf("?");
    r >= 0 && ((a.search = n.substring(r)), (n = n.substring(0, r))),
      n && (a.pathname = n);
  }
  return a;
}
function xT(n, a, l, r = {}) {
  let { window: o = document.defaultView, v5Compat: f = !1 } = r,
    d = o.history,
    h = "POP",
    m = null,
    p = y();
  p == null && ((p = 0), d.replaceState({ ...d.state, idx: p }, ""));
  function y() {
    return (d.state || { idx: null }).idx;
  }
  function x() {
    h = "POP";
    let L = y(),
      D = L == null ? null : L - p;
    (p = L), m && m({ action: h, location: z.location, delta: D });
  }
  function b(L, D) {
    h = "PUSH";
    let V = o0(z.location, L, D);
    l(V, L), (p = y() + 1);
    let B = n3(V, p),
      Y = z.createHref(V);
    try {
      d.pushState(B, "", Y);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      o.location.assign(Y);
    }
    f && m && m({ action: h, location: z.location, delta: 1 });
  }
  function C(L, D) {
    h = "REPLACE";
    let V = o0(z.location, L, D);
    l(V, L), (p = y());
    let B = n3(V, p),
      Y = z.createHref(V);
    d.replaceState(B, "", Y),
      f && m && m({ action: h, location: z.location, delta: 0 });
  }
  function M(L) {
    let D = o.location.origin !== "null" ? o.location.origin : o.location.href,
      V = typeof L == "string" ? L : gs(L);
    return (
      (V = V.replace(/ $/, "%20")),
      Ot(
        D,
        `No window.location.(origin|href) available to create URL for href: ${V}`
      ),
      new URL(V, D)
    );
  }
  let z = {
    get action() {
      return h;
    },
    get location() {
      return n(o, d);
    },
    listen(L) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(e3, x),
        (m = L),
        () => {
          o.removeEventListener(e3, x), (m = null);
        }
      );
    },
    createHref(L) {
      return a(o, L);
    },
    createURL: M,
    encodeLocation(L) {
      let D = M(L);
      return { pathname: D.pathname, search: D.search, hash: D.hash };
    },
    push: b,
    replace: C,
    go(L) {
      return d.go(L);
    },
  };
  return z;
}
function D4(n, a, l = "/") {
  return ST(n, a, l, !1);
}
function ST(n, a, l, r) {
  let o = typeof a == "string" ? Wa(a) : a,
    f = ma(o.pathname || "/", l);
  if (f == null) return null;
  let d = O4(n);
  TT(d);
  let h = null;
  for (let m = 0; h == null && m < d.length; ++m) {
    let p = NT(f);
    h = LT(d[m], p, r);
  }
  return h;
}
function O4(n, a = [], l = [], r = "") {
  let o = (f, d, h) => {
    let m = {
      relativePath: h === void 0 ? f.path || "" : h,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f,
    };
    m.relativePath.startsWith("/") &&
      (Ot(
        m.relativePath.startsWith(r),
        `Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (m.relativePath = m.relativePath.slice(r.length)));
    let p = Dn([r, m.relativePath]),
      y = l.concat(m);
    f.children &&
      f.children.length > 0 &&
      (Ot(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
      ),
      O4(f.children, a, y, p)),
      !(f.path == null && !f.index) &&
        a.push({ path: p, score: OT(p, f.index), routesMeta: y });
  };
  return (
    n.forEach((f, d) => {
      var h;
      if (f.path === "" || !((h = f.path) != null && h.includes("?"))) o(f, d);
      else for (let m of R4(f.path)) o(f, d, m);
    }),
    a
  );
}
function R4(n) {
  let a = n.split("/");
  if (a.length === 0) return [];
  let [l, ...r] = a,
    o = l.endsWith("?"),
    f = l.replace(/\?$/, "");
  if (r.length === 0) return o ? [f, ""] : [f];
  let d = R4(r.join("/")),
    h = [];
  return (
    h.push(...d.map((m) => (m === "" ? f : [f, m].join("/")))),
    o && h.push(...d),
    h.map((m) => (n.startsWith("/") && m === "" ? "/" : m))
  );
}
function TT(n) {
  n.sort((a, l) =>
    a.score !== l.score
      ? l.score - a.score
      : RT(
          a.routesMeta.map((r) => r.childrenIndex),
          l.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var CT = /^:[\w-]+$/,
  AT = 3,
  ET = 2,
  wT = 1,
  MT = 10,
  DT = -2,
  a3 = (n) => n === "*";
function OT(n, a) {
  let l = n.split("/"),
    r = l.length;
  return (
    l.some(a3) && (r += DT),
    a && (r += ET),
    l
      .filter((o) => !a3(o))
      .reduce((o, f) => o + (CT.test(f) ? AT : f === "" ? wT : MT), r)
  );
}
function RT(n, a) {
  return n.length === a.length && n.slice(0, -1).every((r, o) => r === a[o])
    ? n[n.length - 1] - a[a.length - 1]
    : 0;
}
function LT(n, a, l = !1) {
  let { routesMeta: r } = n,
    o = {},
    f = "/",
    d = [];
  for (let h = 0; h < r.length; ++h) {
    let m = r[h],
      p = h === r.length - 1,
      y = f === "/" ? a : a.slice(f.length) || "/",
      x = xo(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: p },
        y
      ),
      b = m.route;
    if (
      (!x &&
        p &&
        l &&
        !r[r.length - 1].route.index &&
        (x = xo(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          y
        )),
      !x)
    )
      return null;
    Object.assign(o, x.params),
      d.push({
        params: o,
        pathname: Dn([f, x.pathname]),
        pathnameBase: HT(Dn([f, x.pathnameBase])),
        route: b,
      }),
      x.pathnameBase !== "/" && (f = Dn([f, x.pathnameBase]));
  }
  return d;
}
function xo(n, a) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [l, r] = zT(n.path, n.caseSensitive, n.end),
    o = a.match(l);
  if (!o) return null;
  let f = o[0],
    d = f.replace(/(.)\/+$/, "$1"),
    h = o.slice(1);
  return {
    params: r.reduce((p, { paramName: y, isOptional: x }, b) => {
      if (y === "*") {
        let M = h[b] || "";
        d = f.slice(0, f.length - M.length).replace(/(.)\/+$/, "$1");
      }
      const C = h[b];
      return (
        x && !C ? (p[y] = void 0) : (p[y] = (C || "").replace(/%2F/g, "/")), p
      );
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: n,
  };
}
function zT(n, a = !1, l = !0) {
  Ue(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let r = [],
    o =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, h, m) => (
            r.push({ paramName: h, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : l
      ? (o += "\\/*$")
      : n !== "" && n !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, a ? void 0 : "i"), r]
  );
}
function NT(n) {
  try {
    return n
      .split("/")
      .map((a) => decodeURIComponent(a).replace(/\//g, "%2F"))
      .join("/");
  } catch (a) {
    return (
      Ue(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
      ),
      n
    );
  }
}
function ma(n, a) {
  if (a === "/") return n;
  if (!n.toLowerCase().startsWith(a.toLowerCase())) return null;
  let l = a.endsWith("/") ? a.length - 1 : a.length,
    r = n.charAt(l);
  return r && r !== "/" ? null : n.slice(l) || "/";
}
function VT(n, a = "/") {
  let {
    pathname: l,
    search: r = "",
    hash: o = "",
  } = typeof n == "string" ? Wa(n) : n;
  return {
    pathname: l ? (l.startsWith("/") ? l : jT(l, a)) : a,
    search: BT(r),
    hash: UT(o),
  };
}
function jT(n, a) {
  let l = a.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((o) => {
      o === ".." ? l.length > 1 && l.pop() : o !== "." && l.push(o);
    }),
    l.length > 1 ? l.join("/") : "/"
  );
}
function Tf(n, a, l, r) {
  return `Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function _T(n) {
  return n.filter(
    (a, l) => l === 0 || (a.route.path && a.route.path.length > 0)
  );
}
function L4(n) {
  let a = _T(n);
  return a.map((l, r) => (r === a.length - 1 ? l.pathname : l.pathnameBase));
}
function z4(n, a, l, r = !1) {
  let o;
  typeof n == "string"
    ? (o = Wa(n))
    : ((o = { ...n }),
      Ot(
        !o.pathname || !o.pathname.includes("?"),
        Tf("?", "pathname", "search", o)
      ),
      Ot(
        !o.pathname || !o.pathname.includes("#"),
        Tf("#", "pathname", "hash", o)
      ),
      Ot(!o.search || !o.search.includes("#"), Tf("#", "search", "hash", o)));
  let f = n === "" || o.pathname === "",
    d = f ? "/" : o.pathname,
    h;
  if (d == null) h = l;
  else {
    let x = a.length - 1;
    if (!r && d.startsWith("..")) {
      let b = d.split("/");
      for (; b[0] === ".."; ) b.shift(), (x -= 1);
      o.pathname = b.join("/");
    }
    h = x >= 0 ? a[x] : "/";
  }
  let m = VT(o, h),
    p = d && d !== "/" && d.endsWith("/"),
    y = (f || d === ".") && l.endsWith("/");
  return !m.pathname.endsWith("/") && (p || y) && (m.pathname += "/"), m;
}
var Dn = (n) => n.join("/").replace(/\/\/+/g, "/"),
  HT = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  BT = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  UT = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function kT(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
var N4 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(N4);
var PT = ["GET", ...N4];
new Set(PT);
var Qi = A.createContext(null);
Qi.displayName = "DataRouter";
var jo = A.createContext(null);
jo.displayName = "DataRouterState";
var V4 = A.createContext({ isTransitioning: !1 });
V4.displayName = "ViewTransition";
var GT = A.createContext(new Map());
GT.displayName = "Fetchers";
var YT = A.createContext(null);
YT.displayName = "Await";
var ln = A.createContext(null);
ln.displayName = "Navigation";
var Es = A.createContext(null);
Es.displayName = "Location";
var zn = A.createContext({ outlet: null, matches: [], isDataRoute: !1 });
zn.displayName = "Route";
var n2 = A.createContext(null);
n2.displayName = "RouteError";
function qT(n, { relative: a } = {}) {
  Ot(
    ws(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: l, navigator: r } = A.useContext(ln),
    { hash: o, pathname: f, search: d } = Ms(n, { relative: a }),
    h = f;
  return (
    l !== "/" && (h = f === "/" ? l : Dn([l, f])),
    r.createHref({ pathname: h, search: d, hash: o })
  );
}
function ws() {
  return A.useContext(Es) != null;
}
function Nn() {
  return (
    Ot(
      ws(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    A.useContext(Es).location
  );
}
var j4 =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function _4(n) {
  A.useContext(ln).static || A.useLayoutEffect(n);
}
function a2() {
  let { isDataRoute: n } = A.useContext(zn);
  return n ? aC() : XT();
}
function XT() {
  Ot(
    ws(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = A.useContext(Qi),
    { basename: a, navigator: l } = A.useContext(ln),
    { matches: r } = A.useContext(zn),
    { pathname: o } = Nn(),
    f = JSON.stringify(L4(r)),
    d = A.useRef(!1);
  return (
    _4(() => {
      d.current = !0;
    }),
    A.useCallback(
      (m, p = {}) => {
        if ((Ue(d.current, j4), !d.current)) return;
        if (typeof m == "number") {
          l.go(m);
          return;
        }
        let y = z4(m, JSON.parse(f), o, p.relative === "path");
        n == null &&
          a !== "/" &&
          (y.pathname = y.pathname === "/" ? a : Dn([a, y.pathname])),
          (p.replace ? l.replace : l.push)(y, p.state, p);
      },
      [a, l, f, o, n]
    )
  );
}
A.createContext(null);
function Ms(n, { relative: a } = {}) {
  let { matches: l } = A.useContext(zn),
    { pathname: r } = Nn(),
    o = JSON.stringify(L4(l));
  return A.useMemo(() => z4(n, JSON.parse(o), r, a === "path"), [n, o, r, a]);
}
function ZT(n, a) {
  return H4(n, a);
}
function H4(n, a, l, r) {
  var D;
  Ot(
    ws(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o } = A.useContext(ln),
    { matches: f } = A.useContext(zn),
    d = f[f.length - 1],
    h = d ? d.params : {},
    m = d ? d.pathname : "/",
    p = d ? d.pathnameBase : "/",
    y = d && d.route;
  {
    let V = (y && y.path) || "";
    B4(
      m,
      !y || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${
        V === "/" ? "*" : `${V}/*`
      }">.`
    );
  }
  let x = Nn(),
    b;
  if (a) {
    let V = typeof a == "string" ? Wa(a) : a;
    Ot(
      p === "/" || ((D = V.pathname) == null ? void 0 : D.startsWith(p)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ),
      (b = V);
  } else b = x;
  let C = b.pathname || "/",
    M = C;
  if (p !== "/") {
    let V = p.replace(/^\//, "").split("/");
    M = "/" + C.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let z = D4(n, { pathname: M });
  Ue(
    y || z != null,
    `No routes matched location "${b.pathname}${b.search}${b.hash}" `
  ),
    Ue(
      z == null ||
        z[z.length - 1].route.element !== void 0 ||
        z[z.length - 1].route.Component !== void 0 ||
        z[z.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let L = $T(
    z &&
      z.map((V) =>
        Object.assign({}, V, {
          params: Object.assign({}, h, V.params),
          pathname: Dn([
            p,
            o.encodeLocation
              ? o.encodeLocation(V.pathname).pathname
              : V.pathname,
          ]),
          pathnameBase:
            V.pathnameBase === "/"
              ? p
              : Dn([
                  p,
                  o.encodeLocation
                    ? o.encodeLocation(V.pathnameBase).pathname
                    : V.pathnameBase,
                ]),
        })
      ),
    f,
    l,
    r
  );
  return a && L
    ? A.createElement(
        Es.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...b,
            },
            navigationType: "POP",
          },
        },
        L
      )
    : L;
}
function FT() {
  let n = nC(),
    a = kT(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    l = n instanceof Error ? n.stack : null,
    r = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: r },
    f = { padding: "2px 4px", backgroundColor: r },
    d = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (d = A.createElement(
      A.Fragment,
      null,
      A.createElement("p", null, "💿 Hey developer 👋"),
      A.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        A.createElement("code", { style: f }, "ErrorBoundary"),
        " or",
        " ",
        A.createElement("code", { style: f }, "errorElement"),
        " prop on your route."
      )
    )),
    A.createElement(
      A.Fragment,
      null,
      A.createElement("h2", null, "Unexpected Application Error!"),
      A.createElement("h3", { style: { fontStyle: "italic" } }, a),
      l ? A.createElement("pre", { style: o }, l) : null,
      d
    )
  );
}
var KT = A.createElement(FT, null),
  QT = class extends A.Component {
    constructor(n) {
      super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, a) {
      return a.location !== n.location ||
        (a.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : a.error,
            location: a.location,
            revalidation: n.revalidation || a.revalidation,
          };
    }
    componentDidCatch(n, a) {
      console.error(
        "React Router caught the following error during render",
        n,
        a
      );
    }
    render() {
      return this.state.error !== void 0
        ? A.createElement(
            zn.Provider,
            { value: this.props.routeContext },
            A.createElement(n2.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function WT({ routeContext: n, match: a, children: l }) {
  let r = A.useContext(Qi);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = a.route.id),
    A.createElement(zn.Provider, { value: n }, l)
  );
}
function $T(n, a = [], l = null, r = null) {
  if (n == null) {
    if (!l) return null;
    if (l.errors) n = l.matches;
    else if (a.length === 0 && !l.initialized && l.matches.length > 0)
      n = l.matches;
    else return null;
  }
  let o = n,
    f = l == null ? void 0 : l.errors;
  if (f != null) {
    let m = o.findIndex(
      (p) => p.route.id && (f == null ? void 0 : f[p.route.id]) !== void 0
    );
    Ot(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(",")}`
    ),
      (o = o.slice(0, Math.min(o.length, m + 1)));
  }
  let d = !1,
    h = -1;
  if (l)
    for (let m = 0; m < o.length; m++) {
      let p = o[m];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (h = m),
        p.route.id)
      ) {
        let { loaderData: y, errors: x } = l,
          b =
            p.route.loader &&
            !y.hasOwnProperty(p.route.id) &&
            (!x || x[p.route.id] === void 0);
        if (p.route.lazy || b) {
          (d = !0), h >= 0 ? (o = o.slice(0, h + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((m, p, y) => {
    let x,
      b = !1,
      C = null,
      M = null;
    l &&
      ((x = f && p.route.id ? f[p.route.id] : void 0),
      (C = p.route.errorElement || KT),
      d &&
        (h < 0 && y === 0
          ? (B4(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (b = !0),
            (M = null))
          : h === y &&
            ((b = !0), (M = p.route.hydrateFallbackElement || null))));
    let z = a.concat(o.slice(0, y + 1)),
      L = () => {
        let D;
        return (
          x
            ? (D = C)
            : b
            ? (D = M)
            : p.route.Component
            ? (D = A.createElement(p.route.Component, null))
            : p.route.element
            ? (D = p.route.element)
            : (D = m),
          A.createElement(WT, {
            match: p,
            routeContext: { outlet: m, matches: z, isDataRoute: l != null },
            children: D,
          })
        );
      };
    return l && (p.route.ErrorBoundary || p.route.errorElement || y === 0)
      ? A.createElement(QT, {
          location: l.location,
          revalidation: l.revalidation,
          component: C,
          error: x,
          children: L(),
          routeContext: { outlet: null, matches: z, isDataRoute: !0 },
        })
      : L();
  }, null);
}
function i2(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function JT(n) {
  let a = A.useContext(Qi);
  return Ot(a, i2(n)), a;
}
function IT(n) {
  let a = A.useContext(jo);
  return Ot(a, i2(n)), a;
}
function tC(n) {
  let a = A.useContext(zn);
  return Ot(a, i2(n)), a;
}
function l2(n) {
  let a = tC(n),
    l = a.matches[a.matches.length - 1];
  return (
    Ot(
      l.route.id,
      `${n} can only be used on routes that contain a unique "id"`
    ),
    l.route.id
  );
}
function eC() {
  return l2("useRouteId");
}
function nC() {
  var r;
  let n = A.useContext(n2),
    a = IT("useRouteError"),
    l = l2("useRouteError");
  return n !== void 0 ? n : (r = a.errors) == null ? void 0 : r[l];
}
function aC() {
  let { router: n } = JT("useNavigate"),
    a = l2("useNavigate"),
    l = A.useRef(!1);
  return (
    _4(() => {
      l.current = !0;
    }),
    A.useCallback(
      async (o, f = {}) => {
        Ue(l.current, j4),
          l.current &&
            (typeof o == "number"
              ? n.navigate(o)
              : await n.navigate(o, { fromRouteId: a, ...f }));
      },
      [n, a]
    )
  );
}
var i3 = {};
function B4(n, a, l) {
  !a && !i3[n] && ((i3[n] = !0), Ue(!1, l));
}
A.memo(iC);
function iC({ routes: n, future: a, state: l }) {
  return H4(n, void 0, l, a);
}
function ns(n) {
  Ot(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function lC({
  basename: n = "/",
  children: a = null,
  location: l,
  navigationType: r = "POP",
  navigator: o,
  static: f = !1,
}) {
  Ot(
    !ws(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let d = n.replace(/^\/*/, "/"),
    h = A.useMemo(
      () => ({ basename: d, navigator: o, static: f, future: {} }),
      [d, o, f]
    );
  typeof l == "string" && (l = Wa(l));
  let {
      pathname: m = "/",
      search: p = "",
      hash: y = "",
      state: x = null,
      key: b = "default",
    } = l,
    C = A.useMemo(() => {
      let M = ma(m, d);
      return M == null
        ? null
        : {
            location: { pathname: M, search: p, hash: y, state: x, key: b },
            navigationType: r,
          };
    }, [d, m, p, y, x, b, r]);
  return (
    Ue(
      C != null,
      `<Router basename="${d}"> is not able to match the URL "${m}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    C == null
      ? null
      : A.createElement(
          ln.Provider,
          { value: h },
          A.createElement(Es.Provider, { children: a, value: C })
        )
  );
}
function sC({ children: n, location: a }) {
  return ZT(u0(n), a);
}
function u0(n, a = []) {
  let l = [];
  return (
    A.Children.forEach(n, (r, o) => {
      if (!A.isValidElement(r)) return;
      let f = [...a, o];
      if (r.type === A.Fragment) {
        l.push.apply(l, u0(r.props.children, f));
        return;
      }
      Ot(
        r.type === ns,
        `[${
          typeof r.type == "string" ? r.type : r.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Ot(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        );
      let d = {
        id: r.props.id || f.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (d.children = u0(r.props.children, f)), l.push(d);
    }),
    l
  );
}
var ro = "get",
  oo = "application/x-www-form-urlencoded";
function _o(n) {
  return n != null && typeof n.tagName == "string";
}
function rC(n) {
  return _o(n) && n.tagName.toLowerCase() === "button";
}
function oC(n) {
  return _o(n) && n.tagName.toLowerCase() === "form";
}
function uC(n) {
  return _o(n) && n.tagName.toLowerCase() === "input";
}
function cC(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function fC(n, a) {
  return n.button === 0 && (!a || a === "_self") && !cC(n);
}
var Qr = null;
function dC() {
  if (Qr === null)
    try {
      new FormData(document.createElement("form"), 0), (Qr = !1);
    } catch {
      Qr = !0;
    }
  return Qr;
}
var hC = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Cf(n) {
  return n != null && !hC.has(n)
    ? (Ue(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oo}"`
      ),
      null)
    : n;
}
function mC(n, a) {
  let l, r, o, f, d;
  if (oC(n)) {
    let h = n.getAttribute("action");
    (r = h ? ma(h, a) : null),
      (l = n.getAttribute("method") || ro),
      (o = Cf(n.getAttribute("enctype")) || oo),
      (f = new FormData(n));
  } else if (rC(n) || (uC(n) && (n.type === "submit" || n.type === "image"))) {
    let h = n.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = n.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((r = m ? ma(m, a) : null),
      (l = n.getAttribute("formmethod") || h.getAttribute("method") || ro),
      (o =
        Cf(n.getAttribute("formenctype")) ||
        Cf(h.getAttribute("enctype")) ||
        oo),
      (f = new FormData(h, n)),
      !dC())
    ) {
      let { name: p, type: y, value: x } = n;
      if (y === "image") {
        let b = p ? `${p}.` : "";
        f.append(`${b}x`, "0"), f.append(`${b}y`, "0");
      } else p && f.append(p, x);
    }
  } else {
    if (_o(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (l = ro), (r = null), (o = oo), (d = n);
  }
  return (
    f && o === "text/plain" && ((d = f), (f = void 0)),
    { action: r, method: l.toLowerCase(), encType: o, formData: f, body: d }
  );
}
function s2(n, a) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(a);
}
async function pC(n, a) {
  if (n.id in a) return a[n.id];
  try {
    let l = await import(n.module);
    return (a[n.id] = l), l;
  } catch (l) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`
      ),
      console.error(l),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function gC(n) {
  return n == null
    ? !1
    : n.href == null
    ? n.rel === "preload" &&
      typeof n.imageSrcSet == "string" &&
      typeof n.imageSizes == "string"
    : typeof n.rel == "string" && typeof n.href == "string";
}
async function yC(n, a, l) {
  let r = await Promise.all(
    n.map(async (o) => {
      let f = a.routes[o.route.id];
      if (f) {
        let d = await pC(f, l);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return SC(
    r
      .flat(1)
      .filter(gC)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function l3(n, a, l, r, o, f) {
  let d = (m, p) => (l[p] ? m.route.id !== l[p].route.id : !0),
    h = (m, p) => {
      var y;
      return (
        l[p].pathname !== m.pathname ||
        (((y = l[p].route.path) == null ? void 0 : y.endsWith("*")) &&
          l[p].params["*"] !== m.params["*"])
      );
    };
  return f === "assets"
    ? a.filter((m, p) => d(m, p) || h(m, p))
    : f === "data"
    ? a.filter((m, p) => {
        var x;
        let y = r.routes[m.route.id];
        if (!y || !y.hasLoader) return !1;
        if (d(m, p) || h(m, p)) return !0;
        if (m.route.shouldRevalidate) {
          let b = m.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: ((x = l[0]) == null ? void 0 : x.params) || {},
            nextUrl: new URL(n, window.origin),
            nextParams: m.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof b == "boolean") return b;
        }
        return !0;
      })
    : [];
}
function vC(n, a) {
  return bC(
    n
      .map((l) => {
        let r = a.routes[l.route.id];
        if (!r) return [];
        let o = [r.module];
        return r.imports && (o = o.concat(r.imports)), o;
      })
      .flat(1)
  );
}
function bC(n) {
  return [...new Set(n)];
}
function xC(n) {
  let a = {},
    l = Object.keys(n).sort();
  for (let r of l) a[r] = n[r];
  return a;
}
function SC(n, a) {
  let l = new Set();
  return (
    new Set(a),
    n.reduce((r, o) => {
      let f = JSON.stringify(xC(o));
      return l.has(f) || (l.add(f), r.push({ key: f, link: o })), r;
    }, [])
  );
}
function TC(n) {
  let a =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : n;
  return (
    a.pathname === "/"
      ? (a.pathname = "_root.data")
      : (a.pathname = `${a.pathname.replace(/\/$/, "")}.data`),
    a
  );
}
function CC() {
  let n = A.useContext(Qi);
  return (
    s2(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    n
  );
}
function AC() {
  let n = A.useContext(jo);
  return (
    s2(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    n
  );
}
var r2 = A.createContext(void 0);
r2.displayName = "FrameworkContext";
function U4() {
  let n = A.useContext(r2);
  return (
    s2(n, "You must render this element inside a <HydratedRouter> element"), n
  );
}
function EC(n, a) {
  let l = A.useContext(r2),
    [r, o] = A.useState(!1),
    [f, d] = A.useState(!1),
    {
      onFocus: h,
      onBlur: m,
      onMouseEnter: p,
      onMouseLeave: y,
      onTouchStart: x,
    } = a,
    b = A.useRef(null);
  A.useEffect(() => {
    if ((n === "render" && d(!0), n === "viewport")) {
      let z = (D) => {
          D.forEach((V) => {
            d(V.isIntersecting);
          });
        },
        L = new IntersectionObserver(z, { threshold: 0.5 });
      return (
        b.current && L.observe(b.current),
        () => {
          L.disconnect();
        }
      );
    }
  }, [n]),
    A.useEffect(() => {
      if (r) {
        let z = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(z);
        };
      }
    }, [r]);
  let C = () => {
      o(!0);
    },
    M = () => {
      o(!1), d(!1);
    };
  return l
    ? n !== "intent"
      ? [f, b, {}]
      : [
          f,
          b,
          {
            onFocus: $l(h, C),
            onBlur: $l(m, M),
            onMouseEnter: $l(p, C),
            onMouseLeave: $l(y, M),
            onTouchStart: $l(x, C),
          },
        ]
    : [!1, b, {}];
}
function $l(n, a) {
  return (l) => {
    n && n(l), l.defaultPrevented || a(l);
  };
}
function wC({ page: n, ...a }) {
  let { router: l } = CC(),
    r = A.useMemo(() => D4(l.routes, n, l.basename), [l.routes, n, l.basename]);
  return r ? A.createElement(DC, { page: n, matches: r, ...a }) : null;
}
function MC(n) {
  let { manifest: a, routeModules: l } = U4(),
    [r, o] = A.useState([]);
  return (
    A.useEffect(() => {
      let f = !1;
      return (
        yC(n, a, l).then((d) => {
          f || o(d);
        }),
        () => {
          f = !0;
        }
      );
    }, [n, a, l]),
    r
  );
}
function DC({ page: n, matches: a, ...l }) {
  let r = Nn(),
    { manifest: o, routeModules: f } = U4(),
    { loaderData: d, matches: h } = AC(),
    m = A.useMemo(() => l3(n, a, h, o, r, "data"), [n, a, h, o, r]),
    p = A.useMemo(() => l3(n, a, h, o, r, "assets"), [n, a, h, o, r]),
    y = A.useMemo(() => {
      if (n === r.pathname + r.search + r.hash) return [];
      let C = new Set(),
        M = !1;
      if (
        (a.forEach((L) => {
          var V;
          let D = o.routes[L.route.id];
          !D ||
            !D.hasLoader ||
            ((!m.some((B) => B.route.id === L.route.id) &&
              L.route.id in d &&
              (V = f[L.route.id]) != null &&
              V.shouldRevalidate) ||
            D.hasClientLoader
              ? (M = !0)
              : C.add(L.route.id));
        }),
        C.size === 0)
      )
        return [];
      let z = TC(n);
      return (
        M &&
          C.size > 0 &&
          z.searchParams.set(
            "_routes",
            a
              .filter((L) => C.has(L.route.id))
              .map((L) => L.route.id)
              .join(",")
          ),
        [z.pathname + z.search]
      );
    }, [d, r, o, m, a, n, f]),
    x = A.useMemo(() => vC(p, o), [p, o]),
    b = MC(p);
  return A.createElement(
    A.Fragment,
    null,
    y.map((C) =>
      A.createElement("link", {
        key: C,
        rel: "prefetch",
        as: "fetch",
        href: C,
        ...l,
      })
    ),
    x.map((C) =>
      A.createElement("link", { key: C, rel: "modulepreload", href: C, ...l })
    ),
    b.map(({ key: C, link: M }) => A.createElement("link", { key: C, ...M }))
  );
}
function OC(...n) {
  return (a) => {
    n.forEach((l) => {
      typeof l == "function" ? l(a) : l != null && (l.current = a);
    });
  };
}
var k4 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  k4 && (window.__reactRouterVersion = "7.1.3");
} catch {}
function RC({ basename: n, children: a, window: l }) {
  let r = A.useRef();
  r.current == null && (r.current = vT({ window: l, v5Compat: !0 }));
  let o = r.current,
    [f, d] = A.useState({ action: o.action, location: o.location }),
    h = A.useCallback(
      (m) => {
        A.startTransition(() => d(m));
      },
      [d]
    );
  return (
    A.useLayoutEffect(() => o.listen(h), [o, h]),
    A.createElement(lC, {
      basename: n,
      children: a,
      location: f.location,
      navigationType: f.action,
      navigator: o,
    })
  );
}
var P4 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  G4 = A.forwardRef(function (
    {
      onClick: a,
      discover: l = "render",
      prefetch: r = "none",
      relative: o,
      reloadDocument: f,
      replace: d,
      state: h,
      target: m,
      to: p,
      preventScrollReset: y,
      viewTransition: x,
      ...b
    },
    C
  ) {
    let { basename: M } = A.useContext(ln),
      z = typeof p == "string" && P4.test(p),
      L,
      D = !1;
    if (typeof p == "string" && z && ((L = p), k4))
      try {
        let G = new URL(window.location.href),
          I = p.startsWith("//") ? new URL(G.protocol + p) : new URL(p),
          kt = ma(I.pathname, M);
        I.origin === G.origin && kt != null
          ? (p = kt + I.search + I.hash)
          : (D = !0);
      } catch {
        Ue(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let V = qT(p, { relative: o }),
      [B, Y, k] = EC(r, b),
      $ = VC(p, {
        replace: d,
        state: h,
        target: m,
        preventScrollReset: y,
        relative: o,
        viewTransition: x,
      });
    function at(G) {
      a && a(G), G.defaultPrevented || $(G);
    }
    let K = A.createElement("a", {
      ...b,
      ...k,
      href: L || V,
      onClick: D || f ? a : at,
      ref: OC(C, Y),
      target: m,
      "data-discover": !z && l === "render" ? "true" : void 0,
    });
    return B && !z
      ? A.createElement(A.Fragment, null, K, A.createElement(wC, { page: V }))
      : K;
  });
G4.displayName = "Link";
var LC = A.forwardRef(function (
  {
    "aria-current": a = "page",
    caseSensitive: l = !1,
    className: r = "",
    end: o = !1,
    style: f,
    to: d,
    viewTransition: h,
    children: m,
    ...p
  },
  y
) {
  let x = Ms(d, { relative: p.relative }),
    b = Nn(),
    C = A.useContext(jo),
    { navigator: M, basename: z } = A.useContext(ln),
    L = C != null && UC(x) && h === !0,
    D = M.encodeLocation ? M.encodeLocation(x).pathname : x.pathname,
    V = b.pathname,
    B =
      C && C.navigation && C.navigation.location
        ? C.navigation.location.pathname
        : null;
  l ||
    ((V = V.toLowerCase()),
    (B = B ? B.toLowerCase() : null),
    (D = D.toLowerCase())),
    B && z && (B = ma(B, z) || B);
  const Y = D !== "/" && D.endsWith("/") ? D.length - 1 : D.length;
  let k = V === D || (!o && V.startsWith(D) && V.charAt(Y) === "/"),
    $ =
      B != null &&
      (B === D || (!o && B.startsWith(D) && B.charAt(D.length) === "/")),
    at = { isActive: k, isPending: $, isTransitioning: L },
    K = k ? a : void 0,
    G;
  typeof r == "function"
    ? (G = r(at))
    : (G = [
        r,
        k ? "active" : null,
        $ ? "pending" : null,
        L ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let I = typeof f == "function" ? f(at) : f;
  return A.createElement(
    G4,
    {
      ...p,
      "aria-current": K,
      className: G,
      ref: y,
      style: I,
      to: d,
      viewTransition: h,
    },
    typeof m == "function" ? m(at) : m
  );
});
LC.displayName = "NavLink";
var zC = A.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: a,
      navigate: l,
      reloadDocument: r,
      replace: o,
      state: f,
      method: d = ro,
      action: h,
      onSubmit: m,
      relative: p,
      preventScrollReset: y,
      viewTransition: x,
      ...b
    },
    C
  ) => {
    let M = HC(),
      z = BC(h, { relative: p }),
      L = d.toLowerCase() === "get" ? "get" : "post",
      D = typeof h == "string" && P4.test(h),
      V = (B) => {
        if ((m && m(B), B.defaultPrevented)) return;
        B.preventDefault();
        let Y = B.nativeEvent.submitter,
          k = (Y == null ? void 0 : Y.getAttribute("formmethod")) || d;
        M(Y || B.currentTarget, {
          fetcherKey: a,
          method: k,
          navigate: l,
          replace: o,
          state: f,
          relative: p,
          preventScrollReset: y,
          viewTransition: x,
        });
      };
    return A.createElement("form", {
      ref: C,
      method: L,
      action: z,
      onSubmit: r ? m : V,
      ...b,
      "data-discover": !D && n === "render" ? "true" : void 0,
    });
  }
);
zC.displayName = "Form";
function NC(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Y4(n) {
  let a = A.useContext(Qi);
  return Ot(a, NC(n)), a;
}
function VC(
  n,
  {
    target: a,
    replace: l,
    state: r,
    preventScrollReset: o,
    relative: f,
    viewTransition: d,
  } = {}
) {
  let h = a2(),
    m = Nn(),
    p = Ms(n, { relative: f });
  return A.useCallback(
    (y) => {
      if (fC(y, a)) {
        y.preventDefault();
        let x = l !== void 0 ? l : gs(m) === gs(p);
        h(n, {
          replace: x,
          state: r,
          preventScrollReset: o,
          relative: f,
          viewTransition: d,
        });
      }
    },
    [m, h, p, l, r, a, n, o, f, d]
  );
}
var jC = 0,
  _C = () => `__${String(++jC)}__`;
function HC() {
  let { router: n } = Y4("useSubmit"),
    { basename: a } = A.useContext(ln),
    l = eC();
  return A.useCallback(
    async (r, o = {}) => {
      let { action: f, method: d, encType: h, formData: m, body: p } = mC(r, a);
      if (o.navigate === !1) {
        let y = o.fetcherKey || _C();
        await n.fetch(y, l, o.action || f, {
          preventScrollReset: o.preventScrollReset,
          formData: m,
          body: p,
          formMethod: o.method || d,
          formEncType: o.encType || h,
          flushSync: o.flushSync,
        });
      } else
        await n.navigate(o.action || f, {
          preventScrollReset: o.preventScrollReset,
          formData: m,
          body: p,
          formMethod: o.method || d,
          formEncType: o.encType || h,
          replace: o.replace,
          state: o.state,
          fromRouteId: l,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [n, a, l]
  );
}
function BC(n, { relative: a } = {}) {
  let { basename: l } = A.useContext(ln),
    r = A.useContext(zn);
  Ot(r, "useFormAction must be used inside a RouteContext");
  let [o] = r.matches.slice(-1),
    f = { ...Ms(n || ".", { relative: a }) },
    d = Nn();
  if (n == null) {
    f.search = d.search;
    let h = new URLSearchParams(f.search),
      m = h.getAll("index");
    if (m.some((y) => y === "")) {
      h.delete("index"),
        m.filter((x) => x).forEach((x) => h.append("index", x));
      let y = h.toString();
      f.search = y ? `?${y}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      o.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    l !== "/" && (f.pathname = f.pathname === "/" ? l : Dn([l, f.pathname])),
    gs(f)
  );
}
function UC(n, a = {}) {
  let l = A.useContext(V4);
  Ot(
    l != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = Y4("useViewTransitionState"),
    o = Ms(n, { relative: a.relative });
  if (!l.isTransitioning) return !1;
  let f = ma(l.currentLocation.pathname, r) || l.currentLocation.pathname,
    d = ma(l.nextLocation.pathname, r) || l.nextLocation.pathname;
  return xo(o.pathname, d) != null || xo(o.pathname, f) != null;
}
new TextEncoder();
function kC({ icon: n, url: a, children: l, ref: r }) {
  const o = a2(),
    { pathname: f } = Nn();
  return T.jsx(wt.div, {
    className: "flex",
    ref: r,
    whileHover: { y: "0.5rem", transition: { duration: 0.3 } },
    variants: {
      hidden: { opacity: 0, y: -70 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    children: T.jsx(en, {
      onPress: () => o(a),
      variant: "light",
      className: "h-[3rem] font-bold",
      startContent: T.jsx(En, {
        shadow: "none",
        className: _t(
          "h-[2rem] w-[2rem] justify-center items-center",
          f === a ? "primary-bg" : "bg-transparent"
        ),
        children: T.jsx(Dt, {
          className: _t("text-[15pt]", f === a && "text-primary-foreground"),
          icon: n,
        }),
      }),
      children: T.jsx("div", {
        className: _t(
          "flex",
          f === a && "primary-bg bg-clip-text text-transparent"
        ),
        children: l,
      }),
    }),
  });
}
const Wr = wt.create(kC);
var st = ((n) => (
  (n.LIGHT = "LIGHT"), (n.DARK = "DARK"), (n.SYSTEM = "SYSTEM"), n
))(st || {});
const PC = { themeOption: st.SYSTEM, appliedTheme: st.LIGHT, setTheme() {} },
  ga = A.createContext(PC);
function GC() {
  const { themeOption: n, appliedTheme: a, setTheme: l } = A.useContext(ga);
  return T.jsx(wt.div, {
    initial: { opacity: 0, rotate: 90 },
    animate: { opacity: 1, rotate: 0, transition: { duration: 0.5, delay: 2 } },
    children: T.jsxs(Sy, {
      className: _t(
        a === st.LIGHT
          ? "card-gradient-bg-light-100"
          : "card-gradient-bg-dark-100"
      ),
      children: [
        T.jsx(Ty, {
          children: T.jsx(en, {
            isIconOnly: !0,
            variant: "light",
            size: "lg",
            className: "border-foreground",
            children: T.jsx(Dt, { icon: Hy }),
          }),
        }),
        T.jsxs(Cy, {
          selectionMode: "single",
          closeOnSelect: !1,
          selectedKeys: [n],
          onAction: (r) => {
            switch (r) {
              case st.SYSTEM:
                l(st.SYSTEM);
                break;
              case st.LIGHT:
                l(st.LIGHT);
                break;
              case st.DARK:
                l(st.DARK);
                break;
            }
          },
          children: [
            T.jsx(
              Kc,
              {
                startContent: T.jsx(En, {
                  className:
                    "h-[1.8rem] w-[1.8rem] justify-center items-center primary-bg text-primary-foreground",
                  children: T.jsx(Dt, { icon: Ky }),
                }),
                textValue: "system",
                children: "System",
              },
              st.SYSTEM
            ),
            T.jsx(
              Kc,
              {
                startContent: T.jsx(En, {
                  className:
                    "h-[1.8rem] w-[1.8rem] justify-center items-center primary-bg text-primary-foreground",
                  children: T.jsx(Dt, { icon: Fy }),
                }),
                textValue: "light",
                children: "Light",
              },
              st.LIGHT
            ),
            T.jsx(
              Kc,
              {
                startContent: T.jsx(En, {
                  className:
                    "h-[1.8rem] w-[1.8rem] justify-center items-center primary-bg text-primary-foreground",
                  children: T.jsx(Dt, { icon: $y }),
                }),
                textValue: "dark",
                children: "Dark",
              },
              st.DARK
            ),
          ],
        }),
      ],
    }),
  });
}
function q4(n) {
  return T.jsxs("svg", {
    viewBox: "0 0 1028 506",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...n,
    children: [
      T.jsx("path", {
        d: "M0 506L172.939 0H301.19L146.857 433.714H440.571V506H0Z",
        className: "fill-foreground",
      }),
      T.jsx("path", {
        d: "M514 506V0H881.143V72.2857H954.571V144.571H1028V361.429H954.571V433.714H881.143V506H514ZM660.857 433.714H807.714V361.429H881.143V144.571H807.714V72.2857H660.857V433.714Z",
        className: "fill-foreground",
      }),
    ],
  });
}
const YC = {
    navigationData: { sidebarOpen: !1, scrollRef: A.createRef() },
    setNavigationData() {},
  },
  Ds = A.createContext(YC);
function qC() {
  const { setNavigationData: n } = A.useContext(Ds);
  return T.jsxs("div", {
    className: "flex justify-between items-center min-h-[5rem] px-[1rem] z-10",
    children: [
      T.jsxs("div", {
        className: "flex items-center space-x-2",
        children: [
          T.jsx(wt.div, {
            initial: { opacity: 0, rotate: 90, scale: 0 },
            animate: { opacity: 1, rotate: 0, scale: 1 },
            transition: {
              duration: 0.5,
              delay: 2.3,
              type: "spring",
              stiffness: 70,
            },
            children: T.jsx(en, {
              onPress: () => n((a) => ({ ...a, sidebarOpen: !0 })),
              className: "lg:hidden group",
              isIconOnly: !0,
              variant: "light",
              size: "lg",
              children: T.jsx(Dt, { icon: jy, className: "text-[20pt]" }),
            }),
          }),
          T.jsx(wt.div, {
            initial: { rotate: 90, scale: 0, opacity: 0 },
            animate: { rotate: 0, scale: 1, opacity: 1 },
            transition: {
              duration: 5,
              delay: 2,
              type: "spring",
              stiffness: 70,
            },
            children: T.jsx(q4, { className: "h-[2rem]" }),
          }),
        ],
      }),
      T.jsxs(wt.div, {
        className: "space-x-2 hidden lg:flex",
        initial: "hidden",
        animate: "visible",
        transition: { delayChildren: 2, staggerChildren: 0.2 },
        children: [
          T.jsx(Wr, { icon: f0, url: "/", children: "About me" }),
          T.jsx(Wr, { icon: c3, url: "/skills", children: "Skills" }),
          T.jsx(Wr, { icon: d3, url: "/experience", children: "Experience" }),
          T.jsx(Wr, { icon: u3, url: "/projects", children: "Projects" }),
        ],
      }),
      T.jsx(GC, {}),
    ],
  });
}
const XC = "/portfolio-v2/assets/developer-Dpx8SsuI.svg";
function s3({ classNames: n = {}, icon: a, children: l }) {
  return T.jsxs("div", {
    className: _t("flex items-center space-x-3 text-[20pt]", n.wrapper),
    children: [
      T.jsx("div", {
        className:
          "flex h-[2.5rem] w-[2.5rem] justify-center items-center primary-bg rounded-lg",
        children: T.jsx(Dt, {
          icon: a,
          className: _t("text-primary-foreground", n.icon),
        }),
      }),
      T.jsx("div", { className: _t("font-black", n.text), children: l }),
    ],
  });
}
function ZC() {
  const { appliedTheme: n } = A.useContext(ga),
    a = A.useRef(null),
    l = () => {
      a.current && a.current.scrollIntoView({ block: "nearest" });
    };
  return T.jsxs("div", {
    className: "flex flex-col home-page-lines",
    children: [
      T.jsx("div", {
        className:
          "flex flex-col min-h-[calc(100vh-5rem)] pt-[2rem] lg:pt-0 lg:justify-center items-center",
        children: T.jsxs(wt.div, {
          initial: "hidden",
          animate: "visible",
          transition: { staggerChildren: 0.2 },
          className:
            "flex px-[2rem] flex-col lg:flex-row max-w-screen-md space-x-5",
          children: [
            T.jsx("img", {
              className: "h-[15rem] lg:h-[19rem] self-start",
              src: XC,
              alt: "developer",
            }),
            T.jsxs("div", {
              className: "flex flex-col",
              children: [
                T.jsx(wt.div, {
                  variants: {
                    hidden: { y: 50, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  },
                  transition: { duration: 1, type: "spring", stiffness: 70 },
                  className:
                    "flex text-[20pt] font-bold primary-bg bg-clip-text text-transparent",
                  children: "Hi, my name is",
                }),
                T.jsx(wt.div, {
                  variants: {
                    hidden: { y: 50, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  },
                  transition: { duration: 1, type: "spring", stiffness: 70 },
                  className: "flex text-[35pt] font-black",
                  children: "Debbal Lotfi",
                }),
                T.jsx(wt.div, {
                  variants: {
                    hidden: { y: 50, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  },
                  transition: { duration: 1, type: "spring", stiffness: 70 },
                  className: "flex text-[15pt] opacity-70",
                  children:
                    "A Full-Stack Software Engineer crafting scalable and efficient digital solutions",
                }),
                T.jsxs("div", {
                  className: "flex space-x-2 mt-[1rem]",
                  children: [
                    T.jsx(wt.div, {
                      className: "self-start",
                      variants: {
                        hidden: { y: 50, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      },
                      whileHover: { scale: 1.1 },
                      transition: {
                        duration: 0.7,
                        type: "spring",
                        stiffness: 70,
                      },
                      children: T.jsx(en, {
                        as: So,
                        href: "/portfolio-v2/resume.pdf",
                        target: "_blank",
                        className: "primary-bg text-primary-foreground",
                        startContent: T.jsx(Dt, { icon: zy }),
                        children: "Resume",
                      }),
                    }),
                    T.jsx(wt.div, {
                      className: "self-start",
                      variants: {
                        hidden: { y: 50, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      },
                      whileHover: { scale: 1.1 },
                      transition: {
                        duration: 0.7,
                        type: "spring",
                        stiffness: 70,
                      },
                      children: T.jsx(en, {
                        className: "font-bold",
                        variant: "light",
                        startContent: T.jsx(Dt, { icon: Vy }),
                        onPress: l,
                        children: "About me & Contact",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      T.jsxs("div", {
        ref: a,
        className:
          "flex flex-col space-y-[3rem] justify-center items-center px-[1rem] py-[10rem]",
        children: [
          T.jsx(wt.div, {
            initial: "hidden",
            whileInView: "visible",
            variants: {
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            },
            transition: { duration: 1, type: "spring", stiffness: 70 },
            children: T.jsx(En, {
              shadow: "none",
              className: _t(
                "max-w-screen-md",
                n === st.LIGHT
                  ? "card-gradient-bg-light-100 card-outline-light"
                  : "card-gradient-bg-dark-100 card-outline-dark"
              ),
              fullWidth: !0,
              children: T.jsxs(X1, {
                className: "p-[1.5rem] space-y-3 overflow-hidden",
                children: [
                  T.jsx(s3, { icon: f0, children: "About me" }),
                  T.jsx("div", {
                    children:
                      "I am a passionate full-stack web developer with a comprehensive background in both front-end and back-end development, as well as mobile development. Throughout my career, I have worked on a diverse range of projects, building robust and scalable web and mobile applications. My expertise spans designing intuitive user interfaces, developing efficient server-side logic.",
                  }),
                  T.jsx("div", {
                    children:
                      "I am committed to continuous learning and staying updated with the latest industry trends to deliver high-quality and innovative solutions. Whether working on a solo project or collaborating with a team, I strive to create user-centric applications that meet business objectives and provide exceptional user experiences.",
                  }),
                  T.jsxs("div", {
                    children: [
                      "I hold a Bachelor's degree in Information Systems and Software Engineering from",
                      " ",
                      T.jsx("a", {
                        className:
                          "inline underline primary-bg bg-clip-text text-transparent",
                        href: "https://www.usthb.dz/",
                        target: "_blank",
                        children: "USTHB University",
                      }),
                      ", where I developed a strong foundation in software engineering principles.",
                    ],
                  }),
                ],
              }),
            }),
          }),
          T.jsx(wt.div, {
            initial: "hidden",
            whileInView: "visible",
            variants: {
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            },
            transition: { duration: 1, type: "spring", stiffness: 70 },
            children: T.jsx(En, {
              shadow: "none",
              className: _t(
                "max-w-screen-md",
                n === st.LIGHT
                  ? "card-gradient-bg-light-100 card-outline-light"
                  : "card-gradient-bg-dark-100 card-outline-dark"
              ),
              fullWidth: !0,
              children: T.jsxs(X1, {
                className: "p-[1.5rem] space-y-3 overflow-hidden",
                children: [
                  T.jsx(s3, { icon: Ly, children: "Contact me" }),
                  T.jsx("div", {
                    children:
                      "I am a passionate full-stack web developer with a comprehensive background in both front-end and back-end development, as well as mobile development. Throughout my career, I have worked on a diverse range of projects, building robust and scalable web and mobile applications. My expertise spans designing intuitive user interfaces, developing efficient server-side logic.",
                  }),
                  T.jsx("div", {
                    children:
                      "I am committed to continuous learning and staying updated with the latest industry trends to deliver high-quality and innovative solutions. Whether working on a solo project or collaborating with a team, I strive to create user-centric applications that meet business objectives and provide exceptional user experiences.",
                  }),
                  T.jsxs("div", {
                    children: [
                      "I hold a Bachelor's degree in Information Systems and Software Engineering from",
                      " ",
                      T.jsx("a", {
                        className:
                          "inline underline primary-bg bg-clip-text text-transparent",
                        href: "https://www.usthb.dz/",
                        target: "_blank",
                        children: "USTHB University",
                      }),
                      ", where I developed a strong foundation in software engineering principles.",
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function FC({ icon: n, url: a, children: l, ref: r }) {
  const o = a2(),
    { pathname: f } = Nn();
  return T.jsx(wt.div, {
    className: "flex",
    ref: r,
    variants: {
      hidden: { opacity: 0, y: 70 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, type: "spring", stiffness: 70 },
      },
    },
    children: T.jsx(en, {
      fullWidth: !0,
      onPress: () => o(a),
      variant: "light",
      className: "h-[3rem] font-bold",
      startContent: T.jsx(En, {
        shadow: "none",
        className: _t(
          "h-[2.5rem] w-[2.5rem] justify-center items-center",
          a === f ? "primary-bg" : "bg-transparent"
        ),
        children: T.jsx(Dt, {
          className: _t("text-[18pt]", a === f && "text-primary-foreground"),
          icon: n,
        }),
      }),
      children: T.jsx("div", {
        className: _t(
          "flex flex-1 text-[13pt]",
          a === f && "primary-bg bg-clip-text text-transparent"
        ),
        children: l,
      }),
    }),
  });
}
const $r = wt.create(FC);
function KC() {
  const { appliedTheme: n } = A.useContext(ga),
    { navigationData: a, setNavigationData: l } = A.useContext(Ds);
  return T.jsxs(T.Fragment, {
    children: [
      T.jsx("div", {
        onClick: () => l((r) => ({ ...r, sidebarOpen: !1 })),
        className: _t(
          "flex h-screen w-screen fixed top-0 left-0 z-20 bg-black opacity-50 duration-300 cursor-pointer",
          !a.sidebarOpen && "opacity-0 pointer-events-none"
        ),
      }),
      T.jsxs("div", {
        className: _t(
          "flex flex-col p-[1rem] duration-300 border-r border-divider z-30 h-screen w-[20rem] fixed top-0 left-0 rounded-tr-2xl rounded-br-2xl",
          n === st.LIGHT
            ? "card-gradient-bg-light-100"
            : "card-gradient-bg-dark-100",
          !a.sidebarOpen && "ml-[-20rem]"
        ),
        children: [
          T.jsx("div", {
            className: "flex justify-end",
            children: T.jsx(en, {
              isIconOnly: !0,
              variant: "light",
              size: "lg",
              onPress: () => l((r) => ({ ...r, sidebarOpen: !1 })),
              children: T.jsx(Dt, { icon: Wy, className: "text-[20pt]" }),
            }),
          }),
          a.sidebarOpen
            ? T.jsxs(wt.div, {
                className: "flex flex-col space-y-3 mt-[1rem]",
                initial: "hidden",
                animate: "visible",
                transition: { staggerChildren: 0.2 },
                children: [
                  T.jsx($r, { icon: f0, url: "/", children: "About me" }),
                  T.jsx($r, { icon: c3, url: "/skills", children: "Skills" }),
                  T.jsx($r, {
                    icon: d3,
                    url: "/experience",
                    children: "Experience",
                  }),
                  T.jsx($r, {
                    icon: u3,
                    url: "/projects",
                    children: "Projects",
                  }),
                ],
              })
            : null,
        ],
      }),
    ],
  });
}
function QC() {
  const { navigationData: n } = A.useContext(Ds),
    [a, l] = A.useState(!1),
    { scrollYProgress: r } = gT({ container: n.scrollRef, layoutEffect: !1 });
  GS(r, "change", (f) => {
    l(f !== 0);
  });
  const o = () => {
    n.scrollRef.current && (n.scrollRef.current.scrollTop = 0);
  };
  return T.jsxs(T.Fragment, {
    children: [
      T.jsx(wt.div, {
        className: "flex w-screen h-[0.3rem] primary-bg z-10 fixed origin-left",
        style: { scaleX: r },
      }),
      T.jsx(T7, {
        children: a
          ? T.jsx(wt.div, {
              initial: { rotate: 90, scale: 0, opacity: 0 },
              animate: { rotate: 0, scale: 1, opacity: 1 },
              whileHover: { scale: 1.1 },
              exit: { rotate: 90, scale: 0, opacity: 0 },
              transition: { duration: 3, type: "spring", stiffness: 70 },
              className:
                "fixed bottom-[2rem] right-[2rem] lg:bottom-[3rem] lg:right-[3rem] z-20",
              children: T.jsx(en, {
                onPress: o,
                className: "primary-bg text-primary-foreground",
                size: "lg",
                radius: "full",
                isIconOnly: !0,
                children: T.jsx(Dt, { className: "text-[16pt]", icon: Xy }),
              }),
            })
          : null,
      }),
    ],
  });
}
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ const X4 = {
    prefix: "fab",
    iconName: "x-twitter",
    icon: [
      512,
      512,
      [],
      "e61b",
      "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
    ],
  },
  Z4 = {
    prefix: "fab",
    iconName: "linkedin",
    icon: [
      448,
      512,
      [],
      "f08c",
      "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
    ],
  },
  F4 = {
    prefix: "fab",
    iconName: "github",
    icon: [
      496,
      512,
      [],
      "f09b",
      "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
    ],
  };
function WC({ url: n, children: a, ref: l }) {
  return T.jsx(wt.div, {
    ref: l,
    whileHover: {
      paddingTop: "1rem",
      paddingBottom: "1rem",
      scale: 1.2,
      transition: { duration: 0.3 },
    },
    variants: {
      hidden: { opacity: 0, rotate: 90 },
      visible: { opacity: 1, rotate: 0, transition: { duration: 0.5 } },
    },
    children: T.jsx(en, {
      href: n,
      target: "_blank",
      as: So,
      variant: "light",
      isIconOnly: !0,
      className: "text-[20pt]",
      children: a,
    }),
  });
}
const Jr = wt.create(WC);
function $C() {
  return T.jsxs(wt.div, {
    className:
      "hidden lg:flex flex-col items-center space-y-2 fixed left-[1rem] xl:left-[2rem] top-[50vh] translate-y-[-50%] z-20",
    initial: "hidden",
    animate: "visible",
    transition: { delayChildren: 2, staggerChildren: 0.2 },
    children: [
      T.jsx(Jr, {
        url: "https://github.com/devlotfi",
        children: T.jsx(Dt, { icon: F4 }),
      }),
      T.jsx(Jr, {
        url: "mailto:debbal.lotfi.dev@gmail.com",
        children: T.jsx(Dt, { icon: f3 }),
      }),
      T.jsx(Jr, {
        url: "https://www.linkedin.com/in/lotfi-debbal-64489a2ba/",
        children: T.jsx(Dt, { icon: Z4 }),
      }),
      T.jsx(Jr, {
        url: "https://x.com/LDebbal",
        children: T.jsx(Dt, { icon: X4 }),
      }),
    ],
  });
}
const r3 = { damping: 15, stiffness: 150, restDelta: 0.001 };
function JC() {
  const { appliedTheme: n } = A.useContext(ga),
    a = r0(0),
    l = r0(0),
    r = Ip(a, r3),
    o = Ip(l, r3),
    f = A.useRef(null);
  return (
    A.useEffect(() => {
      const d = (h) => {
        f.current &&
          (a.set(h.clientX - f.current.offsetLeft - f.current.offsetWidth / 2),
          l.set(h.clientY - f.current.offsetTop - f.current.offsetHeight / 2));
      };
      return (
        window.addEventListener("mousemove", d),
        () => {
          window.removeEventListener("mousemove", d);
        }
      );
    }, [a, l]),
    T.jsx(wt.div, {
      ref: f,
      className: _t(
        "flex fixed h-[50vh] w-[50vh] mouse-cursor",
        n === st.LIGHT ? "cursor-light" : "cursor-dark"
      ),
      style: { x: r, y: o },
    })
  );
}
function Ir({ url: n, children: a }) {
  return T.jsx(So, {
    href: n,
    target: "_blank",
    children: T.jsx(en, {
      variant: "light",
      isIconOnly: !0,
      className: "text-[22pt] pointer-events-none",
      children: a,
    }),
  });
}
function IC() {
  const { appliedTheme: n } = A.useContext(ga);
  return T.jsxs("div", {
    className: _t(
      "flex sm:flex-row flex-col sm:items-center space-y-10 sm:space-y-0 justify-around px-[2rem] py-[3rem] border-t border-divider",
      n === st.LIGHT
        ? "card-gradient-bg-light-100"
        : "card-gradient-bg-dark-100"
    ),
    children: [
      T.jsx("div", {
        className: "self-start",
        children: T.jsx(q4, { className: "h-[3.5rem]" }),
      }),
      T.jsxs("div", {
        className: "flex flex-col space-y-3",
        children: [
          T.jsxs("div", {
            className: "flex lg:hidden space-x-2",
            children: [
              T.jsx(Ir, {
                url: "https://github.com/devlotfi",
                children: T.jsx(Dt, { icon: F4 }),
              }),
              T.jsx(Ir, {
                url: "mailto:debbal.lotfi.dev@gmail.com",
                children: T.jsx(Dt, { icon: f3 }),
              }),
              T.jsx(Ir, {
                url: "https://www.linkedin.com/in/lotfi-debbal-64489a2ba/",
                children: T.jsx(Dt, { icon: Z4 }),
              }),
              T.jsx(Ir, {
                url: "https://x.com/LDebbal",
                children: T.jsx(Dt, { icon: X4 }),
              }),
            ],
          }),
          T.jsxs("div", {
            className: "flex space-x-1",
            children: [
              T.jsx("div", {
                className: "flex",
                children: "Illustrations designed by",
              }),
              T.jsx(So, {
                href: "https://freepik.com/",
                target: "_blank",
                className: "primary-bg bg-clip-text text-transparent",
                children: "Freepik",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ra({
  children: n,
  top: a,
  bottom: l,
  left: r,
  right: o,
  endTopLeft: f,
  endTopRight: d,
  endBottomLeft: h,
  endBottomRight: m,
  icon: p,
  index: y,
}) {
  return T.jsxs("div", {
    className: "flex flex-col relative p-[3rem]",
    children: [
      T.jsx("div", {
        className: _t(
          "flex absolute top-0 h-full w-1/2 border-divider pointer-events-none",
          a && "border-t-[2px]",
          l && "border-b-[2px]",
          r && "border-l-[2px] left-0",
          o && "border-r-[2px] right-0",
          a && o && "rounded-tr-3xl",
          a && r && "rounded-tl-3xl",
          l && o && "rounded-br-3xl",
          l && r && "rounded-bl-3xl"
        ),
        style: { marginTop: y ? `-${y * 2}px` : void 0 },
      }),
      f || d || h || m
        ? T.jsx("div", {
            className: _t(
              "flex absolute h-[1rem] w-[1rem] bg-divider rounded-full",
              f && "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
              d && "top-0 right-0 translate-x-1/2 -translate-y-1/2",
              h && "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
              m && "bottom-0 right-0 translate-x-1/2 translate-y-1/2"
            ),
            style: { marginTop: y ? `-${y * 2}rem` : void 0 },
          })
        : null,
      T.jsx(En, {
        shadow: "none",
        className: _t(
          "flex absolute top-1/2 -translate-y-1/2 primary-bg justify-center items-center h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem]",
          r && "-translate-x-1/2 left-0",
          o && "translate-x-1/2 right-0"
        ),
        children: T.jsx(Dt, {
          className: "text-[15pt] md:text-[17pt] text-primary-foreground",
          icon: p,
        }),
      }),
      n,
    ],
  });
}
function ee({ title: n, image: a }) {
  const { appliedTheme: l } = A.useContext(ga);
  return T.jsxs(En, {
    shadow: "none",
    className: _t(
      "flex flex-col border border-divider",
      l === st.LIGHT
        ? "card-gradient-bg-light-100"
        : "card-gradient-bg-dark-100"
    ),
    isPressable: !0,
    children: [
      T.jsx("div", {
        className: "flex h-[5rem] w-[5rem] justify-center items-center",
        children: T.jsx("img", {
          className: "h-[2.5rem]",
          src: a,
          alt: "image",
        }),
      }),
      T.jsx("div", {
        className:
          "flex w-full justify-center items-center py-[0.5rem] px-[0.5rem]",
        children: T.jsx("div", {
          className: "flex text-[9pt] leading-[0.5rem] font-bold",
          children: n,
        }),
      }),
    ],
  });
}
const tA = "/portfolio-v2/assets/programming-CQAn5RP1.svg",
  eA = "/portfolio-v2/assets/frontend-D4llaT1r.svg",
  nA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.0214%2090.0345L6%200.000488281H94.1867L86.1653%2089.9859L50.0204%20100'%20fill='%23E44D26'/%3e%3cpath%20d='M50.093%2092.3445V7.39062H86.1407L79.2617%2084.2015'%20fill='%23F16529'/%3e%3cpath%20d='M22.3831%2018.4014H50.0933V29.4369H34.4881L35.509%2040.7397H50.0933V51.7509H25.3972L22.3831%2018.4014ZM25.8833%2057.293H36.9674L37.7452%2066.1165L50.0933%2069.4223V80.9439L27.439%2074.624'%20fill='%23EBEBEB'/%3e%3cpath%20d='M77.7058%2018.4014H50.0442V29.4369H76.6849L77.7058%2018.4014ZM75.6883%2040.7397H50.0442V51.7752H63.6562L62.368%2066.1165L50.0442%2069.4223V80.8953L72.6499%2074.624'%20fill='white'/%3e%3c/svg%3e",
  aA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M94.1749%200.000488281L86.142%2089.99L50.0335%20100L14.0245%2090.0041L6%200.000488281H94.1749Z'%20fill='%23264DE4'/%3e%3cpath%20d='M79.2648%2084.2598L86.1295%207.35962H50.0874V92.3489L79.2648%2084.2598Z'%20fill='%232965F1'/%3e%3cpath%20d='M24.3959%2040.7407L25.3852%2051.7792H50.0874V40.7407H24.3959Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M50.0875%2018.3982H50.0493H22.408L23.4114%2029.4369H50.0875V18.3982Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M50.0874%2080.8935V69.4088L50.039%2069.4217L37.7453%2066.1021L36.9594%2057.2983H30.9856H25.8784L27.4249%2074.6305L50.0366%2080.9077L50.0874%2080.8935Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M63.6421%2051.779L62.3608%2066.0952L50.0493%2069.4182V80.9024L72.679%2074.6306L72.845%2072.7657L75.439%2043.7047L75.7083%2040.7406L77.7011%2018.3982H50.0493V29.4369H65.6038L64.5994%2040.7406H50.0493V51.779H63.6421Z'%20fill='white'/%3e%3c/svg%3e",
  iA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_216_19)'%3e%3cpath%20d='M100%200.000488281H0V100H100V0.000488281Z'%20fill='%23017ACB'/%3e%3cpath%20d='M52.5157%2046.6093H57.3126V54.8906H44.3438V91.7343L44%2091.8281C43.5313%2091.9531%2037.3594%2091.9531%2036.0313%2091.8125L34.9688%2091.7187V54.8906H22V46.6093L26.1094%2046.5625C28.3594%2046.5312%2034.1406%2046.5312%2038.9532%2046.5625C43.7657%2046.5937%2049.8594%2046.6093%2052.5157%2046.6093ZM89.1251%2087.8281C87.2189%2089.8437%2085.172%2090.9687%2081.7657%2091.8906C80.2813%2092.2968%2080.0313%2092.3125%2076.6876%2092.2968C73.3438%2092.2812%2073.0782%2092.2812%2071.4532%2091.8593C67.2501%2090.7812%2063.8594%2088.6718%2061.5469%2085.6875C60.8907%2084.8437%2059.8126%2083.0937%2059.8126%2082.875C59.8126%2082.8125%2059.9688%2082.6718%2060.1719%2082.5781C60.3751%2082.4843%2060.7969%2082.2187%2061.1407%2082.0156C61.4844%2081.8125%2062.1094%2081.4375%2062.5313%2081.2187C62.9532%2081%2064.1719%2080.2812%2065.2345%2079.6406C66.297%2079%2067.2657%2078.4843%2067.3751%2078.4843C67.4845%2078.4843%2067.6876%2078.7031%2067.8438%2078.9687C68.7813%2080.5468%2070.9688%2082.5625%2072.5157%2083.25C73.4688%2083.6562%2075.5782%2084.1093%2076.5938%2084.1093C77.5313%2084.1093%2079.2501%2083.7031%2080.172%2083.2812C81.1563%2082.8281%2081.6564%2082.375%2082.2501%2081.4687C82.6564%2080.8281%2082.7032%2080.6562%2082.6876%2079.4375C82.6876%2078.3125%2082.6251%2078%2082.3126%2077.4843C81.4376%2076.0468%2080.2501%2075.2968%2075.4376%2073.1718C70.4688%2070.9687%2068.2345%2069.6562%2066.4219%2067.8906C65.0782%2066.5781%2064.8126%2066.2187%2063.9688%2064.5781C62.8751%2062.4687%2062.7344%2061.7812%2062.7188%2058.6406C62.7032%2056.4375%2062.7501%2055.7187%2062.9844%2054.9687C63.3126%2053.8437%2064.3751%2051.6718%2064.8594%2051.125C65.8594%2049.9531%2066.2188%2049.5937%2066.922%2049.0156C69.047%2047.2656%2072.3595%2046.1093%2075.5313%2046C75.8907%2046%2077.0782%2046.0625%2078.1876%2046.1406C81.3751%2046.4062%2083.547%2047.1875%2085.6407%2048.8593C87.2189%2050.1093%2089.6095%2053.0468%2089.3751%2053.4375C89.2189%2053.6718%2082.9845%2057.8281%2082.5782%2057.9531C82.3282%2058.0312%2082.1564%2057.9375%2081.8126%2057.5312C79.6876%2054.9843%2078.8282%2054.4375%2076.7657%2054.3125C75.297%2054.2187%2074.5157%2054.3906%2073.5313%2055.0468C72.5001%2055.7343%2072.0001%2056.7812%2072.0001%2058.2343C72.0157%2060.3593%2072.8282%2061.3593%2075.8282%2062.8437C77.7657%2063.7968%2079.422%2064.5781%2079.547%2064.5781C79.7345%2064.5781%2083.7501%2066.5781%2084.797%2067.2031C89.672%2070.0625%2091.6564%2073%2092.172%2078.0625C92.547%2081.875%2091.4689%2085.3593%2089.1251%2087.8281Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_216_19'%3e%3crect%20width='100'%20height='100'%20rx='10'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  lA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_216_33)'%3e%3cpath%20d='M49.6397%200.000488281C24.2535%200.000488281%2025.8385%2011.0095%2025.8385%2011.0095L25.8667%2022.4151H50.0924V25.8394H16.2447C16.2447%2025.8394%200%2023.9971%200%2049.6116C0%2075.2269%2014.1788%2074.3185%2014.1788%2074.3185H22.6406V62.432C22.6406%2062.432%2022.1844%2048.2532%2036.593%2048.2532H60.6205C60.6205%2048.2532%2074.1199%2048.4713%2074.1199%2035.2065V13.2739C74.1199%2013.2739%2076.1702%200.000488281%2049.6397%200.000488281ZM36.2817%207.67056C36.8542%207.67004%2037.4211%207.78242%2037.9501%208.00125C38.4791%208.22009%2038.9598%208.54109%2039.3646%208.94589C39.7693%209.35068%2040.0903%209.83133%2040.3092%2010.3603C40.528%2010.8893%2040.6404%2011.4563%2040.6399%2012.0287C40.6404%2012.6012%2040.528%2013.1681%2040.3092%2013.6971C40.0903%2014.2261%2039.7693%2014.7068%2039.3646%2015.1116C38.9598%2015.5164%2038.4791%2015.8374%2037.9501%2016.0562C37.4211%2016.275%2036.8542%2016.3874%2036.2817%2016.3869C35.7092%2016.3874%2035.1423%2016.275%2034.6133%2016.0562C34.0843%2015.8374%2033.6037%2015.5164%2033.1989%2015.1116C32.7941%2014.7068%2032.4731%2014.2261%2032.2542%2013.6971C32.0354%2013.1681%2031.923%2012.6012%2031.9235%2012.0287C31.923%2011.4563%2032.0354%2010.8893%2032.2542%2010.3603C32.4731%209.83133%2032.7941%209.35068%2033.1989%208.94589C33.6037%208.54109%2034.0843%208.22009%2034.6133%208.00125C35.1423%207.78242%2035.7092%207.67004%2036.2817%207.67056Z'%20fill='url(%23paint0_linear_216_33)'/%3e%3cpath%20d='M50.3607%2099.4806C75.747%2099.4806%2074.1619%2088.4715%2074.1619%2088.4715L74.1337%2077.0663H49.9076V73.642H83.7553C83.7553%2073.642%20100%2075.4843%20100%2049.869C100%2024.254%2085.8213%2025.1624%2085.8213%2025.1624H77.3594V37.0486C77.3594%2037.0486%2077.8156%2051.2273%2063.407%2051.2273H39.3795C39.3795%2051.2273%2025.8801%2051.0092%2025.8801%2064.2745V86.2075C25.8801%2086.2075%2023.8306%2099.4806%2050.3607%2099.4806ZM63.7187%2091.8112C63.1462%2091.8118%2062.5793%2091.6994%2062.0503%2091.4806C61.5213%2091.2617%2061.0407%2090.9407%2060.6359%2090.5359C60.2311%2090.1311%2059.9101%2089.6505%2059.6912%2089.1215C59.4724%2088.5925%2059.36%2088.0255%2059.3605%2087.4531C59.36%2086.8806%2059.4723%2086.3136%2059.6911%2085.7845C59.9099%2085.2555%2060.2309%2084.7748%2060.6357%2084.37C61.0405%2083.9651%2061.5212%2083.6441%2062.0502%2083.4252C62.5792%2083.2064%2063.1462%2083.094%2063.7187%2083.0945C64.2912%2083.094%2064.8581%2083.2064%2065.3871%2083.4252C65.9161%2083.644%2066.3968%2083.965%2066.8015%2084.3698C67.2063%2084.7746%2067.5273%2085.2553%2067.7462%2085.7843C67.965%2086.3133%2068.0774%2086.8802%2068.0769%2087.4527C68.0774%2088.0251%2067.965%2088.5921%2067.7462%2089.1211C67.5273%2089.6501%2067.2063%2090.1307%2066.8015%2090.5355C66.3968%2090.9403%2065.9161%2091.2613%2065.3871%2091.4802C64.8581%2091.699%2064.2912%2091.8117%2063.7187%2091.8112Z'%20fill='url(%23paint1_linear_216_33)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_216_33'%20x1='9.60996'%20y1='8.94811'%20x2='59.1669'%20y2='58.0107'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23387EB8'/%3e%3cstop%20offset='1'%20stop-color='%23366994'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_216_33'%20x1='40.0281'%20y1='40.4532'%20x2='93.2466'%20y2='90.7623'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFE052'/%3e%3cstop%20offset='1'%20stop-color='%23FFC331'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_216_33'%3e%3crect%20width='100'%20height='100'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  sA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M94.0943%2029.111C94.0937%2027.4461%2093.7376%2025.9749%2093.0175%2024.7126C92.3102%2023.4707%2091.2509%2022.43%2089.8301%2021.6072C78.1017%2014.8446%2066.3619%208.10261%2054.6374%201.33306C51.4765%20-0.49178%2048.4117%20-0.424908%2045.2743%201.42613C40.606%204.1789%2017.2337%2017.5694%2010.2691%2021.6035C7.40086%2023.2642%206.00517%2025.8053%206.00448%2029.1079C6%2042.708%206.00448%2056.3081%206%2069.9082C6%2071.5366%206.3416%2072.9795%207.02996%2074.2229C7.73763%2075.502%208.81171%2076.5713%2010.2653%2077.4127C17.2303%2081.4467%2040.6057%2094.8362%2045.2729%2097.59C48.4117%2099.4421%2051.4765%2099.5083%2054.6384%2097.6831C66.3633%2090.9132%2078.1038%2084.1712%2089.8339%2077.4086C91.2875%2076.5675%2092.3615%2075.4976%2093.0692%2074.2194C93.7565%2072.9757%2094.0988%2071.5332%2094.0988%2069.9045C94.0988%2069.9045%2094.0988%2042.7115%2094.0943%2029.111Z'%20fill='%23A179DC'/%3e%3cpath%20d='M50.1843%2049.3755L7.03003%2074.2228C7.7377%2075.502%208.81178%2076.5712%2010.2654%2077.4126C17.2304%2081.4466%2040.6058%2094.8361%2045.273%2097.5899C48.4118%2099.442%2051.4765%2099.5082%2054.6385%2097.683C66.3634%2090.9131%2078.1038%2084.1711%2089.8339%2077.4085C91.2875%2076.5674%2092.3616%2075.4975%2093.0693%2074.2193L50.1843%2049.3755Z'%20fill='%23280068'/%3e%3cpath%20d='M94.0945%2029.111C94.0938%2027.4461%2093.7378%2025.9749%2093.0177%2024.7126L50.1843%2049.3759L93.0694%2074.2195C93.7567%2072.9758%2094.0983%2071.5332%2094.099%2069.9045C94.099%2069.9045%2094.099%2042.7115%2094.0945%2029.111Z'%20fill='%23390091'/%3e%3cpath%20d='M75.5919%2040.0869V44.7314H80.2364V40.0869H82.5586V44.7314H87.2031V47.0536H82.5586V51.6977H87.2031V54.02H82.5586V58.6644H80.2364V54.02H75.5919V58.6644H73.2696V54.02H68.6255V51.6977H73.2696V47.0536H68.6255V44.7314H73.2696V40.0869H75.5919ZM80.2364%2047.0533H75.5919V51.6977H80.2364V47.0533Z'%20fill='white'/%3e%3cpath%20d='M50.279%2016.7618C62.3931%2016.7618%2072.9695%2023.3408%2078.6346%2033.1199L78.5794%2033.0258L64.3261%2041.2324C61.5182%2036.4779%2056.3705%2033.2691%2050.4648%2033.203L50.2786%2033.2019C41.2734%2033.2019%2033.9726%2040.5027%2033.9726%2049.5079C33.9697%2052.3463%2034.7112%2055.1358%2036.1232%2057.598C38.9339%2062.5048%2044.2178%2065.8143%2050.279%2065.8143C56.3777%2065.8143%2061.6916%2062.4628%2064.4878%2057.5036L64.4199%2057.6225L78.6515%2065.867C73.0484%2075.5634%2062.6168%2082.122%2050.6437%2082.2527L50.279%2082.2547C38.1266%2082.2547%2027.5202%2075.6351%2021.8692%2065.8043C19.1106%2061.005%2017.5322%2055.4412%2017.5322%2049.5079C17.5322%2031.4229%2032.1934%2016.7618%2050.279%2016.7618Z'%20fill='white'/%3e%3c/svg%3e",
  rA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_216_57)'%3e%3cpath%20d='M36.7526%2077.3362C36.7526%2077.3362%2032.9313%2079.5584%2039.4722%2080.3103C47.3966%2081.2143%2051.4463%2081.0848%2060.179%2079.4319C60.179%2079.4319%2062.475%2080.8715%2065.681%2082.1185C46.1052%2090.5083%2021.3765%2081.6324%2036.7526%2077.3362ZM34.3605%2066.3878C34.3605%2066.3878%2030.0745%2069.5605%2036.6203%2070.2375C45.0852%2071.1107%2051.77%2071.1822%2063.3375%2068.9548C63.3375%2068.9548%2064.9375%2070.5768%2067.4533%2071.4639C43.7846%2078.3849%2017.4221%2072.0097%2034.3605%2066.3878Z'%20fill='%235382A1'/%3e%3cpath%20d='M54.5266%2047.8159C59.3503%2053.3692%2053.2594%2058.3666%2053.2594%2058.3666C53.2594%2058.3666%2065.507%2052.044%2059.8822%2044.1263C54.6289%2036.7432%2050.6%2033.0742%2072.4098%2020.4255C72.4098%2020.4255%2038.1757%2028.9758%2054.5266%2047.8159Z'%20fill='%23E76F00'/%3e%3cpath%20d='M80.4175%2085.4344C80.4175%2085.4344%2083.2454%2087.7643%2077.303%2089.567C66.0036%2092.9902%2030.2732%2094.0238%2020.3473%2089.7034C16.7794%2088.1514%2023.4705%2085.9973%2025.5752%2085.545C27.7701%2085.069%2029.0247%2085.1579%2029.0247%2085.1579C25.0566%2082.3624%203.37677%2090.6467%2018.0125%2093.0188C57.9258%2099.4917%2090.7704%2090.1044%2080.4175%2085.4344ZM38.5901%2055.0441C38.5901%2055.0441%2020.4156%2059.3611%2032.1543%2060.9284C37.1105%2061.592%2046.9909%2061.442%2056.1944%2060.6707C63.7159%2060.0366%2071.2685%2058.6873%2071.2685%2058.6873C71.2685%2058.6873%2068.6163%2059.8232%2066.6976%2061.1333C48.2414%2065.9874%2012.5875%2063.7293%2022.8518%2058.7641C31.5324%2054.5681%2038.5901%2055.0441%2038.5901%2055.0441ZM71.1935%2073.2681C89.9554%2063.5188%2081.2806%2054.15%2075.2258%2055.4124C73.7417%2055.721%2073.0801%2055.9886%2073.0801%2055.9886C73.0801%2055.9886%2073.6311%2055.1258%2074.6833%2054.7522C86.6613%2050.5409%2095.8735%2067.1725%2070.8165%2073.7595C70.8165%2073.7597%2071.1069%2073.5003%2071.1935%2073.2681Z'%20fill='%235382A1'/%3e%3cpath%20d='M59.8822%200.000777813C59.8822%200.000777813%2070.2727%2010.3951%2050.0272%2026.3777C33.7927%2039.1989%2046.3252%2046.5091%2050.0206%2054.8614C40.5441%2046.3114%2033.5894%2038.7846%2038.2553%2031.7796C45.1031%2021.4962%2064.0743%2016.511%2059.8822%200.000777813Z'%20fill='%23E76F00'/%3e%3cpath%20d='M40.4338%2099.6861C58.4426%20100.839%2086.097%2099.0465%2086.752%2090.5253C86.752%2090.5253%2085.4931%2093.7559%2071.8687%2096.3211C56.4978%2099.2136%2037.5401%2098.876%2026.296%2097.0221C26.2963%2097.0221%2028.5975%2098.9272%2040.4338%2099.6861Z'%20fill='%235382A1'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_216_57'%3e%3crect%20width='100'%20height='100'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  oA =
    "data:image/svg+xml,%3csvg%20width='101'%20height='100'%20viewBox='0%200%20101%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M50.3067%2058.8168C55.1757%2058.8168%2059.1229%2054.8697%2059.1229%2050.0006C59.1229%2045.1315%2055.1757%2041.1844%2050.3067%2041.1844C45.4376%2041.1844%2041.4904%2045.1315%2041.4904%2050.0006C41.4904%2054.8697%2045.4376%2058.8168%2050.3067%2058.8168Z'%20fill='%2361DAFB'/%3e%3cpath%20d='M50.3066%2068.0631C76.4333%2068.0631%2097.6132%2059.9762%2097.6132%2050.0005C97.6132%2040.0249%2076.4333%2031.938%2050.3066%2031.938C24.1799%2031.938%203%2040.0249%203%2050.0005C3%2059.9762%2024.1799%2068.0631%2050.3066%2068.0631Z'%20stroke='%2361DAFB'%20stroke-width='5'/%3e%3cpath%20d='M34.664%2059.0318C47.7274%2081.6582%2065.3207%2095.9571%2073.9599%2090.9692C82.5991%2085.9814%2079.0126%2063.5957%2065.9492%2040.9693C52.8858%2018.3428%2035.2925%204.04397%2026.6533%209.0318C18.0141%2014.0196%2021.6006%2036.4054%2034.664%2059.0318Z'%20stroke='%2361DAFB'%20stroke-width='5'/%3e%3cpath%20d='M34.664%2040.9692C21.6007%2063.5956%2018.0141%2085.9814%2026.6533%2090.9692C35.2925%2095.957%2052.8859%2081.6582%2065.9492%2059.0318C79.0126%2036.4053%2082.5991%2014.0196%2073.9599%209.03177C65.3208%204.04394%2047.7274%2018.3428%2034.664%2040.9692Z'%20stroke='%2361DAFB'%20stroke-width='5'/%3e%3c/svg%3e",
  uA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_216_97)'%3e%3cpath%20d='M50.0002%2020.0005C36.6665%2020.0005%2028.3334%2026.6655%2024.9996%2039.9942C30.0002%2033.3292%2035.8337%2030.8308%2042.4999%2032.4964C46.3039%2033.4468%2049.0224%2036.2065%2052.0323%2039.2602C56.9341%2044.2345%2062.6075%2049.9917%2075.0009%2049.9917C88.3334%2049.9917%2096.6677%2043.3267%20100%2029.9967C95.0009%2036.6617%2089.1674%2039.1614%2082.4999%2037.4958C78.6973%2036.5454%2075.9787%2033.7856%2072.9689%2030.732C68.067%2025.7576%2062.3924%2020.0005%2050.0002%2020.0005ZM24.9996%2049.9917C11.6671%2049.9917%203.33274%2056.6567%200.000244141%2069.9866C4.99962%2063.3217%2010.8331%2060.822%2017.5006%2062.4888C21.3032%2063.4405%2024.0218%2066.199%2027.0316%2069.2514C31.9335%2074.2257%2037.6081%2079.9841%2050.0002%2079.9841C63.334%2079.9841%2071.6671%2073.3191%2075.0009%2059.9892C70.0002%2066.6542%2064.1668%2069.1538%2057.5006%2067.487C53.6966%2066.5379%2050.9781%2063.7768%2047.9682%2060.7244C43.0664%2055.7501%2037.393%2049.9917%2024.9996%2049.9917Z'%20fill='%2306B6D4'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_216_97'%3e%3crect%20width='100'%20height='100'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  cA = "/portfolio-v2/assets/react-query-BkatKmcr.svg",
  fA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_216_275)'%3e%3cpath%20d='M100%200.000488281H0V100H100V0.000488281Z'%20fill='black'/%3e%3cpath%20d='M50.5844%2021H62.4224V57.4998C62.4224%2061.598%2061.4473%2065.1839%2059.497%2068.2576C57.5651%2071.3312%2054.8584%2073.728%2051.3772%2075.4478C47.896%2077.1493%2043.8407%2078%2039.2112%2078C34.5635%2078%2030.499%2077.1493%2027.0178%2075.4478C23.5366%2073.728%2020.83%2071.3312%2018.898%2068.2576C16.966%2065.1839%2016%2061.598%2016%2057.4998V21H27.838V56.4844C27.838%2058.6249%2028.3027%2060.5277%2029.2323%2062.1926C30.1801%2063.8575%2031.5106%2065.1656%2033.2238%2066.117C34.9371%2067.0684%2036.9329%2067.5441%2039.2112%2067.5441C41.5077%2067.5441%2043.5035%2067.0684%2045.1985%2066.117C46.9118%2065.1656%2048.2332%2063.8575%2049.1627%2062.1926C50.1105%2060.5277%2050.5844%2058.6249%2050.5844%2056.4844V21Z'%20fill='white'/%3e%3cpath%20d='M84%2021V77.2041H72.162V21H84Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_216_275'%3e%3crect%20width='100'%20height='100'%20rx='10'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  dA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M60.2724%200L71.8129%206.63645L26.365%2032.7718L14.8246%2026.1352L60.2724%200Z'%20fill='%230858CF'/%3e%3cpath%20d='M72.2782%208.02984L27.1165%2033.9888L27.115%2047.1227L72.2768%2021.1638L72.2782%208.02984Z'%20fill='%230858CF'/%3e%3cpath%20d='M54.1173%2033.6615L27.2114%2049.1273L27.21%2062.2616L54.1157%2046.7957L54.1173%2033.6615Z'%20fill='%230858CF'/%3e%3cpath%20d='M43.8031%2054.4251L27.1477%2063.9991L27.1462%2077.1336L43.8017%2067.5596L43.8031%2054.4251Z'%20fill='%230858CF'/%3e%3cpath%20d='M14.0045%2027.4015L25.6128%2034.0738L25.6083%2047.2108L14%2040.5387L14.0045%2027.4015Z'%20fill='%230858CF'/%3e%3cpath%20d='M14.1149%2042.4493L25.5824%2049.0406L25.578%2062.1776L14.1105%2055.5864L14.1149%2042.4493Z'%20fill='%230858CF'/%3e%3cpath%20d='M14.1099%2057.4064L25.5812%2064L25.5765%2078.0036L14.1051%2071.41L14.1099%2057.4064Z'%20fill='%230858CF'/%3e%3cpath%20d='M39.672%20100L28.1315%2093.3636L73.0636%2067.5249L84.6039%2074.1613L39.672%20100Z'%20fill='%230858CF'/%3e%3cpath%20d='M27.2167%2092.2277L72.3106%2066.3077L72.312%2053.1738L27.2181%2079.0938L27.2167%2092.2277Z'%20fill='%230858CF'/%3e%3cpath%20d='M45.3098%2066.6351L72.2155%2051.1693L72.217%2038.0351L45.3112%2053.5008L45.3098%2066.6351Z'%20fill='%230858CF'/%3e%3cpath%20d='M55.6239%2045.8714L72.2793%2036.2975L72.2807%2023.1631L55.6254%2032.737L55.6239%2045.8714Z'%20fill='%230858CF'/%3e%3cpath%20d='M85.424%2072.9831L73.8158%2066.3109L73.8202%2053.1738L85.4286%2059.8459L85.424%2072.9831Z'%20fill='%230858CF'/%3e%3cpath%20d='M85.3144%2057.8508L73.8469%2051.2595L73.8513%2038.1225L85.3188%2044.7137L85.3144%2057.8508Z'%20fill='%230858CF'/%3e%3cpath%20d='M85.3187%2042.8937L73.8473%2036.3001L73.8519%2022.5482L85.3233%2029.1417L85.3187%2042.8937Z'%20fill='%230858CF'/%3e%3c/svg%3e",
  hA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M93.2576%2070.2253C93.2576%2071.6322%2092.0559%2072.2477%2090.649%2072.8338C85.0216%2075.2079%2079.0132%2077.4354%2072.6237%2077.4354C60.7534%2077.4354%2052.4882%2064.3048%2024.7908%2078.1682V93.3504C24.7908%20102.231%2011.3964%20102.202%2011.3964%2093.3504V20.0769C8.75856%2018.0253%207%2014.8306%207%2011.1962C7%205.04122%2012.0119%200%2018.1962%200C24.3512%200%2029.3924%205.01191%2029.3924%2011.1962C29.3924%2014.7719%2027.6924%2017.996%2025.0253%2020.0476V26.2026C35.8991%2022.6855%2044.2229%2016.1202%2067.8463%2025.2061C75.6426%2028.5474%2087.9819%2020.6045%2090.268%2020.6045C91.88%2020.6045%2093.2869%2021.8062%2093.2869%2023.213V70.2253H93.2576Z'%20fill='%23538DD7'/%3e%3c/svg%3e",
  mA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_216_304)'%3e%3ccircle%20cx='50'%20cy='50'%20r='50'%20fill='%23F3E814'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_216_304'%3e%3crect%20width='100'%20height='100'%20rx='10'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  pA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_216_310)'%3e%3cpath%20d='M100%200.000488281H0V100H100V0.000488281Z'%20fill='%2313222A'/%3e%3cpath%20d='M56.2372%2030.5698H43.7278L31.1092%2066.4294H39.3596L41.9479%2059.0954H54.4595L52.2393%2052.786H44.1589L49.9824%2036.2319L60.603%2066.4236L60.6053%2066.4294H68.8556L56.2372%2030.5698Z'%20fill='%23FFEADB'/%3e%3cpath%20d='M83.9905%2030.878C83.783%2030.5104%2083.4381%2030.2402%2083.0318%2030.1269C82.6249%2030.0136%2082.1899%2030.0664%2081.8223%2030.2737C81.4547%2030.481%2081.1845%2030.8259%2081.0718%2031.2324C80.9584%2031.639%2081.0111%2032.0739%2081.2186%2032.4415C85.4382%2039.9444%2086.8145%2048.7161%2085.0953%2057.1509C83.3761%2065.5856%2078.6768%2073.1191%2071.8577%2078.3722C65.0383%2083.6252%2056.5551%2086.2471%2047.9609%2085.7567C39.3668%2085.2664%2031.2367%2081.6972%2025.0589%2075.7027C18.8811%2069.7081%2015.069%2061.6891%2014.3204%2053.1135C13.5717%2044.538%2015.9366%2035.9797%2020.9821%2029.0053C26.0277%2022.0309%2033.4163%2017.107%2041.7955%2015.1349C50.1747%2013.1629%2058.9838%2014.2746%2066.6103%2018.2666C66.366%2019.3916%2066.5281%2020.5669%2067.0681%2021.5837C67.608%2022.6005%2068.4908%2023.3931%2069.5596%2023.8208C70.6285%2024.2485%2071.8143%2024.2836%2072.9066%2023.92C73.9989%2023.5563%2074.927%2022.8174%2075.5262%2021.8344C76.1255%2020.8514%2076.357%2019.6878%2076.1797%2018.5503C76.0024%2017.4127%2075.4279%2016.3748%2074.5579%2015.6207C73.688%2014.8666%2072.5791%2014.4452%2071.4279%2014.4312C70.2767%2014.4172%2069.1578%2014.8115%2068.2698%2015.5441C59.9805%2011.1488%2050.3846%209.88918%2041.2417%2011.9962C32.0989%2014.1032%2024.0222%2019.4357%2018.4927%2027.0156C12.9632%2034.5955%2010.3516%2043.9148%2011.1369%2053.2644C11.9222%2062.6139%2016.0518%2071.367%2022.7683%2077.9185C29.4847%2084.4698%2038.3378%2088.3799%2047.704%2088.9323C57.0702%2089.4847%2066.3215%2086.642%2073.7615%2080.9253C81.2012%2075.2092%2086.3308%2067.0021%2088.2101%2057.8096C90.0888%2048.6171%2088.5904%2039.0553%2083.9905%2030.878Z'%20fill='%23FFEADB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_216_310'%3e%3crect%20width='100'%20height='100'%20rx='10'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  gA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M64.9512%2069.5122H34.4634C26.0444%2069.5122%2019.2195%2076.3371%2019.2195%2084.7561C19.2195%2093.1751%2026.0444%20100%2034.4634%20100H64.9512C73.3702%20100%2080.1951%2093.1751%2080.1951%2084.7561C80.1951%2076.3371%2073.3702%2069.5122%2064.9512%2069.5122Z'%20fill='%231AD1A5'/%3e%3cpath%20d='M49.7073%2063.4146C67.2188%2063.4146%2081.4146%2049.2188%2081.4146%2031.7073C81.4146%2014.1958%2067.2188%200%2049.7073%200C32.1958%200%2018%2014.1958%2018%2031.7073C18%2049.2188%2032.1958%2063.4146%2049.7073%2063.4146Z'%20fill='black'%20fill-opacity='0.3'/%3e%3cpath%20d='M49.7073%2062.1951C66.5453%2062.1951%2080.1951%2048.5453%2080.1951%2031.7073C80.1951%2014.8694%2066.5453%201.21951%2049.7073%201.21951C32.8694%201.21951%2019.2195%2014.8694%2019.2195%2031.7073C19.2195%2048.5453%2032.8694%2062.1951%2049.7073%2062.1951Z'%20fill='white'/%3e%3cpath%20d='M49.7073%2045.3659C57.2507%2045.3659%2063.3659%2039.2507%2063.3659%2031.7073C63.3659%2024.1639%2057.2507%2018.0488%2049.7073%2018.0488C42.1639%2018.0488%2036.0488%2024.1639%2036.0488%2031.7073C36.0488%2039.2507%2042.1639%2045.3659%2049.7073%2045.3659Z'%20fill='%23FF9903'/%3e%3c/svg%3e",
  yA =
    "data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M62.7129%2010.3626V29.1828L83.8618%2083.5014C83.8618%2083.5014%2090.3183%2096.7674%2071.8519%20100H29.7244C29.7244%20100%2012.5126%2098.204%2016.6389%2084.5756L38.8641%2029.1835V10.3626H62.7129Z'%20fill='%23009688'/%3e%3cpath%20d='M63.1593%208.17429H37.7892C35.7343%208.17429%2034.063%206.34635%2034.063%204.08787C34.063%201.82795%2035.7336%200%2037.7892%200H63.1593C65.2235%200%2066.892%201.82795%2066.892%204.08787C66.892%206.34635%2065.2228%208.17429%2063.1593%208.17429Z'%20fill='%23004D40'/%3e%3cpath%20d='M56.4667%2041.0919C59.1891%2041.0919%2061.4091%2043.7519%2061.4091%2047.0461C61.4091%2050.3258%2059.1876%2052.9924%2056.4667%2052.9924C53.7379%2052.9924%2051.5243%2050.3258%2051.5243%2047.0461C51.5243%2043.7505%2053.7379%2041.0919%2056.4667%2041.0919Z'%20fill='white'/%3e%3cpath%20d='M41.2942%2056.5378C43.5951%2056.5378%2045.4603%2054.2897%2045.4603%2051.5164C45.4603%2048.7432%2043.5951%2046.495%2041.2942%2046.495C38.9933%2046.495%2037.1281%2048.7432%2037.1281%2051.5164C37.1281%2054.2897%2038.9933%2056.5378%2041.2942%2056.5378Z'%20fill='white'/%3e%3cpath%20d='M64.5938%2027.9354V18.9841C64.5938%2018.9841%2075.9449%2016.4814%2081.6179%2029.6844C81.6179%2029.6844%2072.7768%2036.1257%2064.5938%2027.9354Z'%20fill='%23004D40'/%3e%3cpath%20d='M36.792%2027.9354V18.9841C36.792%2018.9841%2025.4394%2016.4814%2019.7693%2029.6844C19.7693%2029.6844%2028.6017%2036.1257%2036.792%2027.9354Z'%20fill='%23004D40'/%3e%3cpath%20d='M71.4184%2064.9784C52.9599%2059.2524%2037.4413%2062.3263%2029.8562%2064.65L22.2074%2083.0606C18.7639%2094.0515%2033.1425%2095.496%2033.1425%2095.496H68.3279C83.7509%2092.8904%2078.3605%2082.1981%2078.3605%2082.1981L71.4184%2064.9784Z'%20fill='white'/%3e%3cpath%20d='M44.8167%2071.8189C44.8167%2073.8041%2042.1488%2075.4189%2038.8625%2075.4189C35.5763%2075.4189%2032.9163%2073.8034%2032.9163%2071.8189C32.9163%2069.8257%2035.5763%2068.2166%2038.8625%2068.2166C42.1502%2068.2181%2044.8167%2069.8257%2044.8167%2071.8189Z'%20fill='%23004D40'/%3e%3cpath%20d='M65.9913%2071.8189C65.9913%2073.8041%2063.3233%2075.4189%2060.0451%2075.4189C56.7494%2075.4189%2054.0909%2073.8034%2054.0909%2071.8189C54.0909%2069.8257%2056.7494%2068.2166%2060.0451%2068.2166C63.3248%2068.2181%2065.9913%2069.8257%2065.9913%2071.8189Z'%20fill='%23004D40'/%3e%3c/svg%3e";
function vA() {
  return T.jsx("div", {
    className:
      "flex flex-col flex-1 items-center px-[2rem] md:px-[2.5rem] lg:px-[6rem]",
    children: T.jsx("div", {
      className: "flex flex-col w-full max-w-screen-md",
      children: T.jsxs("div", {
        className: "flex flex-col mt-[2rem]",
        children: [
          T.jsx(ra, {
            icon: Py,
            left: !0,
            bottom: !0,
            endTopLeft: !0,
            index: 0,
            children: T.jsxs("div", {
              className: "flex flex-col md:flex-row gap-7",
              children: [
                T.jsx("img", {
                  className: "h-[15rem]",
                  src: tA,
                  alt: "desktop",
                }),
                T.jsxs("div", {
                  className: "flex flex-col space-y-3",
                  children: [
                    T.jsx("div", {
                      className: "flex font-black text-[20pt]",
                      children: "Programming languages",
                    }),
                    T.jsxs("div", {
                      className: "flex gap-3 items-start flex-wrap",
                      children: [
                        T.jsx(ee, { title: "Html", image: nA }),
                        T.jsx(ee, { title: "Css", image: aA }),
                        T.jsx(ee, { title: "Typescript", image: iA }),
                        T.jsx(ee, { title: "Python", image: lA }),
                        T.jsx(ee, { title: "C#", image: sA }),
                        T.jsx(ee, { title: "Java", image: rA }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          T.jsx(ra, {
            icon: ky,
            right: !0,
            top: !0,
            bottom: !0,
            index: 1,
            children: T.jsxs("div", {
              className: "flex flex-col md:flex-row gap-7",
              children: [
                T.jsxs("div", {
                  className: "flex flex-col space-y-3",
                  children: [
                    T.jsx("div", {
                      className: "flex font-black text-[20pt]",
                      children: "Front-end & libraries",
                    }),
                    T.jsxs("div", {
                      className: "flex gap-3 items-start flex-wrap",
                      children: [
                        T.jsx(ee, { title: "React", image: oA }),
                        T.jsx(ee, { title: "Tailwind", image: uA }),
                        T.jsx(ee, { title: "React Query", image: cA }),
                        T.jsx(ee, { title: "Next UI", image: fA }),
                        T.jsx(ee, { title: "Daisy UI", image: gA }),
                        T.jsx(ee, { title: "Fontawesome", image: hA }),
                        T.jsx(ee, { title: "Formik", image: dA }),
                        T.jsx(ee, { title: "Framer motion", image: mA }),
                        T.jsx(ee, { title: "Apollo", image: pA }),
                        T.jsx(ee, { title: "I18n", image: yA }),
                      ],
                    }),
                  ],
                }),
                T.jsx("img", {
                  className: "h-[15rem]",
                  src: eA,
                  alt: "desktop",
                }),
              ],
            }),
          }),
          T.jsx(ra, {
            icon: Jy,
            left: !0,
            top: !0,
            bottom: !0,
            index: 2,
            children: T.jsx("div", { className: "flex", children: "lol" }),
          }),
          T.jsx(ra, {
            icon: Gy,
            right: !0,
            top: !0,
            bottom: !0,
            index: 3,
            children: T.jsx("div", { className: "flex", children: "lol" }),
          }),
          T.jsx(ra, {
            icon: Uy,
            left: !0,
            top: !0,
            bottom: !0,
            index: 4,
            children: T.jsx("div", { className: "flex", children: "lol" }),
          }),
          T.jsx(ra, {
            icon: Iy,
            right: !0,
            top: !0,
            bottom: !0,
            index: 5,
            children: T.jsx("div", {
              className: "flex h-[20rem] w-[10rem]",
              children: "database",
            }),
          }),
          T.jsx(ra, {
            icon: By,
            left: !0,
            top: !0,
            bottom: !0,
            index: 6,
            children: T.jsx("div", {
              className: "flex h-[20rem] w-[10rem]",
              children: "api",
            }),
          }),
          T.jsx(ra, {
            icon: Yy,
            right: !0,
            top: !0,
            endBottomRight: !0,
            index: 7,
            children: T.jsx("div", {
              className: "flex h-[20rem] w-[10rem]",
              children: "tools",
            }),
          }),
        ],
      }),
    }),
  });
}
function bA() {
  return T.jsx("div", {
    className: "flex flex-1 flex-col",
    children: T.jsx("h1", { children: "experience" }),
  });
}
function xA() {
  return T.jsx("div", {
    className: "flex flex-1 justify-center items-center",
    children: T.jsx("h1", { children: "projects" }),
  });
}
function SA() {
  const { appliedTheme: n } = A.useContext(ga),
    { navigationData: a } = A.useContext(Ds);
  return T.jsxs(RC, {
    children: [
      T.jsx(KC, {}),
      T.jsx(JC, {}),
      T.jsx(QC, {}),
      T.jsx($C, {}),
      T.jsxs("div", {
        className: _t(
          "flex flex-col h-screen",
          n === st.LIGHT ? "main-bg-light" : "main-bg-dark"
        ),
        children: [
          T.jsx(qC, {}),
          T.jsxs(Ay, {
            ref: a.scrollRef,
            className: "scroll-smooth",
            children: [
              T.jsxs(sC, {
                children: [
                  T.jsx(ns, { index: !0, element: T.jsx(ZC, {}) }),
                  T.jsx(ns, { path: "/skills", element: T.jsx(vA, {}) }),
                  T.jsx(ns, { path: "/experience", element: T.jsx(bA, {}) }),
                  T.jsx(ns, { path: "/projects", element: T.jsx(xA, {}) }),
                ],
              }),
              T.jsx(IC, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
class Ho {}
q1(Ho, "THEME_STORAGE_KEY", "THEME");
const c0 = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? st.DARK
      : st.LIGHT,
  TA = () => {
    const n = localStorage.getItem(Ho.THEME_STORAGE_KEY);
    return n === st.LIGHT || n === st.DARK || n === st.SYSTEM ? n : st.SYSTEM;
  },
  CA = () => {
    const n = localStorage.getItem(Ho.THEME_STORAGE_KEY);
    return n === st.SYSTEM
      ? c0()
      : n === st.LIGHT || n === st.DARK
      ? n
      : st.LIGHT;
  };
function AA({ children: n }) {
  const [a, l] = A.useState(TA()),
    [r, o] = A.useState(CA()),
    f = (d) => {
      const h = document.getElementById("theme-provider");
      if (d === st.DARK || d === st.LIGHT)
        (h.className = `bg-background text-foreground ${
          d === st.LIGHT ? "light" : "dark"
        }`),
          o(d);
      else if (d === st.SYSTEM) {
        const m = c0();
        (m === st.LIGHT || m === st.DARK) &&
          ((h.className = `bg-background text-foreground ${
            m === st.LIGHT ? "light" : "dark"
          }`),
          o(m));
      }
      localStorage.setItem(Ho.THEME_STORAGE_KEY, d);
    };
  return (
    A.useEffect(() => {
      f(a);
    }, [a]),
    A.useEffect(() => {
      const d = () => {
          l((m) => (m === st.SYSTEM && f(c0()), m));
        },
        h = window.matchMedia("(prefers-color-scheme: dark)");
      return (
        h.addEventListener("change", d),
        () => {
          h.removeEventListener("change", d);
        }
      );
    }, [a]),
    T.jsx(ga.Provider, {
      value: { themeOption: a, appliedTheme: r, setTheme: l },
      children: n,
    })
  );
}
function EA({ children: n }) {
  const a = A.useRef(null),
    [l, r] = A.useState({ sidebarOpen: !1, scrollRef: a });
  return T.jsx(Ds.Provider, {
    value: { navigationData: l, setNavigationData: r },
    children: n,
  });
}
Ry.createRoot(document.getElementById("root")).render(
  T.jsx(A.StrictMode, {
    children: T.jsx(Ey, {
      children: T.jsx(AA, { children: T.jsx(EA, { children: T.jsx(SA, {}) }) }),
    }),
  })
);
