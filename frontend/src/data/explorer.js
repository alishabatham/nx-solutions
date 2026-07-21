import { 
  GraduationCap, Building2, Factory, Briefcase, 
  Truck, Building, Home, ShoppingCart, 
  Landmark, Plane, Train, Zap,
  School, Users, Activity,
  KeySquare, Car, BookOpen, UserX,
  Camera, ShieldAlert, PieChart, Lock,
  AlertTriangle, DoorOpen, ShieldX
} from 'lucide-react';

export const IconMap = {
  GraduationCap, Building2, Factory, Briefcase,
  Truck, Building, Home, ShoppingCart,
  Landmark, Plane, Train, Zap,
  School, Users, Activity,
  KeySquare, Car, BookOpen, UserX,
  Camera, ShieldAlert, PieChart, Lock,
  AlertTriangle, DoorOpen, ShieldX
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
    { id: 'training',   name: 'Training Institute',subtitle: 'AI Based Learning Campus',       icon: 'BookOpen',       image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80' },
  ]
};

export const areas = {
  'college': [
    { id: 'main-gate',      name: 'Main Gate',      subtitle: 'Secure Entry Management',     icon: 'DoorOpen',   image: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&q=80' },
    { id: 'parking',        name: 'Parking',        subtitle: 'Vehicle Monitoring',           icon: 'Car',        image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80' },
    { id: 'library',        name: 'Library',        subtitle: 'Library Security',             icon: 'BookOpen',   image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80' },
    { id: 'academic-block', name: 'Academic Block', subtitle: 'Student Movement Control',    icon: 'Building2',  image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=600&q=80' },
    { id: 'laboratory',     name: 'Laboratory',     subtitle: 'Restricted Access',            icon: 'Lock',       image: 'https://images.unsplash.com/photo-1532094349884-543559c035db?w=600&q=80' },
    { id: 'hostel',         name: 'Hostel',         subtitle: 'Hostel Security',              icon: 'Home',       image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80' },
    { id: 'cafeteria',      name: 'Cafeteria',      subtitle: 'Visitor & Crowd Management',  icon: 'Users',      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80' },
    { id: 'auditorium',     name: 'Auditorium',     subtitle: 'Event Management',             icon: 'Activity',   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
    { id: 'sports',         name: 'Sports Complex', subtitle: 'Sports Facility Security',    icon: 'Activity',   image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80' },
    { id: 'admin',          name: 'Admin Block',    subtitle: 'Administrative Access',        icon: 'Briefcase',  image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80' },
  ]
};

export const modules = {
  'main-gate': [
    { id: 'access-control',    name: 'Access Control',     subtitle: 'Smart Entry Authentication', icon: 'KeySquare',   image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80' },
    { id: 'face-recognition',  name: 'Face Recognition',   subtitle: 'AI Face Authentication',     icon: 'UserX',       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
    { id: 'surveillance',      name: 'Surveillance',       subtitle: 'Intelligent Monitoring',      icon: 'Camera',      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
    { id: 'visitor-management',name: 'Visitor Management', subtitle: 'Visitor Verification',        icon: 'Users',       image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80' },
    { id: 'vehicle-management',name: 'Vehicle Management', subtitle: 'Smart Vehicle Access',        icon: 'Car',         image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80' },
    { id: 'emergency-response',name: 'Emergency Response', subtitle: 'Instant Incident Action',     icon: 'ShieldAlert', image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&q=80' },
    { id: 'analytics',         name: 'Analytics',          subtitle: 'Live Insights & Reporting',   icon: 'PieChart',    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
    { id: 'security-management',name:'Security Management',subtitle: 'Centralized Protection',      icon: 'Lock',        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80' },
  ]
};

export const problems = {
  'access-control': [
    { id: 'unauthorized-entry', name: 'Unauthorized Entry',    subtitle: 'Prevent Unknown Access',     icon: 'ShieldX',      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80' },
    { id: 'tailgating',         name: 'Tailgating',            subtitle: 'Detect Multiple Entry',       icon: 'Users',        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80' },
    { id: 'invalid-id',         name: 'Invalid ID',            subtitle: 'Fake Identity Detection',     icon: 'UserX',        image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&q=80' },
    { id: 'restricted-area',    name: 'Restricted Area Access',subtitle: 'Unauthorized Zone Entry',     icon: 'AlertTriangle',image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80' },
    { id: 'blacklisted',        name: 'Blacklisted Person',    subtitle: 'Instant Detection',           icon: 'ShieldAlert',  image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80' },
    { id: 'door-left-open',     name: 'Door Left Open',        subtitle: 'Security Alert',              icon: 'DoorOpen',     image: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&q=80' },
    { id: 'forced-door',        name: 'Forced Door Open',      subtitle: 'Intrusion Detection',         icon: 'AlertTriangle',image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80' },
    { id: 'missing-logs',       name: 'Missing Logs',          subtitle: 'Complete Audit Trail',        icon: 'BookOpen',     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
    { id: 'crowd-congestion',   name: 'Crowd Congestion',      subtitle: 'Entry Optimization',          icon: 'Users',        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80' },
    { id: 'emergency-evac',     name: 'Emergency Evacuation',  subtitle: 'Smart Emergency Exit',        icon: 'Activity',     image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&q=80' },
  ]
};

export const getDomains = (industryId) => domains[industryId] || domains['education'];
export const getAreas = (domainId) => areas[domainId] || areas['college'];
export const getModules = (areaId) => modules[areaId] || modules['main-gate'];
export const getProblems = (moduleId) => problems[moduleId] || problems['access-control'];

export const toTitleCase = (str) => {
  if (!str) return '';
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
