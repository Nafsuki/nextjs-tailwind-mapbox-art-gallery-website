import { useEffect } from 'react';

import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router'

export default function Test() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(session)) {
      router.push('/api/auth/signin');
    }
  }, [session, router])

  if (typeof window === "undefined") return null

  if (session) {
    return (
      <>
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>
      </>
    )
  }


  return <p>Access Denied</p>
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  }
}