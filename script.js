//your JS code here. If required.
function solve() {
	const Select = document.querySelector("select");
	const SelectedValue = Select.value;
	let Options = Select.children;
	for(let i=0;i<Options.length;i++){
		if(Options[i].value === SelectedValue){
			Options[i].remove();
			break;
		}
	}
}