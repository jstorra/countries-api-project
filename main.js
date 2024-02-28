import { getData } from './modules/getDataCountries.js';
import { loadCountryCards } from './modules/loadCountryCards.js';
import { inputFilter } from './modules/inputFilter.js';
import { loadCountryModals } from './modules/loadModals.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const {data, api} = await getData();
        inputFilter(data, api);
        loadCountryCards(data);
        await loadCountryModals(api);
    } catch (error) {
        console.log(error);
    }
});