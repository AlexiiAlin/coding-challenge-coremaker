import React from "react";
import {Typography} from "@mui/material";

interface GeneralTextRowProps {
  label: string;
  value: any;
}

export const GeneralRow = (props: GeneralTextRowProps) => {
  const {label, value} = props;
  return (
    <div className="general-row">
      <div className="general-label">
        <Typography variant="caption">
          <b>{label}</b>
        </Typography>
      </div>
      <div className="general-value">
        <Typography variant="caption">
          {value}
        </Typography>
      </div>
    </div>
  )
}
