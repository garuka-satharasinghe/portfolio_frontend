<template>
  <div class="scroll-smooth">
    <div
      class="fixed z-50 w-52 h-12 max-w-lg -translate-x-1/2 backdrop-blur-xl bg-black/1 border border-gray-300 rounded-2xl shadow-2xl bottom-4 left-1/2"
    >
      <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button
          @click="scrollToSection('home')"
          data-tooltip-target="tooltip1"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 rounded-s-2xl hover:bg-gray-300"
        >
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                stroke="#494c4e"
                stroke-width="2"
              ></path>
              <path
                d="M15 18H9"
                stroke="#494c4e"
                stroke-width="2.5"
                stroke-linecap="round"
              ></path>
            </g>
          </svg>
          <span class="sr-only">Home</span>
        </button>
        <div
          class="absolute bottom-full invisible left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded-md bg-white py-2 px-4 text-xs text-gray-800 font-medium transition-opacity duration-300 border border-gray-300 shadow-[0px_12px_30px_-4px_rgba(16,24,40,0.08);]"
          role="tooltip"
          id="tooltip1"
        >
          <span
            class="absolute -bottom-1.5 left-1/2 -z-10 h-3 w-3 border-b border-r border-gray-300 -translate-x-1/2 rotate-45 bg-white"
          ></span>
          This is a tooltip
        </div>

        <button
          @click="scrollToSection('tech')"
          data-tooltip-target="tooltip-home"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-300 group"
        >
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#494c4e"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                ></path>
              </g>
            </g>
          </svg>
          <span class="sr-only">Wallet</span>
        </button>
        <div
          id="tooltip-wallet"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Wallet
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-settings"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-300 group"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z"
                stroke="#494c4e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M19 11V16L12 19.5L5 16V11"
                stroke="#494c4e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M22 14V18"
                stroke="#494c4e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
          <span class="sr-only">Settings</span>
        </button>
        <div
          id="tooltip-settings"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Settings
        </div>
        <button
          @click="scrollToSection('proj')"
          data-tooltip-target="tooltip-settings"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-300 group"
        >
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M8 6.5H16M7.70502 8.70919L12.2826 15.3034M4.6 9H6.4C6.96005 9 7.24008 9 7.45399 8.89101C7.64215 8.79513 7.79513 8.64215 7.89101 8.45399C8 8.24008 8 7.96005 8 7.4V5.6C8 5.03995 8 4.75992 7.89101 4.54601C7.79513 4.35785 7.64215 4.20487 7.45399 4.10899C7.24008 4 6.96005 4 6.4 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V7.4C3 7.96005 3 8.24008 3.10899 8.45399C3.20487 8.64215 3.35785 8.79513 3.54601 8.89101C3.75992 9 4.03995 9 4.6 9ZM13.6 20H15.4C15.9601 20 16.2401 20 16.454 19.891C16.6422 19.7951 16.7951 19.6422 16.891 19.454C17 19.2401 17 18.9601 17 18.4V16.6C17 16.0399 17 15.7599 16.891 15.546C16.7951 15.3578 16.6422 15.2049 16.454 15.109C16.2401 15 15.9601 15 15.4 15H13.6C13.0399 15 12.7599 15 12.546 15.109C12.3578 15.2049 12.2049 15.3578 12.109 15.546C12 15.7599 12 16.0399 12 16.6V18.4C12 18.9601 12 19.2401 12.109 19.454C12.2049 19.6422 12.3578 19.7951 12.546 19.891C12.7599 20 13.0399 20 13.6 20ZM17.6 9H19.4C19.9601 9 20.2401 9 20.454 8.89101C20.6422 8.79513 20.7951 8.64215 20.891 8.45399C21 8.24008 21 7.96005 21 7.4V5.6C21 5.03995 21 4.75992 20.891 4.54601C20.7951 4.35785 20.6422 4.20487 20.454 4.10899C20.2401 4 19.9601 4 19.4 4H17.6C17.0399 4 16.7599 4 16.546 4.10899C16.3578 4.20487 16.2049 4.35785 16.109 4.54601C16 4.75992 16 5.03995 16 5.6V7.4C16 7.96005 16 8.24008 16.109 8.45399C16.2049 8.64215 16.3578 8.79513 16.546 8.89101C16.7599 9 17.0399 9 17.6 9Z"
                stroke="#494c4e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
          <span class="sr-only">Settings</span>
        </button>
        <div
          id="tooltip-settings"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Settings
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          @click="scrollToSection('blog')"
          data-tooltip-target="tooltip-profile"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 rounded-e-2xl hover:bg-gray-300 group"
        >
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            mirror-in-rtl="true"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#494c4e"
                d="M8 6H5c-.553 0-1-.448-1-1s.447-1 1-1h3c.553 0 1 .448 1 1s-.447 1-1 1zM13 10H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zM13 14H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z"
              ></path>
              <path
                fill="#494c4e"
                d="M18 2v8c0 .55-.45 1-1 1s-1-.45-1-1V2.5c0-.28-.22-.5-.5-.5h-13c-.28 0-.5.22-.5.5v19c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V21c0-.55.45-1 1-1s1 .45 1 1v1c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h14c1.1 0 2 .9 2 2z"
              ></path>
              <path
                fill="#494c4e"
                d="M23.87 11.882c.31.54.045 1.273-.595 1.643l-9.65 5.57c-.084.05-.176.086-.265.11l-2.656.66c-.37.092-.72-.035-.88-.314-.162-.278-.09-.65.17-.913l1.907-1.958c.063-.072.137-.123.214-.167.004-.01.012-.015.012-.015l9.65-5.57c.64-.37 1.408-.234 1.72.305l.374.65z"
              ></path>
            </g>
          </svg>
        </button>
        <div
          id="tooltip-profile"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
        >
          Profile
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>

    <!-- <div
    id="lal"
    class="mx-auto bg-slate-50 border border-t-0 border-slate-300 h-10 w-64 rounded-b-lg"
  ></div> -->
    <section id="home">
      <div
        class="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      >
        <div class="relative isolate px-6 lg:px-8">
          <div class="relative isolate px-0 pt-14 lg:px-8">
            <div
              class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style="
                  clip-path: polygon(
                    74.1% 44.1%,
                    100% 61.6%,
                    97.5% 26.9%,
                    85.5% 0.1%,
                    80.7% 2%,
                    72.5% 32.5%,
                    60.2% 62.4%,
                    52.4% 68.1%,
                    47.5% 58.3%,
                    45.2% 34.5%,
                    27.5% 76.7%,
                    0.1% 64.9%,
                    17.9% 100%,
                    27.6% 76.8%,
                    76.1% 97.7%,
                    74.1% 44.1%
                  );
                "
              />
            </div>

            <div
              class="mx-auto max-w-2xl py-36 sm:py-32 lg:py-36 relative z-10"
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <div class="col-span-2 sm:col-start-3 mb-0 flex justify-center">
                  <img
                    class="inline-block max-sm:max-h-36 max-sm:max-w-36 max-w-52 max-h-52 rounded-full ring-2 ring-white"
                    src="https://media.licdn.com/dms/image/v2/D5603AQGg2rtlW8qnDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688487717610?e=1733356800&v=beta&t=rIGxQCIy46ll9LS6PqySs67xEoD5uw-suZe4HIGjqCk"
                    alt=""
                  />
                </div>

                <div
                  class="col-span-1 sm:col-span-2 sm:col-start-1 sm:row-start-1"
                >
                  <h1
                    class="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl max-sm:text-left max-sm:leading-9 max-sm:justify-self-center"
                  >
                    <div class="flex items-end gap-x-1 sm:gap-x-3">
                      {{ name.split(" ")[0] }}
                      <div
                        class="border-0 border-gray-400 h-8 w-28 sm:h-14 sm:w-44 rounded-full"
                      >
                        <svg
                          class="align-item-center content-center h-8 w-28 sm:h-14 sm:w-44"
                          viewBox="0 0 205 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="strokeGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                style="stop-color: #3b82f6; stop-opacity: 1"
                              />
                              <!-- Blue -->
                              <stop
                                offset="50%"
                                style="stop-color: #8b5cf6; stop-opacity: 1"
                              />
                              <!-- Purple -->
                              <stop
                                offset="100%"
                                style="stop-color: #ec4899; stop-opacity: 1"
                              />
                              <!-- Pink -->
                            </linearGradient>
                          </defs>
                          <path
                            d="M1 34.1347C11.1842 36.0384 16.6219 37.7687 24.4467 31.382C27.9327 28.5367 31.0806 25.547 32.9281 21.3668C34.9534 16.7845 36.5016 4.30185 28.4111 10.4729C23.7482 14.0296 22.0384 19.2975 22.3564 25.0187C23.1447 39.1999 41.3992 38.9003 51.8372 36.8427C61.8179 34.8752 72.1668 29.0887 76.2245 19.3281C78.1431 14.7127 77.8465 6.66995 70.6262 10.4592C65.1536 13.3312 63.6562 20.9809 63.9982 26.5151C64.5613 35.625 77.9388 37.19 84.8535 36.8461C95.7995 36.3018 106.068 25.9496 111.554 17.1623C113.598 13.888 114.98 4.61775 108.743 9.69723C96.6664 19.5325 106.978 36.5207 121.144 35.1266C132.503 34.0088 142.282 21.3057 148.566 12.8961C149.797 11.2476 154.068 -2.96101 148.229 2.07428C143.478 6.17149 141.239 14.8679 143.623 20.6391C154.058 45.9043 188.217 17.5132 203.525 12.3881"
                            stroke="url(#strokeGradient)"
                            stroke-width="4"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>{{ name.split(" ")[1] }}</div>
                  </h1>
                  <p
                    class="mt-2 text-xl max-sm:text-sm font-semibold text-gray-400 max-sm:text-center"
                  >
                    Undergraduate at University of Moratuwa
                  </p>
                  <div
                    class="mt-4 max-w-72 sm:max-w-full max-sm:place-self-center border bg-gray-200 border-gray-200 rounded-xl flex items-center gap-x-6"
                  >
                    <a
                      href="#"
                      class="px-3.5 py-2.5 text-sm font-semibold text-gray-500 hover:text-orange-600 transition-colors duration-300"
                      >Download Resume</a
                    >

                    <div
                      class="flex items-center gap-x-3 justify-end ml-auto pr-4"
                    >
                      <a
                        href="https://www.linkedin.com/in/garuka-satharasinghe-b559a923b"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="h-6 text-gray-600 hover:text-blue-800 transition-colors duration-300"
                        >
                          <path
                            fill="currentColor"
                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          />
                        </svg>
                      </a>

                      <a
                        href="https://github.com/garuka-satharasinghe"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                          class="h-6 text-gray-600 hover:text-black transition-colors duration-300"
                        >
                          <path
                            fill="currentColor"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          />
                        </svg>
                      </a>

                      <a
                        href="https://web.facebook.com/garuka.satharasinghe.2002"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="h-6 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                          <path
                            fill="currentColor"
                            d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style="
                  clip-path: polygon(
                    74.1% 44.1%,
                    100% 61.6%,
                    97.5% 26.9%,
                    85.5% 0.1%,
                    80.7% 2%,
                    72.5% 32.5%,
                    60.2% 62.4%,
                    52.4% 68.1%,
                    47.5% 58.3%,
                    45.2% 34.5%,
                    27.5% 76.7%,
                    0.1% 64.9%,
                    17.9% 100%,
                    27.6% 76.8%,
                    76.1% 97.7%,
                    74.1% 44.1%
                  );
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr
      class="my-12 sm:mx-40 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-25 dark:opacity-100"
    />

    <div v-if="pending">Loading Projects...</div>

    <section id="tech">
      <div id="section2" class="bg-white py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center mb-20">
            <p
              class="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-balance"
            >
              Technologies
            </p>
            <h2 class="text-base/7 font-semibold text-indigo-600">
              I Work With
            </h2>
          </div>

          <div
            class="grid grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-12 place-items-center md:px-16"
          >
            <!-- HTML -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 0s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                alt="HTML5"
                class="h-16 w-16"
              />
            </div>

            <!-- CSS -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 0.2s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                alt="CSS3"
                class="h-16 w-16"
              />
            </div>

            <!-- JavaScript -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 0.4s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                class="h-16 w-16"
              />
            </div>

            <!-- React -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 0.6s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="React"
                class="h-16 w-16"
              />
            </div>

            <!-- Nuxt -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 0.8s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nuxtjs/nuxtjs-original.svg"
                alt="Nuxt"
                class="h-16 w-16"
              />
            </div>

            <!-- Bootstrap -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 1s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap"
                class="h-16 w-16"
              />
            </div>

            <!-- Tailwind -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 1.2s"
            >
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="Tailwind"
                class="h-16 w-16"
              />
            </div>

            <!-- PHP -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 1.4s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                alt="PHP"
                class="h-16 w-16"
              />
            </div>

            <!-- MySQL -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 1.6s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                alt="MySQL"
                class="h-16 w-16"
              />
            </div>

            <!-- MongoDB -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 1.8s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                class="h-16 w-16"
              />
            </div>

            <!-- Vue.js -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 2s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
                alt="Vue.js"
                class="h-16 w-16"
              />
            </div>

            <!-- TypeScript -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 2.2s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                class="h-16 w-16"
              />
            </div>

            <!-- Node.js -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 2.4s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                class="h-16 w-16"
              />
            </div>

            <!-- C -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 2.6s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="C"
                class="h-16 w-16"
              />
            </div>

            <!-- Python -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 2.8s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="Python"
                class="h-16 w-16"
              />
            </div>

            <!-- Photoshop -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 3s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg"
                alt="Photoshop"
                class="h-16 w-16"
              />
            </div>

            <!-- Figma -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 3.2s"
            >
              <img
                src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                alt="Figma"
                class="h-16 w-16"
              />
            </div>

            <!-- Git -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 3.4s"
            >
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="Git"
                class="h-16 w-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="proj">
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-600"></h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Projects
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl
              class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
            >
              <div
                v-for="project in projects"
                :key="project.name"
                class="relative pl-16"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  {{ project.name }}
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  {{ project.description }}
                </dd>
              </div>
            </dl>
          </div>

          <!--
      <div
        class="grid grid-cols-2 mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
      >
        <div
          class="max-w-sm m-2 bg-white border border-gray-200 rounded-lg"
          v-for="project in projects"
          :key="project.name"
        >
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://media.licdn.com/dms/image/v2/D562DAQGik8B9N-woNg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719600827257?e=1728331200&v=beta&t=eeeaZb4zBHdmxYWrxlj80nwfSGjYB3SyoCaXREZ_2pQ"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {{ project.name }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ project.description }}
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
            >
              LinkedIn
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div> -->
        </div>
      </div>
    </section>

    <!--
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div class="relative isolate px-6 pt-14 lg:px-8">
          <form @submit.prevent="createProject">
            <div class="space-y-12">
              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                  Create New Project
                </h2>
                <div
                  class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                >
                  <div class="sm:col-span-3">
                    <label
                      for="name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Project Name</label
                    >
                    <div class="mt-2">
                      <input
                        type="text"
                        v-model="newProject.name"
                        id="name"
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="col-span-full">
                    <label
                      for="description"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Project Description</label
                    >
                    <div class="mt-2">
                      <textarea
                        name="description"
                        v-model="newProject.description"
                        id="description"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p class="mt-3 text-sm leading-6 text-gray-600">
                      Write a few sentences about project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Project
              </button>
            </div>
          </form>
        </div>

        <form
          class="relative isolate px-6 pt-14 lg:px-8"
          @submit.prevent="updateProject"
        >
          <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
              <h2 class="text-base font-semibold leading-7 text-gray-900">
                Update Project
              </h2>
              <div
                class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
                <div class="sm:col-span-3">
                  <label
                    for="id"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Project Name</label
                  >
                  <div class="mt-2">
                    <select
                      v-model="update.id"
                      id="id"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option
                        v-for="project in projects"
                        :key="project._id"
                        :value="project._id"
                      >
                        {{ project.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="sm:col-span-3">
                  <label
                    for="name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Updated Project Name</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      v-model="update.name"
                      id="name"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="col-span-full">
                  <label
                    for="description"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Updated Project Description</label
                  >
                  <div class="mt-2">
                    <textarea
                      name="description"
                      v-model="update.description"
                      id="description"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p class="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update Project
            </button>
          </div>
        </form>

        <form
          class="relative isolate px-6 pt-14 lg:px-8"
          @submit.prevent="deleteProject"
        >
          <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
              <h2 class="text-base font-semibold leading-7 text-gray-900">
                Delete Project
              </h2>
              <div
                class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
                <div class="sm:col-span-3">
                  <label
                    for="id"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Project Name</label
                  >
                  <div class="mt-2">
                    <select
                      v-model="deleteProjectId"
                      id="id"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option
                        v-for="project in projects"
                        :key="project._id"
                        :value="project._id"
                      >
                        {{ project.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Delete Project
            </button>
          </div>
        </form>
      </div>
    </div>
  </div> -->

    <section id="blog">
      <div v-if="pending1">Loading Blogs...</div>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2
              class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              From the blog
            </h2>
          </div>
          <div
            class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <article
              v-for="blog in blogs"
              :key="blog.name"
              class="flex max-w-xl flex-col items-start justify-between"
            >
              <div class="group relative">
                <h3
                  class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                >
                  <span class="absolute inset-0" />
                  {{ blog.title }}
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {{ blog.content }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <!--
    <div v-if="pending">Loading Projects...</div>
    <div>
      <h2>Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.name">
          <p>{{ project._id }}</p>
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
        </li>
      </ul>
    </div>
    
  
    <br />
    <div>
      <h1>Create New Project</h1>
      <form @submit.prevent="createProject">
        
        <div>
          <label for="name">Project Name : </label>
          <input type="text" v-model="newProject.name" id="name" required />
        </div>
        <div>
          <label for="description">Project Description : </label>
          <textarea
            name="description"
            v-model="newProject.description"
            id="description"
          ></textarea>
        </div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  
    <br />
    <div>
      <h2>Update Project</h2>
      <form @submit.prevent="updateProject">
        <div>
          <label for="id">Project ID : </label>
  
          <select v-model="update.id" id="id" required>
            <option
              v-for="project in projects"
              :key="project._id"
              :value="project._id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
        <div>
          <label for="name">Project Name : </label>
          <input type="text" v-model="update.name" id="name" required />
        </div>
        <div>
          <label for="description">Project Description : </label>
          <textarea
            name="description"
            v-model="update.description"
            id="description"
          ></textarea>
        </div>
        <button type="submit">Update Project</button>
      </form>
    </div>
  
    <br />
    <div>
      <h1>Delete Project</h1>
      <form @submit.prevent="deleteProject">
        
        <div>
          <label for="id">Project ID : </label>
  
          <select v-model="deleteProjectId" id="id" required>
            <option
              v-for="project in projects"
              :key="project._id"
              :value="project._id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
        <button type="submit">Delete Project</button>
      </form>
    </div>
    <br />
  
  
    <div v-if="pending1">Loading Blogs...</div>
    <div>
      <h2>Blogs</h2>
      <ul>
        <li v-for="blog in blogs" :key="blog.name">
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.content }}</p>
        </li>
      </ul>
    </div>
    -->
  </div>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

import { ref } from "vue";

const name = "Garuka Satharasinghe";
const {
  data: projects,
  pending,
  error,
} = useFetch(
  "https://portfoliobackend-production-0d8d.up.railway.app/projects"
);
const {
  data: blogs,
  pending1,
  error1,
} = useFetch("https://portfoliobackend-production-0d8d.up.railway.app/blogs");

const newProject = ref({ name: "", description: "" });

const createProject = async () => {
  console.log(newProject.value);
  try {
    //ensure that newProject.value is a valid object
    const projectData = {
      name: newProject.value.name.trim(),
      description: newProject.value.description.trim(),
    };

    const response = await fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error("Failed to create project");
    }

    // Log the raw response text
    const responseText = await response.text();
    console.log("Raw Response:", responseText);

    // Try parsing the JSON response
    const data = JSON.parse(responseText);

    // push data to frontend
    projects.value.push(data);
  } catch (error) {
    console.error(error);
  }
};

const update = ref({ id: "", name: "", description: "" });

const updateProject = async () => {
  console.log(update.value);
  try {
    //ensure that update.value is a valid object
    const projectData = {
      name: update.value.name.trim(),
      description: update.value.description.trim(),
    };

    const response = await fetch(
      `http://localhost:5000/projects/${update.value.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update project");
    }

    // Log the raw response text
    const responseText = await response.text();
    console.log("Raw Response:", responseText);

    // Try parsing the JSON response
    const data = JSON.parse(responseText);

    // find the project in the projects array and update it
    const index = projects.value.findIndex(
      (project) => project._id === data._id
    );
    projects.value[index] = data;

    // clear the update object
    update.value = { id: "", name: "", description: "" };
  } catch (error) {
    console.error(error);
  }
};

const deleteProjectId = ref("");

const deleteProject = async () => {
  console.log(deleteProjectId.value);
  try {
    const response = await fetch(
      `http://localhost:5000/projects/${deleteProjectId.value}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete project");
    }

    // Log the raw response text
    const responseText = await response.text();
    console.log("Raw Response:", responseText);

    // Try parsing the JSON response
    const data = JSON.parse(responseText);

    // remove the project from the projects array
    const index = projects.value.findIndex(
      (project) => project._id === data._id
    );
    projects.value.splice(index, 1);

    // clear the deleteId object
    deleteProjectId.value = "";
  } catch (error) {
    console.error(error);
  }
};
</script>

<style>
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
.icon-float {
  animation: float 3s ease-in-out infinite;
}

html {
  scroll-behavior: smooth;
}
</style>
