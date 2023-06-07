// import React from 'react'
// import firebase from './firebase-config'
// import 'firebase/auth'
// class App extends React.Component {
//   handleChange = (e) =>{
//     const {name, value } = e.target
//     this.setState({
//         [name]: value
//       })
//   }
  
// //   configureCaptcha = () =>{
// //     let recaptcha: any;
// //   ngAfterContentChecked(): void {
// //   recaptcha = new firebase.auth.RecaptchaVerifier('sign-in-button', {
// //     'size': 'invisible',
// //     'callback': (response) => {
// //       // reCAPTCHA solved, allow signInWithPhoneNumber.
// //       this.onSignInSubmit();
// //       console.log("Recaptca varified")
// //     },
// //     defaultCountry: "IN"
// //   });
// // }
// //     //window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
// //       'size': 'invisible',
// //       'callback': (response) => {
// //         // reCAPTCHA solved, allow signInWithPhoneNumber.
// //         this.onSignInSubmit();
// //         console.log("Recaptca varified")
// //       },
// //       defaultCountry: "IN"
// //     });
// //   }
//   onSignInSubmit = (e) => {
//     e.preventDefault()
//     //this.configureCaptcha()
//     const phoneNumber = "+84" + this.state.mobile
//     console.log(phoneNumber)
//     //const appVerifier = window.recaptchaVerifier;
//     //firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//           // SMS sent. Prompt user to type the code from the message, then sign the
//           // user in with confirmationResult.confirm(code).
//           window.confirmationResult = confirmationResult;
//           console.log("OTP has been sent")
//           // ...
//         }).catch((error) => {
//           // Error; SMS not sent
//           // ...
//           console.log("SMS not sent")
//         });
//   }
//   onSubmitOTP = (e) =>{
//     e.preventDefault()
//     const code = this.state.otp
//     console.log(code)
//     window.confirmationResult.confirm(code).then((result) => {
//       // User signed in successfully.
//       const user = result.user;
//       console.log(JSON.stringify(user))
//       alert("User is verified")
//       // ...
//     }).catch((error) => {
//       // User couldn't sign in (bad verification code?)
//       // ...
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h2>Login Form</h2>
//         <form onSubmit={this.onSignInSubmit}>
//           <div id="sign-in-button"></div>
//           <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
//           <button type="submit">Submit</button>
//         </form>

//         <h2>Enter OTP</h2>
//         <form onSubmit={this.onSubmitOTP}>
//           <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }
// export default App




//login

// import { useState } from "react";
// //import { phoneAuth, validateSMS } from '../helper/utils';
// import styles from "../styles/Home.module.css";
// import { useRouter } from "next/router";

// export default function Home() {
//   const router = useRouter();
//   return (
//     <div className="h-72 w-80 p-10 bg-white">
//       {/* <form onSubmit={handleSubmit} ></form> */}
//       <p className="text-center ">Vui lòng đăng nhập</p>
//       <form>
//         <fieldset className="mb-4">
//           <input
//             className="h-10 w-60 mt-4 border-gray-300 border-solid  border-b-2"
//             required
//             type="tel"
//             name="phone"
//             placeholder="Số điện thoại"
//             maxLength={10}
//             //   onChange={handleChange}
//           />
//         </fieldset>

//         <button onClick={() => router.push("/nhapotp")}
//           className="bg-green-700 w-full h-10 rounded-3xl font-semibold text-white hover:bg-indigo-700"
//         >
//           Lấy mã kích hoạt
//         </button>
//       </form>
      
      {/* <form className="lay-otp">
              <fieldset className='mb-4'>
                <input
                  className='h-10 border w-full rounded border-gray-400'
                  required
                  type='number'
                  name='otp'
                  placeholder='Nhập OTP'
                //   onChange={}
                />
              </fieldset>
              <button className='bg-indigo-900 w-full h-10 rounded font-semibold text-white hover:bg-indigo-700'>
                Validate OTP
              </button>
            </form> */}
      {/* <form>
              <fieldset className='mb-4'>
                <input
                  className='h-10 border w-full rounded border-gray-400'
                  required
                  type='number'
                  name='otp'
                  placeholder='Nhập OTP'
                //   onChange={}
                />
              </fieldset>
              <button className='bg-indigo-900 w-full h-10 rounded font-semibold text-white hover:bg-indigo-700'>
                Validate OTP
              </button>
            </form> */}
//     </div>
//   );
// };

//   const [value, setValue] = useState({
//     phone: '',
//     otp: '',
//   });
//   const [user, setUser] = useState(null);
//const [isPhoneVerify, setIsPhoneVerify] = useState(false);
//   const handleChange = (e) => {
//     setValue({ ...value, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     phoneAuth(value.phone)
//       .then((res) => {
//         setUser(res.userId);
//         setIsPhoneVerify(true);
//       })
//       .catch((e) => {
//         alert('Error getting phone session!', e);
//       });
//   };

// const handleSubmit = (event: { preventDefault: () => void; }) => {
//         event.preventDefault();}
//   const handleValidatePhone = (e) => {
//     e.preventDefault();
//     validateSMS(user, value.otp)
//       .then((res) => {
//         alert(
//           `User successfully verified using for user with ID ${res.userId}, country Code ${res.countryCode}, and expires on ${res.expire}`
//         );
//       })
//       .catch((e) => {
//         alert('Error validating session!', e);
//       });
//   };

//nhapotp

// import { useState } from "react";
// import { authentication } from "./firebase-config";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// function nhapotp(){
//   const countryCode ="+84";

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [phoneNumber, setPhoneNumber] = useState(countryCode);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [expandForm, setExpandForm] = useState(false);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [OTP, setOTP] = useState('');


//   const generateRecaptcha = () => {
//     window.recaptchaVerifier = new RecaptchaVerifier ('recaptcha-container',{
//       'size': 'invisible',
//       'callback': (response: any) =>{}
//     }, authentication );
//   }
//   const requestOTP = (e: React.ChangeEvent<HTMLInputElement>) =>{
//     e.preventDefault();
//     if(phoneNumber.length >= 12){
//       setExpandForm(true);
//       generateRecaptcha();
//       let appVerifier = window.recaptchaVerifier;
//       signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
//       .then(confirmationResult =>{
//         window.confirmationResult = confirmationResult;
//       }).catch((error) => {
//         console.log(error);
//       });
//     }
//   }

//   const verifyOTP = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let otp = e.target.value;
//     setOTP(otp);

//     if(otp.length === 6){
//       let confirmationResult = window.confirmationResult;
//       confirmationResult.confirm(otp).then((result) => {
//         const user = result.user;
//         console.log(user);
//       }).catch((error) => {

//       });
//     }
//   }



//   return(
//     <div className="formContainer">
//       <form onSubmit={requestOTP}>
//         <h1>Vui lòng đăng nhập</h1>
//         <div className="mb-3">
//           <label htmlFor="phoneNumberInput" className="form-label ">Số điện thoại</label>
//           <input type="tel" className="form-control h-10 w-60 mt-4 border-gray-500 border-solid  border-b-2" id="phoneNumberInput" />
//         </div>
//         {expandForm === true?
//           <>
//             <div className="mb-3">
//               <label htmlFor="otpInput" className="form-label">OTP</label>
//               <input type="otp" className="form-control" id="otpInput" value ={OTP} onChange={verifyOTP}  />
//             </div>
//           </>
//           :
//           null
//         }
//         {expandForm === false?
//           <button type="submit" className="btn btn-primary bg-indigo-900 w-60 h-10 rounded font-semibold text-white hover:bg-indigo-700">Request OTP</button>
//           :
//           null
//         }
//         <div id="recaptcha-container"></div>
//       </form>
//     </div>
//   );
// }
// export default nhapotp;

















// import type { NextPage } from "next";
// import { useState } from "react";
// //import OtpInput from "../components/OtpInputPartial";

// const Home: NextPage = () => {
//   const [otp, setOtp] = useState("");
//   return (
//     <div className="container">
//       <div className="h-screen grid place-content-center bg-base-100">
//         <OtpInput
//           value={otp}
//           onChange={(val) => {
//             setOtp(val);
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;





// import styles from "../styles/Home.module.css";
// import { useRouter } from "next/router";
// export default function Home() {
//   const router = useRouter();

//   return (
//     <div className="h-72 w-80 p-10 bg-white">
//       {/* <form onSubmit={handleSubmit} ></form> */}
//       <p className="text-center ">Vui lòng đăng nhập</p>
//       <form>
//         <fieldset className="mb-4">
//           <input
//             className="h-10 w-60 mt-4 border-gray-300 border-solid  border-b-2"
//             required
//             type="tel"
//             name="phone"
//             placeholder="Nhập OTP"
//             maxLength={5}
//             //   onChange={handleChange}
//           />
//         </fieldset>
//         <button
//           className="bg-green-700 w-full h-10 rounded-3xl font-semibold text-white hover:bg-indigo-700"
//         >
//           Xác nhận
//         </button>
//       </form>

//     </div>
//   );
// };

//   const [value, setValue] = useState({
//     phone: '',
//     otp: '',
//   });
//   const [user, setUser] = useState(null);
//const [isPhoneVerify, setIsPhoneVerify] = useState(false);
//   const handleChange = (e) => {
//     setValue({ ...value, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     phoneAuth(value.phone)
//       .then((res) => {
//         setUser(res.userId);
//         setIsPhoneVerify(true);
//       })
//       .catch((e) => {
//         alert('Error getting phone session!', e);
//       });
//   };

// const handleSubmit = (event: { preventDefault: () => void; }) => {
//         event.preventDefault();}
//   const handleValidatePhone = (e) => {
//     e.preventDefault();
//     validateSMS(user, value.otp)
//       .then((res) => {
//         alert(
//           `User successfully verified using for user with ID ${res.userId}, country Code ${res.countryCode}, and expires on ${res.expire}`
//         );
//       })
//       .catch((e) => {
//         alert('Error validating session!', e);
//       });
//   };
