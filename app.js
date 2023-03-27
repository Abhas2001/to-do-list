let input=prompt("what would you like to do")
let todo=['chicken eggs','fish egg']
while(input!=='quit'){
    input=prompt("what would you like to do")
    if(input==='list'){
        console.log('**********')
        for(let i=0;i<todo.length;i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('**********')
    }
}
console.log("OK QUIT THE APP")