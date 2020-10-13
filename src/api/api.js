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
  }
}

export const followAPI = {
  follow (id) {
    return instance
      .post(`follow/${id}`)
      .then(response => response.data)
  },
  unfollow (id) {
    return instance
      .delete(`follow/${id}`)
      .then(response => response.data)
  }
}

