using Nancy;
using Proyecto2.models;
using Proyecto2.services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Proyecto2
{
    public class ReservaModule : Nancy.NancyModule
    {
        private ReservaService reservaService = new ReservaService();

        public ReservaModule()
        {
            Get["/"] = _ => "Nada que ver aqui.";
            Get["/reservas"] = _ =>
            {
                return Response.AsJson<List<Reserva>>(reservaService.getReservas()).WithHeader("Access-Control-Allow-Origin", "*");
            };
        }
    }
}