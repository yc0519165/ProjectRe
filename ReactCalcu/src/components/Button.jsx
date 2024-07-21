import styles from './Button.module.css'

const Button = ({onButtonClick}) =>{
  const item = ['AC','DEL','%','/','7','8','9','*','4','5','6','-','1','2','3','+','00','0','.','=']
  return<div className={styles.btncontainer}>
  {item.map((items) =>(
  <button key={items} className={styles.btns} onClick={() =>  onButtonClick(items)}>{items}</button>
  ))}
</div>
}
export default Button