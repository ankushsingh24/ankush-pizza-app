import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const MenuTab = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        {props.category.map((c, index) => (
          <Tab key={index} label={c.name} />
        ))}
        {/* <Tab label="Item One"  />
    <Tab label="Item Two"  />
    <Tab label="Item Three"  /> */}
      </Tabs>
    </>
  );
};

export default MenuTab;
