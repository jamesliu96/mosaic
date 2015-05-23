/*!
 * Mosaic - Mosaicify Web Images
 * https://github.com/jamesliu96/Mosaic
 *
 * Copyright (c) 2015 James Liu
 * Released under the MIT license
 */
;(function(c) {
    c.Mosaic = function(a, c) {
        "string" === typeof a && (a = document.getElementById(a));
        var e = c || 10,
            d = new Image;
        d.src = a.src;
        d.onload = function() {
            var b = document.createElement("canvas"),
                c = b.getContext("2d");
            b.width = a.offsetWidth;
            b.height = a.offsetHeight;
            c.drawImage(a, 0, 0, b.width, b.height);
            c.putImageData((function(h, a) {
                for (var f = h.data, m = h.width, n = h.height, k = 0, p = m / a | 0, l, q, g, b, c, e, d; k < p; k++)
                    for (l = 0, q = n / a | 0; l < q; l++) {
                        for (g = [], b = [0, 0, 0], c = 0; c < a; c++)
                            for (d = 0; d < a; d++)
                                e = (l * a + c) * m + k * a + d, b[0] += f[4 * e], b[1] += f[4 * e + 1], b[2] += f[4 * e + 2];
                        g[0] = b[0] / (a * a), g[1] = b[1] / (a * a), g[2] = b[2] / (a * a);
                        for (c = 0; c < a; c++)
                            for (d = 0; d < a; d++)
                                e = (l * a + c) * m + k * a + d, f[4 * e] = g[0], f[4 * e + 1] = g[1], f[4 * e + 2] = g[2];
                    }
                return h;
            })(c.getImageData(0, 0, b.width, b.height), e), 0, 0);
            a.src = b.toDataURL();
        };
    };
})(window);