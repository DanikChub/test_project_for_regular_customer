const changeColorButton = document.querySelector('.app_change_color'),
      popup = document.querySelector('.popup'),
      popupColors = document.querySelector('.popup_colors'),
      closeButton = document.querySelector('.popup_button'),
      app = document.querySelector('.app');

const colors = ['#F2F3F5', '#CECFD4', '#BFBFBF', '#B9CBCF', '#C2C9B7', '#F0D083', '#E0A676', '#C6877E', '#7EB3C1', '#9EABB3']

let thisColor = 0;

function pushPopupColors() {
    popupColors.innerHTML = "";
    colors.forEach((color, i) => {
        if (thisColor == i) {
            const colorElement = document.createElement('div')
            colorElement.classList.add('popup_color');
            colorElement.classList.add('active');
            colorElement.style.backgroundColor = color;
            popupColors.appendChild(colorElement);
        } else {
            const colorElement = document.createElement('div')
            colorElement.classList.add('popup_color');
            colorElement.style.backgroundColor = color;
            popupColors.appendChild(colorElement);
        }
        
    })

    const popupAllColors = document.querySelectorAll('.popup_color');

    popupAllColors.forEach((color, i) => {
        color.addEventListener('click', () => {
            thisColor = i;
            pushPopupColors();
        })
    })
}

pushPopupColors();
app.style.backgroundColor = colors[thisColor];



changeColorButton.addEventListener('click', () => {
    popup.classList.add('active');
})

closeButton.addEventListener('click', () => {
    app.style.backgroundColor = colors[thisColor];
    popup.classList.remove('active');
})


//types

const settingsTypes = document.querySelector('.settings_types'),
      doorImg  = document.querySelector('.door_img'),
      buttonLeft = document.getElementById('button_left'),
      buttonRight = document.getElementById('button_right');


const doorTypesLeft = ["./img/door/typesDoor/left/1.png", "./img/door/typesDoor/left/2.png", "./img/door/typesDoor/left/3.png", "./img/door/typesDoor/left/4.png", "./img/door/typesDoor/left/5.png", "./img/door/typesDoor/left/6.png", "./img/door/typesDoor/left/7.png", "./img/door/typesDoor/left/8.png"];
const doorTypesRight = ["./img/door/typesDoor/right/1.png", "./img/door/typesDoor/right/2.png", "./img/door/typesDoor/right/3.png", "./img/door/typesDoor/right/4.png", "./img/door/typesDoor/right/5.png", "./img/door/typesDoor/right/6.png", "./img/door/typesDoor/right/7.png", "./img/door/typesDoor/right/8.png"];

let thisDoor = 0;
let btnLeft = true;

buttonLeft.addEventListener('click', () => {
    btnLeft = true;
    buttonLeft.classList.add('active');
    buttonRight.classList.remove('active');
    pushDoorTypes();
    console.log(thisDoor);
    doorImg.src = doorTypesLeft[thisDoor];
})

buttonRight.addEventListener('click', () => {
    btnLeft = false;
    buttonLeft.classList.remove('active');
    buttonRight.classList.add('active');
    pushDoorTypes();
    pushDoorTypes();

    doorImg.src = doorTypesRight[thisDoor];
})

function pushDoorTypes() {
    let doorTypes = btnLeft? doorTypesLeft : doorTypesRight;
    settingsTypes.innerHTML = "";
    doorTypes.forEach((doorType, i) => {
        if (thisDoor == i) {
            const doorElement = document.createElement('div')
            doorElement.classList.add('settings_type');
            doorElement.classList.add('active');
            doorElement.innerHTML = i+1;
            settingsTypes.appendChild(doorElement);
        } else {
            const doorElement = document.createElement('div')
            doorElement.classList.add('settings_type');
            doorElement.innerHTML = i+1;
            settingsTypes.appendChild(doorElement);
        }
        
    })

    const doorTypesAll = document.querySelectorAll('.settings_type');

    doorTypesAll.forEach((doorType, i) => {
        doorType.addEventListener('click', () => {
            const doorElements = document.querySelectorAll('.settings_type');
            thisDoor = i;
            doorImg.src = doorTypes[thisDoor];
            doorTypesAll.forEach((doorType, j) => {
                doorElements[j].classList.remove('active');
            })
            doorElements[i].classList.add('active');
            pushPopupColors();
        })
    })
}

pushDoorTypes();