const authMe = async (token: string) => {
  const myHeader: Headers = new Headers({
    Authorization: `AwesomeToken ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  });
  const response: Response = await fetch(
    "http://34.90.124.7:8082/api/user/me",
    {
      method: "GET",
      headers: myHeader,
    }
  );
  const data = await response.json();
  return data;
};

export default authMe;
