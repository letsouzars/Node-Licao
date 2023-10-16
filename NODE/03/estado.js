let estado = function (e) {
    if (e == "rj" || e == "sp") {
        return "Pode"
    }
   else{
        return "Não pode"
    }
}

module.exports = estado