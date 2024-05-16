import Link from "next/link";
import { Page3Toast } from "./_components/Page3Toast";

export default function Page3() {
  return (
    <div className="m-10">
      <Page3Toast />
      <h1>Page3</h1>
      <Link className="text-blue-500" href="/">
        Back to Top
      </Link>
    </div>
  );
}
