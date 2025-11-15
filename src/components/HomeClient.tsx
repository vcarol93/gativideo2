"use client";

import { useState, useEffect } from "react";

export default function HomeClient() {
  const canales = [
    {
      nombre: "Telefe",
      url: "https://tvlibree.com/html/fl/?get=VGVsZWZlSEQ=",
      descripcion:
        "Canal generalista con programas en vivo, noticias y entretenimiento.",
    },
    {
      nombre: "El Trece",
      url: "https://tvlibree.com/html/fl/?get=QXJ0ZWFySEQ",
      descripcion:
        "El Trece TV Argentina, shows, noticieros y programación familiar.",
    },
    {
      nombre: "El Nueve",
      url: "https://tvlibree.com/html/fl/?get=Q2FuYWw5&lang=1",
      descripcion: "Canal de TV de Argentina. Noticias y actualidad.",
    },
    {
      nombre: "Telemax",
      url: "https://tvlibree.com/html/fl/?get=VGVsZW1heA",
      descripcion: "Es un canal del sistema de cable TeleCentro de Argentina ",
    },
    {
      nombre: "Antena 3",
      url: "https://tvlibree.com/html/fl/?get=QW50ZW5hXzM=",
      descripcion: "Canal de televisión generalista español.",
    },
    {
      nombre: "Nat Geo",
      url: "https://tvlibree.com/html/fl/?get=TmF0R2VvSEQ=",
      descripcion:
        "Sobre exploración científica, historia, naturaleza y cultura, entre otros.",
    },
    {
      nombre: "Animal Planet",
      url: "https://tvlibree.com/html/fl/?get=QW5pbWFsUGxhbmV0",
      descripcion: "Documentales de vida salvaje y naturaleza.",
    },
    {
      nombre: "Discovery Channel",
      url: "https://tvlibree.com/html/fl/?get=RGlzY292ZXJ5SEQ=",
      descripcion: "Documentales",
    },
    {
      nombre: "History Channel",
      url: "https://tvlibree.com/html/fl/?get=SGlzdG9yeUhE",
      descripcion: "Documentales",
    },
    {
      nombre: "Cinecanal",
      url: "https://tvlibree.com/html/fl/?get=Q2luZWNhbmFsSEQ=",
      descripcion: "Peliculas de estreno y clásicos del cine.",
    },
    {
      nombre: "TNT",
      url: "https://tvlibree.com/html/fl/?get=VE5UX0hEX0FyZw==",
      descripcion: "Películas, series.",
    },
    {
      nombre: "Warner Channel",
      url: "https://tvlibree.com/html/fl/?get=V2FybmVySEQ=",
      descripcion: "Películas, series.",
    },
    {
      nombre: "Star Channel",
      url: "https://tvlibree.com/html/fl/?get=Rk9YSEQ=",
      descripcion: "Películas, series.",
    },
    {
      nombre: "Studio Universal",
      url: "https://tvlibree.com/html/fl/?get=U3R1ZGlvX1VuaXZlcnNhbA==",
      descripcion: "Películas, series.",
    },
    {
      nombre: "Sony Channel",
      url: "https://tvlibree.com/html/fl/?get=U29ueUhE",
      descripcion: "Películas, series.",
    },
    {
      nombre: "Paramount Network",
      url: "https://tvlibree.com/html/fl/?get=UGFyYW1vdW50",
      descripcion: "Películas, series.",
    },
    {
      nombre: "AXN",
      url: "https://tvlibree.com/html/fl/?get=QVhOSEQ=",
      descripcion: "Películas, series.",
    },
    {
      nombre: "HBO",
      url: "https://tvlibree.com/html/fl/?get=SEJPSEQ=",
      descripcion: "Películas, series.",
    },
    {
      nombre: "HBO 2",
      url: "https://tvlibree.com/html/fl/?get=SEJPXzI=",
      descripcion: "Películas, series.",
    },
    {
      nombre: "HBO Plus",
      url: "https://tvlibree.com/html/fl/?get=SEJPX1BsdXM=",
      descripcion: "Películas, series.",
    },
    {
      nombre: "Universal Cinema",
      url: "https://tvlibree.com/html/fl/?get=VW5pdmVyc2FsX0NpbmVtYQ==",
      descripcion: "Películas, series.",
    },
    {
      nombre: "Cartoon Network",
      url: "https://tvlibree.com/html/fl/?get=Q2FydG9vbk5ldHdvcms=",
      descripcion: "Kids y familia.",
    },
    {
      nombre: "Nickelodeon",
      url: "https://tvlibree.com/html/fl/?get=RGlzY292ZXJ5X0tpZHM=",
      descripcion: "Kids y familia.",
    },
    {
      nombre: "DreamWorks",
      url: "https://tvlibree.com/html/fl/?get=RHJlYW13b3Jrcw==",
      descripcion: "Kids y familia.",
    },
    {
      nombre: "Flow Music",
      url: "https://tvlibree.com/html/fl/?get=Rmxvd19NdXNpY19YUA==",
      descripcion: "Canal musical en vivo con videos y conciertos.",
    },
    {
      nombre: "TyC Sports",
      url: "https://la14hd.com/vivo/canales.php?stream=tycsports",
      descripcion: "Deportes en vivo",
    },
    {
      nombre: "TNT Sports",
      url: "https://tvlibree.com/html/fl/?get=VE5UX1Nwb3J0c19IRA",
      descripcion: "Deportes en vivo",
    },
    {
      nombre: "DSports",
      url: "https://la14hd.com/vivo/canales.php?stream=dsports",
      descripcion: "Deportes en vivo",
    },
    {
      nombre: "ESPN 1",
      url: "https://tvlibree.com/html/fl/?get=RVNQTjJIRA",
      descripcion: "Deportes en vivo",
    },
    {
      nombre: "ESPN 3",
      url: "https://tvlibree.com/html/fl/?get=RVNQTjM",
      descripcion: "Deportes en vivo",
    },
    {
      nombre: "NBA TV",
      url: "https://tvlibree.com/html/fl/?get=TkJBX1RW",
      descripcion:
        "Canal oficial de la NBA con partidos, resúmenes y análisis.",
    },
    {
      nombre: "Fox Sports 1",
      url: "https://tvlibree.com/html/fl/?get=Rm94U3BvcnRz",
      descripcion: "Eventos deportivos, fútbol, Fórmula 1 y más.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [iframeUrl, setIframeUrl] = useState(canales[0].url);

  useEffect(() => {
    // Detectamos por ancho de pantalla
    const check = () => setIsMobile(window.innerWidth < 768); // <768px lo consideramos mobile
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleClick = (canal: (typeof canales)[0]) => {
    if (isMobile) {
      window.open(canal.url, "_blank", "noopener,noreferrer");
    } else {
      setIframeUrl(canal.url);
    }
  };

  return (
    <div className="max-w-screen overflow-x-hidden">
      <div className="mx-auto px-4 md:max-w-3xl">
        <main className="border-x border-[#1b1718] flex min-h-screen w-full max-w-3xl flex-col items-start justify-around py-32 px-6 ">
          <h1 className="text-3xl md:text-5xl font-semibold pb-3 fuente">
            🐭 Rativideo
          </h1>
          <div className="relative flex h-4 w-full before:absolute before:-left-[100vw] before:h-4 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,rgba(161,161,170,0.1)_0,rgba(161,161,170,0.1)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]"></div>
          <p className="my-4 text-lg text-[#9f9fa9]">
            Canales en vivo. <br />
            Modo prueba, <span className="text-zinc-700">puede fallar</span>, no
            pidas mucho que es gratis 😄
          </p>
          <div className="relative flex h-4 w-full before:absolute before:-left-[100vw] before:h-4 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,rgba(161,161,170,0.1)_0,rgba(161,161,170,0.1)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]"></div>

          {/* 📱 Vista MOBILE */}
          {isMobile ? (
            <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {canales.map((canal) => (
                <div
                  key={canal.nombre}
                  className="flex flex-col justify-between rounded-xl p-4 shadow-sm bg-zinc-900 "
                >
                  <div>
                    <h2 className="text-lg font-semibold text-black dark:text-white">
                      {canal.nombre}
                    </h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                      {canal.descripcion}
                    </p>
                  </div>
                  <button
                    aria-label={`Ver canal ${canal.nombre}`}
                    onClick={() => handleClick(canal)}
                    className="mt-3 w-full rounded-full bg-neutral-800 px-5 py-2 text-white hover:bg-[#383838] "
                  >
                    Ver canal 📺
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full">
              <div className="my-6 w-full aspect-video">
                <iframe
                  id="iframe"
                  src={iframeUrl}
                  className=" w-full h-full rounded shadow-lg"
                  frameBorder={0}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
                  title="Live Video"
                />
              </div>

              <div className="relative flex h-4 w-full  border-grid before:absolute before:-left-[100vw] before:h-4 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-black)]/5 dark:before:[--pattern-foreground:var(--color-white)]/5"></div>

              <div className="mt-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {canales.map((canal) => (
                    <div
                      key={canal.nombre}
                      className="flex flex-col justify-between rounded-xl border border-neutral-800 p-4 shadow-sm "
                    >
                      <div>
                        <h2 className="text-lg font-semibold text-[#9f9fa9]">
                          {canal.nombre}
                        </h2>
                        <p className="font-mono text-sm text-[oklch(0.552_0.016_285.938)] mt-1">
                          {canal.descripcion}
                        </p>
                      </div>
                      <button
                        aria-label={`Ver canal ${canal.nombre}`}
                        onClick={() => handleClick(canal)}
                        className="cursor-pointer mt-3 w-full rounded-full bg-neutral-800 px-5 py-2 hover:bg-white hover:text-black text-[#9f9fa9]"
                      >
                        Ver canal 📺
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {isMobile && (
            <p className="mt-4 text-sm text-zinc-500 text-center">
              En móvil, los canales se abren en otra pestaña para mejor
              compatibilidad 📱
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
