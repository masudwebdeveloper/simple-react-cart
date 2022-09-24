import './App.css';
import Cosmatics from './components/Cosmatics/Cosmatics';
import Products from './components/Products/Products';
import { add } from './components/utilities/Utilities';
const color = {
  color: "red",
  fontSize: "2rem",
  fontWeight: '700',
}
function App() {
  const first = 10;
  const second = 12;
  const total = add(first, second);
  return (
    <div className="App">
      {/* <p style={color}>Additional : {total}</p> */}
      
      <Products></Products>
    </div>
  );
}

export default App;
