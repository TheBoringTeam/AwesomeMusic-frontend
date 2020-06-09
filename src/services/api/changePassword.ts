const changePassword = async (
  old_password: string,
  new_password: string,
  token: string
) => {
  const body: string = JSON.stringify(
    { old_password, new_password },
    null,
    "\t"
  ).replace(/": "/g, '" : "');

  const myHeader: Headers = new Headers({
    Authorization: `AwesomeToken ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  });

  console.log(body, token);

  const response: Response = await fetch(
    "http://34.90.124.7:8082/api/user/change-password",
    {
      method: "PUT",
      headers: myHeader,
      body: body,
    }
  );
  const data = await response.json();
  return data;
};

export default changePassword;
