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
    public class BatchController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<TblBatch> Get()
        {
            using (var context = new UARAuditAppDbContext())
            {
                //Get all users
                return context.TblBatches.ToList();
            }
        }
    }
}