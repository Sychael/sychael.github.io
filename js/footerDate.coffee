date = new Date()
year = date.getFullYear()

document.querySelector('.dateYear').innerHTML = year

formOptionHire = document.querySelector('#hire')
formOptionGeneral = document.querySelector('#general')


if (formOptionHire.selected == true)
  formTextboxMessagePlaceholder = document.querySelector('textarea').placeholder = "Describe Your Project"
else
  formTextboxMessagePlaceholder = document.querySelector('textarea').placeholder = ""
