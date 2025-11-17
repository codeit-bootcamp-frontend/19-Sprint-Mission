import LinkButton from "@/components/Button/wrappers/LinkButton";
import Modal from "@/components/Modal/Modal";

const ShowLoginModal = () => {
  return (
    <Modal type="SHOW_LOGIN">
      <div className="flex flex-col gap-3 p-8">
        <span>로그인이 필요한 서비스입니다.</span>
        <LinkButton href="/login">로그인 페이지로 이동하기</LinkButton>
      </div>
    </Modal>
  );
};

export default ShowLoginModal;
