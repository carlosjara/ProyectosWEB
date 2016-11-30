using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Proyecto2.models
{
    [Table("usuarios")]
    public class Usuario
    {
        [Key]
        public int usuario_id { get; set; }
        public string name { get; set; }
        public string direccion { get; set; }
        public string telefono { get; set; }

        public Usuario() { }

        public Usuario(int usuario_id, string name, string direccion, string telefono)
        {
            this.usuario_id = usuario_id;
            this.name = name;
            this.direccion = direccion;
            this.telefono = telefono;
        }

    }
}