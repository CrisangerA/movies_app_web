import { TextInput } from '@components/@form';
import useAuth from '@hooks/useAuth';
import { useState } from 'react';
import styles from './loginform.module.css';

const LoginForm = () => {
  const { signIn, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Email'
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      <TextInput
        placeholder='Password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />
      {loading && <p>Loading...</p>}
      <button type='submit' className={styles.button} disabled={loading}>
        Signin
      </button>
    </form>
  );
};

export default LoginForm;
