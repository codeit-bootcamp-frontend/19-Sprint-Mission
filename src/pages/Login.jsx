import { Link } from 'react-router';
import AuthInput from '@/components/Auth/authInput/AuthInput';
import Logo from '@/components/Auth/logo/Logo';
import SnsLogin from '@/components/Auth/snsLogin/SnsLogin';
import Button from '@/components/common/button/Button';
import styles from '@/style/page/Auth.module.css';

const Login = () => {
  return (
    <main className={styles.container}>
      <Logo />
      <form className={styles.form} name="login">
        <AuthInput
          id="email"
          label="이메일"
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          autoComplete="email"
        />
        <AuthInput
          id="password"
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          autoComplete="current-password"
        />
        <Button size="l" disabled full={true}>
          로그인
        </Button>
      </form>
      <SnsLogin />
      <div className={styles['guide-area']}>
        <span className={styles['guide-text']}>판다마켓이 처음이신가요?</span>
        <Link className={styles['guide-link']} to="/signup">
          회원가입
        </Link>
      </div>
    </main>
  );
};

export default Login;
