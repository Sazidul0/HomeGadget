
import './App.css';
import QNA from './components/QNA/QNA';
import Shop from './components/Shop/Shop';



function App() {
  return (
    <div className="App extra-style">
      <h1 style={{ paddingTop: "30px" }}>Home Gadget</h1>
      <h2>Chose your Washing machine</h2>
      <Shop></Shop>
      {/* Question and answers */}
      <QNA></QNA>
    </div >
  );
}

export default App;
