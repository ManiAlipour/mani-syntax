import Header from "../layout/Header";

export default function Providers({ children }: ChildrenProps) {
  return (
    <div
      className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 
                 transition-colors duration-300 font-ubuntu"
    >
      <Header />
      {children}
    </div>
  );
}
