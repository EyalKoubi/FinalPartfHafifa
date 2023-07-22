import { useGroupStore } from "../../context/GroupsContext/GroupContext";

interface RemovePersonFromGroupButtonProps {
  id: string;
}

const RemovePersonFromGroupButton: any = (
  props: RemovePersonFromGroupButtonProps
) => {
  const { setRemovePersonFromGroupId } = useGroupStore();
  const handleChangeRemovePersonFromGroupId = () => {
    setRemovePersonFromGroupId(props.id);
  };

  return (
    <>
      <button
        className="add-group-to-group-button"
        onClick={handleChangeRemovePersonFromGroupId}
      >
        Remove Person
      </button>
    </>
  );
};

export default RemovePersonFromGroupButton;
