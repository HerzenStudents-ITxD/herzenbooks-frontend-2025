import { Header } from './Header';
import { Footer } from './Footer';

import { Breadcrumbs } from "./Breadcrumbs";



export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[rgb(239,242,245)]" style={{ fontFamily: 'Akrobat' }}>
      <Header />
      <main className="flex-grow  bg-[rgb(239,242,245)]"style={{ fontFamily: 'Akrobat' }}>
      <Breadcrumbs />
        {children} 
      </main>
      <Footer />
    </div>
  );
};