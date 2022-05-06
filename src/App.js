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
import MyItems from './Pages/MyItems/MyItems';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Loading from './Pages/Loading/Loading';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <AddItem></AddItem> */}
      {/* <ManageItems></ManageItems> */}
      {/* <MyItems></MyItems> */}
      {/* <ManageInventories></ManageInventories> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/useradditem' element={<AddItem></AddItem>}></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/inventory/:itemId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/manage-inventory' element={<ManageInventories></ManageInventories>}></Route>
      </Routes>
      {/* <Loading></Loading> */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
