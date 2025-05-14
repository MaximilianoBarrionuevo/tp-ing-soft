import { createContext, useContext, useState, ReactNode, use } from "react";

type NoticiasContextType = {
  formVisible: boolean;
  setFormVisible: (visible: boolean) => void;
  adminActive: boolean
  handleIniciarSesion: (username: string, password: string) => boolean
  sesionModalVisible: boolean
  setSesionModalVisible: React.Dispatch<React.SetStateAction<boolean>>
};

const NoticiasContext = createContext<NoticiasContextType | undefined>(undefined);

export const NoticiasProvider = ({ children }: { children: ReactNode }) => {
  const [adminActive, setAdminActive] = useState(false)
  const [sesionModalVisible, setSesionModalVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(false);

  const handleIniciarSesion = (username: string, password: string): boolean => {
    const ADMIN_USER = "admin";
    const ADMIN_PASS = "1234";

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setAdminActive(true);
      return true;
    } else {
      alert("Usuario o contraseña incorrectos");
      return false;
    }
  };

  const handleOpenCrearPublicacion = () => {

  }

  return (
    <NoticiasContext.Provider value={{ formVisible, setFormVisible, adminActive, handleIniciarSesion, sesionModalVisible, setSesionModalVisible }}>
      {children}
    </NoticiasContext.Provider>
  );
};

export const useNoticias = () => {
  const context = useContext(NoticiasContext);
  if (!context) {
    throw new Error("useNoticias debe usarse dentro de un NoticiasProvider");
  }
  return context;
};
