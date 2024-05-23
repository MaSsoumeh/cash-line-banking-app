import Navbar from "@/app/(root)/__components/Navbar";
import MobileNavbar from "./__components/MobileNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = { firstName: "Masoumeh", lastName: "Zarei" };

  return (
    <main className="flex h-screen w-full">
      <Navbar user={loggedInUser} />
      <div className="flex size-full flex-col font-inter">
        <MobileNavbar />

        {children}
      </div>
    </main>
  );
}
