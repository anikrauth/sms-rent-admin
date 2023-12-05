
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableUserBalance from "@/components/Tables/TableUserBalance";
export default function ManageUsersIncome(){
    return(
        <main className="mx-auto max-w-270">
            <Breadcrumb pageName="Manage Users Balance" />
            <TableUserBalance />
        </main>
    )
}