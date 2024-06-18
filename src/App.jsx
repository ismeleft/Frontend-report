import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import Nav from './components/Nav/Nav';

export const App = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    // let World = Matter.World;
    let Bodies = Matter.Bodies;
    let Composite = Matter.Composite;

    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 1980,
        height: 1080,
        // background: 'rgba(255, 0, 0, 0.5)',
        wireframes: false,
      },
    });

    const floor = Bodies.rectangle(890, 800 , 1980, 20, {
      isStatic: true,
      render: {
        fillStyle: 'blue',
      },
    });

    const createText = (text, x, y) => {
      const textWidth = 20; 
      const textHeight = 20;
      const textBody = Bodies.rectangle(x, y, text.length * textWidth, textHeight, {
        restitution: 0.9,
        render: {
          fillStyle: 'transparent',
        },
        label: text,
      });

      const textElement = document.createElement('div');
      textElement.className = 'word';
      textElement.textContent = text;
      document.body.appendChild(textElement);

      return {
        body: textBody,
        element: textElement,
        render() {
          const { x, y, angle } = this.body.position;
          this.element.style.position = 'absolute';
          this.element.style.left = `${x - textWidth / 2}px`;
          this.element.style.top = `${y - textHeight / 2}px`;
          this.element.style.transform = `rotate(${angle}rad)`;
        }
      };
    };

    const name = createText('WEN-YING', 150, 0);
    const job = createText('Front-end Developer', 100, 100);

    Composite.add(engine.world, [floor, name.body, job.body]);

    Engine.run(engine);
    Render.run(render);

    (function rerender() {
      name.render();
      job.render();
      requestAnimationFrame(rerender);
    })();
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width:"100vw",
        height:"100vh",
        // backgroundColor:"#777"
      }}
    >
      <Nav/>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default App;
