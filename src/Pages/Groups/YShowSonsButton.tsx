import { useGroupStore } from "../../context/GroupsContext/GroupContext";

interface YShowSonsButtonProps {
  id: string;
}

const YShowSonsButton: any = (props: YShowSonsButtonProps) => {
  const { setShowSonsGroupId } = useGroupStore();
  const handleChangeShowId = () => {
    setShowSonsGroupId(props.id);
  };

  return (
    <>
      <button
        className="add-group-to-group-button"
        onClick={handleChangeShowId}
      >
        Show Group Sons
      </button>
    </>
  );
};

export default YShowSonsButton;
