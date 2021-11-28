import React, { Component,useEffect,useState} from "react";
import './login.css'
import axios from 'axios'
import qs from 'qs'

import { useHistory } from "react-router";

export default function Login(){
    let history = useHistory()

let [data, setData] = useState({
    user_id: "",
    user_pd: ""
})
let [isLoggedIn, setAuth] = useState(false)
const setUSERID = () => {
    let uname = document.querySelector(".entry").value
    setData({
        user_id: uname
    })
}
const setPass = () => {
    let pass = document.querySelector(".entry_pass").value
    setData({
        user_pd: pass
    })
}
const handlesubmit = () => {
    axios({
        method: "POST",
        url: "http://localhost:5000/fund_transfer",
        data: { data }
    })
        .then((res) => {
            console.log(res.data)

            if (res.data.Authentication) {
                setAuth(true);
            }



        })

}

// function Login() {
//     const Ammount = () => {
//         axios({
//             method: "POST",
//             url: "http://localhost:5000/fund_transfer",
//             data: { data }
//         })
//             .then((res) => {
//                 console.log(res.data)
//                 setRes(res.data)

//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
useEffect(() => {
    if (isLoggedIn) {
        history.push("/account")
    } else {

    }
}, [isLoggedIn])
return (
    <div>
        <form className='credentials' name='myForm' onSubmit={handlesubmit}>
            <input type="text" placeholder='Username' name='uname' className='entry' onChange={setUSERID} />
            {/* <div id='uerror'>{uerror}</div> */}
            {/* <input type="password" placeholder='password' name='pass' className='entry' onCha{nge={(event) => { this.setState({ pass: event.target.value }) }} /> */}
            <input type="password" placeholder='Password' name='pass' className='entry_pass' onChange={setPass} />
            {/* <div id='perror'>{perror}</div> */}
            {/* <div id='merror'>{this.state.merror}</div> */}
            <input type="submit"  className='btn' value="Log in ►"  />
        </form>
    </div>
)
} 



// import React from 'react'
// import { useHistory } from 'react-router'
// export default function Login() {
//     let history = useHistory()
//     let handelClick =()=>{
//         // logic for login to backend
//         // if success
//         history.push("/account");
//         localStorage.setItem("islogin",true)
//     }
//     return (
//         <div>
//             login
//             <button onClick={handelClick}>Login</button>
//             form
//         </div >
//     )
// }








// export default class Form extends Component {
//     constructor() {
//         super();

//         // this.authCheck=this.authCheck.bind(this); //it us used to bind this explicitly to a function
//         this.state = {
//             uname: '',
//             pass: '',
//             uerror: '',
//             perror: '',
//             disabled: true,
//             merror: '',
//             mainComponent:false,
//             history: useHistory()
//         }
//       }


//     handleSubmit = (event) => {
//         event.preventDefault();//by using this on clicking submit button page don't reloads
//         // this.authCheck();
//         if(mainComponent === true){
//         this.state.history.push("/account")
//          // logic for login to backend
//         // if success

//         localStorage.setItem("islogin",true)
//         }
//     }

//     async authCheck() {
//         let data = qs.stringify({
//             // username: this.state.uname,
//             // 'password': this.state.pass,
//             // 'grant_type': 'password',
//             // client_id: 'nwtel-va'
//             user_id: this.state.uname,
//             user_pd: this.state.pass,
//         }); 
//         let axiosConfig = {
//             method: 'post',
//             url: `https://localhost:5000/login`,
//             headers: {
//                 'content-type': 'application/json',
//             },
//             data: data,
//           };

//         try {
//             let res = await axios(axiosConfig);
//             // localStorage.setItem("JwtToken",res.data.access_token);
//             if(res.Authentication === true){
//             this.setState({
//               merror:'',
//               mainComponent:true,
//             })
//             }}
//         catch (error) {
//             console.log(error);
//             this.setState({
//                 merror: 'The username and/or password is incorrect',
//                 mainComponent:false,
//             })
//           }
//         }


//     handleNamePass = (e) => {
//         const name=e.target.name;
//         if(name==='pass'){
//         this.setState({
//             pass: e.target.value,
//         }, () => {
//             this.validator();
//         })}
//         else if(name==='uname')
//         {
//             this.setState({
//                 uname: e.target.value,
//             }, () => {
//                 this.validator();
//             })  
//         }

//     }

//     validator() {
//         if (this.state.uname.length === 0) {
//             this.setState({
//                 uerror: 'please enter a username',
//                 disabled: true,
//             })
//         }
//         if (this.state.pass.length === 0) {
//             this.setState({
//                 perror: 'please enter a password',
//                 disabled: true,
//             })
//         }
//         if (this.state.pass.length < 4 && this.state.pass.length > 0) {
//             this.setState({
//                 perror: 'length should be at least 4 characters',

//             })
//         }

//         if (this.state.uname.length > 0) {
//             this.setState({
//                 uerror: '',

//             })
//         }
//         if (this.state.pass.length > 4) {
//             this.setState({
//                 perror: '',

//             })
//         }
//         if (this.state.uname.length > 0 && this.state.pass.length > 0) {
//             this.setState(
//                 {
//                     disabled: false,
//                 }
//             )
//         }
//     }

//     render() {
//         const { uerror, perror } = this.state;//doing destructuring so that we don't have to writr uerror instead we write uerror only

//         let disp=
//             <div className="container">
//                 <div className="heading">
//                     <h1 className='top'>Welcome to <br />Capstone-Product</h1>
//                     <p id="info">Welcome,please log-in</p>
//                 </div>

//                 <form className='credentials' name='myForm' onSubmit={this.handleSubmit}>
//                     <input type="text" placeholder='Username' name='uname' className='entry'  onChange={this.handleNamePass} />
//                     <div id='uerror'>{uerror}</div>
//                     {/* <input type="password" placeholder='password' name='pass' className='entry' onChange={(event)=>{this.setState({pass:event.target.value})}}/> */}
//                     <input type="password" placeholder='Password' name='pass' className='entry' onChange={this.handleNamePass} />
//                     <div id='perror'>{perror}</div>
//                     <div id='merror'>{this.state.merror}</div>
//                     <input type="submit" disabled={this.state.disabled} className='btn' value="Log in ►" onClick={this.handleCick} />

//                 </form>
//             </div>
//           if(this.state.mainComponent)
//           {
//             disp=<MainComponent/>
//           }

//         return (
//           <div>
//             {disp}
//           </div>
//         );
//     }
// }
// import React from 'react'