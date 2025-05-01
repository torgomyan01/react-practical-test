import MainTemplate from "../../common/main-template/main-template";
import { Input } from "../../common/Input";
import React, { useState } from "react";
import { Sizes } from "../../../@types/enums";
import { defState } from "../../../utils/helper";
import { Button } from "../../common/Button";
import { createUser } from "../../../utils/requests";
import { toast } from "react-toastify";
import CostumeForm from "../../common/costume-form/costume-form";

function CreateUser() {
  const [name, setName] = useState(defState("", ""));
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<{ name: string; id: number }[]>([]);

  function Create() {
    if (!name.value) {
      setName(defState(name.value, "Name is required"));
      return;
    }

    setLoading(true);
    createUser(name.value)
      .then((res) => {
        setUser((oldArr) => [...oldArr, res]);
        toast.success("User created successfully.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <MainTemplate>
      <div className="">
        <CostumeForm onSubmit={Create}>
          <div className="w-full max-w-[600px] bg-white p-4 rounded-[12px] shadow">
            <h1 className="text-[22px] mb-4">Create User</h1>
            <Input
              label="User Name"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName({
                  value: e.target.value,
                  error: "",
                })
              }
              error={name.error}
              prefixIcon={<i className="fa-regular fa-user " />}
              inputSize={Sizes.middle}
            />

            <div className="mt-4 flex-je-c">
              <Button
                onClick={Create}
                isLoading={loading}
                disabled={loading}
                className="w-[80px]"
              >
                Create
              </Button>
            </div>

            {user &&
              user.map((_user, i) => (
                <ul key={`${i}-user}`} className="mb-4">
                  <li>
                    <b>Name</b>: {_user.name}
                  </li>
                  <li>
                    <b>Id:</b> {_user.id}
                  </li>
                </ul>
              ))}
          </div>
        </CostumeForm>
      </div>
    </MainTemplate>
  );
}

export default CreateUser;
