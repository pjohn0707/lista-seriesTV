import React from 'react';

// Componente funcional ListaSeries que recebe props
const ListaSeries = ({ series, removerSerie, setSerieEditando, removerTodasSeries }) => {
    return (
        <div>
            <ul>
                {/* Mapeia o array de séries */}
                {series.map((serie) => (
                    <li key={serie.id}>
                        <span>{serie.nome}</span>
                        <button onClick={() => setSerieEditando(serie)}>Editar</button>
                        <button onClick={() => removerSerie(serie.id)}>🗑️</button>
                    </li>
                ))}
            </ul>
            <button onClick={removerTodasSeries}>Remover Todas</button>
        </div>
    );
};

export default ListaSeries;
