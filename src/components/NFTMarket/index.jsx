import { Frame, FlexBox, Header, Content, Footer } from './styles'
import { useNFTPort } from '../ApiCaller'
import LoadingComponent from '../LoadingComponent'
import FilterInput from '../FilterInput'

const NFTMarket = () => {
    const nfts = useNFTPort({ chain: 'polygon' })

    const filterOptions = ['Chain', 'Contract Address', 'Creator Address']

    return (
        <Frame>
            <FlexBox>
                <Header>
                    <FilterInput options={filterOptions} />
                </Header>
                <Content>
                {nfts.isResolved
                    ? <div/>
                    : <LoadingComponent />}
                </Content>
                <Footer></Footer>
            </FlexBox>
        </Frame>
    )
}

export default NFTMarket