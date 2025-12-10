import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <button className={styles.profile}>
      <img src="/img/common/profile.svg" alt="" />
    </button>
  );
};

export default Profile;
