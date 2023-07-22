import { useState } from "react";

interface GroupRowProps {
  updatingGroupId: string | null;
  setUpdatingGroupId: React.Dispatch<React.SetStateAction<string | null>>;
}

export function GroupRow(props: GroupRowProps) {
  props.setUpdatingGroupId("");
}
