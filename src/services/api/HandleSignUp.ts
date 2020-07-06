async function handleSignUp(username: string, password: string, email: string) {
  const user: string = JSON.stringify({
    username,
    password,
    email,
    is_collective: false,
  }).replace(/": "/g, '" : "');
  const response: Response = await fetch(
    "http://34.90.124.7:8082/api/user/registration",
    {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: user,
    }
  );
  if (response.status === 200) {
    return await response.json();
  } else {
    throw response.json();
  }
}

export default handleSignUp;
