// Your code here
// // Your code here
// function createEmployeeRecord(array){
//   this.firstName = array[0]
//   this.familyName = array[1]
//   this.title = array[2]
//   this.payPerHour = array[3]
// }

function createEmployeeRecord(array){
    return new Object({
      firstName : array[0],
      familyName : array[1],
      title : array[2],
      payPerHour : array[3],
      timeInEvents : [],
      timeOutEvents : []
    })
  }
  
  function createEmployeeRecords(twoRows){
    let anArray = []
    twoRows.forEach(element => {
      anArray.push(createEmployeeRecord(element))
    });
    return anArray
  }
  
  function createTimeInEvent(param, timeIn){
    let upDatedR = timeIn.split(" ")
    
    param.timeInEvents.push(new Object({
      type : "TimeIn",
      date : upDatedR[0],
      hour : parseInt(upDatedR[1])
    }))
    return param
  }
  
  function createTimeOutEvent(param, timeOut){
    let upDatedR = timeOut.split(" ")
    
    param.timeOutEvents.push(new Object({
      type : "TimeOut",
      date : upDatedR[0],
      hour : parseInt(upDatedR[1])
    }))
    return param
  }
  
  let day = "Hello World".split(" ")
  console.log(day)
  
  // let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
  // let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400")
  // console.log(updatedBpRecord)
  // let newEvent = updatedBpRecord.timeInEvents[0]
  // console.log(newEvent.date)
  
  function hoursWorkedOnDate(param, param2){
    let hours = (param.timeOutEvents[0].hour - param.timeInEvents[0].hour) / 100
    return hours
  }
  
  function wagesEarnedOnDate(param, param2){
    let wages = hoursWorkedOnDate(param, param2) * param.payPerHour
    return wages
  }
  
  function allWagesFor(param){
    let i;
    let hours = 0
    for(i = 0; i < param.timeInEvents.length; i++){
      hours += (param.timeOutEvents[i].hour - param.timeInEvents[i].hour) / 100
    }
    return hours * param.payPerHour
  
  }
  
  // cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
  // // Earns 324
  // updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
  // updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
  // // Earns 54
  // updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
  // updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
  
  // console.log(allWagesFor(cRecord))
  
  // let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10])
  //         let sRecord = createEmployeeRecord(["Simba", "", "King", 100])
  
  //         let sTimeData = [
  //           ["2019-01-01 0900", "2019-01-01 1300"], // 4 * 100 = 400
  //           ["2019-01-02 1000", "2019-01-02 1300"]  // 3 * 100 = 300 ===> 700 total
  //         ]
  
  //         let rTimeData = [
  //           ["2019-01-11 0900", "2019-01-11 1300"], // 4 * 10 = 40
  //           ["2019-01-12 1000", "2019-01-12 1300"]  // 3 * 10 = 40 ===> 70 total ||=> 770
  //         ]
  
  //         sTimeData.forEach(function (d) {
  //           let [dIn, dOut] = d
  //           sRecord = createTimeInEvent(sRecord, dIn)
  //           sRecord = createTimeOutEvent(sRecord, dOut)
  //         })
  
  //         rTimeData.forEach(function (d, i) {
  //           let [dIn, dOut] = d
  //           rRecord = createTimeInEvent(rRecord, dIn)
  //           rRecord = createTimeOutEvent(rRecord, dOut)
  let employees = [sRecord, rRecord]
  
  function calculatePayroll(employees){
    let sum = 0
    for(let employee of employees){
      console.log(employee)
      sum += allWagesFor(employee)
    }
    return sum
  }
  
  console.log(calculatePayroll(employees))
  