import { createContext } from "react";
import Id from "../../pages/dashboard/[id]";
import { Guild, IdDec } from "../types";

type GuildContextType = {
    guild?: Guild;
    setGuild: (guild: Guild) => void;
};



export const GuildContext = createContext<GuildContextType> ({ 
    setGuild: () => {},
});