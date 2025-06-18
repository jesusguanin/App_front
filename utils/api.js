import Constants from 'expo-constants';

const BASE_URL = Constants.expoConfig.extra.EXPO_API_BASE_URL;
export async function apiRequest({
  base= BASE_URL,  
  endpoint,
  method = 'GET',
  body = null,
  headers = {},
  token = null,
}) {
  try {
    const url = `${base}${endpoint}`;
    console.log(`API Request: ${method} ${url}`, body ? `Body: ${JSON.stringify(body)}` : '');
    
    
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...headers,
      },
      ...(body && { body: JSON.stringify(body) }),
    });

    const data = await response.json();
    console.log(data);
    
    if (!response.ok) {
      throw new Error(data.message || 'Error en la petición');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
}
