import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#022138]">
        <footer className="text-gray-300 lg:py-24 sm:py-14 py-5 max-w-screen-2xl mx-auto max-2xl:px-24 max-md:px-14 max-sm:px-5">
          <div className=" flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="flex-grow flex justify-between  flex-wrap  -mb-10 md:mt-0 mt-10 md:text-left    ">
              <div className="">
                <h2 className="font-medium text-gray-100 tracking-widest text-[2rem] mb-3">
                  Resources
                </h2>
                <nav className="list-none mb-10 space-y-3">
                  <li>
                    <Link href="/pricing" className="text-gray-300 ">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/free-recruiting" className="text-gray-300 ">
                      Free Recruiting Tips
                    </Link>
                  </li>
                  <li>
                    <Link href="/diamond-sports" className="text-gray-300 ">
                      Why Diamond Sports Recruiting
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-gray-300 ">
                      FAQ
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="">
                <h2 className="font-medium text-gray-100 tracking-widest text-[2rem] mb-3">
                  Company & Support
                </h2>
                <nav className="list-none mb-10 space-y-3">
                  <li>
                    <Link href="/" className="text-gray-300 ">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className="text-gray-300 ">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/customer-support" className="text-gray-300 ">
                      Customer Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/login" className="text-gray-300 ">
                      Login
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="">
                <h2 className="font-medium text-gray-100 tracking-widest text-[2rem] mb-3">
                  Legal
                </h2>
                <nav className="list-none mb-10 space-y-3">
                  <li>
                    <Link href="/privacy-policy" className="text-gray-300 ">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-use" className="text-gray-300 ">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/user-licence" className="text-gray-300 ">
                      End User License Agreement
                    </Link>
                  </li>
                  {/* <li>
                    <a className="text-gray-300 ">Subscription Agreement</a>
                  </li> */}
                </nav>
              </div>
            </div>
          </div>

          <div className="bg-[#022138]">
            <div className="container mx-auto pt-14 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-100 text-sm text-center sm:text-left">
                {/* © 2024 DSR —
                <a
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className="text-gray-300 ml-1"
                  target="_blank"
                >
                  @knyttneve
                </a> */}
                © 2024 Diamond Sports Recruiting. All rights reserved.
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-5">
                <Link
                  href={"https://www.facebook.com/DiamondSportsRecruiting/"}
                  className="text-[#012555] bg-white p-3 rounded-full"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href={"https://x.com/DSR_Recruiting"}
                  className="text-[#012555] bg-white p-3 rounded-full"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </Link>
                <Link
                  href={"/"}
                  className="text-[#012555] bg-white p-3 rounded-full"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/company/diamond-sports-recruiting/"
                  }
                  className="text-[#012555] bg-white p-3 rounded-full"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </Link>
                <Link
                  href={"https://www.tiktok.com/@diamondsportsrecruiting"}
                  className="text-[#012555] bg-white p-3 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07"
                    />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
