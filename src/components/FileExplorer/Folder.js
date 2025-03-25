import React, { useState } from "react";
import styles from "./FileExplorer.module.css";

function Folder({ explorer }) {
  const [isExapnd, setIsExpand] = useState(false);
  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div>
        <div className={styles.folder} onClick={() => setIsExpand(!isExapnd)}>
          📁{explorer.name}
        </div>
        {/* <div>
          {explorer.items.map((exp) => (
            <Folder explorer={exp} key={exp.id} />
          ))}
        </div> */}

        <div className={styles.files}>
          {isExapnd &&
            explorer.items.map((exp) => <Folder explorer={exp} key={exp.id} />)}
        </div>
      </div>
    );
  } else {
    return <div>📄{explorer.name}</div>;
  }
}

export default Folder;
