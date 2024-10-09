export let reg_name =
"(^[A-Za-z-]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})";
export let reg_email = "[w-.]+@[w-]+.+([w]{2,4})+(?:.w{2,4})";
export let reg_tel = "^((\+36)|06)\d{9}$";

export let validInputs = {
    name: false,
    email: false,
    tel: false,
  };