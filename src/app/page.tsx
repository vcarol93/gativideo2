"use client";

import dynamic from "next/dynamic";

// Importamos el componente cliente sin SSR
const Home = dynamic(() => import("../components/HomeClient"), { ssr: false });

export default function Page() {
  return <Home />;
}

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
