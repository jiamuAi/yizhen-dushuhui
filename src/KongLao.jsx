import React from 'react';

const App = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8 font-sans">
            <style jsx global>{`
          @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
          }
          .bento-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem; /* Increased gap */
            max-width: 1920px;
            margin: auto;
          }
          .bento-item {
            background-color: rgba(31, 41, 55, 0.8); /* Slightly more transparent dark gray */
            border-radius: 1.5rem; /* More rounded corners */
            padding: 2rem; /* Increased padding */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            border: 1px solid rgba(75, 85, 99, 0.5); /* Subtle border */
            position: relative;
            overflow: hidden; /* For pseudo-elements */
          }
          .bento-item:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 255, 255, 0.15); /* Enhanced hover shadow with cyan glow */
          }
          .highlight-text {
            background: linear-gradient(90deg, rgba(0,200,255,0.7) 0%, rgba(0,150,255,0.5) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            filter: drop-shadow(0 0 10px rgba(0,200,255,0.4));
          }
          .super-large-text {
            font-size: clamp(4rem, 10vw, 8rem); /* Responsive super large text */
            font-weight: 900; /* Extra bold */
            line-height: 1;
            margin-bottom: 0.5rem;
          }
          .accent-glow {
            position: absolute;
            content: "";
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(0, 220, 255, 0.1) 0%, rgba(0, 220, 255, 0) 60%);
            z-index: 0;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.5s ease;
          }
          .bento-item:hover .accent-glow {
            opacity: 0.7;
          }
          .content-wrapper {
            position: relative;
            z-index: 1;
          }
          .card-title-cn {
              font-size: 1.8rem; /* Larger title */
              font-weight: 700;
              margin-bottom: 0.75rem;
              color: #e5e7eb; /* Lighter gray for titles */
          }
          .card-title-en {
              font-size: 0.9rem;
              font-weight: 300;
              color: #9ca3af; /* Medium gray for subtitles */
              text-transform: uppercase;
              letter-spacing: 0.05em;
              margin-bottom: 1rem;
          }
          .card-text-cn {
              font-size: 1.1rem;
              font-weight: 500;
              color: #d1d5db; /* Light gray for main text */
              line-height: 1.6;
          }
          .card-text-en {
              font-size: 0.85rem;
              color: #6b7280; /* Darker gray for supporting English text */
          }
          .icon-placeholder {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: rgba(0, 200, 255, 0.7); /* Techy cyan color for icons */
          }
          /* Specific grid spans */
          .bento-item.col-span-1 { grid-column: span 1 / span 1; }
          .bento-item.col-span-2 { grid-column: span 2 / span 2; }
          @media (max-width: 768px) { /* Stack on smaller screens */
              .bento-item.col-span-2 { grid-column: span 1 / span 1; }
          }
  
          /* Line graphic style */
          .line-graphic {
            width: 100%;
            height: 60px; /* Adjust height as needed */
            position: relative;
            margin-top: 1rem;
          }
          .line-graphic svg {
            width: 100%;
            height: 100%;
          }
          .line-graphic .main-line {
            stroke: rgba(0, 200, 255, 0.7);
            stroke-width: 3;
            fill: none;
            stroke-dasharray: 500; /* Animate this for dynamic effect if needed */
            stroke-dashoffset: 500;
            animation: drawLine 2s ease-out forwards;
          }
          .line-graphic .point {
            fill: rgba(0, 200, 255, 1);
          }
          @keyframes drawLine {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
            <header className="text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-2 highlight-text">中美经贸新篇章</h1>
                <p className="text-xl md:text-2xl text-gray-400">Sino-US Economic & Trade New Chapter</p>
            </header>

            <div className="bento-grid">
                {/* Cell 1: Main Title */}
                <div className="bento-item col-span-1 md:col-span-2">
                    <div className="content-wrapper">
                        <div className="icon-placeholder"><i className="fas fa-handshake"></i></div>
                        <h2 className="card-title-cn">中美经贸会谈取得实质性进展</h2>
                        <p className="card-title-en">GENEVA TALKS - SUBSTANTIAL PROGRESS</p>
                        <p className="card-text-cn">双方围绕落实1月中美元首通话重要共识，进行了坦诚、深入、具有建设性的沟通，达成一系列重要共识。</p>
                        <p className="card-text-en mt-1">Candid, in-depth, and constructive communication leading to important consensuses.</p>
                    </div>
                    <div className="accent-glow"></div>
                </div>

                {/* Cell 2: Key Outcome 1 (US) */}
                <div className="bento-item text-center">
                    <div className="content-wrapper">
                        <div className="icon-placeholder"><i className="fas fa-flag-usa"></i></div>
                        <h3 className="super-large-text highlight-text">91%</h3>
                        <h2 className="card-title-cn">美方取消加征关税</h2>
                        <p className="card-title-en">US CANCELS ADDITIONAL TARIFFS</p>
                        <p className="card-text-cn text-sm">根据联合声明，美方承诺取消大部分于2025年4月后加征的关税。</p>
                        <p className="card-text-en mt-1 text-xs">US commits to cancel majority of additional tariffs imposed after April 2025.</p>
                    </div>
                    <div className="accent-glow"></div>
                </div>

                {/* Cell 3: Key Outcome 2 (China) */}
                <div className="bento-item text-center">
                    <div className="content-wrapper">
                        <div className="icon-placeholder"><i className="fas fa-dragon"></i></div>
                        <h3 className="super-large-text highlight-text">91%</h3>
                        <h2 className="card-title-cn">中方取消反制关税</h2>
                        <p className="card-title-en">CHINA CANCELS RETALIATORY TARIFFS</p>
                        <p className="card-text-cn text-sm">相应地，中方取消对美国商品加征的同等数额反制关税。</p>
                        <p className="card-text-en mt-1 text-xs">China reciprocally cancels an equivalent amount of retaliatory tariffs on US goods.</p>
                    </div>
                    <div className="accent-glow"></div>
                </div>

                {/* Cell 4: Suspended Tariffs */}
                <div className="bento-item">
                    <div className="content-wrapper">
                        <div className="icon-placeholder"><i className="fas fa-pause-circle"></i></div>
                        <h2 className="card-title-cn">24% 关税暂停90天</h2>
                        <p className="card-title-en">MUTUAL AGREEMENT: 24% TARIFFS SUSPENDED FOR 90 DAYS</p>
                        <p className="card-text-cn">双方同意将特定的24%关税暂停征收90天，为后续磋商创造条件。</p>
                        <p className="card-text-en mt-1">Both sides agree to suspend specific 24% tariffs for 90 days, fostering conditions for further talks.</p>
                        <div className="line-graphic">
                            <svg viewBox="0 0 100 30">
                                <polyline className="main-line" points="5,25 25,10 45,20 65,5 85,15 95,10" />
                                <circle className="point" cx="5" cy="25" r="2" />
                                <circle className="point" cx="95" cy="10" r="2" />
                            </svg>
                        </div>
                    </div>
                    <div className="accent-glow"></div>
                </div>

                {/* Cell 5: Talks Details */}
                <div className="bento-item">
                    <div className="content-wrapper">
                        <div className="icon-placeholder"><i className="fas fa-calendar-alt"></i></div>
                        <h2 className="card-title-cn">会谈焦点</h2>
                        <p className="card-title-en">TALK DETAILS & PRINCIPLES</p>
                        <p className="card-text-cn"><strong>地点:</strong> 瑞士日内瓦 (Geneva, Switzerland)</p>
                        <p className="card-text-cn"><strong>时间:</strong> 5月10-11日 (May 10-11)</p>
                        <p className="card-text-cn mt-2"><strong>核心原则:</strong> 相互尊重、和平共处、合作共赢。</p>
                        <p className="card-text-en mt-1">Core Principles: Mutual Respect, Peaceful Coexistence, Win-Win Cooperation.</p>
                    </div>
                    <div className="accent-glow"></div>
                </div>

                {/* Cell 6: Joint Statement */}
                <div className="bento-item">
                    <div className="content-wrapper">
                        <div className="icon-placeholder"><i className="fas fa-file-signature"></i></div>
                        <h2 className="card-title-cn">联合声明与承诺</h2>
                        <p className="card-title-en">JOINT STATEMENT & COMMITMENTS</p>
                        <p className="card-text-cn">联合声明于当地时间 <strong>5月12日</strong> 发布。</p>
                        <p className="card-text-cn mt-1">双方承诺于 <strong>2025年5月14日前</strong> 采取具体举措。</p>
                        <p className="card-text-en mt-1">Joint statement released May 12. Actions committed by May 14, 2025.</p>
                    </div>
                    <div className="accent-glow"></div>
                </div>

                {/* Cell 7: Future Mechanism */}
                <div className="bento-item col-span-1 md:col-span-2">
                    <div className="content-wrapper">
                        <div className="icon-placeholder"><i className="fas fa-cogs"></i></div>
                        <h2 className="card-title-cn">建立经贸磋商机制</h2>
                        <p className="card-title-en">FUTURE COOPERATION: ESTABLISHING CONSULTATION MECHANISM</p>
                        <p className="card-text-cn">为保持持续沟通，双方一致同意建立中美经贸磋商机制，定期或不定期在中国、美国或双方商定的第三国进行磋商。</p>
                        <p className="card-text-en mt-1">To maintain ongoing dialogue, both sides agreed to establish a Sino-US economic and trade consultation mechanism, with regular or ad-hoc meetings in China, the US, or a mutually agreed third country.</p>
                    </div>
                    <div className="accent-glow"></div>
                </div>

                {/* Cell 8: Context/Quote */}
                <div className="bento-item">
                    <div className="content-wrapper">
                        <div className="icon-placeholder"><i className="fas fa-globe-americas"></i></div>
                        <h2 className="card-title-cn">全球影响与展望</h2>
                        <p className="card-title-en">GLOBAL IMPACT & OUTLOOK</p>
                        <p className="card-text-cn">"贸易战没有赢家。"</p>
                        <p className="card-text-cn mt-1">此次会谈为进一步弥合分歧、深化合作打下基础，为世界经济注入更多确定性和稳定性。</p>
                        <p className="card-text-en mt-1">"Trade wars have no winners." This lays a foundation for bridging differences, deepening cooperation, and injecting more certainty and stability into the global economy.</p>
                    </div>
                    <div className="accent-glow"></div>
                </div>
            </div>

            <footer className="text-center mt-12 py-8 border-t border-gray-700">
                <p className="text-gray-500 text-sm">
                    Data based on official announcements regarding Sino-US economic and trade talks, May 2025.
                </p>
                <p className="text-gray-600 text-xs mt-1">
                    DESIGN INSPIRED BY BENTO GRID & TECH PRESENTATIONS
                </p>
            </footer>

            {/* CDNs: It's generally better to put these in the <head> of your HTML file.
            For this JSX example, they are included here for completeness if this were a standalone component
            that didn't have a separate HTML shell. In a typical React setup, use Helmet or similar for <head> management.
        */}
            <script src="https://cdn.tailwindcss.com/3.4.3"></script>
            {/* Font Awesome is loaded via CSS @import in the style tag */}

        </div>
    );
};

export default App;