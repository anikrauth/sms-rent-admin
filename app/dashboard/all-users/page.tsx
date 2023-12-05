
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableAllUser from "@/components/Tables/TableAllUsers";
export default function AllUsers(){
    return(
        <main className="mx-auto max-w-270">
            <Breadcrumb pageName="All Users" />
            <TableAllUser />
        </main>
    )
}