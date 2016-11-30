using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Proyecto2.models
{
    [Table("reserva")]
    public class Reserva
    {
        [Key]
        public int reserva_id { get; set; }
        public string estado_reserva { get; set; }
        public string fecha_inicio { get; set; }
        public string fecha_fin { get; set; }
        public int habitacion { get; set; }
        public int usuario { get; set; }

        public Reserva () { }

        public Reserva(int reserva_id, string estado_reserva, string fecha_inicio, string fecha_fin, int habitacion, int usuario)
        {
            this.reserva_id = reserva_id;
            this.estado_reserva = estado_reserva;
            this.fecha_inicio = fecha_inicio;
            this.fecha_fin = fecha_fin;
            this.habitacion = habitacion;
            this.usuario = usuario;
        }

    }
}