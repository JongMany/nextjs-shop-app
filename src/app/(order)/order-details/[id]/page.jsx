import React from "react";

function OrderDetails({ params: { id }, searchParams }) {
  const { hello } = searchParams;
  return (
    <div>
      OrderDetails {id}
      <br />
      {hello}
    </div>
  );
}

export default OrderDetails;
