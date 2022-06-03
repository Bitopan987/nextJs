import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => {
        return <ArticleItem key={index} article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
