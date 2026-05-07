"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, MessageCircle, Zap } from "lucide-react";
import FlowiseChat from "@/components/FlowiseChat";

const openChat = () => {
  if (typeof window !== "undefined" && window.openFlowiseChat) {
    window.openFlowiseChat();
  }
};

const starterQuestions = [
  "Yetişkinlerde C vitamini kullanımı nasıldır?",
  "C vitamini eksikliği belirtileri nelerdir?",
  "C vitamini hangi besinlerde bulunur?",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <FlowiseChat />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-100 blur-3xl opacity-30" />
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-teal-100 blur-3xl opacity-30" />

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
          <button
            onClick={openChat}
            className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100"
          >
            <MessageCircle size={16} />
            AI Asistanını Aç
          </button>
        </div>
      </header>

      <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between px-6 pb-24 pt-10 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
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

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Nutramol AI; takviye edici gıdalar, fonksiyonel tıp, mikrobiyota ve
            bilimsel sağlık araştırmaları için geliştirilmiş yeni nesil yapay zeka platformudur.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {["Bilimsel Yapay Zeka", "PubMed Destekli", "Klinik AI Asistanı"].map((label) => (
              <div key={label} className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-100">
                <ShieldCheck className="text-emerald-600" size={18} />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.button
              onClick={openChat}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-8 py-5 text-lg font-bold text-white shadow-xl shadow-emerald-200 transition hover:bg-emerald-700"
            >
              <span className="absolute -right-1 -top-1 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500" />
              </span>
              <MessageCircle size={22} />
              AI Asistanı ile Konuş
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </motion.button>

            <button className="rounded-2xl border border-gray-200 bg-white px-8 py-5 font-semibold text-gray-700 transition hover:bg-gray-50">
              Daha Fazla Bilgi
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-20 w-full max-w-md lg:mt-0"
        >
          <div className="absolute -top-5 right-10 rounded-2xl border border-emerald-100 bg-white px-4 py-3 shadow-lg z-10">
            <p className="text-sm font-semibold text-gray-900">Klinik AI Asistanı</p>
            <p className="text-xs text-gray-500">RAG + Bilimsel Kaynaklar</p>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold text-sm">
                  N
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Nutramol AI</h3>
                  <p className="text-xs text-emerald-600">● Online • C Vitamini Uzmanı</p>
                </div>
              </div>
              <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="flex flex-col gap-4 bg-gray-50 px-5 py-6">
              <div className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">
                  N
                </div>
                <div className="rounded-2xl rounded-tl-none bg-white px-4 py-3 shadow-sm text-sm text-gray-700 max-w-[80%]">
                  Merhaba! 👋 C vitamini hakkında merak ettiğiniz her şeyi sorabilirsiniz.
                </div>
              </div>

              <div className="flex justify-end">
                <div className="rounded-2xl rounded-tr-none bg-emerald-600 px-4 py-3 text-sm text-white max-w-[80%]">
                  Günlük C vitamini ihtiyacı ne kadar?
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">
                  N
                </div>
                <div className="rounded-2xl rounded-tl-none bg-white px-4 py-3 shadow-sm text-sm text-gray-700 max-w-[80%]">
                  Sağlıklı yetişkinler için günlük <strong>200 mg veya daha fazla</strong> C vitamini önerilmektedir...
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">
                  N
                </div>
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-none bg-white px-4 py-3 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 bg-white px-5 py-4">
              <p className="mb-3 text-xs font-medium text-gray-400">Hızlı sorular:</p>
              <div className="flex flex-col gap-2">
                {starterQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={openChat}
                    className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-2 text-left text-xs text-gray-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 px-5 py-4">
              <button
                onClick={openChat}
                className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Sohbeti Başlat
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-4xl font-black tracking-tight text-gray-900">Bilimsel Yapay Zeka Altyapısı</h2>
          <p className="mt-4 text-lg text-gray-600">Nutramol AI; modern yapay zeka sistemlerini, bilimsel veri kaynaklarıyla birleştirir.</p>
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

      <section className="relative z-10 px-6 pb-32">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-emerald-600 px-10 py-20 text-center text-white shadow-2xl shadow-emerald-200">
          <h2 className="text-4xl font-black tracking-tight lg:text-5xl">Nutramol AI'ı Deneyin</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50">
            Bilimsel kaynaklarla desteklenen yapay zeka sağlık asistanını şimdi keşfedin.
          </p>
          <motion.button
            onClick={openChat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 flex items-center gap-3 mx-auto rounded-2xl bg-white px-10 py-5 text-lg font-bold text-emerald-700"
          >
            <MessageCircle size={22} />
            AI Asistanını Başlat
          </motion.button>
        </div>
      </section>

    </main>
  );
}