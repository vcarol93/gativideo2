import React from "react";

const Chanel = () => {
  return (
    <>
      <article class="player-card">
        <div class="iframe-wrap" style="width: 100%;">
          <iframe
            class="shadow-lg rounded"
            width="100%"
            style="aspect-ratio:16/9;"
            name="iframe"
            id="iframe"
            title="Live Video"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen=""
            src="/html/fl/?get=VGVsZWZlSEQ="
            scrolling="no"
          ></iframe>
        </div>
        <div class="player-actions">
          <p class="ops">
            <strong>Opciones:</strong>
          </p>
          <div class="actions-row">
            <nav class="server-links" aria-label="Opciones de señal">
              <a
                class="btn btn-md"
                target="iframe"
                href="/html/fl/?get=VGVsZWZlSEQ="
                onclick="document.getElementById ('iframe').src='/html/fl/?get=VGVsZWZlSEQ='; return false;"
              >
                Opción 1 (FL)
              </a>
            </nav>

            <a class="btn ghost" id="btn-full" href="#">
              Pantalla completa
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default Chanel;
