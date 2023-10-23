const inputArquivo = document.querySelector('#arquivo');
const listaArquivos = document.querySelector('#tabelaArquivos');
const uploadCard = document.querySelector('#upload-card'); // Adicione esta linha

uploadCard.addEventListener('click', function () { // Adicione este bloco
    inputArquivo.click();
});
    
inputArquivo.addEventListener('change', function () {
    for (const file of this.files) {
        const row = document.createElement('tr');
        const cellNome = document.createElement('td');
        cellNome.textContent = file.name;
        cellNome.className = 'nome-arquivo';
        const cellDownload = document.createElement('td');
        cellDownload.className = 'download-cell';
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(file);
        downloadLink.download = file.name;
        downloadLink.textContent = 'Download';
        downloadLink.className = 'download-button';
        cellDownload.appendChild(downloadLink);
        row.appendChild(cellNome);
        row.appendChild(cellDownload);
        listaArquivos.appendChild(row);
    }
});
