export type Level = {
  title: string;
  range: string;
  color: string;
  gradient: string;
  icon: string;
  description: string;
  min: number;
  max: number;
};

export const levels: Level[] = [
  {
    title: "Abaixo do Peso",
    range: "< 18.5",
    color: "#60a5fa",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #1e4080 100%)",
    icon: "↓",
    description: "Peso abaixo do recomendado pela OMS.",
    min: 0,
    max: 18.4,
  },
  {
    title: "Peso Ideal",
    range: "18.5 – 24.9",
    color: "#34d399",
    gradient: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
    icon: "✓",
    description: "Parabéns! Seu peso está na faixa ideal.",
    min: 18.5,
    max: 24.9,
  },
  {
    title: "Sobrepeso",
    range: "25 – 29.9",
    color: "#fbbf24",
    gradient: "linear-gradient(135deg, #451a03 0%, #78350f 100%)",
    icon: "↑",
    description: "Levemente acima do peso recomendado.",
    min: 25,
    max: 29.9,
  },
  {
    title: "Obesidade I",
    range: "30 – 34.9",
    color: "#f97316",
    gradient: "linear-gradient(135deg, #431407 0%, #7c2d12 100%)",
    icon: "⚠",
    description: "Obesidade grau I. Consulte um médico.",
    min: 30,
    max: 34.9,
  },
  {
    title: "Obesidade II",
    range: "35 – 39.9",
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)",
    icon: "⚠",
    description: "Obesidade grau II. Acompanhamento médico urgente.",
    min: 35,
    max: 39.9,
  },
  {
    title: "Obesidade III",
    range: "≥ 40",
    color: "#dc2626",
    gradient: "linear-gradient(135deg, #3b0000 0%, #6b0000 100%)",
    icon: "‼",
    description: "Obesidade grau III. Procure atenção médica.",
    min: 40,
    max: Infinity,
  },
];

export const calculateImc = (height: number, weight: number): Level => {
  const imc = weight / (height * height);
  return levels.find((l) => imc >= l.min && imc <= l.max) ?? levels[levels.length - 1];
};