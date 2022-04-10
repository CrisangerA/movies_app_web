import { TextInput } from '@components/@form';
import styles from './loginform.module.css';

const LoginForm = () => (
  <div className={styles.container}>
    <TextInput placeholder='Email' type='email' />
    <TextInput placeholder='Password' type='password' />
    <button type='submit' className={styles.button}>
      Signin
    </button>
  </div>
);

export default LoginForm;
