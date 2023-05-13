const { User } = require("../API/User/user");

class difference{
   async distribution(user_Id,packageDetail){
    const user = await User.getProfile(user_Id);
    var sponsor = user.sponsor_Id;
    const plans = packageDetail;
    
   }
}