import React from 'react';
import classes from "./Posts.module.css"
import Post from "./Post/Post";

function Posts(props) {

  let posts = props.postsData.map( (message) => (
    <Post name={message.name} message={message.message} ava={message.ava}/>
  ))


  let newPost = React.createRef();

  let addPost = () => {
    let text = newPost.current.value;
    props.addPost("Артём Поваляев", text, "https://www.boxofficepro.com/wp-content/uploads/2022/12/Avatar-The-Way-of-Water-Loak.jpg");
  }

  let onPostChange = () => {
    let postText = newPost.current.value;
    props.changeNewPostText(postText);
  }

  return (
    <div className={classes.posts}>Мои записи
      <div>
        <textarea onChange={onPostChange} ref={newPost} />
        <button onClick={ addPost }>Запостить</button>
      </div>
      <div>
        {posts}
      </div>
    </div>
  )
}

export default Posts;