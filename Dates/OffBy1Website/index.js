function onBtnClickedfunction () {
    const dateEl = document.getElementById(`dateOfToday`);
    const userdate = new Date(dateEl.value);

    const msgUserEl = document.getElementById(`msgUser`);
    msgUserEl.innerHTML = userdate.toString();


}

const btnEl = document.getElementById(`btnForDate`);

//const msgUserEl = document.getElementById(`msgUser`);
btnEl.onclick= onBtnClickedfunction;