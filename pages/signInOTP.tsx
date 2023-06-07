import React, { useState } from "react";
import { Props } from "react-intl/src/components/message";
import { firebase, auth } from "./firebase-config";
import { getParseTreeNode } from "typescript";
import { useRouter } from "next/router";
import lichsu from './lichsu'
import { render } from "react-dom";
import App from "next/app";
import Router from "next/router";

// type Props = {
//   sdt: String;
// };

function SignInOTP() {

// const SignInOTP = ({sdt}: Props) => {
  // const SignInOTP = (this.props.phoneNumber) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("INPUT_PHONE_NUMBER");
  const [result, setResult] = useState("");
  console.log("sdt1", phoneNumber)

  const signin = () => {
    if (phoneNumber === "") return;

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
    });

    auth
      .signInWithPhoneNumber(phoneNumber, verify)
      .then((result) => {
        setResult(result);
        setStep("VERIFY_OTP");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const ValidateOtp = () => {
    if (otp === null) return;

    result
      .confirm(otp)
      .then((result) => {
        setStep("VERIFY_SUCCESS");
      })
      .catch((err) => {
        alert("Incorrect code");
      });
  };

  const router = useRouter();
  const handleSuccess = (phoneNumber : string) => {
    console.log("sdt", phoneNumber)

    // router.push("/lichsu");
    router.push({
      pathname:'/lichsu',
      query: {phoneNumber: phoneNumber},
    })
  }

  return (
    <div style={{ marginTop: 100 }}>
      <center>
    
        {step === "INPUT_PHONE_NUMBER" && (
          <div className="form bg-gray-100 w-80 h-48">
            <h1 className="pt-2">Vui lòng đăng nhập</h1>
            <div className="mb-4">
              <input
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                placeholder="Số điện thoại"
                className=" h-10 w-60 mt-4 border-gray-400 bg-gray-100 border-solid  border-b-2"
              />
              <br />
              <br />
              <div id="recaptcha-container"></div>
              <button
                onClick={signin}
                className="bg-green-700 w-60 h-10 rounded-3xl font-semibold text-white hover:bg-indigo-700"
              >
                Send OTP
              </button>
              <div>
                <button onClick={() => Router.back()} className="text-right pt-3 ">Trở về</button>
              </div>
            </div>
          </div>
        )}

        {step === "VERIFY_OTP" && (
          <div className="form bg-gray-100 w-80 h-48">
            <h1 className="pt-2">Vui lòng đăng nhập</h1>
            <input
              type="text"
              placeholder={"Enter your OTP"}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              className="h-10 w-60 mt-4 border-gray-400 border-solid bg-gray-100 border-b-2"
            />
            <br />
            <br />
            <button
              className="bg-green-700 w-60 h-10 rounded-3xl font-semibold text-white hover:bg-indigo-700"
              onClick={ValidateOtp}
            >
              Đăng nhập
            </button>
            <button onClick={() => Router.back()} className="text-right pt-4 pr-4">Trở về</button>
          </div>
        )}

        {step === "VERIFY_SUCCESS" && handleSuccess(phoneNumber)}


        {step === "VERIFY_FAIL" && <h3>Verify Fail</h3>}

        {/* {step === 'VERIFY_SUCCESS' ?
            handleSuccess()
            : <h3>Verify Fail</h3>
            } */}
      </center>
    </div>
  );
};

export default SignInOTP;
