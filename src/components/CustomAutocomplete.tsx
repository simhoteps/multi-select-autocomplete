import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { IResults } from "../types/types";
import { Checkbox, Stack, Typography, styled } from "@mui/material";

const ItemContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: "16px",
  alignItems: "center",
  padding: "8px",
}));

const SearchTitle = ({ title, search }: { title: string; search: string }) => {
  const boldTitle = title.replace(
    new RegExp(`(${search})`, "gi"),
    '<span style="font-weight: bold;">$1</span>'
  );

  return <Typography dangerouslySetInnerHTML={{ __html: boldTitle }} />;
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CustomAutocomplete({ data }: { data: IResults[] }) {
  const [searchValue, setSearchValue] = React.useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filterOptions = (
    options: IResults[],
    { inputValue }: { inputValue: string }
  ) => {
    return options.filter((option) =>
      option.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  return (
    <Autocomplete
      multiple
      fullWidth
      id="checkboxes-tags-demo"
      options={data}
      disableCloseOnSelect
      onChange={() => {
        setSearchValue("");
      }}
      getOptionLabel={(option) => option.name}
      filterOptions={filterOptions}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Stack width={"100%"}>
            <ItemContainer>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              <img
                className="imgStyles"
                src={option.image}
                alt=""
                style={{ width: "48px", height: "48px", borderRadius: "8px" }}
              />
              <Stack>
                <SearchTitle title={option.name} search={searchValue} />
                <Typography variant="caption">{`${option.episode.length}  Episodes`}</Typography>
              </Stack>
            </ItemContainer>
          </Stack>
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField onChange={handleInputChange} {...params} />
      )}
    />
  );
}
