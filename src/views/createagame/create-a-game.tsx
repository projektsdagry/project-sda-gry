import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  borderColor: "white",
  color: theme.palette.text.secondary,
}));

export const GameCreator: React.FC = () => {
  const [selected, setSelected] = useState<[]>([]);
  return (
    <>
      <p className="boredP">Make your own game with our Game Creator!</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h2>1. What do you want your character to look like</h2>
          <FormControl sx={{ width: "100ch", marginTop: 0 }}>
            <OutlinedInput
              style={{ caretColor: "green" }}
              placeholder="no siema"
            />
          </FormControl>
          <Grid item padding={0.5}>
            <Item>aaaaaaa</Item>
          </Grid>
          <Grid item padding={0.5} className="selected" paddingTop={0}>
            <Item>bbbbbbbbbbb</Item>
          </Grid>
          <Grid item padding={0.5} paddingTop={0}>
            <Item>cccccccccc</Item>
          </Grid>
          <Grid item padding={0.5} paddingTop={0}>
            <Item>ddddddddddd</Item>
          </Grid>
        </Box>
      </div>
    </>
  );
};
