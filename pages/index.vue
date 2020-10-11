<template>
  <div class="posts">
    <div v-for="(post1, index) in postss" :key="index" class="post">
      {{ post1.fields.txt }}
    </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'hoge',
        order: '-sys.createdAt',
      })
      .then(entries => {
        return { postss: entries.items }
      })
      .catch(e => console.log(e))
  },
}
</script>