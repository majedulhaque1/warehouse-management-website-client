import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Home/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
import SignUp from './Pages/Home/Login/SignUp/SignUp';
import Login from './Pages/Home/Login/Login/Login';
import { Routes, Route } from 'react-router-dom';
import RecentItems from './Pages/Home/RecentItems/RecentItems';
import Inventory from './Pages/Home/Inventory/Inventory';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddItem from './Pages/AddItem/AddItem';
import ManageItems from './Pages/ManageItems/ManageItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      {/* <AddItem></AddItem> */}
      <ManageItems></ManageItems>
      <Routes>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/inventory/:itemId' element={<Inventory></Inventory>}></Route>
        <Route path='/manage-inventory' element={<ManageInventories></ManageInventories>}></Route>
      </Routes>
      <RecentItems></RecentItems>
    </div>
  );
}

export default App;
