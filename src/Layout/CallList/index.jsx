import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterBy from "../../components/FilterBy/index.jsx";
import TableOfCalls from "../../components/TableOfCalls/index.jsx";
import { useAuth } from "../../customHooks/ProvideAuth.jsx";
import { CallListAction, UpdateCallListAction } from "../../redux/actions/callAction.js";
import Pusher from 'pusher-js';
import { APP_CLUSTER, APP_KEY } from "../../config.js";

const filterItem = ["All", "Archived", "Unarchived"];
const headingItem = [
  "CALL TYPE",
  "DIRECTION",
  "DURATION",
  "FROM",
  "TO",
  "VIA",
  "CREATED AT",
  "STATUS",
  "ACTIONS",
];
export default function CallList() {
  const [filterType, setFilterType] = useState("All");
  const [filteredList, setFilteredList] = useState([]);
  let [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const auth = useAuth();
  const callList = useSelector((state) => state.call);
  
  useEffect(() => {
    dispatch(CallListAction({ pageNo: 1, pageSize: 10 }, auth));
    const pusher = new Pusher(APP_KEY, {
        cluster: APP_CLUSTER,
        channelAuthorization: {
          endpoint: 'https://frontend-test-api.aircall.io/pusher/auth',
          headers: {
            Authorization: "Bearer " + auth.turringTest.access_token,
        },
        },
      });
      const channel = pusher.subscribe('private-aircall');
      channel.bind("update-call", (call)=>{dispatch(UpdateCallListAction(call))})
      return ()=>{pusher.unsubscribe("private-aircall")}
  }, []);

  useEffect(() => {
    if (callList.callList?.nodes) {
      switch (filterType) {
        case "All":
          setFilteredList(callList.callList.nodes);
          break;
        case "Archived":
          setFilteredList(
            callList.callList.nodes.filter((node) => node.is_archived)
          );
          break;
        case "Unarchived":
          setFilteredList(
            callList.callList.nodes.filter((node) => !node.is_archived)
          );
          break;
        default:
          break;
      }
    }
  }, [filterType, callList.callList]);

  function pageChange(pageNo) {
    dispatch(CallListAction({ pageNo: pageNo, pageSize: 10 }, auth));
    setPage(pageNo - 1)
  }
  return (
    <div className="p-5">
      <h2 className="pb-2">Turing Techmologies Frontend Test</h2>
      <p className="d-flex">
        Filter by:{" "}
        <FilterBy
          listOfItem={filterItem}
          filterType={filterType}
          setFilterType={setFilterType}
        />
      </p>
      <TableOfCalls headingList={headingItem} bodyList={filteredList} totalRecord={callList.callList?.totalCount ? callList.callList.totalCount : 0} pageChange={pageChange}  page={page}/>
    </div>
  );
}
