import Head from 'next/head' 
import "./globals.css";


export const  metadata = {
  title: "VisinoaryAI",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,}:Readonly<{
    children: React.ReactNode;
  }>){
  return (
    <html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="./style.css"/>
      
      <link rel ="icon" type="image/jpg" href="./images/mustang.jpg"/>
    
      </Head>
      <body>{children}</body>
    </html>
  );
}
