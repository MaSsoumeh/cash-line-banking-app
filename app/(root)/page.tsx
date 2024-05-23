import { Header } from "@/components/header";
import React from "react";
import TotalBalance from "./__components/TotalBalance";
import RightSidebar from "./__components/RightSidebar";
import RecentTransactions from "./__components/RecentTransactions";

const Home = () => {
  const loggedInUser = {
    lastName: "Zarei",
    firstName: "Masoumeh",
    email: "zarei.massoumeh@gmail.com",
  };

  return (
    <section className="no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll">
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-8 sm:px-8 py-12 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
        <header className="flex flex-col justify-between gap-8">
          <Header
            type="greeting"
            title="Welcome,"
            user={loggedInUser.firstName}
            subtext="Access & manage your account and transactions efficiently."
          />
        </header>

        <TotalBalance
          accounts={MockAccounts}
          totalBanks={MockAccounts.length}
          totalCurrentBalance={calculateTotalBalance(MockAccounts)}
        />

        <RecentTransactions />
      </div>

      <RightSidebar user={loggedInUser} transactions={[]} banks={[]} />
    </section>
  );
};

export default Home;

const calculateTotalBalance = (data: Account[]) => {
  return data.reduce((acc, curr) => acc + curr.currentBalance, 0);
};

const MockAccounts = [
  {
    id: "1",
    availableBalance: 2000,
    currentBalance: 2000,
    officialName: "Bank 1",
    mask: "",
    institutionId: "",
    name: "",
    type: "",
    subtype: "",
    appwriteItemId: "",
    sharableId: "",
  },
  {
    id: "2",
    availableBalance: 3000,
    currentBalance: 3000,
    officialName: "Bank 2",
    mask: "",
    institutionId: "",
    name: "",
    type: "",
    subtype: "",
    appwriteItemId: "",
    sharableId: "",
  },
  {
    id: "3",
    availableBalance: 1470.6,
    currentBalance: 1470.6,
    officialName: "Bank 3",
    mask: "",
    institutionId: "",
    name: "",
    type: "",
    subtype: "",
    appwriteItemId: "",
    sharableId: "",
  },
];
