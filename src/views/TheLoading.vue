<template>
  <div id="loading">
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheLoading"
};
</script>

<style scoped>
#loading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 99;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
}

.spinner {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -30px;
  margin-top: -30px;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #4403f7;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
