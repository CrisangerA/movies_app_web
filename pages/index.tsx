import SCREEN_ROUTES from '@shared/screen.routes';

function Page() {
  return null;
}

export default Page;

export const getServerSideProps = () => ({
  redirect: {
    destination: SCREEN_ROUTES.movies.list,
    permanent: false,
  },
});
