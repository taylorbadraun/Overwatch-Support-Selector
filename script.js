window.onload = function () {
    initHeroPicker();
};

function initHeroPicker() {
    let heroPickers = document.getElementsByClassName("hero");
    let button = document.getElementsByClassName("button");
    setHeroPickerEventListeners(heroPickers, button);
}
function setHeroPickerEventListeners(pickerElements, reset) {
    let array = []
    let checkboxLen = pickerElements.length;

    for (let i=0; i < checkboxLen; i++) {
        reset[0].addEventListener('click', () => {
            array = []
            pickerElements[i].checked = false
            setRatingReset()
        })
        pickerElements[i].addEventListener('change', () => {
            if (array.includes(pickerElements[i].value)) {
                array = array.filter(hero => hero !== pickerElements[i].value)
                if (array.length === 0) {
                    setRatingReset()
                }
            }
            else array.push(pickerElements[i].value)
            setSupportRating(array)

        })

    }
}

function setRatingReset() {
    let anaRating = 0
    let baptisteRating = 0
    let brigitteRating = 0
    let lucioRating = 0
    let mercyRating = 0
    let moiraRating = 0
    let zenyattaRating = 0

    let Ana = document.getElementById("anaMeter");
    Ana.setAttribute("value", anaRating);
    let anaVal = document.getElementById("anaVal");
    anaVal.innerText = anaRating;

    let Baptiste = document.getElementById("baptisteMeter");
    Baptiste.setAttribute("value", baptisteRating);
    let baptisteVal = document.getElementById("baptisteVal");
    baptisteVal.innerText = baptisteRating;

    let Brigitte = document.getElementById("brigitteMeter");
    Brigitte.setAttribute("value", brigitteRating);
    let brigitteVal = document.getElementById("brigitteVal");
    brigitteVal.innerText = brigitteRating;

    let Lucio = document.getElementById("lucioMeter");
    Lucio.setAttribute("value", lucioRating);
    let lucioVal = document.getElementById("lucioVal");
    lucioVal.innerText = lucioRating;

    let Mercy = document.getElementById("mercyMeter");
    Mercy.setAttribute("value", mercyRating);
    let mercyVal = document.getElementById("mercyVal");
    mercyVal.innerText = mercyRating;

    let Moira = document.getElementById("moiraMeter");
    Moira.setAttribute("value", moiraRating);
    let moiraVal = document.getElementById("moiraVal");
    moiraVal.innerText = moiraRating;

    let Zenyatta = document.getElementById("zenyattaMeter");
    Zenyatta.setAttribute("value", zenyattaRating);
    let zenyattaVal = document.getElementById("zenyattaVal");
    zenyattaVal.innerText = zenyattaRating;
}

function setSupportRating(team) {
    let ana = ['Ana', 'Widowmaker', 'Junkrat', 'Hanzo', 'Zenyatta', 'Sigma', 'Moira', 'Bastion', 'Baptiste', 'Ashe', 'Symmetra', 'Mei' , 'Torbjorn', 'Sombra', 'Cassidy', 'Reaper', 'Dva', 'Orisa', 'Pharah', 'Echo', 'Wrecking-Ball', 'Lucio', 'Mercy', 'Tracer', 'Doomfist', 'Roadhog', 'Reinhardt', 'Soldier', 'Genji', 'Zarya', 'Brigitte', 'Winston']

    let baptiste = ['Baptiste', 'Echo', 'Sombra', 'Tracer', 'Widowmaker', 'Wrecking-Ball', 'Winston', 'Moira', 'Genji', 'Pharah', 'Doomfist', 'Ana', 'Junkrat', 'Symmetra', 'Roadhog', 'Torbjorn', 'Soldier', 'Zarya', 'Ashe', 'Mercy', 'Hanzo', 'Sigma', 'Dva', 'Brigitte', 'Zenyatta', 'Orisa', 'Reaper', 'Cassidy', 'Mei', 'Bastion', 'Lucio', 'Reinhardt']

    let brigitte = ['Brigitte', 'Bastion', 'Widowmaker', 'Moira', 'Mercy', 'Pharah', 'Junkrat', 'Hanzo', 'Roadhog', 'Reaper', 'Orisa', 'Ashe', 'Lucio', 'Torbjorn', 'Symmetra', 'Mei', 'Dva', 'Sigma', 'Reinhardt', 'Cassidy', 'Winston', 'Zarya', 'Soldier', 'Genji', 'Sombra', 'Doomfist', 'Echo', 'Baptiste', 'Ana', 'Wrecking-Ball', 'Zenyatta', 'Tracer']

    let lucio = ['Lucio', 'Bastion', 'Widowmaker', 'Pharah', 'Ashe', 'Mercy', 'Echo', 'Wrecking-Ball', 'Roadhog', 'Zenyatta', 'Soldier', 'Hanzo', 'Junkrat', 'Brigitte', 'Sigma', 'Orisa', 'Genji', 'Torbjorn', 'Ana', 'Sombra', 'Tracer', 'Winston', 'Doomfist', 'Zarya', 'Dva', 'Cassidy', 'Symmetra', 'Baptiste', 'Moira', 'Mei', 'Reaper', 'Reinhardt']

    let mercy = ['Mercy', 'Reinhardt', 'Brigitte', 'Doomfist', 'Mei', 'Symmetra', 'Zarya', 'Reaper', 'Orisa', 'Moira', 'Sombra', 'Lucio', 'Torbjorn', 'Dva', 'Winston', 'Sigma', 'Bastion', 'Baptiste', 'Tracer', 'Hanzo', 'Junkrat', 'Genji', 'Ana', 'Wrecking-Ball', 'Cassidy', 'Widowmaker', 'Soldier', 'Zenyatta', 'Roadhog', 'Ashe', 'Pharah', 'Echo']

    let moira = ['Moira', 'Widowmaker', 'Brigitte', 'Baptiste', 'Ashe', 'Hanzo', 'Pharah', 'Mercy', 'Echo', 'Ana', 'Zenyatta', 'Junkrat', 'Soldier', 'Tracer', 'Roadhog', 'Bastion', 'Torbjorn', 'Symmetra', 'Zarya', 'Sigma', 'Cassidy', 'Orisa', 'Wrecking-Ball', 'Genji', 'Mei', 'Doomfist', 'Reaper', 'Lucio', 'Sombra', 'Reinhardt', 'Winston', 'Dva']

    let zenyatta = ['Zenyatta', 'Ana', 'Moira', 'Symmetra', 'Mei', 'Reaper', 'Reinhardt', 'Cassidy', 'Lucio', 'Bastion', 'Junkrat', 'Widowmaker', 'Winston', 'Zarya', 'Hanzo', 'Torbjorn', 'Roadhog', 'Ashe', 'Doomfist', 'Orisa', 'Mercy', 'Pharah', 'Dva', 'Soldier', 'Genji', 'Baptiste', 'Wrecking-Ball', 'Sigma', 'Echo', 'Sombra', 'Tracer', 'Brigitte']

    let anaRating = 0
    let baptisteRating = 0
    let brigitteRating = 0
    let lucioRating = 0
    let mercyRating = 0
    let moiraRating = 0
    let zenyattaRating = 0

    for (let member=0; member < team.length; member++) {
        anaRating = anaRating + ana.indexOf(team[member])
        baptisteRating = baptisteRating + baptiste.indexOf(team[member])
        brigitteRating = brigitteRating + brigitte.indexOf(team[member])
        lucioRating = lucioRating + lucio.indexOf(team[member])
        mercyRating = mercyRating + mercy.indexOf(team[member])
        moiraRating = moiraRating + moira.indexOf(team[member])
        zenyattaRating = zenyattaRating + zenyatta.indexOf(team[member])

        let meterMax = team.length * 30
        let meterMin = team.length
        let meterLow = team.length * (team.length + 11)
        let meterHigh = team.length * (23 - team.length)
        let meterOptimum = team.length * 25

        let meters = document.getElementsByClassName("meter")
        for (let m=0; m < meters.length; m++) {
            meters[m].setAttribute("min", meterMin)
            meters[m].setAttribute("max", meterMax)
            meters[m].setAttribute("low", meterLow)
            meters[m].setAttribute("high", meterHigh)
            meters[m].setAttribute("optimum", meterOptimum)
        }

        let Ana = document.getElementById("anaMeter");
        Ana.setAttribute("value", anaRating);
        let anaVal = document.getElementById("anaVal");
        anaVal.innerText = anaRating;

        let Baptiste = document.getElementById("baptisteMeter");
        Baptiste.setAttribute("value", baptisteRating);
        let baptisteVal = document.getElementById("baptisteVal");
        baptisteVal.innerText = baptisteRating;

        let Brigitte = document.getElementById("brigitteMeter");
        Brigitte.setAttribute("value", brigitteRating);
        let brigitteVal = document.getElementById("brigitteVal");
        brigitteVal.innerText = brigitteRating;

        let Lucio = document.getElementById("lucioMeter");
        Lucio.setAttribute("value", lucioRating);
        let lucioVal = document.getElementById("lucioVal");
        lucioVal.innerText = lucioRating;

        let Mercy = document.getElementById("mercyMeter");
        Mercy.setAttribute("value", mercyRating);
        let mercyVal = document.getElementById("mercyVal");
        mercyVal.innerText = mercyRating;

        let Moira = document.getElementById("moiraMeter");
        Moira.setAttribute("value", moiraRating);
        let moiraVal = document.getElementById("moiraVal");
        moiraVal.innerText = moiraRating;

        let Zenyatta = document.getElementById("zenyattaMeter");
        Zenyatta.setAttribute("value", zenyattaRating);
        let zenyattaVal = document.getElementById("zenyattaVal");
        zenyattaVal.innerText = zenyattaRating;
    }
}

