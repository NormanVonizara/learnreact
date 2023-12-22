/**
 * @param {boolean} checked
 * @param {(s: string) => void } onChange
 * @param {string} label
 * @param {string} id
 * @returns {JSX.Element}
 */
export function CheckBox ({checked, onChange, label, id}) {
    return <div className="form-check my-2">
        <input
            type="checkbox" className="form-check-input"
            checked={checked} id={id}
            onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}