import React from 'react';

function testFP() {
	const obj = [
			{
				"name": "test",
				"description": "fdsafdf",
			},
			{
				"name": "test1",
				"description": "fdlkasjfskld",
			},
			{
				"name": "test2",
				"description": "r4qfwefjrig",
			}
		]
    
	const items = obj.map(x => {
		return (
			<div>
				<h4 style={{color:"white"}}>{x.name}</h4>
				<h4 style={{color:"white"}}>{x.description}</h4>
			</div>
		)
	})
	
return <div>{items}</div>
}

export default testFP;