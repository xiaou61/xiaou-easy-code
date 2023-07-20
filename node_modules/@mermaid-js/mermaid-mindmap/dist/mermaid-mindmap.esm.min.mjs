const n = "mindmap", a = (t) => t.match(/^\s*mindmap/) !== null, o = async () => {
  const { diagram: t } = await import("./diagram-definition.071fd575.js");
  return { id: n, diagram: t };
}, r = {
  id: n,
  detector: a,
  loader: o
};
export {
  r as default
};
//# sourceMappingURL=mermaid-mindmap.esm.min.mjs.map
