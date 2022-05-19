$(function(){
	resetui()

	$('#btnSend').on('click', function(){
		var text = $('#ipt').val().trim()
		if(text.length <= 0) {
			return $("#ipt").val('')
		}
		$("#talk_list").append('<li class="right_word"><img src="img/person02.png" /> <span>'+text+'</span></li>')
		$("#ipt").val('')
		resetui()

		getMsg(text)
		resetui()
	})

	$('#ipt').on('keyup', function(e){
		if(e.keyCode === 13){
			$("#btnSend").click()
		}
	})

	function getMsg(text) {
		$.ajax({
			method: "GET", 
			url: "http://www.liulongbin.top:3006/api/robot", 
			data: {
				spoken: text
			}, 
			success: function(res){
				console.log(res)
				
				if(res.message == 'success'){
					var msg = res.data.info.text
					$('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>'+msg+'</span></li>')

					resetui()

					getVoice(msg)
				}
			}
		})
	}

	function getVoice(text) {
		console.log(text)
		$.ajax({
			method: "GET", 
			url: "http://www.liulongbin.top:3006/api/synthesize", 
			data: {
				text: text
			}, 
			success: function(res){
				console.log(res)
				if(res.status === 200) {
					console.log('OK')
					$("#voice").attr('src', res.voiceUrl)
				}
			}
		})
	}
})