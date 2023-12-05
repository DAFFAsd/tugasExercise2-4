import React from 'react';

function AboutMe() {
  return (
<section id="about" class="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Hey 👋
                    <br class="block sm:hidden" /> My name is Daffa Sayra Firdaus
                </h2>
                <p class="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8">
                    Saya adalah seorang mahasiswa Teknik Komputer UI yang sangat tertarik dengan bidang teknologi,
                    terkhususnya komputer baik itu software maupun hardware.
                </p>

                <p class="mt-4 text-xl text-white md:mt-8">
                    <span class="relative inline-block">
                    <span class="relative"> Have a question? </span>
                    </span>
                    <br class="block sm:hidden" /> Ask me on <a href="https://www.instagram.com/sgt.jeffy/" title=""
                        class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Instagram</a>
                </p>
            </div>

            <div class="relative">
                <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="" alt="" />

                <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://i.ibb.co/b6s6FD5/IMG-9141.png" alt="" />
            </div>

        </div>
    </div>
</section>
  );
}

export default AboutMe;
