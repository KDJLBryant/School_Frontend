import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type AdminRightsType = {
  value: boolean;
  toggleValue: () => void;
};

export const AdminRights = createContext<AdminRightsType>({
  value: false,
  toggleValue: () => {},
});

export const AdminRightsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState(false);

  const toggleValue = () => {
    setValue((prevValue) => !prevValue);
  };

  return (
    <AdminRights.Provider value={{ value, toggleValue }}>
      {children}
    </AdminRights.Provider>
  );
};
