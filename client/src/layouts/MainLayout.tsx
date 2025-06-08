import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShortcutHelpDialog from "@/components/ShortcutHelpDialog";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  useKeyboardShortcuts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ShortcutHelpDialog />
    </div>
  );
}