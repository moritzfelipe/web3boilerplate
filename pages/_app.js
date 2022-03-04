import "../styles/globals.css";
import { providers } from 'ethers'
import { Provider } from "wagmi";

const provider = ({ chainId }) =>
  new providers.InfuraProvider(chainId, process.env.NEXT_PUBLIC_INFURA_ID)

function MyApp({ Component, pageProps }) {
  return (
    <Provider provider={provider}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
