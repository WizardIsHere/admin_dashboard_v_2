import styles from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsCharts/StatisticsCharts'


const Statistics = () => {
    return (
        <div className={`${styles.container} theme-container`}>
            <span className={styles.title}>Overview Statistics</span>

            <div className={`${styles.cards} grey-container`}>

                <div>
                    <div className={styles.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={styles.card}>
                        <span>🔥 Hot product of the month</span>
                        <span>Laptops</span>
                    </div>
                </div>

                <div className={styles.card}>
                    <span>Items</span><span>$ {groupNumber(455)}</span>
                </div>

                <div className={styles.card}>
                    <span>Profit</span><span>$ {groupNumber(370000)}</span>
                </div>

                <div className={styles.card}>
                    <span>Daily Average</span><span>$ {groupNumber(2000)}</span>
                </div>
            </div>


            <StatisticsChart />
        </div>
    )
}

export default Statistics