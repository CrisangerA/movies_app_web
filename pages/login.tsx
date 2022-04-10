import { Page } from '@components/index';
import { LoginForm } from '@components/login';
import type { NextPage } from 'next';

const Login: NextPage = () => (
  <Page title='Login' description='Signin'>
    <LoginForm />
  </Page>
);

export default Login;
