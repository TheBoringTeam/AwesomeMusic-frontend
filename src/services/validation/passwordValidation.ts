const passwordValidation = (password: string): boolean => {
  const validLength: boolean = password.length >= 6 && password.length <= 32;
  const lowerCase: boolean = /[a-z]|[а-я]/.test(password);
  const upperCase: boolean = /[A-Z]|[А-Я]/.test(password);
  const numbers: boolean = /[0-9]/.test(password);
  const specialChar: boolean = /[@%+/`!#$^?:,()}\]~\-._]/.test(password);
  const noSpaces: boolean = /^\S+$/.test(password);
  console.log(
    validLength,
    lowerCase,
    upperCase,
    numbers,
    specialChar,
    noSpaces,
    "Test"
  );
  return (
    validLength && lowerCase && upperCase && numbers && specialChar && noSpaces
  );
};

export default passwordValidation;
