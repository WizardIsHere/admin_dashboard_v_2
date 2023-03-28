import moment from 'moment/moment';
import React from 'react'
import styles from './Layout.module.css';
import {BiSearch} from 'react-icons/bi';
import Sidebar from '../Sidebar/Sidebar';
const Layout = () => {
  return (
    <div className={styles.container}>

        <Sidebar/>

        <div className={styles.dashboard}>
            <div className={styles.topBaseGradients}>
                <div className='gradient-red'></div>
                <div className='gradient-orange'></div>
                <div className='gradient-blue'></div>
            </div>

            <div className={styles.header}>
              <span>{moment().format("dddd, Do MMM YYYY")}</span>

              <div className={styles.searcchBar}>
                <BiSearch size={20} />          
                <input type="text" placeholder='Search' />
              </div>

              <div className={styles.profile}>
                <img src="./profile.png" alt='profile-pic' />
                <div className={styles.details}>
                  <span>Daniel Stephenwolf</span>
                  <span>daniel.sw@pm.com</span>
                </div>
              </div>
            </div>



        </div>
    </div>
        

  )
}

export default Layout