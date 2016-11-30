using Proyecto2.data;
using Proyecto2.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Proyecto2.services
{
    public class UsuarioService
    {
        private UsuarioContext context = new UsuarioContext();
        
        public List<Usuario> getUsuarios()
        {
            return context.Usuarios.ToList();
        }

    }
}