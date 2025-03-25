import React, { useState } from "react";
import explorer from "./data";
import Folder from "./Folder";

function FileExplorer() {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <div>
      <Folder explorer={explorerData} />
    </div>
  );
}

export default FileExplorer;
