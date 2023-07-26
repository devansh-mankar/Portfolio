import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Courses.module.scss";

export default function Courses() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={css.boxes}>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.box}
        >
          <img className={css.image} src="DSAr.png" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.box}
        >
          <img className={css.image} src="OS3.png" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.3, 1)}
          className={css.box}
        >
          <img className={css.image} src="DBMS.png" />
        </motion.div>
      </div>
    </motion.section>
  );
}
