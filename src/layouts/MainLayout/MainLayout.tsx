import { ReactNode } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ShortcutHelpDialog from '../../components/ShortcutHelpDialog/ShortcutHelpDialog';

interface MainLayoutProps {
  children: ReactNode;
  toggleTheme: () => void;
}

const MainLayout = ({ children, toggleTheme }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header toggleTheme={toggleTheme} />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
      <ShortcutHelpDialog />
    </div>
  );
};

export default MainLayout;