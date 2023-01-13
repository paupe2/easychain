import { useCoinsList, useSupportedCurrencies } from '../ApiCaller'

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
