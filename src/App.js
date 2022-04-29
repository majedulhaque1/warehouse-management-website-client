import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Home/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
import SignUp from './Pages/Home/Login/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
