$(document).ready(function() {

// Add close button on each LI elements
  (function () {
    let close = $('<span class="close"></span>').text('\u00D7')
    $('#todo-list').children().append(close)
  }())

// '.addBtn' add new todo list
  $('.addBtn').on('click', ()=> {
    let userInput = $('#todo-input').val()
    if(!userInput){
      alert('Please input something')
    } else {
      $('#todo-list').append(`<li>${userInput}<span class="close">\u00D7</span></li>`)
    }
  })

// '.close' click event handler on close button to remove each LI clicked
  $('#todo-list').on('click', '.close', (e)=> {
    $(e.target).parent().remove()
  })

// 'li' click event handler on li element and make checked list
  $('#todo-list').on('click', 'li', (e)=> {
    $(e.target).toggleClass('checked')
  })

})
