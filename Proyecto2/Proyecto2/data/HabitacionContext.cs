using Proyecto2.models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Proyecto2.data
{
    public class HabitacionContext : DbContext
    {
        public HabitacionContext() : base("name=DatabaseContext")
        {

        }

        public DbSet<Habitacion> Habitaciones { get; set; }
    }
}