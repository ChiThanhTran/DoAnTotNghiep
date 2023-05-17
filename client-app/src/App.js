import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShowPost from './pages/ShowPost';
import ShowCategoryPost from './pages/ShowCategoryPost';
import ManagerCategory from './pages/manager/ManagerCategory';
import ManagerTag from './pages/manager/ManagerTag';
import Register from './pages/login/Register';
import Login from './pages/login/Login';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/post/:id" element={<ShowPost />} />
      <Route path="/category/:id" element={<ShowCategoryPost />} />
      <Route path="/managercategory" element={<ManagerCategory />} />
      <Route path="/managertag" element={<ManagerTag />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
export default App;
