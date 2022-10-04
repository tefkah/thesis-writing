import {useState} from 'react';

const [val, setVal] = useState(20)
<div>
			<svg viewBox="0 0 100 100">
				<circle cx="50%" cy="50%" r={Math.pow(val/10,3)}/>
			</svg>
			<input type="range" // id="volume" name="volume"
			    value={val}
			    onChange={e=>setVal(e.target.value)}
		        style={{width:"100%"}}
	        />
</div>






