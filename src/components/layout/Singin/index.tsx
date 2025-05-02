import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../../utils/requests";
import MainTemplate from "../../common/main-template/main-template";
import { localStorageKeys, SITE_URL } from "../../../utils/constant";
import { Input } from "../../common/Input";
import { Sizes } from "../../../@types/enums";
import { Button } from "../../common/Button";
import { defState } from "../../../utils/helper";
import "../../../utils/global.context";
import CostumeForm from "../../common/costume-form/costume-form";

export const SignIn: React.FC = () => {
  // TODO make sign in page with small validations dont used <form> element, and when have error any fields when blured error trigged, when typeing in the field remove error
  // signed when press enter button and mouse clicking signin button

  const navigate = useNavigate();

  const [login, setLogin] = useState(defState("", ""));
  const [password, setPassword] = useState(defState("", ""));

  const [loading, setLoading] = useState<boolean>(false);

  function startSubmit() {
    if (!login.value || !password.value) {
      const loginRes = !login.value ? "Email is required" : "";
      const loginPass = !password.value ? "Password is required" : "";

      setLogin(defState(login.value, loginRes));
      setPassword(defState(password.value, loginPass));
      return;
    }

    setLoading(true);

    userLogin(login.value, password.value)
      .then(({ data }) => {
        localStorage.setItem(localStorageKeys.user, JSON.stringify(data));
        navigate(SITE_URL.HOME);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    const date = new Date();

    console.log(date.add(3, "days"), 22222);
  }, []);

  return (
    <MainTemplate cleanTemplate>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to={SITE_URL.HOME}
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            TEST PROJECT
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>

              <CostumeForm onSubmit={startSubmit}>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <Input
                      label="Email"
                      required
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setLogin({
                          value: e.target.value,
                          error: "",
                        })
                      }
                      error={login.error}
                      prefixIcon={<i className="fa-regular fa-user " />}
                      inputSize={Sizes.middle}
                    />
                  </div>
                  <div>
                    <Input
                      label="Password"
                      required
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword({
                          value: e.target.value,
                          error: "",
                        })
                      }
                      error={password.error}
                      type="password"
                      prefixIcon={<i className="fa-regular fa-lock " />}
                      inputSize={Sizes.middle}
                    />
                  </div>
                  <Button
                    onClick={startSubmit}
                    isLoading={loading}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </Button>

                  <hr />

                  <div className="text-center">
                    <Link to={SITE_URL.SIGNUP} className="text-blue-500">
                      Sign up
                    </Link>
                  </div>
                </div>
              </CostumeForm>
            </div>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
};
