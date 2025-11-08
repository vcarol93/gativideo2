"use client";

import { useState, useEffect } from "react";

export default function HomeClient() {
  const canales = [
    {
      nombre: "Telefe",
      url: "https://tvlibree.com/html/fl/?get=VGVsZWZlSEQ=",
      descripcion: "Canal generalista...",
    },
    {
      nombre: "El Trece",
      url: "https://tvlibree.com/html/fl/?get=QXJ0ZWFySEQ",
      descripcion: "El Trece TV...",
    },
    {
      nombre: "Flow Music",
      url: "https://tvlibree.com/html/fl/?get=Rmxvd19NdXNpY19YUA==",
      descripcion: "Canal musical...",
    },
    {
      nombre: "Fox Sports 1",
      url: "https://tvlibree.com/html/fl/?get=Rm94U3BvcnRz",
      descripcion: "Eventos deportivos...",
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
      window.open(canal.url, "_blank");
    } else {
      setIframeUrl(canal.url);
    }
  };

  return (
    <div className="max-w-screen overflow-x-hidden">
      <div className="mx-auto px-4 md:max-w-3xl">
        <main className="border-x border-[#1b1718] flex min-h-screen w-full max-w-3xl flex-col items-start justify-around py-32 px-6 ">
          <h1 className="text-3xl font-semibold pb-3 fuente">Rativideo</h1>
          <p className="text-lg text-[#9f9fa9]">
            Canales en vivo. <br />
            Modo prueba, <span className="text-zinc-800">puede fallar</span>, no
            pidas mucho que es gratis 😄
          </p>

          {/* 📱 Vista MOBILE */}
          {isMobile ? (
            <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {canales.map((canal) => (
                <div
                  key={canal.nombre}
                  className="flex flex-col justify-between rounded-xl border border-zinc-300 bg-zinc-50 p-4 shadow-sm dark:bg-zinc-900 dark:border-zinc-800"
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
                    onClick={() => handleClick(canal)}
                    className="mt-3 w-full rounded-full bg-neutral-800 px-5 py-2 text-white hover:bg-[#383838] dark:hover:bg-[#ccc] dark:text-black"
                  >
                    Ver canal 📺
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="mt-6 w-full relative pb-[56.25%]">
                <iframe
                  id="iframe"
                  src={iframeUrl}
                  className="absolute top-0 left-0 w-full h-full rounded shadow-lg"
                  frameBorder={0}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
                  title="Live Video"
                />
              </div>

              <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-4 w-full sm:justify-center">
                {canales.map((canal) => (
                  <button
                    key={canal.nombre}
                    onClick={() => handleClick(canal)}
                    className="flex h-12 w-full sm:w-[158px] items-center justify-center gap-2 rounded-full bg-neutral-800 text-white transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
                  >
                    {canal.nombre}
                  </button>
                ))}
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
