<script>
export default {
  name: "ItemDescription",
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      exts: ["css", "dev", "js", "html", "pdf", "py", "vue"],
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    hasValidExtension: (item, exts = []) => {
      for (let ext of exts) {
        if (item.name && item.name.split(".")[1].includes(ext)) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<template>
  <div class="finder-selected-item-wrapper" :class="{ hide: !item.name }">
    <div class="finder-selected-item">
      <div class="finder-selected-image">
        <img
          class="selected-item-image"
          :class="`file-${hasValidExtension(item, exts)}`"
          :src="item.image && require(`../images/${item.image}`)"
        />
      </div>
      <div class="finder-selected-item-text-container">
        <div class="item-heading">
          <h2>{{ item.heading }}</h2>
          <p class="subtitle">
            {{ item.subtitle }}
          </p>
        </div>
        <div class="info-heading">
          <h3>Information</h3>
          <a class="finder-link" @click="$emit('show-click')">
            {{ expanded ? "Show Less" : "Show More" }}
          </a>
        </div>
        <div class="info-row">
          <p>Created</p>
          <p class="detail">
            {{ item.startDate }}
          </p>
        </div>
        <div class="info-row">
          <p>Modified</p>
          <p class="detail">
            {{ item.endDate }}
          </p>
        </div>
        <div class="info-row" :class="{ hide: !item.link }">
          <p>Download</p>
          <p class="detail">
            <a
              class="finder-link"
              :href="`${publicPath}${item.link}`"
              target="_blank"
            >
              file link
            </a>
          </p>
        </div>
        <div class="info-row" :class="{ hide: !item.website }">
          <p>Website</p>
          <p class="detail">
            <a class="finder-link" :href="item.website" target="_blank">
              external link
            </a>
          </p>
        </div>
        <div class="info-row" :class="{ hide: !item.github }">
          <p>GitHub</p>
          <a class="finder-link" :href="item.github" target="_blank">
            repository
          </a>
        </div>
        <p class="description" :class="{ hide: !expanded }">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/scss/variables-mac";

.finder-selected-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
}

.finder-selected-item-text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  width: 100%;

  h2 {
    font-size: 15px;
    font-weight: bold;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
  }
}

.finder-selected-image {
  width: 100%;
  height: 135px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.selected-item-image {
  width: 100%;
  object-fit: contain;

  &.file-true {
    width: 60%;
  }
}

a.finder-link {
  color: darken($folder-bright-blue, 5%);
  transition: all 0.15s ease;
}

a.finder-link:hover {
  color: darken($folder-bright-blue, 25%);
}

.item-heading {
  width: 100%;
  border-bottom: 1px solid darken($mac-gray, 15%);
  padding-bottom: 8px;
  margin-bottom: 8px;

  .subtitle {
    color: darken($mac-gray, 15%);
  }
}

.info-heading,
.info-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-heading {
  margin-bottom: 10px;
}

.info-row {
  border-bottom: 1px solid $mac-gray;

  .date {
    font-size: 11px;
  }

  p:first-child {
    margin-right: 20px;
    color: darken($mac-gray, 15%);
  }

  p:last-child {
    text-align: right;
  }
}

.description {
  margin-top: 20px;
  font-size: 10px;
}
</style>
