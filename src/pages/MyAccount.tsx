import type { UserData } from "../App";
import { ButtonComponent } from "../components/genericComponents/ButtonComponent";

type Props = {
  userData: UserData[];
};

export const MyAccount = ({ userData }: Props) => {
  const loginUser = userData.find((u) => u.isLogin === true);
  const loginUserName = loginUser?.userName;
  return (
    <section className="mt-16">
      <div className="flex items-center justify-between text-[14px]">
        <div className="flex gap-3 text-[14px]">
          <span className="text-[#0000003b]">Home</span> <span>/</span>
          My Account
        </div>
        <span>
          Welcome! <span className="text-[#DB4444]">{loginUserName}!</span>
        </span>
      </div>

      <div className="flex justify-between mt-20 mb-24">
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-medium">Manage My Account</h3>
            <ul className="flex flex-col gap-2 text-[#0000003b] pl-8 mt-5">
              <li className="text-[#DB4444]">My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">My Orders</h3>
            <ul className="flex flex-col gap-2 text-[#0000003b] pl-8 mt-5">
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>
          </div>
          <h3 className="font-medium">My WishList</h3>
        </div>

        <div className="w-[870px] px-20 py-10 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded-[4px]">
          <h3 className="text-[20px] text-[#DB4444]">Edit Your Profile</h3>
          <form className="flex flex-col gap-5 mt-2.5">
            <div className="flex gap-12">
              <div className="flex flex-1 flex-col gap-2">
                <span>First Name</span>
                <input
                  className="bg-[#F5F5F5]  h-[50px] p-5 rounded-[4px]"
                  type="text"
                  placeholder="mjh"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <span>Last Name</span>
                <input
                  className="bg-[#F5F5F5] h-[50px] p-5 rounded-[4px]"
                  type="text"
                  placeholder="Othman"
                />
              </div>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-1 flex-col gap-2">
                <span>Email</span>
                <input
                  className="bg-[#F5F5F5]  h-[50px] p-5 rounded-[4px]"
                  type="text"
                  placeholder="mjh@gmail.com"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <span>Address</span>
                <input
                  className="bg-[#F5F5F5] h-[50px] p-5 rounded-[4px]"
                  type="text"
                  placeholder="Kingston, 5236, United State"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <span>Password Changes</span>
              <input
                className="bg-[#F5F5F5]  h-[50px] p-5 rounded-[4px]"
                type="text"
                placeholder="Current Passwod"
              />
              <input
                className="bg-[#F5F5F5]  h-[50px] p-5 rounded-[4px]"
                type="text"
                placeholder="New Passwod"
              />
              <input
                className="bg-[#F5F5F5]  h-[50px] p-5 rounded-[4px]"
                type="text"
                placeholder="Confirm New Passwod"
              />
            </div>
            <div className="flex justify-end gap-8">
              <button className="cursor-pointer">Cancel</button>
              <ButtonComponent text="Save Changes" width={214} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
