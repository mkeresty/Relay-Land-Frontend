import Image from 'next/image';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsCoin, BsTerminal, BsWallet2 } from 'react-icons/bs';
import { FaWrench } from 'react-icons/fa';
import { RiLogoutCircleLine, RiMenu3Line } from 'react-icons/ri';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { Guild } from '../../utils/types';
import { FC } from 'react';
import { getIcon } from '../../utils/helpers';

const routes = [
// {
//     name: 'dashboard',
//     getPath: (id: string) => `/dashboard/${id}`,
//     icon: <MdSpaceDashboard size={48} />
// },
{
    name: 'balance',
    getPath: (id: string) => `/dashboard/${id}/balance`,
    icon: <BsCoin size={48} />
},
];

type Props = {
    guild?: Guild;
}

export const Sidebar: FC<Props> = ({ guild }) => {
    const router = useRouter();
    return (

        <div></div>
        // <div className={styles.sidebar}>
        //     <Image className={styles.avatar} src={getIcon(guild)} height={80} width={80} alt="guild_avatar" />
        //     <div className={styles.avatar} onClick={() => router.push('/menu')}>
        //         <RiMenu3Line size={48}/>
        //     </div>
        //     <div className={styles.icons}>

        //         {routes.map((route)=> (
        //         <div key={route.name} onClick={() => router.push(route.getPath(router.query?.id!.toString()))}>
        //             {route.icon}
        //         </div>))}
        //         {/* <div>
        //             <MdSpaceDashboard size={48} />
        //         </div>
        //         <div>
        //             <BsTerminal size={48} />
        //         </div>
        //         <div>
        //             <FaWrench size={48} />
        //         </div> */}
        //     </div>
        // </div>
    );
}