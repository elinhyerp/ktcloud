// unknown 타입의 매개변수를 받아, 숫자일 경우 제곱을 출력하고 문자열이면 길이를 출력하는 함수를 작성해보세요.
function printValue(value) {
    if (typeof value === 'number') {
        // 숫자일 경우 제곱을 출력
        console.log(value * value);
    }
    else if (typeof value === 'string') {
        // 문자열이면 길이를 출력
        console.log(value.length);
    }
}
// 외부 API로부터 unknown 타입의 값을 받아, 객체인지 확인한 뒤 속성 값을 출력하는 예제를 작성하세요.
function externalApi(data) {
    if (typeof data === 'object' && data !== null && 'name' in data) {
        console.log(data.name);
    }
}
function isProduct(value) {
    return (typeof value === 'object' &&
        value !== null &&
        'name' in value &&
        'price' in value);
}
console.log(printValue(10));
