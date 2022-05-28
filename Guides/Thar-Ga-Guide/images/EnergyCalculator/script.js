function Regeneration_Level() {
    var procent =  Number(document.getElementById("energy_level").value);
    var result = Math.pow(Math.E, -(Math.pow((procent-33.02) * 2.304/100, 2)/2)) * 0.75 + 0.25;

    document.getElementById("answer").innerHTML = result;
}

function Gauss(Q, P, level){
    var exponent = Math.pow((100*level/Q-33.02), 2)*(-0.000265421);
	return 1/(Math.pow(Math.E, exponent)*0.75+0.25)/P;
}

function Time_Calculation(){
    var Full = Number(document.getElementById("Full_Energy").value);
    var P = Number(document.getElementById("P").value);
    var Start = Number(document.getElementById("Start_Energy").value);
    var End = Number(document.getElementById("End_Energy").value);
    /* Как же я задолбался это интегрировать, держите Симпсона короче */
    /* Симпсон по трём точкам так то не весьма для апроксимации Гаусса, мб поменяю алгоритм интегрирования*/
    var Simpson = (End - Start)/6*(Gauss(Full, P, Start) + Gauss(Full, P, End) + 4 * Gauss(Full, P, (Start+End)/2) +
     0 * Gauss(Full, P, (2*Start+3*End)/5) + 0 * Gauss(Full, P, (3*Start+2*End)/5));

     document.getElementById("Time").innerHTML = Simpson;
}