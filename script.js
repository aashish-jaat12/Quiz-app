const qustion =[

{
	'que': 'Which of the following is a markup language?',
	'a' : 'HTML',
	'b' :   '    CSS',
	'c' : 'Jaca Script',
	'd' :'PHP',
	'correct': 'a'
},

{
	'que': 'What is the full form of JS?',
	'a' : 'JaveScript',
	'b': 'JacaScript',
	'c' : 'JavaScript',
	'd' :'JavaScrpt',
	'correct': 'c'
},



{
	'que': 'What is the full form of HTML?',
	'a' : 'Hello to my Load',
	'b': 'Hey Text Markup language',
	'c' : 'Hyper Text Markup language',
	'd' :'Hypertext Markup language',
	'correct': 'c'
},


{
	'que': 'What is the full form of HTTP?',
	'a' : 'Hypertext Transfer Product',
	'b': 'Hypertext Transfer Protocol',
	'c' : 'Hyper Text Transfer Protocol',
	'd' :'Hypertext Test Protocol',
	'correct': 'c'
},
{
	'que': '0110 in binary form can be writting as?',
	'a' : '4',
	'b': '6',
	'c' : '5',
	'd' : '7',
	'correct': 'c'
},

{
	'que': 'The octal representation of 195.35 is?',
	'a' : '(323.20)8',
	'b': '(303.20)8',
	'c' : '(313.20)8',
	'd' :'(303.02)8',
	'correct': 'c'
},

{
	'que': '(100101)2, is equal to decimal number?',
	'a' : '47',
	'b': '21',
	'c' : '37',
	'd' : '17',
	'correct': 'c'
},

{
	'que': 'The value of binary 11111 is?',
	'a' : '2-1',
	'b': '2^5',
	'c' : '2^4',
	'd' : '2^(5)',
	'correct': 'c'
},



]

let index=0;
const quesbox=document.getElementById("quesbox")
const optioninput = document.querySelectorAll('.option')
const loadqustion=()=>{

	if (index === 7) {
		return endquiz()
	};
	
	

	const data = qustion[index]
	
	quesbox.innerText = `${index+1}) ${data.que}`;

	optioninput[0].nextElementSibling.innerText = data.a;
	optioninput[1].nextElementSibling.innerText = data.b;
	optioninput[2].nextElementSibling.innerText = data.c;
	optioninput[3].nextElementSibling.innerText = data.d;
}


loadqustion();


const submitquiz = ()=>{

	index++;
	loadqustion();
	reset();
	
}



const reset =()=>{
	optioninput.forEach(
		(input)=>{
			input.checked =false
		})
}



const endquiz=()=>{ 
	

	document.getElementById("contaner").innerHTML= ` 
	
	<h3 class="end"> Thank you for playing tha quizs</h3>
	`

}




const restart=()=>{

	index=0;
	loadqustion();


}

const back=()=>{

	index--;
	loadqustion();


}