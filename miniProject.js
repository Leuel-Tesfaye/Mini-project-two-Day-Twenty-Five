

const population = document.querySelector('.population')
const languages = document.querySelector('.languages')
const para = document.querySelector('p')

population.addEventListener('click', () =>{
    para.textContent = '10 Most populated countries in the world'
    para.textContent = countries_data
})


languages.addEventListener('click', () =>{
    para.textContent = '10 Most spoken languages in the world'
})
