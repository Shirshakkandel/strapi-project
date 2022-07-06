"use strict";
const QRCode = require("qrcode-generator");

module.exports = {
  generate: async (ctx, next) => {
    try {
      const { data } = ctx.request.query;
      const qr = QRCode(3, "H");
      qr.addData(data);
      qr.make();
      const qrImage = qr.createDataURL(8);
      // ctx.body = `<img src="${qrImage}" style="height:800px" />`;
      ctx.body = { data: qrImage };
    } catch (err) {
      ctx.body = err;
    }
  },
};
