import Image from "next/image";
import Link from "next/link";
import Button from "./button";

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/features",
    label: "Features",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];
const Navbar = () => {
  return (
    <section className="my-4 lg:my-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 border mx-4 border-white/15 rounded-full py-2 px-4  items-center">
          <div className="">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={100}
                className="h-9  w-auto"
                height={100}
              />
              <span className="hidden md:block text-xl font-bold font-sans">
                enai
              </span>
            </Link>
          </div>
          <div className=" items-center gap-4 hidden lg:flex">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-lime-500 transition-colors ease-in-out font-medium duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#ffff"
              fill="none"
              className="md:hidden"
            >
              <path
                d="M4 5L20 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19L20 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="hidden  md:flex items-center gap-4">
              <div className="flex items-center gap-4">
                <Button variant="primary">Get Started</Button>
                <Button variant="secondary">Login</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
