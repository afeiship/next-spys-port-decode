/*!
 * name: @feizheng/next-spys-port-decode
 * description: Spys port decode.
 * homepage: https://github.com/afeiship/next-spys-port-decode
 * version: 1.1.0
 * date: 2020-07-01T12:54:11.640Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var encFn = function (p, r, o, x, y, s) {
    y = function (c) {
      return (c < r ? '' : y(parseInt(c / r))) + ((c = c % r) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    }
    if (!''.replace(/^/, String)) {
      while (o--) {
        s[y(o)] = x[o] || y(o)
      }
      x = [function (y) {
        return s[y]
      }]
      y = function () {
        return '\\w+'
      }
      o = 1
    }

    while (o--) {
      if (x[o]) {
        p = p.replace(new RegExp('\\b' + y(o) + '\\b', 'g'), x[o])
      }
    }
    return p
  };

  nx.spysPortDecode = function (inOptions) {
    var result = '';

    eval(
      encFn(inOptions.encKey, 60, 60, inOptions.encValue.split('\u005e'), 0, {})
    );

    result += eval('":" + ' + inOptions.encCode);
    return result.slice(1);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.spysPortDecode;
  }
})();

//# sourceMappingURL=next-spys-port-decode.js.map
