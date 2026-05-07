"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    openCVitaminChat?: () => void;
    openIyotChat?: () => void;
    Chatbot?: any;
  }
}

const FLOWISE_HOST = "https://flowise.nutramolai.com";
const CVITAMIN_ID = "5d06ae21-5294-492c-a2aa-5ebb0b5743c7";
const IYOT_ID = "9341a052-a92f-4f14-9ac4-b9e05ec68fca";

function initChatbot(chatflowid: string, color: string, title: string, welcome: string, prompts: string[], placeholder: string, botBg: string) {
  const win = window as any;
  if (!win.Chatbot) return;

  const existing = document.querySelector("flowise-chatbot");
  if (existing) existing.remove();

  win.Chatbot.init({
    chatflowid,
    apiHost: FLOWISE_HOST,
    theme: {
      button: {
        backgroundColor: color,
        size: 56,
        iconColor: "white",
        autoWindowOpen: { autoOpen: true },
      },
      chatWindow: {
        showTitle: true,
        title,
        welcomeMessage: welcome,
        backgroundColor: "#ffffff",
        height: 700,
        width: 420,
        starterPrompts: prompts,
        botMessage: { backgroundColor: botBg, textColor: "#111827" },
        userMessage: { backgroundColor: color, textColor: "#ffffff" },
        textInput: { placeholder },
      },
    },
  });
}

export default function FlowiseChat() {
  useEffect(() => {
    // Scripti sayfa yüklenince önceden yükle
    if (!document.querySelector('script[src*="flowise-embed"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
      document.body.appendChild(script);
    }

    window.openCVitaminChat = () => {
      initChatbot(
        CVITAMIN_ID, "#059669", "C Vitamini AI",
        "Merhaba 👋 C vitamini hakkında merak ettiğiniz her şeyi sorabilirsiniz!",
        ["Yetişkinlerde C vitamini kullanımı?", "C vitamini eksikliği belirtileri?", "Günlük C vitamini ihtiyacı?"],
        "C vitamini hakkında sorunuzu yazın...", "#f0fdf4"
      );
    };

    window.openIyotChat = () => {
      initChatbot(
        IYOT_ID, "#7c3aed", "İyot AI",
        "Merhaba 👋 İyot hakkında merak ettiğiniz her şeyi sorabilirsiniz!",
        ["İyot eksikliği belirtileri?", "Günlük iyot ihtiyacı ne kadar?", "İyot hangi besinlerde bulunur?"],
        "İyot hakkında sorunuzu yazın...", "#f5f3ff"
      );
    };
  }, []);

  return null;
}