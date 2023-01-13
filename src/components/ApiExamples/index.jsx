import { useNFTPort } from '../ApiCaller'
import ReactImageFallBack from 'react-image-fallback'

const NftDisplayer = ({ nftData = { contract_address: '', token_id: '' } }) => {
  return (
    <>
      <p>
        <b>Chain:</b> {nftData.chain}
        <b>Contract Address:</b> {nftData.contract_address}
        <b>Creator Address:</b> {nftData.creator_address}
        <b>Token Id:</b> {nftData.token_id}
      </p>
      <ReactImageFallBack
        src={nftData.file_url}
        fallbackImage={nftData.cached_file_url}
        initialImage={process.env.PUBLIC_URL + '/logo512.png'} // loader
        alt={nftData.file_url}
      />
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
  const nfts = useNFTPort({ chain: 'polygon' })
  console.log(nfts)
  return (
    <>
      {nfts.isResolved
        ? <NftsDisplayer nfts={nfts.response.data.nfts} />
        : <p>LOADING LOADING LOADING</p>}
    </>
  )
}
