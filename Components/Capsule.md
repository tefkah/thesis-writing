---
defines-react-components: true
---
# Capsule
```jsx:component:Capsule

const [width, setWidth] = useState(0)
const max = 30
const factor = 100
const [radius,setRadius] = useState(1)

const cylinderSurface = 2*Math.PI * (width +1) * factor * radius + 2*Math.PI * Math.pow(radius,2)
const cylinderVolume = Math.PI * Math.pow(radius, 2) * (width + 1) * factor
const capsuleSurface = 2*Math.PI * width * factor * radius + 4*Math.PI*Math.pow(radius,2)
const capsuleVolume = Math.PI * Math.pow(radius, 2) * (width) * factor + 4*Math.PI*Math.pow(radius,3)/3


return (
<div style={{width: '100%', display: 'flex', flexDirection: 'column',gap:'2rem'}}>
	<div style={{display: 'flex', gap: '2rem', flexDirection: 'column'}}>
		<div>
			<p>
			Surface = 2π * <span style={{color:'red'}}>{factor * (width + 1)}</span>  = {cylinderSurface} 
			</p>
			<p>
			Volume = 
			</p>
			<div style={{
						marginLeft: '.5rem',
						height:`${radius}rem`,
						width: `calc(1rem + ${((width/factor)/max)*100}%)`,
						backgroundColor: 'red',
						}}
			/>
		</div>
		<div>
			<p>
			Surface = 2π * <span style={{color:'red'}}>{width * factor}</span> + 4π = {capsuleSurface}
			</p>
			<div style={{display: 'flex'}}>
				<svg viewBox="0 0 1 2" height={`${radius}rem`} fill="red">
					<circle cy="50%" cx="100%" r="1"/>
				</svg>
				<div style={{
						height:`${radius}rem`,
						width: `${((width/factor)/max)*100}%`,
						backgroundColor: 'red',
						}}
			/>
				<svg viewBox="0 0 1 2" height={`${radius}rem`} fill="red">
					<circle cy="50%" r="1"/>
				</svg>
			</div>
		</div>
	</div>
	<div style={{width: '100%'}}>
	<div>
	<label>Width</label>
		<input type="range" value={width} onChange={(e)=>setWidth(parseInt(e.target.value))} min="0" max={`${max * factor}`} style={{width:'100%'}}/>
		</div>
		<div>
		<label>Radius</label>
		<input type="range" value={radius} onChange={(e)=>setRadius(parseInt(e.target.value))} min="1" max={`${10}`} style={{width:'100%'}}/>
		</div>
	</div>
</div>
	)
```
some text

<Capsule></Capsule>






shatasht
