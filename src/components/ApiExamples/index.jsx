import { useNFTPort } from '../ApiCaller'

const NftsDisplayer = ({ nfts = [] }) => {
  return (
    <ul>
      {nfts.map((nft, index) =>
        <li key={index}>
          <p>
            <b>Chain:</b> {nft.chain}
            <b>Contract Address:</b> {nft.contract_address}
            <b>Creator Address:</b> {nft.creator_address}
            <b>Token Id:</b> {nft.token_id}
          </p>
        </li>)}
    </ul>
  )
}
export const RawMarketDisplayer = ({ filter = '' }) => {
  const nfts = useNFTPort(filter)
  console.log(nfts)
  return (
    <>
      {nfts.isResolved
        ? <NftsDisplayer nfts={nfts.response.data.nfts} />
        : <p>LOADING LOADING LOADING</p>}
    </>
  )
}
