import { ThemeToggle } from "@/components/themeToggle/ThemeToggle";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-8 flex flex-col align-center justify-center">
      <div className="ml-auto">
        <ThemeToggle />
      </div>

      {children}
    </div>
  );
}
