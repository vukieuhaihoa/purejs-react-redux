import html from "../core.js";
import { connect } from "../store.js";

function App(props) {
  console.log(props);
  const {cars} = props;
  return html`
  <ul>
  ${cars.map(car => `<li>${car}</li>`)}
  </ul>
  <button onClick="dispatch('ADD', 'xxx')">
  Add car
  </button>
  `
}

const result = connect()(App);

export default result;