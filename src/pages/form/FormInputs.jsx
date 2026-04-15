import { useState } from "react";
import styles from './form.module.css'

export default function FormInputs({ getFormData, style }){


    const [data, setData] = useState({firstName: '', lastName: '', address: '', country: '', email: '', telephone: '', additional: ''});

    const createOrder = (e) => {
        e.preventDefault();


        const formData = {
            data
        }

        getFormData(formData);
        
    } 

    return(
        <>
            <div>
                    <form onSubmit={createOrder}>
                        <div className={styles.formWrapper}>
                            <div className={style.inputWrapper}>
                                <input
                                    type="text"
                                    name="firstName"
                                    className=""
                                    placeholder="First Name"
                                    required
                                    value={data.firstName}
                                    onChange={(e) => setData({...data, firstName: e.target.value})}
                                />
                            </div>

                            <div className={style.inputWrapper}>
                                <input
                                    type="text"
                                    name="lastName"
                                    className=""
                                    placeholder="Last Name"
                                    required
                                    value={data.lastName}
                                    onChange={(e) => setData({ ...data, lastName: e.target.value})}
                                />
                            </div>

                            <div className={style.inputWrapper}>
                                <input
                                    type="text"
                                    name="adress"
                                    className=""
                                    placeholder="Address"
                                    required
                                    value={data.address}
                                    onChange={(e) => setData({ ...data, address: e.target.value})}
                                />
                            </div>

                            <div className={style.inputWrapper}>
                                <input
                                    type="text"
                                    name="country"
                                    className=""
                                    placeholder="Country"
                                    required
                                    value={data.country}
                                    onChange={(e) => setData({ ...data, country: e.target.value})}
                                />
                            </div>

                            <div className={style.inputWrapper}>
                                <input
                                    type="email"
                                    name="email"
                                    className=""
                                    placeholder="e-mail"
                                    required
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value})}
                                />
                            </div>

                            <div className={style.inputWrapper}>
                                <input
                                    type="number"
                                    name="telephone"
                                    className=""
                                    placeholder="Telephone"
                                    required
                                    value={data.telephone}
                                    onChange={(e) => setData({ ...data, telephone: e.target.value})}
                                />
                            </div>

                            <div className={style.inputWrapper}>
                                <input
                                    type="text"
                                    name="additional"
                                    className=""
                                    placeholder="Additional Informations"
                                    value={data.additional}
                                    onChange={(e) => setData({ ...data, additional: e.target.value})}
                                />
                            </div>


                        </div>

                        <button className={style.orderButton} type="submit">Place an order</button>
                    </form>
                </div>
        </>
    )
}