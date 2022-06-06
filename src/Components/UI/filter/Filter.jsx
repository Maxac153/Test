import "../filter/filter.css"

const Filter = ({ defaultValue, options, value, onChange }) => {
  return (
    <div className="filter">
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option disabled value="value">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
