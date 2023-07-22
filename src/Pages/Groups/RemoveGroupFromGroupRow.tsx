import axios from "axios";
import { useGroupStore } from "../../context/GroupsContext/GroupContext";
import { useOthersStore } from "../../context/OthersContext/OthersContext";

interface RemoveGroupFromGroupRowProps {
  big_name: string;
}

const RemoveGroupFromGroupRow = (props: RemoveGroupFromGroupRowProps) => {
  const { messageToUser, setMessageToUser } = useOthersStore();
  const {
    updatedGroupName,
    setUpdatedGroupName,
    removeGroupFromGroupId,
    setRemoveGroupFromGroupId,
  } = useGroupStore();
  const handleUpdateGroupNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatedGroupName(event.target.value);
  };
  const handleRemoveGroupFromGroup = (id: string, name: string) => {
    if (name.trim() !== "") {
      axios
        .delete(`http://localhost:9000/groups/removeGroupFromGroup`, {
          data: {
            big_group: props.big_name,
            small_group: name,
          },
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
          setRemoveGroupFromGroupId("");
        }}
      >
        Back
      </button>
      <button
        className="submit-update-button"
        onClick={() => {
          handleRemoveGroupFromGroup(removeGroupFromGroupId, updatedGroupName);
        }}
      >
        Remove Group From {props.big_name}
      </button>
      <div>{messageToUser}</div>
    </div>
  );
};

export default RemoveGroupFromGroupRow;
