import { useEffect, useState } from "react";
import { fetchGetOrderList } from "../../api/order";
import MyOrder from "./MyOrder";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function MyOrderList() {
  const [orderList, setOrderList] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetchGetOrderList()
      .then(data => {
        if (data) {
          setOrderList(data);
        }
      })
  }, []);

  return (
    <div className="my-6 w-[560px] max-w-full sm:w-[720px] mx-auto px-4">
      <div className="flex items-center gap-2 text-xl cursor-pointer"
        onClick={() => setVisible(!visible)}>
        {visible
          ? <IoIosArrowUp className="hover:bg-gray-100 rounded-2xl p-1 w-8 h-8" />
          : <IoIosArrowDown className="hover:bg-gray-100 rounded-2xl p-1 w-8 h-8" />}
        <p className="font-semibold">주문 내역</p>
      </div>
      {visible && (
        orderList.map(order => (
        <MyOrder key={order.id} order={order} />
        ))
      )}
    </div>
  );
}

export default MyOrderList;