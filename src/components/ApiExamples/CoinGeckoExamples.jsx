import { useCoinsList } from '../ApiCaller'

export const CoinDisplayer = ({ coin = { id: '', symbol: '', name: '' } }) => {
  return (
    <p>
      <b>ID: </b> {coin.id}
      <b> symbol: </b> {coin.symbol}
      <b> name: </b> {coin.name}
    </p>
  )
}

export const RawCoinsList = () => {
  const coins = useCoinsList({ chain: 'polygon' })
  console.log(coins)
  return (
    <>
      {coins.isResolved
        ? coins.response.data.map((coin, index) => <CoinDisplayer key={index} coin={coin} />)
        : <p>LOADING LOADING LOADING</p>}
    </>
  )
}
