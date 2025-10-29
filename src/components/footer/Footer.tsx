import QRCode from "/991387c05dd6d44594e01b675513068803e2426d.jpg";
import GooglePlay from "/a61d4c7110b18ab55a1e1a07ebf54a46ebb07284.png";
import ApplePlay from "/38932d5accb54c528f9bcf326ca48ea29bd6d890.png";

export const Footer = () => {
  return (
    <footer className="w-[1440px] h-[440px] absolute left-[50%] translate-x-[-50%] mt-8 pt-16 text-[#FAFAFA] bg-black">
      <div className="container max-w-[1170px] mx-auto">
        <div className="flex gap-20">
          <div className="flex flex-col gap-4 ">
            <h4 className="text-2xl font-bold">Exclusive</h4>
            <h5 className="text-[20px] font-medium">Subscribe</h5>
            <p>Get 10% off your first order</p>
            <input
              className="placeholder:text-[#0000003b] outline outline-[#fafafa] rounded-[4px] w-[217px] py-2.5 px-5"
              type="text"
              placeholder="Enter your email"
              name="search"
            />
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h4 className="text-2xl font-bold">Support</h4>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <span>+88015-88888-9999</span>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h4 className="text-2xl font-bold">Account</h4>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h4 className="text-2xl font-bold">Quick Link</h4>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h4 className="text-2xl font-bold">Download App</h4>
            <p>Save $3 with App New User Only</p>
            <div className="flex gap-2">
              <img
                className="w-[80px] h-[80px] border border-white"
                src={QRCode}
                alt=""
              />
              <div className="flex flex-col">
                <img className="relative top-[-27px]" src={GooglePlay} alt="" />
                <img className="relative top-[-38px]" src={ApplePlay} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
