// TODO fix the requests so that requests are made to the correct backend url

import instance from "../axios-config";

export const userLogin = (email: string, password: string) => {
  return instance.post("/api/login", {
    email,
    password,
  });
};

export const getUsers = (page: number, per_page: number) => {
  return instance.get("/users", {
    params: { page, per_page },
  });
};

export const getUserById = (id: string) => {
  return instance.get(`/users/${id}`);
};

export const createUser: (
  name: string,
) => Promise<{ name: string; id: number }> = async (name: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name,
        id: Math.floor(Math.random() * 5000),
      });
    }, 3000);
  });
};

export const userRegister = (name: string, jobName: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, jobName });
    }, 4000);
  });
};
