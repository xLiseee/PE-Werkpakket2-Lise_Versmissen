<template>
  <header>
    <div class="navbar">
      <ul class="nav-links">
        <li>
          <router-link to="/"
            ><img alt="logo" src="/logotje.png"
          /></router-link>
        </li>
        <li>
          <router-link to="/shop">Shop</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
      <div class="search-box"></div>
      <div class="icons">
        <span class="icon"
          ><router-link to="/shoppingcart"
            ><svg
              class="icon icon-tabler icon-tabler-shopping-bag"
              fill="none"
              height="24"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path
                d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"
              />
              <path d="M9 11v-5a3 3 0 0 1 6 0v5" /></svg></router-link
        ></span>
        <span class="icon"
          ><router-link to="/login"
            ><svg
              class="icon icon-tabler icon-tabler-user"
              fill="none"
              height="24"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg> </router-link
        ></span>
      </div>
    </div>
  </header>
</template>
