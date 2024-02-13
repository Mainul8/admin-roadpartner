import React from 'react';
import { BRAND } from '../../types/brand';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';

const customerData = [
  {
    
    firstname: 'Sucheta',
    lastname: 'Goswami',
    email: 'sucheta12@gmail.com',
    mobile: 9845765162,
    service:'Truck Repair',
  },
  {
    firstname: 'Shubham',
    lastname: 'Pal',
    email: 'shubham12@gmail.com',
    mobile: 9845765162,
    service:'Truck Repair',
  },
  {
    firstname: 'Sucheta',
    lastname: 'Goswami',
    email: 'sucheta12@gmail.com',
    mobile: 9845765162,
    service:'Truck Repair',
  },
  {
    firstname: 'Shubham',
    lastname: 'Pal',
    email: 'shubham12@gmail.com',
    mobile: 9845765162,
    service:'Truck Repair',
  },
  {
    firstname: 'Sucheta',
    lastname: 'Goswami',
    email: 'sucheta12@gmail.com',
    mobile: 9845765162,
    service:'Truck Repair',
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Customers
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              First Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Last Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email Address
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Mobile Number
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Service
            </h5>
          </div>
        </div>

        {customerData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === customerData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <p className="hidden text-black dark:text-white sm:block">{brand.firstname}</p>
              </div>
              
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.lastname}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{brand.email}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{brand.mobile}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.service}</p>
            </div>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
