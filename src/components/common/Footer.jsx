import { Container, PrimaryButton, ProfileCard, Title } from "./Design";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className="relative bg-primary py-16 mt-16">
        {isHomePage && <div className="bg-white w-full py-20 -mt-10 rounded-b-[40px] z-10 absolute top-0"></div>}

        <Container className={`${isHomePage ? "mt-32" : "mt-0"} flex flex-col md:flex-row justify-between gap-12`}>
          <div className="w-full md:w-1/3">
            <img src="../images/common/header-logo.png" alt="Artes Fine Auctions" />
            <br />
            <p className="text-gray-300">The first Swiss online auction house for fine string instruments.</p>
            <div className="bg-gray-300 h-[1px] my-8"></div>
            <Title className="font-normal text-gray-100">Subscribe to Our Newsletter</Title>
            <div className="flex items-center justify-between mt-5">
              <input type="text" placeholder="Enter your email" className="w-full h-full p-3.5 py-[15px] text-sm border-none outline-none rounded-l-md" />
              <PrimaryButton className="rounded-none py-3.5 px-8 text-sm hover:bg-indigo-800 rounded-r-md">Submit</PrimaryButton>
            </div>
            <p className="text-gray-300 text-sm mt-3">Email is safe. We don’t spam.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-2/3">
            <div>
              <Title level={5} className="text-white font-normal">Auction Categories</Title>
              <ul className="flex flex-col gap-5 mt-8 text-gray-200">
                <p>Violins</p>
                <p>Violas</p>
                <p>Cellos</p>
                <p>Violin Bows</p>
                <p>Viola Bows</p>
                <p>Cello Bows</p>
              </ul>
            </div>
            <div>
              <Title level={5} className="text-white font-normal">About Us</Title>
              <ul className="flex flex-col gap-5 mt-8 text-gray-200">
                <p>Private Sales</p>
                <p>Trade Sales</p>
                <p>Valuations</p>
                <p>FAQ</p>
                <p>News & Events</p>
              </ul>
            </div>
            <div>
              <Title level={5} className="text-white font-normal">Customer Support</Title>
              <ul className="flex flex-col gap-5 mt-8 text-gray-200">
                <p>Register</p>
                <p>Request a Valuation</p>
                <p>Contact Us</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
              </ul>
            </div>
            <div>
              <Title level={5} className="text-white font-normal">Contact Us</Title>
              <ul className="flex flex-col gap-5 mt-8 text-gray-200">
                <div className="flex items-center gap-2">
                  <FiPhoneOutgoing size={19} />
                  <span> +41 052 232 1292</span>
                  <span> +41 052 232 1291</span>
                  <span> +41 079 225 4617</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineAttachEmail size={22} />
                  <span>info@artesauctions.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoLocationOutline size={22} />
                  <span>Lindenstrasse 4, CH-8400 Winterthur, Switzerland</span>
                </div>
              </ul>
              <div className="flex items-center mt-5 justify-between">
                <ProfileCard className="bg-white">
                  <AiOutlineYoutube size={22} />
                </ProfileCard>
                <ProfileCard className="bg-white">
                  <FaInstagram size={22} />
                </ProfileCard>
                <ProfileCard className="bg-white">
                  <CiTwitter size={22} />
                </ProfileCard>
                <ProfileCard className="bg-white">
                  <CiLinkedin size={22} />
                </ProfileCard>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
