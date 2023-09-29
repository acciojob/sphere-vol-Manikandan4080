function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value
	 let ans = (4 / 3) * Math.PI * Math.pow(r, 3)
	ans = ans.toFixed(4);
	document.getElementById("volume").value = `${ans}`
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
