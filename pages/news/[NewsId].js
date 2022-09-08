// our-domain.com/news
import { useRouter } from "next/router";
function IdlPage() {
  const router = useRouter();
  const NewsId = router.query.NewsId;
  //   back end dan kelaigan API malumotlar shu yerdan requet qilib olinadi
  return <h1>The Id Page</h1>;
}
export default IdlPage;
