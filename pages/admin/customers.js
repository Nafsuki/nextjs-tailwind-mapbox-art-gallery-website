import prisma from '../../lib/prisma';
import { Admin as Layout } from "../../layouts";

export const getStaticProps = async () => {
  const users = await prisma.user.findMany({
    where: { paid: false },
    select: {
      email: true,
      paid: true,
      name: true,
    },
  });
  return { props: { users } };
};

const Customers = (props) => {
 
  return (
    <Layout>
      <h1>Customers</h1>
        <div>
          {props.users.map((user) => (
            <div key={user.id} className="user">
              <p>
                <span>Name: {user.name} {' '} |</span>
                {user.paid ? <span>{' '} Status: Paid {' '}</span> : <span>{' '} Status: Not Paid {' '}</span>}
                <span>| email: {user.email}</span>
              </p>
            </div>
          ))}
        </div>
    </Layout>
  )
}

export default Customers;