// ============================================
// Dashboard Types
// ============================================

export type StepStatus =
  | 'completed'
  | 'in-progress'
  | 'pending'
  | 'delayed'
  | 'not-started'
  | 'red'
  | 'blue'
  | 'gray';

export type ChangeDirection = 'up' | 'down' | 'neutral';

export type IconName =
  | 'bar-chart'
  | 'folder'
  | 'check-circle'
  | 'file-text'
  | 'file-check'
  | 'cloud-upload';

export interface StatItem {
  id: string;
  label: string;
  value: string;
  icon: IconName;
  change: ChangeDirection;
}

export interface TimelineStep {
  id: string;
  label: string;
  date: string;
  status: 'completed' | 'delayed' | 'pending';
  position: string;
}

export interface ProgressStep {
  status: StepStatus;
}

export interface ProgressSubItem {
  id: string;
  title: string;
  steps: ProgressStep[];
  href?: string;
}

export interface PerspectiveItem {
  id: string;
  title: string;
  percent: number;
  subItems: ProgressSubItem[];
}

export interface Activity {
  id: string;
  text: string;
  time: string;
  type: 'upload' | 'assignment' | 'creation' | 'update' | 'deletion';
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  score: string;
  avatar?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface GaugeData {
  value: number;
  label: string;
  subLabel?: string;
  color: string;
}

export interface AuditStats {
  overdueStandards: number;
  missingEvidence: number;
}

// ============================================
// Navigation Types
// ============================================

export interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: string;
}

// ============================================
// User Types
// ============================================

export interface User {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  role?: string;
}

// ============================================
// Details Page Types (for future use)
// ============================================

export type EvidenceStatus = 'total' | 'in-progress' | 'under-review' | 'completed';

export interface EvidenceStat {
  id: string;
  label: string;
  count: number;
  status: 'total' | 'under-review' | 'in-progress' | 'completed';
}

export interface DetailsSection {
  id: string;
  title: string;
  content: string | string[]; // Allow array for list items
  type?: 'text' | 'list';
}

export interface DetailsData {
  id: string;
  title: string;
  category: string;
  progress: number;
  evidenceStats: EvidenceStat[];
  sections: DetailsSection[];
  leaders: Leader[];
  relatedRegulations?: string;
  scope?: string;
  evidenceDocuments?: EvidenceDocument[];
  comments?: Comment[];
  evidenceActivities?: EvidenceActivity[];
}

export type DocumentStatus = 'Approved' | 'Pending Review' | 'Rejected' | 'Draft';

export interface EvidenceDocument {
  id: string;
  number: string;
  name: string;
  lead: string;
  preparer: string;
  date: string;
  dueDate: string;
  status: DocumentStatus;
}

export interface Comment {
  id: string;
  user: {
    name: string;
    avatar?: string; // Initial for fallback
  };
  text: string;
  timestamp: string;
}

export interface EvidenceActivity {
  id: string;
  text: string;
  user: string;
  time: string;
  type: 'upload' | 'approval' | 'comment';
}

// ============================================
// Tracking Page Types (for future use)
// ============================================

export type TrackingStatus = 'on-track' | 'at-risk' | 'delayed' | 'completed';

export interface TrackingItem {
  id: string;
  title: string;
  status: TrackingStatus;
  progress: number;
  dueDate: string;
  assignee?: string;
}
