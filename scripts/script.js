window.onload = function () {


    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const words = ["", "food", "poor", "goku", "philippines", "superman"]

    
    let blanks = document.querySelector('#blanks')
    let blank = ""
    let randomIndex = Math.floor((Math.random() * (words.length -1) ) + 1)
    let guessedLetter = ""
    let lives = 10
    let guessedArray = []
    let blankArray = []
    let wordArray = words[randomIndex].split('')

    function removeDuplicates(word){
        let arr = word.split('');
    
        word = arr.filter(function(value, index, self) { 
            return self.indexOf(value) === index;
        });

        return word;
    }

    let sortedWord = removeDuplicates(words[randomIndex]).sort()
    console.log(sortedWord)

    
        for(let i = 0; i < words[randomIndex].length; i++){
            blankArray.push('─────── &nbsp')
        }
    
    function displayBlanks(array){
        let contents = ""
        for(let i = 0; i < array.length; i++){
            contents += (array[i] + " ")
        }
        return contents;
    }
    blanks.innerHTML = displayBlanks(blankArray)

    
        let buttons = document.querySelector('#buttons')
        
        for(let i = 0; i < alphabet.length; i++){
            let keys = document.createElement('button')
            let att = document.createAttribute('id')
            att.value = alphabet[i]
            keys.setAttributeNode(att)
    
            keys.innerHTML = alphabet[i]
            
            buttons.appendChild(keys)
        }
        
        for(let i = 0; i < alphabet.length; i++){
            let key = document.querySelector(`#${alphabet[i]}`)
            key.onclick = function (){ 
                guessedLetter = key.innerHTML
                // guess.innerHTML = guessedLetter

                checker(guessedLetter, key)
                
            }
        }
        console.log(guessedLetter)

        function checker(guessedLetter, key){
            if(! (words[randomIndex].includes(guessedLetter) )){
                console.log('test')
                lives -= 1

                if(lives < 1){
                    lives = 0
                    result.innerHTML = 'You lost'
                    
                }

                livesH1.innerHTML = lives + " guesses left"

               
            }
            else{
                guessedArray.push(guessedLetter)
                for(let i = 0; i < wordArray.length; i++ ){
                    let indices = duplicateIndexChecker(wordArray, guessedLetter)
                    console.log(indices)
                    if(indices.length > 1){
                        for(let j = 0; j < indices.length; j++){
                            blankArray[indices[j]] = guessedLetter;
                            blanks.innerHTML = displayBlanks(blankArray)
                        }
                    }
                    else{
                        blankArray[indices[0]] = guessedLetter;
                        blanks.innerHTML = displayBlanks(blankArray)
                    }
                   
                    
                }
                
                
                key.disabled = true
                guessedArray.sort()
                if(guessedArray.length == sortedWord.length ){
                    if(arrayEqualCheck(guessedArray, sortedWord)){
                        result.innerHTML = 'You Win'
                    }
                
                }
            }

        }

        function arrayEqualCheck(arr1, arr2){
            for(let i = 0; i < arr1.length; i++){
                if(arr1[i] !== arr2[i]){
                    return false;
                }
            }

            return true;
        }

        function duplicateIndexChecker(arr, duplicate){
            let indices = []
            arr.filter( (array, index) => {if(array == duplicate) indices.push(index)  })

            return indices
        }

        let result = document.querySelector('#result')
        let guess = document.querySelector('#guess')
        let livesH1 = document.querySelector('#lives')

        // setTimeout(function(){ 
        //     location.reload()
        //     alert("Times Up"); 
        // }, 30000);
        
        
  

    
}