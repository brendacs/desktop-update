<script>
export default {
  name: 'UserTag'
}
</script>

<template>
  <div class="user-wrapper">
    <div class="user-image-wrapper">
      <img class="user-image" src="./images/lakeside-wallpaper-square.jpg">
    </div>
    <div>
      <h1 class="user-name">
        <span class="bold">Brenda</span> Zhang
      </h1>
      <p class="version">
        Version 2.3.6
      </p>
      <p><span class="bold spaced">MacBook Pro (13-inch, 2020, Four Thunderbolt 3 ports)</span> </p>
      <p><span class="bold spaced">Processor</span> 2.8 GHz Quad-Core Intel Core i7</p>
      <p><span class="bold spaced">Memory</span> 16 GB 2133 MHz LPDDR3</p>
      <p><span class="bold spaced">Startup Disk</span> Macintosh HD</p>
      <p><span class="bold spaced">Graphics</span> Intel Iris Plus Graphics 655 1536 MB</p>
      <p><span class="bold spaced">Serial Number</span> B236Y10Z8RKMQ20</p>
      <p>
        <span class="bold spaced">Personal Website </span>
        <a
          class="link"
          href="https://brendacs.dev"
          target="_blank"
        >
          https://brendacs.dev
        </a>
      </p>
      <p>
        <span class="bold spaced">LinkedIn </span>
        <a
          class="link"
          href="https://linkedin.com/in/brendacs"
          target="_blank"
        >
          https://linkedin.com/in/brendacs
        </a>
      </p>
      <p>
        <span class="bold spaced">GitHub </span>
        <a
          class="link"
          href="https://github.com/brendacs"
          target="_blank"
        >
          https://github.com/brendacs
        </a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/scss/variables-mac";

.user-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, $mac-titlebar-color-light, $mac-titlebar-color-dark);
  height: 100%;
  border-radius: 6px;
}

.user-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid $mac-gray;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-right: 50px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

.user-name {
  font-size: 30px;
  line-height: 1;
}

.version {
  margin-bottom: 10px;
}

.link {
  color: darken($folder-bright-blue, 5%);

  &:hover {
    color: darken($folder-bright-blue, 25%);
  }
}

.bold {
  font-weight: bold;
}

.spaced {
  margin-right: 5px;
}
</style>
