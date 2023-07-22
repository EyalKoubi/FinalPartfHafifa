import { useGroupStore } from "../../context/GroupsContext/GroupContext";

interface Group {
  _id: string;
  group_name: string;
}

interface AddingGroupToGroupButtonProps {
  group: Group;
}

const AddingGroupToGroupButton = (props: AddingGroupToGroupButtonProps) => {
  const { setAddingBigGroupId } = useGroupStore();
  const handleStartAddGroupToGroup = (group: Group) => {
    setAddingBigGroupId(group._id);
  };

  return (
    <button
      className="add-group-to-group-button"
      onClick={() => handleStartAddGroupToGroup(props.group)}
    >
      Add Group
    </button>
  );
};

export default AddingGroupToGroupButton;
