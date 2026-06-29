# Guía de construcción — Landing Page Alturion
> Versión 2.0 · Junio 2026  
> Documento de referencia para diseñador y desarrollador front-end  
> Actualizado con: mapa interactivo D3 + GeoJSON, estética dinámica premium, hero glassmorphism

---

## 0. Filosofía de la página

**Una sola regla antes de empezar:** cada sección debe ganarse su lugar. Si no convierte, no informa o no genera confianza, se elimina. No hay espacio para relleno.

La página tiene un solo trabajo: lograr que el visitante (contratante, operador, entidad pública) entienda en menos de 10 segundos qué hace Alturion, confíe en su experiencia, y quiera contactar.

**Referencia de estilo:** hero dinámico con overlays, grid lines, glow central y glassmorphism — sobrio, premium, futurista. No sci-fi, no recargado.

---

## 1. Arquitectura de la página (orden de secciones)

```
1.  Nav bar (sticky)
2.  Hero — headline + CTAs + diferenciadores + certificaciones en glass card
3.  Barra de stats (4 cifras clave)
4.  Cuatro verticales de servicio (qué hacemos)
5.  Tres pilares (cómo lo hacemos)
6.  Proyectos ejecutados — Mapa interactivo
7.  Formulario de contacto
8.  Footer
```

**Nota de flujo narrativo:**
```
¿Qué hacen y por qué ellos? → Hero + Stats
¿Cumplen normas?            → Glass card del Hero (RITEL · RETIE · SG-SST)
¿Qué servicios ofrecen?     → 4 Verticales
¿Cómo trabajan?             → 3 Pilares
¿Lo han demostrado?         → Mapa interactivo con proyectos
¿Hablamos?                  → Formulario
```

> **Decisiones de diseño:**
> - Proyectos Destacados eliminado como sección independiente — el mapa lo cubre.
> - Certificaciones eliminadas como sección independiente — RITEL, RETIE y SG-SST viven en la glass card del Hero, visibles desde el primer segundo.
> - Si Alturion obtiene certificaciones formales (ISO 9001, ISO 45001, etc.) en el futuro, se puede reactivar como sección propia.

**Elemento flotante permanente:** botón WhatsApp visible en toda la página.

---

## 2. Nav bar

### Comportamiento
- Sticky (`position: sticky; top: 0`).
- Al cargar: fondo `rgba(10,22,40,0.85)` con `backdrop-filter: blur(12px)`.
- Borde inferior: `1px solid rgba(201,168,76,0.15)`.
- En mobile: hamburger icon → menú desplegable full-width.

### Contenido
```
Logo ALTURION | Servicios · Proyectos · Certificaciones · Nosotros | [Contáctenos]
```

- El ítem `Contáctenos` va como botón con borde dorado `#C9A84C`.
- Links en mayúsculas, `font-size: 12px`, `letter-spacing: 2px`.
- Hover de links: color dorado `#C9A84C`.

---

## 3. Hero

### Objetivo
Que en 5 segundos el visitante sepa: quiénes son, qué hacen, y qué debe hacer.

### Elementos de diseño (implementar en este orden en el DOM)
1. **Fondo base:** color sólido `#0a1628` + `radial-gradient` desde `#112248` centrado a la derecha.
2. **Grid lines verticales:** 3 líneas verticales en 25%, 50% y 75% del ancho. Color `rgba(255,255,255,0.04)`. Solo visibles en desktop.
3. **Glow central:** elipse SVG o `div` con `radial-gradient` dorado muy sutil (`rgba(201,168,76,0.08)`) centrado en la parte superior. No usar `filter: blur()` — penaliza rendimiento; usar `radial-gradient` puro.
4. **Tarjeta glass (liquid glass card):**
   - Tamaño: `inline-block`, padding `12px 20px`.
   - `background: rgba(255,255,255,0.03)`.
   - `border: 1px solid rgba(201,168,76,0.3)`.
   - `backdrop-filter: blur(4px)`.
   - `border-radius: 8px`.
   - Contenido: tag `[ 2026 ] · Ingeniería Integral` + línea `RITEL · RETIE · SG-SST · Cobertura Nacional`.
   - **Esta tarjeta reemplaza la sección de Certificaciones.** Es el único lugar donde se mencionan las normas — visible desde el primer segundo, sin necesitar scroll.
5. **Eyebrow:** `Tecnología · Telecomunicaciones · Energía · Infraestructura` — 11px, bold, dorado, uppercase, letter-spacing 3px.
6. **Headline principal:**
   ```
   Ingeniería
   que CONECTA
   el país.
   ```
   - Fuente: Barlow Semi Condensed 700, clamp(36px, 5vw, 62px).
   - Uppercase. La palabra "conecta" o el punto final en dorado `#C9A84C`.
7. **Subhead:** 15px, `rgba(255,255,255,0.6)`, max-width 480px, line-height 1.7.
8. **CTAs:**
   - Primario: `Ver proyectos` → ancla a sección de mapa/proyectos. Fondo dorado, texto azul oscuro.
   - Secundario: `Contáctenos →` → ancla al formulario. Borde blanco semitransparente.

### Copy definitivo
- **Headline:** `Ingeniería que conecta el país.`
- **Subhead:** `Diseñamos, construimos e integramos infraestructura de alto impacto. Del diseño a la operación, con rigor técnico y cobertura en más de 20 departamentos.`

### Diferenciadores "Por qué Alturion" — dentro del Hero

Van como una fila de 3 ítems debajo de los CTAs, separados por una línea horizontal sutil (`1px solid rgba(255,255,255,0.08)`). Formato: ícono pequeño + texto corto en una línea. No son bullets — son datos de confianza rápida.

```
✓  Ciclo completo propio — del diseño a la operación, sin intermediarios
✓  Respaldados por 17 años de operación de SINERCOM S.A.S.
✓  Proyectos ejecutados en más de 20 departamentos de Colombia
```

**Especificaciones de diseño:**
- Separador superior: `1px solid rgba(255,255,255,0.08)`, margen top `28px`.
- Ícono: check dorado `#C9A84C`, 14px.
- Texto: Inter 13px, `rgba(255,255,255,0.5)`, sin bold.
- Los 3 ítems en fila horizontal en desktop, stack en mobile.
- Deben sentirse como datos de respaldo, no como texto principal — peso visual menor al subhead.

### Mobile
- Headline se parte en máximo 2–3 líneas.
- CTAs apilados verticalmente.
- Grid lines: ocultas.
- Glass card: ancho completo.
- Diferenciadores: stack vertical, cada ítem en su propia línea.

---

## 4. Barra de stats

Franja inmediatamente debajo del hero. Fondo: `rgba(201,168,76,0.07)`, bordes superior e inferior dorados al 15% de opacidad.

| Cifra | Descripción |
|-------|-------------|
| +17 años | De experiencia acumulada del equipo |
| $18.000 M | En proyectos desarrollados |
| +20 departamentos | Con cobertura operativa en Colombia |
| +40 proyectos | De referencia ejecutados |

- Números: Barlow Semi Condensed 700, 32px, dorado.
- Labels: 11px, uppercase, letter-spacing 1px, `rgba(255,255,255,0.45)`.
- Separadores verticales entre cada stat: `1px solid rgba(255,255,255,0.08)`.
- En mobile: grid 2×2.

---

## 5. Cuatro verticales de servicio

### Objetivo
Que el visitante identifique en segundos si Alturion resuelve su necesidad específica, y pueda explorar el detalle de cada vertical sin salir de la página.

### Cabecera de sección
- **Eyebrow:** `Lo que hacemos`
- **Título:** `Cuatro verticales / un mismo sistema`
- **Descripción:** `Estructuramos nuestra oferta en cuatro verticales integradas que permiten desarrollar proyectos de ingeniería de principio a fin.`

### Las cuatro verticales — contenido completo

**01 · Infraestructura**
Descripción corta: *La base física de todo proyecto. Obras civiles especializadas para el despliegue de redes con capacidad para operar en todo tipo de terreno.*
Tags: Obra civil · Canalización · SPT · Zanjas y ductos

Servicios detallados (panel expandible):
- Obra civil especializada en terrenos de alta complejidad
- Canalización subterránea y aérea para redes
- Cajas de inspección y cámaras de empalme
- Sistemas de puesta a tierra (SPT)
- Mampostería y acabados técnicos
- Excavación y conformación de zanjas
- Pedestales y estructuras de soporte
- Adecuación de cuartos técnicos
- Andenes, urbanismo y obra complementaria

**02 · Energía**
Descripción corta: *Diseño, construcción y operación de sistemas eléctricos que garantizan suministro confiable y eficiente, en cumplimiento de la normativa nacional.*
Tags: Subestaciones · Redes B.T / M.T · Energía solar · RETIE

Servicios detallados:
- Subestaciones eléctricas hasta 800 KVA
- Redes eléctricas de baja tensión (B.T)
- Redes eléctricas de media tensión (M.T)
- Plantas solares fotovoltaicas on-grid y off-grid
- Plantas solares flotantes
- Caja combinadora e inversores
- Transformadores y medidores
- Iluminación y sistemas DALI
- Eficiencia energética y puesta en marcha

**03 · Telecomunicaciones**
Descripción corta: *Despliegue e integración de redes que conectan ciudades, empresas y territorios. Desde la fibra óptica hasta los sistemas de videovigilancia urbana.*
Tags: Fibra óptica · CCTV urbano · Cableado estructurado · RITEL

Servicios detallados:
- Tendido e instalación de fibra óptica
- Empalmería y certificación de redes
- Implementación de sistemas CCTV urbano
- Cableado estructurado certificado
- Postes y estructuras para despliegue de redes
- Sistemas de videovigilancia LPR
- Radioenlaces y microondas
- Infraestructura para BTS y sitios 5G
- Cumplimiento RITEL en todas las instalaciones

**04 · Tecnología**
Descripción corta: *Integración tecnológica para entornos inteligentes, automatización industrial y gestión remota de infraestructura esencial.*
Tags: Integración 5G · Semaforización · Sistemas DALI · LPR / SCADA

Servicios detallados:
- Integración de redes 5G y conectividad avanzada
- Semaforización y control de movilidad urbana (AUCE)
- Sistemas de iluminación inteligente DALI
- Automatización industrial y SCADA
- Gestión remota de infraestructura esencial
- Sistemas de control de acceso
- Configuración de routers, switches y equipos activos
- Cámaras LPR y analítica de video
- Integración de UPS, sensores y equipos de respaldo

### Servicios Profesionales (capa transversal)

Franja diferenciada debajo del grid de 4 verticales. No es una quinta tarjeta — es una banda que abarca todo el ancho, comunicando que estos servicios acompañan a todas las verticales.

Servicios incluidos:
- Diseños de ingeniería
- Interventoría técnica
- Interventoría administrativa
- Consultoría especializada
- Auditoría técnica
- Evaluación financiera de proyectos

### Diseño

**Tarjetas (grid 2×2 en desktop, stack en mobile):**
- Fondo: `rgba(255,255,255,0.03)`
- Borde: `1px solid rgba(255,255,255,0.07)`
- Borde izquierdo activo: `3px solid #C9A84C` (solo visible en hover y estado activo)
- Border-radius: `12px`
- Número de vertical: Barlow Semi Condensed 700, 52px, `rgba(201,168,76,0.15)` en reposo → `rgba(201,168,76,0.35)` en hover/activo
- Ícono: cuadrado 44×44px, fondo `rgba(201,168,76,0.08)`, borde dorado sutil
- Hover: `translateY(-4px)`, fondo `rgba(201,168,76,0.04)`, borde `rgba(201,168,76,0.3)`

**Panel de detalle expandible:**
- Se despliega debajo del grid al hacer clic en una tarjeta
- Solo una tarjeta activa a la vez — clic en la misma cierra el panel
- Animación: `fadeIn + translateY(8px → 0)` en 200ms
- Grid interno: 3 columnas en desktop, 1 en mobile
- Cada ítem: fondo `rgba(255,255,255,0.03)`, punto dorado + texto 12px

**Banda de Servicios Profesionales:**
- Fondo: `linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))`
- Borde: `1px solid rgba(201,168,76,0.2)`
- Layout: ícono + título a la izquierda | línea divisoria | chips de servicios a la derecha
- En mobile: stack vertical, sin línea divisoria

---

## 6. Proyectos ejecutados — Mapa interactivo

### Por qué D3 + GeoJSON (y no paths manuales)

El mapa debe construirse con **D3.js + GeoJSON oficial de Colombia**, no con paths SVG dibujados a mano. Las razones:

- **Formas exactas:** el GeoJSON del repo `caticoa3/colombia_mapa` contiene los 33 departamentos con polígonos oficiales. Los paths manuales son aproximaciones que deforman departamentos pequeños (Quindío, Atlántico, San Andrés).
- **Proyección real:** `d3.geoMercator().fitSize()` ajusta automáticamente el mapa al contenedor sin distorsión.
- **Mantenibilidad:** agregar un nuevo departamento o proyecto es editar el archivo de datos, no tocar SVG.
- **Escalado responsive:** `fitSize()` recalcula la proyección al cambiar el tamaño del contenedor.

### Arquitectura recomendada

```
colombia.geo.json ──→ d3.geoMercator().fitSize() ──→ d3.geoPath() ──→ <path> × 33 dptos
                                                              │
departmentProjects.js ──────────────────────────────→ ¿tiene proyectos? ──→ color activo
                                                              │
                                                         click/hover ──→ ProjectPanel
```

### Fuente de datos geográficos

- **Repositorio:** `https://github.com/caticoa3/colombia_mapa`
- **Archivo:** `colombia.geo.json`
- **Propiedad clave:** `DPTO_CNMBR` — nombre del departamento en mayúsculas (ej: `"ANTIOQUIA"`, `"CÓRDOBA"`).
- Descargar el archivo, alojarlo localmente en `/src/data/colombia.geo.json`. No depender de CDN externo para datos críticos.

### Archivo de proyectos por departamento

Crear `/src/data/departmentProjects.js`. Las keys deben coincidir **exactamente** con `DPTO_CNMBR` del GeoJSON.

```javascript
// departmentProjects.js
// IMPORTANTE: las keys deben coincidir exactamente con DPTO_CNMBR del GeoJSON.
// Verificar con: console.log(features.map(f => f.properties.DPTO_CNMBR))
// Toda la información proviene del Brochure Corporativo Alturion 2026.
// NO agregar proyectos, cifras o departamentos sin fuente verificada.

export const departmentProjects = {

  "BOGOTÁ": {
    name: "Bogotá D.C.",
    projects: [
      {
        title: "Sistemas de Control de Acceso · Aeropuerto El Dorado",
        year: "2012–2013",
        category: "Tecnología",
        metrics: "+1.100 puntos · +5 Km F.O · +220 controles",
        image: null
      },
      {
        title: "Subestación Eléctrica 800 KVA",
        year: "2017–2018",
        category: "Energía",
        metrics: "+50 m² cuarto técnico · +220 m² andén · 13 cajas",
        image: null
      },
      {
        title: "AUCE, Semaforización y Cámaras Inteligentes",
        year: "2020–2021",
        category: "Tecnología",
        metrics: "Sistema integrado de movilidad urbana inteligente",
        image: null
      }
    ]
  },

  "ANTIOQUIA": {
    name: "Antioquia",
    projects: [
      {
        title: "Obra Civil para Proyecto de Cámaras LPR",
        year: "2018",
        category: "Infraestructura",
        metrics: "Infraestructura civil para sistema de videovigilancia",
        image: null
      },
      {
        title: "Iluminación y Sistema DALI · Túnel de Occidente",
        year: "2023",
        category: "Energía",
        metrics: "Vía Medellín al Mar · Sistema de iluminación inteligente",
        image: null
      },
      {
        title: "Escuelas en Potencia 5G",
        year: "2024–2026",
        category: "Telecomunicaciones",
        metrics: "+310 Km F.O · +810 postes · +20 sitios",
        image: null
      }
    ]
  },

  "CÓRDOBA": {
    name: "Córdoba",
    projects: [
      {
        title: "Planta Solar Flotante 1.350 KW · Tierralta",
        year: "2022",
        category: "Energía",
        metrics: "+2.800 paneles · +13.000 flotadores · 9 inversores",
        image: null
      }
    ]
  },

  "BOLÍVAR": {
    name: "Bolívar",
    projects: [
      {
        title: "Implementación Sistema CCTV",
        year: "2015–2018",
        category: "Telecomunicaciones",
        metrics: "+830 postes · +239 Km F.O · +510 cámaras · +550 SPT",
        image: null
      }
    ]
  },

  "SUCRE": {
    name: "Sucre",
    projects: [
      {
        title: "Implementación Sistema CCTV",
        year: "2015–2018",
        category: "Telecomunicaciones",
        metrics: "Parte del proyecto CCTV regional Cartagena–B/manga",
        image: null
      }
    ]
  },

  "SANTANDER": {
    name: "Santander",
    projects: [
      {
        title: "Implementación Sistema CCTV",
        year: "2015–2018",
        category: "Telecomunicaciones",
        metrics: "Parte del proyecto CCTV regional Cartagena–B/manga",
        image: null
      },
      {
        title: "Escuelas en Potencia 5G",
        year: "2024–2026",
        category: "Telecomunicaciones",
        metrics: "+310 Km F.O · +810 postes · +20 sitios",
        image: null
      }
    ]
  },

  "META": {
    name: "Meta",
    projects: [
      {
        title: "Escuelas en Potencia 5G · Fuente de Oro",
        year: "2024–2026",
        category: "Telecomunicaciones",
        metrics: "27 escuelas · +310 Km F.O · +400 SPT · +20 sitios",
        image: null
      }
    ]
  },

  "CALDAS": {
    name: "Caldas",
    projects: [
      {
        title: "Escuelas en Potencia 5G",
        year: "2024–2026",
        category: "Telecomunicaciones",
        metrics: "+810 postes · +20 sitios · +310 Km F.O",
        image: null
      }
    ]
  }

  // ─── PROYECTO DE COBERTURA MÚLTIPLE ───────────────────────────────────────
  // Vías INVÍAS 2019–2020 se ejecutó en 16 departamentos no especificados
  // en el brochure. Se muestra como entrada informativa general, no mapeada
  // a departamentos específicos para no inventar información.
  // Implementación sugerida: tarjeta especial fija en la parte inferior del
  // mapa, fuera del SVG interactivo, con el siguiente contenido:
  //
  // {
  //   title: "Implementación Sistema CCTV con Energía Solar · Vías INVÍAS",
  //   year: "2019–2020",
  //   category: "Telecomunicaciones / Energía",
  //   metrics: "Cobertura en 16 departamentos de Colombia",
  //   note: "Proyecto de cobertura nacional — departamentos específicos
  //          disponibles bajo solicitud."
  // }
  // ──────────────────────────────────────────────────────────────────────────

};
```

> **Regla de contenido:** no agregar proyectos, departamentos ni cifras que no estén en el Brochure Corporativo Alturion 2026. Si Alturion provee información adicional verificada, actualizar este archivo y el `.md` con la fuente.

> **Nota:** verificar los nombres exactos del GeoJSON con `console.log(features.map(f => f.properties.DPTO_CNMBR))` antes de poblar este archivo.

### Componente MapSVG — implementación con D3

```jsx
// ColombiaMap.jsx
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import colombiaGeo from "../data/colombia.geo.json";
import { departmentProjects } from "../data/departmentProjects";

const COLORS = {
  default:  "#112248",   // sin proyecto
  hasData:  "#0F2035",   // con proyecto
  hover:    "#1e3a6e",   // hover
  selected: "#2a4a80",   // seleccionado
  stroke:        "rgba(201,168,76,0.25)",
  strokeHover:   "#C9A84C",
  strokeSelected:"#C9A84C",
};

export default function ColombiaMap({ onSelect, selectedDept }) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const projection = d3.geoMercator()
      .fitSize([width, height], colombiaGeo);

    const path = d3.geoPath().projection(projection);

    svg.selectAll("path")
      .data(colombiaGeo.features)
      .join("path")
      .attr("d", path)
      .attr("fill", d => {
        const name = d.properties.DPTO_CNMBR;
        return departmentProjects[name] ? COLORS.hasData : COLORS.default;
      })
      .attr("stroke", COLORS.stroke)
      .attr("stroke-width", 0.8)
      .style("cursor", d =>
        departmentProjects[d.properties.DPTO_CNMBR] ? "pointer" : "default"
      )
      .on("mouseenter", function(event, d) {
        const name = d.properties.DPTO_CNMBR;
        if (name === selectedDept) return;
        d3.select(this)
          .transition().duration(150)
          .attr("fill", COLORS.hover)
          .attr("stroke", departmentProjects[name] ? COLORS.strokeHover : COLORS.stroke)
          .attr("stroke-width", departmentProjects[name] ? 1.2 : 0.8);
      })
      .on("mouseleave", function(event, d) {
        const name = d.properties.DPTO_CNMBR;
        if (name === selectedDept) return;
        d3.select(this)
          .transition().duration(150)
          .attr("fill", departmentProjects[name] ? COLORS.hasData : COLORS.default)
          .attr("stroke", COLORS.stroke)
          .attr("stroke-width", 0.8);
      })
      .on("click", function(event, d) {
        const name = d.properties.DPTO_CNMBR;
        if (!departmentProjects[name]) return;
        onSelect(name === selectedDept ? null : name);
      });

  }, [selectedDept]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "520px" }}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        role="img"
        aria-label="Mapa interactivo de Colombia con proyectos de Alturion"
      />
    </div>
  );
}
```

### Componente ProjectPanel — panel lateral deslizante

```jsx
// ProjectPanel.jsx
import { AnimatePresence, motion } from "framer-motion";
import { departmentProjects } from "../data/departmentProjects";

export default function ProjectPanel({ deptKey, onClose }) {
  const data = departmentProjects[deptKey];

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          key={deptKey}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            width: 300,
            background: "#0f1e35",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: 12,
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {/* Header */}
          <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontFamily: "Barlow Semi Condensed, sans-serif", fontSize: 22, fontWeight: 700, color: "#fff" }}>
                {data.name}
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#C9A84C", marginTop: 4 }}>
                {data.projects.length === 1
                  ? "1 PROYECTO EJECUTADO"
                  : `${data.projects.length} PROYECTOS EJECUTADOS`}
              </div>
            </div>
            <button onClick={onClose} aria-label="Cerrar panel" style={{
              width: 28, height: 28, background: "rgba(255,255,255,0.06)",
              border: "none", borderRadius: "50%", color: "rgba(255,255,255,0.5)",
              cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center"
            }}>✕</button>
          </div>

          {/* Project cards */}
          <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12, maxHeight: 440, overflowY: "auto" }}>
            {data.projects.map((p, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
                overflow: "hidden"
              }}>
                {/* Imagen o placeholder */}
                <div style={{ position: "relative", height: 120, background: "linear-gradient(135deg, #112248, #1a3060)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {p.image
                    ? <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    : <span style={{ fontSize: 32, color: "rgba(201,168,76,0.25)" }}>◈</span>
                  }
                  <div style={{
                    position: "absolute", top: 10, right: 10,
                    background: "rgba(10,22,40,0.85)",
                    border: "1px solid rgba(201,168,76,0.4)",
                    borderRadius: 4, fontSize: 11, fontWeight: 700,
                    color: "#C9A84C", padding: "3px 8px", letterSpacing: 1
                  }}>{p.year}</div>
                </div>
                <div style={{ padding: "12px 14px" }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#C9A84C", marginBottom: 6 }}>
                    {p.category}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 6, lineHeight: 1.3 }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>
                    {p.metrics}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### Uso en la página

```jsx
// En la sección de mapa (page o layout)
const [selectedDept, setSelectedDept] = useState(null);

<div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
  <ColombiaMap onSelect={setSelectedDept} selectedDept={selectedDept} />
  <ProjectPanel deptKey={selectedDept} onClose={() => setSelectedDept(null)} />
</div>
```

### Tooltip en hover (opcional pero recomendado)

Mostrar un tooltip flotante al hacer hover sobre un departamento con proyecto. Posición: esquina superior izquierda del mapa (no seguir el cursor — evita jitter en mobile).

```jsx
// Agregar al componente ColombiaMap
.on("mouseenter", function(event, d) {
  const name = d.properties.DPTO_CNMBR;
  const data = departmentProjects[name];
  if (data) {
    setTooltip({
      dept: data.name,
      count: data.projects.length
    });
  }
})
.on("mouseleave", () => setTooltip(null));
```

### Leyenda del mapa

```
■ Azul medio   → Departamento con proyecto ejecutado (clic para ver)
■ Azul oscuro  → Sin proyecto registrado actualmente
```

### Accesibilidad del mapa

```jsx
// Lista sr-only para lectores de pantalla
<ul className="sr-only" aria-label="Lista de departamentos con proyectos">
  {Object.entries(departmentProjects).map(([key, dept]) => (
    <li key={key}>
      <button onClick={() => setSelectedDept(key)}>
        {dept.name} — {dept.projects.length} proyecto(s)
      </button>
    </li>
  ))}
</ul>
```

### Dependencias necesarias para el mapa

```bash
npm install d3 framer-motion
```

- `d3`: solo importar los módulos necesarios (`d3-geo`, `d3-selection`) para no cargar la librería completa.
- `framer-motion`: animación del panel lateral. Alternativa ligera: CSS transitions.

---

## 7. Tres pilares, un solo propósito

### Objetivo
Transmitir que Alturion no solo ejecuta — opera con estándares documentados y auditables en tres dimensiones: calidad, seguridad y sostenibilidad. Esta sección genera confianza en contratantes exigentes (entidades públicas, operadores, grandes privados).

### Ubicación en la página
Inmediatamente después de las 4 verticales. El flujo es: *qué hacemos* → *cómo lo hacemos*. Juntas forman un bloque narrativo coherente antes de pasar a la prueba social (mapa y proyectos).

### Copy de cabecera
- **Eyebrow:** `Cómo lo hacemos`
- **Título:** `Tres pilares, un solo propósito`
- **Descripción:** `Ejecutamos cada proyecto con precisión técnica, control y trazabilidad en cada etapa, garantizando resultados confiables y de alto nivel.`

### Quote de cierre
> *Más que entregar soluciones, construimos relaciones basadas en confianza, seguridad y responsabilidad con el entorno.*

### Los tres pilares — contenido completo

**Calidad · Pilar 01**
- Procesos documentados y trazables
- Entregables auditables en cada etapa
- Planes de calidad por proyecto
- Cumplimiento normativo estricto

**Seguridad · Pilar 02**
- Personal certificado en campo
- Protocolos de trabajo seguros
- SG-SST implementado y activo
- Planes de emergencia por obra

**Sostenibilidad · Pilar 03**
- Manejo ambiental responsable
- Prácticas de bajo impacto en campo
- Eficiencia energética en diseños
- Disposición adecuada de residuos

### Diseño (aprobado en prototipo v2)

**Decisión clave:** todo en dorado `#C9A84C`. Sin colores distintos por pilar — mantiene coherencia con la paleta global de la página.

**Diferenciación visual respecto a las 4 verticales:**
- Ícono grande (64×64px, border-radius 16px) en la parte superior de cada tarjeta — es el elemento protagonista, no el número.
- Etiqueta `Pilar 01 / 02 / 03` en 10px, dorado al 40% de opacidad — discreta, no dominante.
- Separador dorado de 32px entre el nombre del pilar y la lista de ítems.
- Puntos dorados (5px, `border-radius: 50%`) en lugar de checks circulares.
- Hover: gradiente inferior `linear-gradient(90deg, #C9A84C, transparent)` de 2px en lugar del borde izquierdo que usan las verticales.

**Tarjetas:**
- Fondo: `rgba(255,255,255,0.03)`
- Borde: `1px solid rgba(255,255,255,0.07)`
- Border-radius: `12px`
- Padding: `36px 28px`
- Hover: `border-color: rgba(201,168,76,0.3)`, `background: rgba(201,168,76,0.04)`, `translateY(-4px)`

**Fondo de sección:** `#0d1e38` — un tono ligeramente más claro que `#0a1628` de las verticales. Crea separación visual sin romper la continuidad de la página.

**Quote de cierre:**
- Línea vertical dorada de 3px a la izquierda (`linear-gradient` de dorado a transparente hacia abajo).
- Texto 14px, italic, `rgba(255,255,255,0.38)`.
- Layout: línea + texto en fila horizontal.
- Separada del grid por `border-top: 1px solid rgba(255,255,255,0.06)`.

### Mobile
- Las tres tarjetas se apilan verticalmente (`grid-template-columns: 1fr`).
- Quote: línea vertical se convierte en línea horizontal de 32px × 3px arriba del texto.
- Font-size de la quote: 13px.

---

## 8. Formulario de contacto

### Objetivo
Capturar leads cualificados y abrir el cliente de correo del visitante con un mensaje pre-construido dirigido a `contacto@alturion.com.co`. Sin backend, sin servicios externos — funciona con `mailto:`.

### Layout
Dos columnas en desktop: formulario a la izquierda, sidebar de contacto a la derecha (380px fija). Stack vertical en mobile con sidebar arriba.

### Campos del formulario

**Requeridos:**
- Nombre completo
- Empresa u organización
- Correo electrónico (validación de formato)
- Teléfono / WhatsApp (mínimo 6 caracteres)
- Tipo de proyecto (selector):
  - Infraestructura civil
  - Red de fibra óptica
  - Sistema eléctrico / energía
  - CCTV / videovigilancia
  - Tecnología / automatización
  - Interventoría o consultoría
  - Otro

**Opcionales:**
- Departamento / Ciudad de la obra
- Descripción breve del proyecto (textarea)

### CTA
`Solicitar asesoría` — no "Enviar" ni "Submit".

### Lógica de envío (mailto)
Al hacer clic en el botón, si la validación pasa, se construye dinámicamente:
- **Asunto:** `Solicitud de asesoría — {tipo} · {empresa}`
- **Cuerpo:** bloque estructurado con datos de contacto y detalle del proyecto
- **Destino:** `contacto@alturion.com.co`
- Se ejecuta `window.location.href = mailto:...` — abre el cliente de correo del usuario.

Tras el envío: mensaje de confirmación visible debajo del botón, botón deshabilitado para evitar doble envío. El mensaje de confirmación incluye fallback: si el correo no se abre automáticamente, indica escribir directamente a `contacto@alturion.com.co`.

### Validación
- En tiempo real: el error de cada campo desaparece al corregirlo (evento `input`).
- Al submit: valida todos los campos requeridos antes de construir el mailto.
- Sin reCAPTCHA — no aplica para mailto. Si en el futuro se migra a un backend, agregar reCAPTCHA v3 invisible.

### Sidebar derecha

**Tarjeta de información de contacto:**
- Correo: contacto@alturion.com.co
- Teléfono: 311 552 6686
- Dirección: Cra. 10 # 79-33, Ibagué, Colombia
- Sitio web: www.alturion.com.co

**Tarjeta de Atención al cliente (WhatsApp):**
- Título: `Atención al cliente`
- Descripción: invita a escribir por WhatsApp para respuesta más rápida
- Botón con ícono WhatsApp verde `#25D366`
- URL: `https://wa.me/573115526686?text=Hola%20Alturion%2C%20me%20gustar%C3%ADa%20recibir%20atenci%C3%B3n%20al%20cliente.`
- Label dentro del botón: `Atención al cliente` + número `+57 311 552 6686`

### Diseño
- Fondo de sección: `#070f1e` — el más oscuro de la página, crea contraste de cierre.
- Inputs: `background: rgba(255,255,255,0.04)`, borde `rgba(255,255,255,0.1)`, focus en dorado.
- Inputs con error: borde `rgba(220,80,80,0.6)`.
- Botón submit: dorado `#C9A84C`, texto azul oscuro `#0a1628`, hover `#e0bf69`.
- Aviso legal debajo del botón: Ley 1581 de 2012 (tratamiento de datos), 11px, `rgba(255,255,255,0.25)`.

### Mobile
- Grid de formulario: 1 columna (los pares de campos se apilan).
- Sidebar: aparece arriba del formulario (`order: -1`).
- Botón submit: ancho completo.

---

## 9. Botón flotante de WhatsApp

- Posición fija: esquina inferior derecha, `z-index: 200`.
- URL: `https://wa.me/573115526686?text=Hola%20Alturion%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.`
- Tamaño: 56×56px, border-radius 50%.
- Color: verde `#25D366`.
- Animación: pulso suave (`box-shadow`) cada 3–4 segundos. Sin rotaciones ni bounces.
- No tapar contenido importante en mobile — verificar con iPhone SE (375px).

---

## 10. Footer

### Objetivo
Dar un cierre digno a la página — no terminar en silencio. El footer tiene dos zonas: un bloque de cierre con último llamado a la acción, y el footer propiamente dicho con información de navegación y contacto.

### Zona 1 — Bloque de cierre (encima del footer)
Fondo `#050d1a`. Dos columnas: texto a la izquierda, CTAs a la derecha.

**Texto izquierda:**
- Tag: `¿Tiene un proyecto en mente?`
- Headline: `Hablemos de su próximo proyecto.` — Barlow Semi Condensed 800, clamp(32px, 5vw, 56px), uppercase, "próximo" en dorado.
- Descripción: `Nuestro equipo técnico está listo para asesorarle. Del diseño a la operación, con cobertura en más de 20 departamentos de Colombia.`

**CTAs derecha (apilados verticalmente):**
- Primario: `Solicitar asesoría` → ancla al formulario. Fondo dorado, texto azul oscuro.
- Secundario: `Atención al cliente` → WhatsApp `https://wa.me/573115526686`. Borde blanco semitransparente.

**Glow decorativo:** `radial-gradient` dorado muy sutil posicionado a la derecha del bloque.

### Zona 2 — Grid principal del footer
Grid 4 columnas en desktop (`2fr 1fr 1fr 1fr`), 2 columnas en mobile con la columna de marca ocupando ancho completo.

**Columna 1 — Marca:**
- Logo tipográfico `ALTURION` con la U en dorado
- Tagline: `Ingeniería que conecta` — uppercase, dorado al 50%
- Descripción: `Empresa colombiana de ingeniería integral. Infraestructura, energía, telecomunicaciones y tecnología.`
- Badges de certificaciones: `RITEL` · `RETIE` · `SG-SST` · `+20 Departamentos`

**Columna 2 — Servicios:**
- Infraestructura civil
- Energía y sistemas eléctricos
- Telecomunicaciones
- Tecnología e integración
- Interventoría y consultoría

**Columna 3 — Empresa:**
- Quiénes somos
- Proyectos ejecutados
- Nuestro equipo
- Política de privacidad
- Tratamiento de datos

**Columna 4 — Contacto:**
- Dirección: `Cra. 10 # 79-33, Ibagué, Colombia` — solo texto informativo, sin enlace a maps.
- Teléfono: `311 552 6686`
- Correo: `contacto@alturion.com.co`
- Sitio web: `www.alturion.com.co`

> **Decisión:** la dirección es solo texto, sin botón de navegación GPS. Si en el futuro se desea agregar navegación, usar `https://www.google.com/maps/search/?api=1&query=Carrera+10+%2379-33+Ibagu%C3%A9+Tolima+Colombia`

### Zona 3 — Wordmark decorativo
Nombre `ALTURION` en tipografía gigante (clamp 60px–120px), Barlow Semi Condensed 800, color `rgba(255,255,255,0.03)` — casi invisible, solo da profundidad visual. `aria-hidden="true"`, `user-select: none`.

### Zona 4 — Barra inferior
Dos columnas:
- Izquierda: `© 2026 Alturion SAS · Todos los derechos reservados · Ibagué, Colombia` — 11px, `rgba(255,255,255,0.2)`.
- Derecha: links `Política de privacidad` y `Tratamiento de datos · Ley 1581/2012` — mismo estilo.

### Sin redes sociales
No se incluyen íconos de redes sociales. Si Alturion activa perfiles verificados en el futuro (LinkedIn recomendado para B2B), se agregan en la columna de marca.

### Fondo general
`#050d1a` — el más oscuro de toda la página. Crea contraste de cierre respecto al formulario (`#070f1e`) y al resto de secciones.

### Mobile
- Bloque de cierre: stack vertical, CTAs a ancho completo.
- Grid: 2 columnas, columna de marca ocupa ambas (`grid-column: 1 / -1`).
- Barra inferior: stack vertical, alineado a la izquierda.
- Wordmark: visible pero recortado — `overflow: hidden` en el contenedor.

---

## 11. SEO — Estándares Google

### Técnico (obligatorio)

- [ ] `<title>`: `Alturion | Ingeniería en Telecomunicaciones, Energía e Infraestructura`
- [ ] `<meta name="description">` de 150–160 caracteres con palabras clave del negocio
- [ ] `lang="es-CO"` en el tag `<html>`
- [ ] Canonical tag
- [ ] HTTPS activo
- [ ] Sitemap XML → Google Search Console
- [ ] `robots.txt` configurado
- [ ] Imágenes con `alt` descriptivo
- [ ] Open Graph tags para compartir en WhatsApp y LinkedIn:
  ```html
  <meta property="og:title" content="Alturion — Ingeniería que conecta el país">
  <meta property="og:description" content="Infraestructura, telecomunicaciones, energía y tecnología. Diseño, construcción e integración en más de 20 departamentos de Colombia.">
  <meta property="og:image" content="https://alturion.com.co/og-image.jpg">
  <meta property="og:url" content="https://alturion.com.co">
  ```

### Core Web Vitals

- LCP < 2.5 s → optimizar imagen hero (WebP, preload)
- CLS < 0.1 → `font-display: swap` en Google Fonts
- INP < 200 ms → no bloquear el thread principal con JS pesado

### Palabras clave objetivo

```
ingeniería telecomunicaciones Colombia
fibra óptica carrier Colombia
infraestructura redes telecomunicaciones
RITEL RETIE Colombia empresa
montaje fibra óptica operadores
proyectos CCTV urbano Colombia
energía solar fotovoltaica Colombia
ingeniería integral Ibagué
```

### Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Alturion",
  "url": "https://www.alturion.com.co",
  "logo": "https://www.alturion.com.co/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+57-311-552-6686",
    "contactType": "sales",
    "availableLanguage": "Spanish"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cra. 10 # 79-33",
    "addressLocality": "Ibagué",
    "addressCountry": "CO"
  }
}
```

---

## 12. Sistema visual

### Paleta de colores

| Uso | Color | Hex |
|-----|-------|-----|
| Fondo principal | Azul marino profundo | `#0a1628` |
| Fondo hero / overlay | Azul oscuro | `#0D1B3E` |
| Departamentos con proyecto | Azul medio | `#0F2035` |
| Departamentos sin proyecto | Azul base | `#112248` |
| Hover de departamentos | Azul medio claro | `#1e3a6e` |
| Seleccionado | Azul enfatizado | `#2a4a80` |
| Acento / énfasis | Dorado Alturion | `#C9A84C` |
| Hover dorado | Dorado claro | `#e0bf69` |
| Texto principal | Blanco | `#FFFFFF` |
| Texto secundario | Blanco semitransparente | `rgba(255,255,255,0.6)` |
| Texto muted | Gris claro | `rgba(255,255,255,0.45)` |
| Panel lateral | Azul panel | `#0f1e35` |
| WhatsApp | Verde | `#25D366` |

### Tipografía

- **Display / Títulos:** Barlow Semi Condensed 700 — uppercase, headlines, stats.
- **UI / Cuerpo:** Inter — todo lo demás.
- Tamaño mínimo en mobile: **16px** (cuerpo).
- Cargar desde Google Fonts con `<link rel="preconnect">` antes del `<link>` de fuentes.

### Efectos permitidos

- `fadeIn` al hacer scroll (Intersection Observer, vanilla JS).
- Hover en tarjetas: `transform: translateY(-4px)` + `box-shadow` sutil.
- Transición de color en botones: `transition: all 0.2s`.
- Pulso WhatsApp: `box-shadow` animado, 3s loop.
- Panel de mapa: deslizamiento con Framer Motion (`x: 40 → 0`).

### Efectos prohibidos

- Parallax agresivo.
- Partículas animadas de fondo.
- Gradientes en movimiento perpetuo.
- Animaciones de entrada complejas que retrasen el LCP.
- `filter: blur()` en elementos grandes (penaliza GPU).

---

## 13. Stack tecnológico recomendado

### Opción A — React + Vite (recomendada para el mapa D3)

```
React 18 + Vite
D3.js (solo d3-geo + d3-selection)
Framer Motion (panel del mapa)
EmailJS o Formspree (formulario)
```

Deploy: Netlify o Vercel. Costo: gratis en tier gratuito para este volumen.

### Opción B — Astro + React islands

- Astro genera HTML estático, React solo donde hay interactividad (mapa, formulario).
- Mejor rendimiento en Core Web Vitals que React puro.
- Recomendado si el SEO es prioritario desde el día 1.

### Opción C — WordPress

- Solo si el cliente debe editar contenido sin tocar código.
- Usar tema custom o Kadence, **evitar Elementor**.
- D3 se puede integrar como script en un bloque HTML personalizado.

> **Recomendación:** Opción A o B. El mapa con D3 funciona mejor en entorno React. WordPress agrega complejidad innecesaria para una landing de este tipo.

---

## 14. Mobile — Consideraciones específicas

- Diseño **mobile-first**: CSS base para mobile, `min-width` media queries para desktop.
- Mapa en mobile: ancho completo, el panel de proyectos aparece **debajo** del mapa (no lateral). Usar `flex-direction: column` en pantallas < 768px.
- Formulario: inputs mínimo 44px de altura táctil.
- Nav: hamburger limpio, sin mega-menús.
- Probar en: iPhone SE (375px), iPhone 14 (390px), Samsung Galaxy A (360px), iPad (768px).
- El botón de WhatsApp no debe solaparse con el nav en landscape mobile.

---

## 15. Checklist de lanzamiento

### Contenido
- [ ] Fotos reales de proyectos cargadas en `/src/assets/projects/` y referenciadas en `departmentProjects.js`
- [ ] Cifras verificadas con el equipo directivo
- [ ] Texto revisado por alguien de Alturion
- [ ] Formulario probado: recibe correos correctamente
- [ ] WhatsApp redirige al número correcto con mensaje pre-cargado
- [ ] Mapa: verificar que `DPTO_CNMBR` del GeoJSON coincide con las keys de `departmentProjects.js`

### Técnico
- [ ] SSL activo (https)
- [ ] Google Search Console configurado y sitemap enviado
- [ ] Google Analytics 4 instalado
- [ ] Open Graph tags (para compartir en WhatsApp / LinkedIn)
- [ ] Favicon: logo Alturion en 32×32 y 180×180 (apple-touch-icon)
- [ ] Página 404 personalizada
- [ ] Política de tratamiento de datos publicada (Ley 1581/2012)
- [ ] `npm run build` sin errores, preview revisado

### Velocidad
- [ ] PageSpeed Insights > 90 en mobile
- [ ] Imágenes en formato WebP, comprimidas (< 200 KB cada una)
- [ ] GeoJSON de Colombia minificado (el archivo original puede ser pesado)
- [ ] D3 importado solo con los módulos necesarios, no `import * as d3 from 'd3'`
- [ ] Fuentes cargadas con `font-display: swap`

---

## 16. Lo que NO hacer

- ❌ No usar sliders/carousels automáticos en el hero.
- ❌ No poner el PDF del brochure como reemplazo de la página.
- ❌ No dibujar el mapa de Colombia con paths SVG manuales — usar D3 + GeoJSON.
- ❌ No importar D3 completo (`import * as d3`) — solo los módulos usados.
- ❌ No usar `filter: blur()` en elementos de fondo grandes.
- ❌ No tener más de 2 CTAs compitiendo en la misma sección.
- ❌ No usar pop-ups de entrada.
- ❌ No cargar Google Maps embebido si no es estrictamente necesario.
- ❌ No usar colores fuera de la paleta definida.
- ❌ No escribir bloques de texto de más de 3 líneas seguidas en la página.

---

*Documento vivo — actualizar con decisiones de diseño, nuevas fotos de proyectos, cambios de contenido o nuevas certificaciones a medida que avance el proyecto.*
