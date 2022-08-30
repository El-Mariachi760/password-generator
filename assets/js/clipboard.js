const passwordDisplay = document.getElementById('passwordDisplay');
const copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
	const password = passwordDisplay.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	// alert('Password copied to clipboard');
    copiedAlertMsg()
}) 

function copiedAlertMsg() {
    var am = document.getElementById('copyAlert');

    //this is where the class name will be added & removed to activate the css
    am.className = "show";
  
    setTimeout(()=>{ am.className = am.className.replace("show", ""); }, 3000);
}