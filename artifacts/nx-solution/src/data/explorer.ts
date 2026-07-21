import { 
  GraduationCap, Building2, Factory, Briefcase, 
  Truck, Building, Home, ShoppingCart, 
  Landmark, Plane, Train, Zap,
  School, Users, Activity,
  KeySquare, Car, BookOpen, UserX,
  Camera, ShieldAlert, PieChart, Lock,
  AlertTriangle, DoorOpen, ShieldX
} from 'lucide-react';
import React from 'react';

// For simplicity, we'll map icons by string name
export const IconMap: Record<string, React.ElementType> = {
  GraduationCap, Building2, Factory, Briefcase,
  Truck, Building, Home, ShoppingCart,
  Landmark, Plane, Train, Zap,
  School, Users, Activity,
  KeySquare, Car, BookOpen, UserX,
  Camera, ShieldAlert, PieChart, Lock,
  AlertTriangle, DoorOpen, ShieldX
};

export const industries = [
  { id: 'education', name: 'Education', subtitle: 'Smart Campus & Institution Automation', icon: 'GraduationCap' },
  { id: 'healthcare', name: 'Healthcare', subtitle: 'Smart Hospital & Patient Safety', icon: 'Activity' },
  { id: 'manufacturing', name: 'Manufacturing', subtitle: 'Smart Factory & Industrial AI', icon: 'Factory' },
  { id: 'corporate', name: 'Corporate', subtitle: 'Intelligent Office Automation', icon: 'Briefcase' },
  { id: 'logistics', name: 'Logistics', subtitle: 'Smart Fleet & Warehouse', icon: 'Truck' },
  { id: 'smart-city', name: 'Smart City', subtitle: 'Urban AI & Public Safety', icon: 'Building' },
  { id: 'smart-society', name: 'Smart Society', subtitle: 'Residential Security & Automation', icon: 'Home' },
  { id: 'retail', name: 'Retail', subtitle: 'Intelligent Store Management', icon: 'ShoppingCart' },
  { id: 'banking', name: 'Banking', subtitle: 'Secure Financial & Operations', icon: 'Landmark' },
  { id: 'airport', name: 'Airport', subtitle: 'Smart Passenger & Terminal Security', icon: 'Plane' },
  { id: 'railway', name: 'Railway', subtitle: 'Intelligent Station Management', icon: 'Train' },
  { id: 'energy', name: 'Energy', subtitle: 'Utility Monitoring & Protection', icon: 'Zap' },
];

export const domains: Record<string, any[]> = {
  'education': [
    { id: 'college', name: 'College', subtitle: 'AI Powered Campus Management', icon: 'Building2' },
    { id: 'school', name: 'School', subtitle: 'Smart School Operations', icon: 'School' },
    { id: 'university', name: 'University', subtitle: 'Intelligent University Security', icon: 'GraduationCap' },
    { id: 'coaching', name: 'Coaching', subtitle: 'Student Monitoring Solution', icon: 'Users' },
    { id: 'training', name: 'Training Institute', subtitle: 'AI Based Learning Campus', icon: 'BookOpen' },
  ]
  // Fallback for others
};

export const areas: Record<string, any[]> = {
  'college': [
    { id: 'main-gate', name: 'Main Gate', subtitle: 'Secure Entry Management', icon: 'DoorOpen' },
    { id: 'parking', name: 'Parking', subtitle: 'Vehicle Monitoring', icon: 'Car' },
    { id: 'library', name: 'Library', subtitle: 'Library Security', icon: 'BookOpen' },
    { id: 'academic-block', name: 'Academic Block', subtitle: 'Student Movement Control', icon: 'Building2' },
    { id: 'laboratory', name: 'Laboratory', subtitle: 'Restricted Access', icon: 'Lock' },
    { id: 'hostel', name: 'Hostel', subtitle: 'Hostel Security', icon: 'Home' },
    { id: 'cafeteria', name: 'Cafeteria', subtitle: 'Visitor & Crowd Management', icon: 'Users' },
    { id: 'auditorium', name: 'Auditorium', subtitle: 'Event Management', icon: 'Activity' },
    { id: 'sports', name: 'Sports Complex', subtitle: 'Sports Facility Security', icon: 'Activity' },
    { id: 'admin', name: 'Admin Block', subtitle: 'Administrative Access', icon: 'Briefcase' },
  ]
};

export const modules: Record<string, any[]> = {
  'main-gate': [
    { id: 'access-control', name: 'Access Control', subtitle: 'Smart Entry Authentication', icon: 'KeySquare' },
    { id: 'face-recognition', name: 'Face Recognition', subtitle: 'AI Face Authentication', icon: 'UserX' },
    { id: 'surveillance', name: 'Surveillance', subtitle: 'Intelligent Monitoring', icon: 'Camera' },
    { id: 'visitor-management', name: 'Visitor Management', subtitle: 'Visitor Verification', icon: 'Users' },
    { id: 'vehicle-management', name: 'Vehicle Management', subtitle: 'Smart Vehicle Access', icon: 'Car' },
    { id: 'emergency-response', name: 'Emergency Response', subtitle: 'Instant Incident Action', icon: 'ShieldAlert' },
    { id: 'analytics', name: 'Analytics', subtitle: 'Live Insights & Reporting', icon: 'PieChart' },
    { id: 'security-management', name: 'Security Management', subtitle: 'Centralized Protection', icon: 'Lock' },
  ]
};

export const problems: Record<string, any[]> = {
  'access-control': [
    { id: 'unauthorized-entry', name: 'Unauthorized Entry', subtitle: 'Prevent Unknown Access', icon: 'ShieldX' },
    { id: 'tailgating', name: 'Tailgating', subtitle: 'Detect Multiple Entry', icon: 'Users' },
    { id: 'invalid-id', name: 'Invalid ID', subtitle: 'Fake Identity Detection', icon: 'UserX' },
    { id: 'restricted-area', name: 'Restricted Area Access', subtitle: 'Unauthorized Zone Entry', icon: 'AlertTriangle' },
    { id: 'blacklisted', name: 'Blacklisted Person', subtitle: 'Instant Detection', icon: 'ShieldAlert' },
    { id: 'door-left-open', name: 'Door Left Open', subtitle: 'Security Alert', icon: 'DoorOpen' },
    { id: 'forced-door', name: 'Forced Door Open', subtitle: 'Intrusion Detection', icon: 'AlertTriangle' },
    { id: 'missing-logs', name: 'Missing Logs', subtitle: 'Complete Audit Trail', icon: 'BookOpen' },
    { id: 'crowd-congestion', name: 'Crowd Congestion', subtitle: 'Entry Optimization', icon: 'Users' },
    { id: 'emergency-evac', name: 'Emergency Evacuation', subtitle: 'Smart Emergency Exit', icon: 'Activity' },
  ]
};

// Helper to get fallback data if specific ID not found
export const getDomains = (industryId: string) => domains[industryId] || domains['education'];
export const getAreas = (domainId: string) => areas[domainId] || areas['college'];
export const getModules = (areaId: string) => modules[areaId] || modules['main-gate'];
export const getProblems = (moduleId: string) => problems[moduleId] || problems['access-control'];

export const toTitleCase = (str: string) => {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
