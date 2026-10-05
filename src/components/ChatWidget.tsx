import { useEffect, useRef, useState } from "react";

const API_URL = import.meta.env.VITE_CHAT_API_URL;

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Namaste 🙏 I’m the Śruti Digital assistant. Ask me about classes, Vedam, Vedanta, events or community activities.",
    },
  ]);
  const [isSending, setIsSending] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isSending]);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        requestAnimationFrame(() => launcherRef.current?.focus());
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const viewport = window.visualViewport;

    if (!viewport) return;

    const updateViewport = () => {
      const keyboardInset = Math.max(
        0,
        window.innerHeight - viewport.height - viewport.offsetTop,
      );

      document.documentElement.style.setProperty(
        "--chat-visible-height",
        `${viewport.height}px`,
      );

      document.documentElement.style.setProperty(
        "--chat-keyboard-inset",
        `${keyboardInset}px`,
      );
    };

    updateViewport();

    viewport.addEventListener("resize", updateViewport);
    viewport.addEventListener("scroll", updateViewport);

    return () => {
      viewport.removeEventListener("resize", updateViewport);
      viewport.removeEventListener("scroll", updateViewport);

      document.documentElement.style.removeProperty(
        "--chat-visible-height",
      );

      document.documentElement.style.removeProperty(
        "--chat-keyboard-inset",
      );
    };
  }, [isOpen]);

  const getSessionId = () => {
    const key = "sruti-chat-session";

    let sessionId = sessionStorage.getItem(key);

    if (!sessionId) {
      sessionId = `web-${crypto.randomUUID()}`;
      sessionStorage.setItem(key, sessionId);
    }

    return sessionId;
  };

  const sendMessage = async () => {
    const trimmed = message.trim();

    if (!trimmed || isSending) return;

    setMessages((current) => [
      ...current,
      {
        role: "user",
        text: trimmed,
      },
    ]);

    setMessage("");
    setIsSending(true);

    try {
      if (!API_URL) {
        throw new Error("VITE_CHAT_API_URL is not configured.");
      }

      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
          sessionId: getSessionId(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to contact the assistant.",
        );
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: data.answer,
        },
      ]);
    } catch (error) {
      console.error("Chat request failed:", error);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "Sorry, I’m unable to respond right now. Please try again shortly.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          ref={launcherRef}
          type="button"
          className="chat-launcher"
          onClick={() => setIsOpen(true)}
          aria-label="Open Śruti Digital assistant"
        >
          <span className="chat-launcher-icon" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            </svg>
          </span>

          <span>Ask Śruti</span>
        </button>
      )}

      {isOpen && (
        <section
          className="chat-widget"
          aria-label="Śruti Digital assistant"
        >
          <header className="chat-header">
            <div>
              <strong>Śruti Digital Assistant</strong>
              <span>Vedam · Vedanta · Classes · Events</span>
            </div>

            <button
              type="button"
              className="chat-close"
              onClick={() => {
                setIsOpen(false);
                requestAnimationFrame(() =>
                  launcherRef.current?.focus(),
                );
              }}
              aria-label="Close chat"
            >
              ×
            </button>
          </header>

          <div
            className="chat-messages"
            aria-live="polite"
            aria-busy={isSending}
          >
            {messages.map((item, index) => (
              <div
                key={`${item.role}-${index}`}
                className={`chat-message ${item.role}`}
              >
                {item.text}
              </div>
            ))}

            {isSending && (
              <div
                className="chat-message assistant chat-typing"
                aria-label="Assistant is typing"
              >
                <span />
                <span />
                <span />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <textarea
              ref={inputRef}
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              onKeyDown={handleKeyDown}
              placeholder="Ask about classes or events..."
              rows={1}
              disabled={isSending}
              aria-label="Message Śruti digital assistant"
            />

            <button
              type="button"
              onClick={() => void sendMessage()}
              disabled={!message.trim() || isSending}
              aria-label="Send message"
            >
              ↑
            </button>
          </div>
        </section>
      )}
    </>
  );
}
