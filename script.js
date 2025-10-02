// --- CALENDARIO ---
const giornate = [
  {
    giornata: 1,
    partite: [
      { 
        data: "Martedì 30/09  Ore 20.30", 
        squadra1: "PSG1🔴", gol1: "1", 
        squadra2: "Martiri⚪", gol2: "5",        
        marcatori1: ["Lorenzo Brito(1)"],
        marcatori2: ["Kevin Tirilló(1)", "Daniele Croce(2)", "Massimo Boccanera(1)", "Daniel Rosati(1)"],
		ammoniti: ["🟨 Mauro Toro(PSG1🔴)"]
      },
      { 
        data: "Mercoledì 1/10  Ore 20.30", 
        squadra1: "Natività🔘", gol1: "4", 
        squadra2: "SGM⚫", gol2: "3",
        marcatori1: ["Pietro Malventano(1)", "Leonardo Campara(3)"],
        marcatori2: ["Leonardo Rocchi(1)", "Emiliano Camponovo(2)"],
		ammoniti: []
      }
    ],
    riposo: ["PSG2🔵"]
  },
  {
    giornata: 2,
    partite: [
      { 
        data: "Venerdì 3/10  Ore 20.30", 
        squadra1: "Martiri⚪", gol1: "", 
        squadra2: "SGM⚫", gol2: "",
        marcatori1: [],
        marcatori2: [],
		ammoniti: []
      }
    ],
    riposo: ["SGM⚫", PSG1🔴, Natività🔘]
  },
  {
    giornata: 3,
    partite: [
      { 
        data: "Sabato 4/10  Ore 18.00", 
        squadra1: "Martiri⚪", gol1: "", 
        squadra2: "SGM⚫", gol2: "",
        marcatori1: [],
        marcatori2: [],
		ammoniti: []
      },
      { 
        data: "Domenica 5/10  Ore 18.00", 
        squadra1: "PSG2🔵", gol1: "", 
        squadra2: "Martiri⚪", gol2: "",
        marcatori1: [],
        marcatori2: [],
		ammoniti: []
      },
      { 
        data: "Domenica 5/10  Ore 19.30", 
        squadra1: "PSG1🔴", gol1: "", 
        squadra2: "Natività🔘", gol2: "",
        marcatori1: [],
        marcatori2: [],
		ammoniti: []
      },  
    ],
    riposo: [""]
  },
  {
    giornata: 4,
    partite: [
      { 
        data: "Lunedì 6/10  Ore 18.30", 
        squadra1: "PSG2🔵", gol1: "", 
        squadra2: "Natività🔘", gol2: "",
        marcatori1: [],
        marcatori2: [],
		ammoniti: []
      },
      { 
        data: "Lunedì 6/10  Ore 20.00", 
        squadra1: "SGM⚫", gol1: "", 
        squadra2: "PSG1🔴", gol2: "",
        marcatori1: [],
        marcatori2: [],
		ammoniti: []
      }
    ],
    riposo: ["Martiri⚪"]
  },
  {
    giornata: 5,
    partite: [
      { 
        data: "Martedì 7/10  Ore 20.30", 
        squadra1: "PSG1🔴", gol1: "", 
        squadra2: "PSG2🔵", gol2: "",
        marcatori1: [],
        marcatori2: [],
		ammoniti: []
      },
      { 
        data: "Giovedì 9/10  Ore 20.30", 
        squadra1: "Martiri⚪", gol1: "", 
        squadra2: "Natività🔘", gol2: "",
        marcatori1: [],
        marcatori2: [],
		ammoniti: []
      }
    ],
    riposo: ["SGM⚫"]
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
      <td style="text-align: center;">${p.ammoniti.length > 0 ? p.ammoniti.join(", ") : "-"}</td>
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
  { squadra: "Martiri⚪", punti: 3, g: 1, v: 1, n: 0, p: 0, gf: 5, gs: 1, dr: 4 },
  { squadra: "Natività🔘", punti: 3, g: 1, v: 1, n: 0, p: 0, gf: 4, gs: 3, dr: 1 },
  { squadra: "SGM⚫", punti: 0, g: 1, v: 0, n: 0, p: 1, gf: 3, gs: 4, dr: -1 },
  { squadra: "PSG1🔴", punti: 0, g: 1, v: 0, n: 0, p: 1, gf: 1, gs: 5, dr: -4 },
  { squadra: "PSG2🔵", punti: 0, g: 0, v: 0, n: 0, p: 0, gf: 0, gs: 0, dr: 0 }

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
  { nome: "Leonardo Campara", squadra: "Natività🔘", gol: 3 },
  { nome: "Emiliano Camponovo", squadra: "SGM⚫", gol: 2 },
  { nome: "Daniele Croce", squadra: "Martiri⚪", gol: 2 },
  { nome: "Leonardo Rocchi", squadra: "SGM⚫", gol: 1},
  { nome: "Pietro Malventano", squadra: "Natività🔘", gol: 1},
  { nome: "Daniel Rosati", squadra: "Martiri⚪", gol: 1},
  { nome: "Kevin Tirilló", squadra: "Martiri⚪", gol: 1},
  { nome: "Massimo Boccanera", squadra: "Martiri⚪", gol: 1},
  { nome: "Lorenzo Brito", squadra: "PSG1🔴", gol: 1}
  
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

