"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    openFlowiseChat?: () => void;
    flowiseChatbot?: unknown;
  }
}

const FLOWISE_HOST = "https://flowise.nutramolai.com";
const CHATFLOW_ID = "5d06ae21-5294-492c-a2aa-5ebb0b5743c7";

export default function FlowiseChat() {
  useEffect(() => {
    if (window.flowiseChatbot) return;

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
            size: 56,
            iconColor: "white",
            autoWindowOpen: { autoOpen: false }
          },
          chatWindow: {
            showTitle: true,
            title: "Nutramol AI",
            welcomeMessage: "Merhaba 👋 C vitamini hakkında merak ettiğiniz her şeyi sorabilirsiniz!",
            backgroundColor: "#ffffff",
            height: 700,
            width: 420,
            starterPrompts: [
              "Yetişkinlerde C vitamini kullanımı nasıldır?",
              "C vitamini eksikliği belirtileri nelerdir?",
              "C vitamini hangi besinlerde bulunur?"
            ],
            botMessage: {
              backgroundColor: "#f0fdf4",
              textColor: "#111827"
            },
            userMessage: {
              backgroundColor: "#059669",
              textColor: "#ffffff"
            },
            textInput: {
              placeholder: "C vitamini hakkında sorunuzu yazın..."
            }
          }
        }
      })

      window.openFlowiseChat = () => {
        const btn = document.querySelector('.flowise-chatbot-button')
        if (btn) btn.click()
      }

      const hide = () => {
        const btn = document.querySelector('.flowise-chatbot-button')
        if (btn) btn.style.display = 'none'
      }
      setTimeout(hide, 500)
      setTimeout(hide, 1500)
      setTimeout(hide, 3000)
    `;

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
}
