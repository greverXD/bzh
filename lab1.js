
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let num3 = document.querySelector(".num3");
let num4 = document.querySelector(".num4");
let num5 = document.querySelector(".num5");
let n1 = document.querySelector(".n1");
let n2 = document.querySelector(".n2");
let n3 = document.querySelector(".n3");
let n4 = document.querySelector(".n4");
let n5 = document.querySelector(".n5");
let n6 = document.querySelector(".n6");
let n7 = document.querySelector(".n7");
let g1 = document.querySelector(".g1");
let g2 = document.querySelector(".g2");
let g3 = document.querySelector(".g3");
let f1 = document.querySelector(".f1");
let f2 = document.querySelector(".f2");
let f3 = document.querySelector(".f3");
let z1 = document.querySelector(".z1");
let z2 = document.querySelector(".z2");
let z3 = document.querySelector(".z3");
let v1 = document.querySelector(".v1");
let j1 = document.querySelector(".j1");
const gs = [g1, g2, g3];
const zs = [z1, z2, z3];
const fs = [f1, f2, f3];
const nums = [num1, num2, num3, num4];
const ns = [n1, n2 , n3 , n4, n5 ,n6, n7];
let QOne = 1;
let QTwo = 1;
let resultNumber = 1;

function handleFirstClick() {
    let sentences = document.querySelectorAll(".sentence");
    

    let isOpen = false;
    sentences.forEach(sentence => {
        sentence.onclick = function(){
            let sentenceId = this.id;
            let blockId = sentenceId.replace('sentence','block')
            let windowdiv = document.querySelector(`#${blockId}`).closest(".window");
            if (!isOpen) {
             windowdiv.classList.add("window--visible");
             isOpen = true
             } else {
               windowdiv.classList.remove("window--visible");
               isOpen = false;
            }
    }
    });
}

function handleTableRows() {
   

    let block1Vars = [null, null, null, null];
    let block2Vars = [null, null, null, null, null,1, null];
    let block3Vars = [null, null, null, null];
    const blocks = document.querySelectorAll('.block');
    const table1 = document.getElementById('table1')
    const table2 = document.getElementById('table2')
    const tablee1 = document.getElementById('tablee1')
    const tablee2 = document.getElementById('tablee2')
    let isTable1HandlerAdded = false;
    let isTable2HandlerAdded = false;

blocks.forEach((block, blockIndex) => {
    const rows = block.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');

        cells.forEach((cell, cellIndex) => {
            cell.addEventListener('click', function () {
                const cellValue = this.textContent.trim();

                if (cellValue) {
                    switch (blockIndex) {
                        case 0:
                            if (cellIndex <= 8) {
                                block1Vars[cellIndex - 1] = cellValue;
                                num1.textContent = block1Vars[0] || '';
                                num2.textContent = block1Vars[2] || '';

                                if (cellIndex >= 4 && cellIndex <= 8) {
                                    num4.textContent = cellValue;
                                }
                            }
                            break;

                        case 1:
                             n6.textContent = block2Vars[5]
                            if (!isTable1HandlerAdded) {
                                isTable1HandlerAdded = true;

                                table1.addEventListener('click', (event) => {
                                    if (event.target.tagName === 'TD') {
                                        const cellIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
                                        const cellValue = event.target.textContent.trim();

                                        block2Vars[cellIndex - 1] = cellValue;
                                        n1.textContent = block2Vars[0];
                                        console.log(n1.textContent)
                                        n2.textContent = block2Vars[1];
                                        n3.textContent = block2Vars[2];
                                        
                                        if (cellIndex >= 4 && cellIndex <= 8) {
                                            n7.textContent = cellValue;
                                        }
                                    }
                                });
                            }

                            if (!isTable2HandlerAdded) {
                                isTable2HandlerAdded = true;

                                table2.addEventListener('click', (event) => {
                                    if (event.target.tagName === 'TD') {
                                        const cellIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
                                        const cellValue = event.target.textContent.trim();

                                        block2Vars[cellIndex - 1] = cellValue;
                                        n4.textContent = event.target.textContent;
                                    }
                                });
                            }
                            console.log(block2Vars)
                            setTimeout(() => {
                                checkNumsContent();
                                setNumsInInputs(); 
                            }, 0);
                            setNumsInInputs();
                            break;
                            case 4:
                                
                                    block3Vars[cellIndex] = cellValue;
                                    console.log("Block 3 Vars:", block3Vars);
                                    if (!isTable1HandlerAdded) {
                                        isTable1HandlerAdded = true;
        
                                        tablee1.addEventListener('click', (event) => {
                                            if (event.target.tagName === 'TD') {
                                                const cellIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
                                                const cellValue = event.target.textContent.trim();
        
                                                block2Vars[cellIndex - 1] = cellValue;

                                                f1.textContent = block2Vars[1];
                                                console.log(f1.textContent)
                                                
                                                if (cellIndex >= 4 && cellIndex <= 8) {
                                                    f3.textContent = cellValue;
                                                    console.log(f3.textContent)
                                                }
                                            }
                                        });
                                    }
        
                                    if (!isTable2HandlerAdded) {
                                        isTable2HandlerAdded = true;
        
                                        tablee2.addEventListener('click', (event) => {
                                            if (event.target.tagName === 'TD') {
                                                const cellIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
                                                const cellValue = event.target.textContent.trim();
        
                                                block2Vars[cellIndex - 1] = cellValue;
                                                f2.textContent = event.target.textContent;
                                                console.log(f2.textContent)
                                            }
                                        });
                                    }
                                    setTimeout(() => {
                                        checkNumsContent();
                                        setNumsInInputs(); 
                                    }, 0);
                                break;
                        }
                    }

                    setNumsInInputs();
                    checkNumsContent();


                });
            });
        });
    });
}

function handleKthreeClick() {
    let kthree = document.querySelectorAll(".kthree h4");
    let kthree1 = document.querySelectorAll(".kthree1 h4");
    let numbers = [0.23, 0.7, 0.8];
    let numbers1 = [0.23, 0.7, 0.8];
    kthree.forEach((element, index) => {
        element.onclick = () => {
            let kone = numbers[index];
            num3.textContent = kone;
            

            
            setNumsInInputs();
            checkNumsContent();
        };
    });
    kthree1.forEach((element, index) => {
        element.onclick = () => {
            let kone = numbers1[index];
            n5.textContent = kone;
            console.log(n5.textContent)

            
            setNumsInInputs();
            checkNumsContent();
        };
    });
    
}

function handleKthreeClick2() {
    let kthree = document.querySelectorAll(".kthree4 h4");
    let inputs = document.querySelectorAll(".input-wrapper6 input");
    let numbers = [0.081, 0.133, 0.235];
    header()
    kthree.forEach((element, index) => {
        element.onclick = () => {
            let kone = numbers[index];
            v1.textContent = kone;
            console.log(v1)

            
                inputs[0].value = v1.textContent;
                inputs[1].value = g3.textContent;
            

        };
    });
}
function handleRavClick() {
    let rav = document.querySelector(".rav");
    let inputs = document.querySelectorAll(".input-wrapper1 input"); 
    let result = document.querySelector(".result");
   
    function calculate() {
        rav.onclick = () => {
            let product;

            for (let i = 0; i < inputs.length; i++) {
                let value = Number(inputs[i].value);

                if (!isNaN(value) && value !== 0) {
                    if (product === undefined) {
                        product = value; 
                    } else {
                        product *= value; 
                    }
                }
            }

            
            result.textContent = product !== undefined ? product : 0;
            QOne = result.textContent;
            console.log(QOne);
            header()
        };
    }

    calculate();
    

}
function handleRav2Click() {
    let rav2 = document.querySelector(".rav2");
    let inputs = document.querySelectorAll(".input-wrapper2 .inputs2");
    let result = document.querySelector(".result2");
    let numeratorInput = document.querySelector(".numerator");
    let denominatorInput = document.querySelector(".denominator");

    function calculate() {
        rav2.onclick = () => {
            let product = 1;

            // Уменьшаем значение первого числа на 1
            if (inputs.length > 0) {
                let firstInputValue = Number(inputs[0].value);
                if (firstInputValue !== "" && !isNaN(firstInputValue)) {
                    inputs[0].value = firstInputValue - 1;
                }
                
            }

            // Получаем значение дроби (числитель / знаменатель)
            let numerator = Number(numeratorInput.value);
            let denominator = Number(denominatorInput.value);
            let fractionValue = 0;

            if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
                fractionValue = numerator / denominator;
            } else {
                fractionValue = 1;  // Если деление невозможно, принимаем 1 (или можно поставить любое другое значение по умолчанию)
            }

            // Умножаем дробь на остальные значения
            for (let i = 0; i < inputs.length; i++) {
                let value = Number(inputs[i].value);

                if (!isNaN(value) && value !== 0) {
                    product *= value;
                }
            }

            // Умножаем результат на значение дроби
            let finalResult = product * fractionValue;
            result.textContent = finalResult !== undefined ? finalResult : 0;
            QTwo = result.textContent;
            console.log(QTwo);
            header();
        };
    }

    calculate();
}



function handleRav3Click() {
    let rav = document.querySelector(".rav3");
    let inputs = document.querySelectorAll(".input-wrapper3 input"); 
    let result = document.querySelector(".result3");
   
    function calculate() {
        rav.onclick = () => {
            let product;

            for (let i = 0; i < inputs.length; i++) {
                let value = Number(inputs[i].value);

                if (!isNaN(value) && value !== 0) {
                    if (product === undefined) {
                        product = value; 
                    } else {
                        product *= value; 
                    }
                }
            }

            
            result.textContent = product !== undefined ? product : 0;

            
        };
    }

    calculate();
    

}
function handleRav4Click() {
    
    let rav = document.querySelector(".rav4");
    let inputs = document.querySelectorAll(".input-wrapper6 input"); 
    let result = document.querySelector(".result4");

    let rav1 = document.querySelector(".rav5");
    let inputs1 = document.querySelectorAll(".input-wrapper4 input"); 
    let result1 = document.querySelector(".result5");
   header()
    function calculate() {
        rav.onclick = () => {

            let product = Number(inputs[0].value) * (Number(inputs[1].value) ** 2) * (Number(inputs[2].value) ** 0.2)
            result.textContent = product !== undefined ? product : 0;

            
        };
    }

    function calculate1() {
        rav1.onclick = () => {
            let exp1 = 1;
            let exp2 = 1;
            inputs1.forEach((input, index) => {
                const value = Number(input.value)
                if(index < 3){
                    exp1 *= value;
                } else{
                    exp2 *= value;
                }
            });
            const product1 = exp1 * exp2;
            result1.textContent = isNaN(product1) ? 0 : product1;
        }
    }
    
    calculate();
    calculate1()

}

function checkNumsContent() {
    let windowdiv = document.querySelector(".window");
    let input = document.querySelector(".input-wrapper1");
    let input2 = document.querySelector(".input-wrapper2");
    let input4 = document.querySelector(".input-wrapper4");
    let input6 = document.querySelector(".input-wrapper6");
    if (nums.every(num => !!num.textContent.trim())) {
        windowdiv.style.transform = 'translateX(-1010px)';
        windowdiv.style.position = 'absolute';
        input.style.transform = 'translateX(1010px)';
        input.style.position = 'relative';
    }
    if (ns.every(n => !!n.textContent.trim())) {
        windowdiv.style.transform = 'translateX(-1010px)';
        windowdiv.style.position = 'absolute';
        input2.style.transform = 'translateX(1010px)';
        input2.style.position = 'relative';
    }
    if (fs.every(f => !!f.textContent.trim())) {
        windowdiv.style.transform = 'translateX(-1010px)';
        windowdiv.style.position = 'absolute';
        input4.style.transform = 'translateX(1010px)';
        input4.style.position = 'relative';
    }
    if (!!v1.textContent.trim()) {
        windowdiv.style.transform = 'translateX(-1010px)';
        windowdiv.style.position = 'absolute';
        input6.style.transform = 'translateX(1010px)';
        input6.style.position = 'relative';
    }
}
function setNumsInInputs() {
    let inputs = document.querySelectorAll(".input-wrapper1 .inputs"); 
    let inputs2 = document.querySelectorAll(".input-wrapper2 .inputs2");
    let inputs4 = document.querySelectorAll(".input-wrapper4 .inputs4");
    

    if (inputs.length === nums.length) {
        inputs.forEach((input, index) => {
            input.value = nums[index].textContent;
        });
    }

    if (inputs2.length >= ns.length) {
        inputs2.forEach((input, index) => {
            if (index < ns.length) {
                input.value = ns[index].textContent.trim();
            }
        });
    }

    if(inputs4.length >= 3){
        inputs4.forEach((input, index) => {
            if (fs[index]) {
                input.value = fs[index].textContent; // Устанавливаем значение только для существующих элементов
            } else {
                input.value = ''; // Оставляем пустое поле для пользовательского ввода
            }
        });
    }
}


function header() {
    const table = document.getElementById("block-3");
    const columnHeaders = Array.from(table.querySelectorAll("thead tr:nth-child(2) th"));
    table.querySelectorAll("tbody td").forEach(cell => {
        cell.addEventListener("click", () => {
            const row = cell.closest("tr");
            const rowName = row.querySelector("td:first-child").innerText; 
            const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);
            const columnHeader = columnHeaders[cellIndex - 1]?.innerText; 
            let numberOne = (Number(rowName) * Number(columnHeader)) / QOne;
            let numberTwo = (Number(rowName) * Number(columnHeader)) / QTwo;
            let resultNumber = Number(numberTwo + (0.5 * numberOne));
            g1.textContent = numberOne.toFixed(5);
            g2.textContent = numberTwo.toFixed(5);
            g3.textContent = resultNumber.toFixed(5);
            const inputs5 = document.querySelectorAll(".input-wrapper5 .inputs5");
            if (inputs5.length === 3) {
                inputs5[0].value = g1.textContent;
                inputs5[1].value = g2.textContent;
                inputs5[2].value = g3.textContent;
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.getElementById('inputValue');
    const difference = document.getElementById('difference');
    const percentage25 = document.getElementById('percentage25');
    const percentage50 = document.getElementById('percentage50');
    const percentage75 = document.getElementById('percentage75');

    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', () => {
            const cellValue = Number(cell.textContent);
            const inputNumber = Number(inputValue.value);
            if (!isNaN(inputNumber)) {
                const diff = inputNumber - cellValue;
                const percent25 = (inputNumber * 0.25).toFixed(2);
                const percent50 = (inputNumber * 0.40).toFixed(2);
                const percent75 = (inputNumber * 0.35).toFixed(2);
                
                difference.textContent = `Возможные потери людей: ${diff}`;
                percentage25.textContent = `Легкая(25%) : ${percent25}`;
                percentage50.textContent = `Средняя и тяжелая(40%): ${percent50}`;
                percentage75.textContent = `Смертельный исход(35%): ${percent75}`;
            }
        });
    });
});


function init() {
    handleFirstClick();
    handleTableRows();
    handleKthreeClick();
    handleRavClick();
    setNumsInInputs();
    handleRav2Click();
    header();
    handleRav3Click();
    handleKthreeClick2();
    handleRav4Click()
}

document.addEventListener('DOMContentLoaded', init);
