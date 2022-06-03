import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Errorpage = () => {
  const router = useRouter();
  //   const handleInput = () => {
  //     router.push('/');
  //   };

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <>
      <h1>404 - Not Found!</h1>

      {/* <a onClick={handleInput}>Go Home</a> */}
      {/* <a onClick={() => router.push('/')}>Go Home</a>
      <Link href="/">Go Home</Link> */}
    </>
  );
};

export default Errorpage;
