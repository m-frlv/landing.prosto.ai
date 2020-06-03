$(document).ready(function () {
  $('#consultation-form #phone').mask('+7 (000) 000-00-00')

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return regex.test(email)
  }

  function printError(error) {
    $('.status').css('color', 'red')
    $('.status').text(error)
  }

  function validation(name, email, phone) {
    var error

    if (!email || !phone || !name) {
      error = 'Заполните все поля'
    }
    else if (!isEmail(email)) {
      error = 'Введите корректный адрес электронной почты'
    }
    else if (phone.length != 18) {
      error = 'Введите корректный номер телефона'
    }

    return error
  }

  $("#consultation-form").submit(function (e) {
    e.preventDefault()

    var url = 'https://prosto.ai/api/mailing/lead'
    var name = e.target[0].value
    var phone = e.target[1].value
    var email = e.target[2].value

    var data = {
      email: email,
      name: name,
      phone: phone
    }

    var error = validation(name, email, phone)

    if (error) {
      printError(error)
    }
    else {
      $.ajax({
        type: "POST",
        url: url,
        headers: {
          'X-ProstoAI-Project-ID': 'lalalalalal',
          'X-ProstoAI-Api-KEY': 'lalalalala'
        },
        data: data,
        success: function (data) {
          $('.status').css('color', 'green')
          $('.status').text('Ваши данные успешно отправлены')
        },

        error: function (data) {
          printError('Ошибка при отправке формы')
        }
      })
    }
  })
})