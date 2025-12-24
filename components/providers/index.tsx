import Header from "../layout/Header";

// bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50

export default function Providers({ children }: ChildrenProps) {
  return (
    <div
      className="min-h-screen 
                 transition-colors duration-300"
    >
      <Header />
      {children}
    </div>
  );
}
