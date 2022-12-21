import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);

  async function handleSignIn(data: any) {
    try {
      await signIn(data);
    } catch (err) {
      setError('Invalid credentials');
    }
  }

  return (
    <div className="bg-blue-600 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-200 mb-10">Login</h1>
      <p className=" text-gray-200 ">Email: johnDoe@gmail.com</p>
      <p className=" text-gray-200 mb-10">Senha: 123</p>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="bg-gray-200 p-10 rounded-lg flex flex-col gap-3 shadow-md shadow-black/40"
      >
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            autoComplete="email"
            required
            {...register('email')}
            className="py-2 px-4 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
            type="email"
            id="email"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            required
            autoComplete="current-password"
            {...register('password')}
            className="py-2 px-4 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
            type="password"
            id="password"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-blue-600 text-gray-200 font-bold py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
