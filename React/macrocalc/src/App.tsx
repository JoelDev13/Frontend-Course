
export default function App() {
  return (
    <>
      <div className="general-wrapper">
      <div className="data-wrapper">
        <h1>Macro Calculator</h1>

        <label>
          Weight (kg)
          <input
            type="number"
            min={1}
            defaultValue={70}
            className="input-bill"
          />
        </label>

        <h2>Activity Level</h2>
        <select className="percentage-button" defaultValue={1.55}>
          <option value={1.2}>Sedentary</option>
          <option value={1.375}>Light</option>
          <option value={1.55}>Moderate</option>
          <option value={1.725}>Active</option>
          <option value={1.9}>Very Active</option>
        </select>

        <h2>Goal</h2>
        <ul>
          <li>
            <button type="button" className="percentage-button">
              Cut
            </button>
          </li>
          <li>
            <button type="button" className="percentage-button">
              Maintain
            </button>
          </li>
          <li>
            <button type="button" className="percentage-button">
              Bulk
            </button>
          </li>
        </ul>
      </div>

      <div className="result-wrapper">
        <div className="result-txt">
          <div className="text-amount">
            <h2>Calories</h2>
            <h3>0 kcal</h3>
          </div>

          <div className="text-amount">
            <h2>Protein</h2>
            <h3>0 g</h3>
          </div>

          <div className="text-amount">
            <h2>Carbs</h2>
            <h3>0 g</h3>
          </div>

          <div className="text-amount">
            <h2>Fat</h2>
            <h3>0 g</h3>
          </div>
        </div>

        <button type="button" className="reset-button">
          RESET
        </button>
      </div>
        </div>
    </>
    
  );
}
