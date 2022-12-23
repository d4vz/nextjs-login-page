import { AuthContext } from '../context/AuthContext';
import React from 'react';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import Navbar from '../components/navbar';

interface UserList {
  id: string;
  name: string;
  email: string;
}

const dashboard = ({ users }: any) => {
  return <Navbar />;
};

export default dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'next.token': token } = parseCookies(ctx);
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
