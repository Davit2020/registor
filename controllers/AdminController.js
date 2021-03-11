

class AdminController{
    AdminView(req,res){
        res.render("admin")
    }

}

module.exports=new AdminController()