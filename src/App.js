import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting='Danila'/> 
    </div>
  );
}

export default App;

