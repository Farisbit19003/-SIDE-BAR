import React from "react";
import { RecentPurchasesTable } from "./table/recentPurchasesTable";
import { WithdrawlsTable } from "./table/withdrawlsTable";
import { PopularProductTable } from "./table/popularProductTable";

const Table = () => {
  return (
    <>
     <RecentPurchasesTable/>
     <WithdrawlsTable/>
     <PopularProductTable/>
    </>
  );
};
export default Table;
