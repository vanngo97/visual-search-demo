:root{
  --bg:#ffffff;
  --bg-soft:#f7f7f7;
  --text:#111;
  --primary:#1a73e8;
  --radius:10px;
  --shadow:0 2px 8px rgba(0,0,0,.08);
  --transition:.3s ease;
}
[data-theme="dark"]{
  --bg:#121212;
  --bg-soft:#1e1e1e;
  --text:#e5e5e5;
  --primary:#8ab4f8;
}

*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',Arial,Helvetica,sans-serif;background:var(--bg);color:var(--text);display:flex;flex-direction:column;min-height:100vh;transition:background var(--transition),color var(--transition)}
header{background:var(--primary);color:#fff;padding:20px 24px;display:flex;align-items:center;gap:12px;position:sticky;top:0;z-index:10}
header h1{flex:1;font-size:1.4rem;font-weight:600}
#themeToggle{background:none;border:none;color:#fff;font-size:1.4rem;cursor:pointer}
header input{flex:2;max-width:420px;padding:8px 12px;border-radius:var(--radius);border:none;font-size:1rem}
main{display:flex;gap:24px;padding:24px;flex:1}
.visual-clusters{flex:3}
.image-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}
.image-grid img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:var(--radius);cursor:pointer;transition:transform var(--transition);box-shadow:var(--shadow)}
.image-grid img:hover{transform:scale(1.05)}
.sidebar{flex:1;background:var(--bg-soft);padding:20px;border-radius:var(--radius);box-shadow:var(--shadow);position:sticky;top:100px;height:fit-content;max-width:260px}
.sidebar h2{font-size:1.1rem;margin-bottom:12px}
.sidebar button{background:var(--primary);color:#fff;border:none;padding:6px 12px;border-radius:var(--radius);margin:4px 4px 4px 0;cursor:pointer;transition:filter var(--transition)}
.sidebar button:hover{filter:brightness(1.1)}
#sidebarToggle{display:none;position:fixed;bottom:20px;right:20px;background:var(--primary);color:#fff;border:none;border-radius:50%;width:48px;height:48px;font-size:1.2rem;cursor:pointer;z-index:11}
@media(max-width:768px){
  main{flex-direction:column;padding:16px}
  .sidebar{max-width:100%;position:fixed;top:0;right:-300px;height:100%;z-index:12;transition:right var(--transition);border-radius:0}
  .sidebar.open{right:0}
  #sidebarToggle{display:block}
}
footer{text-align:center;padding:12px;color:var(--text);opacity:.7}
