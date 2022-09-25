import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddNotesModal from "../AddNotesModal";
import { PaginationComponent } from "../../assets";
import TypeColor from "../../HOC/TypeColor";
import StatusButton from "../../HOC/StatusButton";
import DurationRepresentation from "../DurationRepresentation";
import { useAuth } from "../../customHooks/ProvideAuth";
import { updateArchiveApi } from "../../redux/api";

export default function TableOfCalls({
  headingList,
  bodyList,
  totalRecord,
  pageChange,
  page,
}) {
  const [modalData, setModalData] = useState({ show: false });
  const auth = useAuth();
  function onClickHandler(tableItem) {
    setModalData({ ...tableItem, show: true });
  }
  function apiCall(id) {
    updateArchiveApi(id, auth)
  }
  return (
    <>
      <Table bordered responsive className="multiple_theads_table">
        <thead>
          <tr className="background-color-change">
            {headingList.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyList.map((tableItem) => (
            <tr key={tableItem.id}>
              <td>
                <TypeColor>{tableItem.call_type}</TypeColor>
              </td>
              <td>
                <TypeColor>{tableItem.direction}</TypeColor>
              </td>
              <td >
                <DurationRepresentation
                  duration={tableItem.duration}
                /><TypeColor>{`(${tableItem.duration} seconds)`}</TypeColor>
              </td>
              <td>{tableItem.from}</td>
              <td>{tableItem.to}</td>
              <td>{tableItem.via}</td>
              <td>{tableItem.created_at}</td>
              <td>
                <StatusButton apiCall={apiCall} id={tableItem.id}>
                  {tableItem.is_archived ? "Archived" : "Unarchived"}
                </StatusButton>
              </td>
              <td>
                <Button
                  onClick={() => {
                    onClickHandler(tableItem);
                  }}
                >
                  Add Notes
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationComponent
        pageChange={pageChange}
        page={page}
        totalNumber={totalRecord ? Math.ceil(totalRecord / 10) : 0}
      />
      <AddNotesModal modalData={modalData} setModalData={setModalData} />
    </>
  );
}
