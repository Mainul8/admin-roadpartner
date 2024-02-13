import React from 'react';
import { Package } from '../../types/package';

const contactData = [
  {
    name: 'Jhon Walker',
    email: 'jhon1.walker@gmail.com',
    subject: 'Truck Raise',
    message: 'Hello',
  },
  {
    name: 'Jhon Walker',
    email: 'jhon1.walker@gmail.com',
    subject: 'Truck Raise',
    message: 'Hello',
  },
  {
    name: 'Jhon Walker',
    email: 'jhon1.walker@gmail.com',
    subject: 'Truck Raise',
    message: 'Hello',
  },
  {
    name: 'Jhon Walker',
    email: 'jhon1.walker@gmail.com',
    subject: 'Truck Raise',
    message: 'Hello',
  },
];

const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Contact Us
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email Address
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Subject
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Message
            </h5>
          </div>
          
        </div>

        {contactData.map((contact, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === contactData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <p className="hidden text-black dark:text-white sm:block">{contact.name}</p>
              </div>
              
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{contact.email}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{contact.subject}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{contact.message}</p>
            </div>

            

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableThree;
