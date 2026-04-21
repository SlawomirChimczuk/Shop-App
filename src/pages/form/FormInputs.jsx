import { useRef } from "react";
import styles from './form.module.css'

export default function FormInputs({ getFormData, style }){
    const dataRef = useRef({});

    const createOrder = (e) => {
        e.preventDefault();

        const data = {
            firstName: dataRef.current.firstName.value,
            lastName: dataRef.current.lastName.value, 
            address: dataRef.current.address.value, 
            country: dataRef.current.country.value, 
            email: dataRef.current.email.value, 
            telephone: dataRef.current.telephone.value,
            additional: dataRef.current.additional.value
        }
        
        const formData = {
            data
        }

        getFormData(formData);

        
    }

    const setDataRef = (name) => (e) => {
        dataRef.current[name] = e;
    };

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
                                    ref={setDataRef('firstName')} 
                                />
                            </div>

                            <div className={style.inputWrapper}>
                                <input
                                    type="text"
                                    name="lastName"
                                    className=""
                                    placeholder="Last Name"
                                    required
                                    ref={setDataRef('lastName')} 
                                />
                            </div>

                            <div className={style.inputWrapper}>
                                <input
                                    type="text"
                                    name="address"
                                    className=""
                                    placeholder="Address"
                                    required
                                    ref={setDataRef('address')} 
                                />
                            </div>

                            <div className={style.inputWrapper}>
                                <input
                                    type="text"
                                    name="country"
                                    className=""
                                    placeholder="Country"
                                    required
                                    ref={setDataRef('country')} 
                                />
                            </div>

                            <div className={style.inputWrapper}>
                                <input
                                    type="email"
                                    name="email"
                                    className=""
                                    placeholder="e-mail"
                                    required
                                    ref={setDataRef('email')} 
                                />
                            </div>

                            <div className={style.inputWrapper}>
                                <input
                                    type="number"
                                    name="telephone"
                                    className=""
                                    placeholder="Telephone"
                                    required
                                    ref={setDataRef('telephone')} 
                                />
                            </div>

                            <div className={style.inputWrapper}>
                                <input
                                    type="text"
                                    name="additional"
                                    className=""
                                    placeholder="Additional Informations"
                                    ref={setDataRef('additional')} 
                                />
                            </div>


                        </div>

                        <button className={style.orderButton} type="submit">Place an order</button>
                    </form>
                </div>
        </>
    )
}