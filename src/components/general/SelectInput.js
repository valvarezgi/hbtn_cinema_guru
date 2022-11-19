import './general.css';

const SelectInput = ({ label, options, className, value, setValue, dark }) => {
  const handleSelect = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={`SelectInput ${dark ? 'select-dark' : ''}`}>
      <label>{label}:</label>
      <select onChange={handleSelect}>
        {options &&
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectInput;
