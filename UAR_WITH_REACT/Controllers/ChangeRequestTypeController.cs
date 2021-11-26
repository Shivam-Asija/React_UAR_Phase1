﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UAR_WITH_REACT.Models;

namespace UAR_WITH_REACT.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChangeRequestsTypeController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<TblChangeRequestType> Get()
        {
            using (var context = new UARAuditAppDbContext())
            {
                //Get all users
                return context.TblChangeRequestTypes.ToList();
            }
        }
    }
}
