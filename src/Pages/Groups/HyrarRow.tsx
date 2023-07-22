import axios from "axios";
import { useEffect, useState } from "react";
import { useGroupStore } from "../../context/GroupsContext/GroupContext";

export interface ShowSonsRowProps {
  groupName: string;
}

const HyrarRow = (props: ShowSonsRowProps) => {
  const { setHyrarId } = useGroupStore();
  const [sons, setSons] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://localhost:9000/groups/hirarchy?group_name=${props.groupName}`
      )
      .then((response) => {
        setSons(response.data);
      })
      .catch();
  });
  return (
    <>
      <div>{sons}</div>
      <button
        className="cancel-update-button"
        onClick={() => {
          setHyrarId("");
        }}
      >
        Back
      </button>
    </>
  );
};

export default HyrarRow;
