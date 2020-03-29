<template>
  <div class="social-sharing">
    
    <social-sharing
      :title="url"
      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
      quote="Vue is a progressive framework for building user interfaces."
      hashtags="website,websiteBuilder,framework"
      inline-template
    >
      <div class="links">
        <network network="email">
          <i class="fas fa-at fa-2x"></i>
        </network>
        <network network="facebook">
          <i class="fab fa-facebook fa-2x"></i>
        </network>
        <network network="whatsapp">
          <i class="fab fa-whatsapp fa-2x"></i>
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
export default {
  props: {
    url: String
  },
  created() {
    console.log('social' ,this.url)
  },
};
</script>
<style lang="scss">
.social-sharing {
  display: flex;
  justify-content: center;
  .links > * {
    padding: 20px;
    cursor: pointer;
  }
}
</style>
