export function emailValidator(email: string, emailError: Element | null) {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    if (emailError) {
      emailError.textContent = "Nem megfelelő az email formátuma!";
      return false;
    }
  } else {
    if (emailError) {
      emailError.textContent = ""; // Clear error message if valid
      return true;
    }
  }
}

export function telephoneValidator(telephone: string, telephoneError: Element | null) {
  const isValid = /^\+36\d{9}$/.test(telephone);

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

export function EditedValidator(input: string, inputErrorElement: Element | null) {
  const isValid = input.trim() !== "";

  if (!isValid) {
    if (inputErrorElement) {
      inputErrorElement.textContent = "Nem lehet üres ez a mező";
      return false;
    }
  } else {
    if (inputErrorElement) {
      inputErrorElement.textContent = ""; // Clear error message if valid
      return true;
    }
  }
}
