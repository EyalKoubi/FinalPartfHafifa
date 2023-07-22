import axios from "axios";
import { useGroupStore } from "../../context/GroupsContext/GroupContext";
import { useOthersStore } from "../../context/OthersContext/OthersContext";

interface RemovePersonFromGroupRowwProps {
  groupName: string;
}

const RemovePersonFromGroupRoww = (props: RemovePersonFromGroupRowwProps) => {
  const { messageToUser, setMessageToUser } = useOthersStore();
  const {
    updatedPersonName,
    setUpdatedPersonName,
    setRemovePersonFromGroupId,
  } = useGroupStore();
  const handleUpdatePersonNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatedPersonName(event.target.value);
  };
  const handleRemovePersonFromGroup = (personName: string) => {
    if (personName.trim() !== "") {
      axios
        .delete(`http://localhost:9000/common/removePersonFromGroup`, {
          data: {
            person_name: personName,
            group_name: props.groupName,
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
        onChange={handleUpdatePersonNameChange}
      />
      <button
        className="cancel-update-button"
        onClick={() => {
          setRemovePersonFromGroupId("");
        }}
      >
        Back
      </button>
      <button
        className="submit-update-button"
        onClick={() => {
          handleRemovePersonFromGroup(updatedPersonName);
        }}
      >
        Remove Person From {props.groupName}
      </button>
      <div>{messageToUser}</div>
    </div>
  );
};

export default RemovePersonFromGroupRoww;
