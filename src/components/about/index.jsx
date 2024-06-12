import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  const iconStyle = {
    width: "48px",
    height: "48px",
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    borderRadius: "12px",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
  };

  const pseudoElementStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    background:
      "linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))",
    borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
    borderTop: "2px solid transparent",
    transition: "background 0.3s ease, border 0.3s ease",
    pointerEvents: "none",
  };

  const linkStyle = {
    position: "relative",
    display: "inline-block",
    width: "48px",
    height: "48px",
  };

  const links = [
    {
      href: "https://github.com/ShibajyotiMaity06",
      imgSrc: "https://skillicons.dev/icons?i=github",
      alt: "GitHub",
    },
    {
      href: "https://linkedin.com/in/shibajyoti-maity-5992b126a/",
      imgSrc: "https://skillicons.dev/icons?i=linkedin",
      alt: "LinkedIn",
    },
    {
      href: "https://codeforces.com/profile/shibajyoti.maity06",
      imgSrc:
        "https://store-images.s-microsoft.com/image/apps.48094.14504742535903781.aedbca21-113a-48f4-b001-4204e73b22fc.503f883f-8339-4dc5-8609-81713a59281f",
      alt: "Codeforces",
    },
    {
      href: "https://leetcode.com/u/maity_0602_/",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyjQXt2Qiqaa-jSNO2xNbv8xw7n-euVm1Itap-oY-Bpg&s",
      alt: "LeetCode",
    },
    {
      href: "https://wa.me/+918074088423",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/3670/3670051.png",
      alt: "WhatsApp",
    },
  ];

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Currently pursuing my B.Tech in Computer Science from Dr. Lankapalli
            Bullayya College of Engineering, I specialize in web development
            with JavaScript at the core. Proficient in React.js and Next.js, I
            create seamless, visually captivating websites using Jamstack for
            speed and security. As a machine learning engineer, I leverage
            Python for intelligent solutions and predictive insights. Active on
            Codeforces, I continually hone my coding skills. Looking ahead, I
            plan to expand my expertise into Web3 and cloud computing to further
            innovate in the digital realm. Join me on this journey of
            technological exploration and innovation.
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,css,figma,firebase,git,github,graphql,html,js,jquery,express,kafka,pytorch,sklearn,tensorflow,mongodb,mysql,nextjs,nodejs,npm,react,redux,tailwind,threejs,vercel,vite`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Socially Im here
          </h2>
          <div className="flex space-x-4 mt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <img
                  src={link.imgSrc}
                  alt={link.alt}
                  style={imgStyle}
                  className="hover:opacity-80"
                />
                <div style={pseudoElementStyle}></div>
              </a>
            ))}
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
