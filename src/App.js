import './App.css';
import Cart from './components/Cart/Cart';
import NavPc from './components/Nav/Nav';
import SimpleCount from './components/SrvCount/SimpleCount';
import SrvList from './components/SrvMap/SrvList';

function App() {
  return (
    <>
      <NavPc />
      <SrvList />
      <SimpleCount />
      <Cart />
    </>
  );
}

export default App;
