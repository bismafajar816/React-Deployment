import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "20px 1fr 20px",
        alignItems: "center",
        justifyItems: "center",
        minHeight: "100vh",
        padding: "16px",
        fontFamily: "'Georgia, serif'",
        backgroundColor: "#f5f5f5",
        color: "#3e3e3e",
      }}
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center",
        }}
      >
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          style={{ opacity: 0.8 }}
        />
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#4b3832",
            marginBottom: "8px",
          }}
        >
          Welcome to My First Deployment
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "#5c5c5c",
            maxWidth: "600px",
          }}
        >
          This is my first step into the world of web development. Build, deploy, and
          share your creations with the world using Next.js and modern tools.
        </p>
      </main>
      <footer
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 16px",
          borderTop: "1px solid #ccc",
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#4b3832",
              fontSize: "0.9rem",
              transition: "color 0.3s",
            }}
          >
            Read Docs
          </a>
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#4b3832",
              fontSize: "0.9rem",
              transition: "color 0.3s",
            }}
          >
            Learn Next.js
          </a>
        </div>
        <button
          style={{
            backgroundColor: "#4b3832",
            color: "#fff",
            padding: "6px 12px",
            fontSize: "0.8rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "10px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#3a2e2a")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#4b3832")
          }
        >
          Deploy
        </button>
      </footer>
    </div>
  );
}
