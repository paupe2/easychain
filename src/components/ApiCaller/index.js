import axios from 'axios'
import { useState, useEffect } from 'react'

export const useNFTPort = ({ chain = 'ethereum' }) => {
  const [responseState, setResponseState] = useState({ response: {}, isResolved: false })

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: '89959bd1-d013-40bd-9a4a-5f435a78eb86'
      }
    }

    const fecthData = async () => {
      const response = await axios.get('https://api.nftport.xyz/v0/nfts?chain=' + chain + '&include=all', config)
      setResponseState({ response, isResolved: true })
    }

    fecthData()
  }, [chain])

  return responseState
}

export const useCoinsList = () => {
  const [responseState, setResponseState] = useState({ response: {}, isResolved: false })

  useEffect(() => {
    const config = {
      headers: {
        accept: 'application/json'
      }
    }

    const fecthData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list', config)
      setResponseState({ response, isResolved: true })
    }

    fecthData()
  }, [])

  return responseState
}

export const useSupportedCurrencies = () => {
  const [responseState, setResponseState] = useState({ response: {}, isResolved: false })

  useEffect(() => {
    const config = {
      headers: {
        accept: 'application/json'
      }
    }

    const fecthData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies', config)
      setResponseState({ response, isResolved: true })
    }

    fecthData()
  }, [])

  return responseState
}
