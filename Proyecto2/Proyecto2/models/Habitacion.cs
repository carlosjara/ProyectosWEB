using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Proyecto2.models
{
    [Table("habitacion")]
    public class Habitacion
    {
        [Key]
        public int Habitacion_id { get; set; }
        public string Tipo_Habitacion { get; set; }
        public int cupo { get; set; }

        public Habitacion() { }

        public Habitacion(int Habitacion_id, string Tipo_Habitacion, int cupo)
        {
            this.Habitacion_id = Habitacion_id;
            this.Tipo_Habitacion = Tipo_Habitacion;
            this.cupo = cupo;
        }

    }
}