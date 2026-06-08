'use client';

import React, { useState, useEffect, useMemo } from 'react';

// ===== IMAGENS DOS PRODUTOS =====
const IMAGES = {
  img01: '/produtos/01.jpg',
  img02: '/produtos/02.jpg',
  img03: '/produtos/03.jpg',
  img04: '/produtos/04.jpg',
  img05: '/produtos/05.jpg',
  img06: '/produtos/06.jpg',
  img07: '/produtos/07.jpg',
  img08: '/produtos/08.jpg',
  img09: '/produtos/09.jpg',
  img10: '/produtos/10.jpg',
  img11: '/produtos/11.jpg',
  img12: '/produtos/12.jpg',
  img13: '/produtos/13.jpg',
  img14: '/produtos/14.jpg',
  img15: '/produtos/15.jpg',
  img16: '/produtos/16.jpg',
  img17: '/produtos/17.jpg',
};

// ===== PALETA FERRACINI =====
const COLORS = {
  bg: '#F4F0EA',
  bgSoft: '#EBE5DC',
  bgCard: '#FFFFFF',
  bgDark: '#1A1A1A',
  black: '#1A1A1A',
  blackSoft: '#2D2D2D',
  red: '#D9001E',
  redDeep: '#B30018',
  redSoft: '#FFE8EB',
  textMuted: '#6B6660',
  textSoft: '#8C8680',
  border: '#DDD6C9',
  borderSoft: '#E8E2D5',
  green: '#25D366',
  gold: '#B8935A',
};

// ===== CATÁLOGO FERRACINI MANAUARA =====
const PRODUCTS = [
  // SOCIAL
  { id: 4, name: 'Kingston', desc: 'Derby social caramelo e preto, couro granulado premium, sola bicolor', price: 379.90, image: IMAGES.img04, category: 'social', range: 'ate-380', details: ['Derby com cadarço', 'Couro granulado premium', 'Sola bicolor anatômica', 'Bico arredondado clássico'] },
  { id: 11, name: 'Porter Derby', desc: 'Derby caramelo e preto, couro liso, sola EVA levíssima', price: 449.90, image: IMAGES.img11, category: 'social', range: '380-500', details: ['Derby com cadarço', 'Couro liso premium', 'Sola EVA branca', 'Forro confortável'] },

  // MOCASSIM
  { id: 1, name: 'Mali', desc: 'Mocassim nobuck clássico em 3 cores, elegante e confortável', price: 329.90, image: IMAGES.img01, category: 'mocassim', range: 'ate-380', details: ['Nobuck premium', 'Design penny loafer', 'Sola flexível', 'Disponível em 3 cores'] },
  { id: 3, name: 'Gante Slip', desc: 'Slip-on aberto atrás, couro granulado, confortável o dia todo', price: 369.90, image: IMAGES.img03, category: 'mocassim', range: 'ate-380', details: ['Slip-on traseiro aberto', 'Couro granulado premium', 'Sola EVA branca', 'Forro em tecido macio'] },
  { id: 5, name: 'Mocassim Gante', desc: 'Penny loafer couro granulado em 3 cores, versátil e elegante', price: 399.90, image: IMAGES.img05, category: 'mocassim', range: '380-500', details: ['Penny loafer clássico', 'Couro granulado premium', 'Disponível em 3 cores', 'Sola anatômica'] },
  { id: 6, name: 'Malta', desc: 'Mocassim social couro com detalhe perfurado, sofisticado', price: 399.90, image: IMAGES.img06, category: 'mocassim', range: '380-500', details: ['Couro liso premium', 'Detalhe perfurado na alça', 'Sola confortável', 'Design social elegante'] },
  { id: 7, name: 'Full', desc: 'Penny loafer caramelo e preto, sola branca contrastante', price: 419.90, image: IMAGES.img07, category: 'mocassim', range: '380-500', details: ['Penny loafer moderno', 'Couro liso premium', 'Sola branca contrastante', 'Forro em couro'] },
  { id: 10, name: 'Porter', desc: 'Mocassim penny loafer caramelo e preto, sola EVA, casual chique', price: 449.90, image: IMAGES.img10, category: 'mocassim', range: '380-500', details: ['Penny loafer contemporâneo', 'Couro liso premium', 'Sola EVA confortável', 'Disponível em 2 cores'] },

  // SNEAKER
  { id: 2, name: 'Vox', desc: 'Sneaker court com detalhe zíper lateral, 3 cores, estilo urbano', price: 359.90, image: IMAGES.img02, category: 'sneaker', range: 'ate-380', details: ['Couro liso premium', 'Detalhe zíper lateral', 'Cadarço encerado', 'Sola plataforma flat'] },
  { id: 8, name: 'Energy', desc: 'Sneaker plataforma alta em couro premium, 3 cores marcantes', price: 429.90, image: IMAGES.img08, category: 'sneaker', range: '380-500', details: ['Couro premium', 'Plataforma elevada chunky', 'Disponível em 3 cores', 'Sola ultra confortável'] },
  { id: 9, name: 'Still', desc: 'Sneaker sola waffle, couro e camurça, design exclusivo', price: 439.90, image: IMAGES.img09, category: 'sneaker', range: '380-500', details: ['Sola waffle diferenciada', 'Couro e camurça premium', 'Disponível em 3 cores', 'Design plataforma alto'] },
  { id: 12, name: 'Max', desc: 'Sneaker court branco e marrom, estilo retro premium', price: 449.90, image: IMAGES.img12, category: 'sneaker', range: '380-500', details: ['Couro premium branco', 'Painel em camurça', 'Sola plataforma goma', 'Design court retro'] },
  { id: 13, name: 'Vyper Knit', desc: 'Tênis knit ultra leve com câmara de ar, 2 cores exclusivas', price: 459.90, image: IMAGES.img13, category: 'sneaker', range: '380-500', details: ['Malha knit premium', 'Câmara de ar no salto', 'Ultra leve', 'Disponível em 2 cores'] },
  { id: 14, name: 'Max Sport', desc: 'Sneaker court bege e preto com 3 listras, estilo esportivo', price: 459.90, image: IMAGES.img14, category: 'sneaker', range: '380-500', details: ['Camurça e couro premium', '3 listras contrastantes', 'Sola plataforma goma', 'Design esportivo retro'] },
  { id: 15, name: 'Vyper', desc: 'Sneaker couro liso com air unit no salto, branco e preto', price: 479.90, image: IMAGES.img15, category: 'sneaker', range: '380-500', details: ['Couro liso premium', 'Air unit no salto', 'Cadarço flat', 'Disponível em 2 cores'] },

  // BOLSA
  { id: 17, name: 'Mochila Caramelo', desc: 'Mochila couro natural caramelo, logo Ferracini em relevo', price: 989.90, image: IMAGES.img17, category: 'bolsa', range: 'acima-500', details: ['Couro natural premium', 'Logo Ferracini em relevo', 'Compartimento frontal com zíper', 'Design minimalista urbano'] },
  { id: 16, name: 'Mochila Preta', desc: 'Mochila couro granulado preta, compartimento laptop, executiva', price: 1399.90, image: IMAGES.img16, category: 'bolsa', range: 'acima-500', details: ['Couro granulado premium', 'Compartimento para laptop', 'Alças ajustáveis', 'Detalhes em preto matte'] },
];

const CATEGORIES_MAP = {
  social: { label: 'Social', desc: 'Reunião e escritório', icon: '👔' },
  mocassim: { label: 'Mocassim', desc: 'Casual chique', icon: '◆' },
  sneaker: { label: 'Sneaker', desc: 'Estilo urbano', icon: '👟' },
  bolsa: { label: 'Bolsa', desc: 'Acessório premium', icon: '🎒' },
};

const RANGES_MAP = {
  'ate-380': { label: 'Até R$ 380', desc: 'Carinhoso' },
  '380-500': { label: 'R$ 380–500', desc: 'Especial' },
  'acima-500': { label: 'Acima R$ 500', desc: 'Inesquecível' },
};

const WHATSAPP_NUMBER = '559294439582';

const formatPrice = (p) => p === null ? 'Sob consulta' : `R$ ${p.toFixed(2).replace('.', ',')}`;

// ===== CONTAGEM REGRESSIVA =====
function useCountdown(targetDate) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) { setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return time;
}

// ===== PLACEHOLDER =====
function ProductPlaceholder({ category, large = false }) {
  const icons = { social: '👞', mocassim: '👞', sneaker: '👟', bolsa: '🎒' };
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `linear-gradient(135deg, ${COLORS.bgSoft} 0%, ${COLORS.bg} 100%)`,
      position: 'relative',
    }}>
      <div style={{ fontSize: large ? 100 : 60, opacity: 0.3 }}>{icons[category] || '👞'}</div>
      <div style={{
        position: 'absolute',
        bottom: 8,
        left: 12,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 9,
        letterSpacing: '0.15em',
        color: COLORS.textSoft,
        textTransform: 'uppercase',
      }}>aguardando foto</div>
    </div>
  );
}

// ===== TOPBAR =====
function TopBar() {
  const target = useMemo(() => new Date('2026-06-12T00:00:00-04:00'), []);
  const t = useCountdown(target);
  return (
    <div style={{
      background: COLORS.black,
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: '0.1em',
      color: 'rgba(255,255,255,0.85)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <span style={{ color: COLORS.red }}>♥</span>
      <span style={{ opacity: 0.7 }}>FALTAM</span>
      <span style={{ color: COLORS.bg, fontWeight: 600 }}>
        {String(t.days).padStart(2,'0')}D · {String(t.hours).padStart(2,'0')}H · {String(t.minutes).padStart(2,'0')}M
      </span>
      <span style={{ opacity: 0.7 }}>· DIA DOS NAMORADOS</span>
    </div>
  );
}

// ===== HEADER =====
function Header({ greeting = 'Edição Especial' }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px 8px',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 0 }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          color: COLORS.black,
          fontWeight: 700,
          letterSpacing: '0.05em',
        }}>FERRACINI</span>
        <span style={{
          marginLeft: 4,
          width: 8,
          height: 2,
          background: COLORS.red,
          transform: 'rotate(-12deg)',
          display: 'inline-block',
        }} />
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px',
        background: COLORS.bgCard,
        borderRadius: 100,
        fontFamily: "'Inter', sans-serif",
        fontSize: 11,
        color: COLORS.black,
        fontWeight: 500,
        border: `1px solid ${COLORS.borderSoft}`,
      }}>
        <span style={{ color: COLORS.red }}>♥</span>
        {greeting}
      </div>
    </div>
  );
}

// ===== HOME =====
function HomeScreen({ onStart, onUrgent, onBrowse }) {
  return (
    <div style={{ padding: '0 0 40px' }}>
      <Header greeting="Coleção 2026" />

      <div style={{ padding: '32px 24px 0' }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 48,
          lineHeight: 0.98,
          color: COLORS.black,
          margin: 0,
          fontWeight: 700,
          letterSpacing: '-0.025em',
        }}>
          O charme dele<br/>
          <span style={{ fontStyle: 'italic', fontWeight: 400 }}>merece</span><br/>
          o melhor.
        </h1>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 15,
          color: COLORS.textMuted,
          marginTop: 18,
          marginBottom: 28,
          lineHeight: 1.55,
          maxWidth: 340,
        }}>
          Faça ele se sentir especial. Sapatos selecionados Ferracini Manauara para presentear quem você ama.
        </p>
      </div>

      {/* Hero card */}
      <div style={{ padding: '0 24px' }}>
        <div style={{
          background: COLORS.black,
          borderRadius: 24,
          padding: '28px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: -20,
            right: -30,
            width: 180,
            height: 4,
            background: COLORS.red,
            transform: 'rotate(-25deg)',
            opacity: 0.9,
          }} />

          <div style={{
            display: 'inline-block',
            border: `1px solid ${COLORS.red}`,
            color: COLORS.red,
            padding: '5px 12px',
            borderRadius: 100,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: '0.2em',
            marginBottom: 16,
            fontWeight: 600,
            textTransform: 'uppercase',
          }}>
            Curadoria exclusiva
          </div>

          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 24,
            color: COLORS.bg,
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: 6,
          }}>
            17 modelos selecionados<br/>
            <span style={{ fontStyle: 'italic', color: COLORS.red }}>pra surpreender</span>
          </div>

          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.65)',
            marginBottom: 20,
          }}>
            Social · Mocassim · Sneaker · Bolsa
          </div>

          {/* Mini galeria */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 8,
          }}>
            {[5, 10, 2, 4].map(id => {
              const p = PRODUCTS.find(x => x.id === id);
              return (
                <div key={id} style={{
                  aspectRatio: '1',
                  background: COLORS.bg,
                  borderRadius: 10,
                  overflow: 'hidden',
                }}>
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div style={{ padding: '24px 24px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <button
          onClick={onStart}
          style={{
            padding: '18px 24px',
            background: COLORS.red,
            border: 'none',
            borderRadius: 14,
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            fontWeight: 700,
            color: COLORS.bg,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            boxShadow: `0 8px 24px rgba(217,0,30,0.25)`,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={e => e.currentTarget.style.transform = ''}
        >
          Encontrar o presente
          <span style={{ fontSize: 16 }}>→</span>
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <button
            onClick={onBrowse}
            style={{
              padding: '14px 16px',
              background: COLORS.bgCard,
              border: `1.5px solid ${COLORS.border}`,
              borderRadius: 14,
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: COLORS.black,
              cursor: 'pointer',
              letterSpacing: '0.02em',
            }}
          >
            👁 Ver tudo
          </button>
          <button
            onClick={onUrgent}
            style={{
              padding: '14px 16px',
              background: COLORS.bgCard,
              border: `1.5px solid ${COLORS.border}`,
              borderRadius: 14,
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: COLORS.black,
              cursor: 'pointer',
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ color: COLORS.red }}>⚡</span> Pra hoje
          </button>
        </div>
      </div>

      {/* Banner Compre & Ganhe */}
      <div style={{ padding: '24px 24px 0' }}>
        <img
          src="/WhatsApp%20Image%202026-05-21%20at%2016.13.04.jpeg"
          alt="Compre acima de R$ 599 e ganhe um porta-sapato exclusivo"
          style={{ width: '100%', borderRadius: 16, display: 'block' }}
        />
      </div>

      {/* Selos */}
      <div style={{
        padding: '28px 24px 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 8,
      }}>
        {[
          { icon: '✦', title: 'Couro', sub: 'legítimo' },
          { icon: '♥', title: 'Embalagem', sub: 'presente' },
          { icon: '✈', title: 'Entrega', sub: 'na data' },
        ].map((f, i) => (
          <div key={i} style={{
            background: COLORS.bgCard,
            border: `1px solid ${COLORS.borderSoft}`,
            borderRadius: 12,
            padding: '14px 8px',
            textAlign: 'center',
          }}>
            <div style={{ color: COLORS.red, fontSize: 16, marginBottom: 4 }}>{f.icon}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: COLORS.black, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{f.title}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: COLORS.textMuted }}>{f.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== STEP INDICATOR =====
function StepIndicator({ current, total }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center', marginBottom: 24 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          width: i === current ? 32 : 8,
          height: 6,
          background: i <= current ? COLORS.red : COLORS.border,
          borderRadius: 100,
          transition: 'all 0.3s',
        }} />
      ))}
      <span style={{
        marginLeft: 10,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        letterSpacing: '0.15em',
        color: COLORS.textMuted,
        fontWeight: 600,
      }}>
        {current + 1}/{total}
      </span>
    </div>
  );
}

// ===== OPTION CARD =====
function OptionCard({ selected, onClick, label, desc, emoji }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '20px 16px',
        background: selected ? COLORS.black : COLORS.bgCard,
        border: selected ? `2px solid ${COLORS.black}` : `1.5px solid ${COLORS.border}`,
        borderRadius: 16,
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.2s',
        minHeight: 110,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {selected && (
        <div style={{
          position: 'absolute',
          top: -10,
          right: -15,
          width: 80,
          height: 3,
          background: COLORS.red,
          transform: 'rotate(-25deg)',
        }} />
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {emoji && (
          <div style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            background: selected ? 'rgba(255,255,255,0.1)' : COLORS.bgSoft,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
          }}>{emoji}</div>
        )}
        {selected && (
          <div style={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: COLORS.red,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: COLORS.bg,
            fontSize: 12,
            fontWeight: 700,
          }}>✓</div>
        )}
      </div>

      <div>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 19,
          fontWeight: 700,
          color: selected ? COLORS.bg : COLORS.black,
          marginBottom: 2,
          letterSpacing: '-0.01em',
        }}>{label}</div>
        {desc && (
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: selected ? 'rgba(255,255,255,0.65)' : COLORS.textMuted,
          }}>{desc}</div>
        )}
      </div>
    </button>
  );
}

function QuizScreen({ step, totalSteps, title, subtitle, options, onSelect, onBack, value, emojiMap = {} }) {
  return (
    <div style={{ padding: '0 0 40px' }}>
      <Header greeting={`Passo ${step + 1}`} />

      <div style={{ padding: '20px 24px 0' }}>
        <button
          onClick={onBack}
          style={{
            background: 'transparent',
            border: 'none',
            color: COLORS.black,
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            padding: 0,
            marginBottom: 20,
            opacity: 0.7,
            letterSpacing: '0.02em',
          }}
        >← Voltar</button>

        <StepIndicator current={step} total={totalSteps} />

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 34,
          color: COLORS.black,
          textAlign: 'center',
          margin: '0 0 6px',
          lineHeight: 1.1,
          fontWeight: 700,
          letterSpacing: '-0.025em',
        }}>{title}</h2>

        {subtitle && (
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: COLORS.textMuted,
            textAlign: 'center',
            margin: '0 0 28px',
            maxWidth: 320,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.5,
          }}>{subtitle}</p>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {options.map(opt => (
            <OptionCard
              key={opt.key}
              selected={value === opt.key}
              onClick={() => onSelect(opt.key)}
              label={opt.label}
              desc={opt.desc}
              emoji={emojiMap[opt.key]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== PRODUCT CARD =====
function ProductCard({ p, featured, onSelect, onWhatsApp }) {
  return (
    <div
      onClick={() => onSelect(p)}
      style={{
        background: COLORS.bgCard,
        border: `1.5px solid ${featured ? COLORS.red : COLORS.border}`,
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: featured ? `0 8px 24px rgba(217,0,30,0.15)` : '0 2px 8px rgba(0,0,0,0.04)',
        cursor: 'pointer',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
      onMouseLeave={e => e.currentTarget.style.transform = ''}
    >
      {featured && (
        <div style={{
          position: 'absolute',
          top: 12,
          left: 12,
          background: COLORS.red,
          color: COLORS.bg,
          padding: '4px 10px',
          borderRadius: 4,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9,
          letterSpacing: '0.15em',
          fontWeight: 700,
          zIndex: 2,
          textTransform: 'uppercase',
        }}>★ Destaque</div>
      )}

      <div style={{
        width: '100%',
        aspectRatio: '1',
        background: COLORS.bgSoft,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {p.image ? (
          <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <ProductPlaceholder category={p.category} />
        )}
        <div style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          width: 28,
          height: 28,
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: COLORS.black,
          fontSize: 12,
          fontWeight: 700,
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}>⤢</div>
      </div>

      <div style={{ padding: '16px 18px 18px' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9,
          letterSpacing: '0.2em',
          color: COLORS.textSoft,
          marginBottom: 6,
          textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          {CATEGORIES_MAP[p.category]?.label || 'Premium'}
        </div>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 18,
          color: COLORS.black,
          fontWeight: 600,
          lineHeight: 1.15,
          marginBottom: 6,
          letterSpacing: '-0.01em',
        }}>{p.name}</div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          color: COLORS.textMuted,
          lineHeight: 1.4,
          marginBottom: 12,
          minHeight: 32,
        }}>{p.desc}</div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 20,
            color: COLORS.black,
            fontWeight: 700,
          }}>{formatPrice(p.price)}</div>
          <button
            onClick={(e) => { e.stopPropagation(); onWhatsApp(p); }}
            style={{
              background: COLORS.red,
              color: COLORS.bg,
              padding: '8px 14px',
              borderRadius: 8,
              border: 'none',
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}
          >
            Quero →
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== MODAL DE DETALHE =====
function ProductDetailModal({ product, onClose, onWhatsApp }) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [product]);

  if (!product) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        animation: 'fadeIn 0.2s ease-out',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: COLORS.bg,
          width: '100%',
          maxWidth: 480,
          maxHeight: '92vh',
          borderRadius: '24px 24px 0 0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ width: '100%', padding: '10px 0 4px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 44, height: 4, background: COLORS.border, borderRadius: 100 }} />
        </div>

        <div style={{ padding: '8px 20px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: '0.2em',
            color: COLORS.textMuted,
            fontWeight: 600,
          }}>
            FERRACINI · #{String(product.id).padStart(3, '0')}
          </div>
          <button
            onClick={onClose}
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: COLORS.black,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
            }}
            aria-label="Fechar"
          >✕</button>
        </div>

        <div style={{ overflowY: 'auto', flex: 1, paddingBottom: 20 }}>
          <div style={{ width: '100%', aspectRatio: '4/5', background: COLORS.bgSoft, position: 'relative', overflow: 'hidden' }}>
            {product.image ? (
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <ProductPlaceholder category={product.category} large />
            )}
          </div>

          <div style={{ padding: '24px 24px 0' }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.25em',
              color: COLORS.red,
              marginBottom: 8,
              textTransform: 'uppercase',
              fontWeight: 600,
            }}>
              {CATEGORIES_MAP[product.category]?.label || 'Premium'}
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 30,
              color: COLORS.black,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 10px',
            }}>{product.name}</h2>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: COLORS.textMuted,
              lineHeight: 1.55,
              margin: '0 0 24px',
            }}>{product.desc}</p>

            {product.details && product.details.length > 0 && (
              <div style={{
                background: COLORS.bgCard,
                border: `1px solid ${COLORS.borderSoft}`,
                borderRadius: 14,
                padding: '18px 20px',
                marginBottom: 20,
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  color: COLORS.textMuted,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}>
                  ◆ Detalhes técnicos
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {product.details.map((d, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      color: COLORS.black,
                    }}>
                      <span style={{ color: COLORS.red, fontWeight: 700 }}>—</span>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{
              background: COLORS.black,
              borderRadius: 14,
              padding: '18px 22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, right: -10, width: 60, height: 3, background: COLORS.red, transform: 'rotate(-25deg)' }} />
              <div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.6)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: 2,
                }}>Investimento</div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: product.price === null ? 18 : 30,
                  color: COLORS.bg,
                  fontWeight: 700,
                }}>{formatPrice(product.price)}</div>
              </div>
              {product.price !== null && (
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.65)',
                  textAlign: 'right',
                  lineHeight: 1.3,
                }}>
                  ou parcelado<br/>no cartão
                </div>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
              <div style={{
                background: COLORS.bgCard,
                border: `1px solid ${COLORS.borderSoft}`,
                borderRadius: 12,
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <div style={{ fontSize: 18, color: COLORS.red }}>✦</div>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: COLORS.black, textTransform: 'uppercase', letterSpacing: '0.03em' }}>Entrega</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: COLORS.textMuted }}>até 12/06</div>
                </div>
              </div>
              <div style={{
                background: COLORS.bgCard,
                border: `1px solid ${COLORS.borderSoft}`,
                borderRadius: 12,
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <div style={{ fontSize: 18, color: COLORS.red }}>♥</div>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: COLORS.black, textTransform: 'uppercase', letterSpacing: '0.03em' }}>Embalagem</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: COLORS.textMuted }}>presente grátis</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          padding: '16px 24px 24px',
          background: COLORS.bg,
          borderTop: `1px solid ${COLORS.borderSoft}`,
          display: 'flex',
          gap: 10,
        }}>
          <button
            onClick={onClose}
            style={{
              padding: '14px 20px',
              background: COLORS.bgCard,
              border: `1.5px solid ${COLORS.border}`,
              borderRadius: 100,
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: COLORS.black,
              cursor: 'pointer',
            }}
          >Voltar</button>
          <button
            onClick={() => onWhatsApp(product)}
            style={{
              flex: 1,
              padding: '14px 20px',
              background: COLORS.green,
              border: 'none',
              borderRadius: 100,
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: COLORS.bg,
              cursor: 'pointer',
              boxShadow: '0 6px 16px rgba(37,211,102,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              letterSpacing: '0.02em',
            }}
          >
            💬 Quero esse — falar agora
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== TELA DE RESULTADO =====
function ResultScreen({ filters, onBack, onRestart, mode = 'curadoria', onSelectProduct }) {
  const matches = useMemo(() => {
    if (mode === 'urgente') {
      return PRODUCTS.filter(p => p.range === 'ate-380').slice(0, 4);
    }
    if (mode === 'browse') {
      return PRODUCTS;
    }
    let filtered = PRODUCTS.filter(p => filters.range && p.range === filters.range);
    if (filtered.length === 0) filtered = PRODUCTS;
    return filtered;
  }, [filters, mode]);

  const persona = useMemo(() => {
    if (mode !== 'curadoria' || !filters.range) return null;
    return RANGES_MAP[filters.range]?.label || '';
  }, [filters, mode]);

  const personaTag = useMemo(() => {
    if (mode !== 'curadoria' || !filters.range) return null;
    return RANGES_MAP[filters.range]?.desc || '';
  }, [filters, mode]);

  const handleWhatsApp = (product) => {
    let intro;
    if (mode === 'urgente') intro = 'Oi! Vim pelo app da Ferracini Manauara 🌟 Preciso de um presente *HOJE* pro Dia dos Namorados.';
    else if (mode === 'browse') intro = 'Oi! Vim pelo app da Ferracini Manauara 🌟 Estava navegando no catálogo.';
    else intro = 'Oi! Vim pelo app da Ferracini Manauara 🌟 Fiz a curadoria e encontrei algumas opções perfeitas pra ele.';

    const detail = product
      ? `\n\nMe interessei especialmente por: *${product.name}* — ${formatPrice(product.price)}`
      : '';
    const ctx = mode === 'curadoria' && filters.range
      ? `\n\nFaixa de investimento: ${RANGES_MAP[filters.range]?.label}`
      : '';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(intro + detail + ctx + '\n\nPode me ajudar?')}`, '_blank');
  };

  return (
    <div style={{ padding: '0 0 40px' }}>
      <Header greeting={mode === 'urgente' ? 'Entrega rápida' : mode === 'browse' ? 'Catálogo' : 'Sua seleção'} />

      <div style={{ padding: '20px 24px 0' }}>
        <button
          onClick={onBack}
          style={{
            background: 'transparent',
            border: 'none',
            color: COLORS.black,
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            padding: 0,
            marginBottom: 16,
            opacity: 0.7,
          }}
        >← Voltar</button>

        {persona && (
          <div style={{
            background: COLORS.black,
            borderRadius: 16,
            padding: '20px 22px',
            color: COLORS.bg,
            marginBottom: 24,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -10, right: -15, width: 120, height: 3, background: COLORS.red, transform: 'rotate(-25deg)' }} />
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.25em',
              color: COLORS.red,
              marginBottom: 8,
              fontWeight: 600,
              textTransform: 'uppercase',
            }}>
              ✦ Curadoria perfeita
            </div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 26,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 6,
            }}>
              {persona}
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, opacity: 0.7 }}>
              {personaTag} · {matches.length} {matches.length === 1 ? 'peça' : 'peças'} pra ele
            </div>
          </div>
        )}

        {mode === 'urgente' && (
          <>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 30,
              color: COLORS.black,
              margin: '0 0 6px',
              lineHeight: 1.1,
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}>
              Pronto pra <span style={{ fontStyle: 'italic' }}>levar hoje</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: COLORS.textMuted, margin: '0 0 24px' }}>
              Estoque garantido e entrega no mesmo dia.
            </p>
          </>
        )}

        {mode === 'browse' && (
          <>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 30,
              color: COLORS.black,
              margin: '0 0 6px',
              lineHeight: 1.1,
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}>
              Catálogo <span style={{ fontStyle: 'italic' }}>completo</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: COLORS.textMuted, margin: '0 0 24px' }}>
              Toda a seleção Ferracini Manauara pra ele.
            </p>
          </>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {matches.map((p, idx) => (
            <ProductCard
              key={p.id}
              p={p}
              featured={idx === 0 && mode === 'curadoria'}
              onSelect={onSelectProduct}
              onWhatsApp={handleWhatsApp}
            />
          ))}
        </div>

        {mode === 'curadoria' && (
          <div style={{
            marginTop: 16,
            background: COLORS.black,
            borderRadius: 16,
            padding: '20px 22px',
            display: 'flex',
            gap: 14,
            alignItems: 'center',
            color: COLORS.bg,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -10, right: -15, width: 100, height: 3, background: COLORS.red, transform: 'rotate(-25deg)' }} />
            <div style={{
              width: 50,
              height: 50,
              background: COLORS.red,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              flexShrink: 0,
            }}>🎁</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em' }}>Kit Ferracini Especial</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, opacity: 0.7, marginTop: 2 }}>Sapato + embalagem premium + cartão escrito à mão</div>
            </div>
          </div>
        )}

        <div style={{
          marginTop: 24,
          background: COLORS.bgCard,
          border: `1.5px solid ${COLORS.border}`,
          borderRadius: 16,
          padding: '22px 20px',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 20,
            color: COLORS.black,
            fontWeight: 700,
            marginBottom: 4,
            letterSpacing: '-0.01em',
          }}>Quer ver mais opções?</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: COLORS.textMuted, marginBottom: 16 }}>
            Atendimento exclusivo · entrega garantida pra data
          </div>
          <button
            onClick={() => handleWhatsApp(null)}
            style={{
              background: COLORS.green,
              color: COLORS.bg,
              padding: '14px 28px',
              borderRadius: 100,
              border: 'none',
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 6px 16px rgba(37,211,102,0.3)',
            }}
          >
            💬 Falar no WhatsApp
          </button>
        </div>

        <button
          onClick={onRestart}
          style={{
            display: 'block',
            margin: '20px auto 0',
            background: 'transparent',
            border: 'none',
            color: COLORS.textMuted,
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >↺ Começar de novo</button>
      </div>
    </div>
  );
}

// ===== APP PRINCIPAL =====
export default function FerraciniApp() {
  const [screen, setScreen] = useState('home');
  const [filters, setFilters] = useState({ range: null });
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleStep1 = (key) => { setFilters(f => ({ ...f, range: key })); setTimeout(() => setScreen('result'), 200); };
  const restart = () => { setFilters({ range: null }); setScreen('home'); };

  return (
    <div style={{
      background: COLORS.bg,
      minHeight: '100vh',
      color: COLORS.black,
      fontFamily: "'Inter', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { margin: 0; }
        button:hover { filter: brightness(0.97); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
      `}</style>

      <TopBar />

      <div style={{ maxWidth: 480, margin: '0 auto', animation: 'fadeUp 0.4s ease-out' }} key={screen}>
        {screen === 'home' && (
          <HomeScreen
            onStart={() => setScreen('step1')}
            onUrgent={() => setScreen('urgent')}
            onBrowse={() => setScreen('browse')}
          />
        )}
        {screen === 'step1' && (
          <QuizScreen
            step={0} totalSteps={1}
            title="Quanto investir?"
            subtitle="Selecionamos as melhores peças da faixa pra ele"
            value={filters.range}
            onSelect={handleStep1}
            onBack={() => setScreen('home')}
            options={Object.entries(RANGES_MAP).map(([key, v]) => ({ key, ...v }))}
            emojiMap={{ 'ate-380': '♥', '380-500': '✦', 'acima-500': '★' }}
          />
        )}
        {screen === 'result' && (
          <ResultScreen filters={filters} onBack={() => setScreen('step1')} onRestart={restart} mode="curadoria" onSelectProduct={setSelectedProduct} />
        )}
        {screen === 'urgent' && (
          <ResultScreen filters={{}} onBack={() => setScreen('home')} onRestart={restart} mode="urgente" onSelectProduct={setSelectedProduct} />
        )}
        {screen === 'browse' && (
          <ResultScreen filters={{}} onBack={() => setScreen('home')} onRestart={restart} mode="browse" onSelectProduct={setSelectedProduct} />
        )}
      </div>

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onWhatsApp={(p) => {
          const intro = 'Oi! Vim pelo app da Ferracini Manauara 🌟 Vi o catálogo e me interessei.';
          const detail = `\n\nMe interessei especialmente por: *${p.name}* — ${formatPrice(p.price)}`;
          const ctx = filters.range && screen === 'result'
            ? `\n\nFaixa de investimento: ${RANGES_MAP[filters.range]?.label}`
            : '';
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(intro + detail + ctx + '\n\nPode me ajudar?')}`, '_blank');
        }}
      />
    </div>
  );
}
