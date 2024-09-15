export function emailValidator(email: string, emailError: Element | null): boolean {
  if (!email) return false;

  const isValid = /^[\w-\.]+@[\w-]+\.+([\w]{2,4})+\.+[\w]{2,4}$/.test(email);

  if (emailError) {
    emailError.textContent = isValid ? "Kérlek add meg az emailed" : "Nem megfelelő az email formátuma!";
  }

  return isValid;
}

export function telephoneValidator(telephone: string, telephoneError: Element | null): boolean {
  if (!telephone || !telephone) return false;

  const isValid = /^\+36\d{9}$/.test(telephone);

  if (telephoneError) {
    telephoneError.textContent = isValid ? "Kérlek add meg a telefonszámod" : "Nem megfelelő a telefonszám formátuma!";
  }

  return isValid;
}

export function NameValidator(input: string, inputErrorElement: Element | null): boolean {

  const isEmpty = input.trim() === "";
  const isFullName = input.trim().split(" ").length === 2;
  
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
  return isEmpty && isFullName;
}

