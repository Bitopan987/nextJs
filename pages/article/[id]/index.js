import Link from 'next/link';

const article = ({ article }) => {
  return (
    <section className="container">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <br />
      <Link href="/">
        <a className="btn_primary">Go Back</a>
      </Link>
    </section>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export default article;
