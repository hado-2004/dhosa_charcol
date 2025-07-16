
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import logo1 from '../image/logo1.png';
import logo2 from '../image/logo2.png';

const Footer = () => {
  return (
    <div className="bg-cover bg-center text-white" style={{ backgroundImage: "url('/dosa-bg.jpg')" }}>
      <div className="bg-black bg-opacity-70 py-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Us */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm">
            Dosa Charcoal Restaurant you will find a wide selection of vegetarian dishes.
            We only use fresh ingredients and follow traditional recipes from authentic cooking.
          </p>

          {/* Socials */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Follow Us On</h3>
            <div className="flex space-x-4 text-xl">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              <FaGoogle />
            </div>
          </div>

          {/* Delivery */}
          <div className="mt-6" >
            <h3 className="font-semibold mb-2">Available On</h3>
            <div className="flex space-x-4">
              <img src={logo1} alt="Swiggy" className="h-6" width={100}/><br />
              <img src={logo2} alt="Zomato" className="h-6" width={100}/><br /><br />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm list-unstyled">
            <li>› Home</li>
            <li>› About Us</li>
            <li>› Our Menu</li>
            <li>› Gallery</li>
            <li>› Privacy Policy</li>
            <li>› Contact Us</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <div className="flex items-start space-x-2 mb-4">
            <MdLocationOn size={20} />
            <p className="text-sm">
              Main Branch: Beside IT Park, Opp. Shell Petrol Pump, AR Mall, Panvel Point, Mota Varachha.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm mb-2">
            <MdPhone size={18} />
            <span>+91 98983 54000</span>
          </div>
          <div className="flex items-center space-x-2 text-sm mb-2">
            <MdPhone size={18} />
            <span>+91 98984 54000</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MdEmail size={18} />
            <span>info@dosacharcoal.com</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
