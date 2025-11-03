import { Link, useNavigate } from 'react-router';
import AuthInput from '@/components/auth/authInput/AuthInput';
import Logo from '@/components/auth/logo/Logo';
import SnsLogin from '@/components/auth/snsLogin/SnsLogin';
import Button from '@/components/common/button/Button';
import useAuthForm from '@/hooks/useAuthForm';
import styles from '@/style/page/Auth.module.css';

const Signup = () => {
  const navigate = useNavigate();
  const { values, handleChange, handleBlur, errors, isValid } = useAuthForm({
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login', { replace: true });
  };
  return (
    <main className={styles.container}>
      <Logo />
      <form className={styles.form} name="signup" onSubmit={handleSubmit}>
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
          id="nickname"
          label="닉네임"
          name="nickname"
          placeholder="닉네임을 입력해주세요."
          autoComplete="username"
          value={values.nickname}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors?.nickname}
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
        <AuthInput
          id="confirm-password"
          label="비밀번호 확인"
          name="confirmPassword"
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          autoComplete="new-password"
          value={values.confirmPassword}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors?.confirmPassword}
        />
        <Button type="submit" size="l" disabled={!isValid} full={true}>
          회원가입
        </Button>
      </form>
      <SnsLogin />
      <div className={styles['guide-area']}>
        <span className={styles['guide-text']}>이미 회원이신가요?</span>
        <Link className={styles['guide-link']} to="/login">
          로그인
        </Link>
      </div>
    </main>
  );
};

export default Signup;
