import { Button, Grid } from "@mui/material";
import React from "react";
import { ItemCondition } from "../components/item-condition";
import { CBRContext } from "../index";
export default function Feedback() {
  const { selectedItems } = React.useContext(CBRContext);
  console.log(selectedItems);
  return (
    <div style={{ padding: "2vw" }}>
      <Grid container direction="column" justifyContent="space-around">
        {/* <ItemCondition title={"Item 1"} itemNumber={1} /> */}
        {Object.values(selectedItems).map((element) => (
          <ItemCondition title={element?.name} itemNumber={element?.id} />
        ))}
        <Button variant="contained" color="primary">
          Submit to generative AI model
        </Button>
      </Grid>
    </div>
  );
}
