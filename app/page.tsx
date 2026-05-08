"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, MessageCircle, Zap, Leaf, FlaskConical } from "lucide-react";
import FlowiseChat from "@/components/FlowiseChat";

const openCVitamin = () => {
  if (typeof window !== "undefined" && window.openCVitaminChat) {
    window.openCVitaminChat();
  }
};

const openIyot = () => {
  if (typeof window !== "undefined" && window.openIyotChat) {
    window.openIyotChat();
  }
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <FlowiseChat />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-100 blur-3xl opacity-30" />
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-violet-100 blur-3xl opacity-20" />

      {/* NAVBAR */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-200">
              N
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Nutramol AI</h2>
              <p className="text-xs text-gray-500">Bilimsel Sağlık Yapay Zekası</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openCVitamin}
              className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100"
            >
              <Leaf size={14} />
              C Vitamini
            </button>
            <button
              onClick={openIyot}
              className="flex items-center gap-2 rounded-2xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-medium text-violet-700 transition hover:bg-violet-100"
            >
              <FlaskConical size={14} />
              İyot
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
            <Sparkles size={16} />
            Yapay Zeka Destekli Sağlık Asistanı
          </div>

          <h1 className="text-5xl font-black leading-none tracking-tight text-gray-900 lg:text-7xl">
            Bilimsel Kaynaklarla
            <span className="block text-emerald-600">Güçlendirilmiş</span>
            AI Sağlık Asistanı
          </h1>

          <p className="mt-8 mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Nutramol AI; takviye edici gıdalar, fonksiyonel tıp ve bilimsel
            sağlık araştırmaları için geliştirilmiş yeni nesil yapay zeka platformudur.
          </p>
        </motion.div>

        {/* İKİ ASISTAN KARTI */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">

          {/* C VİTAMİNİ KARTI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={openCVitamin}
            className="group cursor-pointer rounded-[32px] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-lg transition hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1"
          >
            {/* İkon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 shadow-lg shadow-emerald-200">
              <Leaf size={32} className="text-white" />
            </div>

            {/* Başlık */}
            <h2 className="text-2xl font-black text-gray-900">C Vitamini AI</h2>
            <p className="mt-2 text-sm font-medium text-emerald-600">Bilimsel C Vitamini Asistanı</p>

            <p className="mt-4 leading-7 text-gray-600">
              C vitamini kullanımı, eksikliği, faydaları ve bilimsel
              araştırmalar hakkında detaylı bilgi alın.
            </p>

            {/* Örnek sorular */}
            <div className="mt-6 flex flex-col gap-2">
              {[
                "Yetişkinlerde C vitamini kullanımı?",
                "Günlük C vitamini ihtiyacı ne kadar?",
                "C vitamini eksikliği belirtileri?",
              ].map((q) => (
                <div key={q} className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {q}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-emerald-700">Online</span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-emerald-700">
                <MessageCircle size={16} />
                Sohbeti Başlat
                <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>

          {/* İYOT KARTI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            onClick={openIyot}
            className="group cursor-pointer rounded-[32px] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-8 shadow-lg transition hover:shadow-xl hover:border-violet-300 hover:-translate-y-1"
          >
            {/* İkon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 shadow-lg shadow-violet-200">
              <FlaskConical size={32} className="text-white" />
            </div>

            {/* Başlık */}
            <h2 className="text-2xl font-black text-gray-900">İyot AI</h2>
            <p className="mt-2 text-sm font-medium text-violet-600">Bilimsel İyot Asistanı</p>

            <p className="mt-4 leading-7 text-gray-600">
              İyot kullanımı, eksikliği, tiroid sağlığı ve bilimsel
              araştırmalar hakkında detaylı bilgi alın.
            </p>

            {/* Örnek sorular */}
            <div className="mt-6 flex flex-col gap-2">
              {[
                "İyot eksikliği belirtileri nelerdir?",
                "Günlük iyot ihtiyacı ne kadar?",
                "İyot hangi besinlerde bulunur?",
              ].map((q) => (
                <div key={q} className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  {q}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-xs font-medium text-violet-700">Online</span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-violet-700">
                <MessageCircle size={16} />
                Sohbeti Başlat
                <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black tracking-tight text-gray-900">
            Bilimsel Yapay Zeka Altyapısı
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nutramol AI; modern yapay zeka sistemlerini, bilimsel veri kaynaklarıyla birleştirir.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: <Sparkles className="text-emerald-600" />, title: "RAG Destekli Yapay Zeka", desc: "Yapay zeka cevapları bilimsel kaynaklarla desteklenerek daha güvenilir hale getirilir." },
            { icon: <ShieldCheck className="text-emerald-600" />, title: "Bilimsel Kanıt Temelli", desc: "PubMed ve bilimsel araştırmalar temel alınarak sağlık bilgi akışı sağlanır." },
            { icon: <Zap className="text-emerald-600" />, title: "Anında Yanıt", desc: "Kullanıcılar sağlık konularını doğal dil ile hızlı ve kolay şekilde keşfedebilir." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">{icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <p className="mt-4 leading-7 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black tracking-tight text-gray-900">Nasıl Çalışır?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Nutramol AI, modern yapay zeka sistemlerini bilimsel veri kaynaklarıyla birleştirir.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { step: 1, title: "Asistanı Seçin", desc: "C Vitamini veya İyot asistanlarından ihtiyacınıza uygun olanı seçin." },
            { step: 2, title: "AI Analiz Etsin", desc: "RAG destekli sistem bilimsel içerikleri ve sağlık verilerini analiz eder." },
            { step: 3, title: "Bilimsel Sonuç", desc: "Yapay zeka sistemi güvenilir kaynaklardan derlenmiş açıklamalar sunar." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white">
                {step}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              <p className="mt-4 leading-7 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[40px] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-10 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                Bilimsel Güven Katmanı
              </div>
              <h2 className="text-4xl font-black tracking-tight text-gray-900">
                Güvenilir Kaynaklarla Desteklenen AI Deneyimi
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nutramol AI; bilimsel yayınlar, sağlık araştırmaları ve modern retrieval
                sistemleriyle desteklenmiş yeni nesil bir AI platformudur.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Kaynak Sistemi", value: "PubMed" },
                { label: "AI Mimarisi", value: "RAG" },
                { label: "Otomasyon", value: "n8n" },
                { label: "AI Altyapısı", value: "Flowise" },
              ].map(({ label, value }) => (
                <div key={value} className="rounded-3xl bg-white p-6 shadow-sm">
                  <p className="text-sm text-gray-500">{label}</p>
                  <h3 className="mt-2 text-2xl font-black text-gray-900">{value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 px-6 pb-32">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-emerald-600 px-10 py-20 text-center text-white shadow-2xl shadow-emerald-200">
          <h2 className="text-4xl font-black tracking-tight lg:text-5xl">Nutramol AI&apos;ı Deneyin</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50">
            Bilimsel kaynaklarla desteklenen yapay zeka sağlık asistanlarını şimdi keşfedin.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={openCVitamin}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-emerald-700"
            >
              <Leaf size={20} />
              C Vitamini Asistanı
            </motion.button>

            <motion.button
              onClick={openIyot}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 rounded-2xl bg-violet-700 px-8 py-4 text-lg font-bold text-white border border-violet-500"
            >
              <FlaskConical size={20} />
              İyot Asistanı
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
}