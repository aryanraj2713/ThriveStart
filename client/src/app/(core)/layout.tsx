import { Nav } from '@/components/nav';

export default function CoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <section className="h-full pt-16">{children}</section>
    </>
  );
}
