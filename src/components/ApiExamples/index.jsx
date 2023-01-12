import { useNFTPort } from '../ApiCaller'
import { useNft } from 'use-nft'

const NftDisplayer = ({ nftData = { contract_address: '', token_id: '' } }) => {
  const { loading, nft } = useNft(
    nftData.contract_address,
    nftData.token_id
  )
  return (
    <>
      {loading
        ? <p>
          <b>Chain:</b> {nft.chain}
          <b>Contract Address:</b> {nft.contract_address}
          <b>Creator Address:</b> {nft.creator_address}
          <b>Token Id:</b> {nft.token_id}
        </p>
        : <>
          <h1>{nft.name}</h1>
          <img src={nft.image} alt='' />
          <p>{nft.description}</p>
          <p>Owner: {nft.owner}</p>
          <p>Metadata URL: {nft.metadataUrl}</p>
        </>}
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
