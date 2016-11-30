using Nancy;
using Nancy.ModelBinding;
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
        private UsuarioService usuarioService = new UsuarioService();
        private HabitacionService habitacionService = new HabitacionService();

        public ReservaModule()
        {
            Get["/"] = _ => "Nada que ver aqui.";

            Get["/reservas"] = _ =>
            {
                return Response.AsJson<List<Reserva>>(reservaService.getReservas()).WithHeader("Access-Control-Allow-Origin", "*");
            };

            Get["/reservas/{id}"] = parameters =>
            {
                return Response.AsJson<Reserva>(reservaService.getById((int)parameters.id)).WithHeader("Access-Control-Allow-Origin", "*");
            };

            Get["/usuarios"] = _ =>
            {
                return Response.AsJson<List<Usuario>>(usuarioService.getUsuarios()).WithHeader("Access-Control-Allow-Origin", "*");
            };

            Get["/usuarios/{id}"] = parameters =>
            {
                return Response.AsJson<Usuario>(usuarioService.getById((int)parameters.id)).WithHeader("Access-Control-Allow-Origin", "*");
            };

            Get["/habitaciones"] = _ =>
            {
                return Response.AsJson<List<Habitacion>>(habitacionService.getHabitaciones()).WithHeader("Access-Control-Allow-Origin", "*");
            };

            Get["/habitaciones/{id}"] = parameters =>
            {
                return Response.AsJson<Habitacion>(habitacionService.getById((int)parameters.id)).WithHeader("Access-Control-Allow-Origin", "*");
            };

            Post["/reservas"] = parameters =>
            {
                var model = this.Bind<Reserva>();
                reservaService.insert(model);
                return HttpStatusCode.OK;
            };

            Get["/delete/{id}"] = parameters =>
            {
                reservaService.delete((int)parameters.id);
                return HttpStatusCode.OK;
            };
        }
    }
}