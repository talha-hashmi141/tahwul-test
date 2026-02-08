import type {
  StatItem,
  TimelineStep,
  PerspectiveItem,
  Activity,
  Leader,
  ChartDataPoint,
  GaugeData,
  AuditStats,
} from '@/types';

// ============================================
// Statistics Cards Data
// ============================================

export const stats: StatItem[] = [
  { id: 'stat-1', label: 'Overall Progress', value: '78.65%', icon: 'bar-chart', change: 'up' },
  { id: 'stat-2', label: 'Total Criteria', value: '95', icon: 'folder', change: 'neutral' },
  { id: 'stat-3', label: 'Completed Criteria', value: '52', icon: 'check-circle', change: 'neutral' },
  { id: 'stat-4', label: 'Evidence Documents', value: '386', icon: 'file-text', change: 'neutral' },
  { id: 'stat-5', label: 'Evidence (Completed)', value: '302', icon: 'file-check', change: 'neutral' },
  { id: 'stat-6', label: 'Uploaded To DGA', value: '258', icon: 'cloud-upload', change: 'neutral' },
];

// ============================================
// Timeline Data
// ============================================

export const timelineSteps: TimelineStep[] = [
  { id: 'timeline-1', label: 'Kickoff Workshop', date: 'Mar 17', status: 'completed', position: '5%' },
  { id: 'timeline-2', label: 'Data Collection', date: 'March 18', status: 'completed', position: '21.8%' },
  { id: 'timeline-3', label: 'Initial Phase', date: 'May 8', status: 'delayed', position: '40.6%' },
  { id: 'timeline-4', label: 'Verification', date: 'May 9-July 12', status: 'pending', position: '59.4%' },
  { id: 'timeline-5', label: 'Completion Reviews', date: 'July 13', status: 'pending', position: '76.2%' },
  { id: 'timeline-6', label: 'Cycle Conclusion', date: 'August 21', status: 'pending', position: '92%' },
];

export const timelineProgress = 21.8; // percentage of timeline completed

// ============================================
// Progress Status Grid Data
// ============================================

export const progressStatus: PerspectiveItem[] = [
  {
    id: 'perspective-1',
    title: 'Strategy And Planning',
    percent: 97.78,
    subItems: [
      { id: 'sub-1-1', title: 'Digital Transformation',href:"digital-transformation", steps: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
      { id: 'sub-1-2', title: 'Digital Governance', steps: [{ status: 'completed' }, { status: 'completed' }, { status: 'in-progress' }] },
      { id: 'sub-1-3', title: 'Enterprise Architecture', steps: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
    ],
  },
  {
    id: 'perspective-2',
    title: 'Organization And Culture',
    percent: 70.83,
    subItems: [
      { id: 'sub-2-1', title: 'Digital Culture And Environment', steps: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'completed' }] },
      { id: 'sub-2-2', title: 'Leadership Development', steps: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
      { id: 'sub-2-3', title: 'Skills & Capacity Building', steps: [{ status: 'in-progress' }, { status: 'in-progress' }, { status: 'in-progress' }] },
    ],
  },
  {
    id: 'perspective-3',
    title: 'Operations And Execution',
    percent: 80.0,
    subItems: [
      { id: 'sub-3-1', title: 'Business Processes', steps: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'in-progress' }, { status: 'completed' }] },
    ],
  },
  {
    id: 'perspective-4',
    title: 'Business Continuity',
    percent: 90.59,
    subItems: [
      { id: 'sub-4-1', title: 'Risk Management', steps: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
      { id: 'sub-4-2', title: 'Business Continuity', steps: [{ status: 'completed' }, { status: 'gray' }, { status: 'gray' }, { status: 'completed' }, { status: 'completed' }, { status: 'gray' }, { status: 'completed' }] },
    ],
  },
  {
    id: 'perspective-5',
    title: 'Information Technology',
    percent: 75.0,
    subItems: [
      { id: 'sub-5-1', title: 'Support Systems', steps: [{ status: 'blue' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
      { id: 'sub-5-2', title: 'IT Infrastructure', steps: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'blue' }, { status: 'completed' }, { status: 'completed' }] },
      { id: 'sub-5-3', title: 'Cloud Infrastructure', steps: [{ status: 'completed' }, { status: 'completed' }, { status: 'blue' }] },
    ],
  },
  {
    id: 'perspective-6',
    title: 'Comprehensive Governance',
    percent: 64.44,
    subItems: [
      { id: 'sub-6-1', title: 'Governance Platforms', steps: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'gray' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
    ],
  },
  {
    id: 'perspective-7',
    title: 'Channels And Services',
    percent: 100,
    subItems: [
      { id: 'sub-7-1', title: 'Service Quality', steps: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
      { id: 'sub-7-2', title: 'Digital Channels', steps: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
    ],
  },
  {
    id: 'perspective-8',
    title: 'Beneficiary Centralization',
    percent: 60.0,
    subItems: [
      { id: 'sub-8-1', title: 'User Engagement', steps: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'in-progress' }] },
      { id: 'sub-8-2', title: 'User Relationship', steps: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'in-progress' }] },
      { id: 'sub-8-3', title: 'User Experience', steps: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'completed' }, { status: 'in-progress' }, { status: 'completed' }] },
    ],
  },
  {
    id: 'perspective-9',
    title: 'Government Data',
    percent: 87.5,
    subItems: [
      { id: 'sub-9-1', title: 'Data Governance', steps: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'in-progress' }] },
      { id: 'sub-9-2', title: 'Data Usage & Availability', steps: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'in-progress' }] },
      { id: 'sub-9-3', title: 'Open Data', steps: [{ status: 'completed' }, { status: 'completed' }, { status: 'in-progress' }] },
    ],
  },
  {
    id: 'perspective-10',
    title: 'Research And Innovation',
    percent: 17.65,
    subItems: [
      { id: 'sub-10-1', title: 'Innovation', steps: [{ status: 'red' }, { status: 'red' }, { status: 'red' }, { status: 'red' }] },
      { id: 'sub-10-2', title: 'Creative Solutions', steps: [{ status: 'in-progress' }, { status: 'red' }] },
    ],
  },
];

// ============================================
// Recent Activities Data
// ============================================

export const recentActivities: Activity[] = [
  { id: 'activity-1', text: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled', time: '5 Mins Ago', type: 'upload' },
  { id: 'activity-2', text: 'Task "Review Compliance Files" Was Assigned To Mona Hamed', time: '20 Mins Ago', type: 'assignment' },
  { id: 'activity-3', text: 'New Criterion "5.3 Digital Identity" Was Created By Admin', time: '1 Hour Ago', type: 'creation' },
];

// ============================================
// Top Leaders Data
// ============================================

export const topLeaders: Leader[] = [
  { id: 'leader-1', name: 'Ahmed Al-Ali', role: 'Strategy Perspective', score: '96%', avatar: '/avatars/ahmed.png' },
  { id: 'leader-2', name: 'Sarah Al-Khaled', role: 'Beneficiary Perspective', score: '94%', avatar: '/avatars/sarah.png' },
  { id: 'leader-3', name: 'Mohammad Al-Mansour', role: 'IT Perspective', score: '92%', avatar: '/avatars/mohammad.png' },
];

// ============================================
// Performance Chart Data (12-Month)
// ============================================

export const performanceData: ChartDataPoint[] = [
  { name: 'Jan', value: 88 },
  { name: 'Feb', value: 78 },
  { name: 'Mar', value: 82 },
  { name: 'Apr', value: 42 },
  { name: 'May', value: 88 },
  { name: 'Jun', value: 80 },
  { name: 'Jul', value: 55 },
  { name: 'Aug', value: 88 },
  { name: 'Sept', value: 80 },
  { name: 'Oct', value: 55 },
  { name: 'Nov', value: 88 },
  { name: 'Dec', value: 80 },
];

// ============================================
// Gauge Charts Data
// ============================================

export const complianceGauge: GaugeData = {
  value: 65,
  label: 'Basic Standards 2025',
  color: '#DB1F26', // red-500
};

export const auditReadinessGauge: GaugeData = {
  value: 80,
  label: 'Readiness Level',
  color: '#1EA54E', // green-500
};

// ============================================
// Audit Stats Data
// ============================================

export const auditStats: AuditStats = {
  overdueStandards: 12,
  missingEvidence: 5,
};
