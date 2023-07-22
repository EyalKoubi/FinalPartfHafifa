import { useGroupStore } from "../../context/GroupsContext/GroupContext";

interface Group {
  _id: string;
  group_name: string;
}

interface UpdateGroupButtonProps {
  group: Group;
}

const UpdateGroupButton = (props: UpdateGroupButtonProps) => {
  const { setUpdatingGroupId, setUpdatedGroupName } = useGroupStore();
  const handleStartUpdateGroup = (_id: string, groupName: string) => {
    setUpdatingGroupId(_id);
    setUpdatedGroupName(groupName);
  };

  return (
    <button
      className="update-group-button"
      onClick={() =>
        handleStartUpdateGroup(props.group._id, props.group.group_name)
      }
    >
      Rename
    </button>
  );
};

export default UpdateGroupButton;
