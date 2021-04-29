<template>

  <div class="catalogue">
    <a :class="{
      'catalogue__item': true,
      'catalogue__item--active': curArticle === key}"
       v-for="key in Object.keys(htmlStrings)"
       :key="key"
       @click="showMarkdown(key)"
    >
      {{ key }}
    </a>
  </div>
  <main class="main">
    <h1>{{ curArticle }}</h1>
    <article class="context" v-html="article"></article>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import htmlStrings from "../markdown"

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      curArticle: '',
      htmlStrings : Object.freeze(htmlStrings)
    }
  },
  methods: {
    showMarkdown (articleKey: string): void {
      console.log(articleKey)
    }
  },
  computed: {
    article () {
      return this.htmlStrings[this.curArticle]
    }
  },
  created () {
    this.curArticle = Object.keys(this.htmlStrings)[0]
  }
})
</script>

<style scoped lang="scss" rel="stylesheet/scss">
a {
  color: #17a9ff;
  cursor: pointer;
  user-select: none;
}

.main {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;

  .context {
    &:deep(pre) {
      padding: 10px;
      border-radius: 4px;
    }
  }
}
</style>
