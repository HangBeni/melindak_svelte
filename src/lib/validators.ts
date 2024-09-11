export function emailValidator(email: string, emailError: Element | null): boolean {
  if (!email) return false;

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
  if (!input) return false;

  const isValid = input.trim() !== "";

  if (inputErrorElement) {
    inputErrorElement.textContent = isValid ? "Addd meg kérlek a neved" : "Nem lehet üres ez a mező";
  }

  return isValid;
}

