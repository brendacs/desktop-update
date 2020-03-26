<template>
  <div />
</template>

<style lang="scss" scoped>
.finder-selected-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.finder-selected-item-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  padding: 20px;
}

.finder-selected-text {
  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  .date {
    font-style: italic;
    margin-bottom: 10px;
  }
}

.selected-item-image {
  width: 100%;
  margin-bottom: 10px;
}

.selected-file {
  width: 60%;
}

a.finder-link {
  color: darken($folder-bright-blue, 15%);
  transition: all 0.15s ease;
}

a.finder-link:hover {
  color: darken($folder-bright-blue, 25%);
}

@media screen and (max-width: 650px) {
  .finder-selected-item {
    display: none;
  }
}
</style>