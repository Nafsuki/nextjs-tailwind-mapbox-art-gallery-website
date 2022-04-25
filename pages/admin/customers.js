import { useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import prisma from '../../lib/prisma';
import { Admin as Layout } from '../../layouts';
import DataTable from '../../components/DataTable';

const tableHeader = {
  header1: 'Email',
  header2: 'Status',
  header3: 'Name',
  header4: 'Created',
}

const caption = "Latin Shine Registered Customers";

const Customers = (props) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/api/auth/signin');
    }
    console.log('session', session);
  }, [session, router]);

  if (typeof window === 'undefined') return null;

  if (session) {
    return (
      <Layout>
        <div>
          <DataTable caption={caption} header={tableHeader} rows={props.users} />
        </div>
      </Layout>
    );
  }
  return <p>Access Denied... redirecting</p>;
};

export default Customers;

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }
  if (session) {
    if (session.user.admin === false) {
      return {
        redirect: {
          destination: '/account/profile',
          permanent: false,
        },
      }
    }
  }

  let users = await prisma.user.findMany({
    where: { paid: false },
    select: {
      email: true,
      paid: true,
      name: true,
      admin: true,
      createdAt: true,
    },
  });
  users.map((item) => {
    item.createdAt = item.createdAt.toString();
  });

  return {
    props: {
      users,
      session,
    },
  };
}
