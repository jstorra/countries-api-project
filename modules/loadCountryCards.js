export const loadCountryCards = (data) => {
    const main = document.querySelector('main');

    const paises = data.map(pais =>
        `<article class="card-country">
            <figure class="img-country">
                <img src="${pais.flags?.png || ''}" alt="${pais.name?.official || ''}" />
            </figure>
            <div class="name-country">
                <h3>${pais.name?.common || 'Name not available'}</h3>
            </div>
        </article>`
    ).join("");

    main.innerHTML = paises;
}