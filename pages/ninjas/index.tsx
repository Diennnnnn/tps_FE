import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const resData = await axios.get("http://localhost:8080/api/get-history?SDT=ALL");
  const reqData = await resData.data.historys;
  return{
    props: { historys:reqData}
  }
}
const Home = ({historys}) => {
  return(
    <div>
        {historys.map(item => (
            <Link href={'/ninjas/' + item.id} key={item.id}>
                <p>{item.hovaten}</p>
            </Link>
            
        ))}
    </div>
    );
}
export default Home;


// const bookinglist = () => {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [userData, setUserData] = useState([]);
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//     const getUserdata = async () => {
//       const reqData = await axios.get("http://localhost:8080/api/get-history?SDT=ALL");
//       const resData = await reqData.data.historys;
//       setUserData(resData);
//       //console.log(resData);
//     };
//     getUserdata();
//   }, []);

//   return(
//     <div>
//         {userData.map((item) => (
//             <Link href={'/ninjas/' + item.id} key={item.id}>
//                 <p>{item.hovaten}</p>    
//             </Link>
            
//         ))}
//     </div>
//     );
// }
// export default bookinglist;