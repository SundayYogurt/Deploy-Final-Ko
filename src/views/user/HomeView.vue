<template>
  <UserLayout>
    <!-- Container for CardPic with Search overlay -->
    <div class="h-1/2 relative">
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 z-10">
        <Search />
      </div>
      <Carousel />
    </div>

    <!-- Welcome Section -->
    <div class="container mx-auto my-4 p-4">
      <Welcome />
    </div>

    <!-- Card Section -->
    <div class="container mx-auto my-4 p-9">
      <div class="flex flex-row gap-10 justify-center">
        <Card
          image="/img/card1.jpg"
          title="BoyToys"
          description="A cozy and relaxing bar."
          :tags="['Drink', 'Chill']"
          :isNew="false"
        />
        <Card
          image="/img/card2.jpg"
          title="สำเพ็ง"
          description="Enjoy live music and drinks."
          :tags="['Music', 'Live']"
          :isNew="false"
        />
        <Card
          image="/img/card3.jpg"
          title="Flys"
          description="A rooftop bar with scenic views."
          :tags="['Rooftop', 'View']"
          :isNew="true"
        />
        
      </div>
    </div>
  </UserLayout>

  <!-- CarouselWithFullWidthItems Section -->
  <div class="w-full flex items-center justify-center">
    <CarouselWithFullWidthItems />
  </div>

<article class="prose lg:prose-xl m-4 p-4 flex items-center justify-center">
Do you like this info?
</article>

 <!-- Like Button Section -->
<div class="flex items-center justify-center my-4 p-4">
  <likeButton class="p-2 mr-2" /> <!-- เพิ่ม margin-right ให้กับ likeButton -->
  <DislikeButton class="p-2" /> <!-- ไม่มี margin สำหรับ DislikeButton -->
</div>


  <UserLayout2 />
</template>

<script setup>
// Import components and layouts
import UserLayout from '@/layouts/UserLayout.vue';
import UserLayout2 from '@/layouts/UserLayout2.vue';
import Card from '@/components/Card.vue';
import Carousel from '@/components/Carousel.vue';
import Welcome from '@/components/Welcome.vue';
import Search from '@/components/Search.vue';
import CarouselWithFullWidthItems from '@/components/Carousel with full width items.vue';
import likeButton from '@/components/likeButton.vue';
import DislikeButton from '@/components/DislikeButton.vue';
</script>
