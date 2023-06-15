function submit(){
	score = 0
	let result = document.getElementById("result");
	let q1Choice = document.getElementById("q1").value;
	let q2Choice = document.getElementById("q2").value;
	let q3Choice = document.getElementById("q3").value;
	let q4Choice = document.getElementById("q4").value;
		if (q1Choice == "correct"){
			result.innerHTML += "<p>" + "Question 1:Correct" + "</p>"
			score = score + 1
		}
		else{
			result.innerHTML += "<p>" + "Question 1:Incorrect" + "</p>"
		}
		if (q2Choice == "correct"){
			result.innerHTML += "<p>" + "Question 2:Correct" + "</p>"
			score = score + 1
		}
		else{
			result.innerHTML += "<p>" + "Question 2:Incorrect" + "</p>"
		}
		if (q3Choice == "correct"){
			result.innerHTML += "<p>" + "Question 3:Correct" + "</p>"
			score = score + 1
		}
		else{
			result.innerHTML += "<p>" + "Question 3:Incorrect" + "</p>"
		}
		if (q4Choice == "correct"){
			result.innerHTML += "<p>" + "Question 4:Correct" + "</p>"
			score = score + 1
		}
		else{
			result.innerHTML += "<p>" + "Question 4:Incorrect" + "</p>"
		}
		result.innerHTML += "<p>" + "Total Score:" + score + "/4" + "</p>"
	result.classList.remove("hidden");
}
counter = 1
setInterval(changeSlide, 1000);
function changeSlide(){
	let firstPic = document.getElementById("first");
	let secondPic = document.getElementById("second");
	let thirdPic = document.getElementById("third");
	let forthPic = document.getElementById("forth");
	if (counter == 1){
		forthPic.classList.add("hidden");
		firstPic.classList.remove("hidden");
		counter = counter + 1
		
	}
	else if (counter == 2){
		firstPic.classList.add("hidden");
		secondPic.classList.remove("hidden");
		counter = counter + 1
	}
	else if (counter == 3){
		secondPic.classList.add("hidden");
		thirdPic.classList.remove("hidden");
		counter = counter + 1
	}
	else if (counter == 4){
		thirdPic.classList.add("hidden");
		forthPic.classList.remove("hidden");
		counter = 1
	}
}