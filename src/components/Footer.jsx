import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
const Footer = () => {
  const Links = [
    { text: "Our Journey", link: "/" },
    { text: " What makes us stand apart", link: "/" },
    { text: " 90 quality tests", link: "/" },
    { text: "The promise of 10", link: "/" },
    { text: " Vision, Mission &amp; values", link: "/" },
    { text: " Leadership Team", link: "/" },
    { text: "Contact us", link: "/" },
    { text: "Apply For Dealership", link: "/" },
    { text: "Referral Program", link: "/" },
    { text: "UAE", link: "/" },
  ];

  const Links2 = [
    { text: "Helios", link: "/" },
    { text: "Vedica", link: "/" },
    { text: "Helios Soda", link: "/" },
    { text: "Limonata", link: "/" },
    { text: "Helios Soda", link: "/" },
    { text: "Pop", link: "/" },
  ];
  return (
    <footer className=" text-slate-500 lg:px-[300px] px-4 bg-sky-200 w-full min-h-[70vh] mx-auto font-sans text-sm leading-relaxed flex py-20">
      <div className="flex lg:flex-row lg:flex-nowrap flex-col justify-between w-full  gap-12 flex-wrap ">
        <section className="lg:border-b lg:border-blue-700  w-full pb-4">
          <h3 className="text-lg font-semibold mb-8 text-slate-700">
            About Us
          </h3>
          <ul className="flex flex-col  gap-5 space-y-2">
            {Links.map((item, idx) => (
              <li key={idx}>
                <Link to={"/"} className="hover:underline hover:text-slate-400">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="lg:border-b lg:border-blue-700 pb-4 w-full">
          <h3 className="text-lg font-semibold mb-8 text-slate-700">Brands</h3>
          <ul className="space-y-2 flex flex-col w-full gap-5 ">
            {Links2.map((item, idx) => (
              <li key={idx + "ASD"}>
                <Link to="/" className="hover:underline hover:text-slate-700">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="lg:border-b lg:border-blue-700  w-full pb-4">
          <h3 className="text-lg font-semibold mb-8 text-slate-700">
            Helios Initiatives
          </h3>
          <ul className="space-y-2 flex flex-col  gap-5 ">
            <li>
              <a href="/" className="hover:underline hover:text-blue-100">
                Bottles for change
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-blue-100">
                Nayi Umeed
              </a>
            </li>
          </ul>
        </section>

        <section className="lg:border-b lg:border-blue-700 pb-4  w-full">
          <h3 className="text-lg font-semibold mb-8 text-slate-700">
            News Room
          </h3>
          <ul className="space-y-2 flex flex-col  gap-5 ">
            <li>
              <a href="/" className="hover:underline hover:text-blue-100">
                Press Release
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-blue-100">
                News
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-blue-100">
                Blogs
              </a>
            </li>
          </ul>
        </section>

        <section className="lg:border-b lg:border-blue-700 pb-4  w-full">
          <h3 className="text-lg font-semibold mb-8 text-slate-700">Legal</h3>
          <ul className="space-y-2 flex flex-col  gap-5 ">
            <li>
              <a href="/" className="hover:underline hover:text-blue-100">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-blue-100">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-blue-100">
                Cancellation &amp; Refund Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-blue-100">
                FAQs
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-blue-100">
                Annual Return
              </a>
            </li>
          </ul>
        </section>

        <section className="flex flex-col  gap-5  w-full ">
          <h3 className="text-lg font-semibold mb-8 text-slate-700">Contact</h3>
          <address className="not-italic mb-2 text-slate-500">
            Helios International Pvt. Ltd.
            <br />
            CTS No. 525/1A/1, Western Express Highway,
            <br />
            Opp Hindustan Unilever, at Chakala Division,
            <br />
            Andheri (East), Mumbai - 400 099
            <br />
          </address>
          <a
            href="tel:18001211007"
            className="block mb-1 hover:underline hover:text-blue-100"
          >
            Call: 1800 121 1007
          </a>
          <a
            href="mailto:callwecare@Helios.co.in"
            className="block mb-2 hover:underline hover:text-blue-100"
          >
            Email: callwecare@Helios.co.in
          </a>
          <div className="mb-3 text-slate-500">
            8 AM to 8 PM (Monday to Saturday)
          </div>

          <div
            className="flex gap-8 w-full items-center justify-bwteen "
            aria-label="Social media links"
          >
            <Instagram />
            <Facebook />
            <Youtube />
            <Twitter />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
