import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Save, Lock, CheckCircle2, AlertCircle, RefreshCw, 
  Home, Building2, MessageSquare, LogOut, Plus, Trash2, Eye, Sparkles, Layers,
  GraduationCap, Heart, Factory, Truck, Landmark, ShoppingBag, Plane, Train, Zap, Shield, Cpu, Activity
} from 'lucide-react';
import { fetchPageCMS, savePageCMS, loginAdmin, fetchContactSubmissions } from '@/services/api';
import { 
  industries as initialIndustries, getDomains, getAreas, getModules, getProblems
} from '@/data/explorer';

const availableIcons = [
  { id: 'GraduationCap', label: 'Education (Graduation Cap)', icon: GraduationCap },
  { id: 'Heart', label: 'Healthcare (Heart)', icon: Heart },
  { id: 'Factory', label: 'Manufacturing (Factory)', icon: Factory },
  { id: 'Building2', label: 'Corporate (Building)', icon: Building2 },
  { id: 'Truck', label: 'Logistics (Truck)', icon: Truck },
  { id: 'Landmark', label: 'Banking (Bank)', icon: Landmark },
  { id: 'ShoppingBag', label: 'Retail (Shopping Bag)', icon: ShoppingBag },
  { id: 'Plane', label: 'Airport (Plane)', icon: Plane },
  { id: 'Train', label: 'Railway (Train)', icon: Train },
  { id: 'Zap', label: 'Energy (Lightning)', icon: Zap },
  { id: 'Shield', label: 'Security (Shield)', icon: Shield },
  { id: 'Cpu', label: 'Hardware AI (Cpu)', icon: Cpu },
  { id: 'Activity', label: 'Monitoring (Activity)', icon: Activity },
];

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  // Multi-level Explorer CMS State
  const [selectedLevel, setSelectedLevel] = useState('industries');
  const [explorerSections, setExplorerSections] = useState({
    industries: initialIndustries,
    domains_education: getDomains('education'),
    domains_healthcare: getDomains('healthcare'),
    domains_manufacturing: getDomains('manufacturing'),
    domains_corporate: getDomains('corporate'),
    areas_smart_campus: getAreas('smart_campus'),
    modules_entry_gates: getModules('entry_gates'),
    problems_facial_attendance: getProblems('facial_attendance'),
  });

  // Home Page State
  const [homeData, setHomeData] = useState({
    hero: {
      headline: 'Revolutionizing enterprise security with ai and automation',
      pillBadge: 'enterprise security',
      subtitle: 'Empowering organizations and security teams with advanced diagnostic tools, real-time vision, and automated access control.'
    },
    features: [
      { title: 'AI-Powered diagnostics', description: 'Our tools analyze vast streams of operational data to identify potential security risks early.' },
      { title: 'Personalized access plans', description: 'Individual risk profiles, ensuring the most effective and personalized security protocols for everyone.' },
      { title: 'Cutting-edge automation', description: 'We utilize cutting-edge AI technology to develop innovative security solutions that transform physical safety.' },
      { title: 'Real-time spatial insights', description: 'Deep analysis of facility logs to uncover critical operational patterns and Mustering counts.' },
    ]
  });

  // Form Submissions State
  const [submissions, setSubmissions] = useState([]);

  // Toast & Saving Status
  const [saving, setSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('nx_admin_token');
    if (savedToken) {
      setIsAuthenticated(true);
      loadAllData();
    }
  }, []);

  const loadAllData = async () => {
    // Load Home Content
    const cmsHome = await fetchPageCMS('home');
    if (cmsHome && cmsHome.hero) {
      setHomeData({
        hero: cmsHome.hero || homeData.hero,
        features: cmsHome.cards || homeData.features
      });
    }

    // Load Explorer All Levels Content
    const cmsExplorer = await fetchPageCMS('explorer_all_levels');
    if (cmsExplorer && cmsExplorer.sections) {
      setExplorerSections({ ...explorerSections, ...cmsExplorer.sections });
    }

    // Load Submissions
    const subs = await fetchContactSubmissions();
    setSubmissions(subs);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await loginAdmin(password);
      localStorage.setItem('nx_admin_token', res.token);
      setIsAuthenticated(true);
      loadAllData();
    } catch (err) {
      setLoginError(err.message || 'Incorrect admin password.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('nx_admin_token');
    setIsAuthenticated(false);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const saveHome = async () => {
    setSaving(true);
    try {
      await savePageCMS('home', {
        pageKey: 'home',
        hero: homeData.hero,
        cards: homeData.features
      });
      showToast('Home page saved successfully!');
    } catch (err) {
      showToast('Error saving home content.');
    } finally {
      setSaving(false);
    }
  };

  const saveExplorerAllLevels = async () => {
    setSaving(true);
    try {
      await savePageCMS('explorer_all_levels', {
        pageKey: 'explorer_all_levels',
        sections: explorerSections
      });
      showToast(`Level '${selectedLevel}' saved successfully!`);
    } catch (err) {
      showToast('Error saving explorer cards.');
    } finally {
      setSaving(false);
    }
  };

  // Current list for selected level
  const currentCards = explorerSections[selectedLevel] || [];

  const updateCurrentCard = (index, field, value) => {
    const updatedList = [...currentCards];
    updatedList[index] = { ...updatedList[index], [field]: value };
    setExplorerSections({ ...explorerSections, [selectedLevel]: updatedList });
  };

  const addCardToCurrentLevel = () => {
    const newCard = {
      id: `custom_${Date.now()}`,
      name: 'New Option',
      subtitle: 'Smart Automation & AI',
      icon: 'Shield'
    };
    setExplorerSections({
      ...explorerSections,
      [selectedLevel]: [...currentCards, newCard]
    });
  };

  const deleteCardFromCurrentLevel = (index) => {
    const updatedList = currentCards.filter((_, i) => i !== index);
    setExplorerSections({ ...explorerSections, [selectedLevel]: updatedList });
  };

  // Login Guard Screen
  if (!isAuthenticated) {
    return (
      <main className="w-full bg-[#f7f8fa] min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="w-full max-w-md bg-white rounded-[32px] p-8 md:p-10 soft-card-shadow border border-slate-100 text-center">
          <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto mb-6 shadow-md">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-900 mb-2">NX Admin Portal</h1>
          <p className="text-slate-500 text-sm font-normal mb-8">Enter password to manage all website pages and inner cards.</p>

          {loginError && (
            <div className="mb-5 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin Password (default: admin123)"
              className="w-full px-4 py-3.5 rounded-2xl bg-[#f7f8fa] border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-medium text-sm transition-all shadow-md cursor-pointer"
            >
              Unlock Admin Portal
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-[#f7f8fa] min-h-screen pt-28 pb-24 text-slate-900">
      {/* Floating Save Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-3.5 rounded-full shadow-2xl text-xs font-medium flex items-center gap-2.5 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          {toastMessage}
        </div>
      )}

      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Top Control Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-[28px] p-6 mb-8 border border-slate-100 soft-card-shadow">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1 block">Full-Site Dynamic CMS</span>
            <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">NX Admin Control Studio</h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/industries"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-all"
            >
              <Eye className="w-3.5 h-3.5" /> View Live Site
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar mb-8 pb-1">
          {[
            { id: 'home', label: 'Home Page Editor', icon: Home },
            { id: 'explorer', label: 'All Industry & Inner Pages Editor', icon: Building2 },
            { id: 'submissions', label: 'Form Responses', icon: MessageSquare },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── TAB 1: HOME PAGE EDITOR ── */}
        {activeTab === 'home' && (
          <div className="space-y-10">
            <div className="bg-white rounded-[36px] p-8 md:p-12 soft-card-shadow border border-slate-100/80">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <h2 className="text-lg font-semibold text-slate-900">Hero Section Settings</h2>
                <button
                  onClick={saveHome}
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-medium text-xs transition-all shadow-md cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  {saving ? 'Saving...' : 'Save Hero'}
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Headline Text</label>
                  <input
                    type="text"
                    value={homeData.hero.headline}
                    onChange={(e) => setHomeData({ ...homeData, hero: { ...homeData.hero, headline: e.target.value } })}
                    className="w-full text-lg font-medium text-slate-900 p-4 rounded-2xl bg-[#f7f8fa] border border-slate-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Dark Pill Badge Highlighted Word</label>
                  <input
                    type="text"
                    value={homeData.hero.pillBadge}
                    onChange={(e) => setHomeData({ ...homeData, hero: { ...homeData.hero, pillBadge: e.target.value } })}
                    className="w-full text-sm font-medium text-slate-900 p-3 rounded-2xl bg-[#f7f8fa] border border-slate-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Subtitle</label>
                  <textarea
                    rows={3}
                    value={homeData.hero.subtitle}
                    onChange={(e) => setHomeData({ ...homeData, hero: { ...homeData.hero, subtitle: e.target.value } })}
                    className="w-full text-sm text-slate-600 p-4 rounded-2xl bg-[#f7f8fa] border border-slate-200 focus:outline-none resize-none font-normal"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: INDUSTRY & ALL INNER PAGES EDITOR ── */}
        {activeTab === 'explorer' && (
          <div className="bg-white rounded-[36px] p-8 md:p-12 soft-card-shadow border border-slate-100/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Industry & Inner Pages Card Editor</h2>
                <p className="text-xs text-slate-400 mt-1">Select any page level (Industries, Domains, Areas, Modules, Problems) to edit its cards and titles.</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={addCardToCurrentLevel}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs transition-all cursor-pointer shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Add Card To Level
                </button>
                <button
                  onClick={saveExplorerAllLevels}
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-medium text-xs transition-all shadow-md cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  Save Level
                </button>
              </div>
            </div>

            {/* Level Selector Dropdown */}
            <div className="bg-[#f7f8fa] p-5 rounded-2xl border border-slate-200 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Select Page Level To Edit:</span>
                  <p className="text-xs text-slate-600 font-medium">Currently editing level: <span className="text-slate-900 uppercase font-bold">{selectedLevel}</span></p>
                </div>
              </div>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none shadow-sm cursor-pointer"
              >
                <option value="industries">Level 1: Main Industries (Education, Healthcare, etc.)</option>
                <option value="domains_education">Level 2: Education Domains (Smart Campus, K-12, etc.)</option>
                <option value="domains_healthcare">Level 2: Healthcare Domains (Smart Hospital, etc.)</option>
                <option value="domains_manufacturing">Level 2: Manufacturing Domains (Smart Factory, etc.)</option>
                <option value="domains_corporate">Level 2: Corporate Domains (Intelligent Office, etc.)</option>
                <option value="areas_smart_campus">Level 3: Areas (Entry Gates, Hostels, Labs, etc.)</option>
                <option value="modules_entry_gates">Level 4: Modules (Facial Attendance, LPR, etc.)</option>
                <option value="problems_facial_attendance">Level 5: Problems (Unauthorized Access, etc.)</option>
              </select>
            </div>

            {/* Grid of Clean White Cards matching website screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentCards.map((card, idx) => (
                <div
                  key={card.id || idx}
                  className="bg-white rounded-[28px] border border-slate-200/90 p-6 soft-card-shadow flex flex-col justify-between space-y-4 text-center relative group"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-[0.65rem] font-semibold text-slate-400 uppercase tracking-widest">Card #{idx + 1}</span>
                    <button
                      onClick={() => deleteCardFromCurrentLevel(idx)}
                      className="text-rose-500 hover:text-rose-700 text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </div>

                  {/* Icon Selector */}
                  <div>
                    <label className="block text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 mb-1 text-left">Icon</label>
                    <select
                      value={card.icon || 'Shield'}
                      onChange={(e) => updateCurrentCard(idx, 'icon', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#f7f8fa] border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none"
                    >
                      {availableIcons.map((ic) => (
                        <option key={ic.id} value={ic.id}>{ic.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 mb-1 text-left">Card Title</label>
                    <input
                      type="text"
                      value={card.name || card.title || ''}
                      onChange={(e) => updateCurrentCard(idx, 'name', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#f7f8fa] border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none"
                    />
                  </div>

                  {/* Subtitle */}
                  <div>
                    <label className="block text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 mb-1 text-left">Subtitle</label>
                    <textarea
                      rows={2}
                      value={card.subtitle || ''}
                      onChange={(e) => updateCurrentCard(idx, 'subtitle', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#f7f8fa] border border-slate-200 text-xs text-slate-600 focus:outline-none resize-none font-normal"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 3: FORM RESPONSES ── */}
        {activeTab === 'submissions' && (
          <div className="bg-white rounded-[36px] p-8 md:p-12 soft-card-shadow border border-slate-100/80">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Form Responses & Inquiries</h2>
                <p className="text-xs text-slate-400 mt-1">Received {submissions.length} messages from visitors.</p>
              </div>
              <button
                onClick={loadAllData}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Refresh List
              </button>
            </div>

            {submissions.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-sm">
                No submissions received yet.
              </div>
            ) : (
              <div className="space-y-4">
                {submissions.map((sub, i) => (
                  <div key={sub._id || i} className="p-6 rounded-[24px] bg-[#f7f8fa] border border-slate-200/80 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-slate-900">{sub.name} ({sub.email})</h3>
                      <span className="text-[0.65rem] font-medium text-slate-400">
                        {sub.createdAt ? new Date(sub.createdAt).toLocaleString() : 'Recent'}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 flex gap-4">
                      {sub.phone && <span>Phone: {sub.phone}</span>}
                      {sub.company && <span>Company: {sub.company}</span>}
                      {sub.inquiryType && <span className="font-medium text-blue-600">Type: {sub.inquiryType}</span>}
                    </div>
                    <p className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/60 mt-2">
                      "{sub.message}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
