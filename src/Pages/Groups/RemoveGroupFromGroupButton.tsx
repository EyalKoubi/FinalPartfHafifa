import { useGroupStore } from "../../context/GroupsContext/GroupContext";

interface RemoveGroupFromGroupButtonProps {
  id: string;
}

const RemoveGroupFromGroupButton: any = (
  props: RemoveGroupFromGroupButtonProps
) => {
  const { setRemoveGroupFromGroupId } = useGroupStore();
  const handleChangeRemoveGroupFromGroupId = () => {
    setRemoveGroupFromGroupId(props.id);
  };

  return (
    <>
      <button
        className="add-group-to-group-button"
        onClick={handleChangeRemoveGroupFromGroupId}
      >
        Remove Group
      </button>
    </>
  );
};

export default RemoveGroupFromGroupButton;
