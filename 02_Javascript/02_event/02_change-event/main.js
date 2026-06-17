'use strict';
function handleChange() {
    const checkAll = document.getElementById("checkAll");
    const checkBoxes = document.getElementsByName('language');
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = checkAll.checked;
    }
}
const ca = document.getElementById("checkAll");
ca.addEventListener('change',handleChange,false)