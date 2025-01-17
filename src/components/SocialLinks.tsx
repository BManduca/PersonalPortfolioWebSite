import type React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const email = "brunnomanducarfe@gmail.com";

// const socialLinks = [
//   { name: "Github", href: "https://github.com/BManduca", icon: <FaGithub /> },
//   { name: "LinkedIn", href: "https://www.linkedin.com/in/brunnomanduca/", icon: <FaLinkedin /> },
//   { name: "Instagram", href: "https://www.instagram.com/brunnomanduca/", icon: <FaInstagram /> },
//   { name: "Gmail", href: {mailto}, icon: <FaEnvelope /> },
// ];

type ButtonProps = {
  platform: "github" | "linkedin" | "instagram" | "gmail";
  url: string;
};

// export const SocialLinks: React.FC = () => {
//   return (
//     <div className="flex justify-center gap-4 p-4 ">
//       {socialLinks.map((link) => (
//         <a
//           href={link.href}
//           key={link.name}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-gray-400 transition-all duration-500 dark:hover:border-cyan-300 hover:border-blue-600 hover:scale-110"
//         >
//           <span className="text-2xl">{link.icon}</span>
//         </a>
//       ))}
//     </div>
//   );
// };

export const SocialLinks: React.FC<ButtonProps> = ({ platform, url }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <FaGithub />;
      case "linkedin":
        return <FaLinkedin />;
      case "instagram":
        return <FaInstagram />;
      case "gmail":
        return <FaEnvelope />;
      default:
        return null;
    }
  };

  const isMailto = platform === "gmail";

  return (
      <a
        href={isMailto ? `mailto:${email}` : url}
        target={isMailto ? undefined : "_blank"}
        rel={isMailto ? undefined : "noopener noreferrer"}
        className="flex gap-4 p-4 items-center justify-center w-12 h-12 rounded-2xl border-2 border-gray-400 transition-all duration-500 dark:hover:border-cyan-300 hover:border-blue-600 hover:scale-110"
      >
        <span className="text-2xl">{getIcon(platform)}</span>
      </a>
  );
};
