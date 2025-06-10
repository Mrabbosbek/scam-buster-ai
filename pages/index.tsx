export default function ScamBusterHome() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-xl mx-auto mt-10 p-6 rounded-2xl shadow-xl border">
        <h1 className="text-3xl font-bold mb-4 text-center">🔍 Scam Buster AI</h1>
        <p className="text-center text-gray-600 mb-6">
          Firibgarlikdan saqlanish uchun ishonchli tekshiruv sayti
        </p>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Telegram username yoki karta raqami</label>
            <input
              type="text"
              placeholder="@username yoki 8600 xxxx xxxx xxxx"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring"
            />
          </div>
          <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800">
            ✅ Tekshiruvni boshlash
          </button>
        </div>
        <div className="mt-6 text-sm text-center text-gray-500">
          Biz 10,000+ scammerlar bazasi bilan ishlaymiz.
        </div>
      </div>
    </div>
  );
}
