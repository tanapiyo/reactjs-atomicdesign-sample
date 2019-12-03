import React, {useState} from 'react';

import { Button } from "@blueprintjs/core";
import styles from "./style.scss"//CSS Modulesのやりかた？（importの名前）

const BaseButton = ({children, ...props}) => {//onClickもsizeもcolorもpropsに入れて受け渡す？
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Button
      className={styles.button}
      large = {true}
      active = {isClicked}
      {...props}
      onClick={()=>setIsClicked(!isClicked)}//ここの処理のかきわけ
    >
      {children}
    </Button>
  );
}

export default BaseButton;