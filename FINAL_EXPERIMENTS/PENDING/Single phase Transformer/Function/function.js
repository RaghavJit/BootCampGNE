



// const bulbImages = [                                                  //   Index value of Array starts from zero       

//     '../Assets/Switch_Off.png',                                               //0
//     '../Assets/Switch_On.png',                                                      //1
//     '../Assets/Switch_Off2.png',                                               //2
//     '../Assets/Switch_On2.png',                                                     //3
//     '../Assets/Switch_Off3.png',                                               //4
//     '../Assets/Switch_On3.png',                                                     //5
//                                                       //7

// ]

// const img = document.getElementById('imgClickAndChange');
// img.addEventListener('click',() => {
// img.src = bulbImages[1];

// document.getElementById('R-lamp').src = '../Assets/r_on.png'

// img.addEventListener('click',() => {
// img.src = bulbImages[0];

// document.getElementById('R-lamp').src = '../Assets/r_off.png'

// }) 

// })


// const img2 = document.getElementById('imgClickAndChange2');
// img2.addEventListener('click',() => {
// img2.src = bulbImages[3];

// document.getElementById('Y-lamp').src=  '../Assets/y_on.png'



// img2.addEventListener('click',() => {
// img2.src = bulbImages[2];

// document.getElementById('Y-lamp').src= '../Assets/y_off.png'

// })

// })

// const img3 = document.getElementById('imgClickAndChange3');
// img3.addEventListener('click',() =>  {
// img3.src = bulbImages[5];

// document.getElementById('B-lamp').src= '../Assets/b_on.png'


// img3.addEventListener('click',() =>  {
// img3.src = bulbImages[4];

// document.getElementById('B-lamp').src = '../Assets/b_off.png'

// })

// })

// we start the coding from here 


var cont = document.getElementById("container")

//var ps = document.getElementById("pow-start")

var check = document.getElementById("check")
var add = document.getElementById("add")
var plot = document.getElementById("plot")
var prnt = document.getElementById("print")
var reset = document.getElementById("reset")

var vtable = document.getElementById("valTable")

var r1val = document.getElementById("r1val")
var r2val = document.getElementById("r2val")
var r3val = document.getElementById("r3val")

var PSval = document.getElementById("PSval")
var PSdis = document.getElementById("PSdis")

var tIR1 = document.getElementById("textInputR1")
var tIR2 = document.getElementById("textInputR2")
var tIR3 = document.getElementById("textInputR3")

var ndl1 = document.getElementById("ndl1")
var ndl2 = document.getElementById("ndl2")
var ndl3 = document.getElementById("ndl3")

var p_mcb = document.getElementById("p_mcb")
var n_mcb = document.getElementById("n_mcb")
var p_v = document.getElementById("p_v")
var n_v = document.getElementById("n_v")
var p_a = document.getElementById("p_a")
var n_a = document.getElementById("n_a")
var v_w = document.getElementById("v_w")
var l_w = document.getElementById("l_w")
var m_w = document.getElementById("m_w")
var c_w = document.getElementById("c_w")
var a_var = document.getElementById("a_var")
var b_var = document.getElementById("b_var")
var c_var = document.getElementById("c_var")
var d_var = document.getElementById("d_var")

var transformer_a = document.getElementById("transformer_a")
var transformer_b = document.getElementById("transformer_b")
var transformer_c = document.getElementById("transformer_c")
var transformer_d = document.getElementById("transformer_d")
var lamp_load_a = document.getElementById("lamp_load_a")
var lamp_load_b = document.getElementById("lamp_load_b")
var output_p_v = document.getElementById("output_p_v")
var output_n_v = document.getElementById("output_n_v")

var output_p_a = document.getElementById("output_p_a")
var output_n_a = document.getElementById("output_n_a")

var output_v_var = document.getElementById("output_v_var")
var output_l_var = document.getElementById("output_l_var")
var output_m_var = document.getElementById("output_m_var")
var output_c_var = document.getElementById("output_c_var")

var knob = document.getElementById("Var_Knob")

var swit1 = document.getElementById("switch1")
var swit2 = document.getElementById("switch2")
var swit3 = document.getElementById("switch3")

var index = 1

var validConn = [
    p_mcb, a_var,
    n_mcb, b_var,
    c_var, p_v,
    d_var, n_v,
    p_v, p_a,
    n_a, m_w,
    m_w, c_w,
    l_w, transformer_a,
    n_v, v_w,
    v_w, transformer_b,
    transformer_c, output_p_v,
    transformer_d, output_n_v,
    output_p_v, output_p_a,
    output_n_a, output_m_var,
    output_m_var, output_c_var,
    output_n_v, output_v_var,
    lamp_load_a, output_l_var,
    lamp_load_b, output_v_var
]

var arrChk = []
var arrChkStore = []

var mcb_state = 0
var var_state = 0
var mcb_disabled = 1
var var_disabled = 1

var knob_state = 0;

var var_voltage = 0
var angle = 0
var angle_inc = 3.6
var volt_inc = 2.2

function task(i, x, y) {
    setTimeout(function () {
        angle = angle + x
        var_voltage = var_voltage + y

        knob.style.transform = "rotate(" + angle + "deg)"
        updateAmmeters()

    }, 20 * i);
}

knob.onclick = function () {
    if (var_disabled == 0) {
        for (let i = 0; i < 100; i++) {
            task(i, angle_inc, volt_inc);
        }

        if (angle_inc == -3.6) {
            angle_inc = 3.6
            volt_inc = 2.2
            add.disabled = true

        }
        else if (angle_inc == 3.6) {
            angle_inc = -3.6
            volt_inc = -2.2
            add.disabled = false
        }
    }

}


const instance = jsPlumb.getInstance({
    container: cont
})

check.disabled = false

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
    instance.addEndpoint([p_mcb, m_w, output_p_a], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)" },
        connectionType: "positive",
        maxConnections: 10,
        connectionsDetachable: true
    })

    instance.addEndpoint([p_v, p_a], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)" },
        connectionType: "positive",
        maxConnections: 10,
        connectionsDetachable: true,
        connector: ["StateMachine", { curviness: -40 }]
    })
    instance.addEndpoint([c_var, l_w], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)" },
        connectionType: "positive",
        maxConnections: 10,
        connectionsDetachable: true,
        connector: ["StateMachine", { curviness: -50 }]
    })


    instance.addEndpoint([m_w, c_w], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)" },
        connectionType: "positive",
        maxConnections: 10,
        connectionsDetachable: true,
        connector: ["Bezier", { curviness: 150 }]
    })

    instance.addEndpoint([output_p_v], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)" },
        connectionType: "positive",
        maxConnections: 10,
        connectionsDetachable: true,
        connector: ["StateMachine", { curviness: -50 }]
    })

    instance.addEndpoint([v_w], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)" },
        connectionType: "negative",
        maxConnections: 10,
        connectionsDetachable: true,
        connector: ["Bezier", { curviness: 150 }]
    })



    instance.addEndpoint([output_n_v, output_n_a], {

        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)", strokeWidth: 0 },
        connectionType: "negative",
        connectionsDetachable: true,
        maxConnections: 10,

    })

    instance.addEndpoint([n_a], {

        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)", strokeWidth: 0 },
        connectionType: "negative",
        connectionsDetachable: true,
        maxConnections: 10,
        connector: ["StateMachine", { curviness: 10 }]

    })


    instance.addEndpoint([n_v], {

        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)", strokeWidth: 0 },
        connectionType: "negative",
        connectionsDetachable: true,
        maxConnections: 10,
        connector: ["StateMachine", { curviness: -60 }]

    })


    instance.addEndpoint([n_mcb], {

        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)", strokeWidth: 0 },
        connectionType: "negative",
        connectionsDetachable: true,
        maxConnections: 10,
        connector: ["StateMachine", { curviness: 50 }]

    })

    instance.addEndpoint([d_var], {

        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)", strokeWidth: 0 },
        connectionType: "negative",
        connectionsDetachable: true,
        maxConnections: 10,
        connector: ["StateMachine", { curviness: -20 }]

    })

    instance.addEndpoint([output_n_a], {

        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)", strokeWidth: 0 },
        connectionType: "negative",
        connectionsDetachable: true,
        maxConnections: 10,
        connector: ["StateMachine", { curviness: -50 }]

    })


    instance.addEndpoint([output_n_v], {

        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)", strokeWidth: 0 },
        connectionType: "negative",
        connectionsDetachable: true,
        maxConnections: 10,
        connector: ["StateMachine", { curviness: -100 }]

    })

    instance.addEndpoint([transformer_d], {

        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)", strokeWidth: 0 },
        connectionType: "negative",
        connectionsDetachable: true,
        maxConnections: 10,
        connector: ["Bezier", { curviness: 180 }]

    })

    instance.addEndpoint([transformer_c], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)" },
        connectionType: "positive",
        maxConnections: 10,
        connectionsDetachable: true,
        connector: ["Bezier", { curviness: 90 }]
    })

    instance.addEndpoint([a_var, transformer_a, lamp_load_a, output_l_var, output_m_var, output_c_var], {

        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)", strokeWidth: 2.5 },
        connectionType: "positive",
        connectionsDetachable: true,
        maxConnections: 10,
    })

    instance.addEndpoint([b_var, transformer_b, transformer_d, lamp_load_b, output_v_var], {

        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)", strokeWidth: 2.5 },
        connectionType: "negative",
        connectionsDetachable: true,
        maxConnections: 10
    })

    instance.addEndpoint([lamp_load_b], {

        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)", strokeWidth: 2.5 },
        connectionType: "negative",
        connectionsDetachable: true,
        maxConnections: 10,
        connector: ["StateMachine", { curviness: -230 }]
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

check.onclick = function MyCheck() {

    flags3 = 1;

    for (var i = 0; i < validConn.length; i++) {

        if (i % 2 == 0) {
            console.log(isConnected(validConn[i], validConn[i + 1]))
            if (isConnected(validConn[i], validConn[i + 1])) {
                arrChk.push(isConnected(validConn[i], validConn[i + 1]))
            }
        }
    }

    if (arrChk.length == 18) {
        window.alert("Right Connections")
        arrChk = arrChkStore
        arrChk = []
        mcb_disabled = 0
        //code for the case when connections are correct
    }

    else {
        window.alert("Invalid Connnections")
        window.location.reload()
    }
}


function disconnect(num) {

    let node_list = [p_mcb, n_mcb, a_var, b_var, c_var, d_var, p_v, n_v, p_a, n_a, v_w, l_w, m_w, c_w, transformer_a, transformer_b, transformer_c, transformer_d, lamp_load_a, lamp_load_b,
        output_p_v, output_n_v, output_p_a, output_n_a, output_v_var, output_l_var, output_m_var, output_c_var]

    instance.deleteConnectionsForElement(node_list[num])

}

MCB.onclick = function togglemcb() {
    if (mcb_disabled == 0) {
        if (mcb_state == 0) {
            this.src = "../Assets/MCB_ON.png"
            mcb_state = 1;
            var_disabled = 0
        }

        else if (mcb_state == 1) {
            this.src = "../Assets/MCB_Off.png"
            mcb_state = 0;
            var_disabled = 1
            Var.src = "../Assets/Variac_OFF.png"
        }
    }
}

Var.onclick = function togglevar() {
    if (var_disabled == 0) {
        if (var_state == 0) {
            this.src = "../Assets/Variac_ON.png"
            var_state = 1
        }
        else if (var_state == 1) {
            this.src = "../Assets/Variac_OFF.png"
            var_state = 0
        }
    }
}

function isConnected(node1, node2) {
    if ((instance.getConnections({ source: node1, target: node2 })[0] != undefined) || (instance.getConnections({ source: node2, target: node1 })[0] != undefined)) {
        return true;
    }
    else {
        return false;
    }
}

function rotateNeedle(needle, angle) {
    needle.style.transform = "rotate(" + angle + "deg)"
}


function updateAmmeters() {

    console.log("here")

}



add.onclick = function AddToTable() {
    let row = vtable.insertRow(index);

    let Sno = vtable.insertRow(index);
    let V1 = row.insertCell(0);
    let A1 = row.insertCell(1);
    let W1 = row.insertCell(2);
    let V2 = row.insertCell(0);
    let A2 = row.insertCell(1);
    let W2 = row.insertCell(2);
    let eff = row.insertCell(3);
    let reg = row.insertCell(4);

}


prnt.onclick = function prntScr() {
    window.print();
}


function myFunction() {

    document.getElementById("add").disabled = true;

}

