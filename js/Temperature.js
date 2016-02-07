/**
 * Constructor
 * @param {int} valeur the value of temperature
 */
function Temperature(valeur) {
    this.valeur = valeur;
}

Temperature.prototype.setValue = function(valeur) {
    this.valeur = valeur;
};

Temperature.prototype.getValue = function() {
    return this.valeur;
};

