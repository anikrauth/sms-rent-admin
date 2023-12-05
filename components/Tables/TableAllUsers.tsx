'use client'
import Image from "next/image";
import { Product } from "@/types/product";
import SearchIcon from "@/components/Icons/SearchIcon";
import Actions from "@/components/common/Actions";
import TableFour from "@/components/Tables/TableFour";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";


const packageData: Product[] = [
    {
        image: "/images/product/product-01.png",
        name: "Apple Watch Series 7",
        category: "Electronics",
        price: 296,
        sold: 22,
        profit: 45,
    },
    {
        image: "/images/product/product-02.png",
        name: "Macbook Pro M1",
        category: "Electronics",
        price: 546,
        sold: 12,
        profit: 125,
    },
    {
        image: "/images/product/product-03.png",
        name: "Dell Inspiron 15",
        category: "Electronics",
        price: 443,
        sold: 64,
        profit: 247,
    },
    {
        image: "/images/product/product-04.png",
        name: "HP Probook 450",
        category: "Electronics",
        price: 499,
        sold: 72,
        profit: 103,
    },
];

const TableAllUser = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="mb-6 flex justify-between items-center">
                <input type="text" placeholder="Search by user email.." className="w-full p-3 focus-visible:outline-none " />
                <SearchIcon className="w-6 h-6" />
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
                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {packageData.map((packageItem, key) => (
                        <tr key={key}>

                            <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                <Image
                                    src={packageItem.image}
                                    width={60}
                                    height={50}
                                    alt="Product"
                                />
                                {/*<h5 className="font-medium text-black dark:text-white">*/}
                                {/*    #{packageItem.id}*/}
                                {/*</h5>*/}
                            </td>

                            <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                <h5 className="font-medium text-black dark:text-white">
                                    {packageItem.name}
                                </h5>

                            </td>


                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                <p
                                    className="text-black dark:text-white font-medium"
                                >
                                    ${packageItem.price}
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

export default TableAllUser;
