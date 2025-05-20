interface LabelProps {
  /** input의 id, name과 동일한 값을 받습니다. */
  htmlFor: string;
  /** Label의 스타일 입니다. */
  className?: string;
  /** Label의 이름 입니다. */
  children: React.ReactNode;
}

export function Label({ htmlFor, className = "", children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`text-white text-lg ${className}`}>
      {children}
    </label>
  );
}
