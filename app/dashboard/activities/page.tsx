import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableActivities from "@/components/Tables/TableActivities";

export default function Activities(){
    return(
        <main className="mx-auto max-w-270">
            <Breadcrumb pageName="Activities" />
            <TableActivities />
        </main>
    )
}