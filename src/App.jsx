

import './App.css'
import Dashboard from './component/Dashboard/Dashboard';
import Navbar from './component/NavBar/Navbar';
import PhoneBar from './component/PhoneBar/PhoneBar';
import PriceList from './component/PriceList/PriceList';


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
  
    </div>
  )
}

export default App
