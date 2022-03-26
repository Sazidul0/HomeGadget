
import './App.css';
import QNA from './components/QNA/QNA';
import Shop from './components/Shop/Shop';



function App() {
  return (
    <div className="App">
      <h1>Home Gadget</h1>
      <h2>Chose your Washing machine</h2>
      <Shop></Shop>
      <QNA></QNA>
    </div >
  );
}

export default App;