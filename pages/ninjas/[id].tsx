import axios from "axios";

export const getStaticPaths= async () => {
    const resData = await axios.get("http://localhost:8080/api/get-history?SDT=ALL");
    const reqData = await resData.data.historys;
    const paths = reqData.map(item => {
        return{
            params: {id: item.id.toString()}

        }
        
    })

    return{
      paths,
      fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const resData = await axios.get("http://localhost:8080/api/get-history?SDT=ALL" + id);
    const reqData = await resData.data.historys;
    return{
      props: { historys:reqData}
    }
  }
  
const Details = ({item}) => {
    return (
        <div>
            {/* <h1>{item.hovaten}</h1> */}
            <p>{item.SDT}</p>
        </div>
    );
}
export default Details;