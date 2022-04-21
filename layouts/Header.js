import Head from "next/head";

export const Header = ({
  title = "Latin Shine | Dance Company",
}) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
