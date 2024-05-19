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

export async function sendEbol(data, jwt) {
  try {
    const response = await axios.post('https://api.edi.global/api/v1/doc', data, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
    console.log(response);
    return response
  } catch (error) {
    console.error('ошибка sendEbol', error);
    alert(error.response.data.msg)
    // throw new Error(error);
  }
}
export async function updateEbol(data, jwt) {
  try {
    const response = await axios.put(`https://api.edi.global/api/v1/doc`, data, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
    console.log(response);
    return response.data
  } catch (error) {
    console.error('ошибка обновления', error);
    alert(error.response.data.msg)
    // throw new Error(error);
  }
}

export async function getAllEbols(jwt) {
  try {
    const response = await axios.get('https://api.edi.global/api/v1/doc', {
      headers: {
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
    console.error('ошибка getAllEbols', error);
    // throw new Error(error);
  }
}
export async function getEbolById(jwt, id) {
  try {
    const response = await axios.get(`https://api.edi.global/api/v1/doc/${id}`, {
      headers: {
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
    console.error('ну ошибка', error);
    // throw new Error(error);
  }
}

export async function getEbolPreview(uid) {
  try {
    const response = await axios.get(`https://api.edi.global/api/v1/datamatrix/qr/${uid}`, {
    });
    console.log(response.data);
    if (response.status === 400) {
      alert('Произошла ошибка: ' + response.data.msg);
    }
    const data = response.data
    if (data.status) alert('Произошла ошибка: ' + data.msg)
    return response.data;
  } catch (error) {
    console.error('ну ошибка', error);
    // throw new Error(error);
  }
}
export async function getBaseForDownload(uid) {
  try {
    const response = await axios.get(`https://api.edi.global/api/v1/download/doc/${uid}`, {
    });
    console.log(response.data);
    if (response.status === 400) {
      alert('Произошла ошибка: ' + response.data.msg);
    }
    const data = response.data
    if (data.status) alert('Произошла ошибка: ' + data.msg)
    return response.data;
  } catch (error) {
    console.error('ну ошибка', error);
    // throw new Error(error);
  }
}