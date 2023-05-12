import { useRouter } from "next/router";

const pageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
  return (
    <>
      <h1>this is my {pageNumber} blog </h1>
    </>
  )
}

export default pageNo;
