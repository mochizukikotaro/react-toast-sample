import Link from "next/link";

export default function Page2() {
  return (
    <div className="m-10">
      <h1>Page2</h1>
      <Link className="text-blue-500" href="/">
        Back to Top
      </Link>
    </div>
  );
}
