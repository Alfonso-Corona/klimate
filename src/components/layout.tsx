import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted bg-gray-800">
      <header></header>
      <main className="min-h-screen container mx-auto px-4 py-8">{children}</main>
      <footer className="border-t backdrop-blur py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>made by ilion</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
