$(document).ready(function () {
    // Her skal animasjoner til boksene havne

    $("#WoltBtn").click(function () {
        $("#WoltKode").css("display", "block")

        document.getElementById("WoltKode").select()
        document.getElementById("WoltKode").setSelectionRange(0, 99999);

        document.execCommand("copy");
        $("#WoltKode").css("display", "none")
    });

});