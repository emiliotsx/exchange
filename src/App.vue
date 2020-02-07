<template>
  <main>
    <px-header :links="links"></px-header>
    <router-view class="containter px-5 sm:px-20 py:sm-20 justify-center" />
  </main>
</template>

<script>
import PxHeader from '@/components/PxHeader'

export default {
  name: 'app',
  components: {
    PxHeader
  },
  data() {
    return {
      links: [
        {
          title: 'BTC',
          to: { name: 'coin-detail', params: { id: 'bitcoin' } }
        },
        {
          title: 'ETH',
          to: { name: 'coin-detail', params: { id: 'ethereum' } }
        },
        {
          title: 'XRP',
          to: { name: 'coin-detail', params: { id: 'ripple' } }
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
