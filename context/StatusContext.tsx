"use client";
import React, { createContext, useState } from "react";

const useStatusState = (initialStatus: number) =>
  useState<number>(initialStatus);

export const StatusContext = createContext<ReturnType<
  typeof useStatusState
> | null>(null);

export const useStatus = () => {
  const status = React.useContext(StatusContext);
  if (!status) {
    throw new Error("useStatus must be used within a StatusProvider");
  }
  return status;
};

const StatusProvider = ({
  status: initialStatus,
  children,
}: {
  status: number;
  children: React.ReactNode;
}) => {
  const [status, setStatus] = useStatusState(initialStatus);

  return (
    <StatusContext.Provider value={[status, setStatus]}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;
