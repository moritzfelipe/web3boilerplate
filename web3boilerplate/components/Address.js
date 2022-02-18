
import { useAccount } from "wagmi"
const Address = () => {

    const [{ data, error, loading }, disconnect] = useAccount()
    if (data?.address) {
        return(

            <h1>Your address : { data.address} </h1>
        )
    }
    return null
   
}

export default Address