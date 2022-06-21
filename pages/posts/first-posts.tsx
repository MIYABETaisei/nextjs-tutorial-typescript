import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1 className="text-3xl font-bold">First Post</h1>
        <h2>
          <Link href="/">
            <a className="text-xl font-bold text-blue-600">Back to Home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
