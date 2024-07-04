// 2024-07-04
// 57th Lesson
// Burak react installation

// Darsimiz rejasi:
// 1) React loyihamizni o'rnatamiz
// 2) Virtual dom tushunchasi tahlili
// 3) React Documentationni o'rganamiz
// 4) Loyihamizning package'larini sozlaymiz va loyihamizning standartini joriy etamiz

// ------------------------------------------------------
// Frontendni qurishning ikki xil usuli mavjud:
// 1) BSSR => Backend Server Side Redering
// 2) SPA => (Modern Fronted Development) Singlie Page Application

// Burak loyihamizning restaurant controll qiladigan qismini biz BSSR'dan foydalanib yozgan bo'lsak
// user'lar ishlatadigan qismini SPA'dan foydalanib yozamiz

// -------------------------------------------------

// SPA'da Virtual DOM juda ham tushunchalardan biri hisoblanadi

// react'ni o'zinigina install qilmaymiz, bundan tashqari, redux & typescript'ni ham install qilamiz
// react & redux & typescriptni install qilish commandalari:
// npx create-react-app burak-react --template redux-typescript

// --------------------------------------------

// Biz SPA loyihamizda reactJS library'sidan foydalanamiz. reactJS bu library hisoblanadi. Framework emas.
// Library => Loyihamizni tashkillashtirishda kerak bo'lgan ma'lum bir qismiga oid unsurlarni o'z ichida oladi (ma'lum bir)
// Framework => Loyihamizni tashkillashtirishda barcha keraklik unsurlarni o'zi ichida oladi. (Kengroq tushuncha)

// React bilan ishlaganda biz ko'proq external package'larni o'rnatishimiz kerak bo'ladi, masalan routing tizimi mavjud emas

// Masalan, NextJS bu framework hisoblanadi, va biz routing tizimini external package sifatida o'rnatishimiz shart emas.
// NextJS bizga routing tizimini internal package sifatida azaldan tahlab bergan bo'ladi

// -----------------------------------------------------
// Biz Burak SPA loyihamizni framework emas, reactJS library'sidan foydalanib qurishimizni sababi, aslida
// framework tushunchasini yaxshi tushunib olishda


// Biz shu vaqtgacha commandalarni terminaldan npm commandasi bilan berdik,
// lekin quyidagi SPA loyihamiz uchun yarn commandasidan foydalanamiz. Bu bizga frontend loyihamiz uchun commandlarni berishda juda ham qulay

// install yarn by npm:
// npm i yarn --global

// -----------------------------------------
// react SPA loyihamizni typescript bilan install qilganligimiz uchun, loyihamniz index.tsx'dan boshlanadi
// react ham loyihani index.tsx'dan o'qishni boshlaydi.

// Redux Toolkit => Bu bizga loyihamizda ortiqcha kodlarni yozishdan halos qiladigan library va toolset

// --------------------------------------------
// -------------------------------------------
// Real DOM vs Virtual DOM:

// Real DOM nima va nima vazifani bajaradi?:
// Real DOM web page'izming asosiy strukturasi hisoblanib, backendda kichikkina o'zgarish bo'lsa ham,
// reactJS bizga butun boshlik Real DOM'ni yangilab beradi va bu juda ko'p resurs sarflanishiga olib keladi

// Virtual DOM nima va nima vazifani bajaradi?;
// Virtual DOM bu Real DOM'ning virtual ko'rinishi hisoblanib, bakendda kichkina o'zgarish bo'lsa, reactJS bizga
// o'zgarish bo'lgan joynigina Virtual DOM sifatida yangilab beradi va bu bizga resurslarni tejashga yordam beradi.
// Virtual DOM tayyor mantiqni update qilib bo'lgandan keyin, yangilangan mantiqnigina Real DOM'ga ko'chiradi


// reactJS 3 xil asosiy mantiqlardan iborat:
// 1) Declarative => Har bir state alohida yangilanadi (Virtual DOM)
// 2) Component-Based => Componentlardan iborat, bir marotaba yozib har yerda istaganimizcha ishlatishimiz mumkin
// 3) Learn Once, Write Everywhere => Bir marotaba o'rganib har yerda ishlatishimiz mumkin, masalan, web UI uchun reactJS, mobile application uchun React Native

// ---------------------------------------------------
// ReactJS loyihamizni takomillashtirish uchun install bo'lgandan so'ng, keraksiz fayllarni olib tashlaymiz (customization)

