export const docs = () => {}


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


// 57th shu yerda yakunlandi
// 수고 하셨습니다!

// =============================================================

// 2024-07-05
// 58th Lesson
// MUI and MUI integration

// Darsimiz rejasi:
// 1) Material UI CSS frameworkining tanlovi
// 2) Material UI'ni loyihamizga standart integratsiyasini amalga oshiramiz
// 3) Material UI'ni customized integratsiyasini amalga oshiramiz
// 4) Loyihamizga container standartlarini joriy etamiz

// ------------------------------------------------------------------

// MUI => ReactJS'ning open-source component library'si hisoblanadi.
// MUI Google Material Designga asoslangan yuqori sifatlik react componentlarining jamlanmasi hamdir

// Nega MUI'ni tanladik?
// 1) ReactJS'ning birinchi darajali compoenent library'si hisoblanadi
// 2) MUI'da juda ham ko'p komponentlar oldindan taxlab berilgan
// 3) MUI'ni FaceBook style ham deyiladi, sababi, FaceBook'ni qurishda MUI'dan faol foydalanilgan
// 4) MUI bizga juda ham ko'p imkoniyat yaratib beradi


// -------------------------------------------------------
// Standart Intallation:
// MUI'ni ikki xil installation metodi mavjud:
// 1) Default installation => emotion installation
// 2) Styled component installation => styled component installation

// MUI'ni install qilishdan oldin, react & react-dom external package'lari o'rnatilgan bo'lishi shart!

// MUI'ni integratsiya qilayotgangan vaqtida example-projects'dan loyihamizga tegishlik MUI'ni tanlab o'rnatib olamiz
// Masalan, biz burak-react loyihamizni react-redux-typescript sifatida o'rnatib olganligimiz uchun, MUI'ning Create React App bo'limini tanlaymiz



// MUI'ni install qilish uchun quyidagicha commanda beramiz:
// npm install @mui/material @emotion/react @emotion/styled


// 58th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================


// 2024-07-06
// 59th Lesson
// Create Client Routing System via React Router DOM

// Darsimiz rejasi:
// 1) React Router DOM orqalik routing tizimini hosil qilamiz
// 2) Frontendimizning Screen Componentini hosil etamiz


// ---------------------------------------------------
// Biz Client Routing tizimini react-router-dom package'i orqalik hosil qilamiz
// react-router-dom package'ini quyidagicha kommanda berish bilan o'rnatamiz:
// npm i react-router-dom

// reactJS bu library, uning o'zini routing tizimi mavjud emas.
// Unda routing tizimini xosil qilmoqchi bo'lsak, external package sifatida react-router-dom'ni o'rnatib olishimiz kerak bo'ladi

// -----------------------------------------------
// Har doim bizning o'zak route tizimimiz, route'ning oxirida bo'lishi kerak
// route o'zak tizimi => path={"/"}


// <Switch>
// 	<Route path={"/about"}>
// 		<About />
// 	</Route>
// 	<Route path={"/users"}>
// 		<Users />
// 	</Route>
// 	<Route path={"/"}>
// 		<Home />
// 	</Route>
// </Switch>;

// -------------------------------------------
// Biz componentlarimizni ikki hil usul bilan belgilashimiz mumkin:
// 1) Folder Based
// 2) File Based


// Componentlarni Folder & File Based qilib hosil qilishimiz mumkin
// Ya'ni ikkala usulda hosil qilingan componentlar bir xil vazifani bajarib bir xil ishlaydi

// Savol? => Unda nega componentlarni Folder Based qilib hosil qilyapmiz?
// Javob: => Sababi bizda, screen ya'ni asosiy componentimizdan tashqari bizda sectional ham mavjud bo'ladi.
// Sectional component aynan screen componentimizning bir yaxlit bo'lagi hisoblanadi.
// Undan ham tashqari bizda yana bir component mavjud, u componentlarimiz juda ham kichik component va takroriy ishlatiladigan
// component hisoblanadi (reusable component).

// Demak bizda 3 xil componentlar mavjud ekan:
// 1) Folder Based Components
// 2) File Based Components
// 3) Common Components


// ----------------------------------------
// Common => 'component' folderi tarkibida doim reusable kichik componentlarni ishlatamiz
// Screen => 'screen' folderi tarkibida doim yirik page componetlarimizni ishlatamiz. Va page'ga dahldor bo'lgan sectional component'larimizni aynan 'secree'ni folderi tarkibida ishlatamiz
// Sectional => 'secreen' folderi tarkida File Based qilib hosil qilingan componentlar sectional componentlar deyiladi



// 59th shu yerda yakunlandi
// 수고 하셨습니다!


// =================================================================

// 2024-07-08
// 60th Lesson
// Develop Headers & Navbars
// Darsimiz rejasi:
// 1) Header & Footer'larni ahamiyati
// 2) Figma loyihasiga qarab publishing bo'yicha rejalarni amalga oshiramiz
// 3) Header va navbarni publishingini amalga oshiramiz

// ---------------------------------------------------

// reusable (common) components => ma'lum bir screen'ga dahldor bo'lgan component'lar hisoblanmaydi,
// aksincha, loyihamizning istalgan yerida keng ko'lamda chaqiriladigan component'lar hisoblanadi.


// Loyihamizda ikki turdagi header componentlar mavjud:
// 1) Birinchi header'ni biz home page'da ishlatsak
// 2) Ikkinchi header'ni biz boshqa screen page'arda ishlatamiz

// ---------------------------------------------------

// NavLink => Biz loyihamizda asosan Link emas NavLink'dan foydalanamiz. Va buning imkoniyatlari katta

// 60th shu yerda yakunlandi
// 수고 하셨습니다!


// =================================================================

// 2024-07-08
// 61th Lesson
// Footer Develop qilamiz

// Darsimiz rejasi:
// 1) Headerlarni develop jarayonlarini yakunlaymiz
// 2) Footerlarni birga develop qilamiz


// ---------------------------------------------------

// 61th shu yerda yakunlandi
// 수고 하셨습니다!



// =================================================================

// 2024-07-11
// 62th Lesson
// Developing the main page

// Darsimiz rejasi:
// 1) HomePage Screen Componentiga tegishli bo'lgan Sectional Componentlarni hosil qilamiz
// 2) Statistics Sectional Componentini develop qilamiz
// 3) Mashxur taomlar ya'i PopulatDishes Sectional Componentini develop qilamiz

// ---------------------------------------------------

// 62th shu yerda yakunlandi
// 수고 하셨습니다!


// =================================================================

// 2024-07-11
// 63th Lesson
//

// Darsimiz rejasi:
// 1) Target Play haqida gaplashamiz
// 2) Bosh sahifamizning NewDishes Screen Componentini hosil qilamiz
// 3) Advertisement Sectional Componentini hosil qilamiz
// 4) ActiveUsers Sectional Componentini hosil qilamiz
// 5) HomePage Events Sectional Componentini hosil qilamiz

// ---------------------------------------------------

// Target Play => Target Play o'zi nima?


// 63th shu yerda yakunlandi
// 수고 하셨습니다!


// =================================================================

// 2024-07-13
// 64th Lesson
//

// Darsimiz rejasi:
// Products Page sahifasini publish qilamiz
// ---------------------------------------------------

// useRouteMatch() => Ayni page endpoint'ini ola olamiz

// 64th shu yerda yakunlandi
// 수고 하셨습니다!