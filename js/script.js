// Popolo il mio tabellone
const allNum = []
const populateTable = function(){
    let gameTable = document.getElementById('game-table')
    for(let i=1; i<=76; i++){

        let numCells = document.createElement('div')
        numCells.classList.add('game-cells')
        gameTable.appendChild(numCells)
        numCells.append(`${i}`)
        allNum.push(i)
    }
    return allNum
}
populateTable()
console.log(allNum)

// Creo il bottone per l'estrazione
const extractedNum = []

const extractionBtn = document.getElementById('extraction-btn')
extractionBtn.addEventListener('click', function(){
    let randomNum = Math.floor(Math.random() * 77)
    // Prevengo la possibilità che venga estratto un numero già uscito
    if (extractedNum.indexOf(randomNum) === -1) {
        extractedNum.push(randomNum)
        return extractedNum
    }
    let cellExtractedNum = document.querySelectorAll(".game-cells")
    cellExtractedNum.forEach(cellExtractedNum => {
        if (extractedNum[i] === parseInt(cellExtractedNum.innerText)) {
            cellExtractedNum.classList.add("extracted")
        }
    })
})

console.log(extractedNum)

/* Comparo l'array dei numeri del tabellone con quelli estratti
const nonCommonNum = (allNum, extractedNum) => {
    const nonCommonNum = []
    for(let i = 0; i < allNum.length; i++){
       if(extractedNum.indexOf(allNum[i]) === -1){
          nonCommonNum.push(allNum[i])
       }
    }
    for(let j = 0; j < extractedNum.length; j++){
       if(allNum.indexOf(extractedNum[j]) === -1){
          nonCommonNum.push(extractedNum[j])
       }
    }
    return nonCommonNum;
 }

 console.log(nonCommonNum(allNum,extractedNum))

 if(nonCommonNum)*/