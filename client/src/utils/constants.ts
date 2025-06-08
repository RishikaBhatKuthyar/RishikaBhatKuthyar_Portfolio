export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home', shortcut: 'Alt+H' },
  { href: '/projects', label: 'Projects', shortcut: 'Alt+P' },
  { href: '/skills', label: 'Skills', shortcut: 'Alt+S' },
  { href: '/experience', label: 'Experience', shortcut: 'Alt+E' },
  { href: '/resume', label: 'Resume', shortcut: 'Alt+R' },
  { href: '/blog', label: 'Blog', shortcut: 'Alt+B' },
  { href: '/contact', label: 'Contact', shortcut: 'Alt+C' },
] as const;

export const KEYBOARD_SHORTCUTS = {
  HELP: '?',
  THEME_TOGGLE: 'Alt+T',
  HOME: 'Alt+H',
  PROJECTS: 'Alt+P',
  SKILLS: 'Alt+S',
  EXPERIENCE: 'Alt+E',
  RESUME: 'Alt+R',
  BLOG: 'Alt+B',
  CONTACT: 'Alt+C',
} as const;

export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/your-username',
  LINKEDIN: 'https://linkedin.com/in/your-profile',
  TWITTER: 'https://twitter.com/your-handle',
  EMAIL: 'mailto:your.email@example.com',
} as const;

export const ANIMATION_DELAYS = {
  STAGGER_CHILDREN: 0.1,
  FADE_IN: 0.2,
  SLIDE_UP: 0.3,
} as const;

export const THEME_CONFIG = {
  STORAGE_KEY: 'portfolio-theme',
  DEFAULT_THEME: 'system',
  THEMES: ['light', 'dark', 'system'],
} as const;