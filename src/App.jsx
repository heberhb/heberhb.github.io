import Menu from "./components/Menu.jsx";
import Info from "./components/info.jsx";
import Carrocel from "./components/carrocel.jsx";
import Sobre from "./components/sobre.jsx";

const App = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <Menu />
      <Info />
      <Carrocel />
      <Sobre />
    </div>
  );
};

export default App;
