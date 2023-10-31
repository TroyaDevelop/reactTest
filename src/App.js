import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  </div>
  );
}

export default App;
