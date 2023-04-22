import React from 'react'
import Rodal from 'rodal'
import "rodal/lib/rodal.css";
import styles from './AddTaskModal.module.css'


const AddTaskModal = ({ visible, onClose, handleCardAdd }) => {
    const customStyles = {
        background: "rgb(58 58 58)",
        padding: "20px",
        width: "50%",
        top: "-3rem",
        height: "fit-content",
        maxWidth: "40rem"

    }
    const [title, setTitle] = React.useState('')
    const [detail, setDetail] = React.useState('')

    return (
        <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
            <div className={styles.container}>
                <div>
                    <span className={styles.label}>Title</span>
                    <input type="text" placeholder="Task" className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div>
                    <span className={styles.label}>Detail</span>
                    <textArea
                        rows={10} className={styles.input} value={detail}
                        type="text" onChange={(e) => setDetail(e.target.value)}
                        placeholder="What you wish to do?" />
                </div>

                <button
                    disabled={title === "" && detail === ""}
                    className={styles.saveButton}
                    onClick={() => {
                        handleCardAdd(title, detail)
                        setDetail("")
                        setTitle("")
                    }}
                >
                    Add
                </button>
            </div>
        </Rodal>
    )
}

export default AddTaskModal