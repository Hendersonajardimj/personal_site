export default function Nav() {
  return (
  <section class="text-gray-700 font-heading font-medium relative bg-gray-50 bg-opacity-50">
  <nav class="flex justify-between px-6 lg:px-12 py-8">
    <div class="flex w-full items-center">
      <a href="#">
        <img class="h-12" src="uinel-assets/logos/uinel-gray-black.svg" alt="">
      </a>
      <ul class="hidden xl:flex px-4 ml-32">
        <li class="mr-16"><a class="text-gray-400 hover:text-gray-500" href="#">New tools</a></li>
        <li class="mr-16">
          <a class="flex items-center text-gray-400 hover:text-gray-500" href="#">
            <span class="mr-4">Products</span>
            <svg width="8" height="5" viewbox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="currentColor"></path>
            </svg>
          </a>
        </li>
        <li><a class="text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
      </ul>
      <div class="hidden xl:flex items-center ml-auto">
        <a class="text-gray-400 hover:text-gray-500" href="#">
          <svg width="20" height="23" viewbox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M1 18.0121H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M8.87891 22H10.8789" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
        <div class="w-px h-8 bg-gray-200 bg-opacity-50 ml-9 mr-11"></div>
        <a class="flex items-center mr-12" href="#">
          <span>Josh</span>
          <img class="ml-6" src="uinel-assets/elements/navigations/avatar-online.png" alt="">
          <img class="ml-6" src="uinel-assets/elements/navigations/arrow-down-gray.svg" alt="">
        </a>
        <button class="uppercase text-sm font-bold font-body border-2 border-gray-200 border-opacity-50 rounded-full py-3 px-5 tracking-wide hover:border-gray-300">
          <span class="block mt-px">New project</span>
        </button>
      </div>
    </div>
    <button class="navbar-burger self-center xl:hidden focus:outline-none">
      <svg width="25" height="16" viewbox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="25" height="2" fill="currentColor"></rect><rect y="14" width="25" height="2" fill="currentColor"></rect></svg>
    </button>
  </nav>
  <div class="navbar-menu hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
    <nav class="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
      <div class="flex items-center pl-16 mb-8">
        <a class="text-2xl text-gray-800 font-bold" href="#">
          <img class="h-12" src="uinel-assets/logos/uinel-gray-black.svg" alt="">
        </a>
      </div>
      <div class="flex items-center mb-10 px-10">
        <a class="flex items-center ml-1" href="#">
          <img class="ml-6" src="uinel-assets/elements/navigations/avatar-online.png" alt="">
          <img class="ml-6" src="uinel-assets/elements/navigations/arrow-down-gray.svg" alt="">
        </a>
        <a class="text-gray-400 hover:text-gray-500 ml-auto" href="#">
          <svg width="20" height="23" viewbox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M1 18.0121H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M8.87891 22H10.8789" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>
      <div>
        <ul>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl" href="#">New tools</a></li>
          <li class="mb-1 px-10">
            <a class="flex items-center pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl" href="#">
              <span>Products</span>
              <svg class="ml-4" width="8" height="5" viewbox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li class="mb-1 px-10"><a class="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl" href="#">Pricing</a></li>
        </ul>
      </div>
      <div class="mt-auto px-10">
        <button class="py-3 px-5 mt-6 w-full font-body font-bold uppercase tracking-wide text-sm border-2 border-gray-200 hover:border-gray-300 border-opacity-50 rounded-full">
          <span class="block mt-px">New project</span>
        </button>
        <p class="mt-6 mb-4 text-center">
          <span class="text-sm text-darkBlueGray-400">2021 © Uinel. All rights reserved.</span>
        </p>
      </div>
    </nav>
    <button class="navbar-close absolute top-5 p-6 right-5">
      <div class="absolute top-3">
        <span class="absolute w-px h-6 bg-black transform -rotate-45"></span>
        <span class="absolute w-px h-6 bg-black transform rotate-45"></span>
      </div>
    </button>
  </div>
</section>)
};