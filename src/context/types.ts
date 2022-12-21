export interface iContext {
  isAuthenticated: boolean;
  user: iUser | null;
  signIn: (data: signInData) => Promise<void>;
  signOut: () => Promise<void>;
}

export interface iUser {
  name: string;
  email: string;
}

export interface signInData {
  email: string;
  password: string;
}
