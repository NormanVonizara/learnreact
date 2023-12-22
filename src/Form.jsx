import {useState} from "react";

function App () {
    const [isChecked, setIsChecked] = useState(false)
    const [username, setUsername] = useState("Norman")
    return <form>
        <UsernameEntry value={username} onChange={setUsername} />
        <CGUCheckbox checked={isChecked} onCheck={setIsChecked} />
        <button disabled={!isChecked}>Envoyer le formulaire</button>
    </form>
}

function CGUCheckbox ({checked, onCheck}) {
    return <div>
        <label>
            <input
                type="checkbox" checked={checked}
                onChange={(e) => onCheck(e.target.checked)}
            />
            Accepter les conditions d'utilisation
        </label>
    </div>
}

function UsernameEntry ({value, onChange}) {
    return <div>
        <input
            type="text" name="username" value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}

export default App