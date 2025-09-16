import { Link } from 'react-router';
import AuthInput from '@/components/Auth/authInput/AuthInput';
import Logo from '@/components/Auth/logo/Logo';
import SnsLogin from '@/components/Auth/snsLogin/SnsLogin';
import Button from '@/components/common/button/Button';
import styles from '@/style/page/Auth.module.css';

const Signup = () => {
  return (
    <main className={styles.container}>
      <Logo />
      <form className={styles.form} name="signup">
        <AuthInput
          id="email"
          label="이메일"
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          autoComplete="email"
        />
        <AuthInput
          id="nickname"
          label="닉네임"
          name="nickname"
          placeholder="닉네임을 입력해주세요."
          autoComplete="username"
        />
        <AuthInput
          id="password"
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          autoComplete="current-password"
        />
        <AuthInput
          id="confirm-password"
          label="비밀번호 확인"
          name="confirmPassword"
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          autoComplete="new-password"
        />
        <Button size="l" disabled full={true}>
          회원가입
        </Button>
      </form>
      <SnsLogin />
      <div className={styles['guide-area']}>
        <span className={styles['guide-text']}>이미 회원이신가요?</span>
        <Link className={styles['guide-link']} to="/signup">
          로그인
        </Link>
      </div>
    </main>
  );
};

export default Signup;
