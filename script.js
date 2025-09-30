// --- CALENDARIO ---
// Definisci manualmente le giornate con partite, date e squadre che riposano
const giornate = [
  {
    giornata: 1,
    partite: [
      { data: "Martedì 30/09 - 20.30", squadra1: "PSG1", gol1: "", squadra2: "Martiri", gol2: "" },
      { data: "Mercoledì 1/10 - 20.30", squadra1: "Natività", gol1: "", squadra2: "SGM", gol2: "" }
    ],
    riposo: ["PSG2"]
  },
  {
    giornata: 2,
    partite: [
      { data: "Giovedì 2/10 - 20.30", squadra1: "PSG1", gol1: "", squadra2: "Natività", gol2: "" },
      { data: "Venerdì 3/10 - 20.30", squadra1: "Martiri", gol1: "", squadra2: "PSG2", gol2: "" }
    ],
    riposo: ["SGM"]
  },
  {
    giornata: 3,
    partite: [
      { data: "Sabato 4/10 - 18.00", squadra1: "Martiri", gol1: "", squadra2: "SGM", gol2: "" },
      { data: "Domenica 5/10 - 18.00", squadra1: "PSG2", gol1: "", squadra2: "SGM", gol2: "" }
    ],
    riposo: ["PSG1, Natività"]
  },
  {
    giornata: 4,
    partite: [
      { data: "Lunedì 6/10 - 18.30", squadra1: "PSG2", gol1: "", squadra2: "Natività", gol2: "" },
      { data: "Lunedì 6/10 - 20.00", squadra1: "SGM", gol1: "", squadra2: "PSG1", gol2: "" }
    ],
    riposo: ["Martiri"]
  },
  {
    giornata: 5,
    partite: [
      { data: "Martedì 7/10 - 20.30", squadra1: "PSG1", gol1: "", squadra2: "PSG2", gol2: "" },
      { data: "Giovedì 9/10 - 20.30", squadra1: "Martiri", gol1: "", squadra2: "Natività", gol2: "" }
    ],
    riposo: ["SGM"]
  }
];

const calendarioBody = document.querySelector("#tabella-calendario tbody");
calendarioBody.innerHTML = "";

// Ciclo sulle giornate per costruire la tabella
giornate.forEach(giornata => {
  // Riga intestazione giornata (solo numero)
  const trIntestazione = document.createElement("tr");
  trIntestazione.classList.add("table-primary");
  trIntestazione.innerHTML = `<td colspan="5" class="fw-bold">Giornata ${giornata.giornata}</td>`;
  calendarioBody.appendChild(trIntestazione);

  // Partite di ogni giornata
  giornata.partite.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.data}</td>
      <td style="text-align: right;">${p.squadra1}</td>
      <td style="text-align: center;">${p.gol1} - ${p.gol2}</td>
      <td style="text-align: left;">${p.squadra2}</td>
    `;
    calendarioBody.appendChild(tr);
  });

  // Riga per le squadre che riposano
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
