import classes from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <Posts postsData={props.postsData} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>
    </div>
  )
}

export default Profile;