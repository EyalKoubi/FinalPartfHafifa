import create from "zustand";

export interface Group {
  _id: string;
  group_name: string;
}

export interface GroupState {
  addingSmallGroupName: string;
  setAddingSmallGroupName: (value: string) => void;
  newGroupName: string;
  setNewGroupName: (value: string) => void;
  addingBigGroupId: string | null;
  setAddingBigGroupId: (value: string) => void;
  updatedPersonName: string;
  setUpdatedPersonName: (value: string) => void;
  removePersonFromGroupId: string;
  setRemovePersonFromGroupId: (value: string) => void;
  addPersonToGroupId: string;
  setAddPersonToGroupId: (value: string) => void;
  searchPersonInGroupId: string;
  setSearchPersonInGroupId: (value: string) => void;
  removeGroupFromGroupId: string;
  setRemoveGroupFromGroupId: (value: string) => void;
  hyrarId: string;
  setHyrarId: (value: string) => void;
  showSonsGroupId: string;
  setShowSonsGroupId: (value: string) => void;
  updatingGroupId: string | null;
  setUpdatingGroupId: (value: string | null) => void;
  updatedGroupName: string;
  setUpdatedGroupName: (value: string) => void;
  groupsList: Group[];
  setGroupsList: (value: Group[]) => void;
  updateGroup: (group: Group) => void;
  addGroupToList: (group: Group) => void;
}

export const useGroupStore = create<GroupState>((set, get: any) => ({
  addingSmallGroupName: "",
  newGroupName: "",
  addingBigGroupId: "",
  updatedPersonName: "",
  removePersonFromGroupId: "",
  addPersonToGroupId: "",
  searchPersonInGroupId: "",
  removeGroupFromGroupId: "",
  hyrarId: "",
  showSonsGroupId: "",
  updatingGroupId: "",
  updatedGroupName: "",
  groupsList: [],
  setAddingSmallGroupName: (maor: string) =>
    set({ addingSmallGroupName: maor }),
  setNewGroupName: (newNameOfGroup: string) =>
    set({ newGroupName: newNameOfGroup }),
  setAddingBigGroupId: (newId: string | null) =>
    set({ addingBigGroupId: newId }),
  setUpdatedPersonName: (newPersonToRemove: string) =>
    set({ updatedPersonName: newPersonToRemove }),
  setRemovePersonFromGroupId: (newRemoveP: string) =>
    set({ removePersonFromGroupId: newRemoveP }),
  setAddPersonToGroupId: (newAddP: string) =>
    set({ addPersonToGroupId: newAddP }),
  setSearchPersonInGroupId: (newSearch: string) =>
    set({ searchPersonInGroupId: newSearch }),
  setRemoveGroupFromGroupId: (newRemove: string) =>
    set({ removeGroupFromGroupId: newRemove }),
  setHyrarId: (newHyrar: string) => set({ hyrarId: newHyrar }),
  setShowSonsGroupId: (newShowSonGroupId: string) =>
    set({ showSonsGroupId: newShowSonGroupId }),
  setUpdatedGroupName: (newName: string) => set({ updatedGroupName: newName }),
  setUpdatingGroupId: (newID: string | null) => set({ updatingGroupId: newID }),
  setGroupsList: (groups: Group[]) => set({ groupsList: groups }),
  addGroupToList: (group: Group) =>
    set((state) => ({ groupsList: [...state.groupsList, group] })),
  updateGroup: (group: Group) =>
    set((state) => ({
      groupsList: state.groupsList.map((currGroup) =>
        currGroup._id === group._id ? group : currGroup
      ),
    })),
}));
