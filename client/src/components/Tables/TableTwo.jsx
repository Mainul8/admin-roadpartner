import { Product } from '../../types/product';
import ProductOne from '../../images/product/product-01.png';
import ProductTwo from '../../images/product/product-02.png';
import ProductThree from '../../images/product/product-03.png';
import ProductFour from '../../images/product/product-04.png';

const contactData =[
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

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Contact Us
        </h4>
      </div>

      <div className="grid grid-cols-3 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Email Address</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Subject</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Message</p>
        </div>
       
      </div>

      {contactData.map((contact, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              
              <p className="text-sm text-black dark:text-white">
                {contact.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {contact.email}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {contact.subject}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{contact.message}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
