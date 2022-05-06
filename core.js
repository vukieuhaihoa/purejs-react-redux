export default function html([first, ...strings], ...values) {
  return values.reduce((prev, cur) => prev.concat(cur, strings.shift()), [first]).join('')
}

export function createStore(reducer) {
  let state = reducer();
  const roots = new Map();

  function render() {
    for(const [root, component] of roots) {
      const output = component();
      root.innerHTML = output;
    }
  }

  return {
    attach(root, component) {
      roots.set(root, component);
      render();
    },
    connect(selector = state => state) {
      return component => {
        return (props, ...args) => {
          return component(Object.assign({}, props, selector(state), ...args))
        }
      };
    },
    dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    }
  }
}