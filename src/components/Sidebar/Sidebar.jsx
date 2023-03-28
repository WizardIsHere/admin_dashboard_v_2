
import styles from './Sidebar.module.css';
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className={styles.container}>

            <img src="./logo.png" alt="logo" className={styles.logo} />


            <div className={styles.menu}>
                <NavLink to="dashboard" className={styles.item} title={"Dashboard"}>
                    <MdSpaceDashboard size={30} />
                </NavLink>
                
                <NavLink
                    to="calendar"
                    className={styles.item}
                    title="Calendar"
                >
                    <AiFillCalendar size={30} />
                </NavLink>

                <NavLink
                    to="board"
                    className={styles.item}
                    title="Trello Board"
                >
                    <FaTasks size={30} />
                </NavLink>

                <NavLink
                    to="users"
                    className={styles.item}
                    title="Users"
                >
                    <AiOutlineTable size={30} />
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar