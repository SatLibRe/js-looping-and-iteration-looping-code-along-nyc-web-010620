// Code your solutions in this file

function writeCards(arr){
  const t_arr = []
  for(let i = 0; i < arr.length; i++){
    t_arr.push(`Thank you ${arr[i]}`)
  }
  return t_arr
}