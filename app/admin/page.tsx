export default function NutramolAIAdminPanel() {
    const stats = [
      {
        title: 'Toplam Kullanıcı',
        value: '1,284',
      },
      {
        title: 'Premium Üye',
        value: '312',
      },
      {
        title: 'Bugünkü AI İsteği',
        value: '8,421',
      },
      {
        title: 'Aylık Gelir',
        value: '$2,940',
      },
    ]
  
    const users = [
      {
        name: 'Ahmet Yılmaz',
        email: 'ahmet@example.com',
        plan: 'Pro',
        status: 'Aktif',
      },
      {
        name: 'Ayşe Demir',
        email: 'ayse@example.com',
        plan: 'Free',
        status: 'Aktif',
      },
      {
        name: 'Mehmet Kaya',
        email: 'mehmet@example.com',
        plan: 'Pro',
        status: 'Pasif',
      },
    ]
  
    return (
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <aside className="w-72 bg-black text-white p-6 flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold">NutramolAI</h1>
            <p className="text-gray-400 mt-1">Admin Panel</p>
          </div>
  
          <nav className="flex flex-col gap-3 mt-6">
            <button className="bg-white text-black rounded-2xl px-4 py-3 text-left font-medium">
              Dashboard
            </button>
  
            <button className="hover:bg-gray-900 rounded-2xl px-4 py-3 text-left transition">
              Kullanıcılar
            </button>
  
            <button className="hover:bg-gray-900 rounded-2xl px-4 py-3 text-left transition">
              Abonelikler
            </button>
  
            <button className="hover:bg-gray-900 rounded-2xl px-4 py-3 text-left transition">
              AI Kullanımı
            </button>
  
            <button className="hover:bg-gray-900 rounded-2xl px-4 py-3 text-left transition">
              Finans
            </button>
  
            <button className="hover:bg-gray-900 rounded-2xl px-4 py-3 text-left transition">
              Ayarlar
            </button>
          </nav>
  
          <div className="mt-auto">
            <div className="bg-gray-900 rounded-2xl p-4">
              <p className="text-sm text-gray-400">Sunucu Durumu</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p>Aktif</p>
              </div>
            </div>
          </div>
        </aside>
  
        {/* Main */}
        <main className="flex-1 p-8 overflow-auto">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold">Dashboard</h2>
              <p className="text-gray-500 mt-1">
                NutramolAI yönetim merkezi
              </p>
            </div>
  
            <div className="flex items-center gap-4">
              <input
                placeholder="Kullanıcı ara..."
                className="px-4 py-3 rounded-2xl border bg-white w-72"
              />
  
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                A
              </div>
            </div>
          </div>
  
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {stats.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-6 shadow-sm"
              >
                <p className="text-gray-500 text-sm">{item.title}</p>
                <h3 className="text-4xl font-bold mt-3">{item.value}</h3>
              </div>
            ))}
          </div>
  
          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* User Table */}
            <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Son Kullanıcılar</h3>
  
                <button className="bg-black text-white px-5 py-3 rounded-2xl">
                  Kullanıcı Ekle
                </button>
              </div>
  
              <div className="overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-4">Ad</th>
                      <th className="pb-4">Email</th>
                      <th className="pb-4">Plan</th>
                      <th className="pb-4">Durum</th>
                      <th className="pb-4"></th>
                    </tr>
                  </thead>
  
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.email} className="border-b last:border-none">
                        <td className="py-5 font-medium">{user.name}</td>
                        <td className="py-5 text-gray-600">{user.email}</td>
                        <td className="py-5">
                          <span
                            className={`px-3 py-2 rounded-xl text-sm ${
                              user.plan === 'Pro'
                                ? 'bg-black text-white'
                                : 'bg-gray-200'
                            }`}
                          >
                            {user.plan}
                          </span>
                        </td>
  
                        <td className="py-5">
                          <span
                            className={`px-3 py-2 rounded-xl text-sm ${
                              user.status === 'Aktif'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
  
                        <td className="py-5">
                          <button className="border px-4 py-2 rounded-xl hover:bg-gray-100 transition">
                            Düzenle
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
  
            {/* Side Cards */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">AI Kullanımı</h3>
  
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>OpenAI</span>
                      <span>78%</span>
                    </div>
  
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-black rounded-full"></div>
                    </div>
                  </div>
  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Claude</span>
                      <span>52%</span>
                    </div>
  
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-[52%] bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="bg-black text-white rounded-3xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Sistem Bilgisi</h3>
  
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Vercel</span>
                    <span>Online</span>
                  </div>
  
                  <div className="flex justify-between">
                    <span>Supabase</span>
                    <span>Online</span>
                  </div>
  
                  <div className="flex justify-between">
                    <span>n8n</span>
                    <span>Online</span>
                  </div>
  
                  <div className="flex justify-between">
                    <span>OpenAI API</span>
                    <span>Aktif</span>
                  </div>
                </div>
              </div>
  
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Hızlı İşlemler</h3>
  
                <div className="flex flex-col gap-3">
                  <button className="bg-black text-white rounded-2xl py-3">
                    Premium Kullanıcı Oluştur
                  </button>
  
                  <button className="border rounded-2xl py-3 hover:bg-gray-100">
                    API Kullanımını Sıfırla
                  </button>
  
                  <button className="border rounded-2xl py-3 hover:bg-gray-100">
                    Mail Gönder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
  