import Cascader from './src/index.mjs';

Cascader.install = (app) => {
  app.component(Cascader.name, Cascader);
};
const _Cascader = Cascader;
const ElCascader = _Cascader;

export { ElCascader, _Cascader as default };
//# sourceMappingURL=index.mjs.map
