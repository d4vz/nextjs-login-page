import API from './API';
import { v4 as uuid } from 'uuid';

interface signInRequestData {
  name?: string;
  email: string;
  password: string;
}

export async function signInRequest(data: signInRequestData) {
  try {
    const response = await API.post('/sessions', data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function recoverUserInformation() {
  try {
    const response = await API.get('/sessions');
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
