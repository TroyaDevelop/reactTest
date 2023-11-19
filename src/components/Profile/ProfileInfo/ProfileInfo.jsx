import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return(
        <div className={classes.profileWrapper}>
        <img src="https://media.zenfs.com/en/variety.com/98dd77acddd034540682113391c0d902" alt="Аватарка" />
        <div className={classes.profile_info}>
          <h2>Валерия Воронцова</h2>
          <p><i>"Ты можешь ахуенно петь, ахуенно рисовать, ты можешь делать ахуенно что угодно,<br />но если ты не умеешь создавать скандалы вокруг себя, у тебя не будет миллиона подписчиков."</i></p>
          <p><b>Возраст: 23</b></p>
          <p><b>Город: Екатерингбург</b></p>
        </div>
      </div>
    )
}

export default ProfileInfo;