// const { Person,Memo } = require('../models');

// NOTE: Create
// Person.create({ 
//   name:`a${Math.floor(Math.random()*1000)}`,
//   age:25
// }).then(function(user) {
//   // you can now access the newly created user
//   console.log('success', user.toJSON());
// })
// .catch(function(err) {
//   // print the error details
//   console.log(err,'error');
// });

// NOTE: Delete
// Person.destroy({                
//   where: { id:4 }
//  });

// NOTE: Update
// Person.update({                 
//   name: "Logan",
// }, {
//   where: { id:3 }
// });

// NOTE: Select All
// Memo.findAll({where:{title:'zzz'}}).then((memo)=>{ 
//   memo.map(list=>{
//     console.log(list.dataValues);
//   });
//   console.log('success');
//   // console.log('success',memo.dataValues);
// }).catch((err)=>{
//   console.log(err,'error');
// })
