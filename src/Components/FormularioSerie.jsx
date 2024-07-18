import React, { useState, useEffect } from 'react';

// Componente funcional FormularioSerie que recebe props
const FormularioSerie = ({ adicionarSerie, serieEditando, editarSerie }) => {
    // Estado para os dados do formulário
    const [nome, setNome] = useState('');

    // Atualiza o formulário se uma série está sendo editada
    useEffect(() => {
        if (serieEditando) {
            // Define o nome da série que está sendo editada
            setNome(serieEditando.nome);
        }
    }, [serieEditando]); // Executa o efeito sempre que serieEditando mudar

    // Função para lidar com o envio do formulário
    const Envio = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de envio do formulário
        if (serieEditando) {
            editarSerie({ id: serieEditando.id, nome });
        } else {
            adicionarSerie({ id: Date.now(), nome });
        }
        // Limpa o campo de nome após o envio do formulário
        setNome('');
    };

    return (
        <form onSubmit={Envio}>
            <input type="text" placeholder="Nome da Série" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <button type="submit">{serieEditando ? 'Editar Série' : 'Adicionar Série'}</button>
        </form>
    );
};

export default FormularioSerie;
