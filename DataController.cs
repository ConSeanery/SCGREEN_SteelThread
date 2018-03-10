using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SteelThread;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SteelThread
{


  

  public class User
  {
    //public string DbContext = "DESKTOP-B13M0UU'\'SQLEXPRESS;Initial Catalog = SteelThreadData; Integrated Security = True";
    public int UserID { get; set; }
    public string UserName { get; set; }
    public string UserPassword { get; set; }
  }

  public class UserDBContext : DbContext
  {
    public DbSet<User> User { get; set; }
  }





  [Route("api/[controller]")]
  public class ValuesController : Controller
  {


    UserDBContext db = new UserDBContext();

    // GET: api/<controller>
    [HttpGet]
    public IEnumerable<string> Get()
    {
      //Connect to the data source, read the data, then return the first 3 values
      var connection = new SqlConnection();
      connection.ConnectionString =
          @"Data Source=DESKTOP-B13M0UU\SQLEXPRESS;Initial Catalog=SteelThreadData;Integrated Security=True";
      connection.Open();
      var transaction = connection.BeginTransaction();
      SqlDataReader reader = new SqlCommand("select UserName from Users", connection, transaction).ExecuteReader();
      //transaction.Commit();
      string[] returnValue = new string[3];


      if (reader.HasRows)
      {
        while (reader.Read())
        {
          int i = 0;
          returnValue[i] = reader[0].ToString();
          i++;
        }

      }

      connection.Close();
      return returnValue;

    }


    [HttpPost]

    public ContentResult PostDataResponse()
    {
      return Content("First name: " + Request.Form["UserName"]);
    }

    /*
    public void Post([FromBody]string UserName, string UserPassword)
    {
      //Connect to the data source, read the data, then return the first 3 values

      var connection = new SqlConnection();
      connection.ConnectionString =
          @"Data Source=DESKTOP-B13M0UU\SQLEXPRESS;Initial Catalog=SteelThreadData;Integrated Security=True";
      connection.Open();
      var transaction = connection.BeginTransaction();

      SqlDataReader reader = new SqlCommand("Insert Into Users(UserName, UserPassword) Values ('Value1', 'value2')" , connection, transaction).ExecuteReader();
     
      transaction.Commit();
      connection.Close();
      

    }
    */
  }

}



  
  
