import { useState, useEffect } from "react";
import './ShortcutHelpDialog.module.css';

interface ShortcutGroup {
  title: string;
  shortcuts: { key: string; description: string }[];
}

const ShortcutHelpDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  
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

  useEffect(() => {
    const handleToggleDialog = () => {
      setIsOpen(prevState => !prevState);
    };

    document.addEventListener("toggle-shortcut-help", handleToggleDialog);
    
    return () => {
      document.removeEventListener("toggle-shortcut-help", handleToggleDialog);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "?" &&
        !(event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement ||
          (event.target as HTMLElement).isContentEditable)
      ) {
        event.preventDefault();
        setIsOpen(prevState => !prevState);
      }

      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <div className="dialog-header">
          <h2 className="dialog-title">Keyboard Shortcuts</h2>
          <button onClick={() => setIsOpen(false)} className="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="dialog-description">
          Use these keyboard shortcuts to navigate the portfolio efficiently
        </p>

        <div className="shortcuts-container">
          {shortcutGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="shortcut-group">
              <h3 className="group-title">{group.title}</h3>
              <div className="shortcuts-list">
                {group.shortcuts.map((shortcut, index) => (
                  <div key={index} className="shortcut-item">
                    <span className="shortcut-description">{shortcut.description}</span>
                    <kbd className="shortcut-key">
                      {shortcut.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="dialog-footer">
          Press <kbd className="footer-key">?</kbd> anytime to show this dialog
        </div>
      </div>
    </div>
  );
};

export default ShortcutHelpDialog;