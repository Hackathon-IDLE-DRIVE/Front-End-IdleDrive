import React, { useContext, useEffect, useState } from "react";
import Transaction_BackOff from "../../components/Card/transactionList_BackOffice";
import { AuthContext } from "../../service/context/AuthContext";
import { getTotalCost, getHistoryTransaction } from "../../service/cars_rental";

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [historyOrder, setHistoryOrder] = useState([]);

  const [cost, setCost] = useState({
    income: 0,
    outcome: 0,
    revenus: 0,
  });

  useEffect(() => {
    const fetchCost = async () => {
      const res = await getTotalCost(user.id_rental);
      setCost({
        income: new Intl.NumberFormat().format(
          res.sumTotalCost - (20 / 100) * res.sumTotalCost
        ),
        outcome: new Intl.NumberFormat().format((20 / 100) * res.sumTotalCost),
        revenus: new Intl.NumberFormat().format(res.sumTotalCost),
      });
    };

    const fetchHistory = async () => {
      const res = await getHistoryTransaction(user.id_rental);
      setHistoryOrder(res);
      console.log(res);
    };
    fetchCost();
    fetchHistory();
  }, [user.id_rental]);

  return (
    <>
      {cost && historyOrder && (
        <>
          <div className="my-10 mx-20">
            <div className="text-3xl font-bold text-blue-700">กระแสรายได้</div>
            <div className="text-5xl font-bold text-blue-700">
              {cost.revenus} BAHT
            </div>
          </div>

          <div className="mx-auto p-10 w-2/3 h-60 shadow-xl drop-shadow-2xl rounded-2xl flex justify-around items-center border-[#D9D9D9] border-2">
            <div className="text-center flex flex-col gap-8">
              <div className="text-4xl font-bold text-blue-700">ยอดทั้งหมด</div>
              <div className="text-4xl font-bold text-black">
                {cost.income}
                <span> ฿</span>
              </div>
            </div>
            <div className="h-full border-blue-700 border-2" />
            <div className="text-center flex flex-col gap-8">
              <div className="text-4xl font-bold text-blue-700">
                ค่าใช้จ่ายทั้งหมด
              </div>
              <div className="text-4xl font-bold text-black">
                {cost.outcome}
                <span> ฿</span>
              </div>
            </div>
          </div>

          <div className="w-2/3 mx-auto my-10 text-left">
            <div className="text-3xl font-bold text-blue-700">
              ธุรกรรมล่าสุด
            </div>
            {historyOrder && historyOrder.map((order, index)=>(
              <Transaction_BackOff key={index} rentData={order}/>
            ))}
            
          </div>
        </>
      )}
    </>
  );
};
