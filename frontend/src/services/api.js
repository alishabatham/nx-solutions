const rawApiUrl = import.meta.env.VITE_API_URL || 'https://nx-solutions-7i7v.vercel.app/api';
const cleanApiUrl = rawApiUrl.replace(/\/+$/, '');
const API_BASE_URL = cleanApiUrl.endsWith('/api') ? cleanApiUrl : `${cleanApiUrl}/api`;

export async function submitContactForm(data) {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.error || 'Failed to submit message.');
  }

  return result;
}

export async function submitInquiryForm(data) {
  const response = await fetch(`${API_BASE_URL}/inquiries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.error || 'Failed to submit inquiry.');
  }

  return result;
}

export async function fetchPageCMS(pageKey) {
  try {
    const response = await fetch(`${API_BASE_URL}/cms/${pageKey}`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.warn(`[CMS Warning] Could not fetch dynamic CMS content for '${pageKey}'. Using local defaults.`);
    return null;
  }
}

export async function savePageCMS(pageKey, payload) {
  const response = await fetch(`${API_BASE_URL}/cms/${pageKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.error || 'Failed to save page content.');
  }

  return result;
}

export async function loginAdmin(password) {
  try {
    const response = await fetch(`${API_BASE_URL}/cms/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: (password || '').trim() }),
    });

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error(`Server returned unexpected format (${response.status}). Please try again.`);
    }

    const result = await response.json();
    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Invalid admin credentials.');
    }

    return result;
  } catch (error) {
    if (error.name === 'TypeError') {
      throw new Error('Could not connect to backend server. Please check your internet connection.');
    }
    throw error;
  }
}

export async function fetchContactSubmissions() {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`);
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    return [];
  }
}

export async function checkBackendHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return await response.json();
  } catch (error) {
    return { status: 'offline', error };
  }
}
