# BootCampGNE

Please create your own branch and commit changes to it.

All the experiments are now complete with their basic functionality

### Things left to do
1. Complete calculations tab for RLC experiments.
1. Test all the experiments and fix any bugs and problems.
1. Review the .css of all the files, and do the reqested changes/fixes.
1. Do the final touch up.
1. Change the directory structure for hosting.

```
window.onload = function setJsPlumb() {
    setTimeout(() => {
        instance.connect({ source: POWER_NEGATIVE, target: POWER_POSITIVE })
        instance.deleteEveryConnection()
    }, 50);
}
```

## Experiments (COMPLETE)
### KCL
<!-- 1. Sliders need to be centered. -->
1. Disable onhover of disabled buttons.
1. Font of R1, R2, R3 text boxes.
1. Graph color need to be more subtle (optional).
1. Seven segment font on display of PowerSupply.

### KVL
<!-- 1. Sliders need to be centered. -->
1. Disable onhover of disabled buttons.
1. Font of R1, R2, R3 text boxes.
1. Graph color need to be more subtle (optional).
1. Seven segment font on display of PowerSupply.

### Maximum Power Transfer
<!-- 1. Sliders need to be centered. -->
1. Disable onhover of disabled buttons.
1. Graph css needs to be done.
1. Voltmeter range = (0-10)V
1. Ammeter range = (0-50)V
1. Power slider grey-scale is not similar to KVL, KCL (thumb is not grey-scale)

### Norton 
<!-- 1. Sliders need to be centered. -->
1. Disable onhover of disabled buttons.
1. css for 'verify' button needs to be done.

### Study and Working of PowerFactor
1. Add arrow on variac knob to indicate its state.
1. Voltmeter range = (0-230)V
1. Ammeter range = (0-500)V
1. Wattmeter range = (0-100)W
1. See issue #33
1. css for 'verify' button needs to be done.
![alt text](./ReadmeImages/Variac_Knob%20-%20Copy.png?raw=true)

### SuperPosition
<!-- 1. Sliders need to be centered. -->
1. Disable onhover of disabled buttons.
1. css for 'verify' button needs to be done.
1. Write A1 A2 A3 on ammeters.
1. Write POWER on powersupply button.
1. Calculation tab text boxes move on changing zoom.

### Thevenin
<!-- 1. Sliders need to be centered. -->
1. Disable onhover of disabled buttons.
1. css for 'verify' button needs to be done. 
1. Calculation tab text boxes move on changing zoom.

### Three-phase
1. disabled css of w1 and w2 .
1. Disable onhover of disabled buttons.
1. Voltmeter range = (0-500)V
1. Add a mark to indicate rotation on rotor.
![alt text](./ReadmeImages/1.png?raw=true)

### Two wattmeter
1. W1 and W2 on wattmeters.
1. Disable onhover of disabled buttons.
1. Calculation tab text boxes move on changing zoom.
1. Voltmeter range = (0-500)V
1. Wattmeter range = (0-1500)W can also write as (0-1.5)KW

## Experiment (PENDING)

### RLC Parallel
1. Change the name of experiment. (will be provided)
1. Calculation tab to be made.
1. Disable onhover of disabled buttons.
1. Name ammeters A1, A2, A3, A4.
1. Power Supply button is too small.
1. Ammeter (5, 6) labels are not clickable.
1. Write 'Resistor', 'Capacitor' and 'Inductor'.
1. Voltmeter range = (0-220)V
1. Ammeter range = (0-50)V
1. Wattmeter range = (0-1500)W can also write as (0-1.5)KW
1. See issue #33

### RLC Series
1. Change the name of experiment. (will be provided)
1. Calculation tab to be made.
1. Disable onhover of disabled buttons.
1. Name ammeters V1, V2, V3, V4.
1. Power Supply button is too small.
1. Ammeter (5, 6) labels are not clickable.
1. Write 'Resistor', 'Capacitor' and 'Inductor' .
1. Voltmeter range = (0-220)V
1. Ammeter range = (0-50)V
1. Wattmeter range = (0-1500)W can also write as (0-1.5)KW
1. See issue #33

### RLC Resonance 
1. Change the name of experiment. (will be provided).
1. Disable onhover of disabled buttons.
1. Calculation tab to be made.
1. Write 'Resistor', 'Capacitor' and 'Inductor'.
1. Shift above components (voltmeter and ammeter etc.) to right side (where there is free space.).
1. Place the slider on the function generator (exactly similar to powersupply in pervious experiments).
1. See issue #33