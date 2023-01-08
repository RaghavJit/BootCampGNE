cont = document.getElementById("container")

check = document.getElementById("check")
add = document.getElementById("add")

MCB_image = document.getElementById("M")
MCB = document.getElementById("on_power")
MCB_Blue = document.getElementById("mcb_b")
MCB_Yellow = document.getElementById("mcb_y")
MCB_Red = document.getElementById("mcb_r")

rotor = document.getElementById("rotor2")

StarterInRed = document.getElementById("i_r")
StarterInYel = document.getElementById("i_b")
StarterInBlu = document.getElementById("i_y")
StarterOutRed = document.getElementById("o_r")
StarterOutYel = document.getElementById("o_b")
StarterOutBlu = document.getElementById("o_y")

MotorInRed = document.getElementById("motor-1")
MotorInYel = document.getElementById("motor-2")
MotorInBlu = document.getElementById("motor-3")
// MotorOutRed = document.getElementById("motor-4")
// MotorOutYel = document.getElementById("motor-5")
// MotorOutBlu = document.getElementById("motor-6")

VoltmeterPositive = document.getElementById("p_v")
VoltmeterNegative = document.getElementById("n_v")

AmmeterPositive = document.getElementById("p_a")
AmmeterNegative = document.getElementById("n_a")

vtable =document.getElementById("valTable")

w1 = document.getElementById("w1_motor")
w2 = document.getElementById("w2_motor")

var StarterNodeEmpty;
var MotorNodeEmpty;
var countRotations = 0

var MCB_state = 0

var Torque = 0;

var SpeedList = []
var TorqueList = []
var index = 1

const instance = jsPlumb.getInstance({
    container: cont
});

instance.bind("ready", function () {
    instance.registerConnectionTypes({
        "blue": {
            paintStyle: { stroke: "rgb(97,106,229)", strokeWidth: 2.5 },
            hoverPaintStyle: { stroke: "rgb(97,106,229)", strokeWidth: 2.5 }
        },
        "red": {
            paintStyle: { stroke: "rgb(229, 97, 97)", strokeWidth: 2.5 },
            hoverPaintStyle: { stroke: "rgb(229, 97, 97)", strokeWidth: 2.5 }
        },
        "blue0": {
            paintStyle: { stroke: "blue", strokeWidth: 2.5 },
            hoverPaintStyle: { stroke: "blue", strokeWidth: 2.5 }
        },
        "red0": {
            paintStyle: { stroke: "red", strokeWidth: 2.5 },
            hoverPaintStyle: { stroke: "red", strokeWidth: 2.5 }
        },
        "yellow0": {
            paintStyle: { stroke: "yellow", strokeWidth: 2.5 },
            hoverPaintStyle: { stroke: "yellow", strokeWidth: 2.5 }
        }
    })

    instance.addEndpoint([MCB_Red], {
        endpoint: "Dot",
        anchor: [["Center"]],
        isSource: true,
        isTarget: true,
        connectionsDetachable: true,
        connectionType: "red0",
        paintStyle: { fill: "red", strokeWidth: 2.5 },
        maxConnections: 10,
        connector: ["StateMachine", { curviness: 50 }]
    })

    instance.addEndpoint([MCB_Blue], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connectionsDetachable: true,
        connectionType: "blue0",
        paintStyle: { fill: "blue", strokeWidth: 2.5 },
        maxConnections: 10
    })

    instance.addEndpoint([MCB_Yellow], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connectionsDetachable: true,
        connectionType: "yellow0",
        paintStyle: { fill: "yellow", strokeWidth: 2.5 },
        maxConnections: 10
    })

    instance.addEndpoint([StarterInBlu, StarterInRed, StarterInYel, StarterOutBlu, StarterOutRed, StarterOutYel, MotorInBlu, MotorInRed, MotorInYel, VoltmeterPositive, AmmeterPositive], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connectionsDetachable: true,
        connectionType: "red",
        paintStyle: { fill: "rgb(229, 97, 97)", strokeWidth: 2.5 },
        maxConnections: 10
    })

    // instance.addEndpoint([MotorOutBlu, MotorOutRed, MotorOutYel], {
    //     endpoint: "Dot",
    //     anchor: ["Center"],
    //     isSource: true,
    //     isTarget: true,
    //     connectionsDetachable: true,
    //     connectionType: "red",
    //     paintStyle: { fill: "rgb(229, 97, 97)", strokeWidth: 2.5 },
    //     maxConnections: 10,
    //     connector: ["StateMachine", { curviness: -50, proximityLimit: 1 }]
    // })

    instance.addEndpoint([VoltmeterNegative, AmmeterNegative], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connectionsDetachable: true,
        connectionType: "blue",
        paintStyle: { fill: "rgb(97, 97, 229)", strokeWidth: 2.5 },
        maxConnections: 10
    })
})

// var validConn = [MotorOutRed, VoltmeterPositive, MotorOutRed, AmmeterPositive, MotorOutBlu, VoltmeterNegative, motorin]

function isConnected(node1, node2) {
    if ((instance.getConnections({ source: node1, target: node2 })[0] != undefined) || (instance.getConnections({ source: node2, target: node1 })[0] != undefined)) {
        return true;
    }
    else {
        return false;
    }
}

function MCBToStarter() {
    let MCB_nodes = [MCB_Red, MCB_Blue, MCB_Yellow]
    let Starter_nodes = [StarterInRed, StarterInBlu, StarterInYel]
    let counter = 0;

    for (let i = 0; i < MCB_nodes.length; i++) {
        for (let j = 0; j < Starter_nodes.length; j++) {
            if (isConnected(MCB_nodes[i], Starter_nodes[j])) {
                counter = counter + 1;
            }
        }
    }

    if (counter == 3) {
        return true;
    }
    else {
        return false;

    }
}

function StarterToMotor() {
    let Starter_nodes = [StarterOutBlu, StarterOutRed, StarterOutYel]
    let MotorInNodes = [MotorInRed, MotorInYel, MotorInBlu ]
    let counter = 0;
    let motor_connected_r = 0;
    let motor_connected_b = 0;
    let motor_connected_y = 0;

    for (let i = 0; i < Starter_nodes.length; i++) {
        let starter_connected = 0;
        for (let j = 0; j < MotorInNodes.length; j++) {
            if (isConnected(Starter_nodes[i], MotorInNodes[j])) {
                counter = counter + 1;
                starter_connected = starter_connected + 1;
                switch (j) {
                    case 0:
                        motor_connected_b = motor_connected_b + 1
                        break;
                    case 1:
                        motor_connected_r = motor_connected_r + 1
                        break;
                    case 2:
                        motor_connected_y = motor_connected_y + 1
                        break;
                }
                MotorInNodes.splice(MotorInNodes.indexOf(MotorInNodes[j]), 1)
                break;
            }
        }

        if (starter_connected == 0) {
            console.log(Starter_nodes[i]);
            StarterNodeEmpty = Starter_nodes[i];
        }
    }

    if (motor_connected_b == 0) {
        MotorNodeEmpty = MotorInBlu
    }
    else if (motor_connected_y == 0) {
        MotorNodeEmpty = MotorInYel
    }
    else if (motor_connected_r == 0) {
        MotorNodeEmpty = MotorInRed
    }

    if (counter == 2) {
        return true;
    }
    else {
        return false;
    }
}

/*function MotorOuts(){
    let MotorOutNodes = [MotorOutBlu, MotorOutRed, MotorOutYel]
    let indexes = [1, 2, 4]

    let counter = 0
    for(let i=0; i<MotorOutNodes.length; i++){
        for(let j=0; j<MotorOutNodes.length; j++){
            
            if(isConnected(MotorOutNodes[i], MotorOutNodes[j])){
                counter = counter + (indexes[i] + indexes[j]);
            }
        }    
    }

    if((counter/2 == 9)||(counter/2 == 8)||(counter/2 == 11)||(counter/2 == 14)){
        return true;
    }
    else{
        return false;
    }
}*/

function EmptyCheck(st_node, mt_node) {
    if (isConnected(st_node, VoltmeterPositive)) {
        if (isConnected(st_node, AmmeterPositive)) {
            if (isConnected(mt_node, AmmeterNegative)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function StrayNode() {
    let node_list = [StarterOutBlu, StarterOutRed, StarterOutYel, MotorInBlu, MotorInRed, MotorInYel]
    let counter = 0;
    node_list.splice(node_list.indexOf(StarterNodeEmpty), 1)
    node_list.splice(node_list.indexOf(MotorNodeEmpty), 1)

    for (let i = 0; i < node_list.length; i++) {
        if (isConnected(node_list[i], VoltmeterNegative)) {
            counter = counter + 1
        }
    }

    if (counter == 1) {
        if (instance.getConnections({ source: VoltmeterNegative }).length == 1) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}

function calculateTorque(){
    Torque = 9.81 * (parseFloat(w1.value) - parseFloat(w2.value)) * 0.15;
}

check.onclick = function checkConn() {
    if (MCBToStarter() && StarterToMotor()) {
        if (EmptyCheck(StarterNodeEmpty, MotorNodeEmpty)) {
            if (StrayNode()) {
                window.alert("Right Connections!")

                MCB.disabled = false;
            }
        }
    }
}

function disconnect(num) {
    let nodes_list = [MCB_Red, MCB_Blue, MCB_Yellow, StarterInRed, StarterInBlu, StarterInYel, StarterOutRed, StarterOutBlu, StarterOutYel, VoltmeterPositive, VoltmeterNegative, AmmeterPositive, AmmeterNegative, MotorInRed, MotorInYel, MotorInBlu]
    instance.deleteConnectionsForElement(nodes_list[num])
}

MCB.onclick = function toggle_MCB() {
    console.log("working")

    if (MCB_state == 1) {
        MCB_state = 0;
        MCB_image.src = "../Assets/MCB_Off.png"
        MCB.style.transform = "translate(0px, 0px)"
    }
    else if (MCB_state == 0) {
        MCB_state = 1;
        MCB_image.src = "../Assets/MCB_ON.png"
        MCB.style.transform = "translate(0px, -50px)"
    }
}

var allow = 0
var speed = 10
var interval

add.onclick = function AddToTable(){
    calculateTorque()
    var torque = Torque;
    var speed = 1491.03 - (29.132*torque)

    console.log(torque)
    console.log(speed)
    let row = vtable.insertRow(index);

    let Sno = row.insertCell(0)
    let w1Val = row.insertCell(1)
    let w2Val = row.insertCell(2)
    let tqVal = row.insertCell(3)
    let spVal = row.insertCell(4)

    Sno.innerHTML = index
    w1Val.innerHTML = w1.value
    w2Val.innerHTML = w2.value
    tqVal.innerHTML = torque
    spVal.innerHTML = speed

    TorqueList.push(torque)
    SpeedList.push(speed)

    index = index + 1
}

function setSpeed(value){
    speed = value
    window.clearInterval(interval)
    runMotor()
    interval = window.setInterval(runMotor, 360*speed)
}

function RotateRotor(countRotations) {
    setTimeout(function () {
        rotor.style.transform = "rotate(" + countRotations + "deg)"
    }, speed * countRotations);
}

function callRotate() {
    for (let countRotations = rotor.style.transform; countRotations < 360; countRotations++) {
        RotateRotor(countRotations);
    }
    console.log("called")
}

function runMotor(){
    if(allow == 1){
        callRotate();
    }
}