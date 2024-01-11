import { default as NavigationBar } from "../components/navigation_bar/navigationBar";

export default function NotePadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex">
        <div className="ml-2 mr-2">
          <NavigationBar />
        </div>
        {children}
      </div>
    </section>
  );
}
