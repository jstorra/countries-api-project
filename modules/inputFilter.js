import { loadCountryCards } from './loadCountryCards.js';

export const inputFilter = (data) => {
    const filterBar = document.querySelector('.inputFilter');
    const selectFilter = document.querySelector('#selectFilter')

    selectFilter.addEventListener('change', () => {
        filterBar.value = "";
        loadCountryCards(data);
    })

    filterBar.addEventListener("input", () => {
        const value = filterBar.value.toLowerCase();
        let filteredData;

        if (value === "") {
            filteredData = data;
        } else if (selectFilter.value === "country" || selectFilter.value === "") {
            filteredData = data.filter(country => country.name?.common?.toLowerCase().startsWith(value))
        } else if (selectFilter.value === "currency") {
            filteredData = data.filter(country => {
                for (const c in country.currencies) {
                    const name = country.currencies?.[c]?.name.toLowerCase()
                    if (name.startsWith(value)) return true;
                }
            })
        }

        loadCountryCards(filteredData)
    })
}