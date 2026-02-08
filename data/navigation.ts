import type { NavItem, User } from '@/types';

// ============================================
// Sidebar Navigation Items
// ============================================

export const navItems: NavItem[] = [
  { id: 'nav-1', name: 'Dashboard', href: '/', icon: 'layout-dashboard' },
  { id: 'nav-2', name: 'Perspectives', href: '/perspectives', icon: 'layers' },
  { id: 'nav-3', name: 'Tasks', href: '/tasks', icon: 'check-square' },
  { id: 'nav-4', name: 'Documents', href: '/documents', icon: 'file-text' },
  { id: 'nav-5', name: 'Reports', href: '/reports', icon: 'bar-chart-3' },
  { id: 'nav-6', name: 'Users & Roles', href: '/users', icon: 'users' },
];

// ============================================
// Current User (Mock)
// ============================================

export const currentUser: User = {
  id: 'user-1',
  name: 'Mohamed',
  email: 'mohamed@tahwul.com',
  role: 'Admin',
  avatar: '/avatars/mohammad.png',
};
