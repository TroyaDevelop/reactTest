import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, changeNewPostText, sendMessage } from './components/redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerender(state) {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} sendMessage={sendMessage} changeNewPostText={changeNewPostText} />
    </React.StrictMode>
  );
}

export default rerender;
