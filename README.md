# BootCampGNE

Please create your own branch and commit changes to it.

All the experiments are now complete with their basic functionality

## Things left to do
1. Complete calculations tab for RLC experiments.
1. Test all the experiments and fix any bugs and problems.
1. Review the .css of all the files, and do the reqested changes/fixes.
1. Do the final touch up.
1. Change the directory structure for hosting.


## Commands for ekus
```
git branch
git checkout ui_changes
git merge master
git status
git add .
git commit -m "commit message"
git push
```

1. git branch helps you know your current branch
1. git checkout ui_changes will take you to ui_changes branch
1. git merge master will bring all the changes of master to ui_changes this will help us verify that before pushing data to ui_changes it is updates with master's changes
1. git status will list all the files that you have changed
1. git add . will help you add all the fils to the commit
1. git commit will create a commit 
1. git push will push your local changes to the ui_changes branch on github.

**Mergeing branches or creating pull requests will be done by RaghavJit.**

## Experiments (COMPLETE)

### Please Ignore the commented changes! Please ignore the changes that don't have a tag "(name)" on them.
### KCL
1. disabled sliders
<!-- 1. Sliders need to be centered. -->
<!-- 1. Disable onhover of disabled buttons.
1. Font of R1, R2, R3 text boxes. -->
<!-- 1. Graph color need to be more subtle (optional).  -->
<!-- 1. Seven segment font on display of PowerSupply. (to be done in the end)(ekus) -->
1. Table limit

### KVL
1. disabled sliders
<!-- 1. Sliders need to be centered. -->
<!-- 1. Disable onhover of disabled buttons. -->
<!-- 1. Font of R1, R2, R3 text boxes. -->
<!-- 1. Graph color need to be more subtle (optional). -->
<!-- 1. Seven segment font on display of PowerSupply. (to be done in the end)(ekus) -->
1. Table limit

### Maximum Power Transfer
<!-- 1. Sliders need to be centered. -->
<!-- 1. Disable onhover of disabled buttons. -->
<!-- 1. Graph css needs to be done. (to be done in the end)(ekus) -->
1. disabled sliders
1. Voltmeter range = (0-10)V (chandan)*
1. Ammeter range = (0-50)A (chandan)*
<!-- 1. Power slider grey-scale is not similar to KVL, KCL (thumb is not grey-scale)(ekus) -->
<!-- <br /> **Description:** the thumb (the bit of the slider that is we use to hold) is not the same color as that of the rest of the slider when slider is disabled. Make it similar to the slider in KCL KVL exp. -->
1. Table limit

<!-- ### Norton  -->
<!-- 1. Sliders need to be centered. -->
<!-- 1. Disable onhover of disabled buttons. -->
<!-- 1. css for 'verify' button needs to be done. (ekus) -->
<!-- <br /> **Description:** the verify button was added later to the experiment and styling for the same needs to be done.  -->
1. Table limit

### Study and Working of PowerFactor
1. Add arrow on variac knob to indicate its state. (chandan)
1. Voltmeter range = (0-230)V (chandan)*
1. Ammeter range = (0-500)A (chandan)*
1. Wattmeter range = (0-100)W (chandan)*
1. disabled sliders
<!-- 1. See issue #33 -->
<!-- 1. css for 'verify' button needs to be done. (ekus) -->
<!-- <br /> **Description:** the verify button was added later to the experiment and styling for the same needs to be done. -->
1. Table limit
![alt text](./ReadmeImages/Variac_Knob%20-%20Copy.png?raw=true)

### SuperPosition
<!-- 1. Sliders need to be centered. -->
<!-- 1. Disable onhover of disabled buttons. -->
<!-- 1. css for 'verify' button needs to be done. (ekus) -->
<!-- <br /> **Description:** the verify button was added later to the experiment and styling for the same needs to be done. -->
<!-- 1. Write A1 A2 A3 on ammeters. (chandan)*r -->
1. Write POWER on powersupply button. (chandan)*
1. Sliders disabled state
<!-- 1. Calculation tab text boxes move on changing zoom.  -->
1. Table limit

### Thevenin
<!-- 1. Sliders need to be centered. -->
<!-- 1. Disable onhover of disabled buttons. -->
<!-- 1. css for 'verify' button needs to be done. (ekus) -->
<!-- <br /> **Description:** the verify button was added later to the experiment and styling for the same needs to be done. -->
1. Sliders disabled state
<!-- 1. Calculation tab text boxes move on changing zoom. -->
1. Table limit

### Three-phase
<!-- 1. disabled css of w1 and w2. (ekus) -->
<!-- <br />**Description**: the w1 and w2 inputs on this experiment were changed to dropdown menus. When they are disabled  their opacity is too little. The disabled css (just lik we did for the buttons and slider on 24/1/2023) needs to be done. -->
<!-- 1. Disable onhover of disabled buttons. -->
1. Table limit
1. Voltmeter range = (0-500)V (chandan)*
1. Add a mark to indicate rotation on rotor. (chandan)*
![alt text](./ReadmeImages/1.png?raw=true)

### Two wattmeter
1. W1 and W2 on wattmeters. (chandan)
<!-- 1. Disable onhover of disabled buttons. -->
<!-- 1. Calculation tab text boxes move on changing zoom. -->
1. Voltmeter range = (0-500)V (chandan)*
1. Wattmeter range = (0-1500)W can also write as (0-1.5)KW (chandan)*
1. Table limit

## Experiment (PENDING)

### RLC Parallel
<!-- 1. Change the name of experiment. (will be provided) -->
<!-- 1. Calculation tab to be made. (raghav) -->
<!-- 1. Disable onhover of disabled buttons. -->
1. Name ammeters A1, A2, A3, A4. (chandan)*
<!-- 1. Power Supply button is too small. -->
<!-- <br />**Description**:the button to turn on/off the power supply is very small and displaced from its position. Make opacity 1 to see. -->
<!-- 1. Ammeter (5, 6) labels are not clickable. (ekus) -->
<!-- <br />**Description**: try to solve the problem. -->
1. css of verify
1. Write 'Resistor', 'Capacitor' and 'Inductor'. (chandan)*
1. Voltmeter range = (0-220)V (chandan)*
1. Ammeter range = (0-50)V (chandan)*
1. Wattmeter range = (0-1500)W can also write as (0-1.5)KW (chandan)*
1. See issue #33
1. Table limit

### RLC Series
<!-- 1. Change the name of experiment. (will be provided) -->
<!-- 1. Calculation tab to be made. (raghav) -->
<!-- 1. Disable onhover of disabled buttons. -->
1. Name ammeters V1, V2, V3, V4. (chandan)*
<!-- 1. Power Supply button is too small. (ekus) -->
<!-- <br />**Description**:the button to turn on/off the power supply is very small and displaced from its position. Make opacity 1 to see. -->
<!-- 1. Ammeter (5, 6) labels are not clickable. (ekus) -->
<!-- <br />**Description**: try to solve the problem. -->
<!-- 1. Write 'Resistor', 'Capacitor' and 'Inductor' . (chandan)* -->
1. css of verify
1. Voltmeter range = (0-220)V (chandan)*
1. Ammeter range = (0-50)V (chandan)*
1. Wattmeter range = (0-1500)W can also write as (0-1.5)KW (chandan)*
1. See issue #33
1. Table limit

### RLC Resonance 
<!-- 1. Change the name of experiment. (will be provided). -->
<!-- 1. Disable onhover of disabled buttons. -->
<!-- 1. Calculation tab to be made. (raghav) -->
1. Write 'Resistor', 'Capacitor' and 'Inductor'. (chandan)*
1. Procedure needs to be fixed
1. css of verify
<!-- 1. Shift above components (voltmeter and ammeter etc.) to right side (where there is free space.). (ekus) -->
<!-- <br />**Description**: there used to be a wattmeter on the left of the ammeter and voltmeter in this experiment which was removed. now that space is empty. we need to cover the empty space by shifting the components (voltmeter and ammeter) to the right hand side of the screen. -->
<!-- 1. Place the slider on the function generator (exactly similar to powersupply in pervious experiments). (ekus) -->
<!-- <br />**Description**: we need the slider (in the formulas tab) to be on the function generator. The slider needs to be above the connection nodes. The styling of the slider should match the styling of function generator in previous experiments. -->
1. See issue #33
1. Table limit

