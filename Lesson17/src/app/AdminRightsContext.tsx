import {
  Dispatch,
  FC,
  ReactNode,
  createContext,
  useContext,
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

export const useAdminRights = () => useContext(AdminRights);

export const AdminRightsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState(false);

  const toggleValue = () => {
    setValue(!value);
  };

  return (
    <AdminRights.Provider value={{ value, toggleValue }}>
      {children}
    </AdminRights.Provider>
  );
};
