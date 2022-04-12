/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent, MouseEventHandler, useEffect, useRef, useState } from 'react';

const Canvas = () => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
  const canvasRef = useRef<HTMLCanvasElement>();
  const [nlines, setNlines] = useState(1);
  useEffect(() => {
    setCtx(canvasRef.current?.getContext('2d'));
  }, []);

  useEffect(() => {
    if (ctx) {
      ctx.fillStyle = '#FF0000'; // bg-color
      ctx.fillRect(0, 0, 150, 75); // rectangle

      ctx.moveTo(200, 100); // start point
      ctx.lineTo(300, 150); // end point
      ctx.stroke(); // draw line
    }
  }, [ctx]);

  const handleClick = (e: any) => {
    // console.log('click: ', e.clientX, e.clientY);
    const { clientX: x, clientY: y } = e;
    ctx?.moveTo(x, y); // start point
    ctx?.lineTo(x + 100, y + 100); // end point
    ctx?.stroke(); // draw line
    // if (nlines === 1) {
    //   ctx?.moveTo(400, 100); // start point
    //   ctx?.lineTo(500, 200); // end point
    //   ctx?.stroke(); // draw line
    // }
    // if (nlines === 2) {
    //   ctx?.moveTo(500, 200); // start point
    //   ctx?.lineTo(500, 400); // end point
    //   ctx?.stroke(); // draw line
    // }
    // if (nlines === 3) {
    //   ctx?.moveTo(500, 400); // start point
    //   ctx?.lineTo(400, 100); // end point
    //   ctx?.stroke(); // draw line
    // }
    // setNlines((prev) => prev + 1);
  };
  const handleClearCanvas = () => ctx?.clearRect(0, 0, 1000, 500);

  return (
    <div>
      <canvas ref={canvasRef} width='1000' height='500' style={{ border: '1px solid red' }} onClick={handleClick} />
      <button type='button'>complete</button>
      <button type='button' onClick={handleClearCanvas}>
        clean
      </button>
    </div>
  );
};

export default Canvas;
