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
        padding: "8px",
        paddingBottom: "20px",
        gap: "16px",
        fontFamily: "'Arial, sans-serif'",
        background: "linear-gradient(135deg, #ff7eb3, #ff758c, #ff6473)",
        color: "#fff",
      }}
    >
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Image
          style={{ filter: "drop-shadow(0 0 10px #fff)" }}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            margin: 0,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          Welcome to My First Deployment!
        </h1>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.5",
            margin: 0,
            maxWidth: "500px",
          }}
        >
          You’ve successfully deployed your first app. Explore the possibilities
          of web development with Next.js and take your creativity to the next
          level.
        </p>
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#000",
              color: "#fff",
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: "20px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              transition: "background 0.3s ease",
            }}
          >
            Deploy More Apps
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
              color: "#000",
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: "20px",
              boxShadow: "0 4px 10px rgba(255, 255, 255, 0.3)",
              transition: "background 0.3s ease",
            }}
          >
            Read Docs
          </a>
        </div>
      </main>
      <footer
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "10px 0",
        }}
      >
        <a
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#fff",
            transition: "color 0.3s ease",
          }}
        >
          Learn Next.js
        </a>
        <a
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#fff",
            transition: "color 0.3s ease",
          }}
        >
          Explore Templates
        </a>
      </footer>
    </div>
  );
}
