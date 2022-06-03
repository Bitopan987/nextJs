import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a className="Nav_link">Home</a>
      </Link>
      <Link href="/blog">
        <a className="Nav_link">Blog</a>
      </Link>
    </nav>
  );
};

export default Navbar;
