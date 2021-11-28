import React,{useState} from 'react'
import axios from "axios"
import "./MiniStatement.css"

function MiniStateMent() {
    const [data,setData]=useState('');
    const [res,setRes]=useState(
        {
            "Account_id": "TSSH000003",
            "Effective_Balance": 13032.0,
            "Transactions": [
            {
            "Amount": 12232.0,
            "Transaction_time": "2021-11-22 10:24:53",
            "Type": "Credited",
            "transactionID": "JTX00000000000000001"
            },
            {
            "Amount": 1000.0,
            "Transaction_time": "2021-11-23 12:37:33",
            "Type": "Credited",
            "transactionID": "JTX00000000000000006"
            },
            {
            "Amount": 200.0,
            "Transaction_time": "2021-11-23 16:51:01",
            "Type": "Debited",
            "transactionID": "JTX00000000000000007"
            }
            ]
            }
    )
    console.log(res)
    const MiniStateMent=()=>{
        axios({
            method:"POST",
            url:"http://localhost:5000/ministatement",
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
            
            <input value={data} onChange={e=>setData(e.target.value)}></input>
            <button onClick={MiniStateMent}>Check balance</button>
            
            {
                (!res)?<div>Account not found</div>:<div><h1>{res.Account_id }</h1>
                <h1>{res.Effective_Balance} INR</h1>
                <div className="card">
                   {
                        res.Transactions.map((obj,i) => (
                            <div className="container" key={i}>
                            <h1>Amount {obj.Amount}</h1>
                            <h1>Transaction_time {obj.Transaction_time}</h1>
                            <h1>Type {obj.Type}</h1>
                            <h1>transactionID {obj.transactionID}</h1>
                            </div>
                            
                        ))
                   }
                </div></div>
                
            }
        

            
        </div>
    )
}

export default MiniStateMent
