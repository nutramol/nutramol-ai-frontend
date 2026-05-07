"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    openFlowiseChat?: () => void;
    flowiseChatbot?: unknown;
  }
}

// ⚠️ FLOWISE_HOST: http değil https olmalı (SSL kurduktan sonra güncelle)
const FLOWISE_HOST = "https://flowise.nutramolai.com";
const CHATFLOW_ID = "5d06ae21-5294-492c-a2aa-5ebb0b5743c7";

export default function FlowiseChat() {
  useEffect(() => {
    // Zaten yüklendiyse tekrar ekleme
    if (window.flowiseChatbot) {
      return;
    }

    const script = document.createElement("script");
    script.type = "module";

    script.innerHTML = `
      import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"

      window.flowiseChatbot = Chatbot

      Chatbot.init({
        chatflowid: "${CHATFLOW_ID}",
        apiHost: "${FLOWISE_HOST}",

        theme: {
          button: {
            backgroundColor: "#059669",
            size: 48,
            autoWindowOpen: {
              autoOpen: false
            }
          },

          chatWindow: {
            showTitle: true,
            title: "Nutramol AI",
            welcomeMessage: "Merhaba 👋 Nutramol AI sağlık asistanına hoş geldiniz.",
            backgroundColor: "#ffffff",
            height: 700,
            width: 420,

            starterPrompts: [
              "C vitamini bağışıklığı destekler mi?",
              "C vitamini eksikliği belirtileri nelerdir?",
              "C vitamini hangi durumlarda kullanılır?"
            ],

            botMessage: {
              backgroundColor: "#f3f4f6",
              textColor: "#111827"
            },

            userMessage: {
              backgroundColor: "#059669",
              textColor: "#ffffff"
            },

            textInput: {
              placeholder: "Sorunuzu yazın..."
            }
          }
        }
      })

      // Butonu gizle, window.openFlowiseChat() ile aç
      const hideBtn = () => {
        const btn = document.querySelector('.flowise-chatbot-button')
        if (btn) {
          btn.style.display = 'none'
        }
      }

      // Birkaç kez dene — script yüklenmesi zaman alabilir
      setTimeout(hideBtn, 500)
      setTimeout(hideBtn, 1500)
      setTimeout(hideBtn, 3000)

      window.openFlowiseChat = () => {
        const btn = document.querySelector('.flowise-chatbot-button')
        if (btn) {
          btn.style.display = 'block'
          btn.click()
          setTimeout(() => { btn.style.display = 'none' }, 100)
        }
      }
    `;

    document.body.appendChild(script);

    return () => {
      // Cleanup: script'i kaldır
      document.body.removeChild(script);
    };
  }, []);

  return null;
}