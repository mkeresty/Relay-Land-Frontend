import { createContext } from "react";

type IdContextType = {
    id?: string;
    setId: (id: string) => void;
};


export const IdContext = createContext<IdContextType> ({ 
    setId: () => {},
});