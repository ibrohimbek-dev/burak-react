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
