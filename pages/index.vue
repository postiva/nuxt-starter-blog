<script lang="ts" setup>
const MAX_DISPLAY = 5;
const siteMetadata = useAppConfig().metadata;
const newsletter = useAppConfig().newsletter;

import { postivaClient } from "~/libs/postivaClient";

const { data: contents, pagination } = await postivaClient.contents.getContents();

</script>
<template>

    <Head>
        <Title>{{ siteMetadata.title }}</Title>
        <Meta name="description" :content="siteMetadata.description" />
    </Head>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <div class="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1
                class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Latest
            </h1>
            <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
                {{ siteMetadata.description }}
            </p>
        </div>
        <ul class="divide-y divide-gray-2000 dark:divide-gray-700">
            <template v-for="post in contents.slice(0, MAX_DISPLAY)" :key="post._path">
                <li class="py-12">
                    <article>
                        <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                            <dl>
                                <dt class="sr-only">Published on</dt>
                                <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                    <time :dateTime="post.createdAt">{{ formatDate(post.createdAt) }}</time>
                                </dd>
                            </dl>
                            <div class="space-y-5 xl:col-span-3">
                                <div class="space-y-6">
                                    <div>
                                        <h2 class="text-2xl font-bold leading-8 tracking-tight">
                                            <NuxtLink class="text-gray-900 dark:text-gray-100"
                                                :href="`/post/${post.slug}`">
                                                {{ post.title }}
                                            </NuxtLink>
                                        </h2>
                                    </div>
                                    <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                                        {{ post.description }}
                                    </div>
                                </div>
                                <div class="text-base font-medium leading-6">
                                    <NuxtLink
                                        class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                        :href="`${post.slug}`" :aria-label="`Read '${post.title}'`">
                                        Read more &rarr;
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </article>
                </li>
            </template>
        </ul>
    </div>

</template>