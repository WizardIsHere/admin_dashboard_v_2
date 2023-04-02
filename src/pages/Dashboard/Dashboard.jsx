import React from 'react';
import Statistics from '../../components/Statistics/Statistics';
import { cardsData, groupNumber } from '../../data';
import styles from './Dashboard.module.css';
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={`${styles.dashboardHead} theme-container`}>
          <div className={styles.head}>
            <span>Dashboard</span>

            <div className={styles.durationButton}>
              <select>
                <option value="">1 week</option>
                <option value="">1 month</option>
                <option value="">1 year</option>
              </select>
            </div>
          </div>

          <div className={styles.cards}>
            {
              cardsData.map((card, index) => (
                <div className={styles.card}>
                  <div className={styles.cardHead}>
                    <span className={styles.title}>{card.title}</span>
                    <span className={styles.title}>+ {card.change}</span>
                  </div>
                  <div className={styles.cardAmount}>
                    <span>₹</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <Statistics />
      </div>
      <div className={styles.orders}>
        Orders
      </div>
    </div>
  )
}

export default Dashboard