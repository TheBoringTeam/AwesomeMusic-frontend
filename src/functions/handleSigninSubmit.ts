async function getUser(username: string, password: string) {
  const user: string = JSON.stringify(
    { username, password },
    null,
    "\t"
  ).replace(/": "/g, '" : "');
  const data: Response = await fetch(
    "http://34.90.124.7:8082/api/user/sign-in",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: user,
    }
  );
  return await data.json();
}

export default getUser;
