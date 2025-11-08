"use client";

import { useState } from "react";

export default function Home(): JSX.Element {
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
      nombre: "Flow Music",
      url: "https://tvlibree.com/html/fl/?get=Rmxvd19NdXNpY19YUA==",
      descripcion: "Canal musical en vivo con videos y conciertos.",
    },
    {
      nombre: "Fox Sports 1",
      url: "https://tvlibree.com/html/fl/?get=Rm94U3BvcnRz",
      descripcion: "Eventos deportivos, fútbol, Fórmula 1 y más.",
    },
  ];

  // 🔍 Detectamos si es mobile al cargar la página
  const isClient = typeof window !== "undefined";
  const isMobileCheck = isClient
    ? /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
    : false;

  const [isMobile] = useState(isMobileCheck);
  const [iframeUrl, setIframeUrl] = useState(canales[0].url);

  const handleClick = (canal: (typeof canales)[0]) => {
    if (isMobile) {
      // En mobile, abrir en nueva pestaña
      window.open(canal.url, "_blank");
    } else {
      // En desktop, mostrar en el iframe
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

          <div className="relative flex h-4 w-full  before:absolute before:-left-[100vw] before:h-4 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-black)]/5 dark:before:[--pattern-foreground:var(--color-white)]/5"></div>

          {/* 📱 Vista MOBILE */}
          {isMobile && (
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
          )}

          {/* 💻 Vista DESKTOP */}
          {!isMobile && (
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

// "use client";

// import { useEffect, useState } from "react";

// export default function Home(): JSX.Element {
//   // URLs para desktop y mobile de cada canal

//   //
//   const canales = [
//     {
//       nombre: "Telefe",
//       desktopUrl: "https://tvlibree.com/html/fl/?get=VGVsZWZlSEQ=",
//       mobileUrl: "https://tvlibree.com/en-vivo/telefe/hl.html",
//     },
//     {
//       nombre: "El Trece",
//       desktopUrl: "https://tvlibree.com/html/fl/?get=QXJ0ZWFySEQ",
//       mobileUrl:
//         "https://tvlibree.com/html/dash.html?get=aHR0cHM6Ly9saXZlLTAxLTAyLWVsdHJlY2Uudm9kZ2MubmV0L2VsdHJlY2V0di9pbmRleC5tM3U4",
//     },
//     {
//       nombre: "Flow Music",
//       desktopUrl: "https://tvlibree.com/html/fl/?get=Rmxvd19NdXNpY19YUA==",
//       mobileUrl: "https://tvlibree.com/html/fl/?get=Rmxvd19NdXNpY18x",
//     },
//     {
//       nombre: "Fox Sports 1",
//       desktopUrl: "https://tvlibree.com/html/fl/?get=Rm94U3BvcnRz",
//       mobileUrl: "https://tvlibree.com/html/fl/?get=Rm94U3BvcnRz",
//     },
//   ];

//   const [isMobile, setIsMobile] = useState(false);
//   const [iframeUrl, setIframeUrl] = useState(canales[0].desktopUrl);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const mobileCheck = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
//       setIsMobile(mobileCheck);
//       setIframeUrl(mobileCheck ? canales[0].mobileUrl : canales[0].desktopUrl);
//     }
//   }, []);

//   const handleClick = (canal: (typeof canales)[0]) => {
//     setIframeUrl(isMobile ? canal.mobileUrl : canal.desktopUrl);
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-around py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
//           Rativideo
//         </h1>
//         <p className="text-lg text-zinc-600 dark:text-zinc-400">
//           Canales (algunos) en vivo. Modo prueba, no pidas mucho que es gratis.
//         </p>

//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-4">
//           {canales.map((canal) => (
//             <button
//               key={canal.nombre}
//               className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//               onClick={() => handleClick(canal)}
//             >
//               {canal.nombre}
//             </button>
//           ))}
//         </div>

//         <div className="mt-6 w-full flex justify-center">
//           <iframe
//             id="iframe"
//             src={iframeUrl}
//             width="100%"
//             style={{ aspectRatio: "16/9" }}
//             className="rounded shadow-lg"
//             frameBorder={0}
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//             title="Live Video"
//           />
//         </div>
//       </main>
//     </div>
//   );
//}

//////////////////  CHROMECAST EXAMPLE  //////////////////
// "use client";

// import { useEffect, useState } from "react";

// // 🔹 Declaración mínima para evitar errores de TypeScript
// declare global {
//   interface Window {
//     __onGCastApiAvailable?: (isAvailable: boolean) => void;
//     cast?: typeof cast;
//     chrome?: typeof chrome;
//   }
// }

// export default function Home(): JSX.Element {
//   const [currentVideoUrl, setCurrentVideoUrl] = useState("");

//   // ✅ Inicialización de Google Cast
//   useEffect(() => {
//     window.__onGCastApiAvailable = (isAvailable: boolean) => {
//       if (!isAvailable || !window.cast || !window.chrome) return;

//       const context = window.cast.framework.CastContext.getInstance();

//       context.setOptions({
//         receiverApplicationId:
//           window.chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
//         autoJoinPolicy: window.cast.framework.AutoJoinPolicy.ORIGIN_SCOPED,
//       });

//       context.addEventListener(
//         window.cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
//         (event: any) => {
//           if (
//             event.sessionState ===
//             window.cast.framework.SessionState.SESSION_STARTED
//           ) {
//             if (currentVideoUrl) castVideo(currentVideoUrl);
//           }
//         }
//       );
//     };
//   }, [currentVideoUrl]);

//   // ✅ Reproduce el video localmente y lo envía si hay sesión Cast activa
//   const playVideo = (url: string): void => {
//     setCurrentVideoUrl(url);

//     const video = document.getElementById(
//       "videoElement"
//     ) as HTMLVideoElement | null;
//     if (video) {
//       video.src = url;
//       void video
//         .play()
//         .catch(() => console.warn("No se pudo reproducir el video."));
//     }

//     const session =
//       window.cast?.framework?.CastContext.getInstance()?.getCurrentSession?.();

//     if (session) castVideo(url);
//   };

//   // ✅ Envía el video al Chromecast
//   const castVideo = (url: string): void => {
//     if (!window.chrome || !window.cast) return;

//     try {
//       const mediaInfo = new window.chrome.cast.media.MediaInfo(
//         url,
//         "video/mp4"
//       );
//       const request = new window.chrome.cast.media.LoadRequest(mediaInfo);
//       const session =
//         window.cast.framework.CastContext.getInstance().getCurrentSession();

//       if (session) {
//         session
//           .loadMedia(request)
//           .then(() => console.log("📡 Video enviado a Chromecast:", url))
//           .catch((err: unknown) =>
//             console.error("❌ Error al enviar a Chromecast:", err)
//           );
//       }
//     } catch (error) {
//       console.error("Error al intentar castear:", error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-around py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             Welcome a Gativideo
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Elige un canal para reproducir
//           </p>
//         </div>

//         {/* 🔹 Botones de canales */}
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <button
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 text-white px-5 transition-colors hover:bg-blue-700 md:w-[158px]"
//             onClick={() =>
//               playVideo(
//                 "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
//               )
//             }
//           >
//             Canal 1
//           </button>

//           <button
//             onClick={() =>
//               playVideo(
//                 "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
//               )
//             }
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//           >
//             Canal 2
//           </button>

//           <button
//             onClick={() =>
//               playVideo("https://tvlibree.com/html/fl/?get=VGVsZWZlSEQ=")
//             }
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//           >
//             Canal 3
//           </button>
//         </div>

//         {/* 🔹 Elemento video local */}
//         <video
//           id="videoElement"
//           width={640}
//           controls
//           className="rounded shadow-md mt-6"
//         >
//           Tu navegador no soporta el video.
//         </video>

//         {/* 🔹 Botón Chromecast */}
//         {typeof window !== "undefined" && (
//           // @ts-ignore - Google define este custom element
//           <google-cast-launcher id="castButton" className="w-12 h-12 mt-4" />
//         )}
//       </main>
//     </div>
//   );
// }
