import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Image from "next/image";
import DashboardIcon from "../Icons/DashboardIcon";
import DownArrow from "../Icons/DownArrow";
import ChartIcon from "../Icons/ChartIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import UsersIcon from "../Icons/UsersIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import CashIcon from "../Icons/CashIcon";
import BillsIcon from "../Icons/BillsIcon";
import TruckIcon from "@/components/Icons/TruckIcon";
import HandShakeIcon from "@/components/Icons/HandShakeIcon";
import LogoutIcon from "@/components/Icons/LogoutIcon";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}


const SidebarData = [
    {
        label: "Dashboard",
        icon: <DashboardIcon className="fill-current"/>,
        href: "/dashboard"
    },
    {
        label: "Transactions",
        icon: <BillsIcon/>,
        href: "/dashboard/transactions",
    },
    {
        label: "Manage Users",
        icon:  <UsersIcon className="fill-current"/>,
        href: "#",
        dropdown: [
            {
                label: "All Users",
                icon: "",
                href: "/dashboard/all-users",
            },
            {
                label: "Manage User Balance",
                icon: "",
                href: "/dashboard/manage-users-balance",
            },
        ]
    },
    {
        label: "Activities",
        icon: <CashIcon/>,
        href: "/dashboard/activities",
    },
    {
        label: "Manage Content",
        icon:  <BillsIcon/>,
        href: "#",
        dropdown: [
            {
                label: "Manage SEO",
                icon: "",
                href: "/dashboard/manage-seo",
            },
        ]
    },
    {
        label: "Account",
        icon: <ProfileIcon className="fill-current"/>,
        href: "#",
        dropdown: [
            {
                label: "Update profile",
                icon: "",
                href: "/dashboard/profile",
            },
            {
                label: "Change Password",
                icon: "",
                href: "/dashboard/profile",
            },
        ]
    },
    {
        label: "Settings",
        icon: <SettingsIcon className="fill-current"/>,
        href: "/dashboard/settings",
    },
]


const Sidebar = ({sidebarOpen, setSidebarOpen}: SidebarProps) => {
    const pathname = usePathname();

    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);

    let storedSidebarExpanded = "true";
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
    );

    // close on click outside
    useEffect(() => {
        const clickHandler = ({target}: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({keyCode}: KeyboardEvent) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector("body")?.classList.add("sidebar-expanded");
        } else {
            document.querySelector("body")?.classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);


    // console.log(SidebarData)

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <Link className="font-bold text-[32px] leading-[38px] inline-block" href="/">
                   Admin Panel
                </Link>

                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <svg
                        className="fill-current"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>
            {/* <!-- SIDEBAR HEADER --> */}

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-2 py-4 px-4  lg:px-6">
                    {/* <!-- Menu Group --> */}
                    <div>
                        {/* <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3> */}

                        <ul className="mb-6 flex flex-col gap-1.5">
                            {/* <!-- Menu Item  --> */}
                            {
                                SidebarData?.map((item, idx: number) => {
                                    return (
                                        <li key={idx}>
                                            {
                                                item?.dropdown ? (
                                                    // 1st Drop Down
                                                    <SidebarLinkGroup
                                                        activeCondition={
                                                            pathname === `${item?.href}` || pathname.includes(`${item?.href}`)
                                                        }
                                                    >
                                                        {(handleClick, open) => {
                                                            return (
                                                                <React.Fragment>
                                                                    <Link
                                                                        href={`${item?.href}`}
                                                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === `${item?.href}` ||
                                                                            pathname.includes(`${item?.href}`)) &&
                                                                        "bg-graydark dark:bg-meta-4"
                                                                        }`}
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            sidebarExpanded
                                                                                ? handleClick()
                                                                                : setSidebarExpanded(true);
                                                                        }}
                                                                    >
                                                                        {item?.icon}
                                                                        {item?.label}
                                                                        <DownArrow
                                                                            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`}/>

                                                                    </Link>
                                                                    {/* <!-- 1st Dropdown Menu Start --> */}
                                                                    <div
                                                                        className={`translate transform overflow-hidden ${!open && "hidden"
                                                                        }`}
                                                                    >
                                                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                                            {
                                                                                item?.dropdown?.map((itemTwo: any, idx: number) => {
                                                                                    return (
                                                                                        <li key={idx}>
                                                                                            {
                                                                                                // 2nd Dropdown
                                                                                                itemTwo?.dropdown ? (
                                                                                                    <SidebarLinkGroup
                                                                                                        activeCondition={
                                                                                                            pathname === `${itemTwo?.href}` || pathname.includes(`${itemTwo?.href}`)
                                                                                                        }
                                                                                                    >
                                                                                                        {(handleClick, open) => {
                                                                                                            return (
                                                                                                                <React.Fragment>
                                                                                                                    <Link
                                                                                                                        href={`${itemTwo?.href}`}
                                                                                                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === `${itemTwo?.href}` ||
                                                                                                                            pathname.includes(`${itemTwo?.href}`)) &&
                                                                                                                        "bg-graydark dark:bg-meta-4"
                                                                                                                        }`}
                                                                                                                        onClick={(e) => {
                                                                                                                            e.preventDefault();
                                                                                                                            sidebarExpanded
                                                                                                                                ? handleClick()
                                                                                                                                : setSidebarExpanded(true);
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        {itemTwo?.icon}
                                                                                                                        {itemTwo?.label}
                                                                                                                        <DownArrow
                                                                                                                            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`}/>

                                                                                                                    </Link>
                                                                                                                    {/* <!-- 2nd Dropdown Menu Start --> */}
                                                                                                                    <div
                                                                                                                        className={`translate transform overflow-hidden ${!open && "hidden"
                                                                                                                        }`}
                                                                                                                    >
                                                                                                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                                                                                            {
                                                                                                                                itemTwo?.dropdown?.map((itemthree: any, idx: number) => {
                                                                                                                                    return (
                                                                                                                                        <li key={idx}>
                                                                                                                                            {
                                                                                                                                                itemthree?.dropdown ? (
                                                                                                                                                    <button></button>
                                                                                                                                                ): (
                                                                                                                                                    <Link
                                                                                                                                                        href={`${itemthree?.href}`}
                                                                                                                                                        className={`first-letter:group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === `${itemthree?.href}` &&
                                                                                                                                                        "text-white"
                                                                                                                                                        }`}
                                                                                                                                                    >
                                                                                                                                                        {
                                                                                                                                                            itemthree?.label
                                                                                                                                                        }
                                                                                                                                                    </Link>
                                                                                                                                                )
                                                                                                                                            }

                                                                                                                                        </li>
                                                                                                                                    )
                                                                                                                                })
                                                                                                                            }


                                                                                                                        </ul>


                                                                                                                    </div>
                                                                                                                    {/* <!-- Dropdown Menu End --> */}
                                                                                                                </React.Fragment>
                                                                                                            );
                                                                                                        }}
                                                                                                    </SidebarLinkGroup>
                                                                                                ): (
                                                                                                    <Link
                                                                                                        href={`${itemTwo?.href}`}
                                                                                                        className={`first-letter:group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === `${itemTwo?.href}` &&
                                                                                                        "text-white"
                                                                                                        }`}
                                                                                                    >
                                                                                                        {
                                                                                                            itemTwo?.label
                                                                                                        }
                                                                                                    </Link>
                                                                                                )
                                                                                            }

                                                                                        </li>
                                                                                    )
                                                                                })
                                                                            }


                                                                        </ul>


                                                                    </div>
                                                                    {/* <!-- Dropdown Menu End --> */}
                                                                </React.Fragment>
                                                            );
                                                        }}
                                                    </SidebarLinkGroup>
                                                ) : (
                                                    <Link href={`${item?.href}`}
                                                          className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 `}>
                                                        {item?.icon}
                                                        {item?.label}
                                                    </Link>
                                                )
                                            }

                                        </li>
                                    )
                                })
                            }
                            {/* <!-- Menu Item  --> */}

                            {/*<h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">*/}
                            {/*  OTHERS*/}
                            {/*</h3>*/}
                            <li>
                                <button
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 w-full `}>
                                    <LogoutIcon className="fill-current"/>
                                    Logout
                                </button>
                            </li>

                        </ul>
                    </div>
                </nav>
                {/* <!-- Sidebar Menu --> */}
            </div>
        </aside>
    );
};

export default Sidebar;
