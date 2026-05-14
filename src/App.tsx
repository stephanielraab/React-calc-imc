import { useState } from 'react';
import styles from './App.module.css';
import { GridCard } from './components/GridCard';
import { ResultCard } from './components/ResultCard';
import { levels, calculateImc, Level } from './helpers/imc';

const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState<Level | null>(null);
  const [imcValue, setImcValue] = useState<number | null>(null);

  const h = parseFloat(height);
  const w = parseFloat(weight);

  const previewImc = h > 0 && w > 0
    ? (w / (h * h)).toFixed(1)
    : null;

  const handleCalculate = () => {
    if (!h || !w || h <= 0 || w <= 0) {
      alert('Por favor, preencha altura e peso corretamente.');
      return;
    }
    setImcValue(w / (h * h));
    setResult(calculateImc(h, w));
  };

  const handleReset = () => {
    setResult(null);
    setImcValue(null);
    setHeight('');
    setWeight('');
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
        <div className={styles.logo}>
          imc<span className={styles.logoAccent}>.</span>calc
        </div>
        <div className={styles.badge}>OMS · Índice de Massa Corpórea</div>
        </div>
      </header>

      <main className={styles.main}>
        {/* ── Left panel ── */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>Calculadora</div>
          <h1 className={styles.title}>Calcule seu IMC</h1>
          <p className={styles.subtitle}>
            O Índice de Massa Corpórea é o parâmetro adotado pela Organização
            Mundial da Saúde para calcular o peso ideal de cada pessoa.
          </p>

          <div className={styles.field}>
            <label htmlFor="height">Altura (metros)</label>
            <input
              id="height"
              type="number"
              placeholder="Ex: 1.75"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              disabled={!!result}
              step="0.01"
              min="0"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="weight">Peso (kg)</label>
            <input
              id="weight"
              type="number"
              placeholder="Ex: 75.3"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              disabled={!!result}
              step="0.1"
              min="0"
            />
          </div>

          <div className={styles.imcChip}>
            {result ? (
              <>
                <span>IMC calculado</span>
                <span className={styles.imcChipVal}>{imcValue?.toFixed(2)}</span>
              </>
            ) : previewImc ? (
              <>
                <span>IMC estimado</span>
                <span className={styles.imcChipVal}>{previewImc}</span>
              </>
            ) : (
              <span className={styles.imcChipEmpty}>Preencha os campos acima</span>
            )}
          </div>

          {!result ? (
            <button className={styles.btnPrimary} onClick={handleCalculate}>
              Calcular IMC
            </button>
          ) : (
            <button className={styles.btnGhost} onClick={handleReset}>
              ← Calcular novamente
            </button>
          )}
        </div>

        {/* ── Right panel ── */}
        <div className={styles.right}>
          {!result ? (
            <div className={styles.grid}>
              {levels.map((item, i) => (
                <GridCard key={i} item={item} />
              ))}
            </div>
          ) : (
            <ResultCard level={result} imc={imcValue!} />
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        © 2025 imc.calc — Baseado nos critérios da OMS
      </footer>
    </div>
  );
};

export default App;