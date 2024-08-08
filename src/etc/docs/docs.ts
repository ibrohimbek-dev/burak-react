export const docs = () => {};

// 2024-07-04
// 57th Lesson
// Burak react installation

// Darsimiz rejasi:
// 1) React loyihamizni o'rnatamiz
// 2) Virtual dom tushunchasi tahlili
// 3) React Documentationni o'rganamiz
// 4) Loyihamizning package'larini sozlaymiz va loyihamizning standartini joriy etamiz

// ------------------------------------------------------
// Front-endni qurishning ikki xil usuli mavjud:
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
// lekin quyidagi SPA loyihamiz uchun yarn commandasidan foydalanamiz. Bu bizga Front-end loyihamiz uchun commandlarni berishda juda ham qulay

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
// 1) ReactJS'ning birinchi darajali component library'si hisoblanadi
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
// 2) Front-endimizning Screen Componentini hosil etamiz

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
// 		<HomePage />
// 	</Route>
// </Switch>;

// -------------------------------------------
// Biz componentlarimizni ikki hil usul bilan belgilashimiz mumkin:
// 1) Folder Based
// 2) File Based

// Componentlarni Folder & File Based qilib hosil qilishimiz mumkin
// Ya'ni ikkala usulda hosil qilingan componentlar bir xil vazifani bajarib bir xil ishlaydi

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

// =================================================================

// 2024-07-13
// 65th Lesson
// Publish product page

// Darsimiz rejasi:
// 1) ChosenProduct Sectional Component publishingini amalga oshiramiz

// ---------------------------------------------------

// 65th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-15
// 66th Lesson
// Publish Orders Page Screen Component

// Darsimiz rejasi:
// 1) Material UI'ning Tap Panel Componentini o'rganamiz
// 2) OrdersPage Screen Componenti va uning Sectional
// Componentlarini publishingini amalga oshiramiz

// ---------------------------------------------------

// 66th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-15
// 67th Lesson
// UserPage va HelpPage Screen Componentlarini publishing qilamiz

// Darsimiz rejasi:
// 1) UserPage Screen Componentini publish qilamiz
// 2) HelpPage Screen Componentlarini publishing qilamiz

// ---------------------------------------------------

// 67th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-17
// 68th Lesson
// Create Authentication process on users

// Darsimiz rejasi:
// 1) Burak loyihasini Authentication bo'yicha belgilab olingan
// strategiyalarni muhokama etamiz
// 2) Login va Sign up jarayonlarida JWT'ni hosil qilamiz
// 3) Hosil qilayotgan Tokenlarimizni Cookie'larining ichida saqlaymiz
// 4) User memberlarimizning credentiallarini tekshirib test qilamiz

// ---------------------------------------------------

// Authentication jarayonini 3 xil usulda xosil qilishimiz mumkin:
// 1) Sessions (Cookies)
// 2) Tokens (Cookies)
// 3) Tokens (Headers)

// 68th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-28
// 78th Lesson
// useState() va useEffect() hook'larini o'rganamiz

// Darsimiz rejasi:
// 1) Reactning class va Functional Componentlarini o'rganamiz
// 2) Lifecycle methodlarini birga tahlil qilamiz
// 3) useState() hookini o'rganamiz
// 4) useEffect() hookini birga o'rganamiz

// ---------------------------------------------------

// React'da doim ikki componentlar mavjud bo'lgan:
// 1) Class componentlar
// 2) Functional componentlar

// React Burak loyihamizning barcha componentlarini functional component sifatida
// qurib oldik va umuman Class component ishlatmadik. Va endi savol tug'iladi, nega biz
// umuman Class componentidan foydalanmay, functional componentlardan foydalanyapmiz?

// Yuqoridagi savoldan oldin, yana bir savol tug'iladi, aslida Class componenti o'zi nima?
// Class component bu functional componentning biroz kengroq varianti va u functional compnent bilan
// syntax jihatidan ham farq qilib React'ning Componentidan extend oladi.

// Class component deyilishining sababi biz componentni class orqalik hosil qilayotganimizda
// Functional component deyilishining sababi biz componentni function orqalik hosil qilayotganimizda.

// Class componentlar bilan ishlash biroz noqulayliklar keltirib chiqaradi.
// Sababi functional component'ga nisbatan class componentni syntax'lari anchagina murakkab ko'rinishga ega.

// Functional component'lar class componentlarga nisbatan sodda bo'lishiga qaramay, buning ham o'ziga yarasha
// kamchiliklari bor. Ya'ni functional componentlar o'zining state'lariga ega emas.

// Yuqoridagi muammoni oldini olish uchun, biz functional component'lar tarkibida sun'iy hook'lar hosil qilish
// ehtiyoji mavjud edi. Va bu ehtijoyni biz react'ning hook'lari orqalik functional componentlar uchun
// sun'iy hooklarini hosil qilishimiz mumkin ekan.

// Ya'ni functional componentimiz tarkibida, sun'iy state'larni reactning built-in methodi hisoblangan
// useState() hook'i orqalik amalga oshiramiz.

// Reactning 16.8 versiyasiga qadar class componentlar juda keng qamrovda foydalanilgan. 16.8 versiyasidan keyin
// functional componentlar to'liqligicha hook'lar bilan ishlashni boshlagan.

// ---------------------------------------------------------------

// React Life Cycle Methods:
// React loyihamizning 3 xil life cycle methodlari mavjud ular:
// 1) componentDidMount
// 2) componentDidUpdate
// 3) componentWillUnmunt

// Bu Life Cycle'ning methodlarini React'ning fazalari ham deb atashadi.

// Life Cycle componentDidMount => Birinchi render bo'lganda ishga tushadi
// Life Cycle componentWillUnmount => Component disappear bo'lishidan oldin ishga tushadi
// Life Cycle componentDidUpdate => Componentimizdagi biriktirilgan ma'lum bir qiymatni o'zgartirish natijasida bizning virtual DOM'imiz real
// DOM'ni rebuilt qilib oladi

// Life Cycling methodlarini fazalar deyilishiga sabab, bularni ketma - ket o'z vaqtida ishga
// tushish bosqichlari mavjudligi uchun.

// Life Cycle componentDidMount => orqalik biz backend'dan data'larni olish uchun ishlatamiz

// -----------------------------------------------------------

// Functional component tarkibida class componentimining sun'iy state'ini hosil qilib beradigan
// hook bu useState() hooki hisoblanadi.

// Yuqoridagi 3'ta Life Cycle methodini qurish uchun ishlatidagan hook bu useEffect() deyiladi.

// -------------------------------------------------------------

// React'ning qanday hooklari mavjud va hook nima?
// Hook'lar biz react'ning 16.8 versiyasidan keyin taqdim etilgan ekan

// Hook bu baliq ovidagi ilmoq hisoblanadi. Ya'ni ilmoqga baliq ilinsa bu bizga siganl bo'ladi, va uni
// biz suvdan tortib olamiz. Huddi shu singarin hook deb nomlanishini sababi, ma'lum operatsiyalar sodir bo'lganda
// bizning reactimizga signal boradi. Va bizning react applicationimiz mana shu signallar yuzasidan ma'lum bir
// operatsiyalarni amalga oshiradi.

// Quyida react'ning hooklari:
// 1) useState()
// 2) useEffect()
// 3) useContext()
// 4) useRef()
// 5) useReducer()
// 6) useCallback()
// 7) useMemo()
// 8) Custom Hooks

// Yuqoridagi hook'lardan eng ko'p ishlatiladigan hook'lar:
// 1) useState() => Bizga sun'iy state'larni hosil qilib beradi
// 2) useEffect() => 3'ta life cycling methodlari bajaradigan vazifani amalga oshirib beradi

// ---------------------------------------------------------

// useEffect() doim bir marotaba ishga tushadi, ya'ni bizning componentimiz birinchi qurilgan vaqtida
// bir marotaba ishga tushadi. Lekin biz useEffect()'ning array dependencies'ga masalan ma'lum bir value'ni
// pass qiladigan bo'lsak, shu pass bo'lgan value o'zgargan vaqtida useEffect() yana qayta ishga tushadi.

// Ya'ni useEfect() tarkibiga biror bir mantiqni yozishimiz bu componentDidMount bo'lsa, unga dependencies sifatida
// pass qiladigan bo'lsa, bu holat componentWillUnmount'ga to'g'ri keladi.

// useEffect(() => {
// 	setCount(count + 1);
// }, []);

// Agar bir useEffect()'ni hosil qilgandan keyin unga dependecies sifatida bo'sh array'ni bermaydigan bo'lsak
// bu holat useEffect()'ni qayta - qayta ishga tushishiga olib kelib forever cycling hosil qilib qo'yadi.

// 78th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-28
// 79th Lesson
// Learn Redux Architecture

// Darsimiz rejasi:
// 1) Loyihamizni qanday o'rnatilganligini va qanday tarzda run qilinayotganligini tahlil qilamiz
// 2) Loyihamizning Redux Architecture'ini o'rganamiz
// 3) Redux Toolkitning afzalliklari haqida gaplashamiz

// ---------------------------------------------------

// React Burak loyihamizni yangi o'rnatgan vaqtimizda biz quyidagi kommanda orqalik template sifatida
// redux-typescript'ni o'rnatgan edik:

// npx create-react-app app-name --template redux-typescript

// Loyihamiz JavaScript yoki TypeScript'da run bo'ladi?
// Biz develop jarayoni uchun loyihamizda TypeScript'ni ishlatdik lekin run qilish uchun JavaScript'ni ishlatamiz.

// Loyihamizni production'da emas balki build qilmasdan local ishga tushiradigan bo'lsak ham loyihamiz JavaScript'da
// ishga tushadi. Chunki node_modules folder'ir tarkibidagi postcss_loader folderi bizga loyihamizni qisman bo'lsada
// JavaScript'ga o'girib beradi.

// Loyihamizni production'ga chiqarish uchun biz build commandasini berib, TypeScript'da yozilgan to'lib loyihamizni
// JavaScript'ga o'girib olishimiz kerak bo'ladi. Buning uchun quyidagi kommandadan birini bersak kifoya:

// npm run build || yarn build

// "build": "react-scripts build" => This command creates a build folder and convert TS codes to JS and push them in it.

// --------------------------------------------------------
// Redux => Architectural Pattern

// Architectural Pattern => Butun bir tizimni ishlashini ta'minlab beradigan qolip hisoblanadi
// Design Pattern => Ma'lum bir uchastkalarni ishini hal qilib beradi

// Architectural Pattern'ni biz inson tanasining suyagiga o'xshatdik. Ya'ni insonning butun boshlik tanasini
// harakat bilan ta'minlab berishini Architectural Pattern deb hisoblasak, Bizning bir qo'limiz yoki kaftimiz bu
// Design Pattern hisoblanadi. Ya'ni mana shu kaftimiz bajaradigan vazifalarnigina ta'minlab beradigan kaftimiz suyaklari
// Design Pattern'ga misol bo'ladi.

// Architectural va Design Pattern nafaqat backend'ning o'zida balki, backend va Front-end'da ham faol ishlatiladi.

// Biz Burakning backend loyihasida MVC Architectural Pattern'da foydalangan edik. Lekin bularga alternativa sifatida
// boshqa Pattern'lar ham mavjud. Masalan, Flux av Redux.

// --------------------------------------------------
// keling bularni tahlil qilib chiqamiz.

// MVC => Model View Controller. Architectural design pattern for developing UI.
// Flux => Application architecture designed to build client-side web apps
// Redux => Open-source JavaScript library used for creating the UI. It generaly works with React & Angular development.

// Redux Architecure => Flux Architecture'ga asoslanadi.

// Redux'da ikkita oqim mavjud:
// 1) Dispatch oqimi
// 2) Subscription oqimi

// Redux 4 qismdan iborat:
// Redux: View/UI => Actions => Reducer => Store

// 1) View/UI => Bu qismda backend'dan ma'lumot olinadi va dispatch qilinadi.

// 2) Ma'lumot dispatch qilingan so'ng Action Creator va Action Type'larga yuzlanadi.
// Action Create & Type'lar Reducer'lar bilan bog'langan bo'ladi.

// 3) Va Reducer'lar ma'lum bir operatsiyalarni Store'imizda sodir bo'lishiga sababchi bo'ladi.
// Hamda Reducer'lar tegishlik ma'lumotlarni bizning single store'imizning ma'lum bir bo'limlariga borib joylaydi.

// 4) Mana shu Store'ga joylangan ma'lumotlar bizning View/UI'imizga taqdim etiladi.

// Yuqoridagi barcha jarayonlarni biz ikkiga bo'lishimiz mumkin: 1) Dispatch (Slice) 2) Subscribe (Selector)

// Yuqoridagi mantiq va componentlar asosida Redux Architecture'imiz qurilgan.

// ----------------------------------------------------------------------------------

// Doim yozidingizda tuting!
// Reduxni quyidagi library'lar bilan ham integratsiya qilib ishlata olishimiz mumkin:
// React, Agnular, VueJS

// Redux va React bulan bir - biriga mutlaqo bog'lanmagan ikkalasi alohida library hisoblanadi.

// Redux'ni mashxur bo'lib ketishiga sababchi bo'lgan library bu React hisoblanadi.

// Backend serverlar stateless hisoblanadi. Va MVC backend uchun ham Front-end uchun ham ishlatishimiz mumkin.
// Lekin har ikkala holatda ham uni store mavjud bo'lmaydi.

// ------------------------------------------------------------------------
// Redux vs MVC vs Flux

// Data Flow Direction:
// MVC => Follows the biderectional flow (alohida models, controllers)
// Redux =>  Follows the uniderectional flow (aniq bir yo'nalishdagi data flow. Controll on data flow)
// Flux =>  Follows the uniderectional flow (aniq bir yo'nalishdagi data flow. Controll on data flow)

// Single or Multiple Stores:
// MVC => No concept of store
// Redux => Includes single store
// Flux => Includes multiple stores

// Where Business Logic Resides?:
// MVC => Controller handles entire logic
// Flux => Store handles all logic
// Redux => Reducer handles all logic

// How Debugging is handled?:
// MVC => Debugging is difficult duo to bidirectional flow
// Flux => Ensures simle debugging with the dispachter
// Redux => Single store makes debugging lot easier

// Where can be used?:
// MVC =>
// 1) Shines well in both client and server - side frame works
// 2) Supports: Front-end frameworks like AngularJS, Ember, Backbone, Sprout, and Knockout
// 3) Backend frameworks like Spring, Ruby on Rails, Django, Meteor

// Flux =>
// 1) Supports client-side framework
// 2) Supports Front-end frameworks like React, AngularJS, VueJS, and Polymer

// Redux =>
// 1) Supports slient-side framework
// 2) Supports Front-end frameworks like React, Vue.js, AngularJS, Ember, Backbone.js, Meteor, and Polymer

// ---------------------------------------------------------------------------------

// Agar biz Redux bilan ishlaydigan bo'lsak u bizga single storage'ni hosil qilib beradi.
// Masalan biz ma'lum component tarkibida ma'lumotlarni qabul qildik, va qabul qilingan ma'lumotlarni
// Redux'ning Single Store'ga saqlab qo'ya olamiz. Backend'dan kelgan ma'lumotni Redux Single Store'ga
// saqlaganimizdan keyin, React loyihamizning istalgan componentidan, saqlangan ma'lumotni (backend'dan kelgan)
// osonlikcha chaqirib olishimiz mumkin ekan.

// Redux'ning Single Store mantig'i bo'lganligi uchun, bu bizning ishimizni ancha osonlashtirib beradi.

// Agar Redux mavjud bo'lmaganida, Parent'dan ~ Child'ga, hamda Child'ni o'zini children'lariga ma'lumotlarni pass
// qilishimizga to'g'ri kelar edi. Lekin Redux'da esa, istalgan componentdan ma'lumotlarni Redux Single Store'ga saqlab,
// saqlangan ma'lumotni istalgan component'dan chaqirishimiz mumkin.

// ---------------------------------------------------------

// MVC => Asosiy markaz bu Controller
// Flux => Asosiy markaz bu Store
// Redux => Asosiy markaz bu Reducer

// ----------------------------------------------------------

// Redux Toolkit:
// Oldinlari Redux'ni Toolkit'siz qurib chiqilgan

// Redux Toolkit => Bizning loyihamizni optimallashtirib ish sifatini oshirib resurslarimini tejab beradi.

// Boiler-PLate => Bir mantiq ishlashi uchun yoziladigan yana bir mantiq.
// Business mantiq uchun emas, balki biror bir kodni ishlashi uchun xizmat qiladigan mantiq bu Boiler-Plate deyiladi.
// Boiler-Plate bu bosh og'riq hisoblanadi. Aynan Redux Toolkit mana shunday bosh og'riqlardan xalos qilib, faqatgina
// business mantiq yozish uchun fokusizni qaratishga imkoniyat beradi.

// 79th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-29
// 80th Lesson
// HomePage => Develop Redux Slice and Selectors

// Darsimiz rejasi:
// 1) HomePage screen Componentiga daxldor type integration'larni amalga oshiramiz
// 2) HomePage Screen Componentimizning Redux storage'ni configuratsiyasini amalga oshiramiz
// 3) Redux logger middleware integratsiyasini amalga oshiramiz
// 4) HomePage'ga daxldor redux Architecture'ni birga test qilamiz

// ---------------------------------------------------

// Bizning Redux Storage'imiz faqatgina birgina storage'dan iborat.

// Masalan, backend'dan ma'lum bir ma'lumotni json formatda olganimizdan so'ng
// Redux storage'imizga bu ma'lumotni joylaymiz. Bu ma'lumotni Redux Storage'iga
// joylaganimizdan so'ng, biz bu ma'lumotni SPA loyihamizning istalgan qismida
// chaqirib olib ishlata olamiz.

// Redux Storage hamma component uchun ochiq hisoblanadi.

// Redux Storage'ni yaratib olishimizdan oldin, butun boshlik loyihamizni
// type integrasiyasini hosil qilib olishimiz kerak bo'ladi.

// Type integratsiyasini amalga oshirishning ikki xil usuli mavjud:
// 1) Screen Component Based Type Integration
// 2) Target Oriented Type Integration

// slice.ts va selector.ts fayllari har bir screen componentimizni ichida mavjud bo'ladi

// useEffect() => Birinchi ishga tushgan vaqti bizga componentDidMount() mantig'ini ishga tushirib beradi

// Backend'dan olgan ma'lumotlarimizni to'g'ridan - to'g'ri componentlarda ishlatmaymiz.
// Aksincha biz ularni birinchi Redux Store'ga saqlashimiz kerak bo'ladi.

// Redux Store'ga ma'lumotlar qayd etilganidan keyin biz ularni select qila olamiz.

// Agar biz backend'dan kelgan ma'lumotni Redux Store'ga saqlamasdan to'g'ridan - to'g'ri
// componentlarda ishlatadigan bo'lsak, biz ushbu data'ni faqatgina o'sha componentning o'zidagina ishlata olamiz xolos.

// redux-logger => Redux Store'imizni ichida qanday ma'lumotlar mavjud va qay tarzda o'zgarayotganligini biz aniq
// qilib log qilib beradi.

// @reduxjs/toolkit

// 80th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-07-31
// 81th Lesson
// Recieve data from the backend and develop home page

// Darsimiz rejasi:
// 1) Frontendimizga daxldor environmental variable'larni va configuration faylni hosil etamiz
// 2) Backenddan ma'lumotlar olish maqsadida API Service'larini joriy etamiz
// 3) API Service'lar orqali olingan ma'lumotlar asosida HomePage Screen Componentimizni developing jarayonini yakunlaymiz

// ---------------------------------------------------

// Screen componentlarda backenddan kelgan ma'lumotni redux'ga joylab
// ularni sectional componentda chaqirib ishlatishimiz mumkin.

// 81th shu yerda yakunlandi
// 수고 하셨습니다!

// ==================================================================

// 2024-08-30
// 82th Lesson
// Develop ProductsPage Screen Component with Redux Architecture

// Darsimiz rejasi:
// 1) ProductsPage Screen Componentini type integrationini amalga oshiramiz
// 2) ProductsPage Screen Componentini Slice va Selectorlariin develop qilamiz

// ---------------------------------------------------

// 82th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-02
// 83th Lesson
// Develeop ProductsPage Screen Component by retrieving data from the backend

// Darsimiz rejasi:
// 1) Products Componentida Service API'lar orqalik olinadigan ma'lumotlar asosida develop qilamiz
// 2) Products Componentida user interaction uchun xizmat qiladigan Handeler'ni joriy etamiz
// 3) Products Componentida productSearch objectini tashkil qilamiz va u orqali backend'dan data fetch qilish mexanizmini quramiz
// 4) ChosenProducts Componentida service API'lar orqali backend'dan olingan ma'lumotlar asosida developing jarayonini amalga oshiramiz.

// ---------------------------------------------------

// await axios.get(url, { withCredentials: true }); => Server aynan kim murojaat etayotganligi to'g'risida ma'lumotga ega bo'lish mantig'i
// 83th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-06
// 84th Lesson
// Develop basket business logic

// Darsimiz rejasi:
// 1) Basketimizga yangi productlar qo'shish mantiqini develop qilamiz
// 2) Basketimizning mantig'ini hooklar orqalik amalga oshiramiz
// 3) Basketimiz bilan bog'liq boshqa mantiqlarimizni develop qilamiz

// ---------------------------------------------------

// e.stopPropagation() => Ushbu mantiq bizga child'ni parentiga tegishlik bo'lgan
// mantiqlarda halos qilishga yordam beradi.

// Customized hooklar tarkibida biz osongina asynchronous operatsiyalarini osongina
// bajara olamiz.

// Customized Hooklardan foydalanishning afzalliklari:
// 1) Ma'lumotlarni shunchaki hook'larga biriktirib qo'ya olamiz
// 2) Clean Code
// 3) asynchronous operatsiylarini osonlikcha bajara olamiz

// Customized Hook'lar faylini ochishda doim use... so'zidan boshlab camel case'ga
// asosan ochamiz.

// 84th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-06
// 85th Lesson
// Develop Front-end authentication process

// Darsimiz rejasi:
// 1) Authentication modal Componenti publishingini amalga oshiramiz
// 2) Authentication jarayonini siz bilan birga develop qilamiz

// ---------------------------------------------------

// sweetalert2 => package'i orqalik biz, chiroylik va qulay UI'ga ega bo'lgan
// alert'larni hosil qilishimiz mumkin.

// 85th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-07
// 86th Lesson
// Develop Authentication process

// Darsimiz rejasi:
// 1) Global variable'larni hosil qilish uchun customized hook'lardan foydalanamiz
// 2) Hosil qilgan customized hook'larimizda context integratsiyasini amalga oshiramiz
// 3) User'larimiz authenticated bo'lganda hook'larimizni ishlatishni o'rganamiz
// 4) Logout jarayonini develop qilamiz

// ---------------------------------------------------

// await axios.post(url, input, { withCredentials: true }) =>
// Bu shart bizga backend'dan frontend'imizga kim murojaat qilayotganligini aniqlab
// cookie'larni joylab beradi.

// Agar bizning project ikki hil domain'da bo'lsa va ular https protocol'ida bo'lmasa
// unday holatda cookie'lar oldi-berdisi amalga oshmaydi. Hattoki { withCredentials: true } bo'lganda ham.
// Demak, { withCredentials: true } bo'lishini o'zi yetarlik emas, ma'lum bir shartlardan birigina
// bajarilishi mumkin xolos.

// Lekin, hozirgi loyihamiz, o'zimizning mashinamizda run bo'layotganligi uchun, hech qanday muammo
// sodir bo'lmaydi.

// Cookies => package bizga browser'imizdagi cookie'larni qo'lga olishimizga imkon beradi

// { children } => Biz wrap qilayotgan narsamizni ichidagi mantiq

// Biz global context'ni hosil qilish uchun, asosiy index.tsx faylida
// barcha integratsiya qilingan mantiqlarni, uni ichiga wrap qilishimiz kerak bo'ladi.

// Biz quyidagi mantiqlar orqalik, redux mantig'ini ishlatmayapmiz, biz
// context mantig'ini o'rganish maqsadida, undan faol foydalanypamiz. Ya'ni
// context'lar orqalik simple storage'ni ham hosil qilsak bo'ladi.

// context bizga redux singarin mukammal storage'ni hosil qilib bermaydi, lekin
// simple data'larni handle qilib beradi.

// Biz global context tarkibida hosil qilgan har qanday mantiqlarimizni
// loyihamizning istalgan qismida ishlata olamiz.

// 86th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-08
// 87th Lesson
// Develop OrdersPage Screen Component with Redux Architecture

// Darsimiz rejasi:
// 1) OrdersPage Screen Componentiga daxldor type integration'ini hosil qilamiz
// 2) OrdersPage Screen Componentini Redux Architecture bilan develop qilamiz

// ---------------------------------------------------

// 87th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-08
// 88th Lesson
// Develop OrdersPage Screen Component business logic

// Darsimiz rejasi:
// 1) Basketimiz orqali yangi orderlarni hosil etamiz
// 2) User'larimizga daxldor bo'lgan jami order'larni backend'dan chaqiramiz
// 3) Order'larimizni update qilish mantig'ini develop qilamiz

// ---------------------------------------------------

// 88th shu yerda yakunlandi
// 수고 하셨습니다!


// 89th darsga keldim...




