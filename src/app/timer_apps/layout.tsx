// import { default as NavigationBar } from "./selectionMenu";
import { default as SideSelectionMenu } from "./sideSelectionMenu";

export default function NotePadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const options = {
    "Hello World": <div>Button</div>,
    option2: <div>Button</div>,
  };
  return (
    <section>
      <div className="flex">
        <div className="ml-2 mr-2">
          <SideSelectionMenu />
        </div>
        <div className="center">{children}</div>
      </div>
    </section>
  );
}
