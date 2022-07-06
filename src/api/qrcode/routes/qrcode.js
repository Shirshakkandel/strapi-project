module.exports = {
  routes: [
    {
      method: "GET",
      path: "/qrcode",
      handler: "qrcode.generate",
      config: {
        auth: false,
      },
    },
  ],
};
