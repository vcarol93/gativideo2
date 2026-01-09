export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 ">
      <div className="mx-auto max-w-4xl px-6 py-6 flex flex-col gap-3 text-sm text-zinc-500">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-zinc-300">Rativideo</span>
          </p>

          <p className="text-xs">Hecho para pasar el rato 🐭📺</p>
        </div>

        <div className="text-xs text-zinc-600 leading-relaxed">
          <p>
            Modo prueba, <span className="text-zinc-700">puede fallar</span>, no
            pidas mucho que es gratis 😄
          </p>
        </div>
      </div>
    </footer>
  );
}
