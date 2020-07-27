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

  const response: Response = await fetch(
    "http://34.90.124.7:8082/api/user/change-password",
    {
      method: "PUT",
      headers: myHeader,
      body: body,
    }
  );

  if (response.status === 200) {
    return await response.json();
  } else {
    throw await response.json();
  }
};

export default changePassword;
