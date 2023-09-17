export default (window) => {
  const document = window.document;
  const dataTable = document.getElementById("dataTable");
  const listeners = [];
  const listen = (listener) => listeners.push(listener);
  const displayError = (e) => {
    const errorParagraph = document.getElementById("error");
    errorParagraph.innerText = e;
   };
 };

const prompt = window.prompt.bind(window);

function refreshData(row, _data) {
  let td = document.createElement("td");
  td.textContent = `${_data.toString}`;
  row.appendChild(td);
};


const update = (model) => {
  console.log("Refreshing...");

  let row = document.createElement("tr");

  let temperature = model.temperature;
  let precipitation = model.precipitation;
  let wind = model.wind;
  let cloud = model.cloud;
  
  refreshData(row, temperature);
  refreshData(row, precipitation);
  refreshData(row, wind);
  refreshData(row, cloud);

  dataTable.appendChild(td);
};

return { update, listen, prompt, displayError };