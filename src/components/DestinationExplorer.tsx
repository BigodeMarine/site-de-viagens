"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { destinos } from "@/data/destinos";
import CardDestino from "./CardDestino/CardDestino";
import styles from "@/app/destinos/Destinos.module.css";
const categories = ["Todos", "Natureza", "Cultura", "Família", "Praia"];
export default function DestinationExplorer() {
  const params = useSearchParams();
  const initial = params.get("experiencia");
  const [category, setCategory] = useState(
    initial && categories.includes(initial) ? initial : "Todos",
  );
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState(params.get("regiao") || "");
  const normalize = (s: string) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const filtered = destinos.filter(
    (d) =>
      (category === "Todos" || d.categoria === category) &&
      (!region || d.regiao === region) &&
      normalize(d.nome + " " + d.regiao).includes(normalize(query)),
  );
  function reset() {
    setQuery("");
    setCategory("Todos");
    setRegion("");
  }
  return (
    <>
      <div className={styles.controls}>
        <div
          className={styles.filters}
          role="group"
          aria-label="Filtrar por experiência"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
        <label className={styles.search}>
          <span aria-hidden="true">⌕</span>
          <input
            aria-label="Buscar destino ou região"
            placeholder="Qual é o seu próximo destino?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      {region && (
        <p className={styles.region}>
          Região: {region}{" "}
          <button onClick={() => setRegion("")}>Remover filtro ×</button>
        </p>
      )}
      <p className={styles.count} aria-live="polite">
        {filtered.length}{" "}
        {filtered.length === 1
          ? "destino para descobrir"
          : "destinos para descobrir"}
      </p>
      <div className={styles.grid}>
        {filtered.map((d) => (
          <CardDestino key={d.id} destino={d} />
        ))}
      </div>
      {!filtered.length && (
        <div className={styles.empty}>
          <h2>Um novo caminho para explorar.</h2>
          <p>Não encontramos destinos com esses filtros. Tente outra busca.</p>
          <button className="button" onClick={reset}>
            Ver todos os destinos
          </button>
        </div>
      )}
    </>
  );
}
