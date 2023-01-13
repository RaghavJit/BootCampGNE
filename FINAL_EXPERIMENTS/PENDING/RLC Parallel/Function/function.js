var cont = document.getElementById("container")

var check = document.getElementById("check")
var add = document.getElementById("add")
var reset = document.getElementById("reset")
var calculate = document.getElementById("calculate")

var MCB_image = document.getElementById("mcb")
var MCB = document.getElementById("mcb_switch")
var MCB_Positive = document.getElementById("mcb_p")
var MCB_Negative = document.getElementById("mcb_n")

var MainVoltmeterPositive = document.getElementById("Mp_v")
var MainVoltmeterNegative = document.getElementById("Mn_v")

var MainAmmeterPositive = document.getElementById("Mp_a")
var MainAmmeterNegative = document.getElementById("Mn_a")

var WattmeterV = document.getElementById("w_v")
var WattmeterL = document.getElementById("w_l")
var WattmeterM = document.getElementById("w_m")
var WattmeterC = document.getElementById("w_c")

var TopAmmeterPositive = document.getElementById("Tp_a")
var TopAmmeterNegative = document.getElementById("Tn_a")

var SecAmmeterPositive = document.getElementById("Sp_a")
var SecAmmeterNegative = document.getElementById("Sn_a")

var BotAmmeterPositive = document.getElementById("Bp_a")
var BotAmmeterNegative = document.getElementById("Bn_a")

var VariacInPositive = document.getElementById("t_a")
var VariacInNegative = document.getElementById("t_b")
var VariacOutPositive = document.getElementById("t_c")
var VariacOutNegative = document.getElementById("t_d")
var knob = document.getElementById("knob")

var InductorPositive = document.getElementById("i_p")
var InductorNegative = document.getElementById("i_n")

var ResistorPositive = document.getElementById("rh_p")
var ResistorNegative = document.getElementById("rh_n")

var CapacitorPositive = document.getElementById("c_p")
var CapacitorNegative = document.getElementById("c_n")

var MainAmmeterNeedle = document.getElementById("P_A")
var MainVoltmeterNeedle = document.getElementById("P_V")

var TopAmmeterNeedle = document.getElementById("TP_A")
var SecAmmeterNeedle = document.getElementById("SP_A")
var BotAmmeterNeedle = document.getElementById("MP_A")

var s1 = document.getElementById("s1")
var s2 = document.getElementById("s2")
var s3 = document.getElementById("s3")
var s4 = document.getElementById("s4")
var s5 = document.getElementById("s5")
var s6 = document.getElementById("s6")

var mcb_state = 0

var var_voltage = 0
var angle = 0
var angle_inc = 3.6
var volt_inc = 2.3

function disconnect(num) {
    let node_list = [
        MCB_Positive, MCB_Negative, 
        MainVoltmeterPositive, MainVoltmeterNegative, 
        MainAmmeterPositive, MainAmmeterNegative, 
        WattmeterV, WattmeterL, WattmeterM, WattmeterC, 
        TopAmmeterPositive, TopAmmeterNegative, 
        SecAmmeterPositive, SecAmmeterNegative, 
        BotAmmeterPositive, BotAmmeterNegative, 
        ResistorPositive, ResistorNegative, 
        InductorPositive, InductorNegative, 
        CapacitorPositive, CapacitorNegative, 
        VariacInPositive, VariacInNegative, 
        VariacOutPositive, VariacOutNegative
    ]
    instance.deleteConnectionsForElement(node_list[num])
}

const instance = jsPlumb.getInstance({
    container: cont
})

function isConnected(node1, node2) {
    if ((instance.getConnections({ source: node1, target: node2 })[0] != undefined) || (instance.getConnections({ source: node2, target: node1 })[0] != undefined)) {
        return true;
    }
    else {
        return false;
    }
}

instance.bind("ready", function () {

    instance.registerConnectionTypes({
        "positive": {
            paintStyle: { stroke: "rgb(97,106,229)", strokeWidth: 2.5 },
            hoverPaintStyle: { stroke: "rgb(97,106,229)", strokeWidth: 3.5 }
        },
        "negative": {
            paintStyle: { stroke: "rgb(229, 97, 97)", strokeWidth: 2.5 },
            hoverPaintStyle: { stroke: "rgb(229, 97, 97)", strokeWidth: 3.5 }
        }
    })

    instance.addEndpoint([MainVoltmeterPositive, MainAmmeterPositive, MCB_Positive, TopAmmeterPositive, SecAmmeterPositive, BotAmmeterPositive, VariacInPositive, VariacOutPositive, InductorPositive, ResistorPositive, CapacitorPositive,  WattmeterV, WattmeterL, WattmeterM, WattmeterC], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)" },
        connectionType: "positive",
        maxConnections: 10,
        connectionsDetachable: true
    })

    instance.addEndpoint([MainVoltmeterNegative, MainAmmeterNegative, MCB_Negative, TopAmmeterNegative, SecAmmeterNegative, BotAmmeterNegative, VariacInNegative, VariacOutNegative, InductorNegative, ResistorNegative, CapacitorNegative], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)" },
        connectionType: "negative",
        maxConnections: 10,
        connectionsDetachable: true
    })

})

MCB.onclick = function (){
    console.log("workgin")
    if(mcb_state ==  1){
        mcb_state = 0
        MCB_image.src = '../Assets/MCB_off.png'
        MCB.style.transform = "translate(0px, 0px)"
    }
    else if(mcb_state == 0){
        mcb_state = 1
        MCB_image.src = '../Assets/MCB_ON.png'
        MCB.style.transform = "translate(0px, -49px)"
    }
}

function task(i, x, y) {
    setTimeout(function () {
        angle = angle + x
        var_voltage = var_voltage + y

        knob.style.transform = "rotate(" + angle + "deg)"

    }, 20 * i);
}

knob.onclick = function () {

    for (let i = 0; i < 100; i++) {
        task(i, angle_inc, volt_inc);
    }

    if(angle_inc == -3.6){
        angle_inc = 3.6
        volt_inc = 2.3

    }
    else if(angle_inc == 3.6){
        angle_inc = -3.6
        volt_inc = -2.3
    }

    /*angle = angle + angle_inc
    this.style.transform = "rotate(" + angle + "deg)"
    var_voltage = var_voltage + volt_inc*/

    /*if((mcb_state==1)&&(onOff_state == 1)){
        updateVals();
    }

    if(angle.toFixed(0) == 0.00){
        angle_inc = 3.6
        volt_inc = 2.3

    }
    else if(angle.toFixed(0) == 360.0){
        angle_inc = -3.6
        volt_inc = -2.3
    }*/


}

function rotate_element(deg, elemnt) {
    elemnt.style.transform = "rotate(" + deg + "deg)"
}

