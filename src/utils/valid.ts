import { isValidPhoneNumber } from "libphonenumber-js";

export const vaidForm = (data: any) => {
  const { firstName, lastName, address, country, email, ext, phone, type } =
    data;

  const errors = [];

  if (!firstName || !lastName || !address || !country || !phone || !ext) {
    errors.push({ empty: "*Please fill all the fields." });
  }

  if (!validateEmail(email)) {
    errors.push({ email: "*Please enter a valid email." });
  }

  if (!ext || !phone) {
    errors.push({ phone: "*Please enter a valid number." });
  } else if (!validatePhone(`${ext}${phone}`, type)) {
    errors.push({ phone: "*Please enter a valid number." });
  }

  console.log(isValidPhoneNumber(`${ext}${phone}`, type));

  return {
    errMsg: errors,
    errLength: errors.length,
  };
};

function validatePhone(phone: string, type: any) {
  return isValidPhoneNumber(phone, type);
}

function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
