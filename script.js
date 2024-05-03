//your JS code here. If required.
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
	const text = document.getElementById("text").value;
	const delay = document.getElementById("delay").value;
	displayText(text,delay);
})

async function displayText(text,delayTime){
	await new Promise((resolve) => {
		setTimeout(() => {
			output.innerText = text;
		},delayTime);
	})
}