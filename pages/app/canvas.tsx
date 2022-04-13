/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import CanvasService, { Cordinates, PoligonType, options } from '@services/canvas.service';

const Canvas: NextPage = () => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
  const canvasRef = useRef<HTMLCanvasElement>() as React.MutableRefObject<HTMLCanvasElement>;
  // canvas service
  const [currentPoligon, setCurrentPoligon] = useState<PoligonType>('');
  const [currentCord, setCurrentCord] = useState(0);
  const [lines, setLines] = useState<Cordinates[]>([]);

  const handleClearCanvas = () => {
    setCtx(canvasRef.current?.getContext('2d'));
    setCurrentCord(0);
    setLines([]);
    ctx && ctx.clearRect(0, 0, 1000, 500);
  };

  useEffect(() => {
    handleClearCanvas();
  }, [currentPoligon]);

  useEffect(() => {
    if (ctx) {
      // ctx.fillStyle = '#FF0000'; // bg-color
      // ctx.fillRect(0, 0, 150, 75); // rectangle
      // ctx.moveTo(200, 100); // start point
      // ctx.lineTo(300, 150); // end point
      // ctx.stroke(); // draw line
    }
  }, [ctx]);

  const drawPoligon = (cords: Cordinates) => {
    ctx?.beginPath();
    ctx?.moveTo(cords.from.x, cords.from.y); // start point
    ctx?.lineTo(cords.to.x, cords.to.y); // end point
    ctx?.stroke(); // draw line
    ctx?.closePath();
  };

  const handleClick = (e: any) => {
    if (currentPoligon === '') return;
    const { clientX: x, clientY: y } = e;
    if (currentCord > 0 && lines.length === currentCord) return;
    if (lines.length > 0) {
      drawPoligon({
        from: { x: lines[currentCord].from.x, y: lines[currentCord].from.y },
        to: { x: lines[currentCord].to.x, y: lines[currentCord].to.y },
      });
    } else {
      const c = new CanvasService({ x, y });
      const cords = c.getPoligon(currentPoligon);
      drawPoligon({
        from: { x: cords[currentCord].from.x, y: cords[currentCord].from.y },
        to: { x: cords[currentCord].to.x, y: cords[currentCord].to.y },
      });
      setLines(cords);
    }
    setCurrentCord((prev) => prev + 1);
  };

  const handleCompletePoligon = () => {
    if (currentCord > 0) {
      for (let i = currentCord; i < lines.length; i++) {
        setCurrentCord((prev) => prev + 1);
        const element = lines[i];
        drawPoligon({
          from: { x: element.from.x, y: element.from.y },
          to: { x: element.to.x, y: element.to.y },
        });
      }
    } else {
      const c = new CanvasService();
      const cords = c.getPoligon(currentPoligon);
      cords.forEach((cord) => {
        drawPoligon({
          from: { x: cord.from.x, y: cord.from.y },
          to: { x: cord.to.x, y: cord.to.y },
        });
      });
    }
  };

  return (
    <div>
      <div>
        <canvas ref={canvasRef} width='400' height='400' style={{ border: '1px solid red' }} onClick={handleClick} />
      </div>
      <div>
        <h1>To start drawing first select and poligon option</h1>
        <button type='button' onClick={handleCompletePoligon}>
          complete
        </button>
        <button type='button' onClick={handleClearCanvas}>
          clean
        </button>
        <select onChange={(e) => setCurrentPoligon(e.target.value as PoligonType)} value={currentPoligon}>
          <option value=''>None</option>
          {options.map((opt) => (
            <option key={`Opt-${opt}`} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div>
          {currentPoligon && <h2>Poligon: {currentPoligon}</h2>}
          {lines.length > 0 && (
            <h2>
              Lines: {currentCord}
              {' of '}
              {lines.length}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
