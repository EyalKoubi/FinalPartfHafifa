import axios from "axios";
import { useState } from "react";
import { useErrorStore } from "../../context/ErrorContext/ErrorContext";
import { useGroupStore } from "../../context/GroupsContext/GroupContext";

const AddGroupButton = () => {
  const { setError, setErrorMessage } = useErrorStore();
  const { addGroupToList, newGroupName, setNewGroupName } = useGroupStore();
  const [isAddingGroup, setIsAddingGroup] = useState(false);
  const handleGroupNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewGroupName(event.target.value);
  };

  const handleSubmit = () => {
    if (newGroupName.trim() !== "") {
      axios
        .post(`http://localhost:9000/groups/create?group_name=${newGroupName}`)
        .then((response) => {
          if (response.data === "Group with that name is already exists!") {
            setError(true);
            setErrorMessage(response.data);
          } else {
            setError(false);
            addGroupToList(response.data);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  const handleFinishToAdd = () => {
    setIsAddingGroup(false);
    setNewGroupName("");
    setError(false);
  };

  const handleAddGroup = () => {
    setIsAddingGroup(true);
  };

  return (
    <>
      {isAddingGroup ? (
        <li className="add-group-item">
          <input
            type="text"
            className="group-name-input"
            placeholder="Enter group name"
            value={newGroupName}
            onChange={handleGroupNameChange}
          />
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
          <button className="finish-button" onClick={handleFinishToAdd}>
            Finish
          </button>
        </li>
      ) : (
        <li className="add-group-item">
          <button className="add-group-button" onClick={handleAddGroup}>
            +
          </button>
        </li>
      )}
    </>
  );
};

export default AddGroupButton;
