const $ = (selector, isAll) => {
    if(isAll)
        return document.querySelectorAll(selector)

    return document.querySelector(selector)
}

const allProtsentBar = $('.container > .st_cont > .st_soni > .doubl_foiz_box > .st_foiz > .foiz_s', true)
allProtsentBar.forEach(protsentBar => {
    protsentBar.style.setProperty('--bar-protsent', protsentBar.children[0].innerText)
    protsentBar.style.setProperty('--bar-color', protsentBar.getAttribute('data-bar-color'))
})








const ctx = document.getElementById('chart_f').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['IT', 'Matematika', 'Fizika', 'Ingiliz tili', 'Rus tili', 'Ona tili'],
        datasets: [{
            label: '# of Votes',
            data: [49, 48, 47, 45, 43, 23],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});