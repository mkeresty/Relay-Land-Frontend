import { ReactElement, useContext } from "react";
import { Appbar } from "../misc/Appbar";
import { Sidebar } from "../misc/sidebar";
import styles from '../misc/index.module.scss';
import { GuildContext } from "../../utils/contexts/GuldContext";

export function DashboardLayout({ children }: { children: ReactElement}) {
    const { guild } = useContext(GuildContext);
    return(
        <>
            <Sidebar guild={guild} />
            <div className={styles.layout}>
                <Appbar />
                <>{children}</>
            </div>

        </>
    )
}