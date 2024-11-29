<template>
  <div class="home-page">
    <header>
      <h1>欢迎来到我们的酒店管理系统</h1>
      <p>我们为您提供全方位的服务体验。</p>
    </header>
    
    <section class="features">
      <div class="feature">
        <h2>自助入住</h2>
        <p>方便快捷，享受不间断的服务。</p>
      </div>
      <div class="feature">
        <h2>温控系统</h2>
        <p>每个房间的空调可以独立调节，让您随时保持舒适。</p>
      </div>
      <div class="feature">
        <h2>实时监控</h2>
        <p>管理员可以查看各个房间的状态，确保一切正常。</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 2rem;
  background-color: #f4f4f4;
}

header {
  background-color: #42b983;
  padding: 2rem;
  color: white;
  border-radius: 8px;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}

.feature {
  background-color: white;
  padding: 1rem;
  width: 25%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.feature h2 {
  color: #42b983;
}
</style>
