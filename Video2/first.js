// =================================== WRITING A FILE ========================================

                                
const fs = require('fs')                                  //REQUIRE helps organise code into reusable modules

fs.writeFile("output.txt","Writing File", (err)=>{        //THIS MAKE A output.txt FILE IN THE CURRENT FOLDER YOU ARE WORKING IN 
  
  if(err){
    console.log("ERROR Occured");
  }
  
  else{
     console.log(`file written succesfully`)
  
  }
});
