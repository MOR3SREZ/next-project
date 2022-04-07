import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href='/news/some new shit'>Next js is good</Link>
        </li>
        <li>something else </li>
      </ul>
    </>
  );
};

export default NewsPage;
