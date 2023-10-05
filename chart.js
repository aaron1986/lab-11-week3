const chartCanvas = document.getElementById("chart");
const chartContext = chartCanvas.getContext("2d");

const products = JSON.parse(localStorage.getItem("products"));

const chartLabels = [];
const clickCounts = [];
const viewCounts = [];

for (let i = 0; i < products.length; i++) {
    chartLabels.push(products[i].name);
    clickCounts.push(products[i].clicks);
    viewCounts.push(products[i].views);

    //console.log(clickCounts);
}

const chart = new Chart(chartContext, {
    type: "bar",
    data: {
        labels: chartLabels,
        datasets: [{
            label: "Clicks",
            data: clickCounts,
            backgroundColor: ["rgba(39, 172, 245, 0.8)", "rgba(245, 40, 145, 0.8)", "rgba(39, 245, 193, 0.8)", "rgba(241, 245, 39, 0.8)", "rgba(245, 133, 39, 0.8)"],
        },
        {
            label: "Views",
            data: viewCounts,
            backgroundColor: ["#000"],
        },
    ],
    },
});