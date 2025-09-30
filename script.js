// --- CALENDARIO ---
const giornate = [
  {
    giornata: 1,
    partite: [
      { 
        data: "Martedì 30/09  Ore 20.30", 
        squadra1: "PSG1", gol1: "", 
        squadra2: "Martiri", gol2: "",        
        marcatori1: [],
        marcatori2: []
      },
      { 
        data: "Mercoledì 1/10  Ore 20.30", 
        squadra1: "Natività", gol1: "", 
        squadra2: "SGM", gol2: "",
        marcatori1: [],
        marcatori2: []
      }
    ],
    riposo: ["PSG2"]
  },
  {
    giornata: 2,
    partite: [
      { 
        data: "Giovedì 2/10  Ore 20.30", 
        squadra1: "PSG1", gol1: "", 
        squadra2: "Natività", gol2: "",
        marcatori1: [],
        marcatori2: []
      },
      { 
        data: "Venerdì 3/10  Ore 20.30", 
        squadra1: "Martiri", gol1: "", 
        squadra2: "PSG2", gol2: "",
        marcatori1: [],
        marcatori2: []
      }
    ],
    riposo: ["SGM"]
  },
  {
    giornata: 3,
    partite: [
      { 
        data: "Sabato 4/10  Ore 18.00", 
        squadra1: "Martiri", gol1: "", 
        squadra2: "SGM", gol2: "",
        marcatori1: [],
        marcatori2: []
      },
      { 
        data: "Domenica 5/10  Ore 18.00", 
        squadra1: "PSG2", gol1: "", 
        squadra2: "SGM", gol2: "",
        marcatori1: [],
        marcatori2: []
      }
    ],
    riposo: ["PSG1", "Natività"]
  },
  {
    giornata: 4,
    partite: [
      { 
        data: "Lunedì 6/10  Ore 18.30", 
        squadra1: "PSG2", gol1: "", 
        squadra2: "Natività", gol2: "",
        marcatori1: [],
        marcatori2: []
      },
      { 
        data: "Lunedì 6/10  Ore 20.00", 
        squadra1: "SGM", gol1: "", 
        squadra2: "PSG1", gol2: "",
        marcatori1: [],
        marcatori2: []
      }
    ],
    riposo: ["Martiri"]
  },
  {
    giornata: 5,
    partite: [
      { 
        data: "Martedì 7/10  Ore 20.30", 
        squadra1: "PSG1", gol1: "", 
        squadra2: "PSG2", gol2: "",
        marcatori1: [],
        marcatori2: []
      },
      { 
        data: "Giovedì 9/10  Ore 20.30", 
        squadra1: "Martiri", gol1: "", 
        squadra2: "Natività", gol2: "",
        marcatori1: [],
        marcatori2: []
      }
    ],
    riposo: ["SGM"]
  }
];

// --- RENDERING CALENDARIO ---
const calendarioBody = document.querySelector("#tabella-calendario tbody");
calendarioBody.innerHTML = "";

giornate.forEach(giornata => {
  // Intestazione giornata
  const trIntestazione = document.createElement("tr");
  trIntestazione.classList.add("table-primary");
  trIntestazione.innerHTML = `<td colspan="5" class="fw-bold">Giornata ${giornata.giornata}</td>`;
  calendarioBody.appendChild(trIntestazione);

  giornata.partite.forEach(p => {
    // Separazione data e ora
    let dataConA_Capo = p.data;
    if (p.data.includes("Ore")) {
      const [giorno, ora] = p.data.split("Ore");
      dataConA_Capo = `${giorno.trim()}<br><small class="text-muted">Ore ${ora.trim()}</small>`;
    }

    // Riga partita
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${dataConA_Capo}</td>
      <td style="text-align: right;">${p.squadra1}</td>
      <td style="text-align: center;">${p.gol1} - ${p.gol2}</td>
      <td style="text-align: left;">${p.squadra2}</td>
    `;
    calendarioBody.appendChild(tr);

    // Riga marcatori
    const trMarcatori = document.createElement("tr");
    trMarcatori.classList.add("riga-marcatori");
    trMarcatori.innerHTML = `
      <td></td>
      <td style="text-align: right;">${p.marcatori1.length > 0 ? p.marcatori1.join(", ") : "-"}</td>
      <td></td>
      <td style="text-align: left;">${p.marcatori2.length > 0 ? p.marcatori2.join(", ") : "-"}</td>
    `;
    calendarioBody.appendChild(trMarcatori);
  });

  // Squadre a riposo
  if (giornata.riposo && giornata.riposo.length > 0) {
    const trRiposano = document.createElement("tr");
    trRiposano.classList.add("table-warning");
    trRiposano.innerHTML = `<td colspan="5" class="fst-italic">Riposa: ${giornata.riposo.join(", ")}</td>`;
    calendarioBody.appendChild(trRiposano);
  }
});

// --- CLASSIFICA ---
const classifica = [
  { squadra: "PSG1", punti: 0, g: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0 },
  { squadra: "PSG2", punti: 0, g: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0 },
  { squadra: "Natività", punti: 0, g: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0 },
  { squadra: "Martiri", punti: 0, g: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0 },
  { squadra: "SGM", punti: 0, g: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0 }
];

const classificaBody = document.querySelector("#tabella-classifica tbody");
classificaBody.innerHTML = "";
classifica.forEach(c => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${c.squadra}</td>
    <td>${c.punti}</td>
    <td>${c.g}</td>
    <td>${c.v}</td>
    <td>${c.n}</td>
    <td>${c.p}</td>
    <td>${c.gf}</td>
    <td>${c.gs}</td>
    <td>${c.dr}</td>
  `;
  classificaBody.appendChild(tr);
});

// --- MARCATORI ---
const marcatori = [
  { nome: "N/A", squadra: "N/A", gol: 0 },
  { nome: "N/A", squadra: "N/A", gol: 0 },
];

const marcatoriBody = document.querySelector("#tabella-marcatori tbody");
marcatoriBody.innerHTML = "";
marcatori.forEach(m => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${m.nome}</td>
    <td>${m.squadra}</td>
    <td>${m.gol}</td>
  `;
  marcatoriBody.appendChild(tr);
});
