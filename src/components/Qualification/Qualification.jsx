import React, { useState } from "react";
import css from "./Qualification.module.scss";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import CircleIcon from "@mui/icons-material/Circle";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "../../utils/motion";

const Educ = [
  {
    place: "Montfort School,Nagpur",
    role: "Matriculation",
    tenure: "2009-2019",
    class: "I-X",
    percentage: "94.4%",
  },
  {
    place: "Dr BR Ambedkar Jr college,Nagpur",
    role: "Intermediate",
    tenure: "2019-2021",
    class: "XI-XII",
    percentage: "94.6%",
  },
  {
    place: "National Institute Of Technology,Rourkela",
    role: "BTech",
    class: "-",
    tenure: "2021-2025",
    percentage: "8.02",
  },
];

export default function Qualification() {
  const [showEdu, setShowEdu] = useState(false);
  const [showexp, setshowexp] = useState(false);
  const [showdes, setshoedes] = useState(false);

  function handleClick1() {
    setShowEdu(!showEdu);
  }

  function handleClick2() {
    setshowexp(!showexp);
  }

  function handleMouseE() {
    setshoedes(true);
  }

  function handleLeaveL() {
    setshoedes(false);
  }
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={css.heading}>
        <motion.h3 variants={fadeIn("left", "tween", 0.3, 1)}>
          Qualification
        </motion.h3>
        <motion.span>My Personal Journey</motion.span>
      </div>
      <div className={`flexCenter ${css.container}`}>
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className={css.education}
          onClick={handleClick1}
        >
          <SchoolIcon />
          <span className={css.head}>Education</span>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={css.experience}
          onClick={handleClick2}
        >
          <WorkHistoryIcon />
          <span>Experience</span>
        </motion.div>

        <div className={`paddings flexCenter ${css.qualContainer}`}>
          {showEdu &&
            Educ.map((exp, i) => {
              return (
                <div className={`flexCenter ${css.exp}`} key={i}>
                  <div className={css.post}>
                    <h5>{exp.role}</h5>
                    <span>{exp.tenure}</span>
                  </div>

                  <div className={css.desc}>
                    <h5>{exp.class}</h5>
                    <span>{exp.place}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </motion.section>
  );
}

/**/
