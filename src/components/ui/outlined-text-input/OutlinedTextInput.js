import React, { useId } from "react";
import PropTypes from "prop-types";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function OutlinedTextInput({
  startAdornmentIcon = "",
  endAdornmentIcon = "",
  label = "Label",
  error = false,
  helperText = "",
  name = "",
  labelColor = "",
  setFieldValue = () => {},
  ...rest
}) {
  const uniqueId = useId();

  return (
    <FormControl
      sx={{
        margin: 0,
        width: "100%",
        height: "100%",
        "& .MuiFormControl-root": {
          width: "100%",
          height: "100%",
        },
        "& .MuiFilledInput-root": {
          border: "10px solid #e2e2e1",
        },
        position: "relative",
      }}
      variant="outlined"
    >
      <TextField
        id={uniqueId}
        name={name}
        sx={{
          "& .MuiInputBase-root": {
            height: "100%",
          },
          "&:hover + p": {
            "& + span": {
              display: "flex",
              zIndex: 2,
            },
          },
          "& input": {
            color: error ? "red" : "black",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "green",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: 0,
              borderColor: error ? "red" : `black`,
            },
            "&:hover fieldset": {
              borderColor: error ? "red" : `black`,
            },
            "&.Mui-focused fieldset": {
              borderColor: error ? "red" : `black`,
            },
          },
        }}
        error={error}
        variant="outlined"
        label={
          <span
            style={{
              color: error ? "red" : labelColor || "black",
            }}
          >
            {label}
          </span>
        }
        InputProps={{
          startAdornment: !!startAdornmentIcon ? (
            <InputAdornment position="start">
              {startAdornmentIcon}
            </InputAdornment>
          ) : null,
          endAdornment: (
            <>
              <style>{`
              /* Hide increment and decrement arrows */
              input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
              input[type="number"] {
                -moz-appearance: textfield;
              }

              .remove_icon {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.05);
                position: absolute;
                left: calc(100% - 10px);
                inset-inline-end: 16px;
                font-size: 0.9rem;
                cursor: pointer;
                display: none;
                justify-content: center;
                align-items: center;
                transition: 0.2s
              }

              .remove_icon:hover {
                display: flex;
                z-index: 2;
                background-color: rgba(0, 0, 0, 0.1);
              }
            `}</style>

              {endAdornmentIcon ? (
                <InputAdornment position="end">
                  {endAdornmentIcon}
                </InputAdornment>
              ) : null}
            </>
          ),
        }}
        {...rest}
      />
      <FormHelperText error={!!error} id="outlined-weight-helper-text">
        {error && helperText}
      </FormHelperText>
      <span
        className="remove_icon"
        style={{
          top: error ? "calc(50% - 20px)" : "46%",
          transform: error
            ? "translate(-100%, calc(50% - 20px))"
            : "translate(-100%, -46%)",
        }}
        onClick={(e) => {
          setFieldValue(name, "");
          document.getElementById(uniqueId).focus();
        }}
      >
        x
      </span>
    </FormControl>
  );
}

OutlinedTextInput.propTypes = {
  startAdornmentIcon: PropTypes.any,
  endAdornmentIcon: PropTypes.any,
  label: PropTypes.string,
  name: PropTypes.string,
  setFieldValue: PropTypes.func,
};

export default OutlinedTextInput;
