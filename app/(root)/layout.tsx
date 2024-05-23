import Sidebar from "@/app/(root)/__components/Sidebar";
import MobileNavbar from "./__components/MobileNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = { firstName: "Masoumeh", lastName: "Zarei" };

  return (
    <main className="flex h-screen w-full">
      <Sidebar user={loggedInUser} />
      <div className="flex size-full flex-col">
        <MobileNavbar />

        {children}
      </div>
    </main>
  );
}
