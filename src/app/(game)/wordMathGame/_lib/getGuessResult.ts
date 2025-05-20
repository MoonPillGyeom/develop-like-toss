interface testProps {
  answer: string;
  value: string[];
}
// type MatchResult = "correct" | "present" | "absent";
type MatchResult = "match" | "wrong-position" | "miss";

export const checkResult = ({ answer, value }: testProps): MatchResult[] => {
  console.log("checkResult : ", value);
  return Array.from({ length: answer.length }).map((_, i) => {
    if (value[i] === answer[i]) return "match";
    if (answer.includes(value[i])) return "wrong-position";
    return "miss";
  });
};
