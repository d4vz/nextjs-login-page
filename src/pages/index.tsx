import Image from 'next/image';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import login_illustration from '../assets/image/login_illustration.svg';
import { AiFillLock } from 'react-icons/ai';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);

  async function handleSignIn(data: any) {
    try {
      await signIn(data);
    } catch (err) {
      setError('Usuário ou senha inválidos');
    }
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="md:w-1/2 flex justify-center flex-col md:px-20 h-full bg-blue-600   bg-gradient-to-b from-blue-500 to-blue-700 w-screen px-10 shadow-inner shadow-black/40 z-50">
        <h1 className="text-center text-4xl font-bold text-gray-200 mb-4  ">
          Sign in{' '}
          <span>
            <AiFillLock className="text-gray-200 inline" />
          </span>
        </h1>
        <form
          className="flex text-xl flex-col gap-5 bg-gray-200 rounded-md p-10 shadow shadow-black/30"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div className="flex flex-col">
            <label className="text-gray-500 text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="border text-base border-gray-300 rounded-md p-2 focus:outline-blue-500/40 transition-all duration-500 focus:ring-blue-500/40 focus:border-blue-500/40"
              required
              placeholder="johnDoe@gmail.com"
              type="email"
              id="email"
              {...register('email')}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500 text-xl " htmlFor="password">
              Senha
            </label>
            <input
              className="border text-base border-gray-300 rounded-md p-2 focus:outline-blue-500/40 transition-all duration-500 focus:ring-blue-500/40 focus:border-blue-500/40"
              required
              placeholder="123"
              type="password"
              id="password"
              {...register('password')}
            />
          </div>
          {error && (
            <span className="text-red-500 text-sm animate-bounce">{error}</span>
          )}
          <button className="bg-blue-600 bg-gradient-to-r from-blue-500 to-blue-600 text-gray-200 rounded-md p-2 hover:from-blue-400 hover:to-blue-500 hover:text-white transition-all duration-700">
            Entrar
          </button>
        </form>
      </div>
      <div className="md:visible hidden w-1/2 md:flex items-center justify-center bg-gray-200">
        <Image
          className="w-9/12"
          alt="Ilustração"
          src={login_illustration}
        ></Image>
      </div>
    </div>
  );
}
