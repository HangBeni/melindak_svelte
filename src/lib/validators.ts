export function emailValidator(email: string | undefined, emailError: Element | null): boolean {
 if (!email) return false;

  const isValid = /^[\w-\.]+@[\w-]+\.+([\w]{2,4})+(?:\.\w{2,4})$/.test(email) || /^[\w-\.]+@[\w-]+\.+([\w]{2,4})$/.test(email) ;

if (!isValid) {
  emailError!.textContent = "Nem megfelelő a email formátuma";
}

  emailError!.textContent = "Kérlek add meg az emailed";
  return isValid;
}

export function telephoneValidator(telephone: string | undefined, telephoneError: Element | null): boolean {
  if(!telephone) return false;
  const isValid = /^\+36\d{9}$/.test(telephone);

  if (telephoneError) {
    telephoneError.textContent = isValid ? "Kérlek add meg a telefonszámod" : "Nem megfelelő a telefonszám formátuma!";
  }

  return isValid;
}

export function NameValidator(input: string | undefined, inputErrorElement: Element | null): boolean {
  if (!input) return false;
  
  const isEmpty = input.trim() === "";
  const isFullName = input.trim().split(" ").length >= 2;

  if (inputErrorElement) {

    if (isEmpty) {
      inputErrorElement.textContent = !isEmpty ? "Addd meg kérlek a teljes neved" : "Nem lehet üres ez a mező";
      return false; // Nem valid
    }

    if (!isFullName) {
      inputErrorElement.textContent = isFullName ? "Addd meg kérlek a teljes neved" : "A teljes nevedet add meg kérlek";
      return false // Nem valid
    }
  }
  return !isEmpty && isFullName; // Valid
}

