import * as axios from 'axios';

/*
Создаем экземпляр класса axios и заносим в него параметры
обращения к серверу.
*/

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '8d16dc72-4121-4068-ac07-811287ca5c12'
  }
})

/*
Создаем объект usersAPI, который не содержит данных,
но содержит методы запроса к серверу.
*/

export const usersAPI = {
  getUsers (currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  follow (id) {
    return instance
      .post(`follow/${id}`)
      .then(response => response.data)
  },
  unfollow (id) {
    return instance
      .delete(`follow/${id}`)
      .then(response => response.data)
  },
  getProfile(userId) {
    console.log('Obsolete method. Please use profileApi object')
    return profileAPI.getProfile(userId);
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance
      .get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, {
        status: status
      });
  }
}

export const authAPI = {
  me () {
    return instance
      .get('auth/me')
      .then(response => response.data)
  },
  login (email, password, rememberMe = false) {
    return instance
      .post('auth/login', { email, password, rememberMe })
  },
  logout () {
    return instance
      .delete('auth/login');
  }
}

