export default function diferencaEmDias(dataA: Date | undefined, dataB: Date | undefined): number {
  // copia as datas para zerar horas/min/seg/milis e comparar só a parte da data
  if(!dataA || !dataB) {
    return 0;
  }
  const diaA = new Date(dataA);
  const diaB = new Date(dataB);
  
  diaA.setHours(0, 0, 0, 0);
  diaB.setHours(0, 0, 0, 0);

  const msPorDia = 1000 * 60 * 60 * 24;
  const diffMs = Math.abs(diaB.getTime() - diaA.getTime());

  return Math.floor(diffMs / msPorDia);
}