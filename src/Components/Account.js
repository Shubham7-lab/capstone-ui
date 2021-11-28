import React, { useState } from 'react'
import axios from "axios"
import "./Account.css"

function Account() {
    const [data,setData]=useState('');
    const [res,setRes]=useState(
        {
            // "Account ID": "TSSH000001",
            // "Balance Amount": 123154976.0,
            // "Currency": "INR",
            // "Effective_Balance": 123154976.0,
            // "Lien Amount": 0.0,
            // "Limit Amount": 0.0
            }
    )
    console.log(res)
    let data1 = {account_id:"qwert1113"}
    const Account= async()=>{
         await axios({
            method:"POST",
            url:"http://localhost:5000/account",
            data:data1,
            // headers:{"Content-Type":"application/json"}
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
            <button onClick={Account}>Account</button>
            <br></br>
            {
                (!res)?<div>Account not found</div>:<table>
                <tr>
                  <th>Account</th>
                  <th>Details</th>
                </tr>
                <tr>
                  <td>Account ID</td>
                  <td>{res['Account ID']}</td>
              
                </tr>
                <tr>
                  <td>Balance Amount</td>
                  <td>{res['Balance Amount']} INR</td>
                  
                </tr>
                <tr>
                  <td>Currency</td>
                  <td>{res.Currency}</td>
                  
                </tr>
                <tr>
                  <td>Effective_Balance</td>
                  <td>{res.Effective_Balance} INR</td>
                 
                </tr>
                <tr>
                  <td>Lien Amount</td>
                  <td>{res['Lien Amount']}</td>
                </tr>
                <tr>
                  <td>Limit Amount</td>
                  <td>{res['Limit Amount']}</td>
                 
                </tr>
              </table>
            }
            
            
            
        </div>
    )
}

export default Account
