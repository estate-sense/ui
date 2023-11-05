import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import React from "react";

// assignTo dang luu trong database
const savedTask = {
  id: 1,
  name: "List to make the assesment",
  assignTo: [],
};

// danh sach toan bo nhan vien
const personList = [
  {
    id: 1,
    name: "walls",
  },
  {
    id: 2,
    name: "Rooms",
  },
  {
    id: 3,
    name: "Fans",
  },
  {
    id: 4,
    name: "Lights",
  },
  {
    id: 5,
    name: "doors",
  },
  {
    id: 6,
    name: "windows",
  },
  {
    id: 7,
    name: "toilets",
  },
];

export const FormHumanSelect = () => {
  const formik = useFormik({
    initialValues: savedTask,
    onSubmit: (values) => {
      console.log("values ", values);
    },
  });
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="chiplabel">start assessing</InputLabel>
      <Select
        labelId="test-label"
        id="assignTo"
        multiple
        value={formik.values.assignTo}
        onChange={(e) => {
          console.log("set ", e.target.value);
          formik.setFieldValue("assignTo", e.target.value);
        }}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((person, index) => (
              <Chip key={index} label={person.name} />
            ))}
          </Box>
        )}
        sx={{ mt: 2 }}
      >
        {personList.map((person, index) => (
          <MenuItem key={index} value={person}>
            {person.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
