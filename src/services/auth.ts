import API from './API';
import { v4 as uuid } from 'uuid';
import { ApiError } from 'next/dist/server/api-utils';

interface signInRequestData {
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
  return {
    token: uuid(),
    user: {
      name: 'John Doe',
      email: 'john Doe',
    },
  };
}