import { UserButton } from "@clerk/clerk-react";

const UserDropdown = () => {
  return (
    <div className="border-2 border-brand-neutral-3 flex items-center rounded-full p-[2px]">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default UserDropdown;
