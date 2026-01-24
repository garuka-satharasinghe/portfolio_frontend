<template>
  <Head>
    <Title>{{ name }} - Portfolio</Title>
  </Head>
  <div class="scroll-smooth">
    <!--navbar-->
    <div
      class="fixed z-50 w-52 h-12 max-w-lg -translate-x-1/2 backdrop-blur-xl bg-black/1 border border-gray-300 rounded-2xl shadow-2xl bottom-4 left-1/2"
    >
      <div class="grid h-full max-w-lg grid-cols-4 mx-auto">
        <button
          @click="scrollToSection('home')"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 rounded-s-2xl hover:bg-gray-300 group"
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
          <span class="tooltip">Home</span>
        </button>

        <button
          @click="scrollToSection('tech')"
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
          <span class="sr-only">Technologies</span>
          <span class="tooltip">Technologies</span>
        </button>

        <button
          @click="scrollToSection('proj')"
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
          <span class="sr-only">Projects</span>
          <span class="tooltip">Projects</span>
        </button>

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
          <span class="sr-only">Blog</span>
          <span class="tooltip">Blog</span>
        </button>
      </div>
    </div>

    <section id="home">
      <div
        class="absolute inset-0 h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
      ></div>
      <div class="h-screen">
        <div class="relative isolate px-6 lg:px-8">
          <div class="relative isolate px-0 pt-14 lg:px-8">
            <div
              class="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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

            <div class="mx-auto max-w-[620px] py-36 sm:py-32 lg:py-36 content-center">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <div class="col-span-2 sm:col-start-3 mb-0 flex justify-center">
                  <img
                    class="inline-block max-sm:max-h-36 max-sm:max-w-36 max-w-52 max-h-52 rounded-full ring-2 ring-white"
                    src="/public/profile.jpg"
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
                    class="mt-4 max-w-72 sm:max-w-[400px] max-sm:place-self-center border bg-gray-200 border-gray-200 rounded-xl flex items-center gap-x-6"
                  >
                    <a
                      href="https://drive.google.com/file/d/1HohIMUIB4-4kJZdKFpHRINu_iTUI_Sv_/view?"
                      class="px-3.5 py-2.5 text-sm font-semibold text-gray-500 hover:text-orange-600 transition-colors duration-300"
                      target="_blank"
                      >Download Resume</a
                    >

                    <div
                      class="flex items-center gap-x-3 justify-end ml-auto pr-4"
                    >
                      <a
                        href="https://www.linkedin.com/in/garuka-satharasinghe-b559a923b"
                        name="LinkedIn"
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
                        name="GitHub"
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
                        name="Facebook"
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
              class="absolute inset-0 h-full w-full inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
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

    

    <div v-if="pending">Loading Projects...</div>

    <section id="tech">
      <div id="section2" class="bg-white py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center mb-20">
            <div class="scroll-animation">
              <p
                class="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl lg:text-balance"
              >
                <span class="mx-1 relative inline-block stroke-current">
                  Technologies
                  <svg
                    class="text-indigo-500 absolute -bottom-0.5 w-full max-h-1.5"
                    viewBox="0 0 55 5"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                      stroke-width="2"
                    ></path>
                  </svg>
                </span>

                I work with
              </p>
            </div>
          </div>

          <div
            class="grid grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-12 place-items-center md:px-16"
          >
            <!-- React -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 0.6s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="React"
                class="h-16 w-16"
                loading="lazy"
              />
            </div>
            
            <!-- NextJS -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 0s"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                alt="NextJs"
                class="h-16 w-16"
                loading="lazy"
              />
            </div>

            <!-- Nuxt -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 0.8s"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxt/nuxt-original.svg"
                alt="Nuxt"
                class="h-16 w-16"
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
              />
            </div>

            <!-- PostgreSQL -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 1.4s"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
                class="h-16 w-16"
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
              />
            </div>

            <!-- HTML -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 0s"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                alt="HTML5"
                class="h-16 w-16"
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
              />
            </div>

             <!-- SpringBoot -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 2.4s"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                alt="SpringBoot"
                class="h-16 w-16"
                loading="lazy"
              />
            </div>

            <!-- Express.js -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 2.4s"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                alt="Express.js"
                class="h-16 w-16"
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
              />
            </div>

            <!-- Blender -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 3s"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
                alt="Blender"
                class="h-16 w-16"
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
              />
            </div>

            <!-- Arduino -->
            <div
              class="icon-float hover:scale-110 transition-transform"
              style="animation-delay: 3.4s"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg"
                alt="Arduino"
                class="h-16 w-16"
                loading="lazy"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <section
      id="proj"
      class="text-white w-full grid place-content-center pt-20"
    >
      <div class="mx-auto max-w-2xl lg:text-center scroll-animation">
        <h1 class="text-base font-semibold leading-7 text-indigo-600"></h1>
        <p
          class="mt-2 text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl"
        >
          <span class="mx-1 relative inline-block stroke-current">
            Projects
            <svg
              class="text-indigo-500 absolute -bottom-0.5 w-full max-h-1.5"
              viewBox="0 0 55 5"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                stroke-width="2"
              ></path>
            </svg>
          </span>
        </p>
      </div>
    </section>

    <section class="projects-snap-container">
      <div class="flex flex-col sm:flex-row">
        <!-- Mobile: Sticky image top, scrolling text bottom -->
        <div class="sm:hidden w-full">
          <!-- Sticky Mobile Image Section - Top Half -->
          <div class="sticky top-0 h-[50vh] flex items-center justify-center bg-white z-10">
            <transition name="fade" mode="out-in">
              <img
                v-if="currentPhoto"
                :key="currentPhoto"
                :src="currentPhoto"
                alt="Project Image"
                class="max-w-[70%] max-h-[70%] object-contain rounded-lg"
                loading="lazy"
              />
            </transition>
          </div>
          
          <!-- Scrolling Mobile Text Sections -->
          <div>
            <div
              v-for="project in projects"
              :key="'mobile-' + project.name"
              :data-photo="'data:' + project.img.contentType + ';base64,' + project.img.data"
              class="h-[50vh] flex flex-col items-center justify-center p-8 bg-white project-section"
            >
              <p class="text-xl font-semibold text-gray-700 mb-4 text-center">
                {{ project.name }}
              </p>
              <p class="text-sm text-gray-500 mb-6 text-center">{{ project.description }}</p>
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06v5.6h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.58v5.6z"
                  />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <!-- Desktop: Sticky Image with scrolling text -->
        <div class="hidden sm:flex sm:flex-row w-full">
          <!-- Sticky Image -->
          <div
            class="sticky top-0 sm:w-1/2 flex items-center justify-center sm:h-screen bg-white"
          >
            <transition name="fade" mode="out-in">
              <img
                v-if="currentPhoto"
                :key="currentPhoto"
                :src="currentPhoto"
                alt="Teaser Image"
                class="w-3/4 rounded-lg opacity-100 scale-100 transition-opacity duration-500 ease-in-out"
                loading="lazy"
              />
            </transition>
          </div>

          <!-- Text Sections -->
          <div class="sm:w-1/2">
            <div
              v-for="project in projects"
              :key="project.name"
              :data-photo="
                'data:' + project.img.contentType + ';base64,' + project.img.data
              "
              class="sm:h-screen flex flex-col items-center sm:items-start justify-center p-10 sm:p-20 sm:pl-5 project-section"
            >
              <p class="text-xl font-semibold text-gray-700 mb-4">
                {{ project.name }}
              </p>
              <p class="text-sm text-gray-500 mb-6">{{ project.description }}</p>
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06v5.6h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.58v5.6z"
                  />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="blog">
      <div v-if="pending1">Loading Blogs...</div>
      <div class="bg-white pb-24 sm:pb-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 sm:pt-16">
          <div class="justify-items-center lg:mx-0 scroll-animation">
            <h2
              class="mt-2 text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl"
            >
              From the
              <span class="mx-1 relative inline-block stroke-current">
                blog
                <svg
                  class="text-indigo-500 absolute -bottom-0.5 w-full max-h-1.5"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    stroke-width="2"
                  ></path>
                </svg>
              </span>
            </h2>
          </div>
          <div
            class="justify-items-center mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 border-gray-200 lg:max-w-none md:grid-cols-2 lg:grid-cols-3"
          >
            <article
              class="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg"
              v-for="blog in blogs"
              :key="blog._id"
            >
              <img
                v-if="blog.img && blog.img.data"
                alt="Blog Image"
                :src="'data:' + blog.img.contentType + ';base64,' + blog.img.data"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div
                v-else
                class="absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-500 to-purple-600"
              ></div>

              <div
                class="relative bg-gradient-to-b from-[#2c1f4225] via-[#1a1a1a9d] to-[#000000fb] pt-32 sm:pt-48 lg:pt-64"
              >
                <div class="p-4 sm:p-6">
                  <a :href="blog.link" target="_blank">
                    <h3 class="mt-0.5 text-lg text-white font-bold">
                      {{ blog.title }}
                    </h3>
                  </a>

                  <p class="mt-1 line-clamp-3 text-sm/relaxed text-white/95">
                    {{ blog.content }}
                  </p>
                  <a
                    :href="blog.link"
                    target="_blank"
                    class="group mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gray-300"
                  >
                    Read More

                    <span
                      aria-hidden="true"
                      class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <footer
      class="text-gray-700 py-10 px-6 md:px-16 lg:px-32 relative overflow-hidden h-[26rem]"
    >
      <div class="absolute inset-0">
        <div
          class="w-full h-full bg-[url('/path-to-your-texture.png')] opacity-40"
        ></div>
      </div>

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

      <div
        class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-16 lg:gap-24"
      >
        <div class="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/garuka-satharasinghe-b559a923b"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="h-7 text-gray-400 hover:text-blue-800 transition-colors duration-300"
            >
              <path
                fill="currentColor"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>
          </a>

          <a href="https://github.com/garuka-satharasinghe" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              class="h-7 text-gray-400 hover:text-black transition-colors duration-300"
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
              class="h-7 text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <path
                fill="currentColor"
                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
              />
            </svg>
          </a>
        </div>

        <div>
          <p class="text-sm">Contact me</p>
          <a
            href="mailto:methman2002@gmail.com"
            class="text-lg font-semibold underline"
            >methman2002@gmail.com</a
          >
        </div>
      </div>
      <div class="relative z-10 mt-8 border-t border-black/20 pt-4">
        <p class="text-xs">&copy; 2026 {{ name }}. All rights reserved.</p>
      </div>
      <h1
        class="absolute bottom-0 left-0 right-0 text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold text-black/10 leading-[3rem] sm:leading-[4rem] md:leading-[7rem] lg:leading-[8rem] tracking-tight"
      >
        {{ name }}
      </h1>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentPhoto = ref(null);

const handleScroll = () => {
  const sectionElements = document.querySelectorAll("[data-photo]");
  sectionElements.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      const photo = section.getAttribute("data-photo");
      if (currentPhoto.value !== photo) {
        currentPhoto.value = photo;
      }
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation-active");
      } else {
        entry.target.classList.remove("scroll-animation-active");
      }
    });
  });

  const elements = document.querySelectorAll(".scroll-animation");
  elements.forEach((el) => observer.observe(el));
});

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const name = "Garuka Satharasinghe";
const {
  data: projects,
  pending,
  error,
} = useFetch("https://portfolio-backend-pi-plum.vercel.app/projects");
const {
  data: blogs,
  pending1,
  error1,
} = useFetch("https://portfolio-backend-pi-plum.vercel.app/blogs");

useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.scroll-animation {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-animation-active {
  opacity: 1;
  transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
  scroll-snap-type: y proximity;
}

.projects-snap-container {
  scroll-snap-type: y mandatory;
}

.project-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.tooltip {
  visibility: hidden;
  position: absolute;
  z-index: 500;
  bottom: 125%; /* Position the tooltip above the button */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  padding: 8px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #494c4e;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

.group:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

button {
  position: relative;
}
</style>
