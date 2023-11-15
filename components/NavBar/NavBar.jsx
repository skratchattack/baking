import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const NavBar = () => {
  const links = [
    { href: "/recipes", label: "All Recipes" },
    { href: "/recipes/new", label: "Add Recipe" },
  ];

  return (
    <header className="bg-blue-500 p-4 shadow-md shadow-slate-400">
      <div className="flex items-center ml-10">
        <Link href="/">
          <Logo />
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
