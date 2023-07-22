import { useGroupStore } from "../../context/GroupsContext/GroupContext";

interface SearchPersonInGroupButtonProps {
  id: string;
}

const SearchPersonInGroupButton: any = (
  props: SearchPersonInGroupButtonProps
) => {
  const { setSearchPersonInGroupId } = useGroupStore();
  const handleSearchPersonInGroupId = () => {
    setSearchPersonInGroupId(props.id);
  };

  return (
    <>
      <button
        className="add-group-to-group-button"
        onClick={handleSearchPersonInGroupId}
      >
        Search Person
      </button>
    </>
  );
};

export default SearchPersonInGroupButton;
