function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; 
}

const array = [5, 3, 7, 2, 8];
const target = 7;
const result = linearSearch(array, target);

if (result !== -1) {
    console.log(`عنصر ${target} در اندیس ${result} پیدا شد.`);
} else {
    console.log(`عنصر ${target} در آرایه موجود نیست.`);
}