// app/(auth)/AuthLayout.tsx

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen sm:px-[156px] px-5">
      {children}
    </div>
  );
}
