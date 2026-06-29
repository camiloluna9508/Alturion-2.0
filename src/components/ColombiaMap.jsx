import { useEffect, useRef, useState, useCallback } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { select } from 'd3-selection';
import 'd3-transition';
import { departmentProjects } from '../data/departmentProjects';

const COLORS = {
  default: '#112248',
  hasData: '#0F2035',
  hover: '#1e3a6e',
  selected: '#2a4a80',
  stroke: 'rgba(201,168,76,0.25)',
  strokeHover: '#C9A84C',
  strokeSelected: '#C9A84C',
};

export default function ColombiaMap({ onSelect, selectedDept }) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/colombia.geo.json')
      .then((r) => r.json())
      .then(setGeoData);
  }, []);

  const drawMap = useCallback(() => {
    if (!svgRef.current || !containerRef.current || !geoData) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    if (width === 0 || height === 0) return;

    const svg = select(svgRef.current);
    svg.selectAll('*').remove();

    const projection = geoMercator().fitSize([width, height], geoData);
    const pathGen = geoPath().projection(projection);

    svg
      .selectAll('path')
      .data(geoData.features)
      .join('path')
      .attr('d', pathGen)
      .attr('fill', (d) => {
        const name = d.properties.DPTO_CNMBR;
        if (name === selectedDept) return COLORS.selected;
        return departmentProjects[name] ? COLORS.hasData : COLORS.default;
      })
      .attr('stroke', (d) => {
        const name = d.properties.DPTO_CNMBR;
        if (name === selectedDept) return COLORS.strokeSelected;
        return COLORS.stroke;
      })
      .attr('stroke-width', (d) =>
        d.properties.DPTO_CNMBR === selectedDept ? 1.5 : 0.8
      )
      .style('cursor', (d) =>
        departmentProjects[d.properties.DPTO_CNMBR] ? 'pointer' : 'default'
      )
      .on('mouseenter', function (event, d) {
        const name = d.properties.DPTO_CNMBR;
        if (name === selectedDept) return;
        const hasProjects = !!departmentProjects[name];
        select(this)
          .transition()
          .duration(150)
          .attr('fill', COLORS.hover)
          .attr('stroke', hasProjects ? COLORS.strokeHover : COLORS.stroke)
          .attr('stroke-width', hasProjects ? 1.2 : 0.8);
        if (hasProjects) {
          setTooltip({
            dept: departmentProjects[name].name,
            count: departmentProjects[name].projects.length,
          });
        }
      })
      .on('mouseleave', function (event, d) {
        const name = d.properties.DPTO_CNMBR;
        if (name === selectedDept) return;
        select(this)
          .transition()
          .duration(150)
          .attr('fill', departmentProjects[name] ? COLORS.hasData : COLORS.default)
          .attr('stroke', COLORS.stroke)
          .attr('stroke-width', 0.8);
        setTooltip(null);
      })
      .on('click', function (event, d) {
        const name = d.properties.DPTO_CNMBR;
        if (!departmentProjects[name]) return;
        onSelect(name === selectedDept ? null : name);
      });
  }, [geoData, selectedDept, onSelect]);

  useEffect(() => {
    drawMap();
  }, [drawMap]);

  return (
    <div ref={containerRef} className="colombia-map__container">
      {tooltip && (
        <div className="colombia-map__tooltip">
          <strong>{tooltip.dept}</strong>
          <span>
            {tooltip.count} proyecto{tooltip.count !== 1 ? 's' : ''}
          </span>
        </div>
      )}
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
