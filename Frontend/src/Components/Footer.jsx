const Footer = () => {
    return (
      <>
          <div className="bg-black text-white">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 font-semibold p-4 md:p-8">
                  <div className="flex flex-col text-xs">
                      <h6 className="pb-3 text-gray-400">ABOUT</h6>
                      <a href="#" className="text-white">Contact Us</a>
                      <a href="#" className="text-white">About Us</a>
                      <a href="#" className="text-white">Careers</a>
                      <a href="#" className="text-white">Flipkart Stories</a>
                      <a href="#" className="text-white">Press</a>
                      <a href="#" className="text-white">Corporate Information</a>
                  </div>

                  <div className="flex flex-col text-xs">
                      <h6 className="pb-3 text-gray-400">GROUP COMPANIES</h6>
                      <a href="#" className="text-white">Myntra</a>
                      <a href="#" className="text-white">Shopsy</a>
                      <a href="#" className="text-white">Cleartrip</a>
                  </div>

                  <div className="flex flex-col text-xs">
                      <h6 className="pb-3 text-gray-400">HELP</h6>
                      <a href="#" className="text-white">Payment</a>
                      <a href="#" className="text-white">Shipping</a>
                      <a href="#" className="text-white">Cancellation & Returns</a>
                      <a href="#" className="text-white">FAQ</a>
                  </div>

                  <div className="flex flex-col text-xs">
                      <h6 className="pb-3 text-gray-400">CONSUMER POLICY</h6>
                      <a href="#" className="text-white">Cancellation & Returns</a>
                      <a href="#" className="text-white">Terms of Use</a>
                      <a href="#" className="text-white">Security</a>
                      <a href="#" className="text-white">Privacy</a>
                      <a href="#" className="text-white">Sitemap</a>
                      <a href="#" className="text-white">EPR Compliance</a>
                  </div>

                  <div className="text-xs">
                      <h6 className="pb-3 text-gray-400">Mail Us:</h6>
                      <p>
                          Flipkart Internet Private Limited,<br/>
                          Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br/>
                          Outer Ring Road, Devarabeesanahalli Village,<br/>
                          Bengaluru, 560103, Karnataka, India
                      </p>
                  </div>

                  <div className="text-xs">
                      <h6 className="pb-3 text-gray-400">Registered Office Address</h6>
                      <p>
                          Flipkart Internet Private Limited,<br/>
                          Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br/>
                          Outer Ring Road, Devarabeesanahalli Village,<br/>
                          Bengaluru, 560103, Karnataka, India<br/>
                          CIN: U51109KA2012PTC066107<br/>
                          Telephone: <span className="text-blue-400 cursor-pointer">044-45614700<span className="text-white">/</span>044-67415800</span>
                      </p>
                  </div>
              </div>

              <div className="flex flex-wrap text-sm justify-center gap-4 p-3 border-t border-gray-700">
                  <a href="#" className="hover:text-blue-400 transition-colors">Become a Seller</a>
                  <a href="#" className="hover:text-blue-400 transition-colors">Advertise</a>
                  <a href="#" className="hover:text-blue-400 transition-colors">Gift Cards</a>
                  <a href="#" className="hover:text-blue-400 transition-colors">Help Center</a>
                  <h6 className="text-white">&copy; 2007-2025 Flipkart.com</h6>
              </div>
          </div>
      </>
    );
  }

  export default Footer;