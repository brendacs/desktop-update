<script>
import MacDesktop from './components/desktops/mac/MacDesktop.vue'

export default {
  name: 'App',
  components: {
    MacDesktop
  }
}
</script>

<template>
  <div id="app">
    <MacDesktop />
  </div>
</template>

<style lang="scss">
/* imports */
@import url('https://fonts.googleapis.com/css2?family=Muli:wght@400;700&display=swap');
@import './assets/scss/variables-mac';

/* reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  user-select: none;
}

/* globals */
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
button {
  font-family: 'Muli', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  cursor: default;
}

.hide {
  display: none !important;
}
</style>
