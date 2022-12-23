export interface iContext {
  isAuthenticated: boolean;
  user: iUser | null;
  signIn: (data: signInData) => Promise<void>;
  signOut: () => Promise<void>;
}

export interface iUser {
  email: string;
  password?: string;
}

export interface signInData {
  name: string;
  email: string;
  password: string;
}
