const data = [
    { id: "1", name: "flex1", uap: "zone1", qte: 500, cadence: 600, color: "orange", defaut: 20 },
    { id: "2", name: "flex2", uap: "zone1", qte: 500, cadence: 650, color: "orange", defaut: 20 },
    { id: "3", name: "flex3", uap: "zone1", qte: 500, cadence: 670, color: "orange", defaut: 20 },
    { id: "4", name: "cm3/cm4 ligne1", uap: "zone2", qte: 200, cadence: 600, color: "red", defaut: 20 },
    { id: "5", name: "cm3/cm4 ligne2", uap: "zone2", qte: 700, cadence: 600, color: "green", defaut: 20 },
    { id: "6", name: "cm3/cm4 ligne2", uap: "zone3", qte: 700, cadence: 600, color: "green", defaut: 20 }
];


const grouped = {};
for (const item of data) {
    const key = item.uap;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(item);
}
console.log(grouped);
const app = document.getElementById('app');


//UAP sections 
for (const [uap, items] of Object.entries(grouped)) {
    const section = document.createElement('div');
    section.className = 'uap-section';
    section.innerHTML = `<h2>${uap.toUpperCase()}</h2>`;
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.style.backgroundColor = item.color;
        div.innerHTML = `
  <strong>${item.name}</strong>
  <div class="item-info">
    ID: ${item.id} | QTE: ${item.qte} | Cadence: ${item.cadence} | Défaut: ${item.defaut}
  </div>
`;

        section.appendChild(div);

    });
    app.appendChild(section);
}
