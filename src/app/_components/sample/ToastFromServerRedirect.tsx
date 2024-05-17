import Link from "next/link";

export function ToastFromServerRedirect() {
  return (
    <div>
      <h2 className="text-lg">Toast 🍞 Server Redirect</h2>
      <Link className="text-blue-500" href="/toast-by-query?toast_type=hello">
        /toast-by-query?toast_type=hello
      </Link>
    </div>
  );
}
