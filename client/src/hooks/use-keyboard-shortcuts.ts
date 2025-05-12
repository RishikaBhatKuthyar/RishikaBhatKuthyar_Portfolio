import { useEffect } from 'react';
import { useLocation } from 'wouter';

type ShortcutMap = {
  [key: string]: () => void;
};

/**
 * A custom hook for handling keyboard shortcuts throughout the application
 * @param additionalShortcuts - Optional object containing additional shortcut mappings
 */
export function useKeyboardShortcuts(additionalShortcuts?: ShortcutMap) {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Default navigation shortcuts
    const defaultShortcuts: ShortcutMap = {
      // Navigation shortcuts - using Alt + key for accessibility
      'alt+h': () => setLocation('/'),                 // Home
      'alt+p': () => setLocation('/projects'),         // Projects
      'alt+s': () => setLocation('/skills'),           // Skills 
      'alt+e': () => setLocation('/experience'),       // Experience
      'alt+r': () => setLocation('/resume'),           // Resume
      'alt+b': () => setLocation('/blog'),             // Blog
      'alt+c': () => setLocation('/contact'),          // Contact
      
      // Theme toggle - using Alt+t
      'alt+t': () => {
        const html = document.documentElement;
        const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
        if (currentTheme === 'dark') {
          html.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          html.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      },
      
      // Accessibility shortcut to display help dialog - using ?
      '?': () => {
        // We'll implement this dialog separately
        const event = new CustomEvent('toggle-shortcut-help');
        document.dispatchEvent(event);
      }
    };

    // Combine default and additional shortcuts
    const shortcuts = { ...defaultShortcuts, ...additionalShortcuts };

    // Event handler for keydown
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input, textarea, or other editable element
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        (event.target as HTMLElement).isContentEditable
      ) {
        return;
      }

      // Build key combination string
      let combination = '';
      if (event.altKey) combination += 'alt+';
      if (event.ctrlKey) combination += 'ctrl+';
      if (event.metaKey) combination += 'meta+';
      if (event.shiftKey) combination += 'shift+';
      
      // Add the key (lowercase to make it case-insensitive)
      combination += event.key.toLowerCase();

      // Execute the shortcut handler if it exists
      const handler = shortcuts[combination];
      if (handler) {
        event.preventDefault();
        handler();
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Clean up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setLocation, location, additionalShortcuts]);
}