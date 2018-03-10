using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SteelThread
{
    [Route("api/[controller]")]
    public class UserController : Controller
  {

    
    private UserDBContext db = new UserDBContext();

    // GET: /Movies/
    public ActionResult Index()
    {
      return View(db.User.ToList());
    }

      
        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
