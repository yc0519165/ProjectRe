import { useState } from "react"

function AddTransaction () {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);


  return(
    <>
    <h3>Add New Transaction</h3>
    <form>
      <div className="form-control">
        <label htmlFor='text'>Text</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."></input>
      </div>
      <div className="form-control">
        <lebel htmlFor='amount'>Amount <br/>
         (negative - expences, positive - income) </lebel>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
         placeholder="Enter Amount..."></input>
      </div>
      <button className="btn">Add Transaction</button>
    </form>

    </>
  )
}

export default AddTransaction