import { KazakhOrnament } from './KazakhOrnament';

// Героическая секция с фото на фоне
// Чтобы добавить фото: положи файл в public/hero.jpg
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое фото с затемнением и зум-анимацией */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-in"
        style={{
          backgroundImage: 'url(/hero.jpg)',
        }}
      >
        {/* Градиентный оверлей — степь под закат */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/60 via-[var(--burgundy)]/50 to-[var(--gold-dark)]/50" />
      </div>

      {/* Плейсхолдер — под фото, виден только если фото нет */}
      <div className="absolute inset-0 sunset-gradient -z-10" />

      {/* Контент */}
      <div className="relative z-10 text-center px-6 py-20">
        {/* Верхний орнамент — разворачивается */}
        <div className="animate-expand animation-delay-300">
          <KazakhOrnament className="w-64 md:w-96 mx-auto h-12 mb-8 opacity-90" />
        </div>

        {/* Приглашение — появляется сверху */}
        <p className="text-lg md:text-xl text-white/90 mb-4 tracking-wide animate-slide-down animation-delay-500">
          Құрметті қонақтар!
        </p>
        <p className="text-base md:text-lg text-[var(--gold-light)] mb-10 animate-slide-down animation-delay-700">
          Сіздерді біздің үйлену тойымызға шақырамыз
        </p>

        {/* Имена — появляются с масштабированием */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 text-shadow-gold animate-scale-in animation-delay-500">
          Нұрдаулет
        </h1>
        <p className="text-3xl md:text-4xl text-[var(--gold)] my-6 animate-fade-in animation-delay-700">
          &
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-white text-shadow-gold animate-scale-in animation-delay-900">
          Жаңылсын
        </h1>

        {/* Нижний орнамент — разворачивается */}
        <div className="animate-expand animation-delay-1100">
          <KazakhOrnament className="w-64 md:w-96 mx-auto h-12 mt-10 rotate-180 opacity-90" />
        </div>

        {/* Стрелка вниз — появляется последней */}
        <div className="mt-12 animate-bounce animate-slide-up animation-delay-1100">
          <svg
            className="w-8 h-8 mx-auto text-[var(--gold)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
