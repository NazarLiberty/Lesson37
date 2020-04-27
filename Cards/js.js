$(document).ready(function () {
    $('.wrapper').removeClass('wrapper--hide_red-numbers')
    $('.wrapper').removeClass('wrapper--hide_red-after10')
    $('.wrapper').removeClass('wrapper--hide_black-numbers')
    $('.wrapper').removeClass('wrapper--hide_black-after10')
})
function cardRenderRandom() {
    let red = false;
    let id;
    let symbol;
    let _value;
    let memoryItem;
    let memory = []

    while (true) {
        if (memory.length == 36) break;
        symbol = 1 + Math.round(Math.random() * 3)
        switch (symbol) {
            case 1: symbol = '&#9829'; id = 'H'; red = true; break;
            case 2: symbol = '&#9830'; id = 'D'; red = true; break;
            case 3: symbol = '&#9827'; id = 'C'; red = false; break;
            case 4: symbol = '&#9824'; id = 'P'; red = false; break;
            default: break;
        }
        _value = Math.round(6 + Math.random() * 8)
        memoryItem = _value + id
        if (memory.includes(memoryItem)) continue
        else {
            if (id == "H" || id == "D") red = true;
            memory.push(memoryItem)
            switch (_value) {
                case 11: _value = "J"; break;
                case 12: _value = "Q"; break;
                case 13: _value = "K"; break;
                case 14: _value = "A"; break;
                default:
                    break;
            }
            if (red == true) {
                if (typeof _value === 'number') appendRedNumbers(_value, symbol, id)
                else appendRedAfter10(_value, symbol)
            }
            else {
                if (typeof _value === 'number') appendBlackNumbers(_value, symbol, id)
                else appendBlackAfter10(_value, symbol, id)
            }

        }

    }
}
// function cardRender() {
//     let symbol;
//     let id;
//     let red;
//     for (let i = 1; i <= 4; i++) {
//         switch (i) {
//             case 1: symbol = '&#9829'; id = 'H'; red = true; break;
//             case 2: symbol = '&#9830'; id = 'D'; red = true; break;
//             case 3: symbol = '&#9827'; id = 'C'; red = false; break;
//             case 4: symbol = '&#9824'; id = 'P'; red = false; break;
//             default: break;
//         }
//         for (let j = 6; j <= 14; j++) {
//             let _value = j;
//             switch (_value) {
//                 case 11: _value = "J"; break;
//                 case 12: _value = "Q"; break;
//                 case 13: _value = "K"; break;
//                 case 14: _value = "A"; break;
//                 default:
//                     break;
//             }
//             if (red == true) {
//                 if (typeof _value === 'number') appendRedNumbers(_value, symbol, id)
//                 else appendRedAfter10(_value, symbol, id)
//             }
//             else {
//                 if (typeof _value === 'number') appendBlackNumbers(_value, symbol, id)
//                 else appendBlackAfter10(_value, symbol, id)
//             }
//         }
//     }
// }

function appendBlackNumbers(res, symbol, id) {
    $('body').append(`

    <div class="wrapper wrapper--hide_black-numbers">
    <img src="./img/img.jpg" class="card__background" />
        <div class="card">
        <div class="top-value"> ${res} <span class="top-symbol">${symbol}</span></div>
        <div class="middle-value" id="${id}${res}">
    </div>
    <div class="bottom-value"> ${res}<span class="bottom-symbol">${symbol}</span> </div>
</div>
</div>
`)
    for (let i = 0; i < res; i++) {
        $(`#${id}${res}`).append(`<div>${symbol}</div>`)
    }
    $(`#${id}7 div:nth-of-type(7)`).addClass('middle-value__absolute-top')
    $(`#${id}8 div:nth-of-type(7)`).addClass('middle-value__absolute-top')
    $(`#${id}8 div:nth-of-type(8)`).addClass('middle-value__absolute-bottom')
    $(`#${id}9 div:nth-of-type(9)`).addClass('middle-value__absolute-top')
    $(`#${id}10 div:nth-of-type(9)`).addClass('middle-value__absolute-top')
    $(`#${id}10 div:nth-of-type(10)`).addClass('middle-value__absolute-bottom')
}
function appendBlackAfter10(res, symbol, id) {
    $('body').append(`
    
    <div class="wrapper wrapper--hide_black-after10">
    <img src="./img/img.jpg" class="card__background" />
        <div class="card">
        <div class="top-value"> ${res} <span class="top-symbol">${symbol}</span></div>
        <div class="middle-value " id="${id}${res}">
        <div class="middle-value__after10">${res}</div>
    </div>
    <div class="bottom-value"> ${res}<span class="bottom-symbol">${symbol}</span> </div>
</div>
</div>
`)
}
function appendRedNumbers(res, symbol, id) {
    $('body').append(`
    <div class="wrapper wrapper--hide_red-numbers">
    <img src="./img/img.jpg" class="card__background" />
    <div class="card card--red">   
    <div class="top-value"> ${res} <span class="top-symbol">${symbol}</span></div>
    <div class="middle-value" id="${id}${res}">
    </div>
    <div class="bottom-value"> ${res}<span class="bottom-symbol">${symbol}</span> </div>
</div>
</div>
`)
    for (let i = 0; i < res; i++) {
        $(`#${id}${res}`).append(`<div>${symbol}</div>`)
    }
    $(`#${id}7 div:nth-of-type(7)`).addClass('middle-value__absolute-top')
    $(`#${id}8 div:nth-of-type(7)`).addClass('middle-value__absolute-top')
    $(`#${id}8 div:nth-of-type(8)`).addClass('middle-value__absolute-bottom')
    $(`#${id}9 div:nth-of-type(9)`).addClass('middle-value__absolute-top')
    $(`#${id}10 div:nth-of-type(9)`).addClass('middle-value__absolute-top')
    $(`#${id}10 div:nth-of-type(10)`).addClass('middle-value__absolute-bottom')
}
function appendRedAfter10(res, symbol, id) {
    $('body').append(`
<div class="wrapper wrapper--hide_red-after10">
<img src="./img/img.jpg" class="card__background" />
    <div class="card card--red">
    <div class="top-value"> ${res} <span class="top-symbol">${symbol}</span></div>
    <div class="middle-value" id="${id}${res}">
        <div class="middle-value__after10">${res}</div>
    </div>
    <div class="bottom-value"> ${res}<span class="bottom-symbol">${symbol}</span> </div>
    </div>
</div>
`)
}
// cardRender()
cardRenderRandom()
$('.wrapper').on('click', function () {
    $(this).toggleClass('wrapper--active')
})