import { default as SideSelectionMenu } from "./sideSelectionMenu";

export default function NotePadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex">
        <div className="ml-2 mr-2">
          <SideSelectionMenu />
        </div>
        <div className="text-center">{children}</div>
      </div>
    </section>
  );
}
