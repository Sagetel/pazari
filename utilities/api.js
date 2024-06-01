import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://api.edi.global/api',
})

fetcher.interceptors.request.use(null, error => {
  showError(error);
})

fetcher.interceptors.response.use(null, error => {
  showError(error);
})
const API_URL = "http://127.0.0.1:8000"
export function showError(error) {
  console.log(error)
}

export async function registration(jsonData) {
  try {
    const response = await axios.post(API_URL + '/api/users', jsonData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 400) {
      alert('Произошла ошибка: ' + response.data.message);
    } else {
      alert(response.data.message);
    }
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('ошибка регистрация', error);
    throw new Error(error);
  }
}
export async function login(jsonData) {
  try {
    const response = await axios.post(API_URL + '/auth/login', jsonData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 400) {
      alert('Произошла ошибка: ' + response.data.msg);
    }
    const data = response.data
    if (data.status) alert('Произошла ошибка: ' + data.msg)
    // else {
    //   localStorage.setItem("user", JSON.stringify(data));

    // }
    return response.data;
  } catch (error) {
    console.error('ошибка входа', error);
    // throw new Error(error);
  }
}
export async function getUser(jwt) {
  try {
    const response = await axios.get(API_URL + '/auth/user', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    });
    if (response.status === 400) {
      alert('Произошла ошибка: ' + response.data.msg);
    }
    const data = response.data
    if (data.status) alert('Произошла ошибка: ' + data.msg)

    return response.data;
  } catch (error) {
    console.error('Ошибка получения данных', error);
  }
}


export async function updateUser(jsonData) {
  console.log(jsonData.jwt);
  try {
    const response = await axios.post(API_URL + '/auth/update', JSON.stringify(jsonData), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${jsonData.jwt}`
      }
    });
    if (response.status === 400) {
      alert('Произошла ошибка: ' + response.data.msg);
    }
    const data = response.data
    if (data.status) alert('Произошла ошибка: ' + data.msg)

    return response.data;
  } catch (error) {
    console.error('Ошибка получения данных', error);
  }
}

export async function createAds(jsonData, jwt) {
  try {
    console.log(jwt);
    const response = await axios.post(API_URL + '/api/ads', jsonData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    });
    if (response.status === 400) {
      alert('Произошла ошибка: ' + response.data.message);
    } else {
      alert(response.data.message);
    }
    return response.data;
  } catch (error) {
    console.error('Ошибка отправки данных', error);
    throw new Error(error);
  }
}
export async function getAllAds() {
  try {
    const response = await axios.get(API_URL + '/api/ads', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 400) {
      alert('Произошла ошибка: ' + response.data.message);
    } 
    return response.data;
  } catch (error) {
    console.error('Ошибка получения данных', error);
    throw new Error(error);
  }
}
export async function getAdById(id) {
  try {
    const response = await axios.get(API_URL + `/api/ads/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 400) {
      alert('Произошла ошибка: ' + response.data.message);
    } 
    return response.data;
  } catch (error) {
    console.error('Ошибка получения данных', error);
    throw new Error(error);
  }
}