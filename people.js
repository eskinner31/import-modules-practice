var people = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];

module.exports = {

  removeBadPeople: function(arr){
                  arr.forEach(function(element,index,arr){
                    if(element.name !== '' && element.name !== undefined){
                        console.log(arr[index]);
                        }
                      })
                    },

  sumValidAges: function(arr){
                  var sum = 0;
                  arr.forEach(function(element,index,arr){
                    if(element.age !== '' && element.age !== undefined && element.name !== undefined && element.name !==''){
                      sum = sum + arr[index].age;
                    }
                  })
                  return sum;
                },
  sumAllAges: function(arr){
                  var sum = 0;
                  arr.forEach(function(element,index,arr){
                    if(element.name !== undefined){
                      sum = sum + arr[index].age;
                    }
                  })
                  return sum;
                }
      }
