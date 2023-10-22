const inputArquivo = document.querySelector('#arquivo');
const listaArquivos = document.querySelector('#tabelaArquivos');

inputArquivo.addEventListener('change', function () {
    for (const file of this.files) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = file.name;
        row.appendChild(cell);
        listaArquivos.appendChild(row);
    }
});



const download = function () {
    return function (conteudos, nomesArquivos) {
        for (let i = 0; i < conteudos.length; i++) {
            const conteudo = conteudos[i];
            const nomeArquivo = nomesArquivos[i];
            const a = document.createElement('a');
            a.style.display = 'none';
            document.body.appendChild(a);

            const blob = new Blob([conteudo], { type: 'octet/stream' });
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = nomeArquivo;
            a.click();
            window.URL.revokeObjectURL(url);
        }
    };
};

btnDownload.addEventListener('click', function () {
    const conteudos = ['Conteúdo do arquivo 1', 'Conteúdo do arquivo 2']; // Adicione os conteúdos dos arquivos aqui
    const nomesArquivos = ['arquivo1.txt', 'arquivo2.txt']; // Adicione os nomes dos arquivos aqui
    download()(conteudos, nomesArquivos);
});
