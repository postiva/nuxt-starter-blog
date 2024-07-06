<script setup>
import { postivaClient } from '~/libs/postivaClient';

const siteMetadata = useAppConfig().metadata;
definePageMeta({
    // title: ,
    // description: ,

})
useServerSeoMeta({
    title: `Blog - ${siteMetadata.author}`,
    description: siteMetadata.description,
})

const {data: contents, pagination} = await postivaClient.contents.getContents();
</script>
<template>
    <NuxtLayout name="list" title="All Posts" :posts="contents" :current-page="1">
    </NuxtLayout>
</template>