import React, { useState } from 'react'
import axios from "axios"

function FundTransfer() {
    const[data,setData]=useState({
        account_id:"",
        to_account_id:"",
        ammount:""
    })
    const [res,setRes]=useState({
        Ammount:"1000",
        Transaction_status:"Send Successfull"
    })
    const Ammount=()=>{
        axios({
            method:"POST",
            url:"http://localhost:5000/fund_transfer",
            data:{data}
        })
        .then((res)=>{
            console.log(res.data)
            setRes(res.data)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
            
            <input type="text"  name="account_id" required value={data.account_id} onChange={e=>setData({...data,account_id:e.target.value})}/>
            <br></br>
            <input type="text"  name="to_account_id" required value={data.to_account_id} onChange={e=>setData({...data,to_account_id:e.target.value})}/>
            <br></br>
            <input type="text"  name="ammount" required value={data.ammount} onChange={e=>setData({...data,ammount:e.target.value})}/>
            <br></br>
            <button onClick={Ammount}>Send Cash</button>
            <h2>{res.Ammount}</h2>
            <h1>{res.Transaction_status}</h1>
        </div>
    )
}

export default FundTransfer
