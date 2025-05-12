import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ShortcutGroup {
  title: string;
  shortcuts: { key: string; description: string }[];
}

const ShortcutHelpDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Shortcut groups
  const shortcutGroups: ShortcutGroup[] = [
    {
      title: "Navigation",
      shortcuts: [
        { key: "Alt + H", description: "Go to Home page" },
        { key: "Alt + P", description: "Go to Projects page" },
        { key: "Alt + S", description: "Go to Skills page" },
        { key: "Alt + E", description: "Go to Experience page" },
        { key: "Alt + R", description: "Go to Resume page" },
        { key: "Alt + B", description: "Go to Blog page" },
        { key: "Alt + C", description: "Go to Contact page" },
      ]
    },
    {
      title: "Accessibility",
      shortcuts: [
        { key: "Alt + T", description: "Toggle dark/light theme" },
        { key: "?", description: "Show this help dialog" },
      ]
    }
  ];

  // Event listener for toggling the dialog
  useEffect(() => {
    const handleToggleDialog = () => {
      setIsOpen(prevState => !prevState);
    };

    document.addEventListener('toggle-shortcut-help', handleToggleDialog);
    
    return () => {
      document.removeEventListener('toggle-shortcut-help', handleToggleDialog);
    };
  }, []);

  // Also add keyboard shortcut for ? key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === '?' &&
        !(event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement ||
          (event.target as HTMLElement).isContentEditable)
      ) {
        event.preventDefault();
        setIsOpen(prevState => !prevState);
      }

      // Close dialog with Escape key
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Keyboard Shortcuts</DialogTitle>
          <DialogDescription>
            Use these keyboard shortcuts to navigate the portfolio efficiently
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {shortcutGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-lg font-semibold mb-3">{group.title}</h3>
              <div className="space-y-2">
                {group.shortcuts.map((shortcut, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-gray-800 dark:text-gray-200">{shortcut.description}</span>
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-sm">
                      {shortcut.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Press <kbd className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono">?</kbd> anytime to show this dialog
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShortcutHelpDialog;