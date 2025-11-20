// estilo_registro.js — inyecta el CSS EXACTO del archivo REG JASON.restored.html (sin cambios visuales)
(function(){
  if (document.getElementById('__css_reg_jason')) return;
  const css = `
  :root { --primary:#3498db; --hover:#2980b9; --panel:rgba(0,0,0,0.75); --text:#fff; --field-bg:rgba(255,255,255,0.9); --border:#aaa; --radius:12px; --space:16px; --card-pad:14px; }
  *{box-sizing:border-box}
  body{
    margin:0;padding:0;font-family:Segoe UI,Roboto,Arial,sans-serif;
    min-height:100vh;display:flex;flex-direction:column;justify-content:flex-start;
  }
  form{background:var(--panel);color:var(--text);border-radius:var(--radius);max-width:1400px;margin:0 auto 32px;padding:0 32px;box-shadow:0 10px 28px rgba(0,0,0,.6);}
  h2{font-size:20px;text-transform:uppercase;margin-top:14px;margin-bottom:12px;border-bottom:2px solid var(--primary);padding-bottom:6px;letter-spacing:.5px;}
  .field-card{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);border-radius:10px;padding:var(--card-pad);display:flex;flex-direction:column;gap:8px;min-height:94px;}
  label{font-weight:700;font-size:12px;margin-bottom:2px;text-transform:uppercase;letter-spacing:.6px;}
  input,select,textarea{width:100%;padding:5px;border:1px solid var(--border);border-radius:8px;font-size:14px;background:var(--field-bg);color:#000;}
  textarea{resize:vertical;min-height:56px;}
  input:focus,select:focus,textarea:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 2px rgba(52,152,219,.25);}
  .actions{text-align:center;margin-top:26px;}
  button{color:#fff;padding:14px 26px;border:none;border-radius:10px;font-weight:800;font-size:15px;text-transform:uppercase;cursor:pointer;letter-spacing:.6px;display:block;width:100%;margin-bottom:20px;}
  button:hover{opacity:0.9;}
  #message{margin-top:12px;text-align:center;font-weight:bold;color:#fff;}

  .field-card { padding: 10px; gap: 6px; min-height: 64px; }
  textarea { min-height: 34px; }

  .grid-rows { display: flex; flex-wrap: wrap; gap: .5rem; }
  .grid-rows .field-card { flex: 1; min-width: 200px; }
  @media (max-width: 768px) {
    .grid-rows { flex-direction: column; }
    .grid-rows .field-card { width: 100% !important; min-width: unset !important; }
  }
  input[type="time"] { width: 100px; text-align: center; }
  .field-card input[type="time"] { width: 100px !important; text-align: center; display: inline-block; }
  .field-card.small-width { max-width: 160px !important; flex: 0 0 160px !important; }
  .field-card.small-width input[type="time"] { width: 100%; text-align: center; }

  .actions { display:flex; justify-content:center; gap:55px; margin-top:26px; }
  .actions button {
    width:auto; flex:0 0 auto; padding:14px 20px; margin:0;
    background: rgba(15,23,42,0.22);
    border-radius: 12px;
    border: 1px solid rgba(190, 200, 255, 0.45);
    box-shadow:
      0 0 10px rgba(136,170,255,0.45),
      0 12px 26px rgba(0,0,0,0.70),
      inset 0 1px 0 rgba(255,255,255,0.20);
    backdrop-filter: blur(6px) saturate(140%);
    -webkit-backdrop-filter: blur(6px) saturate(140%);
    color: #fff;
    font-weight: 800;
    letter-spacing: .6px;
    text-transform: uppercase;
    transition: box-shadow .18s ease, transform .08s ease, border-color .18s ease, background .18s ease;
  }
  .actions button:hover{
    transform: translateY(-1px);
    background: rgba(15,23,42,0.32);
    border-color: rgba(210, 220, 255, 0.85);
    box-shadow:
      0 0 14px rgba(170,200,255,0.80),
      0 16px 34px rgba(0,0,0,0.80),
      inset 0 1px 0 rgba(255,255,255,0.26);
  }
  .actions .zip:hover{
   box-shadow: inset 0 1px 0 rgba(255,255,255,0.22),
                0 0 0 2px rgba(255,80,80,0.40),
                0 12px 28px rgba(0,0,0,0.55),
                0 0 24px rgba(255,100,100,0.28);
  }
  .actions .xlsx:hover{
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.22),
              0 0 0 2px rgba(255,230,0,0.40),
              0 12px 28px rgba(0,0,0,0.55),
              0 0 24px rgba(255,230,100,0.28);
}
  .actions .refresh:hover{
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.22),
                0 0 0 2px rgba(0,130,255,0.45),
                0 12px 28px rgba(0,0,0,0.55),
                0 0 24px rgba(0,160,255,0.28);
  }
  .actions .zip{
    background: transparent;
    border-color: rgba(255,130,130,0.75);
    box-shadow:
      0 0 10px rgba(255,80,80,0.80),
      0 14px 30px rgba(0,0,0,0.80),
      inset 0 1px 0 rgba(255,255,255,0.22);
    color: #fff;
    animation: zipPulse 12s infinite alternate;
  }
  .actions .xlsx{
    background: transparent;
    border-color: rgba(255,230,120,0.80);
    box-shadow:
      0 0 10px rgba(255,230,0,0.82),
      0 14px 30px rgba(0,0,0,0.80),
      inset 0 1px 0 rgba(255,255,255,0.22);
    color: #fff;
    animation: xlsxPulse 12s infinite alternate;
  }
  .actions .refresh{
    background: transparent;
    border-color: rgba(80,170,255,0.80);
    box-shadow:
      0 0 10px rgba(0,140,255,0.85),
      0 14px 30px rgba(0,0,0,0.80),
      inset 0 1px 0 rgba(255,255,255,0.22);
    color: #fff;
    animation: refreshPulse 12s infinite alternate;
  }
  .actions #goRoaBtn{
    background: linear-gradient(135deg, rgba(255,255,0,0.35), rgba(255,255,120,0.3));
    animation: roaPulse 12s infinite alternate;
  }

  @keyframes zipPulse {
    0% { box-shadow: 0 0 8px rgba(255,80,80,0.4), 0 0 20px rgba(255,120,120,0.4); }
    100% { box-shadow: 0 0 18px rgba(255,80,80,0.85), 0 0 40px rgba(255,120,120,0.85); }
  }
  @keyframes xlsxPulse {
  0%   { box-shadow: 0 0 8px rgba(255,230,0,0.4), 0 0 20px rgba(255,200,0,0.4); }
  100% { box-shadow: 0 0 18px rgba(255,230,0,0.85), 0 0 40px rgba(255,200,0,0.85); }
  }
  @keyframes refreshPulse {
    0%   { box-shadow: 0 0 8px rgba(0,120,255,0.4), 0 0 20px rgba(0,160,255,0.4); }
    100% { box-shadow: 0 0 18px rgba(0,120,255,0.85), 0 0 40px rgba(0,160,255,0.85); }
  }
  @keyframes roaPulse {
    0% { box-shadow: 0 0 8px rgba(255,255,0,0.4), 0 0 20px rgba(255,255,120,0.4); }
    100% { box-shadow: 0 0 18px rgba(255,255,0,0.8), 0 0 40px rgba(255,255,120,0.8); }
  }
  
  body::before{
    content: "";
    position: fixed;
    inset: 0;
    background: #020617 url("./atardecer.jpg") center center / cover no-repeat;
    pointer-events: none;
    z-index: -2;
  }
  body::after{
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    background: transparent;
  }
  body.paused::before{
    animation-play-state: paused !important;
  }
  body.paused::after{
    animation-play-state: paused !important;
  }


  .star-layer{
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  }
  .star-layer .star{
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(255,255,255,0.95);
    box-shadow: 0 0 6px rgba(255,255,255,0.85);
    opacity: 0.0;
    animation-name: starTwinkle;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  @keyframes starTwinkle{
    0%{
      opacity: 0.0;
      transform: scale(1);
    }
    40%{
      opacity: 0.9;
      transform: scale(1.4);
    }
    70%{
      opacity: 0.4;
      transform: scale(1.1);
    }
    100%{
      opacity: 0.0;
      transform: scale(1);
    }
  }

  body.zoomImpact::before{
    animation: strongZoom 1.2s ease-out forwards;
  }
  body.zoomImpact::after{
    animation: strongZoom 1.2s ease-out forwards;
  }
  @keyframes strongZoom{
    0%{
      background-size: 100% auto;
      background-position: 50% 70%;
    }
    40%{
      background-size: 510% auto;
      background-position: 50% 70%;
    }
    100%{
      background-size: 100% auto;
      background-position: 50% 70%;
    }
  }
  #delitoOtroTexto::placeholder { color:#ff0000; opacity:1; }

  h1 {
  text-transform: uppercase;
  margin: 14px 0 14px;
  font-size: 45px;
  line-height: 1.1;
  letter-spacing: .6px;
  text-align: center;
  position: relative;
  isolation: isolate;
  background: linear-gradient(150deg, #ffffff 0%, #014bf6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
  color: transparent;
  text-shadow:
    0 1px 0 rgba(0, 0, 0, 0.75),
    0 0 10px rgba(230, 238, 252, 0.9),
    0 0 40px rgba(1, 75, 246, 0.8);
  -webkit-text-stroke: 2.5px rgba(255, 255, 255, .35);
  filter: saturate(1.15);
}
  #marca-registro {
    position: fixed; bottom: 0%; right: 5px; font-size: 8px;
    color: rgba(255, 0, 0, 0.5); pointer-events: none; user-select: none; z-index: 9999;
    font-family: Arial, sans-serif; text-align: center; line-height: 1.2;
  }
  .field-card, .field-card * { text-align: center; }
  .field-card { align-items: center; }
  select { text-align-last: center; }

  .titulo-img { text-align:center; margin:0; }
  .titulo-img img { max-width:100%; height:auto; display:inline-block; filter: drop-shadow(2px 2px 8px rgba(0,0,0,0.7)); }

:root { --grid-bottom-gap: 26px; } 
.grid-rows:last-of-type {
  margin-bottom: var(--grid-bottom-gap) !important;
}
:root { --button-height: 80px; }
.actions.actions-outside { margin-top: calc(var(--button-height) / 2) !important; }

  body{
  margin:0;
  font-family: Segoe UI,Roboto,Arial,sans-serif;
  color:#eef2ff !important;
  background-color:#020617 !important;
  min-height:100vh;
  overflow-x:hidden;
  position:relative;
}
h2, label {
    color: #c7ccff !important;
    text-shadow: none !important;
  }

  #motionToggleLabel{
  position: fixed;
  right: 20px;
  top: 14px;
  font-size: 11px;
  color: rgba(200,200,200,0.55);
  z-index: 9999;
  pointer-events: none;
}
  body > *{ position: relative; z-index: 1; }

  form {
    background: transparent !important;
    border: 1px solid rgba(255,255,255,0.20) !important;
    box-shadow: 0 8px 28px rgba(0,0,0,0.58), inset 0 1px 0 rgba(255,255,255,0.16) !important;
  }
  .field-card {
    background: transparent !important;
    border: 1px solid rgba(255,255,255,0.18) !important;
    box-shadow: 0 4px 14px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.18) !important;
    transition: box-shadow .2s ease, border-color .2s ease;
  }
  .field-card:hover {
    border-color: rgba(136,170,255,0.65) !important;
    box-shadow: 0 0 12px rgba(136,170,255,0.38) !important;
  }
  input, textarea {
  background: rgba(255, 255, 255, 0.18) !important;  
  color: #ffffff !important;
  border: 1px solid rgba(255,255,255,0.35) !important;
  border-radius: 8px !important;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
select {
  background: rgba(255, 255, 255, 0.18) !important;
  color: #ffffff !important;
  border: 1px solid rgba(255,255,255,0.35) !important;
  border-radius: 8px !important;
  appearance: auto !important;
  -webkit-appearance: menulist !important;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
  input::placeholder, textarea::placeholder { color: rgba(230,230,230,0.75) !important; opacity: 1; }
  input:focus, select:focus, textarea:focus {
    border-color: #88aaff !important; box-shadow: 0 0 0 2px rgba(136,170,255,0.30) !important;
  }
  h2 { border-bottom: none !important; position: relative; }
  h2::after {
    content: ""; position: absolute; left: 0; right: 0; bottom: -2px; height: 2px;
    background: linear-gradient(90deg, rgba(120,170,255,0) 0%, rgba(120,170,255,0.9) 35%, rgba(120,170,255,0.9) 65%, rgba(120,170,255,0) 100%);
  }
  form { margin-bottom: 0 !important; padding-bottom: 0 !important; }
  .actions { margin-top: 10px !important; }
  
  .glass-wrap{
    position: relative;
    border: 1px solid rgba(255,255,255,0.28);
    border-radius: 8px;
    background: rgba(255,255,255,0.06);
    overflow: hidden;
    isolation: isolate;
  }
  
  .glass-wrap::before{
    content: "";
    position: absolute; inset: 0;
    border-radius: inherit;
    background: linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.18) 20%, rgba(255,255,255,0) 55%);
    pointer-events: none;
    z-index: 0;
  }
  
  .glass-wrap::after{
    content: "";
    position: absolute; inset: 0;
    border-radius: inherit;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    pointer-events: none;
    z-index: 0;
  }
  
  .glass-field{
    display: block; width: 100%;
    background: transparent !important; color: #ffffff !important;
    border: 0 !important; outline: 0 !important;
    padding: 10px 12px; font: inherit; line-height: 1.2;
    position: relative;
    z-index: 1;
  }
  
  .glass-wrap > select.glass-field{
    appearance: auto; -webkit-appearance: menulist;
    padding-right: 40px;
  }
  
  .glass-wrap:focus-within{
    box-shadow: 0 0 0 2px rgba(136,170,255,0.30);
    border-color: rgba(136,170,255,0.65);
  }
select option{background:#0f1221 !important; color: #ffffff !important;}
  `;
  const style = document.createElement('style');
  style.id = '__css_reg_jason';
  style.textContent = css;
  document.head.appendChild(style);
  
})();

function triggerZoomImpact(){
  document.body.classList.add("zoomImpact");
  setTimeout(() => {
    document.body.classList.remove("zoomImpact");
  }, 900);
}

document.addEventListener("DOMContentLoaded", () => {
  // Capa de estrellas independientes en el cielo
  const starLayer = document.createElement("div");
  starLayer.className = "star-layer";
  document.body.appendChild(starLayer);
  const STAR_COUNT = 42;
  for (let i = 0; i < STAR_COUNT; i++) {
    const s = document.createElement("div");
    s.className = "star";
    // Solo en la parte superior (cielo): 0–42vh aprox.
    const x = Math.random() * 100;
    const y = Math.random() * 42;
    s.style.left = x + "vw";
    s.style.top = y + "vh";
    const duration = 10 + Math.random() * 14;   // 10–24 s
    const delay = Math.random() * duration;     // desfasadas entre sí
    s.style.animationDuration = duration + "s";
    s.style.animationDelay = (-delay) + "s";
    starLayer.appendChild(s);
  }

/*
// Crear texto fijo en pantalla
const lbl = document.createElement("div");
lbl.id = "motionToggleLabel";
lbl.textContent = "Ctrl E - On/Off Anim.";
document.body.appendChild(lbl);
*/

/*
  // Toggle animación con Ctrl + E
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && (e.key === "e" || e.key === "E")) {
      document.body.classList.toggle("paused");
    }
  });
*/

  const dlButtons = document.querySelectorAll(".actions .zip, .actions .xlsx, .actions .refresh");
  dlButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      triggerZoomImpact();
    });
  });
});
