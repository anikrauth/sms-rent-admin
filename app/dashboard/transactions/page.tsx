
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableUserBalance from "@/components/Tables/TableUserBalance";
import TableTransactions from "@/components/Tables/TableTransactions";
export default function Transactions(){
    return(
        <main className="mx-auto max-w-270">
            <Breadcrumb pageName="Transactions" />
            <TableTransactions />
        </main>
    )
}