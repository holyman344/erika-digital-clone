import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f4f2] text-[#363333]">
      {/* Header Section */}
      <header className="flex flex-col items-center pt-12 pb-8">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
          <Image
            src="https://ext.same-assets.com/485309724/1211705400.jpeg"
            alt="ErikainDigital Profile"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-6">
          <a href="https://www.instagram.com/erika.indigital" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://ext.same-assets.com/485309724/1417169576.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
          <a href="https://www.tiktok.com/@erikaindigital" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://ext.same-assets.com/485309724/1299126523.svg"
              alt="TikTok"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
        </div>

        {/* Title and Subtitle */}
        <h1 className="text-2xl font-bold mb-2">ErikainDigital</h1>
        <p className="text-gray-600 text-center italic">Prodotti Digitali - Canva - Crescita Social</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-16">
        {/* Section Title */}
        <h2 className="text-xl font-semibold text-center mb-8">Canva e Prodotti Digitali</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Canva Money */}
          <div className="bg-[#ddd3ce] rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/485309724/1853951754.jpeg"
              alt="Canva Money"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Canva Money</h3>
              <p className="text-sm text-gray-600 mb-4">
                La tua guida per creare e vendere un prodotto digitale con Canva
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold">€17</span>
                <span className="text-sm text-gray-500 line-through">€39</span>
              </div>
              <button className="w-full bg-[#bdb2ae] hover:bg-[#a39893] text-[#363333] py-2 px-4 rounded transition-colors">
                Scopri di più
              </button>
            </div>
          </div>

          {/* 200 prodotti digitali */}
          <div className="bg-[#ddd3ce] rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/485309724/2453556604.jpeg"
              alt="200 prodotti digitali"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">200 prodotti digitali done for you</h3>
              <p className="text-sm text-gray-600 mb-4">
                Mega Bundle 200 prodotti digitali pronti da rivendere con il 100% del profitto
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold">€17</span>
                <span className="text-sm text-gray-500 line-through">€47</span>
              </div>
              <button className="w-full bg-[#bdb2ae] hover:bg-[#a39893] text-[#363333] py-2 px-4 rounded transition-colors">
                Get My Guide
              </button>
            </div>
          </div>

          {/* Canva Mini Course */}
          <div className="bg-[#ddd3ce] rounded-lg overflow-hidden">
            <Image
              src="https://i.fbcd.co/products/resized/resized-750-500/webinar-slide-deck-canva-template-e0e451e08c88455850155e9cf33822631aac15a2e99148adf561c8dc0236090e.jpg"
              alt="Canva Mini Course"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Canva Mini Course</h3>
              <p className="text-sm text-gray-600 mb-4">
                Mini corso Canva guida + video che ti spiega le funzionalità principali per iniziare a usare Canva
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold">€17</span>
              </div>
              <button className="w-full bg-[#bdb2ae] hover:bg-[#a39893] text-[#363333] py-2 px-4 rounded transition-colors">
                Get My Guide
              </button>
            </div>
          </div>

          {/* 30MILA video video faceless */}
          <div className="bg-[#ddd3ce] rounded-lg overflow-hidden">
            <Image
              src="https://i.ytimg.com/vi/pCV6_9RJ9tQ/maxresdefault.jpg"
              alt="30MILA video faceless"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">30MILA video video faceless - MEGA BUNDLE</h3>
              <p className="text-sm text-gray-600 mb-4">
                La libreria video best seller per il tuo Faceless Marketing
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold">€27</span>
                <span className="text-sm text-gray-500 line-through">€57</span>
              </div>
              <button className="w-full bg-[#bdb2ae] hover:bg-[#a39893] text-[#363333] py-2 px-4 rounded transition-colors">
                Scopri di più
              </button>
            </div>
          </div>

          {/* Tik Tok Mastery */}
          <div className="bg-[#ddd3ce] rounded-lg overflow-hidden">
            <Image
              src="https://vip.graphics/wp-content/uploads/2022/06/canva-pitch-deck-template_preview.png"
              alt="TikTok Mastery"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Tik Tok Mastery</h3>
              <p className="text-sm text-gray-600 mb-4">
                La guida definitiva per dominare TikTok e trasformare contenuti in crescita reale
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold">€17</span>
                <span className="text-sm text-gray-500 line-through">€47</span>
              </div>
              <button className="w-full bg-[#bdb2ae] hover:bg-[#a39893] text-[#363333] py-2 px-4 rounded transition-colors">
                Scopri di più
              </button>
            </div>
          </div>

          {/* Theme Page Cash */}
          <div className="bg-[#ddd3ce] rounded-lg overflow-hidden">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/59c957ae03596ef69381fe01/1699841365665-WUFQYZZ5YDYJTJBYX0QR/Custom+Size+%E2%80%93+31.png"
              alt="Theme Page Cash"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Theme Page Cash</h3>
              <p className="text-sm text-gray-600 mb-4">
                Come monetizzare una Theme Page su Instagram senza metterci la faccia
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold">€17</span>
                <span className="text-sm text-gray-500 line-through">€57</span>
              </div>
              <button className="w-full bg-[#bdb2ae] hover:bg-[#a39893] text-[#363333] py-2 px-4 rounded transition-colors">
                Get My Guide
              </button>
            </div>
          </div>
        </div>

        {/* VAT Number */}
        <div className="text-center mb-8">
          <p className="text-xs text-gray-500 tracking-wider">VAT NUMBER IT04133630048</p>
        </div>

        {/* Build Store CTA */}
        <div className="text-center">
          <button className="bg-[#ddd3ce] hover:bg-[#cec7c3] text-[#363333] px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2 mx-auto">
            Build your Stan Store
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center pb-8">
        <a href="#" className="text-xs text-gray-500 hover:text-gray-700">Privacy Policy</a>
      </footer>
    </div>
  )
}
