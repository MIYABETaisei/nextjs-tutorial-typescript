export default function Layout({
  home,
  children,
}: {
  home: boolean;
  children: React.ReactNode;
}) {
  return <div className="max-w-lg mt-3 mb-8 mx-auto">{children}</div>;
}
