import { default as SideSelectionMenu } from "./sideSelectionMenu";

export default function NotePadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="basis-1/4 size-full">
        <div className=""></div>
      </div>
      <div className="basis-3/4 mx-2 mt-4">{children}</div>
      <div className="basis-1/4 bg-base-200">
        <div className="size-full mt-4">
          <SideSelectionMenu />
        </div>
      </div>
    </div>
  );
}
