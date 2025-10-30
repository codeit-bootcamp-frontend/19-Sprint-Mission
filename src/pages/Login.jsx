import { Link, useNavigate } from 'react-router';
import AuthInput from '@/components/auth/authInput/AuthInput';
import Logo from '@/components/auth/logo/Logo';
import SnsLogin from '@/components/auth/snsLogin/SnsLogin';
import Button from '@/components/common/button/Button';
import useAuthForm from '@/hooks/useAuthForm';
import styles from '@/style/page/Auth.module.css';

const Login = () => {
  const navigate = useNavigate();
  const { values, handleChange, handleBlur, errors, isValid } = useAuthForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    // TODO: 미션 11 구현 시 에러 처리 추가
    e.preventDefault();
    navigate('/items', { replace: true });
  };

  return (
    <main className={styles.container}>
      <Logo />
      <form className={styles.form} name="login" onSubmit={handleSubmit}>
        <AuthInput
          id="email"
          label="이메일"
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          autoComplete="email"
          value={values.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors?.email}
        />
        <AuthInput
          id="password"
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          autoComplete="current-password"
          value={values.password}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors?.password}
        />
        <Button type="submit" size="l" disabled={!isValid} full={true}>
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
