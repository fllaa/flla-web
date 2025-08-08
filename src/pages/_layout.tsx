import '../styles.css';

import Navigation from "@/components/Navigation";

import type { ReactNode } from 'react';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: Readonly<RootLayoutProps>) {
  const data = await getData();

  return (
    <div className="min-h-screen bg-background font-['Nunito']">
      <title>Fallah Andy Prakasa - Portfolio</title>
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="section-padding border-t border-border/50">
        <div className="container mx-auto">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © 2025 Fallah. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, Waku, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
