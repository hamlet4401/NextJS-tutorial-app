import { default as SideMenu } from "./sideMenu";

export default function NotePadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex">
        <div className="ml-2 mr-2">
          <SideMenu />
        </div>
        <div className="text-center">{children}</div>
      </div>
    </section>
  );
}
