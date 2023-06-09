const mongoose = require('mongoose')
// const validator = require('validator')


const user_wallet = new mongoose.Schema({
    user_Id:{
        type: String,
        required:true
    },
    main_wallet:{
       name:{
        type:String,
        default:"Main Wallet"
       },
       wallet_type:{
        type:String,
        default:"wallet"
       },
       wallet_status:{
        type:Number,
        default:1
       },
       value:{
        type:Number,
        default:0
       },
       updated_on:{
         type:String,
         default:null
       }
    },
    withdrawable:{
        name:{
         type:String,
         default:"withdrawable Amount"
        },
        wallet_type:{
         type:String,
         default:"wallet"
        },
        wallet_status:{
         type:Number,
         default:1
        },
        value:{
         type:Number,
         default:0
        },
        updated_on:{
         type:String,
         default:null
       }
     },
     total_withdrawal:{
        name:{
         type:String,
         default:"Total Withdrawal"
        },
        wallet_type:{
         type:String,
         default:"wallet"
        },
        wallet_status:{
         type:Number,
         default:1
        },
        value:{
         type:Number,
         default:0
        },
        updated_on:{
         type:String,
         default:null
       }
     },
     total_payout:{
        name:{
         type:String,
         default:"Total Payout"
        },
        wallet_type:{
         type:String,
         default:"wallet"
        },
        wallet_status:{
         type:Number,
         default:1
        },
        value:{
         type:Number,
         default:0
        },
        updated_on:{
         type:String,
         default:null
       }
     },
    fund_wallet:{
        name:{
         type:String,
         default:"Fund Wallet"
        },
        wallet_type:{
         type:String,
         default:"wallet"
        },
        wallet_status:{
         type:Number,
         default:1
        },
        value:{
         type:Number,
         default:0
        },
        updated_on:{
         type:String,
         default:null
       }
     },
     self_investment:{
      name:{
       type:String,
       default:" My Investment"
      },
      wallet_type:{
       type:String,
       default:"Investment"
      },
      wallet_status:{
       type:Number,
       default:1
      },
      value:{
       type:Number,
       default:0
      },
      updated_on:{
       type:String,
       default:null
     }
   },
     level_income:{
        name:{
         type:String,
         default:"Level Income"
        },
        wallet_type:{
         type:String,
         default:"income"
        },
        count_in_main_wallet:{
         type:Number,
         default:1
        },
        wallet_status:{
         type:Number,
         default:1
        },
        value:{
         type:Number,
         default:0
        },
        updated_on:{
         type:String,
         default:null
       }
     },
     direct_income:{
        name:{
         type:String,
         default:"Direct Income"
        },
        wallet_type:{
         type:String,
         default:"income"
        },
        count_in_main_wallet:{
         type:Number,
         default:1
        },
        wallet_status:{
         type:Number,
         default:1
        },
        value:{
         type:Number,
         default:0
        },
        updated_on:{
         type:String,
         default:null
       }
     },
     binary_income:{
        name:{
         type:String,
         default:"Binary Income"
        },
        wallet_type:{
         type:String,
         default:"income"
        },
        count_in_main_wallet:{
         type:Number,
         default:1
        },
        wallet_status:{
         type:Number,
         default:0
        },
        value:{
         type:Number,
         default:0
        },
        updated_on:{
         type:String,
         default:null
       }
     },
     single_leg_income:{
        name:{
         type:String,
         default:"Single Leg Income"
        },
        wallet_type:{
         type:String,
         default:"income"
        },
        count_in_main_wallet:{
         type:Number,
         default:1
        },
        wallet_status:{
         type:Number,
         default:0
        },
        value:{
         type:Number,
         default:0
        },
        updated_on:{
         type:String,
         default:null
       }
     },
     matrix_income:{
        name:{
         type:String,
         default:"Matrix Income"
        },
        wallet_type:{
         type:String,
         default:"income"
        },
        count_in_main_wallet:{
         type:Number,
         default:1
        },
        wallet_status:{
         type:Number,
         default:1
        },
        value:{
         type:Number,
         default:0
        },
        updated_on:{
         type:String,
         default:null
       }
     },
     roi_income:{
        name:{
         type:String,
         default:"Roi Income"
        },
        wallet_type:{
         type:String,
         default:"income"
        },
        count_in_main_wallet:{
         type:Number,
         default:1
        },
        wallet_status:{
         type:Number,
         default:1
        },
        value:{
         type:Number,
         default:0
        },
        updated_on:{
         type:String,
         default:null
       }
     },
     roi_level_income:{
        name:{
         type:String,
         default:"Roi Level Income"
        },
        wallet_type:{
         type:String,
         default:"income"
        },
        count_in_main_wallet:{
         type:Number,
         default:1
        },
        wallet_status:{
         type:Number,
         default:1
        },
        value:{
         type:Number,
         default:0
        },
        updated_on:{
         type:String,
         default:null
       }
     },
     active_direct:{
      name:{
         type:String,
         default:"Active direct"
        },
        wallet_type:{
         type:String,
         default:"Team"
        },
        wallet_status:{
         type:Number,
         default:1
        },
        value:{
         type:Number,
         default:0
        },
        updated_on:{
         type:String,
         default:null
       }
     }
})
const userWallet = new mongoose.model('user_wallet', user_wallet)
module.exports = userWallet;