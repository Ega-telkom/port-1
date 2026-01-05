<template>

    <div class="border-b border-gray48">
        <div class="max-w-6xl mx-auto border-x border-gray48">
            <img fetchpriority="high" class="w-full object-cover object-top h-54 lg:h-96" src="/images/project_current.webp"
                alt="Banner">
        </div>
    </div>

    <body class="max-w-6xl mx-auto text-neutral-100 border-x border-gray48">

        <!-- content -->
        <main class="pt-2 bg-black">
    
            <div class="flex gap-2 border-b border-dashed border-gray48">
                <h1 class="text-4xl xl:text-7xl"><a name="port-1" class="hover:underline focus:underline" href="#port-1"># port-1</a></h1>
                <img class="h-6 xl:h-10" src="/images/icon.webp" alt="Banner">
            </div>
            <div class="pb-12 pt-4 xl:pt-8">
                <p>
                    Utilizes Node.js to build this simple static site, by making my own cli scripts which calls out tailwindcss and posthtml to build and watch my site. I'm making this website as light as possible in terms of performance, maybe a bit bloated due to asciinema-player but hey a little overhead won't do much, and responsive enough to make it readable. In terms of accessibility in my opinion it needs some improvements. Compatibility friendly in mind, <i>should</i> support (but not limited to) Chromium, Gecko (Firefox), webkit-based engines.
                </p>
                
                <div class="pt-4 xl:pt-5 flex gap-2">
                    <a href="https://port-1.greneboy.com" target="_blank" rel="noopener noreferrer"
                        class="underline">Site</a>
                    <a href="https://github.com/Ega-telkom/port-1" target="_blank" rel="noopener noreferrer"
                        class="underline">Source Code</a>
                </div>
            </div>
    
            <!-- Phostel -->
            <div class="flex gap-2 border-b border-dashed border-gray48">
                <h2 class="text-3xl xl:text-4xl"><a name="phostel" class="hover:underline focus:underline" href="#phostel">## Phostel</a></h2>
                <img class="h-6" src="/images/project_phostel_icon.webp" alt="Banner">
            </div>
            <div class="pb-12 xl:pb-20 pt-4 xl:pt-5">
                <div class="bg-black pb-3 xl:pb-8">
                    <img class="md:h-96 w-full object-top object-cover" src="/images/project_phostel.webp"
                        alt="Banner">
                </div>
                <p>
                    This one is for my grouped midterm, aswell as my proposal for my final assesment. This one is my first non-static website that I want to make. Inspired by Flickr, Unsplash, Pinterest, any other image repository out there on the internet. As I work for the frontends, and my other friends will do the backends, and the marketings.
                </p>
                <div class="pt-4 xl:pt-5 flex gap-2">
                    <a href="https://www.figma.com/design/06Vl3b0rbye1c2PL64vWi5/Untitled?node-id=0-1&t=PuBFvAl4ekkQS1TB-1"
                        target="_blank" rel="noopener noreferrer" class="underline">Figma</a>
                    <a href="https://drive.google.com/file/d/1J54KEJ6_oapi6UxT0Wp4KPlgqM8_4f-6/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer" class="underline">draw.io</a>
                </div>
            </div>
            
            <!-- Delira -->
            <div class="flex gap-2 border-b border-dashed border-gray48">
                <h2 class="text-3xl xl:text-4xl"><a name="phostel" class="hover:underline focus:underline" href="#phostel">## Delira</a></h2>
                <img class="h-6" src="/images/project_delira_icon.webp" alt="Banner">
            </div>
            <div class="pb-12 xl:pb-20 pt-4 xl:pt-5">
                <div class="bg-black pb-3 xl:pb-8">
                    <img class="md:h-96 w-full object-top object-cover" src="/images/project_delira.webp"
                        alt="Banner">
                </div>
                <p>
                    Delira, which is an abbreviation from the initials of our names in our group. It's a collaborative project that unites DPK-A, DPK-D, and DPK-E simultaneously. We're inspired by mamikos. A "kos" renting in Indonesia. 
                </p>
            </div>
            
            <!-- Form -->
            <div class="flex gap-2 border-b border-dashed border-gray48">
                <h2 class="text-3xl xl:text-4xl"><a name="phostel" class="hover:underline focus:underline" href="#phostel">## Form</a></h2>
            </div>
            <div class="pb-12 xl:pb-20 pt-4 xl:pt-5">
                <div class="bg-black pb-3 xl:pb-8">
                    <img class="md:h-96 w-full object-top object-cover" src="/images/project_form.webp"
                        alt="Banner">
                </div>
                <p>
                    This is my first HTML and CSS only static site. It's a simple and non-functional form site. This was made because I was introduced with simple HTML5 elements, and how stylesheets works, even though I already knew a little bit. I put a satire jokes on that site just so nobody reads it. 
                </p>
            </div>
    
        </main>
    
        <!-- footer -->
        <include src="components/footer.html"></include>
    
    </body>
</template>