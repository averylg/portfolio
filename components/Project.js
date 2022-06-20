import Image from "next/image";
import Link from "next/link";
import Description from "./Description.js";
import ps from "../styles/projects.module.css";
import desc from "../styles/description.module.css";

import { useState } from "react";

export default function Project(props) {
  // const [visible, setVisible] = useState(false);

  return (
    <Link href={props.page}>
      <div
        className={ps.entry}
        id={props.imgName} /*onClick={() => {
      // setVisible(!visible);
      
    }}*/
      >
        {/* <div> */}
        <h2 className={ps.title}>{props.name}</h2>
        {/* </div> */}
        {/* <div className={visible ? desc.bigBox : desc.default}></div> */}
      </div>
    </Link>
  );
}
