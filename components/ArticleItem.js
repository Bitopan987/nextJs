import Link from 'next/link';

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a>
        <p className="article_title">{article.title}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
