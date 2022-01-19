import { useRouter } from "next/router";

function Detail() {
  const router = useRouter();
  console.log(router);
  const [title, id] = router.query.params;
  console.log(title);
  return <h4>{title || "Loading..."}</h4>;
}

export default Detail;
