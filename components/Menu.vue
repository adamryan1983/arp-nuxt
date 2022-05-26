<template>
 <nav class="nav-container">
  <div class="menu-container">
    <a href="#" class="flex items-center">
        <span class="logo">ADAM RYAN</span>
    </a>
    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  
    <div class="link-container">
      <div class="menu-split">
        <ul class="menu-items">
          <li>
            <a href="#" class="link" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="link">About</a>
          </li>
          <li>
            <a href="#" class="link">Services</a>
          </li>
          <li>
            <a href="#" class="link">Pricing</a>
          </li>
          <li>
            <a href="#" class="link">Contact</a>
          </li>
        </ul>
        <ul class="social">
          <li class="link"><a href="#"><i class="pi pi-facebook" style="font-size: 1.5rem"/></a></li>
          <li class="link"><a href="#"><i class="pi pi-instagram" style="font-size: 1.5rem"/></a></li>
          <li class="link"><a href="#"><i class="pi pi-send" style="font-size: 1.5rem"/></a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
  .nav-container {
    margin: 0 2rem;
    height: 20vh;

  }
  .menu-container {
    display:flex;
    height: 100%;
    justify-content: space-between;
  }
  .logo {
    color: rgb(69, 69, 69);
    font-size: 3rem;
    font-weight: 600;
  }
  .link-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
  }
  .menu-items, .social {
    display: flex;
    list-style: none;
    .link {
      padding: 0 1.5rem;
      color: grey;
      &:hover {
        color: rgb(55, 55, 55);
      }
    }
  }
  .menu-split {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    height: 60%;
    padding-bottom: 2rem;
  }
  .social {
    .link {
      padding: 0 1.5rem;
      color: rgb(82, 63, 63);
      &:hover {
        color: rgb(55, 55, 55);
      }
    }

  }
</style>