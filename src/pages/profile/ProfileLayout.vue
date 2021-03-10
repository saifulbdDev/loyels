<template>
  <section class="user-profile">
    <div class="container-fluid">
      <div class="section-wrapper">
        <div class="row">
          <div class="col-lg-3 col-12">
            <UserNavigation />
          </div>
          <div class="col-lg-9 col-12 mt-4 mt-lg-0">
             <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import UserNavigation from "./UserNavigation";


export default {
  name: "Profile",
  components: {
    UserNavigation
  }
}
</script>