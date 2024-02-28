import { loadCountryCards } from './loadCountryCards.js';
import { loadCountryModals } from './loadModals.js';

export const inputFilter = (data, api) => {
    const filterBar = document.querySelector('.inputFilter');
    const selectFilter = document.querySelector('#selectFilter')

    selectFilter.addEventListener('change', () => {
        filterBar.value = "";
        loadCountryCards(data);
    })

    filterBar.addEventListener("input", async () => {
        const value = filterBar.value.toLowerCase();
        let filteredData;

        if (value === "") {
            filteredData = data;
        } else if (selectFilter.value === "all") {
            filteredData = data.filter(country => country.name?.common?.toLowerCase().startsWith(value))
        } else if (selectFilter.value === "continent") {
            filteredData = data.filter(country => {
                for (const c of country.continents) {
                    if (c.toLowerCase().startsWith(value)) return true;
                }
            })
        } else if (selectFilter.value === "currency") {
            filteredData = data.filter(country => {
                for (const c in country.currencies) {
                    const name = country.currencies?.[c]?.name.toLowerCase()
                    if (name.startsWith(value)) return true;
                }
            })
        }

        loadCountryCards(filteredData)
        await loadCountryModals(api);
    })
}