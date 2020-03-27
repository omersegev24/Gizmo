<template>
  <div class="social-sharing">
    <social-sharing
      url="https://vuejs.org/"
      title="The best toys Framework"
      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
      quote="Vue is a progressive framework for building user interfaces."
      hashtags="vuejs,javascript,framework"
      inline-template
    >
      <div class="links">
        <network network="email">
          <i class="fas fa-at"></i>
        </network>
        <network network="facebook">
          <i class="fab fa-facebook"></i>
        </network>
        <network network="whatsapp">
          <i class="fab fa-whatsapp"></i>
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
export default {};
</script>
