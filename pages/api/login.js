// import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  // const { email, firstName, lastName, telephone, eName, eContact } = req.body;

  // const session = await getSession({ req });
  const credentials = req.body.username;
  const user = await prisma.user.findUnique({
    where: {
      email: credentials,
    },
  })
  
  // By ID
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: 99,
  //   },
  // })
  if (user) { return res.json(user); };
  return res.json({error: true});
}