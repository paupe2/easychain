import { useNFTPort } from '../ApiCaller'

const NftDisplayer = ({ nftData = { contract_address: '', token_id: '' } }) => {
  return (
    <>
      <p>
        <b>Chain:</b> {nftData.chain}
        <b>Contract Address:</b> {nftData.contract_address}
        <b>Creator Address:</b> {nftData.creator_address}
        <b>Token Id:</b> {nftData.token_id}
      </p>
      <img src={nftData.file_url} alt={nftData.file_url} />
    </>
  )
}

const NftsDisplayer = ({ nfts = [] }) => {
  return (
    <ul>
      {nfts.map((nft, index) =>
        <li key={index}>
          <NftDisplayer nftData={nft} />
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
