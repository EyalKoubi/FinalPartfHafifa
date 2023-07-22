import { useGroupStore } from "../../context/GroupsContext/GroupContext";

interface Group {
  _id: string;
  group_name: string;
}

interface AddingPersonToGroupButtonProps {
  group: Group;
}

const AddingPersonToGroupButton = (props: AddingPersonToGroupButtonProps) => {
  const { setAddPersonToGroupId } = useGroupStore();
  const handleStartAddPersonToGroup = (group: Group) => {
    setAddPersonToGroupId(group._id);
  };

  return (
    <button
      className="add-group-to-group-button"
      onClick={() => handleStartAddPersonToGroup(props.group)}
    >
      Add Person
    </button>
  );
};

export default AddingPersonToGroupButton;
