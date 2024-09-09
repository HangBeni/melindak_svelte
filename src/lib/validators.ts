export function emailValidator(email: HTMLInputElement, emailError: Element | null) {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

  if (!isValid) {
    if (emailError) {
      emailError.textContent = "Nem megfelelő az email formátuma!";
      return false;
    }
  } else {
    if (emailError) {
      emailError.textContent = "Add meg kérlek az email címed";
      return true;
    }
  }
}

export function telephoneValidator(telephone: HTMLInputElement, telephoneError: Element | null) {
  const isValid = /^\+36\d{9}$/.test(telephone.value);
  if (!isValid) {
    if (telephoneError) {
      telephoneError.textContent = "Nem megfelelő a telefonszám formátuma!";
      return false;
    }
  } else {
    if (telephoneError) {
      telephoneError.textContent = "Add meg a telefonszámod!"; // Clear error message if valid
      return true;
    }
  }
}

export function NameValidator(input: HTMLInputElement, inputErrorElement: Element | null) {
  const isValid = input?.value.trim() !== "";

  if (!isValid) {
    if (inputErrorElement) {
      inputErrorElement.textContent = "Nem lehet üres ez a mező";
      return false;
    }
  } else {
    if (inputErrorElement) {
      inputErrorElement.textContent = "Add meg kérlek a neved";
      return true;
    }
  }
}
