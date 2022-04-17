/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */
import CanvasService, { Cordinates } from '@services/canvas.service';
import { useState, useRef, useEffect } from 'react';

const CanvasV2 = () => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>() as React.MutableRefObject<HTMLCanvasElement>;

  const [cordinates, setCordinates] = useState<Cordinates[]>([]);
  const [currentCord, setCurrentCord] = useState(0);

  const drawPoligon = (cords: Cordinates) => {
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(cords.from.x, cords.from.y); // start point
      ctx.lineTo(cords.to.x, cords.to.y); // end point
      ctx.stroke(); // draw line
      ctx.closePath();
    }
  };

  useEffect(() => {
    if (ctx === null) setCtx(canvasRef.current?.getContext('2d'));
  }, [ctx]);

  const handleClick = () => {
    if (currentCord > 0 && cordinates.length === currentCord) return;

    if (cordinates.length > 0) {
      drawPoligon({
        from: { x: cordinates[currentCord].from.x, y: cordinates[currentCord].from.y },
        to: { x: cordinates[currentCord].to.x, y: cordinates[currentCord].to.y },
      });
    } else if (cordinates.length === 0) {
      const c = new CanvasService();
      const cords = c.generatePoligon();
      setCordinates(cords);
      drawPoligon({
        from: { x: cords[currentCord].from.x, y: cords[currentCord].from.y },
        to: { x: cords[currentCord].to.x, y: cords[currentCord].to.y },
      });
    }
    setCurrentCord((prev) => prev + 1);
  };

  const handleCompletePoligon = () => {
    for (let i = currentCord; i < cordinates.length; i++) {
      const element = cordinates[i];
      drawPoligon({
        from: { x: element.from.x, y: element.from.y },
        to: { x: element.to.x, y: element.to.y },
      });
    }
    setCurrentCord(cordinates.length);
  };

  const handleClearCanvas = () => {
    if (ctx) ctx.clearRect(0, 0, 1000, 500);
    setCordinates([]);
    setCurrentCord(0);
  };

  return (
    <div>
      <h1>
        To start click on canvas. If you want another polygon you can click on clear and then click again on the canvas.
        Each time you click on an empty canvas a new polygon is generated.
      </h1>
      <canvas ref={canvasRef} width='400' height='400' style={{ border: '1px solid red' }} onClick={handleClick} />
      <div>
        <button
          type='button'
          onClick={handleCompletePoligon}
          disabled={cordinates.length === 0 || currentCord === cordinates.length}
        >
          complete
        </button>
        <button type='button' onClick={handleClearCanvas} disabled={cordinates.length === 0}>
          clean
        </button>
      </div>
      <div>
        {cordinates.length > 0 && (
          <div>
            <h2>Poligon of {cordinates.length} lines</h2>
            <h2>
              line {currentCord} of {cordinates.length} lines
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CanvasV2;
