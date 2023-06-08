/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { GetServerSideProps } from "next";
import { SearchPhone } from "@/service/userService";

// interface codeProductProps{
//   phoneNumber: string | null;
// }

const lichsu = () => {
  interface History {
    id: number;
    username: string;
    password: string;
    ngay: Date;
    hovaten: string;
    name_bacsi: any;
    chandoan: string;
    donthuoc: string;
    ketquaCLS: string;
  }

  //   const [sdt1, setSdt] = useState("");
  //console.log("sdt1", phoneNumber)

  let phoneNumber = "+84366655650";
  let temp = phoneNumber?.split("+84");
  let sdt = "0" + temp[1];
  // console.log("sdt_temp", "0"+temp[1]/)
  console.log("sdt", sdt);

  const [ngay1, setNgay1] = useState(new Date());

  const [ngayfrm, setNgayfrm] = useState(new Date())

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userData, setUserData] = useState<History[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // const handleFormatDateTime = (ngayyy: Date) => {
  //   console.log("asda",ngayyy)
  //   setNgayfrm(
  //     ngayyy.getDate() +
  //       "/" +
  //       (ngayyy.getMonth() + 1) +
  //       "/" +
  //       ngayyy.getFullYear() +
  //       " " +
  //       ngayyy.getHours() +
  //       ":" +
  //       ngayyy.getMinutes() +
  //       ":" +
  //       ngayyy.getSeconds()
  //   );
  //   return ngayfrm;
  // };
    // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getUserdata = async () => {
      const params = {
        key: sdt,
      };
      const reqData = await SearchPhone(params);
      const res: History[] = reqData.historys;
      setUserData(res);
      res.map((res) => (
        setNgayfrm(res.ngay),
          console.log("ngayy", res.ngay),
          setNgay1(res.ngay),
          console.log("ngayyyy", ngayfrm)
          // setNgayfrm(
          //       res.ngay.getDate() +
          //         "/" +
          //         (res.ngay.getMonth() + 1) +
          //         "/" +
          //         res.ngay.getFullYear() +
          //         " " +
          //         res.ngay.getHours() +
          //         ":" +
          //         res.ngay.getMinutes() +
          //         ":" +
          //         res.ngay.getSeconds()
          //     )


      )
      );
      // let temp
      // res.map(
      //   (res) => (
      //     setNgay1(res.ngay), console.log("ngay1", ngay1)
      //     // setNgayfrm(ngay.getDate()+"/"+(ngay.getMonth()+1)+"/"+ngay.getFullYear()+" "+ngay.getHours()+":"+ngay.getMinutes()+":"+ngay.getSeconds())
      //     // setNgay(temp)
      //   )
      // );
      // console.log(" check1", res);
      // console.log(" check2", userData);
      // console.log("ngay", temp)
    };
    getUserdata();
  }, []);

  return (
    <main>
      <Header />
      <center>
        <div className="bg-green-500 h-8 uppercase text-xl">
          lịch sử khám bệnh
        </div>
        <div className="row p-5">
          <table className=" border-separate border border-slate-400 w-full  ">
            <thead>
              <tr>
                {/* <th className="border border-slate-300">#</th> */}
                <th className="border border-slate-300">Ngày</th>
                <th className="border border-slate-300">Họ và tên</th>
                <th className="border border-slate-300">Bác sĩ</th>
                <th className="border border-slate-300">Chẩn đoán</th>
                <th className="border border-slate-300">Đơn thuốc</th>
                <th className="border border-slate-300">Kết quả CLS</th>
                {/* <th className="border border-slate-300">{sdt}</th> */}
              </tr>
            </thead>
            <tbody>
              {userData.map((item) => (
                // setNgay(item.ngay),
                // console.log("ngayzzz",ngay),
                // setNgayfrm(ngay.getDate()+"/"+(ngay.getMonth()+1)+"/"+ngay.getFullYear()+" "+ngay.getHours()+":"+ngay.getMinutes()+":"+ngay.getSeconds()),
                <>
                  <tr key={item.id}>
                    <td className="border border-slate-300">
                      {item.ngay}
                      {/* {handleFormatDateTime(item.ngay)} */}
                    </td>
                    <td className="border border-slate-300">{item.hovaten}</td>
                    <td className="border border-slate-300">
                      {item.name_bacsi}
                    </td>
                    <td className="border border-slate-300">
                      {item.chandoan}
                    </td>
                    <td className="border border-slate-300">{item.donthuoc}</td>
                    <td className="border border-slate-300">
                      {item.ketquaCLS}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </main>
  );
};

// export const getServerSideProps: GetServerSideProps<codeProductProps> = async (
//   context
// )=>{
//   // const {phoneNumber} = context.query;

//   const {phoneNumber} = context.query;

//   return{
//     props: {
//       phoneNumber: phoneNumber as string | null
//     }
//   }
// }

export default lichsu;

function dayjs(date: any) {
  throw new Error("Function not implemented.");
}
// export async function getStaticProps(context){
//   const res = await axios.get("http://localhost:8080/api/get-history?SDT=ALL");
//   const histories = await res.historys;
//   return{
//     props: {histories}
//   };
// }

// import Header from "@/components/Header";
// // import React, { useState, useEffect } from "react";
// // import fetch from "isomorphic-unfetch";
// // import { Axios } from "axios";
// // import { render } from "react-dom";

// // function lichsu(){
//   const lichsu =() =>{
//     // interface History {
//     //   id: number;
//     //   Ho: string;
//     //   Ten: string;
//     //   Ngaysinh: string;
//     //   Dienthoai: string;
//     //   Gioitinh: any;
//     //   Diachi: string;
//     //   Trieuchung: string;
//     // }
//     // const [history, setHistory] = useState<History[]>([]);

//   // // eslint-disable-next-line react-hooks/rules-of-hooks
//   // const [userData, setUserData] = useState([]);
//   // // eslint-disable-next-line react-hooks/rules-of-hooks
//   // useEffect(() => {
//   //   const getUserdata = async () => {
//   //     const reqData = await fetch("http://localhost:8080/api/get-history?SDT=ALL");
//   //     const resData = await reqData.json();
//   //     setUserData(resData);
//   //     console.log(resData);
//   //   }
//   //   getUserdata();
//   // },[]);

//   //eslint-disable-next-line react-hooks/rules-of-hooks
//   // const [category, setCategory] = useState([]);

//   // //eslint-disable-next-line react-hooks/rules-of-hooks
//   // useEffect(() => {
//   //   const getcategory = async () => {
//   //     const res = await fetch(
//   //       "http://localhost:8080/api/get-history?SDT=ALL"
//   //     );
//   //     const getdata = await res.json();
//   //     setCategory(getdata);
//   //     //console.log(getdata);
//   //   };
//   //   getcategory();
//   // }, []);

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   // const [predict, setPredict] = useState(null);
//   // // eslint-disable-next-line react-hooks/rules-of-hooks
//   // const [name, setName] = useState("");
//   // const fetchData = () => {
//   //   Axios.get("http://localhost:8080/api/get-history?SDT=ALL").then((res) =>{
//   //     setPredict(res.data);
//   //   });
//   // };

//   return (
//     <main>
//       <Header />
//       <center>
//         <div className="bg-green-500 h-8 uppercase text-xl">
//           lịch sử khám bệnh
//         </div>
//         <div className="row p-5">
//           <table className=" border-separate border border-slate-400 w-full  ">
//             <thead>
//               <tr>
//                 {/* <th className="border border-slate-300">#</th> */}
//                 <th className="border border-slate-300">Ngày</th>
//                 <th className="border border-slate-300">Bác sĩ</th>
//                 <th className="border border-slate-300">Chẩn đoán</th>
//                 <th className="border border-slate-300">Đơn thuốc</th>
//                 <th className="border border-slate-300">Kết quả CLS</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* {category.map((historys) => (
//                 <tr key={historys.id}>
//                   <td>{historys.ngay}</td>
//                   <td> {historys.name_bacsi}</td>
//                   <td> {historys.chandoan}</td>
//                   <td>{historys.donthuoc}</td>
//                 </tr>
//               ))} */}

//             </tbody>
//           </table>
//         </div>
//       </center>
//     </main>
//   );
// };

// export default lichsu;
// {
//   /* {
//                         category.map( (getcate)=>(
//                         <tr key={getcate.id}>{getcate.name_bacsi}
//                             <td className="border border-slate-300">{getcate.ngay}</td>
//                         </tr>
//                     ))

//                     } */
// }
// {
//   /* <td className="border border-slate-300">52</td>
//                             <td className="border border-slate-300">rfgh</td>
//                             <td className="border border-slate-300">egrg</td>
//                             <td className="border border-slate-300">gth</td>
//                             <td className="border border-slate-300">wrterh</td>
//                             <td className="border border-slate-300">wregrhfg</td> */
// }
