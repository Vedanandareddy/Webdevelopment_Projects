// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 14, 14];

function doubleTrouble(arr) {
    let l = arr.length;
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            count++;
            continue
        }
        else {
            if (count == 0) {
                arr[i] *= 2;
            }
            else {
                let val = Math.floor(Math.random() * (count + 1));
                arr[i - val] = arr[i - val] * 2;
                count = 0
            }
        }

    }
    if (count == 0) {
        arr[l - 1] *= 2;
    }
    else {
        let val = Math.floor(Math.random() * (count + 1));
        arr[l - 1 - val] = arr[l - 1 - val] * 2;
        count = 0
    }

}


doubleTrouble(arr)
console.log(arr)

