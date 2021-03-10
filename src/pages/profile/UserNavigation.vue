<template>
  <div class="user-menu">
    <div class="user-item">
      <div class="user-thumb">
        <div class="thumb-header">
          <span>Hi there! User 01</span>
        </div>
        <div class="thumb">
          <img src="@/assets/images/profile/user.png" alt="user-image" />
        </div>
        <div class="user-info">
          <h4>user01@loyel.com</h4>
          <p>Member since: <span class="date">Mar 29th 2021</span></p>
        </div>
      </div>
      <div class="menu-header">
        <span>User navigation</span>
      </div>
      <div class="user-menulist">
        <ul class="list-item">
          <li v-for="(item, i) in navigation" :key="i">
            <router-link class="user-btn " :to="item.to">
              <span><i :class="item.icon"></i></span><span>{{item.name}}</span>
            </router-link>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
     data() {
    return {
        navigation: [
            { name: 'My account', icon:'fa fa-user', to:'/profile' },
            { name: 'My orders', icon:'fa fa-first-order', to:'/account' },
            { name: 'My Failed transitions', icon:'fa fa-spinner', to:'/account' },
            { name: 'My tickets', icon:'fa fa-ticket', to:'/account' },
            { name: 'Manage address', icon:'fa fa-address-card', to:'/account' },
            { name: 'My bank accounts', icon:'fa fa-dollar', to:'/account' },
            { name: 'Change password', icon:'fa fa-key', to:'/account' },
            { name: 'Sign out', icon:'fa fa-sign-out', to:'/account' },
        ]
    
  
    };
  },
}
</script>
