const emailValidation = (email: string): boolean => {
  const validLength: boolean = email.length >= 5 && email.length <= 254;
  const charValid: RegExp = /^([\w._-]+)@([\w-]+\.)+([\w]{2,})$/i;
  return charValid.test(email) && validLength;
};

export default emailValidation;
