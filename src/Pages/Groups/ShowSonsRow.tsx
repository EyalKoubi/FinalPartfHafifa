import axios from "axios";
import { useEffect, useState } from "react";
import { useGroupStore } from "../../context/GroupsContext/GroupContext";

export interface ShowSonsRowProps {
  groupName: string;
}

const ShowSonsRow = (props: ShowSonsRowProps) => {
  const { setShowSonsGroupId } = useGroupStore();
  const [sons, setSons] = useState<string[]>([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/groups/getSons/${props.groupName}`)
      .then((response) => {
        let names = [];
        for (let i = 0; i < response.data.length; i++)
          names.push(response.data[i].group_name);
        console.log("names : " + names);
        setSons(names);
      })
      .catch();
  });
  return (
    <>
      {sons.map((son: any) => {
        return (
          <>
            <div>{son}</div>
          </>
        );
      })}
      <button
        className="cancel-update-button"
        onClick={() => {
          setShowSonsGroupId("");
        }}
      >
        Back
      </button>
    </>
  );
};

export default ShowSonsRow;
