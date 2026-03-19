import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      {/* окно чата */}
      {open && (
        <div
          style={{
            width: 300,
            height: 400,
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            marginBottom: 10,
            display: "flex",
            flexDirection: "column"
          }}
        >
          {/* header */}
          <div
            style={{
              padding: 10,
              borderBottom: "1px solid #eee",
              fontWeight: "bold"
            }}
          >
            Chat
          </div>

          {/* messages */}
          <div style={{ flex: 1, padding: 10 }}>Привет 👋</div>

          {/* input */}
          <div
            style={{
              padding: 10,
              borderTop: "1px solid #eee"
            }}
          >
            <input
              type="text"
              placeholder="Написать..."
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 6,
                border: "1px solid #ccc"
              }}
            />
          </div>
        </div>
      )}

      {/* кнопка */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "none",
          background: "#007bff",
          color: "#fff",
          fontSize: 24,
          cursor: "pointer"
        }}
      >
        💬
      </button>
    </div>
  );
}
