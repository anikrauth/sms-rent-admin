import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import React from "react";

const Settings = () => {
  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" />
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex items-center justify-between">
            <h3 className="font-medium text-black dark:text-white">
              Manage API Key
            </h3>
            <button className="flex  justify-center rounded bg-primary px-[25px] p-[10px] font-medium text-gray">
              Save
            </button>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label className="mb-3 block text-black dark:text-white">
                API Key
              </label>
              <input
                  type="text"
                  placeholder="API Key"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

          </div>
        </div>
      {/*   */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-10">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex items-center justify-between">
            <h3 className="font-medium text-black dark:text-white">
              Manage Commissions
            </h3>
            <button className="flex  justify-center rounded bg-primary px-[25px] p-[10px] font-medium text-gray">
              Save
            </button>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5 ">
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Add Commissions (ex: 5%)
              </label>
              <input
                  type="text"
                  placeholder="Type Commissions"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
