 import { BrowserRouter,HashRouter, Routes,Route } from 'react-router-dom';
import CustomHome from './UserSide/CustomHome';
import CustomHistory from './UserSide/CustomHistory';
import Notifications from './Common/Notifications';
import UserChat from './UserSide/UserChat';
import SpecificUser from './AdminSide/SpecificUser';
import Dashboard from './AdminSide/Dashboard';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CustomHome/>}/>
          <Route path='/history' element={<CustomHistory/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/chat' element={<UserChat/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/user/info' element={<SpecificUser/>}/>





        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
