//your JS code here. If required.
function solve() {
	const Select = document.querySelector("select");
	const SelectedValue = Select.value; //this will give the color of button
	let Options = Select.children;  //This will give all elements(options) inside the select
	for(let i=0;i<Options.length;i++){
		if(Options[i].value === SelectedValue){
			Options[i].remove();
			break;
		}
	}
}