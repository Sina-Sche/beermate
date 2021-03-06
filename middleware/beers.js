export async function getBeersByABV(abv) {
  try {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?abv_lt=${abv}`
    )
    const data = response.json()
    return data
  } catch (error) {
    return error
  }
}

export async function getRandomBeer() {
  try {
    const response = await fetch('https://api.punkapi.com/v2/beers/random')
    const beer = response.json()
    return beer
  } catch (error) {
    return error
  }
}
