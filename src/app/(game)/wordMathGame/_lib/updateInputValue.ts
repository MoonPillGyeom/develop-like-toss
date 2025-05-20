export const updateInputValue = (
  currentInput: string[],
  char: string,
  index: number
) => {
  const newInput = [...currentInput];
  newInput[index] = char.slice(-1); // 한 글자만 저장
  return newInput;
};
