import React, { useMemo } from "react";

const Timezone = () => {
  const timezone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    []
  );

  return (
    <span
      className="ml-3 px-2 py-1 rounded-md text-xs bg-[#ebf2f5] text-[#6b7b83] whitespace-nowrap"
      title="Your current time zone"
      data-testid="timezone-badge"
    >
      {timezone}
    </span>
  );
};

export default Timezone;

