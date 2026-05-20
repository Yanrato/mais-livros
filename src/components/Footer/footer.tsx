import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 px-4 flex flex-col items-center gap-4">
      <p className="font-bold">© 2025 Mais Livros</p>

      <div className="flex gap-4 text-2xl">
        <Link href="#"><IoLogoFacebook /></Link>
        <Link href="#"><IoLogoInstagram /></Link>
        <Link href="#"><IoLogoTwitter /></Link>
      </div>
    </footer>
  );
};
