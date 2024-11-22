import { Route, Router, Routes } from 'react-router-dom';
import ManagerDetails from './Components/Admin/ManagerDetails';
import Navbar from './Components/Common/Navbar';
import Sidebar from './Components/Common/Sidebar';
import Dashboard from './Components/Admin/Dashboard';
import AddManager from './Components/Admin/AddManager';
import ViewEvent from './Components/Admin/ViewEvent';
import AddEvent from './Components/Admin/AddEvent';
import AddLocation from './Components/Admin/AddLocation';
import ViewLocation from './Components/Admin/ViewLocation';
import ViewState from './Components/Admin/ViewState';
import AddState from './Components/Admin/AddState';
import AddService from './Components/Admin/AddService';
import ViewService from './Components/Admin/ViewService';
import UpdateManager from './Components/Admin/UpdateDetails/UpdateManager';
import UpdateService from './Components/Admin/UpdateDetails/UpdateService';
// import Footer from './Components/Common/Footer';
import UpdateLocation from './Components/Admin/UpdateDetails/UpdateLocation';
import Mp from './Components/City/Mp';
import Up from './Components/City/Up';
import Bihar from './Components/City/Bihar';

import Punjab from './Components/City/Punjab';
import Cg from './Components/City/Cg';
import Addvendor from './Form/Addvendor'
import Addenquiry from './Form/Addenquiry'
import Addbookings from './Form/Addbookings'
import Addservice from './Form/Addservice'
import Viewbookings from './Form/Viewbookings'
import Viewservices from './Form/Viewservice'
import Viewvendor from './Form/Viewvendor'
import Main from './componentManager/Manager/common/Main'
import Login from './Components/Admin/Login';
import MainC from './Components/Common/MainC';
import UpdateEvents from './Components/Admin/UpdateDetails/UpdateEvents';
import ViewEnquiry from './Components/Admin/ViewEnquiry';

function App() {
  return <>
      <Sidebar/>

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />

      <Route path="/admin" element={<MainC/>} >
        <Route index element={<Dashboard />}></Route>
        <Route path="manager" element={<ManagerDetails />} />
        <Route path="addManager" element={<AddManager />} />
        <Route path="viewEvent" element={<ViewEvent />} />
        <Route path="addEvent" element={<AddEvent />} />
        <Route path="addLocation" element={<AddLocation />} />
        <Route path="viewLocation" element={<ViewLocation />} />
        <Route path="/admin/updateLocation" element={<UpdateLocation />} />
        <Route path="viewState" element={<ViewState />} />
        <Route path="addState" element={<AddState />} />

        <Route path='mp' element={<Mp />} />
        <Route path='up' element={<Up />} />
        <Route path='cg' element={<Cg />} />
        <Route path='punjab' element={<Punjab />} />
        <Route path='admin/city/bihar' element={<Bihar/>} />


        <Route path="addService" element={<AddService />} />
        <Route path="viewService" element={<ViewService />} />
        <Route path="/admin/updateManager" element={<UpdateManager />} />
        <Route path="/admin/updateEvents" element={<UpdateEvents/>} />
        <Route path="/admin/updateService" element={<UpdateService/>} />
        <Route path='/admin/viewEnquiry' element={<ViewEnquiry/>} />
      </Route>


      <Route path='/manager' element={<MainC />}>
        <Route index element={<Dashboard />}></Route>

        <Route path='addvendor' element={<Addvendor />} />
        <Route path='addenquiry' element={<Addenquiry />} />
        <Route path='addbookings' element={<Addbookings />} />
        <Route path='addservices' element={<Addservice />} />
        <Route path='viewbookings' element={<Viewbookings />} />
        <Route path='viewvendor' element={<Viewvendor />} />
        <Route path='viewservices' element={<Viewservices />} />

      </Route>
    </Routes>
  </>
}

export default App;
