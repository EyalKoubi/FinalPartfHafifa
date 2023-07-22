import axios from "axios";
import { useGroupStore, Group } from "../../context/GroupsContext/GroupContext";
import { useState } from "react";
import { useOthersStore } from "../../context/OthersContext/OthersContext";

interface AddingPersonToGroupRowProps {
  group: Group;
}

const AddingPersonToGroupRow = (props: AddingPersonToGroupRowProps) => {
  const [personName, setPersonName] = useState("");
  const { messageToUser, setMessageToUser } = useOthersStore();
  const { setAddPersonToGroupId } = useGroupStore();
  const handlePersonNameChange = (event: any): void => {
    setPersonName(event.target.value);
  };

  const handleCancelAddingPersonToGroup = () => {
    setAddPersonToGroupId("");
  };

  const handleAddPersonToGroup = (groupName: string, personName: string) => {
    axios
      .post("http://localhost:9000/common/addPersonToGroup", {
        person_name: personName,
        group_name: groupName,
      })
      .then((response) => {
        setMessageToUser(response.data);
      })
      .catch();
  };

  return (
    <div className="group-item-adding-group">
      <input
        type="text"
        className="group-name-input"
        value={personName}
        onChange={handlePersonNameChange}
      />
      <button
        className="cancel-add-group-button"
        onClick={handleCancelAddingPersonToGroup}
      >
        Back
      </button>
      <button
        className="submit-add-group-button"
        onClick={() =>
          handleAddPersonToGroup(props.group.group_name, personName)
        }
      >
        Add to {props.group.group_name}
      </button>
      <div>{messageToUser}</div>
    </div>
  );
};

export default AddingPersonToGroupRow;
