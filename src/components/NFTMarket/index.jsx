import { Frame } from './styles'
import { useNFTPort } from '../ApiCaller'
import LoadingComponent from '../LoadingComponent'

const NFTMarket = () => {
    const nfts = useNFTPort({ chain: 'polygon' })

    return (
        <Frame>
            {nfts.isResolved
            ? <div/>
            : <LoadingComponent />}
        </Frame>
    )
}

export default NFTMarket