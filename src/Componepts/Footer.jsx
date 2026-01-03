import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-36 py-12">
      
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* BRAND */}
        <div>
          <img src={assets.logo} alt="Logo" className="mb-4 mx-auto md:mx-0" />

          <p className="text-sm opacity-80">
            Lorem Ipsum has been the industry's standard dummy text
          </p>
          <p className="text-sm opacity-80">
            ever since the 1500s, when an unknown printer took a galley
          </p>
          <p className="text-sm opacity-80">
            of type and scrambled it to make a type specimen book.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <img src={assets.appStore} alt="App Store" className="h-10" />
            <img src={assets.googlePlay} alt="Google Play" className="h-10" />
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Company</h2>
          <ul className="space-y-2 text-sm opacity-80">
            <li className="cursor-pointer hover:opacity-100">Home</li>
            <li className="cursor-pointer hover:opacity-100">About us</li>
            <li className="cursor-pointer hover:opacity-100">Contact us</li>
            <li className="cursor-pointer hover:opacity-100">Privacy policy</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Get in touch</h2>
          <p className="text-sm opacity-80 mb-2">09128499618</p>
          <p className="text-sm opacity-80">usidemewilliams69@gmail.com</p>
        </div>

      </div>

      {/* DIVIDER */}
      <hr className="my-8 border-white/20" />

      {/* COPYRIGHT */}
      <p className="text-center text-sm opacity-70">
        Copyright 2025 © GreatStack. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
