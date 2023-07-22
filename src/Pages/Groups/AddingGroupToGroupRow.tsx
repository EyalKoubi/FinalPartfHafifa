import axios from "axios";
import { useGroupStore, Group } from "../../context/GroupsContext/GroupContext";
import { useErrorStore } from "../../context/ErrorContext/ErrorContext";

interface AddingGroupToGroupRowProps {
  group: Group;
}

const AddingGroupToGroupRow = (props: AddingGroupToGroupRowProps) => {
  const {
    setAddingBigGroupId,
    setUpdatingGroupId,
    addingSmallGroupName,
    setAddingSmallGroupName,
  } = useGroupStore();
  const { setError, setErrorMessage } = useErrorStore();
  const handleAddingGroupToOtherNameChange = (event: any): void => {
    setAddingSmallGroupName(event.target.value);
  };

  const handleCancelAddingGroupToGroup = () => {
    setAddingBigGroupId("");
    setUpdatingGroupId(null);
    setError(false);
  };

  const handleAddGroupToGroup = (
    big_group_name: string,
    small_group_name: string
  ) => {
    axios
      .post("http://localhost:9000/groups/addGroupToGroup", {
        big_group: big_group_name,
        small_group: small_group_name,
      })
      .then((response) => {
        if (
          response.data === "The big group doesn't exists!" ||
          response.data === "The small group doesn't exists!" ||
          response.data === "Group not have more than one father!" ||
          response.data === "Group can not contain itself - Rassel Parradox!" ||
          response.data === "Circles in the group graph aren't allowed!"
        ) {
          setError(true);
          setErrorMessage(response.data);
        } else {
          setError(false);
          setAddingBigGroupId("");
        }
      });
  };

  return (
    <div className="group-item-adding-group">
      <input
        type="text"
        className="group-name-input"
        value={addingSmallGroupName}
        onChange={handleAddingGroupToOtherNameChange}
      />
      <button
        className="cancel-add-group-button"
        onClick={handleCancelAddingGroupToGroup}
      >
        Back
      </button>
      <button
        className="submit-add-group-button"
        onClick={() =>
          handleAddGroupToGroup(props.group.group_name, addingSmallGroupName)
        }
      >
        Add to {props.group.group_name}
      </button>
    </div>
  );
};

export default AddingGroupToGroupRow;
