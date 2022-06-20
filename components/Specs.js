import tb from "../styles/textbox.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link"

export default function Specs(props) {
  return (
    <div className={styles.main}>
      <div className={tb.headerBox}>
        <h1 className={tb.headerText}>{props.name}</h1>
        <table style={{
          justifyContent: "center",
          alignContent: "center",
          margin: "0 auto",
        }}>
          <tr>
            <td className={tb.tableCategory}>Languages:</td>
            <td className={tb.tableDesc}>{props.language}</td>
          </tr>
          <tr>
            <td className={tb.tableCategory}>Libraries:</td>
            <td className={tb.tableDesc}>{props.library}</td>
          </tr>
        </table>
      </div>
      <div className={tb.bodyParagraph}>
        <h1 className={tb.headerText}>Description</h1>
        <p className={tb.bpText}>{props.desc}</p>
        <h2 className={tb.headerText}>Links</h2>
        <p className={tb.bpText} style={{
          color: "#22eded",
          textDecoration: "underline"
        }}><a target="_blank" href={props.url}>{props.siteName}</a></p>
      </div>
    </div>
  );
}
