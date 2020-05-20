interface APIResponse {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
}

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
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: user,
    }
  );
  if (data.status === 200) {
    return await data.json();
  } else {
    const error: APIResponse = await data.json();
    throw Error(`Error! ${error.message}`);
  }
}

export default getUser;
