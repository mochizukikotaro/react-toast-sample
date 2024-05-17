import Link from "next/link";
import { ToastByQuery } from "./_components/ToastByQuery";

export default function ToastByQueryPage() {
  return (
    <div className="m-20">
      <ToastByQuery />
      <p className="m-10">
        If ?toast_type=hello exists, display a toast.
        <br />
        After the toast is displayed, remove the toast_type query.
      </p>
      <Link className="text-blue-500" href="/">
        Back to Top
      </Link>
    </div>
  );
}
