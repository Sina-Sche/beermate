<template>
  <div class="container">
    <span>
      Find your perfect beer by ABV value. ABV stands for Alcohol by Volume. You
      can read more about it
      <a href="https://en.wikipedia.org/wiki/Alcohol_by_volume" target="_blank"
        >here</a
      >. Type your desired maximum ABV and get a list of beers that match your
      wishes. Don't care about ABV? Then just click here for a </span
    ><button @click.prevent="getRandomBeer">🍺 random beer 🍺</button>
    <div v-if="beer" class="beer-preview">
      <img :src="image" />
      <p>{{ beer[0].name }}</p>
    </div>
    <button class="collapse" @click="toggleAbout">⤴</button>
  </div>
</template>

<script>
import { getRandomBeer } from '../middleware/beers'
import Beer from '../assets/beer.png'
export default {
  name: 'About',
  emits: ['toggleAbout'],
  data() {
    return {
      beer: '',
      image: '',
    }
  },
  methods: {
    async getRandomBeer() {
      this.beer = await getRandomBeer()
      const getImage = () => {
        this.image = this.beer[0].image_url
        if (this.image === null) {
          this.image = Beer
        }
      }
      getImage()
    },
    toggleAbout() {
      this.$emit('toggleAbout')
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
a {
  width: fit-content;
  color: whitesmoke;
}
p {
  color: black;
}
button {
  margin-top: 10px;
  width: 50%;
}
.collapse {
  background: none;
  font-size: 2rem;
}
.beer-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 15px;
  margin: 10px;
  border-radius: 15px;
  height: 250px;
  width: 250px;
}
img {
  max-height: 80%;
  max-width: 80%;
  object-fit: contain;
}
</style>
