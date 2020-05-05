let companies = [
    {name: 'company 1', category: 'finance', start: 1981, end: 2003},
    {name: 'company 2', category: 'Education', start: 1977, end: 1999},
    {name: 'company 7', category: 'Entertainment', start: 2003, end: 2003},
    {name: 'company 8', category: 'Sport', start: 1979, end: 2015},
    {name: 'company 9', category: 'Religion', start: 1997, end: 2005},
    {name: 'company 3', category: 'Health', start: 1995, end: 2010},
    {name: 'company 4', category: 'Technology', start: 1985, end: 2003},
    {name: 'company 2', category: 'Education', start: 1977, end: 1999},
    {name: 'company 5', category: 'Agriculture', start: 2000, end: 2009},
    {name: 'company 6', category: 'Real Estate', start: 1980, end: 2015},
    {name: 'company 7', category: 'Entertainment', start: 2003, end: 2003},
    {name: 'company 8', category: 'Sport', start: 1979, end: 2015},
    {name: 'company 4', category: 'Technology', start: 1985, end: 2003},
    {name: 'company 9', category: 'Religion', start: 1997, end: 2005},
]

let ages = [45, 65, 23, 13, 87, 46, 92, 3, 28, 17, 30, 41, 7, 29, 53, 39, 50, 27]

// forLoop

for( i = 0; i < companies.length; i++){
    console.log(companies[i]);
    
}   

let canDrink = [];

for( i = 0; i < ages.length; i++){
    if(ages[i] > 18){
        canDrink.push(ages[i])
    }    
}

console.log(canDrink);


// forEach

companies.forEach(function(company){
    console.log(company.name);
    
})

// filter

const canClub = []

ages.filter(function(age){
    if(age > 30){
        canClub.push(age)
    }
})

console.log(canClub);


const newCanDrink =  ages.filter( age => age > 50)

console.log(newCanDrink);

let technologicalCompanies = companies.filter(function(company){
    if(company.category === 'Technology'){
        return true;
    }
})

console.log(technologicalCompanies);

let newCompanies = companies.filter( company => company.category === 'Education')
console.log(newCompanies);


// map


let mapCompanies = companies.map(function(company){
    return company.name
})

console.log(mapCompanies);


let newMapCompany = companies.map( company => `${company.name}  [${company.start} - ${company.end}]`);

console.log(newMapCompany);

// sort

let sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1;
    } else {
        return -1;
    }
})

console.log(sortedCompanies);

newSortedCompanies = companies.sort((c1, c2) => c1 > c2 ? 1 : -1)

console.log(newSortedCompanies);


let ageReduce = ages.sort(function(a, b){
    return a - b;
})

console.log(ageReduce)


// reduce

let reducedCompanies = companies.reduce((total, company,) => total += company.end - company.start, 0)

console.log(reducedCompanies)
