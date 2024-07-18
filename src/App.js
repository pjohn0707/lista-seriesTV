import React, { useState } from 'react';
import FormularioSerie from './Components/FormularioSerie';
import ListaSeries from './Components/ListaSeries';
import './App.css';

const App = () => {
  // Estado para armazenar a lista de séries
  const [series, setSeries] = useState([]);
  // Estado para armazenar a série que está sendo editada
  const [serieEditando, setSerieEditando] = useState(null);

  // Adicionar nova série à lista
  const adicionarSerie = (novaSerie) => {
    setSeries([...series, novaSerie]);
  };

  // Remover uma série específica da lista
  const removerSerie = (id) => {
    setSeries(series.filter((serie) => serie.id !== id));
  };

  // Editar uma série existente na lista
  const editarSerie = (serieEditada) => {
    setSeries(series.map((serie) => (serie.id === serieEditada.id ? serieEditada : serie)));
    setSerieEditando(null);
  };

  // Remover todas as séries da lista
  const removerTodasSeries = () => {
    setSeries([]);
  };

  return (
    <div className="App">
      <h1>Lista de séries de TV</h1>
      <FormularioSerie
        adicionarSerie={adicionarSerie}
        serieEditando={serieEditando}
        editarSerie={editarSerie}
      />
      <h1>Séries adicionadas à lista</h1>
      <ListaSeries
        series={series}
        removerSerie={removerSerie}
        setSerieEditando={setSerieEditando}
        removerTodasSeries={removerTodasSeries}
      />
    </div>
  );
};

export default App;