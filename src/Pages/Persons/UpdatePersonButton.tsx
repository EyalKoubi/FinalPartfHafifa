import { useEffect, useState } from "react";
import { usePersonContext } from "../../context/PersonsContext/PersonContext";
import axios from "axios";

interface UpdatePersonButtonProps {
  person: any;
  updatedPerson: {
    id: string;
    firstName: string;
    lastName: string;
    age: string;
  };
  isUpdatePressed: boolean;
  setUpdatedPerson: (
    value: React.SetStateAction<{
      id: string;
      firstName: string;
      lastName: string;
      age: string;
    }>
  ) => void;
  setIsUpdatePressed: (value: React.SetStateAction<boolean>) => void;
}

const UpdatePersonAndDetailsButtons = (props: UpdatePersonButtonProps) => {
  const [myGroups, setMyGroups] = useState("");
  const [isHisGroupsPressed, setIsHisGroupsPressed] = useState(false);
  const [isDetailsPressed, setIsDetailsPressed] = useState(false);
  const { updatePerson } = usePersonContext();

  useEffect(() => {
    axios
      .get(
        `http://localhost:9000/common/hisGroups?person_name=${props.person.first_name} ${props.person.last_name}`
      )
      .then((response) => setMyGroups(response.data))
      .catch();
  });

  const handleUpdatePressed = (person: any) => {
    props.setUpdatedPerson({
      id: person._id,
      firstName: person.first_name,
      lastName: person.last_name,
      age: person.age,
    });
    props.setIsUpdatePressed(person._id);
  };

  const handleDetailsPressed = (person: any): void => {
    setIsDetailsPressed(person._id);
  };

  const handleHisGroupsPressed = (person: any): void => {
    setIsHisGroupsPressed(person._id);
  };

  const handleCloseHisGroupsPressed = (person: any): void => {
    setIsHisGroupsPressed(false);
  };

  const handleCloseDetailsPressed = (person: any) => {
    setIsDetailsPressed(false);
  };

  return (
    <>
      {props.isUpdatePressed === props.person._id ? (
        <div className="person_details">
          <input
            type="text"
            value={props.updatedPerson.firstName}
            onChange={(e) =>
              props.setUpdatedPerson({
                ...props.updatedPerson,
                firstName: e.target.value,
              })
            }
          />
          <input
            type="text"
            value={props.updatedPerson.lastName}
            onChange={(e) =>
              props.setUpdatedPerson({
                ...props.updatedPerson,
                lastName: e.target.value,
              })
            }
          />
          <input
            type="text"
            value={props.updatedPerson.age}
            onChange={(e) =>
              props.setUpdatedPerson({
                ...props.updatedPerson,
                age: e.target.value,
              })
            }
          />
          <button
            className="person_save_updates_button"
            onClick={() =>
              updatePerson(props.updatedPerson, props.setIsUpdatePressed)
            }
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <button
            className="person_save_updates_button"
            onClick={() => handleHisGroupsPressed(props.person)}
          >
            My Groups
          </button>
          {isHisGroupsPressed && (
            <div>
              <>{myGroups}</>
              <button
                onClick={() => handleCloseHisGroupsPressed(props.person)}
                className="close_details"
              >
                Close
              </button>
            </div>
          )}
          <button
            onClick={() => handleDetailsPressed(props.person)}
            className="details-person-button"
          >
            details
          </button>
          {isDetailsPressed && (
            <>
              <span className="the_detais_areselfs">
                First name: {props.person.first_name}
                Last name: {props.person.last_name}
                Age: {props.person.age}
              </span>
              <button
                onClick={() => handleCloseDetailsPressed(props.person)}
                className="close_details"
              >
                Close
              </button>
            </>
          )}
          <button
            className="update-person-button"
            onClick={() => handleUpdatePressed(props.person)}
          >
            Update
          </button>
        </>
      )}
    </>
  );
};

export default UpdatePersonAndDetailsButtons;
