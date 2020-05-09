$.ajaxSetup({
    async: false
});

function getChampionNames(patch = "10.4.1") {
    var champNames = [];
    $.getJSON("http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json", function (data) {
        var champData = data.data;
        Object.keys(champData).forEach(function (champName) {
            champNames.push(champName)
        });
    });
    return champNames;
}

function loadChampionNames(patch = "10.4.1") {
    var champs = getChampionNames(patch);
    var $champSelect = $('#champSelect');

    $.each(champs, function (key, value) {
        var option = new Option(value, value);
        $(option).html(value);
        $champSelect.append(option);
    })
}

$(document).ready(function () {
    loadChampionNames();
});