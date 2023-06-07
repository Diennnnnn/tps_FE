import Header from "@/components/Header";
import Listbooking from "@/components/Listbooking";
import axios from "axios";
import Image from "next/image";

const bookinglist = () => {

    return(
        <div>
            <Header/>
            <Image className="h-20 w-full"
                src="/bgdoctor.jpg"
                alt="banner"
                width={300}
                height={0}   
            />

            <center>
                
                <p className="uppercase font-bold ">pgs.ts.bs nguyễn văn ân</p>
                <p className="uppercase ">danh sách đặt lịch</p>
                <input
                    className="border-gray-400 w-3/4 border-b-2"
                    type="text"
                    placeholder="Tìm tên hoặc số điện thoại"
                />
                <div>
                    <input
                        className="border-gray-500 w-72 border-b-2 pt-3"
                        type="text"
                        placeholder="Ngày Tháng Năm"
                    />
                    <input type="checkbox" className="ml-3"/>
                    <label>TN</label>
                    <input type="checkbox" className="ml-3" />
                    <label>SA</label>
                    <input type="checkbox" className="ml-3" />
                    <label>TR</label>
                    <input type="checkbox"  className="ml-3" />
                    <label>CH</label>
                </div>
                
            </center>
            <Listbooking/>
            
        </div>
    );
}
export default bookinglist;