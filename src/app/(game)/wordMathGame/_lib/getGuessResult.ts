interface testProps {
  정답: string;
  value: string[];
}
// type MatchResult = "correct" | "present" | "absent";
type MatchResult = "match" | "wrong-position" | "miss";

export const checkResult = ({ 정답, value }: testProps): MatchResult[] => {
  console.log("checkResult : ", value);
  return Array.from({ length: 정답.length }).map((_, i) => {
    if (value[i] === 정답[i]) return "match";
    if (정답.includes(value[i])) return "wrong-position";
    return "miss";
  });
};
