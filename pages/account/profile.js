import { useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Admin as Layout } from '../../layouts';

const Profile = (props) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/api/auth/signin');
    }
  }, [session, router]);

  if (typeof window === 'undefined') return null;

  if (session) {
    return (
      <Layout>
        <div>
          <p>PROFILE</p>
        </div>
      </Layout>
    );
  }
  return <p>Access Denied... redirecting</p>;
};

export default Profile;

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { session: {} } };
  }
  // if (session.user) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: {
      session,
    },
  };
}
