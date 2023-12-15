	//密碼顯示/隱藏
	$(".icon_eye").on('click', function(event) {
		if( $(this).siblings('.input_password').val() != "" ){
			if( $(this).siblings('.input_password').attr("type") == "text"){//原本是顯示密碼
				$(this).siblings('.input_password').attr('type', 'password');//變成隱藏密碼
				$(this).find('i').addClass('fa-eye-slash');
				$(this).find('i').removeClass('fa-eye');
				
			}else if($('.input_password').attr("type") == "password"){//原本是隱藏密碼
				$(this).siblings('input').attr('type', 'text');//變成顯示密碼
				$(this).find('i').addClass('fa-eye');
				$(this).find('i').removeClass('fa-eye-slash');
			}
		}
	});
