import React from "react";
import { TextField } from "@mui/material";

interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<TextFieldProps> = ({ value, onChange }) => {
  return (
    <TextField value={value} onChange={(e) => onChange(e.target.value)}>
      Input
    </TextField>
  );
};
