import { useEffect } from "react";
import axios from "axios";
import "../../CSS/Groups/MainGroups.css";
import RemoveGroupButton from "./RemoveGroupButton";
import AddGroupButton from "./AddGroupButton";
import UpdateGroupButton from "./UpdateGroupButton";
import UpdateGroupRow from "./UpdateGroupRow";
import AddingGroupToGroupRow from "./AddingGroupToGroupRow";
import AddingGroupToGroupButton from "./AddingGroupToGroupButton";
import { useGroupStore } from "../../context/GroupsContext/GroupContext";
import { useErrorStore } from "../../context/ErrorContext/ErrorContext";
import ShowSonsRow from "./ShowSonsRow";
import YShowSonsButton from "./YShowSonsButton";
import HyrarButton from "./HyrarButton";
import HyrarRow from "./HyrarRow";
import RemoveGroupFromGroupRow from "./RemoveGroupFromGroupRow";
import RemoveGroupFromGroupButton from "./RemoveGroupFromGroupButton";
import SearchPersonInGroupRow from "./SearchPersonInGroupRow";
import SearchPersonInGroupButton from "./SearchPersonInGroupButton";
import AddingPersonToGroupRow from "./AddingPersonToGroup";
import AddingPersonToGroupButton from "./AddingPersonToGroupButton";
import RemovePersonFromGroupRoww from "./RemovePersonFromGroupRoww";
import TRemovePersonFromGroupButton from "./RemovePersonFromGroupButton";

const MainGroups = () => {
  const {
    updatingGroupId,
    showSonsGroupId,
    hyrarId,
    removePersonFromGroupId,
    removeGroupFromGroupId,
    searchPersonInGroupId,
    addPersonToGroupId,
    addingBigGroupId,
    groupsList,
    setGroupsList,
  } = useGroupStore();
  const { error, errorMessage } = useErrorStore();

  useEffect(() => {
    axios
      .get("http://localhost:9000/groups/getGroups")
      .then((response) => {
        setGroupsList(response.data);
      })
      .catch((error) => console.error(error));
  });

  return (
    <div className="main-groups-container">
      <div className="groups-title">
        <h2 className="groups-title-text">Group List</h2>
      </div>
      <div className="groups-list-container">
        <ul className="groups-list">
          {groupsList.map((group) => (
            <li key={group._id} className="group-item">
              {addingBigGroupId === group._id ? (
                <AddingGroupToGroupRow group={group} />
              ) : updatingGroupId === group._id ? (
                <UpdateGroupRow />
              ) : showSonsGroupId === group._id ? (
                <ShowSonsRow groupName={group.group_name} />
              ) : hyrarId === group._id ? (
                <HyrarRow groupName={group.group_name} />
              ) : removeGroupFromGroupId === group._id ? (
                <RemoveGroupFromGroupRow big_name={group.group_name} />
              ) : searchPersonInGroupId === group._id ? (
                <SearchPersonInGroupRow group_name={group.group_name} />
              ) : addPersonToGroupId === group._id ? (
                <AddingPersonToGroupRow group={group} />
              ) : removePersonFromGroupId === group._id ? (
                <RemovePersonFromGroupRoww groupName={group.group_name} />
              ) : (
                <div className="group-item-content">
                  <div className="group-name">{group.group_name}</div>
                  <SearchPersonInGroupButton id={group._id} />
                  <HyrarButton id={group._id} />
                  <YShowSonsButton id={group._id} />
                  <TRemovePersonFromGroupButton id={group._id} />
                  <RemoveGroupFromGroupButton id={group._id} />
                  <AddingPersonToGroupButton group={group} />
                  <AddingGroupToGroupButton group={group} />
                  <UpdateGroupButton group={group} />
                  <RemoveGroupButton group={group} />
                </div>
              )}
            </li>
          ))}
          <AddGroupButton />
          {error && (
            <div className="already-exists-group-error-message">
              {errorMessage}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MainGroups;
