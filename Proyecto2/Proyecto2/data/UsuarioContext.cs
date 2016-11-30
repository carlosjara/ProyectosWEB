using Proyecto2.models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Proyecto2.data
{
    public class UsuarioContext : DbContext
    {
        public UsuarioContext() : base("name=DatabaseContext")
        {

        }

        public DbSet<Usuario> Usuarios { get; set; }
    }
}