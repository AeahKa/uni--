"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      item: "\u5565",
      buttonText: "\u968F\u673A\u9009\u4E00\u6837"
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.item),
    b: common_vendor.t($data.buttonText)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/111/Documents/HBuilderProjects/\u4ECA\u5929\u5403\u5565/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
