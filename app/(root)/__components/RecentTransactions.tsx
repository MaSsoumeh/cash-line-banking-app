import { Button } from "@/components/ui/button";
import React from "react";

const RecentTransactions = () => {
  return (
    <section>
      <div className="flex justify-between">
        <p className="header-2">Recent transactions</p>
        <Button variant="outline">View all</Button>
      </div>
    </section>
  );
};

export default RecentTransactions;
