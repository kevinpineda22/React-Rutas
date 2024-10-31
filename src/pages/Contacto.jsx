import '../pages/Contacto.css';

const Contacto = () => {
    return (
        <div className="contacto-container">
            <h1>Contacto</h1>
            <fieldset className="contacto-cuadro">
                <legend>Group Name</legend>
                <label htmlFor="dateInput"></label>
                <input type="date" id="dateInput" className="date-input" />
                
                <label htmlFor="comboBox">ComboBox</label>
                <select id="comboBox" className="comboBox">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </fieldset>
        </div>
    );
};

export { Contacto };
