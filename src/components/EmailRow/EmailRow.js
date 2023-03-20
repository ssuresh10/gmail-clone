import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useNavigate as UseNavigate } from "react-router-dom";
import { selectMail } from "../../features/mailSlice";
import { useDispatch as UseDispatch } from "react-redux";


function EmailRow({id, title,subject, description,time}) {
    const navigate = UseNavigate();
    const dispatch = UseDispatch();

    const openMail = () => {
        dispatch(
          selectMail({
            id,
            title,
            subject,
            description,
            time,
          })
        );
        navigate("/mail");
      };

      
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow