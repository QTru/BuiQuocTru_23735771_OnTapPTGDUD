import { useState, useEffect, useReducer, useRef, useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBlock from './components/ColorBlock.jsx'
import ColorButton from './components/ColorButton.jsx'
import Counter from './components/Counter.jsx'

function App() {
  // // Hook useState
  // const [color, setColor] = useState('red')
  
  // // Hook useEffect
  // const [count, setCount] = useState(0)
  // // setCount được gọi lại mỗi 1s và cộng count lên 1 giá trị
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1)
  //   }, 1000)
  // })

  // // Hook useReducer
  // const [state, dispatch] = useReducer((state, action) => {
  //   switch (action.type) {
  //     case 'increment':
  //       return { count: state.count + 1 }
  //     case 'decrement':
  //       return { count: state.count - 1 }
  //     case 'reset':
  //       return { count: 0 }
  //     default:
  //       return state
  //   }
  // }, { count: 0 })

  // // Hook useRef
  // const inputRef = useRef(null)

  // // Hook useMemo
  // const [number, setNumber] = useState(5)
  // const expensiveCalculation = useMemo(() => {
  //   console.log('Calculating...')
  //   return number * 2
  // }, [number])

  // // Hook useCallback
  // const [count, setCount] = useState(0)
  // const increment = useCallback(() => {
  //   console.log('Callback created')
  //   setCount(prev => prev + 1)
  // }, [])

  return (
    <>
      {/* Thay đổi màu sắc block khi mỗi button được click
      Màu sắc dựa vào thuộc tính color
      <ColorBlock color={color}>{color}</ColorBlock>
      Khi button được click thì biến color được set giá trị tương đương giá trị truyền vào setColor
      <ColorButton setColor={() => setColor('red')}>red</ColorButton>
      <ColorButton setColor={() => setColor('green')}>green</ColorButton>
      <ColorButton setColor={() => setColor('blue')}>blue</ColorButton> */}

      {/* Hiển thị số đếm
      <Counter>{count}</Counter> */}

      {/* Hiển thị count
      <p>Count: {state.count}</p>
      Mỗi lần click sẽ gọi dispatch và thay đổi state.count
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button> */}

      {/* Sử dụng useRef để tham chiếu đến input element
      <h2>useRef Example</h2>
      <input ref={inputRef} type="text" placeholder="Enter text" />
      <button onClick={ () => { inputRef.current.focus(); } }>Focus Input</button> */}

        {/* Sử dụng useMemo để cache kết quả tính toán
        <h2>useMemo Example</h2>
        <p>Number: {number}</p>
        <p>Double: {expensiveCalculation}</p>
        <button onClick={() => setNumber(number + 1)}>Increment</button> */}

        {/* Sử dụng useCallback để memoize function
        <h2>useCallback Example</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button> */}
    </>
  )
}

export default App
