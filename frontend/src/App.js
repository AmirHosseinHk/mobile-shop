import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {
  const router=useRoutes(routes)
  return (
    <div>
    <Sidebar />
    <div className="main">
    <Header />
    {router}
    </div>
    </div>
  );
}

export default App;
