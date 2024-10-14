<template>
  <div class="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img :src="image" :alt="title" class="object-cover h-48 w-full" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ title }}
        <div v-if="isNew" class="badge badge-secondary">NEW</div>
      </h2>
      <p>{{ description }}</p>
      <div class="card-actions justify-end">
        <div v-for="(tag, index) in tags" :key="index" class="badge badge-outline">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "No description provided.",
    },
    tags: {
      type: Array,
      default: () => [],
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

