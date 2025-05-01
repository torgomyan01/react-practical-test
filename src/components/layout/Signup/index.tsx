import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { defState } from "../../../utils/helper";
import { userLogin, userRegister } from "../../../utils/requests";
import { localStorageKeys, SITE_URL } from "../../../utils/constant";
import MainTemplate from "../../common/main-template/main-template";
import { Input } from "../../common/Input";
import { Sizes } from "../../../@types/enums";
import { Button } from "../../common/Button";
import CostumeForm from "../../common/costume-form/costume-form";

export const Signup: React.FC = () => {
  // TODO make sign up page with small validations, don't use <form> element, and when there is an error in any field when unfocus, the error is triggered, when typing in the field , remove the  error
  // registered when pressing the enter button and clicking sign-in button
  // sign in after registration with Promise.allWithMode , for example Promise.allWithMode([singupcall(), signincall()])

  const navigate = useNavigate();

  const [login, setLogin] = useState(defState("", ""));
  const [jobName, setJobName] = useState(defState("", ""));

  const [loading, setLoading] = useState<boolean>(false);

  async function startSubmit() {
    if (!login.value || !jobName.value) {
      setLogin(defState(login.value, !login.value ? "Email is required" : ""));
      setJobName(
        defState(jobName.value, !jobName.value ? "Password is required" : ""),
      );
      return;
    }

    setLoading(true);

    const [signupResult, signinResult] = await Promise.allSettled([
      userRegister(login.value, jobName.value),
      userLogin(login.value, jobName.value),
    ]);

    if (
      signupResult.status === "fulfilled" &&
      signinResult.status === "fulfilled"
    ) {
      setLoading(false);

      localStorage.setItem(
        localStorageKeys.user,
        JSON.stringify(signinResult.value.data),
      );
      navigate(SITE_URL.HOME);
    }
  }

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
                Sign up
              </h1>

              <CostumeForm onSubmit={startSubmit}>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <Input
                      label="Name"
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
                      label="Job Name"
                      required
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setJobName({
                          value: e.target.value,
                          error: "",
                        })
                      }
                      error={jobName.error}
                      prefixIcon={<i className="fa-regular fa-user-doctor" />}
                      inputSize={Sizes.middle}
                    />
                  </div>
                  <Button
                    onClick={startSubmit}
                    isLoading={loading}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign up
                  </Button>

                  <hr />

                  <div className="text-center">
                    <Link to={SITE_URL.SIGN_IN} className="text-blue-500">
                      Sign in
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
