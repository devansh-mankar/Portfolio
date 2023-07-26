import React from "react";
import css from "./FrontEnd.module.scss";
import VerifiedIcon from "@mui/icons-material/Verified";

const frontData = {};

export default function Frontend() {
  return (
    <div className={css.SkillContent}>
      <h3 className={css.heading}>Frontend developer</h3>
      <div className={css.skill_box}>
        <div className={css.skill_group}>
          <div className={css.skill_data}>
            <VerifiedIcon fontSize="small" />
            <div>
              <h3>HTML</h3>
              <span>Intermediate</span>
            </div>
          </div>
          <div className={css.skill_data}>
            <VerifiedIcon fontSize="small" />
            <div>
              <h3>CSS</h3>
              <span>Basic</span>
            </div>
          </div>
          <div className={css.skill_data}>
            <VerifiedIcon fontSize="small" />
            <div>
              <h3>BootStrap</h3>
              <span>Intermediate</span>
            </div>
          </div>
          <div className={css.skill_data}>
            <VerifiedIcon fontSize="small" />
            <div>
              <h3>JavaScript</h3>
              <span>Intermediate</span>
            </div>
          </div>
          <div className={css.skill_data}>
            <VerifiedIcon fontSize="small" />
            <div>
              <h3>Git</h3>
              <span>Basic</span>
            </div>
          </div>
          <div className={css.skill_data}>
            <VerifiedIcon fontSize="small" />
            <div>
              <h3>React</h3>
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
