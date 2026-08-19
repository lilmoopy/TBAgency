"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  role: "assistant" | "user";
  text: string;
};

const welcomeMessage: Message = {
  id: "welcome",
  role: "assistant",
  text: "Hi there — I'm the TB Agency assistant. Ask about services, pricing, or booking a call. (Live chat coming soon.)",
};

const quickReplies = [
  "What services do you offer?",
  "Book a call",
  "Tell me about your team",
];

const cannedResponses: Record<string, string> = {
  "what services do you offer?":
    "We run strategy, paid ads (10% of spend), influencer, creative/UGC, organic social, email/SMS, and customer support. Pricing is on the Pricing page.",
  "book a call":
    "You can book a strategy call anytime from our contact page — we'll map goals, find bottlenecks, and leave you with a custom blueprint.",
  "tell me about your team":
    "We're a London-to-Chicago team built around your business. Meet Ben and Thomas on the Team page.",
};

function getReply(text: string) {
  const key = text.trim().toLowerCase();
  return (
    cannedResponses[key] ??
    "Thanks for your message. Live chat isn't connected yet — head to Contact to book a call and we'll get back to you fast."
  );
}

function ChatBoxIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M5 5.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9.8L5 20.5V7.5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="11" r="1" fill="currentColor" />
      <circle cx="12" cy="11" r="1" fill="currentColor" />
      <circle cx="15" cy="11" r="1" fill="currentColor" />
    </svg>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          text: getReply(trimmed),
        },
      ]);
      setIsTyping(false);
    }, 900);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          className="flex h-[min(520px,calc(100vh-6rem))] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/10"
          role="dialog"
          aria-label="Chat assistant"
        >
          <header className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <ChatBoxIcon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">TB Assistant</p>
                <p className="text-xs text-muted">Typically replies instantly</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-foreground"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                <path
                  d="M5 5l10 10M15 5 5 15"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-md bg-accent text-accent-foreground"
                      : "rounded-bl-md border border-border bg-background text-body"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-border bg-background px-3.5 py-3">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => sendMessage(reply)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-strong transition-colors hover:bg-hover hover:text-foreground"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border px-3 py-3"
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-xl border border-input-border bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-faint focus:border-input-focus-border"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                <path
                  d="M4 10l12-6-4 6 4 6-12-6z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-black/15 transition-transform hover:scale-105 hover:bg-accent-hover"
      >
        {isOpen ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <ChatBoxIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
