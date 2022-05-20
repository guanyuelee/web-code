// use ES6 import js
import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import logo from './images/logo.png'

$('#logo').attr('src', logo).attr('width', 50)

$(function(){
    $('li:odd').css('background-color', 'rgb(0, 174, 236)').css('color', 'white');
    $('li:even').css('background-color', 'pink')
})