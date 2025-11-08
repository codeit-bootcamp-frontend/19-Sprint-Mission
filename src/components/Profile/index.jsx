import profileImg from "@/assets/img/common/profile.svg";

const Profile = () => {
  return (
    <button className="inline-flex rounded-[50%] w-[40px] h-[40px]">
      <img src={profileImg} alt="" />
    </button>
  );
};

export default Profile;
