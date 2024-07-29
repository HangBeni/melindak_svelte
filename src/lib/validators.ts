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
