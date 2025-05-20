export default function Description() {
  return (
    <div className="flex gap-11 flex-col">
      <p className="font-bold text-xl">글자수는 박스 개수!</p>
      <p>
        정답이에요 : <span className="text-green-400">초록</span>
      </p>
      <p>
        자리가 맞지 않아요 : <span className="text-yellow-400">노랑</span>
      </p>
      <p>
        틀려요 : <span className="text-gray-300">회색</span>
      </p>
    </div>
  );
}
