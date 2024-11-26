function toggleMenu() {
    var dropdown = document.getElementById("mobileNav");
    dropdown.classList.toggle("show");
}

document.addEventListener("click", function(event) {
    const mobileNav = document.getElementById("mobileNav");
    const hamburger = document.querySelector(".hamburger");

    // If the click is outside the mobile navigation and hamburger button, close the dropdown
    if (!mobileNav.contains(event.target) && !hamburger.contains(event.target)) {
        mobileNav.classList.remove("show");
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('populationForm');
    if (!form) return; // Exit if the form is not found (for example on other pages)

    const countryInput = document.getElementById('countryInput');
    const resultElement = document.getElementById('result');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        await fetchPopulation(countryInput.value.trim(), resultElement);
    });
});

async function fetchPopulation(country, resultElement) {
    if (!country) {
        resultElement.textContent = "Please enter a country name.";
        return;
    }

    resultElement.textContent = "Loading...";

    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/population?country=${country}`, {
            headers: { 'X-Api-Key': 'YaTiJRinkDZsKzunJpagpg==nt6gPSK0CL4Ps1HE' }
        });

        const data = await response.json();

        if (data?.historical_population && data.historical_population.length > 0) {
            const latestData = data.historical_population[0];
            const population = latestData.population.toLocaleString();
            const year = latestData.year;
            resultElement.textContent = `The population of ${country} in ${year} was ${population}.`;
        } else {
            resultElement.textContent = `No valid historical population data found for "${country}".`;
        }
    } catch (error) {
        resultElement.textContent = "Error fetching data. Please try again.";
    }
}