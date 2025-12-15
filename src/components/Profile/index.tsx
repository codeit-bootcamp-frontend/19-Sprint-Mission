import { useState } from "react";
import styles from "./Profile.module.scss";

interface ProfileProps {
  image?: string;
}
const Profile = ({ image }: ProfileProps) => {
  const defaultImage = "/img/common/profile.svg";

  return (
    <button className={styles.profile} disabled={true}>
      <img src={image || defaultImage} alt="" />
    </button>
  );
};

export default Profile;
