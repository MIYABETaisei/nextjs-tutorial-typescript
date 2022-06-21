import Layout from "components/layout";
import { getSortedPostsData } from "lib/posts";

type Posts = {
  title: string;
  id: string;
  date: string;
};

export default function Home({ allPostsData }: { allPostsData: Posts[] }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className="mt-5">
        <h2 className="text-3xl font-bold">Blog</h2>
        <ul className="mt-4">
          {allPostsData.map(({ id, date, title }) => (
            <li className="text-xl mt-3" key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
