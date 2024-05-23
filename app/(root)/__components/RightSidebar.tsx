import Image from "next/image";
import Link from "next/link";

interface Props {
  user: Partial<User>;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}

const RightSidebar: React.FC<Props> = (props) => {
  const { user, transactions, banks } = props;

  return (
    <aside className="no-scrollbar hidden h-screen max-h-screen flex-col gap-8 border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll !important">
      <Profile user={user} />
      <Banks />
      <Budgets />
    </aside>
  );
};

export default RightSidebar;

const Profile = ({ user }: { user: Partial<User> }) => {
  return (
    <div>
      <ProfileBanner user={user.firstName?.[0]} />
      <ProfileDetails user={user} />
    </div>
  );
};

const ProfileBanner = ({ user }: { user?: string }) => {
  return (
    <>
      <div className="bg-profile-banner h-[120px] w-full bg-cover" />

      <div className="relative flex px-6 max-xl:justify-center">
        <div className="flex justify-center items-center absolute -top-10 size-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-profile">
          <span className="text-5xl font-bold text-[#0348AE]">
            {user ?? "G"}
          </span>
        </div>
      </div>
    </>
  );
};

const ProfileDetails = ({ user }: { user: Partial<User> }) => {
  return (
    <div className="flex flex-col gap-1 pt-24 px-6 font-inter">
      <p className="header-2">{`${user.firstName} ${user.lastName}`}</p>
      <p className="text-16 font-normal text-gray-600">{user.email}</p>
    </div>
  );
};

const Banks = () => {
  return (
    <div className="flex gap-6 px-6 justify-between">
      <p className="header-2">My Banks</p>
      <Link href="/" className="flex gap-2">
        <Image src={"/icons/plus.svg"} alt="plus" width={14} height={14} />
        <p className="text-14 font-semibold text-gray-600">Add bank</p>
      </Link>
    </div>
  );
};

const Budgets = () => {
  return (
    <div className="p-6  border-t border-gray-200">
      <p className=" text-16 font-semibold text-gray-900">My Budgets</p>
    </div>
  );
};
