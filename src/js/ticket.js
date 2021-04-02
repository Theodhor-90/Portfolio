function makeTicket(){
  let initial = 1;
  let counter = 0;
  function makeColumns(){
    const columns = [];
    for(let a=0; a<9; a++){
      const column ={};
      column.column = a;
      columns.push(column);
      const pool =[];
      let range;
      if(a===0){
        range = 9;
      } else if(a===8){
        range = 11;
      } else range = 10;
      const final = initial + range;
      for(let b=initial; b<final; b++){
        pool.push(b);
      }
      initial = final;
      column.pool = pool;
      column.counter = 3;
      column.range = range;
      column.numbers =[];
      column.positions =[];
    }
    return columns;
  }
  function makeNumber(column){
    const index = Math.floor(Math.random() * column.range);
    const number = column.pool[index];
    column.counter--;
    column.range--;
    column.pool.splice(index,1);
    return number;
  }
  function assignPoistion(){
    let position;
    if(counter<5){
      position = 0;
    } else if(counter<10){
      position = 1;
    } else position = 2;
    counter++;
    return position;
  }
  function createIndexArray(){
    return [0,1,2,3,4,5,6,7,8];
  }
  const columns = makeColumns();
  let indexArray = createIndexArray();
  for(let a=0; a<9; a++){
    const index = Math.floor(Math.random() * indexArray.length);
    const number = makeNumber(columns[indexArray[index]]);
    const position = assignPoistion();
    columns[indexArray[index]].numbers.push(number);
    columns[indexArray[index]].positions.push(position);
    indexArray.splice(index,1);
  }
  indexArray = createIndexArray();

  let index;
  for(let a=0;a<6;a++){
    let validatorBoolean = true;
    while(validatorBoolean){
      index = Math.floor(Math.random() * indexArray.length);
      if(columns[indexArray[index]].counter>0){
        const number =makeNumber(columns[indexArray[index]]);
        const position = assignPoistion(); // (*1)
        if(!columns[indexArray[index]].positions.includes(position)){
          columns[indexArray[index]].numbers.push(number);
          columns[indexArray[index]].positions.push(position);
          validatorBoolean=!validatorBoolean;
        } else counter--;

      }
    }
  }
  const ticket ={};
  ticket.numbers =[];
  ticket.rows =[[],[],[]];
  columns.forEach(function(column){
    const columnIndex = columns.indexOf(column);
    column.numbers.sort((a,b) => a-b);
    column.positions.sort((a,b) => a-b);
    for(let a=0; a<column.numbers.length; a++){
      const number = {};
      number.number = column.numbers[a];
      number.position = column.positions[a];
      number.column = columnIndex;
      ticket.numbers.push(number);
      ticket.rows[column.positions[a]].push(number);
    }
  });
  return ticket;
}

export default makeTicket;
