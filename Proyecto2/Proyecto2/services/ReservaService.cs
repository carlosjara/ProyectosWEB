using Proyecto2.data;
using Proyecto2.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Proyecto2.services
{
    public class ReservaService
    {
        private ReservaContext context = new ReservaContext();
        
        public List<Reserva> getReservas()
        {
            return context.Reservas.ToList();
        }

        public Reserva getById(int id)
        {
            return context.Reservas.Where(x => x.reserva_id == id).First();
        }

    }
}