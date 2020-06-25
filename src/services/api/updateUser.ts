import { IUser } from "./../../pages/UserSettings/ManageUserInfo";

const updateUser = async (user: IUser, token: string) => {
  const body: string = JSON.stringify({ user }, null, "\t").replace(
    /": "/g,
    '" : "'
  );
  const myHeader: Headers = new Headers({
    Authorization: `AwesomeToken ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  });
  const response: Response = await fetch(
    "http://34.90.124.7:8082/api/user/update",
    {
      method: "PUT",
      headers: myHeader,
      body: body,
    }
  );
  const data = await response.json();
  return data;
};

export default updateUser;
