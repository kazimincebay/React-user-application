import './App.css';
import User from './Components/User';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar title="User App 2"/>
      <User name="Kazım İncebay" department="Bilgi Teknolojileri" salary={1000} />
      <User name="Ali Veli" department="Finans" salary={2000} />
      <User/>
    </div>
  );
}

export default App;
