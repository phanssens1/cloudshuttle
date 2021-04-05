import React, { useState } from "react";
import Link from 'next/link'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-gray-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link href="/">
          <h1 className="flex items-center text-white no-underline">
            <svg 
              className="w-8 h-8 mr-2 fill-current"
              height="54"
              width="54"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20">
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1z" />
            </svg>
            <span className="text-xl font-bold tracking-tight">
              Cloud Shuttle
            </span>
          </h1>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link 
              key={link.title}
              href={link.route}
            >
              <p className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6">{link.title}</p>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
