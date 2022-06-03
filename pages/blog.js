import styles from '../styles/blog.module.css';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import { POSTS } from '../utils/constants';

export default function Blog() {
  return (
    <div className="container">
      <Navbar />
      <h1 className={styles.title}>Welcome to Blog Page</h1>
      <p className={`${styles.text} `}>Blogs by Bitopan</p>
      <article className={styles.flex}>
        {POSTS.map(({ image, title }) => (
          <div>
            <Image src={image} width="300" height="200"></Image>
            <p>{title}</p>
          </div>
        ))}
      </article>
      <Form />
    </div>
  );
}
