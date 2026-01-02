import Countdown from '@/components/Countdown';
import HeroSection from '@/components/HeroSection';
import { KazakhOrnament, OrnamentDivider, OrnamentPattern, OrnamentFrame } from '@/components/KazakhOrnament';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--cream)]">
      {/* Hero секция с фото на фоне */}
      <HeroSection />

      {/* Основной контент */}
      <div className="relative">
        {/* Фоновый узор */}
        <OrnamentPattern />

        <div className="relative z-10 max-w-2xl mx-auto px-6 py-16">
          {/* Дата и место */}
          <OrnamentFrame className="mb-16 animate-fade-in-up">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[var(--gold)]/30">
              <div className="text-center mb-8">
                <p className="text-[var(--burgundy)] text-lg mb-3 tracking-wide">Той күні</p>
                <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--deep-blue)]">
                  9 Қаңтар 2026
                </p>
                <p className="text-2xl text-[var(--gold)] mt-3 font-semibold">18:00</p>
              </div>

              <OrnamentDivider className="w-32 mx-auto my-8" />

              <div className="text-center">
                <p className="text-[var(--burgundy)] text-lg mb-3 tracking-wide">Мекен-жай</p>
                <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--deep-blue)]">
                  Дослық Тойханасы
                </p>
              </div>
            </div>
          </OrnamentFrame>

          {/* Таймер */}
          <section className="text-center mb-16 animate-fade-in-up animation-delay-200">
            <p className="text-xl text-[var(--deep-blue)] mb-8 font-semibold tracking-wide">
              Тойға дейін қалды
            </p>
            <Countdown />
          </section>

          {/* Орнамент разделитель */}
          <div className="flex justify-center mb-16">
            <KazakhOrnament className="w-80 h-12" />
          </div>

          {/* Пожелание */}
          <section className="text-center animate-fade-in-up animation-delay-400">
            <div className="bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent py-8 px-4 rounded-lg">
              <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[var(--deep-blue)] italic">
                «Ақ жол тілейміз!»
              </p>
              <p className="text-[var(--burgundy)] mt-4 text-lg">
                Сіздерді күтеміз
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Футер */}
      <footer className="bg-[var(--deep-blue)] py-8">
        <KazakhOrnament className="w-full max-w-md mx-auto h-10" />
        <p className="text-center text-[var(--gold-light)] mt-4 text-sm opacity-70">
          Нұрдаулет & Жаңылсын • 2026
        </p>
      </footer>
    </main>
  );
}
