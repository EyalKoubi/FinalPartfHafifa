import axios from "axios";
import { useGroupStore } from "../../context/GroupsContext/GroupContext";

interface Group {
  _id: string;
  group_name: string;
}

interface RemoveGroupButtonProps {
  group: Group;
}

const RemoveGroupButton = (props: RemoveGroupButtonProps) => {
  const { groupsList, setGroupsList } = useGroupStore();
  const handleRemoveGroup = (_id: string) => {
    axios
      .delete(`http://localhost:9000/groups/delete/${_id}`)
      .then(() => {
        setGroupsList(groupsList.filter((group) => group._id !== _id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <button
        onClick={() => handleRemoveGroup(props.group._id)}
        className="remove-group-button"
      >
        X
      </button>
    </>
  );
};

export default RemoveGroupButton;
