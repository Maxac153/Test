import "../filter/filter.css";

const Filter = ({ defaultValue, options, value, sort }) => {
  return (
    <div className="filter">
      <select value={value} onChange={(e) => sort(e.target.value)}>
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
