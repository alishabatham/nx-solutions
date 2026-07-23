import { 
  GraduationCap, Building2, Factory, Briefcase, 
  Truck, Building, Home, ShoppingCart, 
  Landmark, Plane, Train, Zap,
  School, Users, Activity,
  KeySquare, Car, BookOpen, UserX,
  Camera, ShieldAlert, PieChart, Lock,
  AlertTriangle, DoorOpen, ShieldX, Stethoscope, FileText, Calendar, Ticket, Pill, UserCheck, RefreshCw, Bed, HeartPulse, Stethoscope as TreatmentIcon, Home as DischargeIcon, Siren, GitFork
} from 'lucide-react';

export const IconMap = {
  GraduationCap, Building2, Factory, Briefcase,
  Truck, Building, Home, ShoppingCart,
  Landmark, Plane, Train, Zap,
  School, Users, Activity,
  KeySquare, Car, BookOpen, UserX,
  Camera, ShieldAlert, PieChart, Lock,
  AlertTriangle, DoorOpen, ShieldX, Stethoscope, FileText, Calendar, Ticket, Pill, UserCheck, RefreshCw, Bed, HeartPulse, Siren, GitFork
};

export const industries = [
  { id: 'education',     name: 'Education',    subtitle: 'Smart Campus & Institution Automation', icon: 'GraduationCap', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80' },
  { id: 'healthcare',    name: 'Healthcare',   subtitle: 'Smart Hospital & Patient Safety',       icon: 'Activity',      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
  { id: 'manufacturing', name: 'Manufacturing',subtitle: 'Smart Factory & Industrial AI',         icon: 'Factory',       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80' },
  { id: 'corporate',     name: 'Corporate',    subtitle: 'Intelligent Office Automation',         icon: 'Briefcase',     image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
  { id: 'logistics',     name: 'Logistics',    subtitle: 'Smart Fleet & Warehouse',               icon: 'Truck',         image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
  { id: 'smart-city',    name: 'Smart City',   subtitle: 'Urban AI & Public Safety',              icon: 'Building',      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80' },
  { id: 'smart-society', name: 'Smart Society',subtitle: 'Residential Security & Automation',    icon: 'Home',          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { id: 'retail',        name: 'Retail',       subtitle: 'Intelligent Store Management',          icon: 'ShoppingCart',  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80' },
  { id: 'banking',       name: 'Banking',      subtitle: 'Secure Financial & Operations',        icon: 'Landmark',      image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&q=80' },
  { id: 'airport',       name: 'Airport',      subtitle: 'Smart Passenger & Terminal Security',  icon: 'Plane',         image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80' },
  { id: 'railway',       name: 'Railway',      subtitle: 'Intelligent Station Management',       icon: 'Train',         image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80' },
  { id: 'energy',        name: 'Energy',       subtitle: 'Utility Monitoring & Protection',      icon: 'Zap',           image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80' },
];

export const domains = {
  'education': [
    { id: 'college',    name: 'College',           subtitle: 'AI Powered Campus Management',    icon: 'Building2',      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80' },
    { id: 'school',     name: 'School',            subtitle: 'Smart School Operations',         icon: 'School',         image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80' },
    { id: 'university', name: 'University',        subtitle: 'Intelligent University Security', icon: 'GraduationCap',  image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80' },
    { id: 'coaching',   name: 'Coaching',          subtitle: 'Student Monitoring Solution',     icon: 'Users',          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80' },
  ],
  'healthcare': [
    { id: 'hospital',   name: 'Hospital',          subtitle: 'Smart Hospital & Patient Safety', icon: 'Activity',      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
  ]
};

export const areas = {
  'college': [
    { id: 'main-gate',      name: 'Main Gate',      subtitle: 'Secure Entry Management',     icon: 'DoorOpen',   image: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&q=80' },
    { id: 'parking',        name: 'Parking',        subtitle: 'Vehicle Monitoring',           icon: 'Car',        image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80' },
    { id: 'library',        name: 'Library',        subtitle: 'Library Security',             icon: 'BookOpen',   image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80' },
    { id: 'academic-block', name: 'Academic Block', subtitle: 'Student Movement Control',    icon: 'Building2',  image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=600&q=80' },
  ],
  'hospital': [
    { id: 'main-gate',      name: 'Main Gate & Security Management', subtitle: 'Secure Gate Access & Perimeter Control', icon: 'DoorOpen', image: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&q=80' },
    { id: 'opd',            name: 'OPD (Outpatient Management)',      subtitle: 'Outpatient Registration & Queue Control', icon: 'Stethoscope', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80' },
    { id: 'ipd',            name: 'IPD (Inpatient Management)',       subtitle: 'Inpatient Admission & Ward Management',    icon: 'Bed', image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&q=80' },
    { id: 'emergency',      name: 'Emergency & Trauma Management',    subtitle: 'Rapid Triage & Emergency Response',        icon: 'Siren', image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&q=80' },
  ]
};

export const modules = {
  'main-gate': [
    { id: 'visitor-management',        name: 'Visitor Management',         subtitle: 'Visitor Verification & Pass Generation', icon: 'Users',       image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80' },
    { id: 'vehicle-entry-management',   name: 'Vehicle Entry Management',  subtitle: 'Smart Vehicle Entry & Emergency Priority',icon: 'Car',         image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80' },
    { id: 'staff-entry-management',     name: 'Staff Entry Management',    subtitle: 'Biometric & Smart ID Workforce Entry',   icon: 'UserX',       image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
    { id: 'access-control-management',  name: 'Access Control Management', subtitle: 'Restricted Area Access & Security Control', icon: 'Lock',      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80' },
    { id: 'security-surveillance',      name: 'Security Surveillance',     subtitle: 'AI CCTV Premises & Threat Monitoring',   icon: 'Camera',    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
    { id: 'emergency-gate-management',  name: 'Emergency Gate Management',  subtitle: 'Rapid Ambulance Access & Lockdown Control',icon: 'AlertTriangle',image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&q=80' },
  ],
  'opd': [
    { id: 'patient-registration',       name: 'Patient Registration',       subtitle: 'Digital UHID & Registration Management', icon: 'FileText',    image: 'https://images.unsplash.com/photo-1576091160585-f86a2f7c00e6?w=600&q=80' },
    { id: 'appointment-management',     name: 'Appointment Management',     subtitle: 'AI Doctor Scheduling & Slot Optimization',icon: 'Calendar',    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80' },
    { id: 'opd-queue-management',       name: 'OPD Queue Management',       subtitle: 'Digital Token & Waiting Time Optimization',icon: 'Ticket',     image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
    { id: 'doctor-consultation',        name: 'Doctor Consultation',        subtitle: 'Digital EMR & Clinical Consultation',   icon: 'UserCheck',   image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
    { id: 'prescription-management',    name: 'Prescription Management',    subtitle: 'Digital E-Prescription & Pharmacy Link',icon: 'Pill',        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80' },
    { id: 'follow-up-management',       name: 'Follow-up Management',       subtitle: 'Treatment Progress & Follow-up Tracking',icon: 'RefreshCw',   image: 'https://images.unsplash.com/photo-1576091160585-f86a2f7c00e6?w=600&q=80' },
  ],
  'ipd': [
    { id: 'patient-admission',          name: 'Patient Admission',          subtitle: 'Digital Inpatient Admission & Records',  icon: 'FileText',    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
    { id: 'bed-management',             name: 'Bed Management',             subtitle: 'Smart Bed Allocation & Real-time Status',icon: 'Bed',         image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&q=80' },
    { id: 'ward-management',            name: 'Ward Management',            subtitle: 'Ward Occupancy & Patient Room Assignment',icon: 'Building2',   image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80' },
    { id: 'nursing-care-management',    name: 'Nursing Care Management',    subtitle: 'Digital Nursing Notes & Vitals Tracking',icon: 'HeartPulse',  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
    { id: 'inpatient-treatment-management', name: 'Inpatient Treatment Management', subtitle: 'Doctor Rounds, Clinical Orders & Progress', icon: 'Stethoscope', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
    { id: 'patient-discharge-management', name: 'Patient Discharge Management', subtitle: 'Discharge Summary, Clearance & Transition', icon: 'Home', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
  ],
  'emergency': [
    { id: 'emergency-patient-registration', name: 'Emergency Patient Registration', subtitle: 'Rapid Digital Registration & Temp UHID', icon: 'Siren', image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&q=80' },
    { id: 'triage-management',           name: 'Triage Management',           subtitle: 'Digital Triage Prioritization & Red/Yellow Flags', icon: 'GitFork', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
  ]
};

export const problems = {
  'visitor-management': [
    { id: 'unauthorized-visitor', name: 'Unauthorized Visitor', subtitle: 'Detect and prevent unauthorized visitors from entering restricted hospital areas', icon: 'ShieldX', image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&q=80' }
  ],
  'vehicle-entry-management': [
    { id: 'vehicle-entry-management', name: 'Vehicle Entry Management', subtitle: 'Manage & monitor hospital vehicle entry to ensure secure access', icon: 'Car', image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80' }
  ],
  'staff-entry-management': [
    { id: 'staff-entry-management', name: 'Staff Entry Management', subtitle: 'Manage hospital staff entry by verifying identity and attendance', icon: 'UserX', image: 'https://images.unsplash.com/photo-1576091160585-f86a2f7c00e6?w=600&q=80' }
  ],
  'access-control-management': [
    { id: 'access-control-management', name: 'Access Control Management', subtitle: 'Control and monitor access to restricted hospital areas', icon: 'Lock', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80' }
  ],
  'security-surveillance': [
    { id: 'security-surveillance', name: 'Security Surveillance', subtitle: 'Monitor hospital premises in real time to detect security threats and emergency incidents', icon: 'Camera', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' }
  ],
  'emergency-gate-management': [
    { id: 'emergency-gate-management', name: 'Emergency Gate Management', subtitle: 'Manage hospital emergency gates to ensure rapid ambulance access and evacuation', icon: 'AlertTriangle', image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&q=80' }
  ],
  'patient-registration': [
    { id: 'patient-registration', name: 'Patient Registration', subtitle: 'Register patients digitally by capturing details to generate unique UHID records', icon: 'FileText', image: 'https://images.unsplash.com/photo-1576091160585-f86a2f7c00e6?w=600&q=80' }
  ],
  'appointment-management': [
    { id: 'appointment-management', name: 'Appointment Management', subtitle: 'Manage patient appointments by scheduling, rescheduling, and tracking doctor availability', icon: 'Calendar', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80' }
  ],
  'opd-queue-management': [
    { id: 'opd-queue-management', name: 'OPD Queue Management', subtitle: 'Manage patient queues efficiently by assigning digital tokens and monitoring wait time', icon: 'Ticket', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' }
  ],
  'doctor-consultation': [
    { id: 'doctor-consultation', name: 'Doctor Consultation', subtitle: 'Manage digital patient consultations by recording history, diagnosis, and treatment plans', icon: 'UserCheck', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' }
  ],
  'prescription-management': [
    { id: 'prescription-management', name: 'Prescription Management', subtitle: 'Create and manage electronic prescriptions for accurate medication orders and pharmacy link', icon: 'Pill', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80' }
  ],
  'follow-up-management': [
    { id: 'follow-up-management', name: 'Follow-up Management', subtitle: 'Manage patient follow-up visits by tracking treatment progress and scheduling consultations', icon: 'RefreshCw', image: 'https://images.unsplash.com/photo-1576091160585-f86a2f7c00e6?w=600&q=80' }
  ],
  'patient-admission': [
    { id: 'patient-admission', name: 'Patient Admission', subtitle: 'Manage inpatient admissions by verifying patient details and initiating hospital care', icon: 'FileText', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' }
  ],
  'bed-management': [
    { id: 'bed-management', name: 'Bed Management', subtitle: 'Manage hospital bed availability, allocation, transfers, and occupancy', icon: 'Bed', image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&q=80' }
  ],
  'ward-management': [
    { id: 'ward-management', name: 'Ward Management', subtitle: 'Manage hospital wards and patient room allocation for efficient occupancy', icon: 'Building2', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80' }
  ],
  'nursing-care-management': [
    { id: 'nursing-care-management', name: 'Nursing Care Management', subtitle: 'Manage inpatient nursing care by recording assessments, vital signs, and medication', icon: 'HeartPulse', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80' }
  ],
  'inpatient-treatment-management': [
    { id: 'inpatient-treatment-management', name: 'Inpatient Treatment Management', subtitle: 'Manage inpatient treatment by recording doctor rounds, treatment plans, and clinical orders', icon: 'Stethoscope', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' }
  ],
  'patient-discharge-management': [
    { id: 'patient-discharge-management', name: 'Patient Discharge Management', subtitle: 'Manage patient discharge by completing medical clearance and preparing summary documents', icon: 'Home', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' }
  ],
  'emergency-patient-registration': [
    { id: 'emergency-patient-registration', name: 'Emergency Patient Registration', subtitle: 'Register emergency patients rapidly by capturing essential details and temp UHID', icon: 'Siren', image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&q=80' }
  ],
  'triage-management': [
    { id: 'triage-management', name: 'Triage Management', subtitle: 'Assess patient condition rapidly and assign treatment priority based on clinical severity', icon: 'GitFork', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' }
  ]
};

export const getDomains = (industryId) => {
  const key = (industryId || '').toLowerCase();
  if (key === 'healthcare') {
    return [
      { id: 'hospital', name: 'Hospital', subtitle: 'Smart Hospital & Patient Safety', icon: 'Activity', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' }
    ];
  }
  return domains[key] || domains['education'];
};

export const getAreas = (domainId) => {
  const key = (domainId || '').toLowerCase();
  if (key === 'hospital') {
    return areas['hospital'];
  }
  return areas[key] || areas['college'];
};

export const getModules = (areaId) => {
  const key = (areaId || '').toLowerCase();
  if (key === 'main-gate') return modules['main-gate'];
  if (key === 'opd') return modules['opd'];
  if (key === 'ipd') return modules['ipd'];
  if (key === 'emergency') return modules['emergency'];
  return modules[key] || modules['main-gate'];
};

export const getProblems = (moduleId) => {
  const key = (moduleId || '').toLowerCase();
  if (problems[key]) return problems[key];
  if (key.includes('triage')) return problems['triage-management'];
  if (key.includes('emergency') && key.includes('reg')) return problems['emergency-patient-registration'];
  if (key.includes('discharge')) return problems['patient-discharge-management'];
  if (key.includes('inpatient') || key.includes('treatment')) return problems['inpatient-treatment-management'];
  if (key.includes('nursing')) return problems['nursing-care-management'];
  if (key.includes('ward')) return problems['ward-management'];
  if (key.includes('bed')) return problems['bed-management'];
  if (key.includes('admission')) return problems['patient-admission'];
  if (key.includes('follow')) return problems['follow-up-management'];
  if (key.includes('appointment')) return problems['appointment-management'];
  if (key.includes('queue')) return problems['opd-queue-management'];
  if (key.includes('consultation')) return problems['doctor-consultation'];
  if (key.includes('prescription')) return problems['prescription-management'];
  if (key.includes('surveillance')) return problems['security-surveillance'];
  if (key.includes('emergency')) return problems['emergency-gate-management'];
  if (key.includes('patient') || key.includes('registration')) return problems['patient-registration'];
  if (key.includes('staff')) return problems['staff-entry-management'];
  if (key.includes('access')) return problems['access-control-management'];
  if (key.includes('vehicle')) return problems['vehicle-entry-management'];
  return problems['visitor-management'];
};

export const toTitleCase = (str) => {
  if (!str) return '';
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
