import React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";

function SubmitButton({ value = "Login", btnSx = {}, ...props }) {
  return (
    <TextField
      type="submit"
      variant="outlined"
      value={value}
      sx={{
        width: "100%",
        height: "100%",
        "& .MuiFormControl-root": {
          width: "100%",
          height: "100%",
        },
        "& .MuiFilledInput-root": {},
        "& .MuiInputBase-root": {
          height: "100%",
        },
        "& input": {
          width: "100%",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "500",
          transition: "0.2s",
          "&:hover": {
            borderColor: "black",
          },
        },

        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderRadius: 0,
            borderColor: "black",
          },
          "&:hover fieldset": {
            borderColor: "black",
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
          },
        },
        ...btnSx,
      }}
      {...props}
    />
  );
}

SubmitButton.propTypes = {
  value: PropTypes.string,
  btnSx: PropTypes.object,
};

export default SubmitButton;
