import Link from "next/link";
const Navbar = () => {
  return (
    <>
    <nav>
      <ul>
        <Link href={"/"}>home</Link>

        <Link href={"/about"}>about</Link>

        <Link href={"/contact"}>contact</Link>

        <Link href={"/blog"}>blog</Link>

        <Link href={"/product"}>product</Link>
      </ul>

    </nav>
    </>
  )
};
export default Navbar;
