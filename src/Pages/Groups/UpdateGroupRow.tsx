import axios from "axios";
import { useGroupStore } from "../../context/GroupsContext/GroupContext";
import { useOthersStore } from "../../context/OthersContext/OthersContext";

const UpdateGroupRow = () => {
  const { messageToUser, setMessageToUser } = useOthersStore();
  const { updatedGroupName, setUpdatedGroupName } = useGroupStore();
  const { updatingGroupId, setUpdatingGroupId } = useGroupStore();
  const handleUpdateGroupNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatedGroupName(event.target.value);
  };
  const handleRename = (id: string | null, name: string) => {
    if (name.trim() !== "") {
      axios
        .patch(`http://localhost:9000/groups/rename/${id}`, {
          newName: name,
        })
        .then((response) => {
          setMessageToUser(response.data);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="group-item-update">
      <input
        type="text"
        className="group-name-input"
        onChange={handleUpdateGroupNameChange}
      />
      <button
        className="cancel-update-button"
        onClick={() => {
          setUpdatingGroupId("");
        }}
      >
        Back
      </button>
      <button
        className="submit-update-button"
        onClick={() => {
          handleRename(updatingGroupId, updatedGroupName);
        }}
      >
        Rename
      </button>
      <div>{messageToUser}</div>
    </div>
  );
};

export default UpdateGroupRow;
