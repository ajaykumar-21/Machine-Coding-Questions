import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./Like.module.css";

function Like() {
  const [likes, setLikes] = useState(10);
  const [isLike, setIsLike] = useState(false);
  const [shake, setShake] = useState(false);

  const handleLikeDislike = () => {
    setLikes(likes + (isLike ? -1 : 1));
    setIsLike(!isLike);

    // Trigger the shake animation
    setShake(true);
    setTimeout(() => setShake(false), 300); // Remove shake class after animation duration
  };

  return (
    <div>
      <h3>Like this button</h3>
      <FontAwesomeIcon
        icon={faThumbsUp}
        className={`${styles.likeIcon} ${shake ? styles.shake : ""}`}
        onClick={handleLikeDislike}
        style={{ color: isLike ? "red" : "" }}
      />
      <p>Likes {likes}</p>
    </div>
  );
}

export default Like;

