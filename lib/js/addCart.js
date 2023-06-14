var $changedInput = $("#changedInput")
var $valueOnInput = $("#valueOnInput")
var $valueOnChange = $("#valueOnChange")
$changedInput.on("input", function (event) {
    $valueOnInput.html($(event.target).val())
    // or $valueOnInput.html(event.target.value) // in vanilla js
    // or $valueOnInput.html($changedInput.val())
})
$changedInput.on("change", function (event) {
    $valueOnChange.html($(event.target).val())
})