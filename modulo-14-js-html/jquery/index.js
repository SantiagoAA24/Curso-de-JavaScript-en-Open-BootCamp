// $(selector).accion()

// $('h1').hide()

// $(document).ready(() => {
$(() => {
    // $('#el-1').hide()
    $('.hide-btn').click(() => {
        // console.log('Ocultando...')
        // $('#el-1').hide()
        $('#el-1').fadeOut()
    })
    $('.show-btn').click(() => {
        // console.log('Mostrando...')
        // $('#el-1').show()
        $('#el-1').fadeIn()
    })
    $('li').dblclick(() => {
        $('h1').css({
            color: 'red'
        })
    })
    $('.new-element').click(() => {
        $('ul').append('<li>New Element</li>')
        $('ul').prepend('<li>New Element</li>')
    })
    $('li').mouseenter((elem) => {
        elem.target.style.color = 'blue'
    })
    $('li').mouseleave((elem) => {
        elem.target.style.color = 'black'
    })
})
