import { ToastOnButtonClick } from "./_components/sample/ToastOnButtonClick";
import { ToastOnLoad } from "./_components/sample/ToastOnLoad";
import { ToastWithNavigation } from "./_components/sample/ToastWithNavigation";

export default function Home() {
  return (
    <div className="m-20">
      <h1 className="m-10 text-xl">Top</h1>
      <div className="flex flex-col gap-8">
        <ToastOnButtonClick />
        <ToastWithNavigation />
        <ToastOnLoad />
      </div>
    </div>
  );
}
