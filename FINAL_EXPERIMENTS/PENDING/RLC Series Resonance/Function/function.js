var cont = document.getElementById("container")

var check = document.getElementById("check")
var add = document.getElementById("add")
var reset = document.getElementById("reset")
var calculate = document.getElementById("calculate")
var plot = document.getElementById("plot")

var MCB_image = document.getElementById("mcb")
var MCB = document.getElementById("mcb_switch")
var MCB_Positive = document.getElementById("mcb_p")
var MCB_Negative = document.getElementById("mcb_n")

var VoltmeterPositive = document.getElementById("p_v")
var VoltmeterNegative = document.getElementById("n_v")

var AmmeterPositive = document.getElementById("p_a")
var AmmeterNegative = document.getElementById("n_a")

var InductorPositive = document.getElementById("i_p")
var InductorNegative = document.getElementById("i_n")

var ResistorPositive = document.getElementById("rh_p")
var ResistorNegative = document.getElementById("rh_n")

var CapacitorPositive = document.getElementById("c_p")
var CapacitorNegative = document.getElementById("c_n")

var FunctionGene = document.getElementById("fg_on")
var FunctGeneA = document.getElementById("fg_a")
var FunctGeneB = document.getElementById("fg_b")
var FunctGeneC = document.getElementById("fg_c")
var FunctGeneD = document.getElementById("fg_d")
var FunctGeneDis = document.getElementById("fg_dis")
var FunctG_image = document.getElementById("transformer")

var AmmeterNeedle = document.getElementById("P_A")
var VoltmeterNeedle = document.getElementById("P_V")

var vtable = document.getElementById("valTable")


var mcb_state = 0;
var funcGen_state = 0;

var Mamm = 0
var Mvol = 0

var flags2 = 0
var flags3 = 0
var flags4 = 0
var flags5 = 0
var flags6 = 0

var index = 0

function disconnect(num) {
    let node_list = [
        MCB_Positive, MCB_Negative, 
        VoltmeterPositive, VoltmeterNegative, 
        AmmeterPositive, AmmeterNegative, 
        ResistorPositive, ResistorNegative, 
        InductorPositive, InductorNegative, 
        CapacitorPositive, CapacitorNegative, 
        FunctGeneA, FunctGeneB, FunctGeneC, FunctGeneD 

    ]
    instance.deleteConnectionsForElement(node_list[num])
}

const instance = jsPlumb.getInstance({
    container: cont
})

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

    instance.addEndpoint([VoltmeterPositive, AmmeterPositive, MCB_Positive, InductorPositive, ResistorPositive, CapacitorPositive, FunctGeneA, FunctGeneB, FunctGeneC, FunctGeneD], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)" },
        connectionType: "positive",
        maxConnections: 10,
        connectionsDetachable: true
    })

    instance.addEndpoint([VoltmeterNegative, AmmeterNegative, MCB_Negative, InductorNegative, ResistorNegative, CapacitorNegative], {
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

function isConnected(node1, node2) {
    if ((instance.getConnections({ source: node1, target: node2 })[0] != undefined) || (instance.getConnections({ source: node2, target: node1 })[0] != undefined)) {
        return true;
    }
    else {
        return false;
    }
}

function rotate_element(deg, elemnt) {
    elemnt.style.transform = "rotate(" + deg + "deg)"
}

function setZero(){
    rotate_element(0, AmmeterNeedle)
    rotate_element(0, VoltmeterNeedle)
}

function calculateVars(){
    Mamm = 12
    Mvol = 12
}

function updateMeters(){
    calculateVars()

    rotate_element(Mamm, AmmeterNeedle)
    rotate_element(Mvol, VoltmeterNeedle)

}

MCB.onclick = function () {
    flags3 = 1
    console.log("workgin")
    if (mcb_state == 1) {
        mcb_state = 0
        MCB_image.src = '../Assets/MCB_off.png'
        MCB.style.transform = "translate(0px, 0px)"
        FunctG_image.src = '../Assets/function-generator-off.png'
        FunctionGene.disabled = true
        funcGen_state = 0
        setZero()
    }
    else if (mcb_state == 0) {
        mcb_state = 1
        MCB_image.src = '../Assets/MCB_ON.png'
        MCB.style.transform = "translate(0px, -49px)"
        FunctionGene.disabled = false
        if(funcGen_state == 1){
        updateMeters()
        }
    }
}

FunctionGene.onclick = function () {
    flags4 = 1
    if (funcGen_state == 1) {
        funcGen_state = 0
        FunctG_image.src = '../Assets/function-generator-off.png'
        setZero()
    }
    else if (funcGen_state == 0) {
        funcGen_state = 1
        FunctG_image.src = '../Assets/function-generator-on.png'
        if(mcb_state == 1){
            updateMeters()
        }
    }
}

add.onclick = function (){
    flags6 = 1

    let row = vtable.insertRow(index + 1);

    let SNo = row.insertCell(0);
    let load = row.insertCell(1)
    let volt = row.insertCell(2);
    let curnt = row.insertCell(3);
    let pow1 = row.insertCell(4);
    let pow2 = row.insertCell(5);
    let pow = row.insertCell(6);

    if(vtable.row.length > 6){
        powDelta.disabled = false
    }
}