import React from 'react'
import './form.css'

export function Form() {
    return (
        <div className='form'>
            <h1>You & Herbs</h1>
            <form>
                <label>
                    First Name:
                    <input name='firstname' type='text'></input>
                </label>
                <label>
                    Last Name:
                    <input name='lastname' type='text' />
                </label>
                <label>
                    Email:
                    <input name='email' type='email' />
                </label>
                <label>
                    Phone Number:
                    <input name='phonenumber' type='text' />
                </label>
                <div className="checkbox-group">
                    Select all your favorite herbs:
                    <label>
                        Self-Heal (Prunella vulgaris)
                        <input name='herbs' id='self-heal' type='checkbox' value='self-heal' />
                    </label>
                    <label>
                        Rose
                        <input name='herbs' id='rose' type='checkbox' value='rose' />
                    </label>
                    <label>
                        Lavender (Lavandula angustifolia)
                        <input name='herbs' id='lavender' type='checkbox' value='lavender' />
                    </label>
                    <label>
                        Calendula (Calendula officinalis)
                        <input name='herbs' id='Calendula' type='checkbox' value='calendula' />
                    </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}