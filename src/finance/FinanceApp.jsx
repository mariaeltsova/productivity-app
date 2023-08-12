import { Menu } from "../global/Menu";
import { useState, useEffect } from "react";
import Select from "react-select";
import { AddNew } from "./AddNew";
import { Stats } from "./Stats";
import { AllRecords } from "./AllRecords";

const options = [
  { value: "New spending", label: "New spending" },
  { label: "Statistics", value: "Statistics" },
  { label: "All records list", value: "All records list" },
];

export function FinanceApp() {
  const [selected, setSelected] = useState("Statistics");
  const [statsComponentVisible, setStatsComponentVisible] = useState(false);
  const [addNewComponentVisible, setaddNewComponentVisible] = useState(false);
  const [allRecordsComponentVisible, setallRecordsComponentVisible] =
    useState(false);

  useEffect(() => {
    selected === "New spending"
      ? setaddNewComponentVisible(true)
      : setaddNewComponentVisible(false);
    selected === "Statistics"
      ? setStatsComponentVisible(true)
      : setStatsComponentVisible(false);
    selected === "All records list"
      ? setallRecordsComponentVisible(true)
      : setallRecordsComponentVisible(false);
  }, [selected]);

  const loadFinanceView = (selectedOption) => {
    setSelected(selectedOption.value);
    console.log(`Option selected:`, selectedOption.value);
  };

  return (
    <>
      <Menu></Menu>
      <div id="finance-app-container">
        <Select
          options={options}
          onChange={loadFinanceView}
          /* autoFocus={true}*/ name="finance-view-type"
          id="finance-view-type-select"
        />
        {addNewComponentVisible && <AddNew />}
        {allRecordsComponentVisible && <AllRecords />}
        {statsComponentVisible && <Stats />}
      </div>
    </>
  );
}
