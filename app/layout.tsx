import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/nav/Nav"
import Footer from "../components/footer/Footer"

export const metadata: Metadata = {
  title: "Café Delicias",
  description: "El mejor cafe lo disfrutas con amigos y delicias es tu mejor aliado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{

  return (
    <html lang="es">
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
