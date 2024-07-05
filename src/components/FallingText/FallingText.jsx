import  { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const FallingText = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, World, Bodies, Events } = Matter;

    const engine = Engine.create();
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
      },
    });

    const floor = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 10, {
      isStatic: true,
    });

    World.add(engine.world, [floor]);

    const keywords = ['React', 'JavaScript', 'Matter.js', 'Front-end', 'Developer'];

    keywords.forEach((keyword) => {
      const textWidth = 60;
      const textHeight = 30;
      const x = Math.random() * (window.innerWidth - textWidth);
      const y = Math.random() * -window.innerHeight;

      const textBody = Bodies.rectangle(x, y, textWidth, textHeight, {
        render: {
          fillStyle: 'transparent',
        },
        label: keyword,
      });

      World.add(engine.world, textBody);
    });

    Engine.run(engine);
    Render.run(render);

    const canvas = render.canvas;
    const context = canvas.getContext('2d');

    Events.on(render, 'afterRender', () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      engine.world.bodies.forEach((body) => {
        if (body.label !== 'Rectangle Body') {
          const { position, angle } = body;
          context.save();
          context.translate(position.x, position.y);
          context.rotate(angle);
          context.fillStyle = '#fff';
          context.font = '20px Arial';
          context.fillText(body.label, -30, 10);
          context.restore();
        }
      });
    });

    return () => {
      World.clear(engine.world);
      Engine.clear(engine);
      Render.stop(render);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={sceneRef} style={{ position: 'relative', width: '100%', height: '100vh' }} />;
};

export default FallingText;
