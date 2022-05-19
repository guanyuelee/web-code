// use ES6 import js
import $ from 'jquery'

$(function(){
    $('li:odd').css('background-color', 'rgb(0, 174, 236)').css('color', 'white');
    $('li:even').css('background-color', 'pink')
})