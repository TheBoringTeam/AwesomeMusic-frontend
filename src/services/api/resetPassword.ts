const resetPassword = async (email: string) => {
  const body: string = JSON.stringify({ email }, null, "\t").replace(
    /": "/g,
    '" : "'
  );
  const response: Response = await fetch(
    "http://34.90.124.7:8082/api/user/reset-password",
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: body,
    }
  );
  if (response.status === 200) {
    return await response.json();
  } else {
    throw await response.json();
  }
};

export default resetPassword;
