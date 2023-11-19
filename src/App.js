import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="wrapper">
          <Header />
          <Navbar />
          <div className='content'>
            <Routes>
              <Route path="/profile" element={<Profile postsData={props.state.postsData} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>} />
              <Route path="/news" element={<News />} />
              <Route path="/dialogs/*" element={<Dialogs userData={props.state.userData} messageData={props.state.messageData} sendMessage={props.sendMessage}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
