<template>
  <div class="blogList">
    <div class="columns">
      <div class="column is-four-fifths">
        <BlogListCard v-for="blog in blogList" :key="blog.title" :blog="blog" />
      </div>
      <div class="column">
        <CategoryAside />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryAside from '~/components/BlogCategoryAside.vue'
import BlogListCard from '~/components/BlogListCard.vue'
// import BlogPagination from '~/components/BlogListPagination.vue'

export default {
  middleware: 'static-content',
  components: {
    CategoryAside,
    BlogListCard
    // BlogPagination
  },
  mounted() {
    const images = document.getElementsByTagName('img')
    this.$updateBlogImagesSource(
      Array.from(images).filter(img => img.src.includes('blog-images'))
    )
  },
  computed: {
    blogList() {
      return this.$store.state.blogList
    }
  }
}
</script>

<style lang="sass">
.blogList

  margin: 1.5rem

</style>
