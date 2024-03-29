import { default as SideSelectionMenu } from "./sideSelectionMenu";

export default function NotePadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="basis-1/4 bg-base-200">
        <div className="">
          <SideSelectionMenu />
        </div>
      </div>
      <div className="basis-3/4">{children}</div>
      <div className="basis-1/4"></div>
    </div>
  );
}
