import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const links = [
    { href: "/recipes", label: "All Recipes" },
    { href: "/recipes/new", label: "Add Recipe" },
  ];

  return (
    <header className="bg-blue-600 p-2 shadow-md shadow-slate-400">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/images/recipes/RecipeSolutions.png" alt="logo" width={70} height={70} className="drop-shadow-sm" />
        </Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4 ml-10">
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <Link href={href} className="text-white hover:text-blue-200 transition-colors duration-300">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
