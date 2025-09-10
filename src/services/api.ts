const API_BASE_URL = 'https://mambo-yote.onrender.com/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

// Auth API
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  },

  register: async (userData: { name: string; email: string; password: string; phone?: string }) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  },

  getCurrentUser: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: getAuthHeaders()
    });
    return response.json();
  }
};

// Bookings API
export const bookingsAPI = {
  create: async (bookingData: any) => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(bookingData)
    });
    return response.json();
  },

  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/bookings/all`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  getMyBookings: async () => {
    const response = await fetch(`${API_BASE_URL}/bookings/my-bookings`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  updateStatus: async (bookingId: string, status: string) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/status`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status })
    });
    return response.json();
  }
};

// Contact API
export const contactAPI = {
  submit: async (contactData: any) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData)
    });
    return response.json();
  },

  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/contact/all`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  updateStatus: async (contactId: string, status: string, response?: string) => {
    const res = await fetch(`${API_BASE_URL}/contact/${contactId}/status`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status, response })
    });
    return res.json();
  }
};

// Admin API
export const adminAPI = {
  getDashboard: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  getUsers: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/users`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  updateUserRole: async (userId: string, role: string) => {
    const response = await fetch(`${API_BASE_URL}/admin/users/${userId}/role`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ role })
    });
    return response.json();
  }
};

// Rooms API
export const roomsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/rooms`);
    return response.json();
  },

  getById: async (roomId: string) => {
    const response = await fetch(`${API_BASE_URL}/rooms/${roomId}`);
    return response.json();
  },

  updateAvailability: async (roomId: string, available: boolean) => {
    const response = await fetch(`${API_BASE_URL}/rooms/${roomId}/availability`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ available })
    });
    return response.json();
  }
};