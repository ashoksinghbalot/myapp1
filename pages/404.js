// import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ErroPage = () => {
    const router = useRouter();

    const handleInpt = () => {
        router.push("/");
    };

    useEffect(() => {
        setTimeout(() => {
            router.push("/");    
        }, 3000);
        
    }, []);

  return (
    <>

    
    <div>
        <div>
            <div>
                <h1>404</h1>
            </div>

            <h2>we are sorry, page not found </h2>

            <p>this page u are looking might be removed</p>
            {/* <Link href={"/"}>Back to home page</Link> */}

            <a onClick={handleInpt}>back to home</a>
        </div>

    </div>  
    </>
  )
}

export default ErroPage;
