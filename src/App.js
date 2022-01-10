import logo from "./logo.svg";
import "./App.css";
import ButtonFunctional from "./ButtonFunctional";
import ButtonClassComp from "./ButtonClassComp";
function App() {
  return (
    <div className="App">
      <h1>l4_t4, задание 2: кнопка-инкрементор</h1>
      <div className="buttonBox">
        <h2>Функциональный компонент</h2>
        <ButtonFunctional />
      </div>
      <div className="buttonBox">
        <h2>Классовый компонент</h2>
        <ButtonClassComp />
      </div>
    </div>
  );
}

export default App;
