const requireOptions = import.meta.globEager("./**/doc.md");

function loadComponent(Vue, opts, requireComponents, prefix: string = "Box") {
  const install = function (Vue, opts = {}) {
    for (let fileName in requireComponents) {
      const componentConfig = requireComponents[fileName];
      const component = componentConfig.default || componentConfig;
      let componentName = (
        component["extendOptions"] ? component["extendOptions"] : component
      ).name;
      if (false == componentName.includes(prefix)) {
        componentName = prefix + componentName;
      }
      Vue.component(componentName, component);
    }
  };
  install(Vue, opts);
}

const install = function (Vue, opts = { option: false }) {
  loadComponent(Vue, opts, requireOptions, "BoxEchartDoc");
};

export default {
  install,
};
