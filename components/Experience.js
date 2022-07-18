import react, { useState } from "react";
import styles from "../styles/Home.module.css";
import textbox from "../styles/textbox.module.css";
import resume from "../styles/resume.module.css";

function Job(props) {
  return (
    <div>
      <h2 className={textbox.bpTextTitle}>{props.jobTitle}</h2>
      {/* <ul className={resume.list}>
        <li className={resume.item}>Date: {props.date}</li>
      </ul> */}

      <p className={resume.bpText}>{props.company}</p>
      <p className={resume.bpText}>{props.date}</p>
      <p className={resume.bpDesc}>{props.jobDesc}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <div className={styles.main}>
      <div className={textbox.bodyParagraph}>
        <Job
          jobTitle="ARCS Student Web Developer"
          company="Georgia Tech College of Sciences"
          date="July 2022 - Present"
          jobDesc="On 13 July 2022 I will have started as a Student Web Developer
          for the Georgia Tech College of Sciences."
        />
        <Job
          jobTitle="ARCS IT Student Assistant"
          company="Georgia Tech College of Sciences"
          date="May 2022 - Present"
          jobDesc="Currently, I service computers
        and systems for students and faculty of the Georgia Tech
        College of Sciences. My role involves making purchases for and
        configuring builds of Linux, Windows, and MacOS operating systems
        for Georgia-Tech-issued computers."
        />
        <Job
          jobTitle="Data Structures & Algorithms Teaching Assistant"
          company="Georgia Tech College of Computing"
          date="January - May 2022"
          jobDesc="In Spring 2022, I was a TA for Data Structures &
        Algorithms. Every week, I would teach recitation and hold
        office hours for students. I graded homeworks for my recitation
        section of 50 students, and I would also help review and grade
        exams for the class of ~250 students."
        />
      </div>
    </div>
  );
}
