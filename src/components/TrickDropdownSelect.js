import { useState } from "react";
import Select from "react-select";
import { tricks } from "../tricks/tricks";

function TrickDropdownSelect(props) {
  const [selectValue, setSelectValue] = useState({});

  let allTricks = [];

  Object.entries(tricks).map((trickCat) => {
    allTricks = allTricks.concat(trickCat[1]);
    return 1;
  });

  allTricks = allTricks.concat(props.tricks);
  
  const options = allTricks.map((trick) => {
    if (typeof trick === "string") {
      return { value: trick, label: trick };
    } else {
      return { value: trick.at(-1), label: trick.at(-1) };
    }
  });

  return (
    <Select
      isClearable={true}
      isSearchable={true}
      name="color"
      options={options}
      value={selectValue}
      onChange={(value) => {
        setSelectValue(value);
        props.setNewTrick(value.value);
      }}
    />
  );
}

export default TrickDropdownSelect;
