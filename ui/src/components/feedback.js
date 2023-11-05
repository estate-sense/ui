import { Grid } from "@mui/material";
import { ItemCondition } from "./item-condition";

export default function Feedback() {
  return (
    <div style={{ padding: "2vw" }}>
      <Grid container direction="column" justifyContent="space-around">
        <ItemCondition title={"Item 1"} itemNumber={1} />
        <ItemCondition title={"Item 2"} itemNumber={2} />
        <ItemCondition title={"Item 3"} itemNumber={3} />

        <ItemCondition title={"Item 4"} itemNumber={4} />
        <ItemCondition title={"Item 4"} itemNumber={5} />
        <ItemCondition title={"Item 1"} itemNumber={1} />
        <ItemCondition title={"Item 2"} itemNumber={2} />
        <ItemCondition title={"Item 3"} itemNumber={3} />

        <ItemCondition title={"Item 4"} itemNumber={4} />
        <ItemCondition title={"Item 4"} itemNumber={5} />
      </Grid>
    </div>
  );
}
