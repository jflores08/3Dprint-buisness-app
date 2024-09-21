// import Image from "next/image";
import Link from "next/link";

// Import local components
import { ModeToggle } from "./components/mode-toggle";

export default function Home() {
  return (
    <div>
      <ModeToggle/>
      <h1>Hello From the Home Page</h1>
      <h2>This is an H2</h2>
      <h3>This is an H3</h3>
      <h4>This is an H4</h4>
      <Link href={"/"}>This is a Link component</Link>
    </div>
  );
}
