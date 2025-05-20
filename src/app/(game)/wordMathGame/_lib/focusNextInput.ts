export const focusNextInput = (
  inputRefs: (HTMLInputElement | null)[],
  index: number,
  maxIndex: number
) => {
  if (index < maxIndex - 1) {
    inputRefs[index + 1]?.focus();
  }
};
