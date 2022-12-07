import { Home } from "./components/pages/Home/Home";
import {Route, Routes} from 'react-router-dom'
import { Header } from "./components/layouts/Header/Header";
import { ContactUs } from "./components/pages/ContactUs/ContactUs";
function App() {

  return (
    <div>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ContactUs" element={<ContactUs/>}></Route>
        <Route path="*" ></Route>
      </Routes>
    </div>
  )
  }

export default App;
