// import { default as NavigationBar } from "./selectionMenu";
import { default as NavigationBar } from "../components/side_menu/sideMenuDropdown";

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
          <NavigationBar elements={options} />
        </div>
        <div className="center">{children}</div>
      </div>
    </section>
  );
}
