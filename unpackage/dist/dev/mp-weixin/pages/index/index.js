"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      item: "\u5565",
      list: [
        "\u767D\u7CA5",
        "\u70E7\u70E4",
        "\u706B\u9505",
        "\u732A\u811A\u996D",
        "\u6C99\u62C9",
        "\u80AF\u5FB7\u57FA",
        "\u9EA6\u5F53\u52B3",
        "\u51FA\u95E8\u770B\u5230\u7684\u7B2C\u4E00\u5BB6\u5E97",
        "\u996D\u5802",
        "\u80A0\u7C89",
        "\u62AB\u8428",
        "\u5BFF\u53F8",
        "\u9E21\u7172",
        "\u997A\u5B50",
        "\u5170\u5DDE\u62C9\u9762",
        "\u767D\u9762\u9992\u5934",
        "\u6CE1\u9762"
      ],
      choosing: false
    };
  },
  methods: {
    start() {
      this.choosing = true;
      const total = this.list.length;
      const randomIndex = Math.floor(Math.random() * (total - 0));
      this.item = this.list[randomIndex];
      console.log(randomIndex);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.item),
    b: common_vendor.t($data.choosing ? "\u6362\u4E00\u4E2A" : "\u968F\u673A\u9009\u4E00\u6837"),
    c: common_vendor.o((...args) => $options.start && $options.start(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/111/Documents/HBuilderProjects/\u4ECA\u5929\u5403\u5565/pages/index/index.vue"]]);
wx.createPage(Component);
