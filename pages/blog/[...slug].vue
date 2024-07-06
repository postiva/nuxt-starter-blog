<script setup>
import { postivaClient } from '~/libs/postivaClient';
const DEFAULT_LAYOUT = 'post'
const { path } = useRoute()
const slug = path.split('/').pop();

const content = await postivaClient.contents.getContentBySlug(slug);

// const [prev, next] = await queryContent('blog')
//     .only(['_path', 'title'])
//     .sort({ date: -1 })
//     .findSurround(path)

</script>
<template>
    <NuxtLayout :name="DEFAULT_LAYOUT" :post="content">
    </NuxtLayout>
</template>