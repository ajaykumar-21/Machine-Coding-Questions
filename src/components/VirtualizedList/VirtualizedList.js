import React from "react";

const LIST = Array.from({ length: 1000 }, (_, index) => index + 1);

function VirtualizedList() {
  console.log(LIST);
  return <div>VirtualizedList</div>;
}

export default VirtualizedList;
