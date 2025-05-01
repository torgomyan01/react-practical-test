import { Sizes } from "../@types/enums";

export const SITE_URL = {
  HOME: "/",
  USERS: "/users",
  USER_DETAILS: (id: number | string | null = null) =>
    `/user/${id ? id : ":id"}`,
  SIGNUP: "/signup",
  SIGN_IN: "/sign-in",
  CREATE_USER: "/create-user",
};

export const defSizes = {
  [Sizes.small]: "h-10",
  [Sizes.middle]: "h-12",
  [Sizes.large]: "h-14",
};

export const localStorageKeys = {
  user: "user",
};

export const devices = [
  {
    size: 1024,
    name: "desktop",
  },
  {
    size: 768,
    name: "tablet",
  },
  {
    size: 576,
    name: "mobile",
  },
];

export const emailRegexp = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
