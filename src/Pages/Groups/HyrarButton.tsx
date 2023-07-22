import { useGroupStore } from "../../context/GroupsContext/GroupContext";

interface HyrarButtonProps {
  id: string;
}

const HyrarButton: any = (props: HyrarButtonProps) => {
  const { setHyrarId } = useGroupStore();
  const handleChangeHyrarId = () => {
    setHyrarId(props.id);
  };

  return (
    <>
      <button
        className="add-group-to-group-button"
        onClick={handleChangeHyrarId}
      >
        Show hyrarchy
      </button>
    </>
  );
};

export default HyrarButton;
