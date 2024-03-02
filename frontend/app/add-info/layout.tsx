import { Inter } from "next/font/google";
import Navbar from "./(components)/Navbar";

export default function AddInfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-4">
      <div className="mx-2">
        <Navbar></Navbar>
      </div>
      <div className="w-full bg-white p-2 lg:px-32">{children}</div>
    </div>
  );
}
