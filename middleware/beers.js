export async function getBeersByABV(abv) {
  const response = await fetch(`https://api.punkapi.com/v2/beers?abv_lt=${abv}`)
  const beers = await response.json()
  return beers
}
