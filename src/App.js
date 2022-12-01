import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Bienvenido a Aguila Wear & Fitness' /> 
      <div classname="container text-center">
      </div>
    </div>
  );
}

export default App;

