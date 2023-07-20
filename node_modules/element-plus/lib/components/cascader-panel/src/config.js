'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');

const CommonProps = {
  modelValue: [Number, String, Array],
  options: {
    type: Array,
    default: () => []
  },
  props: {
    type: Object,
    default: () => ({})
  }
};
const DefaultProps = {
  expandTrigger: "click",
  multiple: false,
  checkStrictly: false,
  emitPath: true,
  lazy: false,
  lazyLoad: shared.NOOP,
  value: "value",
  label: "label",
  children: "children",
  leaf: "leaf",
  disabled: "disabled",
  hoverThreshold: 500
};
const useCascaderConfig = (props) => {
  return vue.computed(() => ({
    ...DefaultProps,
    ...props.props
  }));
};

exports.CommonProps = CommonProps;
exports.DefaultProps = DefaultProps;
exports.useCascaderConfig = useCascaderConfig;
//# sourceMappingURL=config.js.map
