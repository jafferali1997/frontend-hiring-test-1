import React from "react";
import { Dropdown } from "react-bootstrap";

export default function FilterBy({ listOfItem, filterType, setFilterType }) {
  return (
    <Dropdown className="filter-color ml-2">
      <Dropdown.Toggle as="text" id="dropdown-custom-components">
        {filterType}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {listOfItem.map((item, key) => (
          <Dropdown.Item className="filter-item-color" key={item} eventKey={key + 1} onClick={(e)=>{setFilterType(e.target.text)}}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
