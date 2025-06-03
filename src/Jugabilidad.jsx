import React from "react";
import { motion } from "framer-motion";

const mecanicas = [
  { icon: "🕹️", title: "Movimiento 3D básico", desc: "Controla la paloma en un entorno tridimensional con movimientos fluidos y precisos." },
  { icon: "💦", title: "Disparo de agua simple", desc: "Ataques directos con chorros de agua para eliminar oponentes." },
  { icon: "❤️‍🩹", title: "Sistema de salud y muerte", desc: "Manejo de vida, daños y eliminación cuando la salud llega a cero." },
  { icon: "🛡️", title: "Escudo de agua", desc: "Protección temporal contra ataques enemigos mediante escudos acuáticos." },
  { icon: "🗺️", title: "Mapa interactivo", desc: "Explora coberturas, zonas elevadas y puntos estratégicos para obtener ventaja." },
  { icon: "⚔️", title: "Partidas Deathmatch", desc: "Enfrentamientos intensos en modo todos contra todos hasta quedar el último." },
];

const Jugabilidad = () => {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        color: "white",
        fontFamily: "'Oswald', sans-serif",
        minHeight: "110vh",
        backgroundColor: "#0a0a0a",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      {/* Fondo Parallax */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          filter: "brightness(0.25)",
          zIndex: -1,
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "3.8rem",
            letterSpacing: "5px",
            marginBottom: "2rem",
            textTransform: "uppercase",
            textShadow: "0 0 12px rgba(255,255,255,0.7)",
          }}
        >
          Jugabilidad
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {mecanicas.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "15px",
                padding: "25px",
                boxShadow: "0 0 20px rgba(0,0,0,0.8)",
                textAlign: "left",
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                color: "#ddd",
              }}
            >
              {/* Aquí podrás añadir imagen en el futuro */}
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "15px",
                  userSelect: "none",
                  textAlign: "center",
                }}
                aria-label="icon"
              >
                {icon}
              </div>
              <h3
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                {title}
              </h3>
              <p style={{ fontWeight: "300", fontSize: "1.1rem", lineHeight: "1.5" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Público objetivo con imagen */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "15px",
            padding: "30px",
            boxShadow: "0 0 20px rgba(0,0,0,0.8)",
            fontWeight: "300",
            fontSize: "1.3rem",
            lineHeight: "1.8",
            color: "#ddd",
            display: "flex",
            alignItems: "center",
            gap: "30px",
            textAlign: "left",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={{ flex: "1 1 300px" }}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Público Objetivo:</h3>
            <p>
              Dirigido a un público joven debido a ser un shooter que muestra elementos
              de nuestra cultura en un formato más divertido y que sea más jugado.
            </p>
          </div>

          <div style={{ flex: "1 1 300px", textAlign: "center" }}>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
              alt="Público joven jugando videojuego"
              style={{
                maxWidth: "100%",
                borderRadius: "15px",
                boxShadow: "0 0 15px rgba(0,0,0,0.6)",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Jugabilidad;
