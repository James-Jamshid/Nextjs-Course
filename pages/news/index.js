// our-domain.com/news
import Link from "next/Link";
import { Fragment } from "react";
function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/sports">Sports</Link>
        </li>
        <li>
          <Link href="/news/CarPage">Cars</Link>
        </li>
        <li>
          <Link href="/news/Detail">Details</Link>
        </li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
