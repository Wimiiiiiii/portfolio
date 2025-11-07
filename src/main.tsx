import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Minimal error boundary to surface runtime errors in UI
class RootErrorBoundary extends React.Component<{ children: React.ReactNode }, { error?: any }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = {};
  }
  componentDidCatch(error: any, info: any) {
    // Log and show error
    console.error("Render error:", error, info);
    this.setState({ error });
  }
  render() {
    if (this.state.error) {
      const msg = this.state.error?.message ?? String(this.state.error);
      return (
        <div style={{ padding: 16, color: "#e2e8f0", background: "#0b1220", fontFamily: "ui-sans-serif, system-ui" }}>
          <h1 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Une erreur est survenue</h1>
          <pre style={{ whiteSpace: "pre-wrap", lineHeight: 1.4, color: "#94a3b8" }}>{msg}</pre>
          <p style={{ marginTop: 12, fontSize: 12, color: "#64748b" }}>Consultez la console (F12 &gt; Console) pour plus de détails.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Element racine #root introuvable dans index.html");
}
const root = createRoot(rootElement);

// Show any boot errors (failed imports, etc.) in the UI
async function boot() {
  try {
    const App = (await import("./App")).default;
    root.render(
      <StrictMode>
        <RootErrorBoundary>
          <App />
        </RootErrorBoundary>
      </StrictMode>
    );
  } catch (err: any) {
    console.error("Boot error:", err);
    const msg = err?.message ?? String(err);
    root.render(
      <div style={{ padding: 16, color: "#e2e8f0", background: "#0b1220", fontFamily: "ui-sans-serif, system-ui" }}>
        <h1 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Erreur au démarrage</h1>
        <pre style={{ whiteSpace: "pre-wrap", lineHeight: 1.4, color: "#94a3b8" }}>{msg}</pre>
        <p style={{ marginTop: 12, fontSize: 12, color: "#64748b" }}>Consultez la console (F12 &gt; Console) pour plus de détails.</p>
      </div>
    );
  }
}

// Also surface unhandled rejections
window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason);
});

boot();
