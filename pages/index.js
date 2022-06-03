import Navbar from '../components/Navbar';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  // console.log(articles, 'tesssttt');
  return (
    <section className="container">
      <Navbar />
      <div>
        <h1>Articles :</h1>
        <ArticleList articles={articles} />
      </div>
    </section>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
