<template>
  <div class="finder-outer-directory-list">
    <div class="finder-directory-container education-folder">
      <div><img class="finder-folder-icon" src="../images/directory.png"/></div>
      <div class="finder-directory"><p>Education</p></div>
    </div>
    <div class="finder-directory-container experience-folder">
      <div><img class="finder-folder-icon" src="../images/directory.png"/></div>
      <div class="finder-directory"><p>Experience</p></div>
    </div>
    <div class="finder-directory-container projects-folder">
      <div><img class="finder-folder-icon" src="../images/directory.png"/></div>
      <div class="finder-directory"><p>Projects</p></div>
    </div>
    <div class="finder-directory-container documents-folder">
      <div><img class="finder-folder-icon" src="../images/directory.png"/></div>
      <div class="finder-directory"><p>Documents</p></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/scss/variables-mac";

/* finder folders */
.finder-directory-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2.5px 5px;
  cursor: pointer;

  &:hover {
    background-color: $mac-highlight-color-dark;
  }
}

.finder-folder-icon {
  width: 20px;
  margin-right: 5px;
}

/* finder items */
.finder-item-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2.5px 5px;
  cursor: pointer;

  &:hover {
    background-color: $mac-highlight-color-dark;
  }
}

.finder-item-icon {
  width: 16px;
  margin-right: 5px;
  margin-bottom: 1px;
}

.finder-item-icon.image {
  border: 1px solid white;
  box-shadow: 0px 0.5px 1px 0.5px rgba(0,0,0,0.25);
}

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

/* finder selected items */
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

/* mobile finder styles */
@media screen and (max-width: 650px) {
  .finder-section {
    width: 50%;
  }

  .finder-section:last-child {
    display: none;
  }

  .finder-selected-item {
    display: none;
  }
}
</style>