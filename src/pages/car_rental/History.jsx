import React, { useContext, useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../service/context/AuthContext';
import { getHistoryTransaction } from '../../service/cars_rental';
import Transaction_BackOff from '../../components/Card/transactionList_BackOffice';

export const History = () => {
  const { user } = useContext(AuthContext);
  const [historyOrder, setHistoryOrder] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  const handleSortByType = (type) => {
    handleTypeChange(type);
  };
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  const filterCarsByType = (historyOrder) => {
    if (!selectedType) {
      return historyOrder;
    }
    return historyOrder.filter((historyOrder) => historyOrder.rental.RentalStatus === selectedType);
  };

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await getHistoryTransaction(user.id_rental);
      const filteredCars = filterCarsByType(res);
      setHistoryOrder(filteredCars);
    };
    fetchHistory();
  },[user.id_rental, selectedType])

  return (
    <>
      <div className='flex justify-around my-10 flex-col'>
        <div className='text-center font-bold text-5xl mt-30'>รายการทั้งหมด</div>
        <details className="dropdown">
            <summary className="btn border-none shadow-md font-normal text-base bg-white">
              ประเภท
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
              <li>
                <a onClick={() => handleSortByType(null)}>All</a>
              </li>
              <li>
                <a onClick={() => handleSortByType("Wait for Confirm")}>Wait for Confirm</a>
              </li>
              <li>
                <a onClick={() => handleSortByType("Confirm order")}>Confirm order</a>
              </li>
              <li>
                <a onClick={() => handleSortByType("On-delivery")}>On-delivery</a>
              </li>
              <li>
                <a onClick={() => handleSortByType("Pick-up")}>Pick-up</a>
              </li>
              <li>
                <a onClick={() => handleSortByType("During the rental")}>During the rental</a>
              </li>
              <li>
                <a onClick={() => handleSortByType("Complete")}>Complete</a>
              </li>
              <li>
                <a onClick={() => handleSortByType("Cancel")}>Cancel</a>
              </li>
            </ul>
          </details>
      </div>

      <div className="w-3/4 flex flex-col mx-auto my-4">
        {historyOrder && historyOrder.map((order, index)=>(
              <Transaction_BackOff key={index} rentData={order}/>
          ))}  
      </div>
            
         
    </>
  );
};