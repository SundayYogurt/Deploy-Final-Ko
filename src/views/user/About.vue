<script setup>
import Card from '@/components/Card.vue';
import Welcome from '@/components/Welcome.vue';
import UserLayout from '@/layouts/UserLayout.vue';
import UserLayout2 from '@/layouts/UserLayout2.vue';
</script>

<template>
  <UserLayout>
    <div class="flex flex-col md:flex-row w-full h-auto p-4 md:p-10">
      <article class="prose lg:prose-xl flex-1 p-40">
        <h1>About us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country. But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country. But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country. But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country. But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
      </article>

      <div class="flex justify-center items-center w-full md:w-1/2 mt-4 md:mt-0">
        <img src="/img/cat-dance-dancing-cat.gif" alt="Dancing Cat" class="max-w-full h-auto rounded" />
      </div>
    </div>
  </UserLayout>

  <UserLayout2 /> <!-- แสดง UserLayout2 ที่เป็น footer -->
</template>
