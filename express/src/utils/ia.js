export const generarLecturaPrincipal = (fecha_nacimiento, nombre) => {
  // Simulación simple: construir lectura basada en números
  const parts = fecha_nacimiento.split('-').map(Number);
  const suma = parts.reduce((a,b)=>a+b,0);
  const numero = (''+suma).split('').reduce((a,b)=>a+Number(b),0);
  return `Lectura principal para ${nombre}. Número de destino: ${numero}. Basado en la fecha ${fecha_nacimiento}. Mensaje: Aprovecha tus talentos y trabaja tu constancia.`;
};

export const generarLecturaDiaria = (nombre) => {
  const mensajes = [
    'Hoy es un día para la reflexión y la quietud.',
    'Aprovecha una oportunidad de aprendizaje inesperada.',
    'Cuidado con decisiones impulsivas; respira y analiza.',
    'La comunicación será clave; expresa lo que piensas con claridad.'
  ];
  const idx = Math.floor(Math.random()*mensajes.length);
  return `Lectura diaria para ${nombre}: ${mensajes[idx]}`;
};
