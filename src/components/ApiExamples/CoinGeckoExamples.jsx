import { useCoinPrice, useCoinsList, useCoinsMarket, useSupportedCurrencies } from '../ApiCaller'

const CoinDisplayer = ({ coin = { id: '', symbol: '', name: '' } }) => {
  return (
    <p>
      <b>ID: </b> {coin.id}
      <b> symbol: </b> {coin.symbol}
      <b> name: </b> {coin.name}
    </p>
  )
}

export const RawCoinsList = () => {
  const coins = useCoinsList()
  console.log(coins)
  return (
    <>
      {coins.isResolved
        ? coins.response.data.map((coin, index) => <CoinDisplayer key={index} coin={coin} />)
        : <p>LOADING LOADING LOADING</p>}
    </>
  )
}

const CurrencyDisplayer = ({ currency = '' }) => {
  return (
    <p>
      <b>Currency: </b> {currency}
    </p>
  )
}

export const RawSupportedCurrencyList = () => {
  const currencies = useSupportedCurrencies()
  console.log(currencies)
  return (
    <>
      {currencies.isResolved
        ? currencies.response.data.map((currency, index) => <CurrencyDisplayer key={index} currency={currency} />)
        : <p>LOADING LOADING LOADING</p>}
    </>
  )
}

const MarketCoinDisplayer = ({ coin = { id: '', symbol: '', name: '', image: '', current_price: '' } }) => {
  return (
    <>
      <p>
        <b>ID: </b> {coin.id}
        <b> symbol: </b> {coin.symbol}
        <b> name: </b> {coin.name}
        <b> current price: </b> {coin.current_price}
      </p>
      <img src={coin.image} alt={coin.image} />
    </>
  )
}

export const RawCoinMarketList = () => {
  const coins = useCoinsMarket({ currency: 'usd', order: 'market_cap_desc', perPage: 100, page: 1 })
  console.log(coins)
  return (
    <>
      {coins.isResolved
        ? coins.response.data.map((coin, index) => <MarketCoinDisplayer key={index} coin={coin} />)
        : <p>LOADING LOADING LOADING</p>}
    </>
  )
}

export const RawSingleCoinPrice = () => {
  const id = 'bitcoin'
  const currency = 'usd'
  const coin = useCoinPrice({ id, currency })
  console.log(coin)
  return (
    <>
      {coin.isResolved
        ? <p><b>{id} in {currency}: </b> {coin.response.data[id][currency]}</p>
        : <p>LOADING LOADING LOADING</p>}
    </>
  )
}
