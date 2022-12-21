import { AuthContext } from '../context/AuthContext';
import React from 'react';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import API from '../services/API';
import Navbar from '../components/navbar';

interface UserList {
  id: string;
  name: string;
  email: string;
}

const dashboard = ({ users }: any) => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-screen-lg m-auto flex flex-col py-10 px-4 w-full bg-blue-300">
        <div className="text-2xl font-bold text-gray-200 drop-shadow-md mb-3">
          Usuários cadastrados: {users.length}
        </div>
        <div className="flex flex-col gap-3">
          {users.map((user: UserList) => (
            <div
              key={user.id}
              className="flex justify-between items-center p-4 bg-blue-400 rounded-md shadow-sm shadow-black/40"
            >
              <div className="text-gray-200 text-xl font-bold">
                {user.name}
                <div className="text-zinc-300 text-base ">{user.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'next.token': token } = parseCookies(ctx);

  const { data } = await API.get('/sessions');

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      users: data,
    },
  };
};
