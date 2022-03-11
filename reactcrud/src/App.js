
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Notfound from './component/pages/Notfound';
import Adduser from './component/users/Adduser';
import Edituser from './component/users/Edituser';
import ViewUser from './component/users/ViewUser';

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />

        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/about" element={< About />} />
          <Route exact path="/contact" element={< Contact />} />
          {/* <Route exact path="" element={<Notfound/>}/> */}
          <Route exact path="/user/add" element={< Adduser />} />
          <Route exact path="/user/edit/:id" element={<Edituser />} />
          <Route exact path="/user/veiw/:id" element={<ViewUser />} />
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;
