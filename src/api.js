const url = 'https://api.coincap.io/v2'

let getAssets = () => {
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

let getAsset = coin => {
  return fetch(`${url}/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data)
}

let getAssetHistory = coin => {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data)
}

let getMarkets = coin => {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data)
}

let getExchange = id => {
  return fetch(`${url}/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data)
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
}
