import React from 'react'

const Filter = ({filter, setFliter, setSort}) => {
  return (
    <div className='filter'>
        <h2>Filtrar:</h2>
        <div className='fliter-options'>
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFliter (e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Inconpletas</option>
                </select>
            </div>
            <div>
        <p>Ordem Alfabética</p>
        <button onClick={()=> setSort("Asc")}>Asc</button>
        <button onClick={()=> setSort("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter