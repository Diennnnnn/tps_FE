import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import ReactDOM from "react-dom";
// import styled from "styled-components";
import { isParameter } from "typescript";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Thongtin from "./Thongtin";
// import { Radio } from '@nextui-org/react';


// import { Props } from "react-modal";
// import { SearchId, SearchPhone } from "@/Service/userSerice";
import { before } from "node:test";
import { SearchPhone } from "@/service/userService";


// const inter = Inter({ subsets: ["latin"] });

// type type = {
//   Hovaten: string;
//   dodai: number;
//   show: any;
//   children: any;
//   onClose: any;
//   title: any;
//   Ho: String;
//   Ten: String;
//   Dienthoai: String;
//   Gioitinh: String;
//   Diachi: String;
// };
export type thongtinbenhnhan = {
  id: number;
  Ho: string;
  Ten: string;
  Dienthoai: string;
  Gioitinh: string;
  Diachi: string;
  Hovaten: string;
};
type Props = {
  date: any;
  key: number;
  id: number;
  Ho: string;
  Ten: string;
  Hovaten: string;
  dodai: number;
  show: any;
  children: any;
  onClose: any;
  title: any;
  // Ho: String;
  // Ten: String;
  Dienthoai: String;
  Gioitinh: String;
  Diachi: String;
  key1: string;
  dodaimang: number;
  gioitinh: String;
};

const Modal = ({
  show,
  date,
  children,
  onClose,
  title,
  key,
  id,
  Ho,
  Ten,
  dodaimang,
  key1,
  gioitinh,
}: Props) => {
  // const Modal: React.FC<type> = ({ show, children, onClose, title}) => {

  interface History {
    id: number;
    SDT: string;
    ngay: string;
    name_bacsi: string;
    chuandoan: string;
    donthuoc: any;
    ketquaCLS: string;
  }

  // interface Benhnhan1 {
  //   id: number;
  //   Ho: string;
  //   Ten: string;
  //   Dienthoai: string;
  //   Gioitinh: string;
  //   Diachi: string;
  // }
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const [searchkey, setSearchkey] = useState("");
  const [history, setHistory] = useState<History[]>([]);
  // const [benhnhan1, setBenhnhan1] = useState<Benhnhan[]>([]);

  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);
 
  
  const handlechange = async (e: ChangeEvent<HTMLInputElement>) => {
    // setSearchkey("076887349");
 
    const key = "0776887349"
    console.log("hello")
    e.preventDefault();
    try {
      const params = {
        key: key,
      };
      console.log("search", params);
      const response = await SearchPhone(params);
      const res: History[] = response.histories;
      console.log("check api search: ", response);     
      setHistory(res);
   
    } catch (error) {
      console.log(error);
    }

  };

  return (
    
    <main >
      {/* <Header /> */}
      <center >
        <div className="bg-green-500 h-8 uppercase text-xl">
          lịch sử khám bệnh 
        </div>
        {/* <button>hello</button> */}
        {/* <input onChange={handlechange}
        placeholder="rtyujk" ></input> */}
        <div className="row p-5">  
          <table className=" border-separate border border-slate-400 w-full  ">
            <thead>
              <tr>
                {/* <th className="border border-slate-300">#</th> */}
                <th className="border border-slate-300">Ngày</th>
                <th className="border border-slate-300">Bác sĩ</th>
                <th className="border border-slate-300">Chẩn đoán</th>
                <th className="border border-slate-300">Đơn thuốc</th>
                <th className="border border-slate-300">Kết quả CLS</th>
              </tr>
            </thead>
            <tbody>
            {/* {
              userData.map((userData, index) => (
                <tr key ={index}>
                  <td>{index+1}</td>
                  <td>{userData.ngay}</td>
                </tr>
              ))
            } */}





            {/* {
              history.map((getcate) => (
                <tr key ={getcate.chuandoan}>
                  <td>{getcate.donthuoc}</td>
                </tr>
              )
              )
            } */}
              {/* {category.map((historys) => (
                <tr key={historys.id}>
                  <td>{historys.ngay}</td>
                  <td> {historys.name_bacsi}</td>
                  <td> {historys.chandoan}</td>
                  <td>{historys.donthuoc}</td>
                </tr>
              ))} */}

            </tbody>
          </table> 
        </div>
      </center>
      {/* <button onClick={handlechange}>click</button> */}

    </main>
  );

};



export default Modal;
