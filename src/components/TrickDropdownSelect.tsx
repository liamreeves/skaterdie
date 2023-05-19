import { useState } from "react";
import Select from "react-select";
import { tricks } from "../tricks/tricks";

interface Props {
  userTricks: string[];
  setNewTrick: (value: any | null) => void;
}

function TrickDropdownSelect({userTricks, setNewTrick}: Props) {

  type trickOption = {value: string | undefined, label: string | undefined}
  const [selectValue, setSelectValue] = useState<trickOption>();

  let allTricks: string[] = [];
  const propTricks: any = userTricks

  Object.entries(tricks).map((trickCat: any) : number => {
    allTricks = allTricks.concat(trickCat[1]);
    console.log(trickCat)
    return 1;
  });

  allTricks = allTricks.concat(propTricks);
  
  const options = allTricks.map((trick: string | string[]) => {
    // console.log(allTricks)
    if (typeof trick === "string") {
      return { value: trick, label: trick };
    } else {
      return { value: trick?.at(-1), label: trick?.at(-1) };
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
        setSelectValue({value: value?.value, label: value?.label});
        setNewTrick(value?.value);
      }}
    />
  );
}

export default TrickDropdownSelect;
