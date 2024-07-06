<script lang="ts" setup>
import { Content } from "@postiva/client";

const { post } = defineProps<{
    post: Content
}>();

const siteMetadata = useAppConfig().metadata;

const discussUrl = (slug: string) =>
    `https://mobile.twitter.com/search?q=${encodeURIComponent(
        `${siteMetadata.siteUrl}/blog/${slug}`
    )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
</script>
<template>
    <SectionContainer>
        <ScrollTopAndComment />
        <article>
            <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header class="pt-6 xl:pb-6">
                    <div class="space-y-1 text-center">
                        <dl class="space-y-10">
                            <div>
                                <dt class="sr-only">Published on</dt>
                                <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                    <time dateTime={date}>
                                        {{ new Date(post.createdAt).toLocaleDateString(siteMetadata.locale) }}
                                    </time>
                                </dd>
                            </div>
                        </dl>
                        <div>
                            <PageTitle>{{ post.title }}</PageTitle>
                        </div>
                    </div>
                </header>
                <div class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
                    :style="{ gridTemplateRows: 'auto 1fr' }">
                    <dl class="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                        <dt class="sr-only">Authors</dt>
                        <dd>
                            <ul class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                                <li class="flex items-center space-x-2">
                                    <nuxt-img v-if="post?.publishedBy" :src="post?.publishedBy?.user?.image" width="38"
                                        height="38" alt="avatar" class="h-10 w-10 rounded-full" />
                                    <dl class="whitespace-nowrap text-sm font-medium leading-5">
                                        <dt class="sr-only">Name</dt>
                                        <dd class="text-gray-900 dark:text-gray-100">{{ post?.publishedBy?.user.name }}
                                        </dd>
                                        <dt class="sr-only">Twitter</dt>
                                        <!-- <dd>
                                            <NuxtLink v-if="author.twitter" :href="author.twitter"
                                                class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                                {{ author.twitter.replace('https://twitter.com/', '@') }}
                                            </NuxtLink>
                                        </dd> -->
                                    </dl>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <div class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                        <div class="prose max-w-none pt-10 pb-8 dark:prose-dark">
                            <MDC :value="post.body" tag="article" />
                        </div>
                        <div class="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                            <NuxtLink :href="discussUrl(post.slug)" rel="nofollow"> Discuss on Twitter </NuxtLink>
                        </div>
                    </div>
                    <footer>
                        <div
                            class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">

                            <div v-if="post.tags" class="py-4 xl:py-8">
                                <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                    Tags
                                </h2>
                                <div class="flex flex-wrap">
                                    <Tag v-for="tag in post.tags" :key="tag" :text="tag" />
                                </div>
                            </div>
                            <!-- <div v-if="next || prev" class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                                <div v-if="prev">
                                    <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                        Previous Article
                                    </h2>
                                    <div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                        <NuxtLink :href="prev._path">{{ prev.title }}</NuxtLink>
                                    </div>
                                </div>
                                <div v-if="next">
                                    <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                        Next Article
                                    </h2>
                                    <div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                        <NuxtLink :href="next._path">{{ next.title }}</NuxtLink>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <div class="pt-4 xl:pt-8">
                            <NuxtLink href="/blog"
                                class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                &larr; Back to the blog
                            </NuxtLink>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    </SectionContainer>
</template>