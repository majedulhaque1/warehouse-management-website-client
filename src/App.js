import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Home/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
    </div>
  );
}

export default App;
