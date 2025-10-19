import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
      {/* Social Links */}
      <div className="flex justify-center gap-6 text-xl mb-4">
        <a
          href="mailto:clensylandoh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
          title="Email"
        >
          <MdEmail />
        </a>
        <a
          href="https://wa.me/237654106625"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/landoh-clansy-214b7a35b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Stabat47"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100085254461152"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          title="Facebook"
        >
          <FaFacebook />
        </a>
      </div>

      {/* Copyright Text */}
      <p>
        © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Landoh Clansy</span> — Built with ❤️ using{" "}
        <span className="text-cyan-400 font-semibold">Next.js</span> +{" "}
        <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
      </p>
    </footer>
  );
}
