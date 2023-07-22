import axios from "axios";
import { useGroupStore } from "../../context/GroupsContext/GroupContext";
import { useState } from "react";

interface SearchPersonInGroupRowProps {
  group_name: string;
}

const SearchPersonInGroupRow = (props: SearchPersonInGroupRowProps) => {
  const { setSearchPersonInGroupId } = useGroupStore();
  const [personName, setPersonName] = useState("");
  const [IsSearched, setIsSearched] = useState(false);
  const [searchMessage, setSearchMessage] = useState("");
  const handlePersonNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPersonName(event.target.value);
  };

  const handleSearch = (groupName: string, personName: string) => {
    axios
      .post(`http://localhost:9000/common/searchPersonInGroup`, {
        group_name: groupName,
        person_name: personName,
      })
      .then((response) => setSearchMessage(response.data))
      .catch();
  };

  return (
    <div className="group-item-update">
      <input
        type="text"
        className="group-name-input"
        onChange={handlePersonNameChange}
      />
      <button
        className="cancel-update-button"
        onClick={() => {
          setSearchPersonInGroupId("");
        }}
      >
        Back
      </button>
      <button
        className="submit-update-button"
        onClick={() => {
          handleSearch(props.group_name, personName);
          setIsSearched(true);
        }}
      >
        Check
      </button>
      {!IsSearched && <>We are waiting...</>}
      {IsSearched && <>{searchMessage}</>}
    </div>
  );
};

export default SearchPersonInGroupRow;
