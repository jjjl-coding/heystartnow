export function Card ({ item }) {
    return  <div>
        <div>{item.inputValues.map(inputValue => {
            return <div>{inputValue}</div>
        })}</div>
        <div>스트라이크 {item.result.strike}</div>
        <div>아웃 {item.result.out}</div>
        <div>볼 {item.result.ball}</div>
    </div>
}