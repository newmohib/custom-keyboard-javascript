
let arr = [
    { type: "num", value: 0 ,backColor:"#FF6347"},
    { type: "num", value: 1 ,backColor:"#FF6347"},
    { type: "num", value: 2 ,backColor:"#FF6347"},
    { type: "num", value: 3 ,backColor:"#FF6347"},
    { type: "num", value: 4 ,backColor:"#FF6347"},
    { type: "num", value: 5 ,backColor:"#FF6347"},
    { type: "num", value: 6 ,backColor:"#FF6347"},
    { type: "num", value: 7 ,backColor:"#FF6347"},
    { type: "num", value: 8 ,backColor:"#FF6347"},
    { type: "num", value: 9 ,backColor:"#FF6347"},
   // { type: "num", value: '*' ,backColor:"#FF6347"},
   // { type: "num", value: '#' ,backColor:"#FF6347"},
    { type: "num", value: 'P' ,backColor:"#FF6347"},
    { type: "num", value: 'M' ,backColor:"#FF6347"},
    { type: "num", value: 'R' ,backColor:"#FF6347"},
    { type: "str", value: "King", backColor:"#7FFFD4" },
    { type: "str", value: "Queen",   backColor:"#DEB887"  },           
    { type: "str", value: "Full" ,backColor:"#F5F5DC" },
    { type: "str", value: "Twin" ,backColor:"#FFE4C4" },
    { type: "str", value: "Bunk" ,backColor:"#ADD8E6" },
    { type: "str", value: "Night" ,backColor:"#8A2BE2" },
    { type: "str", value: "Dress" ,backColor:"#A52A2A" },
    { type: "str", value: "Chest" ,backColor:"#5F9EA0" },
    { type: "str", value: "Sec" ,backColor:"#DEB887" },
    { type: "str", value: "Couch" ,backColor:"#D2691E" },
    { type: "str", value: "Reclin",backColor:"#FF7F50"  },
    { type: "str", value: "Hide",backColor:"#7FFFD4"  },
    { type: "str", value: "End",backColor:"#6495ED"  },
    { type: "str", value: "Coffee",backColor:"#FFF8DC"  },
    { type: "str", value: "TV",backColor:"#DC143C"  },
    { type: "str", value: "Stand",backColor:"#808000"  },
    { type: "str", value: "Chair",backColor:"#7FFFD4"  },
    { type: "str", value: "Lazy",backColor:"#008B8B"  },
    { type: "str", value: "Book",backColor:"#B8860B"  },
    { type: "str", value: "Shelf",backColor:"#B8860B"  },
    { type: "str", value: "Book",backColor:"#B8860B"  },
    { type: "str", value: "Dine",backColor:"#B8860B"  },
    { type: "str", value: "China",backColor:"#B8860B"  },
    { type: "str", value: "Cubby",backColor:"#B8860B"  },
    { type: "str", value: "Shoe",backColor:"#B8860B"  },
    { type: "str", value: "Pack",backColor:"#B8860B"  },
    { type: "str", value: "Dump",backColor:"#B8860B"  },
    { type: "str", value: "Bring",backColor:"#B8860B"  },
    { type: "str", value: "Wrap",backColor:"#B8860B"  },
    { type: "str", value: "File",backColor:"#B8860B"  },
    { type: "str", value: "Stool",backColor:"#B8860B"  },
    { type: "str", value: "Desk",backColor:"#B8860B"  },
    { type: "str", value: "Hutch",backColor:"#B8860B"  },
    { type: "str", value: "Platform-",backColor:"#B8860B"  },
    { type: "str", value: "Mech-",backColor:"#B8860B"  },
    { type: "str", value: "Boxes",backColor:"#B8860B"  },
    { type: "str", value: "Bins",backColor:"#B8860B"  },
    { type: "str", value: "Patio",backColor:"#B8860B"  },
    { type: "str", value: "BBQ",backColor:"#B8860B"  },
    { type: "str", value: "Plants",backColor:"#B8860B"  },
    { type: "str", value: "Tool",backColor:"#B8860B"  },
    { type: "str", value: "Fit",backColor:"#B8860B"  },
    { type: "str", value: "Wood-",backColor:"#B8860B"  },
    { type: "str", value: "Metal-",backColor:"#B8860B"  },
    { type: "str", value: "Glass-",backColor:"#B8860B"  },
    { type: "str", value: "Plastic-",backColor:"#B8860B"  },
    { type: "str", value: "Heavy-",backColor:"#B8860B"  },
    { type: "str", value: "Big-",backColor:"#B8860B"  },
    { type: "str", value: "Move",backColor:"#B8860B"  },
    { type: "str", value: "-",backColor:"#B8860B"  },
    { type: "str", value: "&",backColor:"#B8860B"  },
    { type: "str", value: ".",backColor:"#B8860B"  },
    { type: "str", value: "/",backColor:"#B8860B"  }

];;

let initialFromLength = 10;
let fromLength = initialFromLength;
let strButtonView = 24;
let toLength = fromLength + strButtonView;
let total = arr.length;
let isShow = false;
let selectionStart = 0;
let selectionEnd = 0;
let createElement = document.getElementById("calculatorValue");

const createButton = () => {
    var buttonText = '';
    var buttonNum = '';
    arr.map((item, index) => {
        if (item.type === "str" && index >= fromLength && index <= toLength) {
            buttonText += `<div class="col col-md pl-0 pr-0 pb-0 mb-0 "><button onclick="getData('${item.value}')" type="button" class="btn btn-light btn-block button_custom_br">${item.value} </button></div>`;
        }
        else if (item.type === "num") {
            buttonNum += `<div class="col col-md pl-0 pr-0 mb-0 "><button onclick="getData('${item.value}')" type="button" class="btn btn-light btn-block button_custom_br">${item.value} </button></div>`;
        }
    });
    document.getElementById("allNum").innerHTML = buttonNum;
    document.getElementById("allStr").innerHTML = buttonText;
};
const getData = (value) => {
    let existValue = createElement.value;
    let totalLength = 0 ;
    let superscript = { 0: '\u2070', 1: '\u00B9', 2: '\u00B2', 3: '\u00B3', 4: '\u2074', 5: '\u2075', 6: '\u2076', 7: '\u2077', 8: '\u2078', 9: '\u2079',P:'\u1d3e',M:'\u1d39',R:'\u1d3f', }
    let subscript = { 0: '\u2080', 1: '\u2081', 2: '\u2082', 3: '\u2083', 4: '\u2084', 5: '\u2085', 6: '\u2086', 7: '\u2087', 8: '\u2088', 9: '\u2089' }
    let isNum = Number(value);
    console.log(isNum);
    if (value == 'space') {
        createElement.value = `${existValue} `;
    }
    else if (isNum || isNum == 0 || value == 'P' || value == 'M' || value == 'R') {
        createElement.value = `${existValue}${superscript[value]}`;
        totalLength = `${existValue}${value}`.length;
    } else {
        if (existValue == '') {
            createElement.value = `${existValue}${value}`;
            totalLength = value.length;
        } else {
            createElement.value = `${existValue}, ${value}`;
            totalLength = `${existValue}, ${value}`.length;
        }
    }
    selectionStart = totalLength
    selectionEnd = totalLength
    createElement.focus();
}
const previous = () => {
    if (toLength - strButtonView > initialFromLength) {
        toLength = fromLength - 1;
        fromLength = toLength - strButtonView;
    } else {
        fromLength = initialFromLength;
    }
    createButton();
    createElement.focus();
};
const next = () => {
    if (fromLength + strButtonView < total) {
        fromLength = toLength + 1;
        toLength = fromLength + strButtonView;
    }
    createButton();
    createElement.focus();
}
createButton();
const isKeyboardShow = () => {
    if (isShow) {
        document.getElementById("keyboard").style.display = 'block';
        isShow = !isShow;
        document.getElementById("showHide").innerHTML = 'hide'
    } else {
        document.getElementById("keyboard").style.display = 'none';
        isShow = !isShow;
        document.getElementById("showHide").innerHTML = 'show';
    }
    createElement.focus();
}
isKeyboardShow()

const backSpace = () => {
    var removeText = '';
    let existValue = createElement.value;
    if ((selectionStart >= 0 ) && selectionStart === selectionEnd) {
        var valueArr = existValue.split('');
        console.log("valueArr",valueArr);
        valueArr.splice(selectionStart-1, 1);
        valueArr.filter(Boolean);
        removeText = valueArr.join('');

        if (selectionStart >= 0) {
            selectionStart = selectionStart - 1;
            selectionEnd = selectionEnd - 1
        }
    }
    else if (selectionStart < selectionEnd) {
        var valueArr = existValue.split('');
        valueArr.splice(selectionStart, selectionEnd - selectionStart);
        valueArr.filter(Boolean);
        removeText = valueArr.join('');
        selectionEnd = selectionStart;
    }
    console.log("selectionStart", selectionStart, "selectionEnd", selectionEnd, "Remaining Text", removeText);
    createElement.value = removeText;
    createElement.focus();
    createElement.selectionStart = createElement.selectionEnd = selectionStart;
}

createElement.addEventListener("click", () => {
    selectionStart = createElement.selectionStart;
    selectionEnd = createElement.selectionEnd;
    console.log("selectionStart", selectionStart, "selectionEnd", selectionEnd);

});

const reset=()=>{
    createElement.value = "";
    createElement.focus();
}