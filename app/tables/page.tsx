import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableTransactions from "@/components/Tables/TableTransactions";
import TableUserBalance from "@/components/Tables/TableUserBalance";

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableUserBalance />
        <TableTransactions />
      </div>
    </>
  );
};

export default TablesPage;
