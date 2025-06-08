import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type ShortcutMap = {
  [key: string]: () => void;
};

/**
 * A custom hook for handling keyboard shortcuts throughout the application
 * @param additionalShortcuts - Optional object containing additional shortcut mappings
 */
export function useKeyboardShortcuts(additionalShortcuts?: ShortcutMap) {
  const navigate = useNavigate();

  useEffect(() => {
    const defaultShortcuts: ShortcutMap = {
      'alt+h': () => navigate('/'),
      'alt+p': () => navigate('/projects'),
      'alt+s': () => navigate('/skills'),
      'alt+e': () => navigate('/experience'),
      'alt+r': () => navigate('/resume'),
      'alt+b': () => navigate('/blog'),
      'alt+c': () => navigate('/contact'),
      'alt+t': () => {
        // Toggle theme
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      },
      '?': () => {
        // Show help dialog
        const event = new CustomEvent('toggle-shortcut-help');
        document.dispatchEvent(event);
      }
    };

    const allShortcuts = { ...defaultShortcuts, ...additionalShortcuts };

    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in inputs
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        (event.target as HTMLElement).isContentEditable
      ) {
        return;
      }

      const key = event.key.toLowerCase();
      const shortcutKey = [
        event.altKey && 'alt',
        event.ctrlKey && 'ctrl',
        event.shiftKey && 'shift',
        event.metaKey && 'meta',
        key
      ]
        .filter(Boolean)
        .join('+');

      const action = allShortcuts[shortcutKey] || allShortcuts[key];
      if (action) {
        event.preventDefault();
        action();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate, additionalShortcuts]);
}