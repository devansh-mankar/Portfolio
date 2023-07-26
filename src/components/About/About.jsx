import React from "react";
import css from "./About.module.scss";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
  slideIn,
  textVariant,
} from "../../utils/motion";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

export default function About() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <motion.h2
        variants={fadeIn("up", "tween", 0.3, 1)}
        className={css.heading}
      >
        MY INTRODUCTION
      </motion.h2>
      <div
        className={`paddings ypaddings flexCenter innerWidth ${css.container} `}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.leftside}
        >
          <img className={css.About_img} src="About_Me.png" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.5, 1)}
          className={css.rightside}
        >
          <motion.p variants={textVariant(0.5)} className={css.para}>
            I'm currently a Undergrad at National Institute of
            Technology(NIT),Rourkela. I create Web Pages using React.I aspire
            myself to Learn New Things everyday.
          </motion.p>
          <motion.div
            variants={slideIn("up", "tween", 0.3, 1)}
            className={css.box_container}
          >
            <div className={css.box}>
              <WorkIcon />
              <h3>Experience</h3>
              <span>1+ years</span>
            </div>
            <div className={css.box}>
              <EmojiEventsIcon />
              <h3>Projects</h3>
              <span>5+ projects</span>
            </div>
            <div className={css.box}>
              <ContactSupportIcon />
              <h3>Contact</h3>
              <span>Online 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
