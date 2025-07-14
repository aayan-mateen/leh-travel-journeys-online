
import React from 'react';
import Navigation from './Navigation';
import WhatsAppWidget from './WhatsAppWidget';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
