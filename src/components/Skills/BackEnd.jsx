import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import css from "./FrontEnd.module.scss";

export default function BackEnd() {
  return (
    <div className={css.SkillContent}>
      <h3 className={css.heading}>Backend developer</h3>
      <div className={css.skill_box}>
        <div className={css.skill_group}>
          <div className={css.skill_data}>
            <VerifiedIcon fontSize="small" />
            <div>
              <h3>Node Js</h3>
              <span>Intermediate</span>
            </div>
          </div>
          <div className={css.skill_data}>
            <VerifiedIcon fontSize="small" />
            <div>
              <h3>MongoDB</h3>
              <span>Intermediate</span>
            </div>
          </div>
          <div className={css.skill_data}>
            <VerifiedIcon fontSize="small" />
            <div>
              <h3>Postman</h3>
              <span>Basic</span>
            </div>
          </div>
          <div className={css.skill_data}>
            <VerifiedIcon fontSize="small" />
            <div>
              <h3>Express Js</h3>
              <span>Basic</span>
            </div>
          </div>
          <div className={css.skill_data}>
            <VerifiedIcon fontSize="small" />
            <div>
              <h3>APIs</h3>
              <span>Basic</span>
            </div>
          </div>
          <div className={css.skill_data}>
            <VerifiedIcon fontSize="small" />
            <div>
              <h3>MySQL</h3>
              <span>Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
