let itens = [];

const input = document.getElementById("searchInput");
const resultados = document.getElementById("autocompleteResults");

fetch("dados/procedimentos.json")
    .then(response => response.json())
    .then(data => {
        itens = data;
    });

function destacar(texto, termo) {

    const regex = new RegExp(`(${termo})`, "gi");

    return texto.replace(
        regex,
        "<mark>$1</mark>"
    );
}

input?.addEventListener("input", () => {

    const termo =
        input.value
            .toLowerCase()
            .trim();

    resultados.innerHTML = "";

    if (termo.length < 2) {
        return;
    }

    const encontrados = itens.filter(item =>

        item.titulo.toLowerCase().includes(termo) ||

        item.descricao.toLowerCase().includes(termo) ||

        item.categoria.toLowerCase().includes(termo)

    );

    if (encontrados.length === 0) {

        resultados.innerHTML = `
            <div class="autocomplete-item">
                Nenhum resultado encontrado.
            </div>
        `;

        return;
    }

    encontrados.forEach(item => {

        const div =
            document.createElement("div");

        div.className =
            "autocomplete-item";

        div.innerHTML = `

            <strong>

                ${item.icone}
                ${destacar(item.titulo, termo)}

            </strong>

            <br>

            <small>

                ${destacar(item.descricao, termo)}

            </small>

            <br>

            <span style="
                color:#64748b;
                font-size:.8rem;
            ">

                ${item.categoria}

            </span>

        `;

        div.addEventListener(
            "click",
            () => {

                window.location.href =
                    item.url;

            }
        );

        resultados.appendChild(div);

    });

});

document.addEventListener("click", (event) => {

    if (
        !event.target.closest(
            ".search-wrapper"
        )
    ) {

        resultados.innerHTML = "";

    }

});