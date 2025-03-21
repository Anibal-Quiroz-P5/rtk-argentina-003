"use client";

import { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit message");
      }

      const { url } = await response.json();
      window.location.href = url; // Redirige al usuario
    } catch (err) {
      console.error(err);
      setError("Error al enviar el mensaje");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-2">
      <textarea
        className="border-2 border-blue-400 p-2"
        name="text"
        placeholder="Hola perro"
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="rounded bg-blue-400 p-2" type="submit">
        Enviar
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

