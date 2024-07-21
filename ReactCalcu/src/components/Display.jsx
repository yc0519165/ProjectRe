import styles from './Display.module.css'
const Display =({displayValue}) =>{
  return <input className={styles.screen} type="text" placeholder='' value={displayValue} readOnly />

}
export default Display