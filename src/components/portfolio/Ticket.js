import React from 'react';

const Ticket = (props) =>{
  console.log(props.ticket);
  function compare(row,index){
    let condition = row.find(element => element.column === index);
    console.log(condition);
    return condition ? condition.number : false;
  }
  return(
    <div className='column'>
      {props.ticket.rows.map((row,index) =>
        <div key={index} className='flex'>
          {props.columns.map(column =>
            <div key={column} className={`ticket-cell centralizer ${compare(row,column) ? '' : 'empty-cell'}`}>
              {compare(row,column) ? compare(row,column) : ''}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Ticket;
