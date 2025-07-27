import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
        <Navbar />
        <main className="flex-grow p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
