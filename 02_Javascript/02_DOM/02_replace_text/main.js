'use strict';

const btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
    let headerTitle = document.getElementById('headerTitle');
    headerTitle.textContent = 'タイトルが変更されました';
},false);