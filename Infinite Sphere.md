---
defines-react-components: true
---
# Infinite Sphere
```jsx:component:Slider
const [val, setVal] = useState(20)
//return <input type="range" min={1} max={10} value={5}/>
// return <input type="range" value={val} onChange={(e)=>setVal(e.input.value)} min={1} max={10}/>
return  <div>
			<svg viewBox="0 0 100 100">
				<circle cx="50%" cy="50%" r={Math.pow(val/10,3)}/>
			</svg>
			<input type="range" // id="volume" name="volume"
			    value={val}
			    onChange={e=>setVal(e.target.value)}
		        style={{width:"100%"}}
	        />
	    </div>
```



<div><Slider/></div>



