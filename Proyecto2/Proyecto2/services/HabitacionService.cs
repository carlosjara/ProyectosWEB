using Proyecto2.data;
using Proyecto2.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Proyecto2.services
{
    public class HabitacionService
    {
        private HabitacionContext context = new HabitacionContext();

        public List<Habitacion> getHabitaciones()
        {
            return context.Habitaciones.ToList();
        }

        public Habitacion getById(int id)
        {
            return context.Habitaciones.Where(x => x.Habitacion_id == id).First();
        }
    }
}