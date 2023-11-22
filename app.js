const radio_rq_female = document.getElementById("female");
const radio_rq_male = document.getElementById("male");

const er_female = document.getElementById("er-female");
const er_male = document.getElementById("er-male");

function error_radio() {
    if (radio_rq_female < 0) {
        er_female.required =true;
    }
}