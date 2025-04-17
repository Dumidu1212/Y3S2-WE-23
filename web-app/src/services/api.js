import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const adminApi = {
  login: (credentials) => api.post('/admin/login', credentials),
  getDashboardData: () => api.get('/admin/dashboard'),
  getUsers: () => api.get('/admin/users'),
  approveRestaurant: (restaurantId) => api.post(`/admin/restaurants/${restaurantId}/approve`),
};

export const restaurantApi = {
  login: (credentials) => api.post('/restaurant/login', credentials),
  getDashboardData: () => api.get('/restaurant/dashboard'),
  getMenu: () => api.get('/restaurant/menu'),
  updateMenu: (menuData) => api.put('/restaurant/menu', menuData),
  getOrders: () => api.get('/restaurant/orders'),
  updateOrderStatus: (orderId, status) => api.put(`/restaurant/orders/${orderId}/status`, { status }),
};

export default api; 