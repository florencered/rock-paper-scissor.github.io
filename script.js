console.log("working");
const selectionButtons= document.querySelectorAll('[data-selection]');
const finalColumn= document.querySelector('[data-final-column]')
const SELECTIONS=[ 
		{
			name:'rock', //name of the suff 
			emoji:"👊", //the emoji used 
			beats:"scissors" //wjat they actuaaly represent acc tp the data selection thingy
		}, 
		{
			name:'paper', //name of the suff 
			emoji:"✊", //the emoji used 
			beats:"rock" //wjat they actuaaly represent acc tp the data selection thingy
		}, 
		{
			name:'scissors', //name of the suff 
			emoji:"🤞", //the emoji used 
			beats:"paper" //wjat they actuaaly represent acc tp the data selection thingy
		}
]
console.log(selectionButtons); //access the buuton clicked onn the basis of the fdata they store 
selectionButtons.forEach(selectionButton =>{
	selectionButton.addEventListener('click',(e)=>{
		const selectionName=selectionButton.dataset.selection;//gives us the name of what we declared to the names of data-selection 
		const selection=SELECTIONS.find(selection=>selection.name===selectionName) //selection here refers to the attributes inside the object..selection.name refers to the name attribute
		makeSelection(selectionName);
	});

}) 
const makeSelection=(selection)=>{ 
	const computerSelection=randomSelection(); //calling the function
	const yourWinner=isWinner(selection,computerSelection);
	const computerWinner=isWinner(computerSelection,selection);

	console.log(computerSelection); //rock/paper/acissore
	addSelectionResult(computerSelection,computerWinner);
	addSelectionResult(selection,yourWinner);
} 
let addSelectionResult=(selection,winner)=>{  
	const div=document.createElement('div'); //creating a div to add new winners everytime
	div.innerText=(selection.emoji); 
	div.classList.add("finalAns");
	if (winner) div.classList.add('winner');
	finalColumn.after(div);

}
//d
//automate the computers response 
let isWinner=(selection,opponentSelection)=>{
		return selection.beats===opponentSelection.name; 
		//if the emojis which would beat the emoji chosen is equal to what the opponenet selected,the opponent is the winner 
		

} 
let randomSelection=()=>{
	const randomIndex=Math.floor(Math.random()*SELECTIONS.length); 
	console.log(randomIndex);	
	return SELECTIONS[randomIndex];
}  


//for checking the result 


console.log(randomSelection());
console.log(SELECTIONS.length); 

