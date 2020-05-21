const usernameValidation = (username: string): boolean => {
  const lengthValid: boolean = username.length >= 5 && username.length <= 16;
  return lengthValid;
};

export default usernameValidation;
