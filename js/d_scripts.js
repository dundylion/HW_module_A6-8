function buttonpressed(but){
	let pb = $('#progress-bar');
	let w = progreddBarWidth(pb);
	let val = Number(but.target.value);
	let sum = w + val;
	if (sum > 100) {sum = 100}
		// больше 100% быть не может
	pb.width(sum + '%');
	if (sum>=10) {pb.text(sum + '%')}
		else
			{pb.text('')}
	// просто для эстетики, пусть число появляется после 10
}

function resetpressed(res){
	$('#progress-bar').width("0%");
	$('#progress-bar').text('');
}

function progreddBarWidth(pb){
	let procent = pb[0].style.width;
	let digitstr = procent.replace('%','');
	let number = Number(digitstr);
	return number;

}