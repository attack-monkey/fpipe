"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
exports.pipe = function (a, b, c, d, e, f, g, h, i, j) {
    var ba = b ? b(a) : a;
    var cba = c ? c(ba) : ba;
    var dcba = d ? d(cba) : cba;
    var edcba = e ? e(dcba) : dcba;
    var fedcba = f ? f(edcba) : edcba;
    var gfedcba = g ? g(fedcba) : fedcba;
    var hgfedcba = h ? h(gfedcba) : gfedcba;
    var ihgfedcba = i ? i(hgfedcba) : hgfedcba;
    var jihgfedcba = j ? j(ihgfedcba) : ihgfedcba;
    return jihgfedcba;
};
