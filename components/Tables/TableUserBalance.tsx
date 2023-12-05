import { Package } from "@/types/package";
import Actions from "@/components/common/Actions";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";
import SearchIcon from "@/components/Icons/SearchIcon";

const packageData: Package[] = [
  {
    id: "YX8P-76HHJ",
    price: 0.0,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
    amount: 60,
    customerName: 'David'
  },
  {
    id: "YX8P-76HHJ",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
    amount: 20,
    customerName: 'abdul'
  },
  {
    id: "YX8P-76HHJ",
    price: 99.0,
    invoiceDate: `Jan 13,2023`,
    status: "Unpaid",
    amount: 6,
    customerName: 'Jabid'
  },
  {
    id: "YX8P-76HHJ",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Pending",
    amount: 160,
    customerName: 'karim'
  },
];

const TableUsersBalance = () => {
  return (
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 flex justify-between">
          <div className="flex justify-between items-center search_box border-b">
            <input type="text" placeholder="Search by user email.." className="w-full p-2 focus-visible:outline-none " />
            <SearchIcon className="w-6 h-6" />
          </div>
          <DropdownDefault />
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                User Image
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Full Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Email
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Current Balance
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
            </thead>
            <tbody>
            {packageData.map((packageItem, key) => (
                <tr key={key}>

                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    {/*<Image*/}
                    {/*    src={product.image}*/}
                    {/*    width={60}*/}
                    {/*    height={50}*/}
                    {/*    alt="Product"*/}
                    {/*/>*/}
                    <h5 className="font-medium text-black dark:text-white">
                      #{packageItem.id}
                    </h5>
                  </td>

                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.customerName}
                    </h5>

                  </td>


                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p
                        className="text-black dark:text-white font-medium"
                    >
                      ${packageItem.amount}
                    </p>
                  </td>

                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p
                        className="text-black dark:text-white font-medium"
                    >
                      ${packageItem.amount}
                    </p>
                  </td>


                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <Actions />
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default TableUsersBalance;
