import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SectionHeader from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 text-center">
      <SectionHeader title="Get in Touch" subtitle="Let’s build something together!" />

      <p className="text-gray-400 mb-8">
        Whether you’re interested in collaborating, hiring, or just saying hello — I’d love to hear from you!
        You can reach out through this form or connect with me on social platforms below.
      </p>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/mdkwjobw" 
        method="POST"
        className="flex flex-col gap-4 mb-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-gray-800 p-3 rounded-md border border-gray-700 focus:outline-none focus:border-cyan-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="bg-gray-800 p-3 rounded-md border border-gray-700 focus:outline-none focus:border-cyan-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="bg-gray-800 p-3 rounded-md border border-gray-700 focus:outline-none focus:border-cyan-400"
          required
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-md transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-2xl text-gray-400">
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

      <p className="text-gray-500 text-sm mt-6">
        Yaoundé, Cameroon 🇨🇲
      </p>
    </section>
  );
}
