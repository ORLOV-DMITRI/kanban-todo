import { FC, useState, createContext, useMemo, useEffect } from "react";
import { ProviderType, StatusContextType, Statuses } from "../../types/global";

const initial = {
  statuses: [],
  statusChange: () => {},
};

export const StatusContext = createContext<StatusContextType>(initial);
