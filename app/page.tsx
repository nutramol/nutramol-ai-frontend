"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

      {/* BACKGROUND GLOWS */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-100 blur-3xl opacity-30" />
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-teal-100 blur-3xl opacity-30" />

      {/* NAVBAR */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-200">
              N
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Nutramol AI
              </h2>

              <p className="text-xs text-gray-500">
                Bilimsel Sağlık Yapay Zekası
              </p>
            </div>

          </div>

          {/* NAV CTA */}
          <button className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
            AI Asistanını Aç
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between px-6 pb-24 pt-10 lg:flex-row">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >

          {/* BADGE */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
            <Sparkles size={16} />
            Yapay Zeka Destekli Sağlık Asistanı
          </div>

          {/* HEADLINE */}
          <h1 className="text-5xl font-black leading-none tracking-tight text-gray-900 lg:text-7xl">

            Bilimsel Kaynaklarla

            <span className="block text-emerald-600">
              Güçlendirilmiş
            </span>

            AI Sağlık Asistanı

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

            Nutramol AI; takviye edici gıdalar,
            fonksiyonel tıp, mikrobiyota ve
            bilimsel sağlık araştırmaları için
            geliştirilmiş yeni nesil yapay zeka
            platformudur.

          </p>

          {/* FEATURE TAGS */}
          <div className="mt-8 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-100">
              <ShieldCheck
                className="text-emerald-600"
                size={18}
              />

              <span className="text-sm font-medium text-gray-700">
                Bilimsel Yapay Zeka
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-100">
              <ShieldCheck
                className="text-emerald-600"
                size={18}
              />

              <span className="text-sm font-medium text-gray-700">
                PubMed Destekli
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-100">
              <ShieldCheck
                className="text-emerald-600"
                size={18}
              />

              <span className="text-sm font-medium text-gray-700">
                Klinik AI Asistanı
              </span>
            </div>

          </div>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="group flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700">

              AI Asistanını Dene

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </button>

            <button className="rounded-2xl border border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 transition hover:bg-gray-50">
              Daha Fazla Bilgi
            </button>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-20 w-full max-w-xl lg:mt-0"
        >

          {/* FLOATING CARD */}
          <div className="absolute -top-5 right-10 rounded-2xl border border-emerald-100 bg-white px-4 py-3 shadow-lg">

            <p className="text-sm font-semibold text-gray-900">
              Klinik AI Asistanı
            </p>

            <p className="text-xs text-gray-500">
              RAG + Bilimsel Kaynaklar
            </p>

          </div>

          {/* CHAT CARD */}
          <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-2xl">

            <div className="space-y-4">

              {/* USER MESSAGE */}
              <div className="rounded-2xl bg-gray-100 p-5 text-gray-700">
                D vitamini eksikliği nelere sebep olabilir?
              </div>

              {/* AI MESSAGE */}
              <div className="rounded-2xl bg-emerald-600 p-5 text-white">

                D vitamini eksikliği bağışıklık sistemi,
                kemik sağlığı, kas fonksiyonları ve
                inflamasyon mekanizmalarını etkileyebilir.

                <br />
                <br />

                Güncel bilimsel çalışmalar bu alanlarda
                güçlü ilişkiler göstermektedir.

              </div>

              {/* TYPING INDICATOR */}
              <div className="flex items-center gap-2 px-2 pt-2">

                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce" />

                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce delay-100" />

                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce delay-200" />

              </div>

            </div>

          </div>

        </motion.div>

      </section>

      {/* FEATURES SECTION */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">

        <div className="mb-14 max-w-2xl">

          <h2 className="text-4xl font-black tracking-tight text-gray-900">
            Bilimsel Yapay Zeka Altyapısı
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Nutramol AI; modern yapay zeka sistemlerini,
            bilimsel veri kaynaklarıyla birleştirir.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
              <Sparkles className="text-emerald-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              RAG Destekli Yapay Zeka
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Yapay zeka cevapları bilimsel kaynaklarla
              desteklenerek daha güvenilir hale getirilir.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
              <ShieldCheck className="text-emerald-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Bilimsel Kanıt Temelli Yaklaşım
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              PubMed ve bilimsel araştırmalar temel alınarak
              sağlık bilgi akışı sağlanır.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
              <ArrowRight className="text-emerald-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Yapay Zeka Destekli Etkileşim
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Kullanıcılar sağlık konularını doğal dil ile
              hızlı ve kolay şekilde keşfedebilir.
            </p>

          </div>

        </div>

      </section>
{/* HOW IT WORKS */}
<section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">

  <div className="mb-16 text-center">

    <h2 className="text-4xl font-black tracking-tight text-gray-900">
      Nasıl Çalışır?
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
      Nutramol AI, modern yapay zeka sistemlerini
      bilimsel veri kaynaklarıyla birleştirir.
    </p>

  </div>

  <div className="grid gap-8 md:grid-cols-3">

    {/* STEP 1 */}
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white">
        1
      </div>

      <h3 className="text-2xl font-bold text-gray-900">
        Sorunuzu Sorun
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        Takviye edici gıdalar, mikrobiyota,
        inflamasyon ve sağlık konularında
        doğal dil ile sorularınızı yöneltin.
      </p>

    </div>

    {/* STEP 2 */}
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white">
        2
      </div>

      <h3 className="text-2xl font-bold text-gray-900">
        AI Analiz Etsin
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        RAG destekli sistem; bilimsel içerikleri,
        sağlık verilerini ve bilgi tabanını analiz eder.
      </p>

    </div>

    {/* STEP 3 */}
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white">
        3
      </div>

      <h3 className="text-2xl font-bold text-gray-900">
        Bilimsel Sonuç Alın
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        Yapay zeka sistemi güvenilir kaynaklardan
        derlenmiş açıklamalar ve özetler sunar.
      </p>

    </div>

  </div>

</section>

{/* TRUST SECTION */}
<section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">

  <div className="rounded-[40px] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-10 lg:p-16">

    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

      {/* LEFT */}
      <div>

        <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
          Bilimsel Güven Katmanı
        </div>

        <h2 className="text-4xl font-black tracking-tight text-gray-900">
          Güvenilir Kaynaklarla
          Desteklenen AI Deneyimi
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">

          Nutramol AI; bilimsel yayınlar,
          sağlık araştırmaları ve modern
          retrieval sistemleriyle desteklenmiş
          yeni nesil bir AI platformudur.

        </p>

      </div>

      {/* RIGHT */}
      <div className="grid gap-4 sm:grid-cols-2">

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Kaynak Sistemi
          </p>

          <h3 className="mt-2 text-2xl font-black text-gray-900">
            PubMed
          </h3>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            AI Mimarisi
          </p>

          <h3 className="mt-2 text-2xl font-black text-gray-900">
            RAG
          </h3>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Otomasyon
          </p>

          <h3 className="mt-2 text-2xl font-black text-gray-900">
            n8n
          </h3>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            AI Altyapısı
          </p>

          <h3 className="mt-2 text-2xl font-black text-gray-900">
            Flowise
          </h3>
        </div>

      </div>

    </div>

  </div>

</section>
{/* FINAL CTA */}
<section className="relative z-10 px-6 pb-32">

  <div className="mx-auto max-w-5xl rounded-[40px] bg-emerald-600 px-10 py-20 text-center text-white shadow-2xl shadow-emerald-200">

    <h2 className="text-4xl font-black tracking-tight lg:text-5xl">
      Nutramol AI’ı Deneyin
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50">

      Bilimsel kaynaklarla desteklenen
      yapay zeka sağlık asistanını şimdi keşfedin.

    </p>

    <button className="mt-10 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-emerald-700 transition hover:scale-105">
      AI Asistanını Başlat
    </button>

  </div>

</section>
    </main>
  );
}