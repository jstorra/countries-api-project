export const loadCountryModals = async (api) => {
    const cards = document.querySelectorAll('.card-country');

    cards.forEach(card => {
        card.addEventListener('click', async () => {
            const name = card.querySelector('h3');
            const country = (await (await fetch(api.replace('/all', `/name/${name.textContent}`))).json())[0];

            let currenciesHTML = '';
            for (const currency in country.currencies) {
                currenciesHTML += `<span class="m-currency">${currency} ${country.currencies[currency].symbol}</span>`;
            }

            let languagesHTML = '';
            for (const language in country.languages) {
                languagesHTML += `<span class="m-language">${country.languages[language]}</span>`;
            }

            Swal.fire({
                html: `
                    <div class="m-country-img">
                        <img src="${country.flags?.png || country.flags?.svg}"/>
                    </div>
                    <h3 class="m-countryName">${country.name.common}</h3>
                    <p class="m-currencies">Currency: ${currenciesHTML}</p>
                    <p>Capital: <span class="m-capital">${country.capital}</span></p>
                    <p class="m-languages">Languages: ${languagesHTML}</p>
                    <p class="m-location">Location: <a href="${country.maps.openStreetMaps || country.maps.googleMaps}" target="_blank" rel="noopener">Go Maps</a></p>
                `
            });
        })
    })
}