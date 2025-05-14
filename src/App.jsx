import React from 'react';

const App = () =>{
  // Key concepts extracted from the document
  const concepts = {
    title: "《黄帝内经的奥秘》",
    subtitle: "养生之道",
    introduction: "国学瑰宝，帝王之学。领悟生命本源，掌握健康密钥。",
    responsibility: {
      title: "健康·自主",
      text: "HEALTH AUTONOMY",
      detail: "“健康真的不要学会去教给别人，要教给自己。”",
    },
    holisticView: {
      title: "整体观念",
      text: "HOLISTIC VIEW",
      points: [
        { name: "天人合一", detail: "Human & Nature In Harmony" },
        { name: "全息", detail: "Body As A Hologram" },
        { name: "表里", detail: "Exterior & Interior Connection" },
      ],
    },
    tenQis: {
      main: "十气",
      desc: "生命之本 HEALTH ESSENCE",
      detail: "“黄帝内经的养生当中，他就提到了十个气。所以我们今天要把这十个气了解清楚，嗯，它是养生的一个非常基本的雏形。”",
    },
    sixEvils: {
      title: "六气·六邪",
      text: "THE SIX EXTERNAL EVILS",
      items: [
        { name: "风", char: "风", detail: "百邪之长，善行数变 Leader of Evils, Ever-Changing", icon: "fas fa-wind" },
        { name: "寒", char: "寒", detail: "凝滞收引，伤阳气 Stagnation & Contraction, Harms Yang", icon: "fas fa-snowflake" },
        { name: "暑", char: "暑", detail: "炎热升散，耗气伤津 Extreme Heat, Consumes Qi & Fluids", icon: "fas fa-sun" },
        { name: "湿", char: "湿", detail: "重浊粘滞，困阻脾阳 Heavy & Sticky, Obstructs Spleen", icon: "fas fa-tint" },
        { name: "燥", char: "燥", detail: "干涩伤津，耗伤肺阴 Dryness, Damages Fluids & Lung Yin", icon: "fas fa-leaf" },
        { name: "火", char: "火", detail: "炎上燔灼，扰乱心神 Blazing Fire, Disturbs the Mind", icon: "fas fa-fire" },
      ],
    },
    fourDefenses: {
      title: "四气·正气",
      text: "THE FOUR DEFENSIVE QIS",
      items: [
        { name: "元气", char: "元", detail: "生命原力，源于肾与脾胃 Primordial Qi, From Kidneys & Spleen", icon: "fas fa-atom" },
        { name: "中气", char: "中", detail: "胸中之气，关乎肺与呼吸 Chest Qi, Related to Lungs & Respiration", icon: "fas fa-lungs" },
        { name: "营气", char: "营", detail: "营养之气，行于脉中 Nutrient Qi, Circulates with Blood", icon: "fas fa-tint-slash" }, // Placeholder icon
        { name: "卫气", char: "卫", detail: "保卫之气，护体表 Defensive Qi, Protects Body Surface", icon: "fas fa-shield-alt" },
      ],
    },
    qiBlood: {
      title: "气血·根本",
      text: "QI & BLOOD - THE FOUNDATION",
      detail: "“女性其实有百分之六七十以上都会有便秘，其实就是气血不足...我们35岁的女性一定是要补气补气血的。” 熬夜耗损气血，日久则从骨髓代偿。",
      lifespan: "120",
      lifespanText: "天赋寿元 INTENDED LIFESPAN",
    },
    corePrinciples: {
      title: "核心理念",
      text: "CORE PRINCIPLES",
      items: [
        { principle: "肾主骨生髓", explanation: "Kidneys govern bones & generate marrow" },
        { principle: "忧思伤脾", explanation: "Worry & overthinking damage the Spleen" },
        { principle: "肝主疏泄，藏血", explanation: "Liver governs free flow of Qi, stores blood" },
        { principle: "心主神明", explanation: "Heart houses the Shen (Spirit/Mind)" },
      ],
    },
    modernIlls: {
      title: "现代警示",
      text: "MODERN WARNINGS",
      detail: "生活失衡，早夭频现。从睡眠、情绪到饮食，皆关乎脏腑平衡。病非朝夕，养生需及时。",
    },
    fontAwesomeCDNJSL: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js",
    // Or CSS if you prefer:
    fontAwesomeCDNCSS: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
    tailwindCDNJSL: "https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp",
  };

  // Bento box styling
  const boxStyle = "bg-slate-800/70 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300";
  const largeCharStyle = "text-7xl md:text-9xl font-bold text-cyan-400 opacity-30 absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 pointer-events-none";
  const highlightTextColor = "text-cyan-400";
  const titleStyle = `text-3xl md:text-5xl font-bold text-white mb-2`;
  const subtitleStyle = `text-lg md:text-2xl ${highlightTextColor} font-semibold mb-4 tracking-wider`;

  return (
    <html>
      <head>
        <meta charSet="UTF-_8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{concepts.title} - {concepts.subtitle}</title>
        <script src={concepts.tailwindCDNJSL}></script>
        {/* Using Font Awesome CSS for simplicity in this static example */}
        <link rel="stylesheet" href={concepts.fontAwesomeCDNCSS} />
        <style jsx global>{`
          body {
            background-color: #0f172a; /* slate-900 */
            font-family: 'Noto Sans SC', sans-serif; /* A common Chinese font */
            color: #e2e8f0; /* slate-200 */
            overscroll-behavior: none;
          }
          .bento-grid {
            display: grid;
            gap: 1rem; /* 16px */
            padding: 1rem; /* 16px */
            margin: 0 auto;
            max-width: 1920px;
          }
          @media (min-width: 768px) { /* md */
            .bento-grid {
              gap: 1.5rem; /* 24px */
              padding: 1.5rem; /* 24px */
            }
          }
          /* Example grid layout - customize as needed for actual content */
          .grid-col-span-1 { grid-column: span 1 / span 1; }
          .grid-col-span-2 { grid-column: span 2 / span 2; }
          .grid-col-span-3 { grid-column: span 3 / span 3; }
          .grid-col-span-4 { grid-column: span 4 / span 4; }

          .grid-row-span-1 { grid-row: span 1 / span 1; }
          .grid-row-span-2 { grid-row: span 2 / span 2; }

          .gradient-text {
            background: linear-gradient(to right, #67e8f9, #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .highlight-block {
             background: linear-gradient(145deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.02));
          }
          .icon-placeholder { /* For custom SVG or more complex icons */
            width: 48px;
            height: 48px;
            border: 1px dashed #67e8f9;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            margin-bottom: 0.5rem;
          }
        `}</style>
         <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen">
        <div className="bento-grid md:grid-cols-4 lg:grid-cols-5">
          {/* Box 1: Title/Intro */}
          <div className={`${boxStyle} md:col-span-2 lg:col-span-3 grid-row-span-1 flex flex-col justify-center items-center text-center relative overflow-hidden`}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-3 leading-tight">{concepts.title}</h1>
            <p className="text-3xl md:text-5xl gradient-text font-bold mb-4">{concepts.subtitle}</p>
            <p className="text-slate-300 text-base md:text-lg max-w-xl">{concepts.introduction}</p>
             <div className="text-9xl md:text-[12rem] font-bold text-cyan-500 opacity-10 absolute -bottom-10 -left-10 pointer-events-none">道</div>
          </div>

          {/* Box 2: Health Responsibility */}
          <div className={`${boxStyle} md:col-span-2 lg:col-span-2 grid-row-span-1 flex flex-col justify-center items-center text-center relative overflow-hidden highlight-block`}>
            <h2 className={titleStyle}>{concepts.responsibility.title}</h2>
            <p className={subtitleStyle}>{concepts.responsibility.text}</p>
            <p className="text-slate-300 text-sm md:text-base italic">"{concepts.responsibility.detail}"</p>
            <i className="fas fa-heartbeat text-7xl md:text-9xl text-cyan-400 opacity-20 absolute bottom-2 right-2 pointer-events-none"></i>
          </div>
          
          {/* Box 3: Holistic View */}
          <div className={`${boxStyle} md:col-span-2 lg:col-span-2 relative overflow-hidden`}>
            <h2 className={titleStyle}>{concepts.holisticView.title}</h2>
            <p className={subtitleStyle}>{concepts.holisticView.text}</p>
            <ul className="space-y-3">
              {concepts.holisticView.points.map(point => (
                <li key={point.name} className="flex items-center">
                  <i className="fas fa-project-diagram text-cyan-400 mr-3 text-xl"></i>
                  <div>
                    <span className="text-white font-semibold text-lg">{point.name}</span>
                    <span className="text-slate-400 text-xs block">{point.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-8xl md:text-9xl font-bold text-cyan-400 opacity-10 absolute -bottom-4 -right-4 pointer-events-none">全</div>
          </div>

          {/* Box 4: Ten Qis */}
          <div className={`${boxStyle} md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center text-center relative overflow-hidden highlight-block`}>
            <h2 className="text-8xl md:text-9xl lg:text-[10rem] font-black text-white leading-none">{concepts.tenQis.main}</h2>
            <p className={`text-2xl md:text-4xl ${highlightTextColor} font-bold mt-2 mb-3`}>{concepts.tenQis.desc}</p>
            <p className="text-slate-300 text-xs md:text-sm max-w-md italic">"{concepts.tenQis.detail}"</p>
          </div>

          {/* Box 5 & 6: Six External Evils (Combined for brevity, can be split) */}
          <div className={`${boxStyle} md:col-span-4 lg:col-span-5 relative overflow-hidden`}>
            <h2 className={titleStyle}>{concepts.sixEvils.title}</h2>
            <p className={subtitleStyle}>{concepts.sixEvils.text}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-4">
              {concepts.sixEvils.items.map(item => (
                <div key={item.name} className="bg-slate-700/50 p-4 rounded-xl text-center flex flex-col items-center justify-between relative overflow-hidden h-full">
                  <i className={`${item.icon} text-4xl ${highlightTextColor} mb-2`}></i>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-slate-400 text-xs flex-grow">{item.detail}</p>
                  <div className="text-7xl font-bold text-cyan-400 opacity-20 absolute -bottom-2 -right-2 pointer-events-none">{item.char}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Box 7 & 8: Four Defensive Qis (Combined for brevity) */}
          <div className={`${boxStyle} md:col-span-4 lg:col-span-3 relative overflow-hidden`}>
            <h2 className={titleStyle}>{concepts.fourDefenses.title}</h2>
            <p className={subtitleStyle}>{concepts.fourDefenses.text}</p>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4">
              {concepts.fourDefenses.items.map(item => (
                <div key={item.name} className="bg-slate-700/50 p-4 rounded-xl text-center flex flex-col items-center justify-between relative overflow-hidden h-full">
                   <i className={`${item.icon} text-4xl ${highlightTextColor} mb-2`}></i>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-slate-400 text-xs flex-grow">{item.detail}</p>
                  <div className="text-7xl font-bold text-cyan-400 opacity-20 absolute -bottom-2 -right-2 pointer-events-none">{item.char}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Box 9: Qi & Blood & Lifespan */}
          <div className={`${boxStyle} md:col-span-2 lg:col-span-2 flex flex-col justify-between items-center text-center relative overflow-hidden highlight-block`}>
            <div>
              <h2 className={titleStyle}>{concepts.qiBlood.title}</h2>
              <p className={subtitleStyle}>{concepts.qiBlood.text}</p>
              <p className="text-slate-300 text-xs md:text-sm italic mt-3">"{concepts.qiBlood.detail}"</p>
            </div>
            <div className="mt-6">
              <p className="text-8xl md:text-9xl font-black text-white leading-none">{concepts.qiBlood.lifespan}</p>
              <p className={`text-xl md:text-2xl ${highlightTextColor} font-semibold`}>{concepts.qiBlood.lifespanText}</p>
            </div>
          </div>

          {/* Box 10: Core Principles */}
          <div className={`${boxStyle} md:col-span-2 lg:col-span-3 relative overflow-hidden`}>
             <h2 className={titleStyle}>{concepts.corePrinciples.title}</h2>
             <p className={subtitleStyle}>{concepts.corePrinciples.text}</p>
             <ul className="space-y-2 mt-4">
                {concepts.corePrinciples.items.map(item => (
                    <li key={item.principle} className="p-3 bg-slate-700/50 rounded-lg">
                        <span className="text-white font-semibold text-md">{item.principle}</span>
                        <span className="text-slate-400 text-xs block italic">{item.explanation}</span>
                    </li>
                ))}
             </ul>
             <i className="fas fa-brain text-8xl text-cyan-400 opacity-10 absolute top-4 right-4 pointer-events-none"></i>
          </div>

          {/* Box 11: Modern Ills */}
          <div className={`${boxStyle} md:col-span-2 lg:col-span-2 flex flex-col justify-center items-center text-center relative overflow-hidden`}>
            <i className="fas fa-exclamation-triangle text-6xl text-amber-400 mb-4"></i>
            <h2 className={titleStyle}>{concepts.modernIlls.title}</h2>
            <p className={subtitleStyle}>{concepts.modernIlls.text}</p>
            <p className="text-slate-300 text-sm md:text-base">"{concepts.modernIlls.detail}"</p>
          </div>

        </div>

        <footer className="text-center p-8 text-slate-400 text-xs">
          <p>内容来自@马艺甄老师《黄帝内经的奥秘》直播课。设计灵感源于Bento Grid与现代科技美学。</p>
          <p>VISUALIZATION & INTERPRETATION by AI Assistant. FOR EDUCATIONAL PURPOSES.</p>
        </footer>
      </body>
    </html>
  );
};

export default App;